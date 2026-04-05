import { useState } from 'react'
import { NAV_LINKS } from '../data'

export default function Navbar({ active }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="nav">
      <a href="#hero" className="nav-logo">
        Mohamed <em>Aqeeb</em>
      </a>

      {/* Desktop links */}
      <ul className="nav-links">
        {NAV_LINKS.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className={active === l.toLowerCase() ? 'active' : ''}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className={`nav-burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav-drawer">
          {NAV_LINKS.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={active === l.toLowerCase() ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
