import TechIcon, { hasIcon } from './TechIcon.jsx'
import { researchProfiles } from '../data/content.js'

/**
 * ResearchProfiles — a compact "Research Profiles" panel holding the two
 * academic links (Google Scholar, ResearchGate).
 *
 * Design notes:
 *   - It reuses the existing `.panel` pit-wall surface, so it matches the navy
 *     and red language without introducing a new visual pattern.
 *   - Two short ruled rows, not two large cards — deliberately compact.
 *   - Each link opens in a new tab with rel="noopener noreferrer".
 *   - No citation counts, publication counts, or metrics are shown: none were
 *     supplied, so none are invented.
 */
export default function ResearchProfiles() {
  return (
    <aside className="panel profiles" aria-labelledby="profiles-title">
      <div className="panel__head">
        <span id="profiles-title">Research Profiles</span>
        <span aria-hidden="true">{String(researchProfiles.length).padStart(2, '0')}</span>
      </div>

      <ul className="profiles__list">
        {researchProfiles.map((item) => (
          <li className="profiles__item" key={item.label}>
            <a
              className="profiles__link"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="profiles__icon" aria-hidden="true">
                {hasIcon(item.icon) ? (
                  <TechIcon slug={item.icon} size={18} />
                ) : (
                  <span className="profiles__dot" />
                )}
              </span>

              <span className="profiles__body">
                <span className="profiles__label">{item.label}</span>
                <span className="profiles__note">{item.note}</span>
              </span>

              <span className="profiles__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
