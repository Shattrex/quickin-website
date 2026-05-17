'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Phone, Mail, MessageSquare } from 'lucide-react';

type FormData = {
  service: string;
  year: string;
  make: string;
  model: string;
  description: string;
  preferredDay: string;
  preferredTime: string;
  urgency: string;
  name: string;
  phone: string;
  email: string;
  contactMethod: string;
};

const initialFormData: FormData = {
  service: '',
  year: '',
  make: '',
  model: '',
  description: '',
  preferredDay: '',
  preferredTime: '',
  urgency: '',
  name: '',
  phone: '',
  email: '',
  contactMethod: '',
};

const services = [
  'A/C Diagnostics & Repair',
  'Brake Service',
  'Cooling System',
  'Battery & Electrical',
  'General Maintenance',
  'Engine Care',
  'Other / Not Sure',
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => String(currentYear - i));
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const times = ['Morning (8am–11am)', 'Midday (11am–2pm)', 'Afternoon (2pm–5pm)', 'Flexible'];

const steps = [
  'Service',
  'Vehicle',
  'Issue',
  'Appointment',
  'Contact',
  'Confirm',
];

export default function ServiceRequestForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const update = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateStep = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (step === 0 && !formData.service) newErrors.service = 'Please select a service';
    if (step === 1) {
      if (!formData.year) newErrors.year = 'Required';
      if (!formData.make) newErrors.make = 'Required';
      if (!formData.model) newErrors.model = 'Required';
    }
    if (step === 2 && !formData.description) newErrors.description = 'Please describe the issue';
    if (step === 3 && !formData.urgency) newErrors.urgency = 'Please select urgency';
    if (step === 4) {
      if (!formData.name) newErrors.name = 'Required';
      if (!formData.phone) newErrors.phone = 'Required';
      if (!formData.contactMethod) newErrors.contactMethod = 'Required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    if (step < steps.length - 1) setStep(s => s + 1);
  };

  const back = () => { if (step > 0) setStep(s => s - 1); };

  const handleSubmit = () => {
    // GHL webhook goes here:
    // fetch('https://hooks.zapier.com/your-ghl-webhook', { method: 'POST', body: JSON.stringify(formData) })
    // GHL calendar booking goes here (GoHighLevel Calendar API)
    // GHL SMS/email automation goes here (trigger workflow via webhook)
    // CRM opportunity creation goes here (POST to GHL Contacts/Opportunities API)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="service-form" className="relative bg-[#0B0B0D] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E10600]/10 border border-[#E10600]/40 rounded-full mb-6">
            <Check size={36} className="text-[#E10600]" />
          </div>
          <h2 className="text-3xl font-black text-white mb-4">Request Received.</h2>
          <div className="bg-[#1F2124] border border-[#A7A9AC]/15 p-6 text-left mb-6">
            <p className="text-[#A7A9AC] text-sm leading-relaxed">
              <span className="text-white font-semibold">In the live version</span>, this submission would:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#A7A9AC]">
              {[
                '✓ Create a GoHighLevel CRM opportunity under the contact',
                '✓ Trigger a confirmation text to your phone',
                '✓ Send an email confirmation with appointment details',
                '✓ Notify the shop with service details and vehicle info',
                '✓ Start a follow-up automation if not confirmed',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#E10600] mt-0.5 flex-shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[#A7A9AC]/60 text-xs tracking-widest uppercase">
            Front-end demo — no data was transmitted
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(0); setFormData(initialFormData); }}
            className="mt-6 text-[#E10600] hover:text-white text-sm font-semibold transition-colors underline underline-offset-4"
          >
            Start another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="service-form" className="relative bg-[#0B0B0D] py-20 lg:py-28">
      <div className="section-sep" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#E10600]" />
            <span className="text-[#E10600] text-xs font-bold tracking-[0.25em] uppercase">Service Request</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-2">
            Start Your Request
          </h2>
          <p className="text-[#A7A9AC] text-base">Takes about 90 seconds. No login needed.</p>
        </div>

        {/* Step progress */}
        <div className="flex items-center gap-0 mb-10 overflow-x-auto pb-2">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 flex items-center justify-center text-xs font-black transition-all duration-300 ${
                  i < step
                    ? 'bg-[#E10600] text-white'
                    : i === step
                      ? 'bg-[#E10600]/20 border-2 border-[#E10600] text-[#E10600]'
                      : 'bg-[#1F2124] border border-[#A7A9AC]/20 text-[#A7A9AC]/40'
                }`}>
                  {i < step ? <Check size={12} /> : i + 1}
                </div>
                <span className={`text-[10px] mt-1 font-semibold tracking-wide whitespace-nowrap ${
                  i <= step ? 'text-[#A7A9AC]' : 'text-[#A7A9AC]/30'
                }`}>{label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`h-[1px] w-6 sm:w-10 mx-1 mb-4 flex-shrink-0 transition-all duration-300 ${
                  i < step ? 'bg-[#E10600]' : 'bg-[#A7A9AC]/15'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-[#1F2124] border border-[#A7A9AC]/15 p-6 lg:p-8">
          {/* Step 0: Service */}
          {step === 0 && (
            <div className="animate-fade-in-up">
              <h3 className="text-white font-bold text-lg mb-6">What service do you need?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map(s => (
                  <button
                    key={s}
                    onClick={() => update('service', s)}
                    className={`text-left p-4 border text-sm font-semibold transition-all duration-200 ${
                      formData.service === s
                        ? 'bg-[#E10600]/10 border-[#E10600] text-white'
                        : 'border-[#A7A9AC]/15 text-[#A7A9AC] hover:border-[#E10600]/40 hover:text-white bg-[#0B0B0D]/50'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {errors.service && <p className="text-[#E10600] text-xs mt-3">{errors.service}</p>}
            </div>
          )}

          {/* Step 1: Vehicle */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h3 className="text-white font-bold text-lg mb-6">Tell us about your vehicle</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[#A7A9AC] text-xs font-bold tracking-wider uppercase mb-2 block">Year</label>
                  <select
                    value={formData.year}
                    onChange={e => update('year', e.target.value)}
                    className="w-full bg-[#0B0B0D] border border-[#A7A9AC]/20 text-white px-3 py-3 text-sm focus:border-[#E10600] focus:outline-none transition-colors"
                  >
                    <option value="">Select year</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                  {errors.year && <p className="text-[#E10600] text-xs mt-1">{errors.year}</p>}
                </div>
                <div>
                  <label className="text-[#A7A9AC] text-xs font-bold tracking-wider uppercase mb-2 block">Make</label>
                  <input
                    type="text"
                    placeholder="e.g. Honda"
                    value={formData.make}
                    onChange={e => update('make', e.target.value)}
                    className="w-full bg-[#0B0B0D] border border-[#A7A9AC]/20 text-white px-3 py-3 text-sm placeholder-[#A7A9AC]/30 focus:border-[#E10600] focus:outline-none transition-colors"
                  />
                  {errors.make && <p className="text-[#E10600] text-xs mt-1">{errors.make}</p>}
                </div>
                <div>
                  <label className="text-[#A7A9AC] text-xs font-bold tracking-wider uppercase mb-2 block">Model</label>
                  <input
                    type="text"
                    placeholder="e.g. Civic"
                    value={formData.model}
                    onChange={e => update('model', e.target.value)}
                    className="w-full bg-[#0B0B0D] border border-[#A7A9AC]/20 text-white px-3 py-3 text-sm placeholder-[#A7A9AC]/30 focus:border-[#E10600] focus:outline-none transition-colors"
                  />
                  {errors.model && <p className="text-[#E10600] text-xs mt-1">{errors.model}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Issue description */}
          {step === 2 && (
            <div className="animate-fade-in-up">
              <h3 className="text-white font-bold text-lg mb-2">Describe the issue</h3>
              <p className="text-[#A7A9AC] text-sm mb-6">Be as detailed as you want — when it happens, how long, any sounds or smells.</p>
              <textarea
                rows={5}
                value={formData.description}
                onChange={e => update('description', e.target.value)}
                placeholder="e.g. My A/C blows cold for about 10 minutes then switches to warm. Started happening last week when the temperature went above 90°F."
                className="w-full bg-[#0B0B0D] border border-[#A7A9AC]/20 text-white px-4 py-3 text-sm placeholder-[#A7A9AC]/30 focus:border-[#E10600] focus:outline-none transition-colors resize-none leading-relaxed"
              />
              {errors.description && <p className="text-[#E10600] text-xs mt-1">{errors.description}</p>}
            </div>
          )}

          {/* Step 3: Appointment */}
          {step === 3 && (
            <div className="animate-fade-in-up">
              <h3 className="text-white font-bold text-lg mb-6">When works for you?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[#A7A9AC] text-xs font-bold tracking-wider uppercase mb-3 block">Preferred Day</label>
                  <div className="grid grid-cols-2 gap-2">
                    {days.map(d => (
                      <button key={d} onClick={() => update('preferredDay', d)}
                        className={`py-2.5 text-xs font-bold border transition-all ${
                          formData.preferredDay === d
                            ? 'bg-[#E10600]/10 border-[#E10600] text-white'
                            : 'border-[#A7A9AC]/15 text-[#A7A9AC] hover:border-[#E10600]/40 hover:text-white'
                        }`}>{d}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-[#A7A9AC] text-xs font-bold tracking-wider uppercase mb-3 block">Preferred Time</label>
                  <div className="flex flex-col gap-2">
                    {times.map(t => (
                      <button key={t} onClick={() => update('preferredTime', t)}
                        className={`py-2.5 px-3 text-xs font-bold border text-left transition-all ${
                          formData.preferredTime === t
                            ? 'bg-[#E10600]/10 border-[#E10600] text-white'
                            : 'border-[#A7A9AC]/15 text-[#A7A9AC] hover:border-[#E10600]/40 hover:text-white'
                        }`}>{t}</button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="text-[#A7A9AC] text-xs font-bold tracking-wider uppercase mb-3 block">Urgency</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: 'today', label: 'Today', color: 'text-[#E10600]' },
                    { val: 'this-week', label: 'This Week', color: 'text-yellow-400' },
                    { val: 'not-urgent', label: 'Not Urgent', color: 'text-[#A7A9AC]' },
                  ].map(u => (
                    <button key={u.val} onClick={() => update('urgency', u.val)}
                      className={`py-3 text-sm font-bold border transition-all ${
                        formData.urgency === u.val
                          ? 'bg-[#E10600]/10 border-[#E10600] text-white'
                          : 'border-[#A7A9AC]/15 text-[#A7A9AC] hover:border-[#E10600]/40'
                      }`}>{u.label}</button>
                  ))}
                </div>
                {errors.urgency && <p className="text-[#E10600] text-xs mt-2">{errors.urgency}</p>}
              </div>
              {/* GHL calendar booking goes here */}
            </div>
          )}

          {/* Step 4: Contact */}
          {step === 4 && (
            <div className="animate-fade-in-up">
              <h3 className="text-white font-bold text-lg mb-6">Your contact info</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[#A7A9AC] text-xs font-bold tracking-wider uppercase mb-2 block">Full Name *</label>
                  <input type="text" placeholder="Jane Smith" value={formData.name}
                    onChange={e => update('name', e.target.value)}
                    className="w-full bg-[#0B0B0D] border border-[#A7A9AC]/20 text-white px-3 py-3 text-sm placeholder-[#A7A9AC]/30 focus:border-[#E10600] focus:outline-none transition-colors"
                  />
                  {errors.name && <p className="text-[#E10600] text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-[#A7A9AC] text-xs font-bold tracking-wider uppercase mb-2 block">Phone *</label>
                  <input type="tel" placeholder="(423) 555-0100" value={formData.phone}
                    onChange={e => update('phone', e.target.value)}
                    className="w-full bg-[#0B0B0D] border border-[#A7A9AC]/20 text-white px-3 py-3 text-sm placeholder-[#A7A9AC]/30 focus:border-[#E10600] focus:outline-none transition-colors"
                  />
                  {errors.phone && <p className="text-[#E10600] text-xs mt-1">{errors.phone}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[#A7A9AC] text-xs font-bold tracking-wider uppercase mb-2 block">Email (optional)</label>
                  <input type="email" placeholder="jane@email.com" value={formData.email}
                    onChange={e => update('email', e.target.value)}
                    className="w-full bg-[#0B0B0D] border border-[#A7A9AC]/20 text-white px-3 py-3 text-sm placeholder-[#A7A9AC]/30 focus:border-[#E10600] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#A7A9AC] text-xs font-bold tracking-wider uppercase mb-3 block">Preferred Contact Method *</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: 'call', label: 'Call', icon: <Phone size={14} /> },
                    { val: 'text', label: 'Text', icon: <MessageSquare size={14} /> },
                    { val: 'email', label: 'Email', icon: <Mail size={14} /> },
                  ].map(m => (
                    <button key={m.val} onClick={() => update('contactMethod', m.val)}
                      className={`flex items-center justify-center gap-2 py-3 text-sm font-bold border transition-all ${
                        formData.contactMethod === m.val
                          ? 'bg-[#E10600]/10 border-[#E10600] text-white'
                          : 'border-[#A7A9AC]/15 text-[#A7A9AC] hover:border-[#E10600]/40 hover:text-white'
                      }`}
                    >
                      {m.icon} {m.label}
                    </button>
                  ))}
                </div>
                {errors.contactMethod && <p className="text-[#E10600] text-xs mt-2">{errors.contactMethod}</p>}
              </div>
              {/* GHL SMS/email automation goes here */}
            </div>
          )}

          {/* Step 5: Confirm */}
          {step === 5 && (
            <div className="animate-fade-in-up">
              <h3 className="text-white font-bold text-lg mb-6">Review & Submit</h3>
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Service', value: formData.service },
                  { label: 'Vehicle', value: `${formData.year} ${formData.make} ${formData.model}` },
                  { label: 'Issue', value: formData.description },
                  { label: 'Appointment', value: `${formData.preferredDay || 'Flexible'} ${formData.preferredTime || ''}` },
                  { label: 'Urgency', value: formData.urgency },
                  { label: 'Name', value: formData.name },
                  { label: 'Phone', value: formData.phone },
                  { label: 'Contact via', value: formData.contactMethod },
                ].filter(i => i.value?.trim()).map(item => (
                  <div key={item.label} className="flex gap-4 py-2 border-b border-[#A7A9AC]/10">
                    <span className="text-[#A7A9AC] text-xs font-bold uppercase tracking-wide w-24 flex-shrink-0 mt-0.5">{item.label}</span>
                    <span className="text-white text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
              {/* CRM opportunity creation goes here */}
              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-3 bg-[#E10600] hover:bg-[#b00500] text-white font-black text-sm tracking-wider uppercase py-4 transition-all duration-200 group"
              >
                Submit Service Request
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[#A7A9AC]/40 text-xs text-center mt-3 tracking-wide">
                Demo only — no data is sent or stored
              </p>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            {step > 0 ? (
              <button onClick={back}
                className="flex items-center gap-2 text-[#A7A9AC] hover:text-white text-sm font-semibold transition-colors">
                <ChevronLeft size={16} /> Back
              </button>
            ) : <div />}

            {step < steps.length - 1 && (
              <button onClick={next}
                className="flex items-center gap-2 bg-[#E10600] hover:bg-[#b00500] text-white font-bold text-sm tracking-wider uppercase px-6 py-3 transition-all duration-200 group"
                style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
              >
                Continue
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
