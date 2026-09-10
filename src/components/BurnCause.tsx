import { burnCause } from '../data/candidate'
import { Reveal } from './Reveal'
import '../styles/BurnCause.css'

export function BurnCause() {
  return (
    <section id="causa-dos-queimados" className="section burn-cause">
      <div className="container burn-cause__grid">
        <div className="burn-cause__narrative">
          <Reveal>
            <span className="eyebrow">{burnCause.eyebrow}</span>
            <h2 className="section-heading">{burnCause.heading}</h2>
          </Reveal>

          <Reveal delay={80} className="burn-cause__text">
            {burnCause.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <ul className="burn-cause__reports">
              {burnCause.reports.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>

            <p className="burn-cause__turning">{burnCause.turningPoint}</p>
            <p>{burnCause.action}</p>
          </Reveal>
        </div>

        <Reveal delay={120} className="burn-cause__panel">
          <h3>{burnCause.whyHeading}</h3>
          {burnCause.whyParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <div className="burn-cause__needs">
            {burnCause.needs.map((need) => (
              <span key={need.label} className="burn-cause__need">
                {need.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
