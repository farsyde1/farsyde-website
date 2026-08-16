import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { COMPANY } from '../data/company'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#differentiators', label: 'Differentiators' },
  { href: '#compliance', label: 'Compliance' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-lg font-extrabold tracking-widest text-white"
        >
          <span className="text-accent-400">F</span>ARSYDE
          <span className="text-sm font-medium tracking-normal text-slate-400">
            LLC
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`/${COMPANY.name.replace(/\s+/g, '_')}_Capabilities_Statement.pdf`}
            className="hidden items-center gap-2 rounded-md bg-steel-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-steel-400 lg:inline-flex"
          >
            <Download size={16} />
            Capabilities
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-slate-300 hover:text-white md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 px-6 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`/${COMPANY.name.replace(/\s+/g, '_')}_Capabilities_Statement.pdf`}
            className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white"
          >
            <Download size={16} />
            Download Capabilities Statement
          </a>
        </div>
      )}
    </header>
  )
}