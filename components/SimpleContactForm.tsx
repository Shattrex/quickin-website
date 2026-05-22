'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

export default function SimpleContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // GHL webhook / form integration goes here in live version
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-12 bg-[#f4f5f7] border-t border-[#e2e4e8]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-[#002d62] font-bold text-lg mb-2">Request sent.</p>
          <p className="text-[#4a4a4a] text-sm">
            In the live version, this would notify the shop. For faster help, call{' '}
            <a href={site.phoneHref} className="text-[#e10600] font-bold">
              {site.phone}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 text-[#002d62] text-sm font-semibold underline"
          >
            Send another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16 bg-[#f4f5f7] border-t border-[#e2e4e8]">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <p className="text-[#4a4a4a] text-center mb-6">
          Prefer not to call? Send a quick request and we&apos;ll get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#e2e4e8] rounded-sm p-6 lg:p-8 shadow-sm space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-[#002d62] mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-[#e2e4e8] px-3 py-2.5 text-[#1a1a1a] focus:border-[#002d62] focus:outline-none focus:ring-1 focus:ring-[#002d62]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-[#002d62] mb-1">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full border border-[#e2e4e8] px-3 py-2.5 text-[#1a1a1a] focus:border-[#002d62] focus:outline-none focus:ring-1 focus:ring-[#002d62]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-[#002d62] mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border border-[#e2e4e8] px-3 py-2.5 text-[#1a1a1a] focus:border-[#002d62] focus:outline-none focus:ring-1 focus:ring-[#002d62]"
            />
          </div>
          <div>
            <label htmlFor="vehicle" className="block text-sm font-bold text-[#002d62] mb-1">
              Vehicle
            </label>
            <input
              id="vehicle"
              name="vehicle"
              type="text"
              placeholder="Year, make, model"
              className="w-full border border-[#e2e4e8] px-3 py-2.5 text-[#1a1a1a] placeholder:text-[#a7a9ac] focus:border-[#002d62] focus:outline-none focus:ring-1 focus:ring-[#002d62]"
            />
          </div>
          <div>
            <label htmlFor="help" className="block text-sm font-bold text-[#002d62] mb-1">
              What do you need help with?
            </label>
            <textarea
              id="help"
              name="help"
              rows={4}
              required
              className="w-full border border-[#e2e4e8] px-3 py-2.5 text-[#1a1a1a] resize-none focus:border-[#002d62] focus:outline-none focus:ring-1 focus:ring-[#002d62]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#e10600] hover:bg-[#b80500] text-white font-bold py-3.5 rounded-sm transition-colors"
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}
