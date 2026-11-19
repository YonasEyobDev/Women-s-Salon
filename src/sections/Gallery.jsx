import { useState } from 'react'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import Lightbox from '@/components/Lightbox'
import { gallery } from '@/config'
import { svgFallback } from '@/lib/img'

export default function Gallery() {
  const [index, setIndex] = useState(null)

  return (
    <Section
      id="gallery"
      eyebrow="Gallery"
      title="Our work"
      subtitle="Tap a photo to see it bigger."
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {gallery.map((img, i) => (
          <Reveal key={img.src} delay={(i % 3) * 100}>
            {/* a button, not a link: pictures open the lightbox, never WhatsApp */}
            <button
              type="button"
              aria-label={`Open photo: ${img.alt}`}
              onClick={() => setIndex(i)}
              className="card-lux block w-full overflow-hidden p-0"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onError={svgFallback}
                className="aspect-square w-full object-cover"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {index !== null && (
        <Lightbox
          images={gallery}
          index={index}
          onIndex={setIndex}
          onClose={() => setIndex(null)}
        />
      )}
    </Section>
  )
}