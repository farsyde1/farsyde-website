import { Shield, ExternalLink } from 'lucide-react'
import { COMPANY } from '../data/company'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 text-lg font-extrabold tracking-widest text-white">
              <Shield className="text-accent-400" size={22} />
              FARSYDE LLC
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              {COMPANY.tagline} Specialized software engineering for defense and
              intelligence missions.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Connect
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/-/g, '')}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <ExternalLink size={15} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Corporate
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>NAICS: {COMPANY.primaryNaics} / {COMPANY.secondaryNaics}</li>
              <li>Active SAM.gov Registration</li>
              <li>TS/SCI Cleared Personnel</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>
            {COMPANY.domain} &middot; Small Business &middot; TS/SCI Cleared
          </p>
        </div>
      </div>
    </footer>
  )
}