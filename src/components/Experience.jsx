import SecHead from './SecHead.jsx'
import { education, experience } from '../data/content.js'

function Entry({ entry }) {
  return (
    <li className="tl" data-reveal>
      <div className="tl__when">
        <span className="tl__dates">{entry.dates}</span>
        {entry.current && <span className="tl__badge">Currently working</span>}
        {entry.meta && <span className="tl__meta">{entry.meta}</span>}
      </div>
      <div>
        <h4 className="tl__role">{entry.role}</h4>
        <p className="tl__org">{entry.org}</p>
        {entry.text && <p className="tl__text">{entry.text}</p>}
      </div>
    </li>
  )
}

export default function Experience() {
  return (
    <section className="band" id="experience" aria-labelledby="experience-title">
      <div className="shell">
        <SecHead
          index="06"
          label="Experience"
          id="experience-title"
          title="Work and education history."
          deck="Dates and titles exactly as they appear on the record — no inferred joining dates."
        />

        <div className="experience__block">
          <h3 className="tl__group-label">Experience</h3>
          <ul className="timeline">
            {experience.map((entry) => (
              <Entry entry={entry} key={`${entry.role}-${entry.org}`} />
            ))}
          </ul>
        </div>

        <div className="experience__block">
          <h3 className="tl__group-label">Education</h3>
          <ul className="timeline">
            {education.map((entry) => (
              <Entry entry={entry} key={entry.role} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
