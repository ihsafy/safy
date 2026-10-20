import { useEffect, useId, useState } from 'react'
import { nav, profile } from '../data/content.js'
import { useStuckHeader } from '../hooks.js'

export default function Header({ activeSection }) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const stuck = useStuckHeader()

  // Close the menu on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`site-header${stuck ? ' is-stuck' : ''}`}>
      <div className="shell site-header__inner">
        <a className="wordmark" href="#top">
          <span className="wordmark__mark" aria-hidden="true">
            IS
          </span>
          <span className="wordmark__name">{profile.name}</span>
        </a>

        <nav className="site-nav" aria-label="Sections">
          <ul className="site-nav__list">
            {nav.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'is-active' : undefined}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                >
                  <span className="site-nav__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="header-cta" href="#contact">
          Contact
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-toggle__bars" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="menu-toggle__label">{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      <div
        id={menuId}
        className={`mobile-menu${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Sections">
          <ul className="mobile-menu__list">
            {nav.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                >
                  <span className="mobile-menu__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
