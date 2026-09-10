import { story } from '../data/candidate'
import { Reveal } from './Reveal'
import '../styles/Story.css'

export function Story() {
  return (
    <section id="minha-historia" className="section story">
      <div className="container">
        <Reveal className="story__intro">
          <span className="eyebrow">{story.eyebrow}</span>
          <h2 className="section-heading">{story.heading}</h2>
          <p className="section-lede">{story.intro}</p>
        </Reveal>

        <div className="story__timeline">
          {story.milestones.map((milestone, index) => (
            <Reveal key={milestone.title} className="story__item" delay={index * 120}>
              <div className="story__marker">
                <span className={`story__dot ${index % 2 === 1 ? 'story__dot--pink' : ''}`} />
              </div>
              <div className="story__card">
                <span className="story__tag">{milestone.tag}</span>
                <h3 className="story__title">{milestone.title}</h3>
                {milestone.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
