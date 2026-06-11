import {
  Snowflake,
  Disc,
  Thermometer,
  Battery,
  Wrench,
  Gauge,
  type LucideIcon,
} from 'lucide-react';

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    id: 'ac',
    title: 'A/C Diagnostics & Repair',
    description:
      'Warm air, weak airflow, or inconsistent cooling? We diagnose the root cause before recommending repairs.',
    icon: Snowflake,
  },
  {
    id: 'brakes',
    title: 'Brake Service',
    description:
      'Squeaks, grinding, vibration, or weak stopping power — inspected clearly with safety-first estimates.',
    icon: Disc,
  },
  {
    id: 'cooling',
    title: 'Cooling System',
    description:
      'Overheating, coolant leaks, fans, hoses, and radiator concerns checked with care.',
    icon: Thermometer,
  },
  {
    id: 'battery',
    title: 'Battery & Electrical',
    description:
      'Battery, alternator, starter, and basic electrical diagnostics for everyday driving reliability.',
    icon: Battery,
  },
  {
    id: 'maintenance',
    title: 'General Maintenance',
    description:
      'Routine maintenance and inspections to keep your vehicle dependable between major repairs.',
    icon: Wrench,
  },
  {
    id: 'engine',
    title: 'Engine Care',
    description:
      'Light engine diagnostics and maintenance-focused service for common drivability concerns.',
    icon: Gauge,
  },
];

export type SymptomItem = {
  id: string;
  label: string;
  recommendation: string;
  nextStep: string;
};

export const symptoms: SymptomItem[] = [
  {
    id: 'ac-warm',
    label: 'A/C blowing warm air',
    nextStep: 'A/C diagnostic check',
    recommendation:
      'Warm air can come from low refrigerant, leaks, electrical issues, or compressor problems. A proper diagnostic identifies the actual cause before parts are replaced.',
  },
  {
    id: 'weak-airflow',
    label: 'Weak airflow',
    nextStep: 'HVAC airflow inspection',
    recommendation:
      'Restricted airflow may point to cabin filter issues, blower motor problems, or duct blockages. We trace the airflow path before recommending work.',
  },
  {
    id: 'grinding-brakes',
    label: 'Grinding brakes',
    nextStep: 'Brake inspection',
    recommendation:
      'Grinding often signals worn pads or rotor contact. A brake inspection confirms wear levels and safety before you keep driving.',
  },
  {
    id: 'squeaking-brakes',
    label: 'Squeaking brakes',
    nextStep: 'Brake evaluation',
    recommendation:
      'Squeaks can come from pad wear indicators, hardware, or moisture. We inspect to determine whether it is normal wear or something that needs attention now.',
  },
  {
    id: 'overheating',
    label: 'Car overheating',
    nextStep: 'Cooling system check',
    recommendation:
      'Overheating may involve coolant levels, leaks, thermostat, fans, or radiator flow. Stop driving if temperature spikes — then schedule a cooling system check.',
  },
  {
    id: 'warning-light',
    label: 'Warning light on',
    nextStep: 'Diagnostic scan',
    recommendation:
      'Dashboard warnings can range from minor to urgent. A diagnostic scan reads the codes and helps map the right next step before guessing at repairs.',
  },
  {
    id: 'battery-dying',
    label: 'Battery keeps dying',
    nextStep: 'Electrical & battery test',
    recommendation:
      'Repeated dead batteries may mean a failing battery, alternator, parasitic drain, or connection issue. We test the full charging system, not just the battery.',
  },
  {
    id: 'not-sure',
    label: "I'm not sure",
    nextStep: 'General service consultation',
    recommendation:
      'Not sure what is going on? Describe what you are hearing, feeling, or seeing and we will help you figure out the most practical next step.',
  },
];

