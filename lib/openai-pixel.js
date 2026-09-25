/**
 * OpenAI Ads Pixel - Client-side Helper
 * 
 * Dispara o evento 'lead_created' através da função global `oaiq`.
 * Garante que o event_id para deduplicação com a Conversions API (CAPI) é transmitido com segurança.
 *
 * @param {string} eventId - UUID único do evento para deduplicação
 */
export function trackLeadCreated(eventId) {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.oaiq === 'function') {
      // Dispara o evento lead_created passando o event_id nas opções para deduplicação
      window.oaiq(
        'measure',
        'lead_created',
        {
          type: 'customer_action',
        },
        {
          event_id: eventId,
        }
      );
    } else {
      console.warn('[OpenAI Pixel] Função oaiq não disponível no momento do disparo.');
    }
  } catch (error) {
    // Falha silenciosa para nunca quebrar a interface nem a experiência do utilizador
    console.warn('[OpenAI Pixel] Erro ao disparar lead_created:', error);
  }
}
