'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  { src: "/images/gallery/gallery-image-1.jpg", alt: "Fauna nativa de la Patagonia", caption: "Fauna nativa", dataAiHint: "patagonia llama wildlife" },
  { src: "/images/gallery/gallery-image-2.jpg", alt: "Glaciares imponentes de la Patagonia", caption: "Glaciares de ensueño", dataAiHint: "patagonia glacier mountain" },
  { src: "/images/gallery/gallery-image-3.jpg", alt: "Cabaña en un paisaje natural mágico", caption: "Una naturaleza mágica", dataAiHint: "cabin snowy landscape" },
];

export default function HeroSection() {
  const whatsappNumber = "5492974194434";
  const whatsappMessage = "Hola! Me gustaría hacer una reserva o consultar disponibilidad en Cabañas Shautiau.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen w-full -mt-[65px] overflow-hidden flex flex-col">
      <Image
        src="/images/hero-background.jpg"
        alt="Paisaje patagónico con lago y montañas"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(31, 42, 45, 0) 0%, rgba(31, 42, 45, 0) 14.42%, rgba(31, 42, 45, 0.07) 39.53%, #1F2A2D 80.91%, #0A0B08 100%)'
        }}
      ></div>

      {/* Contenedor principal para el texto y el botón */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center p-4 md:p-8 flex-grow mt-16 md:mt-24"> {/* Añadido flex-grow y margen superior */}
        <div className="max-w-4xl">
          <h1
            className="text-white text-4xl sm:text-5xl md:text-[58px] font-headline font-bold mb-4 md:mb-6 animate-fade-in-down animation-delay-200 leading-none"
            style={{ textShadow: '0px 4px 45px #1F2A2D' }}
          >
            Tu aventura en el sur de Argentina comienza aqui
          </h1>
          <p className="text-white text-2xl font-body font-light mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 leading-snug"
            style={{ textShadow: '0 1px 6px rgba(0, 0, 0, 1)' }}>
            Te invitamos a vivir y disfrutar la experiencia patagónica en nuestras cabañas de troncos y piedras.
          </p>
          <Button
            asChild
            className="font-semibold w-full sm:w-auto bg-cta text-base leading-none px-6 py-3 hover:bg-cta/90 text-cta-foreground border-t border-[#DA8836] animate-fade-in-up animation-delay-600 px-8 py-3 rounded-md shadow-lg transform transition-transform hover:scale-105"
          >
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Reservá ahora por WhatsApp
            </Link>
          </Button>
        </div>
      </div>

      {/* Contenedor para las tres imágenes en la parte inferior */}
      <div className="relative z-20 w-full px-4 pb-8 md:pb-12 mt-auto"> {/* mt-auto para empujar hacia abajo */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="relative w-full aspect-video overflow-hidden shadow-lg mb-2">
                  <Image
                    src={feature.src}
                    alt={feature.alt}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={feature.dataAiHint}
                    className="transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="font-headline text-base md:text-lg text-white text-center group-hover:opacity-80 transition-opacity">
                  {feature.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <style jsx global>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
        .animation-delay-400 { animation-delay: 0.4s; opacity: 0; }
        .animation-delay-600 { animation-delay: 0.6s; opacity: 0; }
      `}</style>
    </section>
  );
}
