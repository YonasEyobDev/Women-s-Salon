import { useState } from 'react'
import { Clock } from 'lucide-react'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import { categories, services, shop } from '@/config'
import { wa, serviceMessage } from '@/lib/whatsapp'

export default function Services() {
  const [active, setActive] = useState('all')
  const shown = active === 'all' ? services : services.filter((s) => s.key === active)

  return (
    <Section
      id="services"
      eyebrow="Services and prices"
      title="Treat yourself"
      subtitle="Tap any service to book it on WhatsApp. Your message is typed for you."
    >
      <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            className={`tab ${active === c.key ? 'is-active' : ''}`}
            aria-pressed={active === c.key}
            onClick={() => setActive(c.key)}
          >
            {c.label}
          </button>
        ))}
      </Reveal>

      {/* key makes the list re-run the smooth swap animation on every tab change */}
      <div
        key={active}
        className={`swap-in grid gap-6 ${shown.length > 1 ? 'md:grid-cols-2' : 'mx-auto max-w-2xl'}`}
      >
        {shown.map((cat) => (
          <div key={cat.key} className="card-lux p-6 md:p-8">
            <h3 className="f-head text-champagne mb-2 text-3xl font-semibold">{cat.label}</h3>
            <ul className="divide-y divide-[color:var(--line)]">
              {cat.items.map((item) => (
                <li key={item.name}>
                  <a
                    href={wa(serviceMessage(item.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-group flex items-center justify-between gap-4 py-4"
                  >
                    <span className="min-w-0">
                      <span className="u-hover font-medium">{item.name}</span>
                      <span className="mt-1 flex items-center gap-1 text-sm text-dim">
                        <Clock size={13} /> {item.duration}
                      </span>
                    </span>
                    <span className="shrink-0 text-right">
                      <span className="text-champagne block font-bold">
                        {item.price.toLocaleString()} {shop.currency}
                      </span>
                      <span className="text-rose text-xs">Book</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}