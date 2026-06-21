import { site } from '@/lib/site';
import SectionHeader from '@/components/ui/SectionHeader';
import { OpeningUpdatesButton } from '@/components/ui/CTAButton';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 section-alt relative">
      <div className="absolute top-0 left-0 right-0 red-divider" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          align="center"
          eyebrow="Contact"
          title="Questions Before Opening?"
          description="Quick In Auto is currently preparing its new Morristown location. Join the opening list and the team will share updates as services and contact details become available."
        />

        <OpeningUpdatesButton className="px-8" label="Get Opening Updates" />
      </div>
    </section>
  );
}
