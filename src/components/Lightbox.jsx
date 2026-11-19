import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { svgFallback } from '@/lib/img'

// Full-screen viewer. Closes with the X, the Esc key, or a click outside the picture.
export default function Lightbox({ images, index, onClose, onIndex }) {
  const total = images.length
  const current = images[index]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onIndex((index - 1 + total) % total)
      if (e.key === 'ArrowRight') onIndex((index + 1) % total)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, total, onClose, onIndex])

  // Stop the page behind from scrolling while the viewer is open
  useEffect(() => {
    const old = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = old
    }
  }, [])

  const stop = (e) => e.stopPropagation()
  const btn =
    'absolute flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--ink)] transition hover:border-[color:var(--rose)]'

  return (
    <div
      className="lightbox-backdrop fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        className={`${btn} right-4 top-4`}
        onClick={(e) => {
          stop(e)
          onClose()
        }}
      >
        <X size={22} />
      </button>

      <button
        type="button"
        aria-label="Previous photo"
        className={`${btn} left-3 top-1/2 -translate-y-1/2`}
        onClick={(e) => {
          stop(e)
          onIndex((index - 1 + total) % total)
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <img
        key={index}
        src={current.src}
        alt={current.alt}
        onError={svgFallback}
        onClick={stop}
        className="swap-in max-h-[85vh] max-w-[88vw] rounded-2xl object-contain"
      />

      <button
        type="button"
        aria-label="Next photo"
        className={`${btn} right-3 top-1/2 -translate-y-1/2`}
        onClick={(e) => {
          stop(e)
          onIndex((index + 1) % total)
        }}
      >
        <ChevronRight size={24} />
      </button>

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-dim">
        {index + 1} / {total}
      </p>
    </div>
  )
}