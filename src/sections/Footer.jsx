import { MessageCircle, Phone, Music2 } from 'lucide-react'
import Container from '@/components/Container'
import Reveal from '@/components/Reveal'
import { shop } from '@/config'
import { wa, tel } from '@/lib/whatsapp'

export default function Footer() {
  return (
    <>
      {/* Final call to action */}
      <section id="contact" className="py-10 lg:py-14">
        <Container>
          <Reveal>
            <div
              className="card-lux px-6 py-14 text-center md:px-16"
              style={{
                background:
                  'linear-gradient(135deg, rgba(244,166,184,0.16), rgba(224,169,143,0.10)), var(--surface)',
              }}
            >
              <h2 className="f-head text-4xl font-bold md:text-5xl">Ready to glow?</h2>
              <p className="mx-auto mt-4 max-w-xl text-dim">
                Message us on WhatsApp and we will find you a time that works.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-pill">
                  <MessageCircle size={18} /> Book on WhatsApp
                </a>
                <a href={tel()} className="btn-ghost">
                  <Phone size={18} /> Call us
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Footer. Extra bottom padding on phones so the sticky bar does not cover it. */}
      <footer className="border-t border-[color:var(--line)] pt-12 pb-28 md:pb-12">
        <Container className="flex flex-col items-center gap-6 text-center">
          <p className="f-head gradient-text text-3xl font-bold">{shop.name}</p>
          <p className="text-dim">{shop.tagline}</p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
              className="u-group text-champagne flex items-center gap-2"
            >
              <MessageCircle size={16} /> <span className="u-hover">Book on WhatsApp</span>
            </a>
            <a
              href={shop.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="u-group text-champagne flex items-center gap-2"
            >
              <Music2 size={16} /> <span className="u-hover">Follow us on TikTok</span>
            </a>
          </div>

          <p className="text-sm text-dim">
            © {new Date().getFullYear()} {shop.name}. All rights reserved.
          </p>
        </Container>
      </footer>
    </>
  )
}