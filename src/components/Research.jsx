import { useState } from 'react'
import SecHead from './SecHead.jsx'
import CertificateModal from './CertificateModal.jsx'
import ResearchProfiles from './ResearchProfiles.jsx'
import { research, certificate } from '../data/content.js'

/**
 * Research — two clearly separated blocks:
 *
 *   1. Recognition: the ICIDA 2025 Certificate of Presentation with a small,
 *      readable preview and an accessible full-size viewer.
 *   2. Publications: the ruled bibliography of papers and datasets.
 *
 * The certificate is the SAME paper as research entry 01, so it is presented
 * here as the conference record of that work — not as a separate publication.
 */
export default function Research() {
  const [open, setOpen] = useState(false)

  return (
    <section className="band" id="research" aria-labelledby="research-title">
      <div className="shell">
        <SecHead
          index="05"
          label="Research"
          title="Presented work, papers, and datasets."
          deck="Publication status exactly as reported — nothing added, nothing inflated."
        />

        {/* ---- Recognition: ICIDA 2025 certificate ---- */}
        <article className="award" data-reveal>
          <div className="award__media">
            <img
              src={certificate.image}
              alt={certificate.imageAlt}
              width="1080"
              height="883"
              decoding="async"
            />
            <button
              type="button"
              className="award__zoom"
              onClick={() => setOpen(true)}
            >
              View Certificate
              <span aria-hidden="true">⤢</span>
            </button>
          </div>

          <div className="award__body">
            <span className="award__flag">{certificate.label}</span>
            <p className="award__paper">Presented paper: {certificate.paperTitle}</p>
            <p className="award__text">{certificate.description}</p>

            <dl className="award__facts">
              <div className="facts__row">
                <dt className="facts__k">Conference</dt>
                <dd className="facts__v">
                  4th International Conference on Innovations in Data Analytics
                  (ICIDA 2025)
                </dd>
              </div>
              <div className="facts__row">
                <dt className="facts__k">Dates</dt>
                <dd className="facts__v">{certificate.dates}</dd>
              </div>
              <div className="facts__row">
                <dt className="facts__k">Contribution</dt>
                <dd className="facts__v">{certificate.contribution}</dd>
              </div>
              <div className="facts__row">
                <dt className="facts__k">Contributors</dt>
                <dd className="facts__v award__people">
                  {certificate.contributors.join(', ')}
                </dd>
              </div>
            </dl>
          </div>
        </article>

        {/* ---- Publications bibliography ---- */}
        <ol className="papers">
          {research.map((entry) => (
            <li className="paper" key={entry.index} data-reveal>
              <p className="paper__idx">{entry.index}</p>
              <div>
                <h3 className="paper__title">{entry.title}</h3>
                <ul className="paper__topics" aria-label="Topics">
                  {entry.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="paper__meta">
                <span className="paper__venue">{entry.venue}</span>
                <span
                  className={`paper__status${
                    entry.status.toLowerCase().includes('published') ? ' is-published' : ''
                  }`}
                >
                  {entry.status}
                </span>
                {entry.note && <span className="paper__note">{entry.note}</span>}
              </div>
            </li>
          ))}
        </ol>

        {/* ---- Academic profile links ---- */}
        <ResearchProfiles />
      </div>

      <CertificateModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
