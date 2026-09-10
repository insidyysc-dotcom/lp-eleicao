import { burnCenterTimeline } from '../data/candidate'
import { Reveal } from './Reveal'
import '../styles/BurnCenterTimeline.css'

export function BurnCenterTimeline() {
  return (
    <section id="ala-de-queimados" className="section burn-timeline">
      <div className="container">
        <Reveal className="burn-timeline__intro">
          <span className="eyebrow">{burnCenterTimeline.eyebrow}</span>
          <h2 className="section-heading">{burnCenterTimeline.heading}</h2>
          <p className="section-lede">{burnCenterTimeline.intro}</p>
        </Reveal>

        <div className="burn-timeline__track">
          {burnCenterTimeline.events.map((event, index) => (
            <Reveal
              key={event.year}
              className={`burn-timeline__event ${index % 2 === 1 ? 'burn-timeline__event--alt' : ''} ${
                event.year === 'Hoje' ? 'burn-timeline__event--today' : ''
              }`}
              delay={index * 90}
            >
              <div className="burn-timeline__year">{event.year}</div>
              <div className="burn-timeline__card">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="burn-timeline__impact">
          <p className="burn-timeline__quote">{burnCenterTimeline.quote}</p>
          <p className="burn-timeline__quote-support">{burnCenterTimeline.quoteSupport}</p>
        </Reveal>
      </div>
    </section>
  )
}
