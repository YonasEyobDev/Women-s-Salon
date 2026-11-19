import { ChevronDown } from 'lucide-react'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import { faqs } from '@/config'

export default function FAQ() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions, answered">
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 80}>
            <details className="faq card-lux px-6 py-5">
              <summary className="u-group flex items-center justify-between gap-4 font-medium">
                <span className="u-hover">{f.q}</span>
                <ChevronDown className="chev text-rose shrink-0" size={20} />
              </summary>
              <p className="mt-3 text-dim">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}