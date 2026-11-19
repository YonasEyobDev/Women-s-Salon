import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import { team } from '@/config'
import { wa, teamMessage } from '@/lib/whatsapp'
import { svgFallback } from '@/lib/img'

export default function Team() {
  return (
    <Section
      id="team"
      eyebrow="Our team"
      title="Meet your stylists"
      subtitle="Book with the person you prefer."
    >
      {/* three small cards in a row on phones */}
      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-3 md:gap-8">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 120} className="h-full">
            <div className="card-lux h-full overflow-hidden" style={{ borderRadius: '1.25rem' }}>
              {/* photo is not a link */}
              <img
                src={m.photo}
                alt={m.alt}
                loading="lazy"
                onError={svgFallback}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-2 text-center sm:p-5">
                <h3 className="f-head text-base font-semibold leading-tight sm:text-2xl">{m.name}</h3>
                <p className="mt-1 text-[0.65rem] leading-tight text-dim sm:text-sm">{m.role}</p>
                <a
                  href={wa(teamMessage(m.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book with ${m.name}`}
                  className="btn-pill mt-3"
                  style={{ padding: '0.4rem 0.9rem', fontSize: '0.75rem' }}
                >
                  <span className="sm:hidden">Book</span>
                  <span className="hidden sm:inline">Book with {m.name}</span>
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}