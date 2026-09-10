import { issues } from '../data/candidate'
import { Reveal } from './Reveal'
import '../styles/Issues.css'

export function Issues() {
  return (
    <section id="pautas" className="section issues">
      <div className="container">
        <Reveal className="issues__intro">
          <span className="eyebrow">{issues.eyebrow}</span>
          <h2 className="section-heading">{issues.heading}</h2>
        </Reveal>

        <div className="issues__grid">
          {issues.items.map((issue, index) => (
            <Reveal
              key={issue.title}
              as="article"
              className={`issues__card ${index % 2 === 1 ? 'issues__card--pink' : ''}`}
              delay={(index % 3) * 90}
            >
              <span className="issues__tag">{issue.tag}</span>
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
