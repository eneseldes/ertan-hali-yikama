import { useState } from 'react'
import { business } from '../../data/content'
import { useScrollThreshold } from '../../hooks/useScrollThreshold'
import { MenuIcon, CloseIcon } from '../Icons/Icons'
import './Header.scss'

const NAV_LINKS = [
  { href: '#hizmetler', label: 'Hizmetlerimiz' },
  { href: '#neden-biz', label: 'Neden Biz?' },
  { href: '#nasil-calisir', label: 'Nasıl Çalışır?' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function Header() {
  const scrolled = useScrollThreshold(24)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--menu-open' : ''}`}>
      <div className="header__inner">
        <a href="#top" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-mark">EH</span>
          <span className="header__logo-text">{business.name}</span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="header__menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>
    </header>
  )
}
