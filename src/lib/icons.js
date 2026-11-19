import { Sparkles, MessageCircle, Heart, Scissors, ShieldCheck, Gem } from 'lucide-react'

// Add more here if you use new icon names in config.js
const icons = { Sparkles, MessageCircle, Heart, Scissors, ShieldCheck, Gem }

export function getIcon(name) {
  return icons[name] || Sparkles
}