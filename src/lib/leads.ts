export interface LeadPayload {
  name: string
  whatsapp: string
  city: string
}

/**
 * Ponto único de integração para captação de leads do formulário de contato.
 * Ainda não há backend/endpoint definido — quando existir, substituir o corpo
 * desta função pela chamada real (fetch/API) sem alterar quem a consome.
 */
export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean }> {
  console.info('[lead] pronto para envio quando o backend existir:', payload)
  return { ok: true }
}
