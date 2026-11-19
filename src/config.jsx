// ============================================================
// ALL CONTENT LIVES HERE. Change the shop name, phone and prices
// in this one file only.
// ============================================================

export const shop = {
  name: 'SALON NAME',
  tagline: 'Where every woman leaves glowing',
  address: 'AREA, CITY, COUNTRY',
  mapLink: 'https://maps.google.com/?q=YOUR+SALON+ADDRESS',
  whatsapp: '251900000000', // digits only, with country code, no + sign
  phone: '251900000000', // digits only, used for the Call button
  tiktok: 'https://tiktok.com/@yourhandle',
  currency: 'ETB',
  defaultMessage: 'Hello! I would like to book an appointment.',
}

// Tabs in the Services section. "key" must match the category keys below.
export const categories = [
  { key: 'all', label: 'All' },
  { key: 'hair', label: 'Hair' },
  { key: 'nails', label: 'Nails' },
  { key: 'skin', label: 'Skin' },
  { key: 'makeup', label: 'Makeup' },
  { key: 'bridal', label: 'Bridal' },
]

// SAMPLE services and prices. Replace with your real ones.
export const services = [
  {
    key: 'hair',
    label: 'Hair',
    items: [
      { name: 'Wash and Blow-dry', duration: '45 min', price: 400 },
      { name: 'Haircut and Style', duration: '60 min', price: 600 },
      { name: 'Braids', duration: '3 hrs', price: 1500 },
      { name: 'Hair Treatment', duration: '90 min', price: 1200 },
    ],
  },
  {
    key: 'nails',
    label: 'Nails',
    items: [
      { name: 'Classic Manicure', duration: '45 min', price: 350 },
      { name: 'Classic Pedicure', duration: '60 min', price: 450 },
      { name: 'Gel Polish', duration: '60 min', price: 700 },
    ],
  },
  {
    key: 'skin',
    label: 'Skin',
    items: [
      { name: 'Deep Cleansing Facial', duration: '60 min', price: 900 },
      { name: 'Glow Facial', duration: '75 min', price: 1300 },
    ],
  },
  {
    key: 'makeup',
    label: 'Makeup',
    items: [
      { name: 'Day Makeup', duration: '45 min', price: 800 },
      { name: 'Evening Glam', duration: '60 min', price: 1200 },
    ],
  },
  {
    key: 'bridal',
    label: 'Bridal',
    items: [
      { name: 'Bridal Makeup', duration: '2 hrs', price: 4000 },
      { name: 'Bridal Hair', duration: '2 hrs', price: 3000 },
      { name: 'Full Bridal Package', duration: '4 hrs', price: 6500 },
    ],
  },
]

// To use a real photo, change the extension, e.g. 1.svg -> 1.jpg.
// If the file is missing, the page falls back to the matching .svg.
export const gallery = [
  { src: '/gallery/1.svg', alt: 'Styled wavy hair with soft curls' },
  { src: '/gallery/2.svg', alt: 'Neat braided hairstyle' },
  { src: '/gallery/3.svg', alt: 'Pink manicure with glossy nails' },
  { src: '/gallery/4.svg', alt: 'Soft glam makeup look' },
  { src: '/gallery/5.svg', alt: 'Relaxing facial treatment' },
  { src: '/gallery/6.svg', alt: 'Bridal hair and makeup look' },
]

export const team = [
  { name: 'NAME ONE', role: 'Senior Hair Stylist', photo: '/team/stylist-1.svg', alt: 'Portrait of our senior hair stylist' },
  { name: 'NAME TWO', role: 'Nail and Skin Artist', photo: '/team/stylist-2.svg', alt: 'Portrait of our nail and skin artist' },
  { name: 'NAME THREE', role: 'Makeup and Bridal Artist', photo: '/team/stylist-3.svg', alt: 'Portrait of our makeup and bridal artist' },
]

export const reviews = [
  { name: 'Customer One', text: 'Best braids I have ever had. Neat, fast and they lasted for weeks.', rating: 5 },
  { name: 'Customer Two', text: 'The facial was so relaxing and my skin glowed for days. Booking on WhatsApp was easy.', rating: 5 },
  { name: 'Customer Three', text: 'They did my bridal makeup and I felt like a queen. Everyone asked who did it.', rating: 5 },
]

// day: 0 = Sunday ... 6 = Saturday. open/close are 24h "HH:MM". Use null for closed.
// The list is shown in this order (Monday first).
export const hours = [
  { day: 1, label: 'Monday', open: '09:00', close: '19:00' },
  { day: 2, label: 'Tuesday', open: '09:00', close: '19:00' },
  { day: 3, label: 'Wednesday', open: '09:00', close: '19:00' },
  { day: 4, label: 'Thursday', open: '09:00', close: '19:00' },
  { day: 5, label: 'Friday', open: '09:00', close: '19:00' },
  { day: 6, label: 'Saturday', open: '08:00', close: '20:00' },
  { day: 0, label: 'Sunday', open: '10:00', close: '17:00' },
]

export const faqs = [
  { q: 'How do I book an appointment?', a: 'Tap any Book button. It opens WhatsApp with a ready message. You can also call us.' },
  { q: 'Do I need to pay a deposit?', a: 'For bridal and long services we ask for a small deposit to hold your time. We will tell you on WhatsApp.' },
  { q: 'Can I reschedule?', a: 'Yes. Message us at least 12 hours before your time and we will move you to a new slot.' },
  { q: 'Do you offer bridal packages?', a: 'Yes. We do bridal hair, makeup and full packages. Message us with your date.' },
  { q: 'Which payment methods do you accept?', a: 'Cash and mobile money. Ask us on WhatsApp if you need another option.' },
]

// icon names are lucide-react icons, used by the sections
export const steps = [
  { title: 'Choose your service', text: 'Pick what you want from our services list.', icon: 'Sparkles' },
  { title: 'Message us on WhatsApp', text: 'Tap Book. Your message is already typed for you.', icon: 'MessageCircle' },
  { title: 'Come and glow', text: 'We confirm your time. Arrive and enjoy.', icon: 'Heart' },
]

export const perks = [
  { title: 'Skilled stylists', text: 'Experienced hands for hair, nails, skin and makeup.', icon: 'Scissors' },
  { title: 'Clean and calm', text: 'A tidy, relaxing space with sanitised tools.', icon: 'ShieldCheck' },
  { title: 'Quality products', text: 'Trusted products that are gentle and long lasting.', icon: 'Gem' },
  { title: 'Easy booking', text: 'Book in seconds on WhatsApp. No forms, no login.', icon: 'MessageCircle' },
]