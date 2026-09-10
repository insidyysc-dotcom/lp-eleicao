import { candidate } from '../data/candidate'
import '../styles/Hero.css'

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--pink" />
        <span className="hero__blob hero__blob--blue" />
        <span className="hero__star hero__star--1">✦</span>
        <span className="hero__star hero__star--2">✦</span>
        <span className="hero__star hero__star--3">✦</span>
        <span className="hero__star hero__star--4">✦</span>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Deputada Estadual</span>

          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--white">Juliane</span>
            <span className="hero__title-line hero__title-line--pink">Vieira</span>
          </h1>

          <div className="hero__flag">
            <span className="hero__flag-icon">
              <picture>
                <source srcSet="/images/brand-mark.webp" type="image/webp" />
                <img src="/images/brand-mark.png" alt="" width={22} height={22} />
              </picture>
            </span>
            Na luta por um hospital de queimados
          </div>

          <p className="hero__subtitle">{candidate.tagline}</p>

          <div className="hero__row">
            <div className="hero__number" aria-label={`Número ${candidate.number}`}>
              <span className="hero__number-blue">15</span>
              <span className="hero__number-pink">777</span>
            </div>

            <div className="hero__actions">
              <a href={candidate.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Falar no WhatsApp
              </a>
              <a href="#minha-historia" className="btn btn-ghost">
                Conheça a história
              </a>
            </div>
          </div>
        </div>

        <div className="hero__photo">
          <div className="hero__photo-stage" aria-hidden="true">
            <span className="hero__photo-ring" />
            <span className="hero__photo-disc" />
            <span className="hero__photo-shadow" />
          </div>
          <picture>
            <source srcSet="/images/foto-juliane.webp" type="image/webp" />
            <img
              src="/images/foto-juliane.png"
              alt="Juliane Vieira, candidata a Deputada Estadual, sorrindo"
              className="hero__photo-img"
              width={1100}
              height={1555}
              fetchPriority="high"
            />
          </picture>
        </div>
      </div>

      <a href="#quem-e" className="hero__scroll" aria-label="Rolar para a próxima seção">
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}
