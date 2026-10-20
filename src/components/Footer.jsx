import { nav, profile, socials } from '../data/content.js'
import { useDhakaClock } from '../hooks.js'

export default function Footer() {
  const time = useDhakaClock()

  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p className="site-footer__name">{profile.name}</p>

        <ul className="site-footer__links">
          {socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
                <span aria-hidden="true"> ↗</span>
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
          {nav.slice(1, 4).map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>

        <p className="site-footer__meta">
          © {new Date().getFullYear()} {profile.name} — {profile.location}
          {time && (
            <>
              <span aria-hidden="true"> · </span>
              <time>{time} BST</time>
            </>
          )}
        </p>
      </div>
    </footer>
  )
}
