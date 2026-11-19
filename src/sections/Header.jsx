import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '@/components/Container'
import { shop } from '@/config'
import { wa } from '@/lib/whatsapp'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#team', label: 'Team' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#hours', label: 'Hours' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header-blur sticky top-0 z-50">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="f-head gradient-text text-2xl font-bold">
          {shop.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill"
            style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}
          >
            Book Now
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="text-[color:var(--ink)] lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-[color:var(--line)] lg:hidden" aria-label="Mobile">
          <Container className="flex flex-col py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link py-3"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}