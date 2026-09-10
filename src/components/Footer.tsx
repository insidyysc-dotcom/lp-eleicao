import { candidate, footer, nav } from '../data/candidate'
import '../styles/Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <picture>
            <source srcSet="/images/logo-juliane.webp" type="image/webp" />
            <img src="/images/logo-juliane.png" alt={`${footer.heading} - ${footer.role} - ${footer.number}`} width={160} />
          </picture>
          <p className="footer__tagline">{footer.tagline}</p>
          <p className="footer__location">{footer.location}</p>
        </div>

        <nav className="footer__nav" aria-label="Links rápidos">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <a href={candidate.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp: {candidate.whatsappDisplay}
          </a>
          <a href={candidate.instagramUrl} target="_blank" rel="noreferrer">
            Instagram: {candidate.instagramHandle}
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>
            © {new Date().getFullYear()} {footer.heading} — {footer.role} {footer.number}
          </span>
          {footer.legalPlaceholder && <span>{footer.legalPlaceholder}</span>}
        </div>
      </div>
    </footer>
  )
}
