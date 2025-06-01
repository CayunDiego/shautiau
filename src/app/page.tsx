import HeroSection from '@/components/sections/HeroSection';
import GallerySection from '@/components/sections/GallerySection';
import IntroFeaturesSection from '@/components/sections/IntroFeaturesSection';
import CabinDetailsSection from '@/components/sections/CabinDetailsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactLocationSection from '@/components/sections/ContactLocationSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroFeaturesSection />
      <CabinDetailsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactLocationSection />
      <FinalCtaSection />
    </>
  );
}
