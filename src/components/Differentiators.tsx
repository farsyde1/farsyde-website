import { ShieldCheck, Target, Cpu } from 'lucide-react'

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: 'Cleared Engineering Personnel',
    description:
      'Principal engineers hold active TS/SCI clearances, enabling immediate integration into classified program work without onboarding delays.',
  },
  {
    icon: Target,
    title: 'Mission-Aligned Expertise',
    description:
      'Deep domain familiarity with defense analytics, high-throughput data pipelines, and enterprise requirements engineering.',
  },
  {
    icon: Cpu,
    title: 'Modern Engineering Stack',
    description:
      'Command of modern languages and rapid DevOps/infrastructure configuration tailored for secure, high-performance operational environments.',
  },
]

export default function Differentiators() {
  return (
    <section
      id="differentiators"
      className="scroll-mt-16 bg-navy-950 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">
            Corporate Differentiators
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Why Partner with FARSYDE
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-navy-900 p-8 transition-colors hover:border-accent-400/50"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/15 text-accent-300">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}