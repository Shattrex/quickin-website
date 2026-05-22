/**
 * Site-wide contact and business details — edit here to update everywhere.
 */
export const site = {
  businessName: 'Quick In Auto',
  tagline: 'Specializing in Brakes and Air Conditioning',
  phone: '(423) 555-0198',
  phoneHref: 'tel:+14235550198',
  email: 'service@quickinauto.com',
  emailHref: 'mailto:service@quickinauto.com',
  address: {
    line1: '1234 E Morris Blvd',
    cityStateZip: 'Morristown, TN 37813',
    full: '1234 E Morris Blvd, Morristown, TN 37813',
  },
  /** Google Maps directions URL — replace with real place ID/link later */
  directionsHref:
    'https://www.google.com/maps/search/?api=1&query=1234+E+Morris+Blvd+Morristown+TN+37813',
  city: 'Morristown',
  state: 'Tennessee',
} as const;
