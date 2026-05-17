import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CarAnimation from '@/components/CarAnimation';
import ServiceSelector from '@/components/ServiceSelector';
import SymptomChecker from '@/components/SymptomChecker';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import ACDiagnosticsSection from '@/components/ACDiagnosticsSection';
import BrakesPreview from '@/components/BrakesPreview';
import ProcessSection from '@/components/ProcessSection';
import LocalTrustSection from '@/components/LocalTrustSection';
import ReviewsSection from '@/components/ReviewsSection';
import AutomationDashboard from '@/components/AutomationDashboard';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0B0B0D] text-white min-h-screen">
      <Header />
      <HeroSection />
      <CarAnimation />
      <ServiceSelector />
      <SymptomChecker />
      <ServiceRequestForm />
      <ACDiagnosticsSection />
      <BrakesPreview />
      <ProcessSection />
      <LocalTrustSection />
      <ReviewsSection />
      <AutomationDashboard />
      <ContactSection />
      <Footer />
    </main>
  );
}
