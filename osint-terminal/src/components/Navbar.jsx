import { useState } from 'react'

const LINKS = [
  { label: '📱 Phone',   href: '#phone'   },
  { label: '🌐 IP Lookup', href: '#ip'    },
  { label: '⚛️ React Check', href: '#react' },
  { label: '📊 Traffic', href: '#traffic' },
  { label: '⚡ Speed',   href: '#speed'   },
  { label: '🚗 Vehicle', href: '#vehicle' },
]

export function Navbar({ utc }) {
  const [open, setOpen] = useState(false)

  function go(href) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-logo">OSINT<em>.</em>TERMINAL</div>
        <div className="nav-links">
          {LINKS.map(l => (
            <button key={l.href} className="nav-link" onClick={() => go(l.href)}>{l.label}</button>
          ))}
        </div>
        <div className="nav-right">{utc}</div>
        <button className={`nav-burger ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {LINKS.map(l => (
          <button key={l.href} className="nav-link" onClick={() => go(l.href)}>{l.label}</button>
        ))}
      </div>
    </nav>
  )
}
