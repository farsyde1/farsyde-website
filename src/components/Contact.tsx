import { Mail, Phone } from 'lucide-react'
import { COMPANY } from '../data/company'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-navy-950 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">
              Partner With Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Let&rsquo;s Create Something Together
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              FARSYDE LLC is ready to support your mission. Reach out to
              discuss requirements, teaming opportunities, or contract vehicles.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-navy-900 p-5 transition-colors hover:border-steel-500/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-steel-500/15 text-steel-400">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="font-semibold text-white">{COMPANY.email}</p>
                </div>
              </a>
              <a
                href={`tel:${COMPANY.phone.replace(/-/g, '')}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-navy-900 p-5 transition-colors hover:border-steel-500/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-steel-500/15 text-steel-400">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="font-semibold text-white">{COMPANY.phone}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-navy-900 p-8">
            <h3 className="text-lg font-semibold text-white">
              Point of Contact
            </h3>
            <div className="mt-6 rounded-xl border border-white/10 bg-navy-950/60 p-6">
              <p className="text-lg font-semibold text-white">
                {COMPANY.pocName}
              </p>
              <p className="text-sm text-accent-300">{COMPANY.pocTitle}</p>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p className="flex items-center gap-2">
                  <Mail size={15} className="text-steel-400" />
                  {COMPANY.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={15} className="text-steel-400" />
                  {COMPANY.phone}
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Response to federal procurement and teaming inquiries typically
              within one business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}