export const acDiagnosticCards = [
  {
    title: 'Leak detection',
    text: 'Find refrigerant leaks before recharging — so you are not paying to refill a system that will lose charge again.',
  },
  {
    title: 'Recharge checks',
    text: 'Verify charge levels and system pressure before recommending a recharge or component replacement.',
  },
  {
    title: 'Compressor diagnosis',
    text: 'Confirm whether the compressor is actually failing or if another part is causing the symptom.',
  },
  {
    title: 'Condenser / evaporator issues',
    text: 'Inspect heat exchange components for blockages, damage, or airflow restrictions.',
  },
  {
    title: 'Electrical HVAC diagnostics',
    text: 'Trace switches, relays, sensors, and wiring that control A/C operation.',
  },
  {
    title: 'Clear diagnostic fee policy',
    text: 'Know what the diagnostic covers and what happens before any repair work begins.',
  },
];

export const brakeCards = [
  {
    title: 'Brake inspections',
    text: 'Visual and measured inspection of pads, rotors, calipers, and hardware.',
  },
  {
    title: 'Pads & rotors',
    text: 'Replace worn components with clear options — not unnecessary upsells.',
  },
  {
    title: 'Squeaks and grinding',
    text: 'Identify whether noise is wear-related, hardware-related, or something else entirely.',
  },
  {
    title: 'Safety-first estimates',
    text: 'Understand what is urgent, what can wait, and what each option costs before approving work.',
  },
];

export const robertTrustBullets = [
  'Clear communication',
  'Local service mindset',
  'Customer-first repair process',
  'Built around speed and trust',
];

export const processSteps = [
  {
    step: '1',
    title: 'Tell us the issue',
    text: 'Share what your vehicle is doing — by phone, text, or the service request form.',
  },
  {
    step: '2',
    title: 'We diagnose it properly',
    text: 'We inspect and diagnose before recommending parts or repairs you may not need.',
  },
  {
    step: '3',
    title: 'You approve the estimate',
    text: 'Clear numbers, clear options. No work moves forward without your approval.',
  },
  {
    step: '4',
    title: 'We get you back on the road',
    text: 'Fast, focused service built around getting local drivers moving again.',
  },
];

export const formServiceOptions = [
  'A/C Diagnostics & Repair',
  'Brake Service',
  'Cooling System',
  'Battery & Electrical',
  'General Maintenance',
  'Engine Care',
  'Not sure — need guidance',
] as const;

export const urgencyOptions = ['Today', 'This week', 'Not urgent'] as const;

export const contactMethodOptions = ['Call', 'Text', 'Email'] as const;

export type AutomationCard = {
  id: string;
  title: string;
  metric: string;
  status: string;
  trend: string;
};

export const automationCards: AutomationCard[] = [
  {
    id: 'requests',
    title: 'New Service Requests',
    metric: '12',
    status: 'Active pipeline',
    trend: '+3 this week',
  },
  {
    id: 'missed-call',
    title: 'Missed Call Text-Back',
    metric: '98%',
    status: 'Response rate',
    trend: 'Auto-triggered',
  },
  {
    id: 'reminders',
    title: 'Appointment Reminders',
    metric: '24',
    status: 'Scheduled',
    trend: 'SMS + email',
  },
  {
    id: 'no-show',
    title: 'No-Show Follow-Up',
    metric: '4',
    status: 'Pending outreach',
    trend: 'Rebook queue',
  },
  {
    id: 'reviews',
    title: 'Google Review Requests',
    metric: '18',
    status: 'Sent this month',
    trend: 'Post-service',
  },
  {
    id: 'leads',
    title: 'Lead Source Tracking',
    metric: '6',
    status: 'Channels active',
    trend: 'Web · Call · Form',
  },
  {
    id: 'crm',
    title: 'CRM Pipeline',
    metric: '31',
    status: 'Open opportunities',
    trend: 'GHL synced',
  },
  {
    id: 'reactivation',
    title: 'Customer Re-Activation',
    metric: '9',
    status: 'Due for follow-up',
    trend: '90-day cycle',
  },
];

export const heroTrustBadges = [
  'A/C Diagnostics',
  'Brake Service',
  'Clear Estimates',
  'Local Morristown Shop',
];
