'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import {
  formServiceOptions,
  urgencyOptions,
  contactMethodOptions,
} from '@/lib/content';
import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';
import CTAButton from '@/components/ui/CTAButton';

type FormData = {
  service: string;
  year: string;
  make: string;
  model: string;
  description: string;
  preferredDayTime: string;
  urgency: string;
  contactMethod: string;
  name: string;
  phone: string;
  email: string;
};

const initialFormData: FormData = {
  service: '',
  year: '',
  make: '',
  model: '',
  description: '',
  preferredDayTime: '',
  urgency: '',
  contactMethod: '',
  name: '',
  phone: '',
  email: '',
};

const STEPS = [
  'Choose service',
  'Vehicle details',
  'Describe the issue',
  'Preferred appointment window',
  'Contact details',
  'Confirmation',
];

const inputClass =
  'w-full bg-white border border-[#D8DCE2] rounded-sm px-4 py-3 text-[#1A1A1A] placeholder:text-[#A7A9AC] focus:outline-none focus:border-[#002D62] focus:ring-1 focus:ring-[#002D62]/20 transition-colors';

const labelClass = 'block text-sm font-semibold text-[#002D62] mb-2';

export default function ServiceRequestForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return formData.service !== '';
      case 1:
        return formData.year && formData.make && formData.model;
      case 2:
        return formData.description.trim().length > 0;
      case 3:
        return formData.preferredDayTime && formData.urgency;
      case 4:
        return (
          formData.name.trim() &&
          formData.phone.trim() &&
          formData.email.trim() &&
          formData.contactMethod
        );
      default:
        return true;
    }
  };

  const handleSubmit = () => {
    /*
     * GHL webhook goes here.
     * GHL calendar booking goes here.
     * GHL SMS/email automation goes here.
     * CRM opportunity creation goes here.
     * Google review request automation goes here.
     */
    setSubmitted(true);
    setStep(5);
  };

  const next = () => {
    if (step === 4) {
      handleSubmit();
    } else if (canProceed()) {
      setStep((s) => Math.min(s + 1, 5));
    }
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <section id={site.serviceRequestId} className="py-16 lg:py-24 section-alt relative">
      <div className="garage-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Service Request"
          title="Start Your Service Request"
          description="Tell us what you need — this demo form shows how the live version will capture leads and route them into GoHighLevel."
        />

        {/* Step indicator */}
        <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-col items-center min-w-[72px] flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1 transition-colors ${
                  i <= step
                    ? 'bg-[#E10600] text-white'
                    : 'bg-white text-[#A7A9AC] border border-[#D8DCE2]'
                }`}
              >
                {i < step || submitted ? '✓' : i + 1}
              </div>
              <span className="text-[10px] text-[#A7A9AC] text-center hidden sm:block leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="metallic-card rounded-lg p-6 sm:p-8 lg:p-10">
          {step === 0 && (
            <div className="space-y-4">
              <h3 className="text-[#002D62] font-extrabold text-xl mb-4">Choose service</h3>
              <div className="grid gap-2">
                {formServiceOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateField('service', option)}
                    className={`text-left px-4 py-3 rounded-sm border text-sm font-semibold transition-all ${
                      formData.service === option
                        ? 'bg-[#E10600]/10 border-[#E10600] text-[#002D62]'
                        : 'bg-white border-[#D8DCE2] text-[#4A4A4A] hover:border-[#E10600]/40'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-[#002D62] font-extrabold text-xl mb-4">Vehicle details</h3>
              <div>
                <label className={labelClass} htmlFor="year">
                  Vehicle year
                </label>
                <input
                  id="year"
                  type="text"
                  placeholder="e.g. 2019"
                  value={formData.year}
                  onChange={(e) => updateField('year', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="make">
                  Vehicle make
                </label>
                <input
                  id="make"
                  type="text"
                  placeholder="e.g. Toyota"
                  value={formData.make}
                  onChange={(e) => updateField('make', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="model">
                  Vehicle model
                </label>
                <input
                  id="model"
                  type="text"
                  placeholder="e.g. Camry"
                  value={formData.model}
                  onChange={(e) => updateField('model', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-[#002D62] font-extrabold text-xl mb-4">
                Describe the issue
              </h3>
              <div>
                <label className={labelClass} htmlFor="description">
                  Problem description
                </label>
                <textarea
                  id="description"
                  rows={5}
                  placeholder="Tell us what your vehicle is doing — noises, symptoms, when it started..."
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-[#002D62] font-extrabold text-xl mb-4">
                Preferred appointment window
              </h3>
              <div>
                <label className={labelClass} htmlFor="preferredDayTime">
                  Preferred day / time
                </label>
                <input
                  id="preferredDayTime"
                  type="text"
                  placeholder="e.g. Tuesday morning or this Friday afternoon"
                  value={formData.preferredDayTime}
                  onChange={(e) => updateField('preferredDayTime', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Urgency</label>
                <div className="flex flex-wrap gap-2">
                  {urgencyOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => updateField('urgency', option)}
                      className={`px-4 py-2 rounded-sm text-sm font-semibold border transition-all ${
                        formData.urgency === option
                          ? 'bg-[#E10600] border-[#E10600] text-white'
                          : 'bg-white border-[#D8DCE2] text-[#4A4A4A] hover:border-[#E10600]/40'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-[#002D62] font-extrabold text-xl mb-4">Contact details</h3>
              <div>
                <label className={labelClass} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                    type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Preferred contact</label>
                <div className="flex flex-wrap gap-2">
                  {contactMethodOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => updateField('contactMethod', option)}
                      className={`px-4 py-2 rounded-sm text-sm font-semibold border transition-all ${
                        formData.contactMethod === option
                          ? 'bg-[#E10600] border-[#E10600] text-white'
                          : 'bg-white border-[#D8DCE2] text-[#4A4A4A] hover:border-[#E10600]/40'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 5 && submitted && (
            <div className="text-center py-6">
              <CheckCircle2 size={48} className="text-[#E10600] mx-auto mb-4" />
              <h3 className="text-[#002D62] font-extrabold text-xl mb-4">Request received.</h3>
              <p className="text-[#A7A9AC] leading-relaxed max-w-md mx-auto">
                In the live version, this would create a GoHighLevel CRM opportunity, trigger a
                confirmation text, and notify the shop.
              </p>
            </div>
          )}

          {step < 5 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-[#D8DCE2]">
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#4A4A4A] hover:text-[#002D62] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} />
                Back
              </button>
              <CTAButton
                onClick={() => canProceed() && next()}
                className={!canProceed() ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
              >
                {step === 4 ? 'Submit Request' : 'Continue'}
                {step < 4 && <ChevronRight size={16} />}
              </CTAButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
