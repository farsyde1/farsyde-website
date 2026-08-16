import { COMPANY } from '../data/company'

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-y border-white/5 bg-navy-900 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">
              About FARSYDE LLC
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Built for Speed. Ready for Mission.
            </h2>
          </div>
          <div className="space-y-4 leading-relaxed text-slate-300">
            <p>
              {COMPANY.name} is a specialized software engineering firm
              delivering rapid, secure, and resilient solutions for the
              Department of Defense, the Intelligence Community, and prime
              contractors. Our name reflects the boundary condition — the
              edge where requirements become deployed capability.
            </p>
            <p>
              We are built on modern architectures and disciplined engineering
              practices, providing defense and intelligence organizations with
              the code-level rigor, cleared talent, and mission focus required
              to bridge critical capability gaps.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}