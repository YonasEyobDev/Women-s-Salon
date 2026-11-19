import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import { steps } from '@/config'
import { getIcon } from '@/lib/icons'

export default function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="How booking works"
      title="Three easy steps"
      subtitle="No login. No forms. Just WhatsApp."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => {
          const Icon = getIcon(s.icon)
          return (
            <Reveal key={s.title} delay={i * 120} className="h-full">
              <div className="card-lux h-full p-8 text-center">
                <p className="f-head gradient-text text-6xl font-bold">{i + 1}</p>
                <span className="icon-bubble mt-4">
                  <Icon size={24} />
                </span>
                <h3 className="f-head mt-5 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-dim">{s.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}