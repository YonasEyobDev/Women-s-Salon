import { Star } from 'lucide-react'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import { reviews } from '@/config'

export default function Reviews() {
  return (
    <Section id="reviews" eyebrow="Reviews" title="Loved by our clients">
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 120} className="h-full">
            <figure className="card-lux h-full p-8">
              <div className="text-champagne flex gap-1" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, n) => (
                  <Star key={n} size={18} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 text-dim">“{r.text}”</blockquote>
              <figcaption className="f-head text-champagne mt-5 text-xl">{r.name}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}