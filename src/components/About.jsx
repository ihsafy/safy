import SecHead from './SecHead.jsx'
import { about } from '../data/content.js'

export default function About() {
  return (
    <section className="band" id="about" aria-labelledby="about-title">
      <div className="shell">
        <SecHead
          index="01"
          label="About"
          id="about-title"
          title="A careful engineer with a research streak."
        />

        <div className="about__cols">
          <div data-reveal>
            <p className="about__lead">{about.lead}</p>
            <div className="about__body">
              <p>{about.body}</p>
              <p>{about.closing}</p>
            </div>
          </div>

          <dl className="facts" data-reveal data-delay="120">
            {about.details.map((detail) => (
              <div className="facts__row" key={detail.label}>
                <dt className="facts__k">{detail.label}</dt>
                <dd className="facts__v">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
