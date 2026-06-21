export type FutureServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const futureServices: FutureServiceItem[] = [
  {
    id: 'brakes',
    title: 'Brake Service',
    description:
      'Squeaking, grinding, vibration, or weak stopping power — future brake support focused on clear inspection and practical recommendations.',
    image:
      'https://images.unsplash.com/photo-1619642759868-65b766332586?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Mechanic inspecting vehicle brake components',
  },
  {
    id: 'ac',
    title: 'Air Conditioning',
    description:
      'Warm air and weak airflow are common in Tennessee heat. Quick In Auto will help diagnose A/C concerns with clear next steps.',
    image:
      'https://images.unsplash.com/photo-1625047509168-ae42f4b576b5?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Technician checking vehicle air conditioning system',
  },
  {
    id: 'cooling',
    title: 'Cooling System',
    description:
      'Overheating, coolant leaks, fans, hoses, and radiator concerns — checked with care when services launch.',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Cooling system service under the hood',
  },
  {
    id: 'battery',
    title: 'Battery & Electrical',
    description:
      'Battery, alternator, starter, and basic electrical diagnostics for everyday driving reliability.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Automotive battery and electrical testing',
  },
  {
    id: 'repair',
    title: 'Light Auto Repair',
    description:
      'Minor repairs and maintenance-focused service designed to help keep your vehicle dependable.',
    image:
      'https://images.unsplash.com/photo-1487754180451-c74797666701?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Mechanic performing light auto repair',
  },
  {
    id: 'diagnostics',
    title: 'Vehicle Diagnostics',
    description:
      'Clear evaluations and practical recommendations before unnecessary work is done.',
    image:
      'https://images.unsplash.com/photo-1581093458791-9f3023066e32?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Technician using diagnostic equipment',
  },
];

/** Modest local garage visual — not a luxury dealership */
export const heroImage =
  'https://images.unsplash.com/photo-1487754180451-c74797666701?w=1200&q=85&auto=format&fit=crop';

export const facilityPlaceholders = [
  {
    title: 'Exterior Photos Coming Soon',
    text: 'The completed Quick In Auto building and signage will appear here once the location is ready.',
  },
  {
    title: 'Service Bay Photos Coming Soon',
    text: 'Real photos of the tools, work bays, and service setup will be added after completion.',
  },
  {
    title: 'Opening Day Video Coming Soon',
    text: 'A closer look at the new Quick In Auto location will be shared as opening approaches.',
  },
] as const;

export const openingInterestOptions = [
  'Brake Service',
  'Air Conditioning',
  'Diagnostics',
  'Light Auto Repair',
  'General Updates',
] as const;

export const robertBullets = [
  'Straightforward communication',
  'Practical, local service mindset',
  'Helping drivers understand what their vehicle needs',
  'Building confidence before opening day',
];
