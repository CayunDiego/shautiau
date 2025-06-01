import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';

const galleryItems = [
  {
    src: "/images/gallery/cabanas.shautiau 002.png",
    alt: "Asador a leña encendido en Cabañas Shautiau",
    dataAiHint: "fire grill outdoor",
  },
  {
    src: "/images/gallery/cabanas.shautiau 003.png",
    alt: "Dormitorio acogedor con cama y ventana en Cabañas Shautiau",
    dataAiHint: "bedroom cozy cabin",
  },
  {
    src: "/images/gallery/cabanas.shautiau 001.png",
    alt: "Interior rústico de cabaña con comedor y cocina en Cabañas Shautiau",
    dataAiHint: "cabin interior rustic",
  },
];

export default function GallerySection() {
  const whatsappNumber = "5491112345678"; // Mantener consistencia con otras secciones
  const whatsappMessage = "Hola! Me gustaría hacer una reserva o consultar disponibilidad en Cabañas Shautiau.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-cta text-3xl md:text-4xl">
          Rincones de nuestras cabañas y alrededores
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                data-ai-hint={item.dataAiHint}
                className="transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 639px) 100vw, (max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            asChild
            className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold text-[20.34px] leading-none px-8 py-3 rounded-md shadow-lg transform transition-transform hover:scale-105 border-t border-[#DA8836]"
          >
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Reserva Ahora por WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
