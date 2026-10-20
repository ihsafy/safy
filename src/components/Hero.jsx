import { profile } from '../data/content.js'
import { useDhakaClock } from '../hooks.js'
import SplitWords from './SplitWords.jsx'

/**
 * Hero — asymmetric race-briefing composition on a carbon ground.
 *
 * CRITICAL: the <h1> and every piece of hero copy live INSIDE the elements
 * that carry `data-reveal`. That is what prevents the "blank hero" bug — the
 * reveal system only animates elements it can see and control, and anything
 * on screen at first paint is shown immediately without animating.
 *
 * There is no fixed/min height here, so content can never be pushed out of
 * the viewport by a competing height rule.
 */
export default function Hero() {
  const time = useDhakaClock()

  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="shell">
        {/* Status bar: the reveal target WRAPS the content */}
        <div className="hero__top" data-reveal>
          <p className="hero__status">
            <span className="hero__pulse" aria-hidden="true" />
            Available for opportunities
          </p>
          <p className="hero__loc">
            {profile.location}
            {time && (
              <>
                <span aria-hidden="true"> · </span>
                <span>{time} BST</span>
              </>
            )}
          </p>
        </div>

        <div className="hero__grid">
          {/* ---- Identity column ---- */}
          <div data-reveal>
            <h1 className="hero__name" id="hero-name">
              <span className="hero__name-line">
                <SplitWords text="Iqbal Hossain" step={70} />
              </span>
              <span className="hero__name-line is-accent">
                <SplitWords text="Safy" start={220} step={70} />
              </span>
            </h1>

            <p className="hero__position">
              {profile.positioning.map((part, i) => (
                <span key={part} style={{ display: 'contents' }}>
                  {i > 0 && <span className="dot" aria-hidden="true" />}
                  <span>{part}</span>
                </span>
              ))}
            </p>

            <p className="hero__intro">
              I build web applications and intelligent systems, with a focus on
              machine learning and computer vision. Alongside that, I test
              applications professionally —{' '}
              <strong>evaluating functionality, identifying issues</strong> and
              helping improve software quality and user experience.
            </p>

            <div className="hero__actions">
              <a className="btn btn--solid" href="#work">
                <span className="btn__label">
                  View Projects
                  <span className="btn__arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
              <a className="btn btn--ghost" href="#contact">
                <span className="btn__label">Contact Me</span>
              </a>
            </div>
          </div>

          {/* ---- Portrait + supplied accent image ---- */}
          <div className="hero__aside" data-reveal data-delay="140">
            <div className="identity-card">
              <figure className="portrait">
                <img
                  src={profile.photo}
                  alt={profile.photoAlt}
                  width={profile.photoWidth}
                  height={profile.photoHeight}
                  fetchPriority="high"
                />
              </figure>
              <div className="identity-card__meta">
                <span className="identity-card__role">Current role</span>
                <span className="identity-card__name">App Tester</span>
                <span className="identity-card__org">Taraa AI Technology</span>
              </div>
            </div>

            {/* Supplied image, directly beneath the portrait. object-fit keeps
                the 16:9 frame intact — the subject is never cropped or stretched. */}
            <figure className="hero-figure">
              <img
                className="hero-figure__img"
                src={profile.heroImage}
                alt={profile.heroImageAlt}
                width={profile.heroImageWidth}
                height={profile.heroImageHeight}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>

        {/* ---- Telemetry strip: verified facts only ---- */}
        <ul className="hero__strip" data-reveal data-delay="200">
          {profile.facts.map((fact) => (
            <li key={fact.label}>
              <span className="hero__strip-k">{fact.label}</span>
              <span className="hero__strip-v">{fact.value}</span>
            </li>
          ))}
        </ul>

        <a className="hero__cue" href="#about">
          <span className="hero__cue-line" aria-hidden="true" />
          Scroll to explore
        </a>
      </div>
    </section>
  )
}
