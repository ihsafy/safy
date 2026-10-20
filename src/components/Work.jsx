import SecHead from './SecHead.jsx'
import { projects } from '../data/content.js'

function LiveLink({ href }) {
  return (
    <a className="xlink xlink--live" href={href} target="_blank" rel="noopener noreferrer">
      Live Demo
      <span className="xlink__arrow" aria-hidden="true">
        ↗
      </span>
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  )
}

function RepoLink({ href }) {
  return (
    <a className="xlink" href={href} target="_blank" rel="noopener noreferrer">
      Repository
      <span className="xlink__arrow" aria-hidden="true">
        ↗
      </span>
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  )
}

export default function Work() {
  const [featured, ...rest] = projects

  return (
    <section className="band" id="work" aria-labelledby="work-title">
      <div className="shell">
        <SecHead
          index="03"
          label="Projects"
          id="work-title"
          title="Engineering work, described plainly."
          deck="Live links go to the real deployed applications. Nothing here is a mock-up."
        />

        {featured && (
          <article className="feat" data-reveal>
            <div className="feat__media">
              <span className="feat__badge">Featured</span>
              <img
                src={featured.image}
                alt={featured.imageAlt}
                width={1117}
                height={838}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="feat__body">
              <p className="feat__meta">
                <span className="accent">{featured.index}</span>
                <span aria-hidden="true">—</span>
                <span>{featured.category}</span>
              </p>
              <h3 className="feat__title">{featured.title}</h3>
              <p className="feat__text">{featured.description}</p>
              <ul className="feat__stack" aria-label="Technologies">
                {featured.stack.map((tech) => (
                  <li className="stack-chip" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
              <p style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                {featured.live && <LiveLink href={featured.live} />}
                {featured.repo && <RepoLink href={featured.repo} />}
              </p>
            </div>
          </article>
        )}

        <ul className="proj-list">
          {rest.map((project) => (
            <li className="proj-row" key={project.id} data-reveal>
              <article className="proj-row__inner">
                <span className="proj-row__idx">{project.index}</span>
                <h3 className="proj-row__title">{project.title}</h3>
                <div>
                  <p className="proj-row__text">{project.description}</p>
                  <ul className="proj-row__stack" aria-label="Technologies">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="proj-row__links">
                  {project.live && <LiveLink href={project.live} />}
                  {project.repo && <RepoLink href={project.repo} />}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
