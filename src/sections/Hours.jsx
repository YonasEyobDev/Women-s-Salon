import { MapPin, Phone, MessageCircle } from 'lucide-react'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import { hours, shop } from '@/config'
import { wa, tel } from '@/lib/whatsapp'
import { getTodayStatus } from '@/lib/hours'

export default function Hours() {
  const status = getTodayStatus()

  return (
    <Section
      id="hours"
      eyebrow="Hours and location"
      title="Come and visit"
      subtitle={shop.address}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="card-lux h-full p-6 md:p-8">
            <h3 className="f-head text-champagne mb-4 text-3xl font-semibold">Opening hours</h3>
            <ul className="space-y-1">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className={`flex items-center justify-between px-4 py-3 ${
                    h.day === status.day ? 'today-row' : ''
                  }`}
                >
                  <span className="font-medium">
                    {h.label}
                    {h.day === status.day && (
                      <span className="text-rose ml-2 text-xs uppercase tracking-widest">Today</span>
                    )}
                  </span>
                  <span className="text-dim">{h.open ? `${h.open} to ${h.close}` : 'Closed'}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <div className="card-lux flex h-full flex-col justify-center p-6 text-center md:p-8">
            <span className="icon-bubble mx-auto">
              <MapPin size={24} />
            </span>
            <h3 className="f-head mt-5 text-3xl font-semibold">Find us</h3>
            <p className="mt-2 text-dim">{shop.address}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={shop.mapLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <MapPin size={18} /> Directions
              </a>
              <a href={tel()} className="btn-ghost">
                <Phone size={18} /> Call us
              </a>
              <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-pill">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}