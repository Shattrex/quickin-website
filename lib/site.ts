/**
 * Quick In Auto & Airconditioning — editable business config.
 */
export const colors = {
  navy: '#002D62',
  navyDark: '#001F45',
  racingRed: '#E10600',
  racingRedDark: '#B80500',
  metallicGrey: '#A7A9AC',
  charcoal: '#1A1A1A',
  softWhite: '#F5F5F5',
  sectionGrey: '#EEF0F3',
} as const;

export const site = {
  businessName: 'QUICK IN',
  descriptor: 'Auto & Airconditioning',
  fullName: 'Quick In Auto & Airconditioning',
  tagline: 'Built for speed. Engineered for trust.',

  logoPath: '/logo.png',

  /** PLACEHOLDER — update when live number is confirmed */
  phone: '(423) 555-0198',
  phoneHref: 'tel:+14235550198',

  /** PLACEHOLDER — update when live email is confirmed */
  email: 'service@quickinauto.com',
  emailHref: 'mailto:service@quickinauto.com',

  /** PLACEHOLDER — update when hours are confirmed */
  hours: 'Mon–Fri: 8:00 AM – 5:00 PM · Sat: By appointment',

  city: 'Morristown',
  state: 'Tennessee',
  locationLabel: 'Morristown, Tennessee',

  /** PLACEHOLDER sample address */
  address: {
    line1: '1234 E Morris Blvd',
    cityStateZip: 'Morristown, TN 37813',
    full: '1234 E Morris Blvd, Morristown, TN 37813',
  },

  directionsHref:
    'https://www.google.com/maps/search/?api=1&query=Morristown+Tennessee',

  /** Google Drive intro video — embed + fallback view link */
  introVideoEmbedUrl:
    'https://drive.google.com/file/d/179BuWKr0wEiWkL9hBqTl7qTAhMKxzT-e/preview',
  introVideoViewUrl:
    'https://drive.google.com/file/d/179BuWKr0wEiWkL9hBqTl7qTAhMKxzT-e/view?usp=sharing',

  robertImage: '/robert.png',

  serviceRequestId: 'service-request',
  introVideoId: 'intro-video',
} as const;

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'A/C Diagnostics', href: '#ac-diagnostics' },
  { label: 'Brakes', href: '#brakes' },
  { label: 'Meet Robert', href: '#meet-robert' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const;
