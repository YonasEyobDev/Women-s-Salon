import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import { perks } from '@/config'
import { getIcon } from '@/lib/icons'

export default function WhyUs() {
  return (
    <Section
      id="why"
      eyebrow="Why choose us"
      title="Beauty, done with care"
      subtitle="Everything you need for a calm, easy visit."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((perk, i) => {
          const Icon = getIcon(perk.icon)
          return (
            <Reveal key={perk.title} delay={i * 100} className="h-full">
              <div className="card-lux h-full p-7 text-center">
                <span className="icon-bubble">
                  <Icon size={24} />
                </span>
                <h3 className="f-head mt-5 text-2xl font-semibold">{perk.title}</h3>
                <p className="mt-2 text-sm text-dim">{perk.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}