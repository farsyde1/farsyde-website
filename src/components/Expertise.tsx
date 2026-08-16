import { Satellite, Layers } from 'lucide-react'

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative scroll-mt-16 overflow-hidden border-y border-white/5 bg-navy-900 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(56,189,248,0.08), transparent 40%), radial-gradient(circle at 90% 80%, rgba(59,130,246,0.08), transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">
            Engineering Expertise
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Deep Domain Experience
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-navy-950/60 p-8">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/15 text-accent-300">
              <Satellite size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white">
              C4ISR &amp; Intelligence Data Workflows
            </h3>
            <p className="mt-4 leading-relaxed text-slate-300">
              Customization and deployment of advanced situational awareness
              platforms and geospatial analytics tools for defense customers.
              FARSYDE engineers bridge raw intelligence feeds to operational
              decision-making through modern, performant data workflows.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                Advanced situational awareness platform deployment
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                Geospatial analytics tools for defense customers
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                Intelligence feed integration and data workflow optimization
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-navy-950/60 p-8">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/15 text-accent-300">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white">
              Enterprise Requirements Management
            </h3>
            <p className="mt-4 leading-relaxed text-slate-300">
              Collaboration with internal directorates and sister agencies to
              define, baseline, and manage mission-critical capabilities —
              translating national security objectives into disciplined,
              executable technical requirements.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                Directorate &amp; sister agency requirements collaboration
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                Baseline definition and management of capabilities
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                Program funding framework integration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}