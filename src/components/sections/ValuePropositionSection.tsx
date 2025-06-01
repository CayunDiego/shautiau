// Este archivo será renombrado o su contenido reemplazado por IntroFeaturesSection.tsx
// Por ahora, lo dejo como placeholder para evitar errores de importación hasta que se cree el nuevo archivo.
// O mejor, lo transformo directamente aquí.

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const features = [
  { src: "https://placehold.co/400x300.png", alt: "Fauna nativa de la Patagonia", caption: "Fauna nativa", dataAiHint: "patagonia llama wildlife" },
  { src: "https://placehold.co/400x300.png", alt: "Glaciares imponentes de la Patagonia", caption: "Glaciares de ensueño", dataAiHint: "patagonia glacier mountain" },
  { src: "https://placehold.co/400x300.png", alt: "Cabaña en un paisaje natural mágico", caption: "Una naturaleza mágica", dataAiHint: "cabin snowy landscape" },
];

const valuePoints = [
  "¿Por qué elegirnos?",
  "Atención cálida y personalizada",
  "Excelente relación precio-calidad",
  "Ubicación estratégica para explorar la Patagonia Austral",
  "Somos dueños directos sin intermediarios y podés ver las reviews en Google y redes sociales."
];

export default function IntroFeaturesSection() {
  const whatsappNumber = "5491112345678"; // Reemplazar con número real
  const whatsappMessage = "Hola! Me gustaría hacer una reserva o consultar disponibilidad en Cabañas Shautiau.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-12 md:py-20 bg-background-dark text-foreground-dark">
      <div className="container mx-auto px-4 text-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg mb-3 transform transition-all duration-300 group-hover:scale-105">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={feature.dataAiHint}
                />
              </div>
              <p className="font-headline text-lg text-foreground-dark group-hover:text-primary">{feature.caption}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-headline mb-6 md:mb-10 text-primary max-w-3xl mx-auto">
          Contactate ahora, mirá los reviews y volvé en las vacaciones.
        </h2>
        
        <div className="max-w-2xl mx-auto text-left mb-8 md:mb-12 space-y-3">
          {valuePoints.map((point, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
              <p className={`font-body ${index === 0 ? 'font-bold text-lg' : 'text-base'} text-foreground-dark`}>
                {point}
              </p>
            </div>
          ))}
        </div>

        <p className="font-body text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
          Ideal para astroturismo y noches inolvidables al aire libre.
        </p>
        
        <Button 
          asChild 
          size="lg" 
          className="bg-cta hover:bg-cta/90 text-cta-foreground text-base md:text-lg px-10 py-3 rounded-md shadow-lg transform transition-transform hover:scale-105"
        >
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Reservá Ahora por WhatsApp
          </Link>
        </Button>

      </div>
    </section>
  );
}
