import AnnouncementStrip from '@/components/AnnouncementStrip';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import KimberlySection from '@/components/KimberlySection';
import ServicesSection from '@/components/ServicesSection';
import RobertSection from '@/components/RobertSection';
import FacilityProgressSection from '@/components/FacilityProgressSection';
import MapSection from '@/components/MapSection';
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
        <ServicesSection />
        <RobertSection />
        <FacilityProgressSection />
        <MapSection />
        <SocialSection />
        <OpeningUpdatesForm />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
