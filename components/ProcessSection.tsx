const steps = [
  { num: '1', title: 'Call or Stop By', text: 'Reach us by phone or visit the shop on E Morris Blvd.' },
  { num: '2', title: 'We Check the Issue', text: 'We inspect brakes, A/C, or the concern you describe.' },
  { num: '3', title: 'You Get a Clear Recommendation', text: 'We explain what we found and what we suggest next.' },
  { num: '4', title: 'We Help Get You Back on the Road', text: 'Approved work is completed with clear communication.' },
];

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-accent text-2xl lg:text-3xl font-extrabold text-[#002d62] mb-10 text-center lg:text-left">
          How It Works
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="text-center sm:text-left">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#002d62] text-white font-extrabold text-sm mb-4">
                {step.num}
              </div>
              <h3 className="text-[#002d62] font-bold text-base mb-2">{step.title}</h3>
              <p className="text-[#4a4a4a] text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
