import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { sendOpenAIConversionEvent } from '@/lib/openai-capi';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, coffeeType, subject } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nome e email são obrigatórios.' },
        { status: 400 }
      );
    }

    // Validação / Geração do event_id para deduplicação segura entre Pixel e CAPI
    const validEventIdRegex = /^[a-zA-Z0-9_-]{8,128}$/;
    let finalEventId = typeof body.eventId === 'string' && validEventIdRegex.test(body.eventId)
      ? body.eventId
      : null;

    if (!finalEventId) {
      finalEventId = typeof crypto !== 'undefined' && crypto.randomUUID 
        ? crypto.randomUUID() 
        : `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    }

    // Sanitização do sourceUrl
    let sourceUrl = undefined;
    if (typeof body.sourceUrl === 'string' && body.sourceUrl.startsWith('http')) {
      try {
        const parsed = new URL(body.sourceUrl);
        sourceUrl = `${parsed.origin}${parsed.pathname}`;
      } catch (e) {
        sourceUrl = 'https://enimble.pt';
      }
    } else {
      sourceUrl = request.headers.get('referer') || 'https://enimble.pt';
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'geral@enimble.pt';
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn('RESEND_API_KEY não definida no ficheiro .env.local.');
      return NextResponse.json({
        success: true,
        simulated: true,
        eventId: finalEventId,
        message: 'Formulário submetido. Adicione RESEND_API_KEY no ficheiro .env.local para ativação total de envio de emails reais.',
      });
    }

    const emailSubject = subject 
      ? `[Novo Contacto - Website] Assunto: ${subject} (${name})`
      : `[Novo Contacto - Website] Mensagem de ${name}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 24px; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #3A00FF; margin-top: 0; font-size: 20px;">Novo Pedido de Contacto — ENimble</h2>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="margin: 8px 0;"><strong>Nome:</strong> ${name}</p>
        <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3A00FF;">${email}</a></p>
        <p style="margin: 8px 0;"><strong>Telemóvel / WhatsApp:</strong> ${phone || 'Não informado'}</p>
        ${coffeeType ? `<p style="margin: 8px 0;"><strong>Preferência de Café:</strong> ${coffeeType}</p>` : ''}
        ${subject ? `<p style="margin: 8px 0;"><strong>Assunto Escolhido:</strong> ${subject}</p>` : ''}
        <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #3A00FF; border-radius: 6px;">
          <strong style="color: #475569;">Mensagem do Cliente:</strong>
          <p style="white-space: pre-wrap; margin: 8px 0 0 0; color: #1e293b;">${message || 'Sem mensagem adicional.'}</p>
        </div>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0 16px 0;" />
        <small style="color: #94a3b8; font-size: 12px;">Email gerado automaticamente pelo formulário do website ENimble (enimble.pt).</small>
      </div>
    `;

    // Processa primeiro o envio do email através do Resend
    const data = await resend.emails.send({
      from: 'ENimble <geral@enimble.pt>',
      to: [recipientEmail],
      replyTo: email,
      subject: emailSubject,
      html: htmlContent,
    });

    // Apenas após envio bem-sucedido via Resend, envia evento lead_created para OpenAI CAPI
    try {
      await sendOpenAIConversionEvent({
        eventId: finalEventId,
        sourceUrl,
      });
    } catch (capiError) {
      console.error('[OpenAI CAPI] Falha no tracking em background:', capiError?.message);
    }

    return NextResponse.json({ success: true, eventId: finalEventId, data });
  } catch (error) {
    console.error('Erro ao enviar email via Resend:', error);
    return NextResponse.json(
      { error: error.message || 'Erro interno ao processar envio.' },
      { status: 500 }
    );
  }
}
