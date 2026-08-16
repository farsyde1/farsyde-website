import { Network, Container, FileCheck2 } from 'lucide-react'

const COMPETENCIES = [
  {
    icon: Network,
    title: 'Distributed Systems & Data Pipelines',
    description:
      'High-throughput event streaming and ingestion for mission-critical intelligence and defense data.',
    points: [
      'Enterprise event streaming with Apache Kafka and Spring Boot',
      'High-performance data management with PostgreSQL/PostGIS',
      'Resilient, fault-tolerant pipeline architecture',
    ],
  },
  {
    icon: Container,
    title: 'Cloud-Native & Containerized Architecture',
    description:
      'Secure, portable, and repeatable infrastructure for sensitive operational environments.',
    points: [
      'Enterprise container orchestration with Kubernetes',
      'Declarative application deployment with Helm',
      'Infrastructure-as-code for secure environments',
    ],
  },
  {
    icon: FileCheck2,
    title: 'Requirements & Systems Engineering',
    description:
      'Structured, traceable requirements engineering tailored for national security missions.',
    points: [
      'Elicitation and baseline management of capability needs',
      'Capability tracking and program funding frameworks',
      'Architectural documentation for defense intelligence',
    ],
  },
]

export default function Competencies() {
  return (
    <section id="capabilities" className="scroll-mt-16 bg-navy-950 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">
            Core Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Engineering for the Mission
          </h2>
          <p className="mt-4 text-slate-300">
            FARSYDE LLC delivers code-level solutions across the full software
            lifecycle for DoD and IC customers — from data pipelines to
            deployed, containerized systems.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {COMPETENCIES.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-navy-900 p-8 transition-all duration-300 hover:border-steel-500/60 hover:bg-navy-800"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-steel-500/15 text-steel-400 transition-colors group-hover:bg-steel-500 group-hover:text-white">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}