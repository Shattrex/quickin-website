import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickContactStrip from '@/components/QuickContactStrip';
import ServicesSection from '@/components/ServicesSection';
import BrakesSection from '@/components/BrakesSection';
import AirConditioningSection from '@/components/AirConditioningSection';
import WhyQuickIn from '@/components/WhyQuickIn';
import ProcessSection from '@/components/ProcessSection';
import LocationContact from '@/components/LocationContact';
import SimpleContactForm from '@/components/SimpleContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuickContactStrip />
        <ServicesSection />
        <BrakesSection />
        <AirConditioningSection />
        <WhyQuickIn />
        <ProcessSection />
        <LocationContact />
        <SimpleContactForm />
      </main>
      <Footer />
    </>
  );
}
