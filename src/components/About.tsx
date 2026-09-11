import { about, candidate } from '../data/candidate'
import { Reveal } from './Reveal'
import '../styles/About.css'

export function About() {
  return (
    <section id="quem-e" className="section about">
      <div className="container about__grid">
        <Reveal className="about__photo" as="div">
          <div className="about__photo-frame">
            <picture>
              <source srcSet="/images/foto-juliane.webp?v=2" type="image/webp" />
              <img
                src="/images/foto-juliane.png?v=2"
                alt="Juliane Vieira, advogada e candidata a Deputada Estadual"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="about__photo-badge">
            <strong>{candidate.number}</strong>
            <span>{candidate.role}</span>
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal>
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="section-heading">{about.heading}</h2>
          </Reveal>

          <Reveal delay={80} className="about__stats">
            {about.stats.map((stat) => (
              <div key={stat.label} className="about__stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={140} className="about__text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="about__closing">{about.closing}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
