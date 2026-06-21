/**
 * Quick In Auto — coming soon site config.
 * TODO: Add final phone number, email, address, official Facebook URL,
 * facility photos, Robert video, Kimberly HeyGen video, and opening date.
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

  openingStatus: 'Opening Soon',
  announcementText: 'Quick In Auto Is Coming Soon to Morristown, Tennessee',

  robertImage: '/robert.png',
  /** TODO: Replace with Kimberly's official photo when provided */
  kimberlyImage: '/kimberly.png',

  /** TODO: Replace with official Quick In Auto Facebook page URL */
  facebookHref: 'https://www.facebook.com/',

  /** TODO: Replace with HeyGen welcome video embed URL when ready */
  welcomeVideoEmbedUrl: null as string | null,

  openingUpdatesId: 'opening-updates',
  introVideoId: 'welcome-video',
  facilityId: 'coming-soon',
} as const;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Future Services', href: '#services' },
  { label: 'Meet Robert', href: '#meet-robert' },
  { label: 'Coming Soon', href: '#coming-soon' },
  { label: 'Contact', href: '#contact' },
] as const;
