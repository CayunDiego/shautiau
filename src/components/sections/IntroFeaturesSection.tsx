import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const valuePointsData = [
  { text: "¿Por qué elegirnos?", emoji: "📌", isTitle: true },
  { text: "Atención cálida y personalizada", emoji: "✔️", isTitle: false },
  { text: "Excelente relación precio-calidad", emoji: "✔️", isTitle: false },
  { text: "Ubicación estratégica para explorar la Patagonia Austral", emoji: "✔️", isTitle: false },
  { text: "Comentarios 5 estrellas en Google y redes sociales", emoji: "✔️", isTitle: false }
];

export default function IntroFeaturesSection() {
  const whatsappNumber = "5491112345678"; 
  const whatsappMessage = "Hola! Me gustaría hacer una reserva o consultar disponibilidad en Cabañas Shautiau.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="bg-background-dark text-foreground-dark overflow-hidden">
      <div className="container flex flex-col lg:flex-row items-stretch lg:gap-x-12 md:gap-x-16">
        
        {/* Columna de la Imagen */}
        <div className="relative lg:w-auto order-1 lg:order-none pb-12 md:pb-20">
          <div className="relative w-auto h-full"> {/* Contenedor para imagen y superposición */}
            <div className="relative w-[518.4px] h-[648px]"> {/* Usar dimensiones explícitas para que la imagen se muestre correctamente */}
              <Image
                src="/images/intro-feature-image.jpg"
                alt="Árbol solitario bajo un cielo nocturno estrellado en la Patagonia"
                width={518.4}
                height={648}
                data-ai-hint="night sky tree"
                className="object-cover w-full h-full" // Asegura que la imagen cubra el div
              />
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(to bottom, rgb(10,11,8) 0%, rgba(10,11,8,0) 15%),
                  linear-gradient(to top, rgb(10,11,8) 0%, rgba(10,11,8,0) 15%),
                  linear-gradient(to right, rgba(10,11,8,0) 0%, rgb(10,11,8) 87.34%, rgb(10,11,8) 100%)
                `
              }}
            ></div>
          </div>
        </div>
        

        {/* Columna de Texto */}
        <div className="flex flex-col justify-center order-2 lg:order-none px-4 sm:px-6 md:px-8 lg:pl-0 lg:pr-12 py-12 md:py-20">
          <h2 
            className="font-headline font-medium italic text-2xl leading-tight text-center text-white mb-8 md:mb-10 max-w-xl mx-auto lg:text-left lg:mx-0"
            style={{ textShadow: '0px 2.3px 25.88px #1F2A2D' }}
          >
            Sentate afuera, mirá las estrellas y volvé a lo esencial.
          </h2>
          
          <div className="space-y-3 mb-8 md:mb-10 lg:mx-0 mx-auto max-w-xl lg:max-w-none lg:text-left text-center">
            {valuePointsData.map((point, index) => (
              <div key={index} className="flex items-start justify-center lg:justify-start">
                <span className="mr-3 mt-1 shrink-0 text-xl">{point.emoji}</span>
                <p className={`font-body ${point.isTitle ? 'font-bold text-2xl leading-relaxed text-foreground-dark' : 'text-base text-foreground-dark/90'}`}>
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body text-base md:text-lg mb-8 md:mb-10 max-w-xl text-foreground-dark/90 lg:mx-0 mx-auto text-center lg:text-left">
            Ideal para astroturismo y noches inolvidables al aire libre.
          </p>
          
          <Button 
            asChild 
            size="lg" 
            className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold text-base leading-none px-6 py-3 rounded-md shadow-lg w-full sm:w-auto border-t border-[#DA8836]"
          >
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Reservá Ahora por WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
