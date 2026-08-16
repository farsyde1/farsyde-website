import { useState } from 'react'
import { Check, Copy, Landmark, Package } from 'lucide-react'
import { COMPANY } from '../data/company'

function CopyField({
  label,
  value,
  mono,
}: {
  label: string
  value: string
  mono?: boolean
}) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = value
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 py-4 last:border-b-0">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">
          {label}
        </p>
        <p className={`mt-1 font-semibold text-white ${mono ? 'font-mono' : ''}`}>
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-steel-500/50 hover:text-white"
      >
        {copied ? <Check size={14} className="text-accent-300" /> : <Copy size={14} />}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}

export default function CorporateData() {
  return (
    <section
      id="compliance"
      className="scroll-mt-16 border-y border-white/5 bg-navy-900 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">
              Procurement &amp; Corporate Data
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Compliance for Contracting Officers
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              FARSYDE LLC is classified under the NAICS codes below and
              maintains an active SAM.gov registration, ready for federal
              procurement, GSA schedules, and prime contractor teaming
              agreements. Copy any code for your solicitations and capture
              tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                <Landmark size={15} className="text-steel-400" />
                Active SAM Registration
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                <Package size={15} className="text-steel-400" />
                NAICS-Classified
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-navy-950/70 p-8">
            <h3 className="text-lg font-semibold text-white">Company Profile</h3>
            <div className="mt-2">
              <CopyField label="Legal Name" value={COMPANY.name} />
              <CopyField
                label={`Primary NAICS ${COMPANY.primaryNaics}`}
                value={COMPANY.primaryNaics}
                mono
              />
              <CopyField
                label={`Secondary NAICS ${COMPANY.secondaryNaics}`}
                value={COMPANY.secondaryNaics}
                mono
              />
            </div>
            <div className="mt-6 space-y-2 text-sm text-slate-400">
              <p>
                <span className="font-medium text-slate-200">541511</span> —{' '}
                {COMPANY.primaryNaicsLabel}
              </p>
              <p>
                <span className="font-medium text-slate-200">541512</span> —{' '}
                {COMPANY.secondaryNaicsLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}