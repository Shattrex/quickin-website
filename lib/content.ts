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
    image: '/services/brakes.jpg',
    imageAlt: 'Mechanic inspecting vehicle brake components',
  },
  {
    id: 'ac',
    title: 'Air Conditioning',
    description:
      'Warm air and weak airflow are common in Tennessee heat. Quick In Auto will help diagnose A/C concerns with clear next steps.',
    image: '/services/ac.jpg',
    imageAlt: 'Technician checking vehicle air conditioning system',
  },
  {
    id: 'cooling',
    title: 'Cooling System',
    description:
      'Overheating, coolant leaks, fans, hoses, and radiator concerns — checked with care when services launch.',
    image: '/services/cooling.jpg',
    imageAlt: 'Cooling system service under the hood',
  },
  {
    id: 'battery',
    title: 'Battery & Electrical',
    description:
      'Battery, alternator, starter, and basic electrical diagnostics for everyday driving reliability.',
    image: '/services/battery.jpg',
    imageAlt: 'Automotive battery and electrical testing',
  },
  {
    id: 'repair',
    title: 'Light Auto Repair',
    description:
      'Minor repairs and maintenance-focused service designed to help keep your vehicle dependable.',
    image: '/services/repair.jpg',
    imageAlt: 'Mechanic performing light auto repair',
  },
  {
    id: 'diagnostics',
    title: 'Vehicle Diagnostics',
    description:
      'Clear evaluations and practical recommendations before unnecessary work is done.',
    image: '/services/diagnostics.jpg',
    imageAlt: 'Technician using diagnostic equipment',
  },
];

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
