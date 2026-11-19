// Use as: <img onError={svgFallback} />
// If 1.jpg is missing, it switches to 1.svg. It only tries once, so there is no loop.
export function svgFallback(e) {
  const img = e.currentTarget
  if (img.dataset.fallback || img.src.endsWith('.svg')) return
  img.dataset.fallback = '1'
  img.src = img.src.replace(/\.[a-z0-9]+(\?.*)?$/i, '.svg')
}