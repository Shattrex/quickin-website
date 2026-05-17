'use client';

const steps = [
  {
    number: '01',
    title: 'Tell Us the Issue',
    desc: 'Use our service request form, call the shop, or walk in. Describe what you\'re experiencing in your own words — no technical knowledge required.',
  },
  {
    number: '02',
    title: 'We Diagnose It Properly',
    desc: 'Our team runs a real diagnostic — not a guess. We find the root cause, document it, and prepare your estimate.',
  },
  {
    number: '03',
    title: 'You Approve the Estimate',
    desc: 'We call or text you with a clear, itemized estimate. No work starts until you\'ve seen it, asked your questions, and said yes.',
  },
  {
    number: '04',
    title: 'We Get You Back on the Road',
    desc: 'We complete the service, verify the fix, and make sure everything is right before your vehicle leaves the bay.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-[#0e1012] py-20 lg:py-28">
      <div className="section-sep" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#E10600]" />
            <span className="text-[#E10600] text-xs font-bold tracking-[0.25em] uppercase">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            The Quick In <span className="text-[#A7A9AC]">Process</span>
          </h2>
          <p className="text-[#A7A9AC] text-lg max-w-2xl">
            Four clear steps from issue to resolution. No surprises. No run-around.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[50%] right-0 h-[1px] bg-[#E10600]/20 z-0" />
              )}

              <div className="relative z-10 bg-[#1F2124] border border-[#A7A9AC]/10 p-6 lg:p-8 h-full group-hover:border-[#E10600]/30 transition-all duration-300 m-1">
                {/* Red number badge */}
                <div className="inline-flex items-center justify-center w-14 h-14 mb-6 relative">
                  <div className="absolute inset-0 bg-[#E10600]/10 border border-[#E10600]/40 group-hover:bg-[#E10600]/20 transition-colors duration-300" />
                  <span className="relative text-[#E10600] font-black text-xl tracking-tight">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-white font-black text-lg mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#A7A9AC] text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#E10600]/40 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-[#E10600] hover:bg-[#b00500] text-white font-bold text-sm tracking-wider uppercase px-8 py-4 transition-all duration-200"
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
          >
            Start Step 1 Now
          </button>
        </div>
      </div>
    </section>
  );
}
