/**
 * OpenAI Ads Conversions API (CAPI) - Server-side Helper
 * 
 * Executa exclusivamente no servidor (Node.js).
 * Envia o evento 'lead_created' diretamente para a API de Conversões da OpenAI.
 * 
 * @param {Object} params
 * @param {string} params.eventId - ID único do evento (UUID) para deduplicação com o Pixel
 * @param {string} [params.sourceUrl] - URL da página onde a conversão ocorreu
 * @returns {Promise<{ success: boolean, status?: number, error?: string }>}
 */
export async function sendOpenAIConversionEvent({ eventId, sourceUrl }) {
  const pixelId = process.env.OPENAI_PIXEL_ID;
  const apiKey = process.env.OPENAI_CONVERSIONS_API_KEY;

  if (!pixelId || !apiKey) {
    // Configuração pendente: log técnico mínimo sem expor segredos
    console.warn('[OpenAI CAPI] OPENAI_PIXEL_ID ou OPENAI_CONVERSIONS_API_KEY não configurados. Evento ignorado no servidor.');
    return { success: false, reason: 'missing_credentials' };
  }

  const endpoint = `https://bzr.openai.com/v1/events?pid=${encodeURIComponent(pixelId)}`;

  const payload = {
    validate_only: false,
    events: [
      {
        id: eventId,
        type: 'lead_created',
        timestamp_ms: Date.now(),
        source_url: sourceUrl || 'https://enimble.pt/contactos',
        action_source: 'web',
        data: {
          type: 'customer_action',
        },
      },
    ],
  };

  try {
    // Timeout de 4 segundos para assegurar que a resposta do formulário nunca fica bloqueada
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      // Registo técnico mínimo sem expor headers, payload ou chaves
      console.error(`[OpenAI CAPI] Erro de resposta: HTTP ${response.status}`);
      return { success: false, status: response.status };
    }

    return { success: true, status: response.status };
  } catch (error) {
    // Falha de rede ou timeout (não impede o sucesso do formulário)
    console.error('[OpenAI CAPI] Erro ao comunicar com endpoint:', error?.name === 'AbortError' ? 'Timeout (4s)' : (error?.message || 'Erro desconhecido'));
    return { success: false, error: error?.message };
  }
}
