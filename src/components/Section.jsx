import Container from '@/components/Container'
import Reveal from '@/components/Reveal'
import { Badge } from '@/components/ui/badge'

// Shared wrapper: centered title, small label, optional subtitle
export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-10 lg:py-14 ${className}`}>
      <Container>
        <Reveal className="mx-auto mb-8 max-w-2xl text-center">
          {eyebrow && (
            <Badge
              variant="outline"
              className="mb-3 border-[color:var(--line)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--rose)]"
            >
              {eyebrow}
            </Badge>
          )}
          <h2 className="f-head text-4xl font-bold md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-3 text-dim">{subtitle}</p>}
        </Reveal>
        {children}
      </Container>
    </section>
  )
}