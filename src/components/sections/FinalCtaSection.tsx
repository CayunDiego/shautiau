import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const activities = [
  'Caminatas a miradores y glaciares',
  'Kayak y pesca en lagos Posadas y Pueyrredón',
  'Avistaje de fauna patagónica',
  'Fotografía de paisajes únicos como el Arco de Piedra y el Cerro San Lorenzo',
];

const finalBenefit =
  '🌟 Ideal para familias, parejas y aventureros que buscan un turismo sustentable y auténtico.';

export default function FinalCtaSection() {
  const whatsappNumber = "5492974194434";
  const whatsappMessage = "Hola! Me gustaría hacer una reserva o consultar disponibilidad en Cabañas Shautiau.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner-end.png"
          alt="Paisaje montañoso de la Patagonia al atardecer"
          layout="fill"
          objectFit="cover"
          quality={85}
          data-ai-hint="mountain landscape sunset"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/60 to-blue-700/60"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Columna Izquierda: Título y Botón */}
          <div className="text-center md:text-left">
            <h2 className="text-[48px] font-headline font-semibold leading-tight text-white mb-2 tracking-normal">
              Cabañas Shautiau
            </h2>
            <p className="text-xl md:text-2xl font-body mb-6 md:mb-8 opacity-90">
              Lago Posadas, Santa Cruz
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold text-base md:text-lg px-8 py-3 rounded-md shadow-lg transform transition-transform hover:scale-105 border-t border-[#DA8836]"
            >
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Reserva Ahora por WhatsApp
              </Link>
            </Button>
          </div>

          {/* Columna Derecha: Lista de Actividades */}
          <div className="font-body space-y-3 text-base md:text-lg">
            <ul className="space-y-2">
              {activities.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-cta mr-2 mt-1">&#8226;</span> {/* Bullet point */}
                  <span>{activity}</span>
                </li>
              ))}
              <li className="flex items-start">
                {/* <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-2 mt-1 flex-shrink-0" /> */}
                <span>{finalBenefit}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
