'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { openingInterestOptions } from '@/lib/content';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';
import CTAButton from '@/components/ui/CTAButton';

type FormData = {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  interest: string;
  message: string;
  optIn: boolean;
};

const initialFormData: FormData = {
  name: '',
  phone: '',
  email: '',
  vehicle: '',
  interest: '',
  message: '',
  optIn: false,
};

const inputClass =
  'w-full bg-white border border-[#D8DCE2] rounded-sm px-4 py-3 text-[#1A1A1A] placeholder:text-[#A7A9AC] focus:outline-none focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62]/20 transition-colors';

const labelClass = 'block text-sm font-semibold text-[#002D62] mb-2';

export default function OpeningUpdatesForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canSubmit =
    formData.name.trim() &&
    formData.phone.trim() &&
    formData.email.trim() &&
    formData.interest &&
    formData.optIn;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    /*
     * TODO: Connect this form to the final email inbox, CRM, or SMS system
     * once Kimberly provides the official business contact details.
     */
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData(initialFormData);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id={site.openingUpdatesId} className="py-16 lg:py-24 bg-white relative">
      <div className="garage-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Opening List"
          title="Be First to Know When We Open"
          description="Leave your details and we will keep you updated as Quick In Auto gets ready to serve Morristown drivers."
        />

        <div className="metallic-card rounded-lg p-6 sm:p-8 lg:p-10">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle2 size={52} className="text-[#E10600] mx-auto mb-5" />
              <h3 className="text-[#002D62] font-extrabold text-2xl mb-4">
                You&apos;re on the list.
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed max-w-md mx-auto mb-8">
                Quick In Auto is coming soon to Morristown. We&apos;ll share updates as the
                location gets closer to opening.
              </p>
              <CTAButton onClick={resetForm} variant="secondary">
                Back to Quick In Auto
              </CTAButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={labelClass} htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="vehicle">
                  Vehicle Make / Model
                </label>
                <input
                  id="vehicle"
                  type="text"
                  placeholder="e.g. 2019 Toyota Camry"
                  value={formData.vehicle}
                  onChange={(e) => updateField('vehicle', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>What are you most interested in?</label>
                <div className="flex flex-wrap gap-2">
                  {openingInterestOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => updateField('interest', option)}
                      className={`px-4 py-2 rounded-sm text-sm font-semibold border transition-all ${
                        formData.interest === option
                          ? 'bg-[#E10600] border-[#E10600] text-white'
                          : 'bg-white border-[#D8DCE2] text-[#4A4A4A] hover:border-[#E10600]/40'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="message">
                  Optional Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us what you'd like to know before opening day..."
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.optIn}
                  onChange={(e) => updateField('optIn', e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#E10600]"
                  required
                />
                <span className="text-sm text-[#4A4A4A] leading-relaxed">
                  Yes, send me Quick In Auto opening updates.
                </span>
              </label>

              <CTAButton
                type="submit"
                className={`w-full sm:w-auto ${!canSubmit ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
              >
                Join the Opening List
              </CTAButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
