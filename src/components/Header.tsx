import { useEffect, useState } from 'react'
import { candidate, nav } from '../data/candidate'
import '../styles/Header.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--solid' : ''} ${open ? 'header--open' : ''}`}>
      <div className="container header__bar">
        <a href="#inicio" className="header__brand" onClick={handleNavClick}>
          <picture>
            <source srcSet="/images/brand-mark.webp" type="image/webp" />
            <img src="/images/brand-mark.png" alt="" className="header__mark" width={36} height={36} />
          </picture>
          <span className="header__name">Juliane Vieira</span>
          <span className="header__number">{candidate.number}</span>
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href={candidate.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary header__cta">
            Fale comigo
          </a>
          <button
            type="button"
            className="header__burger"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="header__mobile" role="dialog" aria-modal="true">
        <nav className="header__mobile-nav" aria-label="Navegação mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={handleNavClick}>
              {item.label}
            </a>
          ))}
          <a
            href={candidate.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary header__mobile-cta"
            onClick={handleNavClick}
          >
            Fale comigo
          </a>
        </nav>
      </div>
    </header>
  )
}
