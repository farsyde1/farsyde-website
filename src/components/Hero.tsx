import { Shield, Landmark, FileText, ArrowRight, Download } from 'lucide-react'
import { COMPANY } from '../data/company'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-950 pt-32 pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-steel-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-300">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-400" />
              {COMPANY.name} &middot; Federal Contractor
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Agile Code.
              <br />
              <span className="bg-gradient-to-r from-accent-400 to-steel-400 bg-clip-text text-transparent">
                Mission Ready Execution.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Specialized software engineering delivering rapid, secure, and
              resilient code-level solutions for the Department of Defense and
              Intelligence Community.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-slate-400">
              <span>Distributed Systems</span>
              <span className="text-slate-600">|</span>
              <span>Cloud-Native Pipelines</span>
              <span className="text-slate-600">|</span>
              <span>Systems Engineering</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-md bg-steel-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-steel-400"
              >
                Explore Capabilities
                <ArrowRight size={16} />
              </a>
              <a
                href={`/${COMPANY.name.replace(/\s+/g, '_')}_Capabilities_Statement.pdf`}
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Download size={16} />
                Download Capabilities Statement
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-navy-900 p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Registered &amp; Verified
            </p>
            <div className="mt-5 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-steel-500/15 text-steel-400">
                  <Shield size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Clearance</p>
                  <p className="text-sm font-semibold text-white">
                    TS/SCI Cleared Personnel
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-steel-500/15 text-steel-400">
                  <Landmark size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Active Registration</p>
                  <p className="text-sm font-semibold text-white">
                    SAM.gov Registered
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-steel-500/15 text-steel-400">
                  <FileText size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Primary NAICS</p>
                  <p className="font-mono text-sm font-semibold text-white">
                    {COMPANY.primaryNaics}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}