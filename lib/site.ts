/**
 * Quick In Auto — coming soon site config.
 * TODO: Add final phone number, email, official Facebook URL,
 * facility photos, Robert video, and opening date.
 */
export const colors = {
  navy: '#002D62',
  navyDark: '#001F45',
  racingRed: '#E10600',
  racingRedDark: '#B80500',
  blueAccent: '#1E5A9E',
  metallicGrey: '#A7A9AC',
  charcoal: '#1A1A1A',
  softWhite: '#F5F5F5',
  sectionGrey: '#EEF0F3',
} as const;

export const site = {
  businessName: 'Quick In Auto',
  tagline: 'Specializing in Brakes and Air Conditioning',
  fullName: 'Quick In Auto',
  logoPath: '/logo.png',

  city: 'Morristown',
  state: 'Tennessee',
  locationLabel: 'Morristown, Tennessee',

  address: {
    line1: '1859 South Cumberland Street',
    cityStateZip: 'Morristown, Tennessee 37813',
    full: '1859 South Cumberland Street, Morristown, Tennessee 37813',
  },

  directionsHref:
    'https://www.google.com/maps/dir/?api=1&destination=1859+South+Cumberland+Street+Morristown+TN+37813',

  mapEmbedUrl:
    'https://maps.google.com/maps?q=1859+South+Cumberland+Street,+Morristown,+TN+37813&hl=en&z=16&output=embed',

  openingStatus: 'Opening Soon',
  announcementText: 'Quick In Auto Is Coming Soon to Morristown, Tennessee',

  robertImage: '/robert.png',
  facilityShopImage: '/facility-shop.png',

  /** Google Drive intro video (9:16 portrait) */
  welcomeVideoEmbedUrl:
    'https://drive.google.com/file/d/15vqgzZ00xfeboPYmTpp_ZguiU9-ubE56/preview',
  welcomeVideoViewUrl:
    'https://drive.google.com/file/d/15vqgzZ00xfeboPYmTpp_ZguiU9-ubE56/view?usp=sharing',

  openingUpdatesId: 'opening-updates',
  introVideoId: 'welcome-video',
  facilityId: 'coming-soon',
} as const;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Future Services', href: '#services' },
  { label: 'Meet Robert', href: '#meet-robert' },
  { label: 'Coming Soon', href: '#coming-soon' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
] as const;
