import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IntroVideoSection from '@/components/IntroVideoSection';
import ServicesSection from '@/components/ServicesSection';
import SymptomChecker from '@/components/SymptomChecker';
import AirConditioningSection from '@/components/AirConditioningSection';
import BrakesSection from '@/components/BrakesSection';
import RobertSection from '@/components/RobertSection';
import ProcessSection from '@/components/ProcessSection';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import AutomationPreviewSection from '@/components/AutomationPreviewSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroVideoSection />
        <ServicesSection />
        <SymptomChecker />
        <AirConditioningSection />
        <BrakesSection />
        <RobertSection />
        <ProcessSection />
        <ServiceRequestForm />
        <AutomationPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
