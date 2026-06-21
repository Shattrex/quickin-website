import AnnouncementStrip from '@/components/AnnouncementStrip';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import KimberlySection from '@/components/KimberlySection';
import IntroVideoSection from '@/components/IntroVideoSection';
import ServicesSection from '@/components/ServicesSection';
import RobertSection from '@/components/RobertSection';
import FacilityProgressSection from '@/components/FacilityProgressSection';
import SocialSection from '@/components/SocialSection';
import OpeningUpdatesForm from '@/components/OpeningUpdatesForm';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <AnnouncementStrip />
      <Header />
      <main>
        <HeroSection />
        <KimberlySection />
        <IntroVideoSection />
        <ServicesSection />
        <RobertSection />
        <FacilityProgressSection />
        <SocialSection />
        <OpeningUpdatesForm />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
