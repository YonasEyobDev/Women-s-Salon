import { MessageCircle, MapPin } from 'lucide-react'
import Container from '@/components/Container'
import { shop, gallery } from '@/config'
import { wa } from '@/lib/whatsapp'
import { getTodayStatus } from '@/lib/hours'
import { svgFallback } from '@/lib/img'

export default function Hero() {
  const status = getTodayStatus()
  const heroImage = gallery[5] || gallery[0]

  return (
    <section className="relative overflow-hidden pt-12 pb-10 lg:pt-20">
      {/* soft rose glow behind the hero */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, #f4a6b8, transparent 70%)' }}
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <div className="rise" style={{ '--d': '0ms' }}>
            <span className="open-pill">
              <span className={`pulse-dot ${status.closed ? 'is-closed' : ''}`} />
              {status.text}
            </span>
          </div>

          <h1
            className="rise f-head mt-6 text-5xl font-bold leading-tight md:text-7xl"
            style={{ '--d': '120ms' }}
          >
            {shop.name}
          </h1>

          <p
            className="rise f-head gradient-text mt-3 text-2xl italic md:text-3xl"
            style={{ '--d': '240ms' }}
          >
            {shop.tagline}
          </p>

          <p
            className="rise mt-5 flex items-center justify-center gap-2 text-dim lg:justify-start"
            style={{ '--d': '360ms' }}
          >
            <MapPin size={16} className="text-rose" /> {shop.address}
          </p>

          <div
            className="rise mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            style={{ '--d': '480ms' }}
          >
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-pill">
              <MessageCircle size={18} /> Book on WhatsApp
            </a>
            <a href="#services" className="btn-ghost">
              See services
            </a>
          </div>
        </div>

        <div className="rise relative mx-auto w-full max-w-md" style={{ '--d': '400ms' }}>
          <div className="card-lux overflow-hidden p-2">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              onError={svgFallback}
              className="aspect-square w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>
      </Container>

      {/* animated gradient ribbon */}
      <Container className="mt-10">
        <div className="ribbon" />
      </Container>
    </section>
  )
}