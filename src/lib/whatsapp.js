import { shop } from '@/config'

// Build a wa.me link with a pre-typed, URL-encoded message
export function wa(message = shop.defaultMessage) {
  return `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(message)}`
}

// Phone call link
export function tel() {
  return `tel:+${shop.phone}`
}

// Message for a service row
export function serviceMessage(serviceName) {
  return `Hello ${shop.name}! I would like to book: ${serviceName}. Which times are available?`
}

// Message for a team member's "Book with NAME" button
export function teamMessage(memberName) {
  return `Hello ${shop.name}! I would like to book an appointment with ${memberName}.`
}