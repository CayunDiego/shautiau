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
      <div
        className="w-full h-[100px]"
        style={{
          background: 'linear-gradient(180deg, #0A0B08 10%, #FFFFFF 100%)',
        }}
      ></div>
      <CabinDetailsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactLocationSection />
      <FinalCtaSection />
    </>
  );
}
