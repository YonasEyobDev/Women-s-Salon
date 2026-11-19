// Endless scrolling band. The list is repeated so the -50% loop is seamless.
export default function Marquee({ items }) {
  const half = [...items, ...items]
  const row = [...half, ...half]

  return (
    <div className="marquee py-4" aria-hidden="true">
      <div className="marquee-track">
        {row.map((text, i) => (
          <span key={i} className="flex items-center gap-6 px-3 text-xl text-champagne f-head">
            {text}
            <span className="text-rose">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}