import { useState, type FormEvent } from 'react'
import { candidate, contact } from '../data/candidate'
import { submitLead } from '../lib/leads'
import { Reveal } from './Reveal'
import '../styles/Contact.css'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    try {
      await submitLead({ name, whatsapp, city })
      setStatus('sent')
      setName('')
      setWhatsapp('')
      setCity('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="section-contact">
      <div className="container contact__panel">
        <div className="contact__grid">
          <Reveal className="contact__intro">
            <span className="eyebrow eyebrow--light">{contact.eyebrow}</span>
            <h2 className="contact__heading">{contact.heading}</h2>
            {contact.paragraphs.map((p) => (
              <p key={p} className="contact__text">
                {p}
              </p>
            ))}

            <div className="contact__channels">
              <a
                href={candidate.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="contact__channel contact__channel--whatsapp"
              >
                <span>WhatsApp</span>
                <strong>{candidate.whatsappDisplay}</strong>
              </a>
              <a
                href={candidate.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="contact__channel contact__channel--instagram"
              >
                <span>Instagram</span>
                <strong>{candidate.instagramHandle}</strong>
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="contact__form-card">
            <p className="contact__form-note">{contact.formNote}</p>
            <form onSubmit={handleSubmit} noValidate>
              <label className="contact__field">
                <span>Seu nome</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Como você quer ser chamado"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label className="contact__field">
                <span>Seu WhatsApp</span>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="(45) 99999-9999"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </label>

              <label className="contact__field">
                <span>Sua cidade</span>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="Digite sua cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>

              <button type="submit" className="btn btn-primary contact__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
              </button>

              {status === 'sent' && (
                <p className="contact__feedback contact__feedback--ok" role="status">
                  Recebemos seus dados! Em breve entraremos em contato.
                </p>
              )}
              {status === 'error' && (
                <p className="contact__feedback contact__feedback--error" role="alert">
                  Não foi possível enviar agora. Tente novamente em instantes.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
