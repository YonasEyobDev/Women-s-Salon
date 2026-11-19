import { hours } from '@/config'

const toMinutes = (t) => {
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}

// Returns today's status for the "Open today" pill and the hours list
export function getTodayStatus(now = new Date()) {
  const day = now.getDay() // 0 = Sunday
  const today = hours.find((h) => h.day === day)

  if (!today || !today.open) {
    return { text: 'Closed today', closed: true, day }
  }

  const mins = now.getHours() * 60 + now.getMinutes()
  const openNow = mins >= toMinutes(today.open) && mins < toMinutes(today.close)

  return {
    text: `Open today ${today.open} to ${today.close}`,
    closed: !openNow, // the dot turns rose when we are not open right now
    day,
  }
}