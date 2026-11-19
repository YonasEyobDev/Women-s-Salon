import { MessageCircle, Phone } from 'lucide-react'
import { wa, tel } from '@/lib/whatsapp'

export default function FloatingBook() {
  return (
    <>
      {/* Phones: sticky bottom bar with WhatsApp and Call */}
      <div className="mobile-bar fixed inset-x-0 bottom-0 z-40 flex gap-3 px-4 pt-3 pb-3 md:hidden">
        <a
          href={wa()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill flex-1"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a href={tel()} className="btn-ghost flex-1">
          <Phone size={18} /> Call
        </a>
      </div>

      {/* Desktop: floating WhatsApp pill. "hidden" is on the wrapper, not the button. */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <a
          href={wa()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill float-book"
        >
          <MessageCircle size={18} /> Book on WhatsApp
        </a>
      </div>
    </>
  )
}