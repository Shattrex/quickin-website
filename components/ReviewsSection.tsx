'use client';

import { Star } from 'lucide-react';

// Placeholder reviews — later connect to Google Reviews or GHL review automation
const reviews = [
  {
    name: 'Local Driver',
    location: 'Morristown, TN',
    rating: 5,
    text: 'Brought my truck in for an A/C issue. They diagnosed it in about an hour, told me exactly what was wrong, and gave me a fair quote. No surprises when I picked it up.',
    service: 'A/C Diagnostics',
    initials: 'LD',
  },
  {
    name: 'Morristown Customer',
    location: 'Morristown, TN',
    rating: 5,
    text: 'My brakes were grinding bad. They checked everything and called me with the estimate before starting work. Fixed the same day. Really appreciate the clear communication.',
    service: 'Brake Service',
    initials: 'MC',
  },
  {
    name: 'Family Vehicle Owner',
    location: 'Hamblen County, TN',
    rating: 5,
    text: 'We have three cars and this is where we bring all of them now. Honest shop with people who actually explain what they\'re doing. That matters when you have a family depending on the vehicle.',
    service: 'General Maintenance',
    initials: 'FV',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative bg-[#0e1012] py-20 lg:py-28">
      <div className="section-sep" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-[#E10600]" />
              <span className="text-[#E10600] text-xs font-bold tracking-[0.25em] uppercase">
                Reviews
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-2">
              What Customers Say
            </h2>
            <p className="text-[#A7A9AC]">
              Placeholder reviews — real testimonials load here in the live version.
            </p>
          </div>
          {/* Demo badge */}
          <div className="inline-flex items-center gap-2 bg-[#A7A9AC]/5 border border-[#A7A9AC]/20 px-4 py-2 self-start lg:self-auto">
            <span className="text-[#A7A9AC]/60 text-xs font-bold tracking-widest uppercase">
              Demo Placeholders
            </span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="group bg-[#1F2124] border border-[#A7A9AC]/10 hover:border-[#A7A9AC]/25 p-6 transition-all duration-300 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-[#A7A9AC]/10 text-6xl font-black leading-none select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#E10600] fill-[#E10600]" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-[#A7A9AC] text-sm leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>

              {/* Reviewer info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#A7A9AC]/10">
                {/* Avatar */}
                <div className="w-9 h-9 bg-[#E10600]/15 border border-[#E10600]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#E10600] text-xs font-black">{review.initials}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-bold">{review.name}</p>
                  <p className="text-[#A7A9AC]/50 text-xs">{review.location}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] text-[#A7A9AC]/40 font-bold tracking-wider uppercase bg-[#A7A9AC]/5 px-2 py-1">
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        {/* Later connect to Google Reviews or GHL review automation */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-[#1F2124] border border-[#A7A9AC]/10 px-6 py-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="text-[#E10600] fill-[#E10600]" />
              ))}
            </div>
            <span className="text-[#A7A9AC] text-xs font-semibold">
              See all reviews on Google — linked in the live version
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
