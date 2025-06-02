import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bed, Check, PawPrint } from 'lucide-react';

const amenitiesList = [
  { text: '✅ Baño privado con ducha y bidet' },
  { text: '✅ TV pantalla plana' },
  { text: '✅ Wi-Fi gratuito' },
  { text: '✅ Cocina equipada' },
  { text: '✅ Jardín con vistas a la cordillera' },
  { text: '✅ Estacionamiento privado sin costo' },
  { text: '✅ Aceptamos mascotas 🐾' },
];

export default function CabinDetailsSection() {
  const whatsappNumber = "5492974194434";
  const whatsappMessage = "Hola! Me gustaría hacer una reserva o consultar disponibilidad en Cabañas Shautiau.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="alojamiento" className="pt-16 md:pt-24 bg-background flex flex-col justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 w-full max-w-screen-lg">
          {/* 1. Texto: Sobre las cabañas */}
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/icons/Lef-icon.svg"
                alt="Icono sección"
                width={32}
                height={32}
                className="text-primary"
              />
              <h2 className="text-[48px] font-headline font-bold text-[#1F2A2D] leading-[100%] tracking-normal">
                Sobre las cabañas
              </h2>
            </div>
            <p className="font-['Poppins'] font-light text-2xl leading-relaxed tracking-normal text-[#1F2A2D] mb-6">
              Dos cabañas totalmente equipadas para 4 y 5 personas. Naturaleza, confort y aire puro te esperan en el corazón de Santa Cruz. Incluyen asador a leña.
            </p>
          </div>
          {/* 3. Imagen Arriba a la Derecha */}
          <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/gallery/cabanas.shautiau 001.png"
              alt="Interior acogedor de una de las cabañas"
              width={600}
              height={450}
              className="w-full h-full object-cover"
              data-ai-hint="cabin interior dining rustic"
            />
          </div>
          {/* 2. Imagen Abajo a la Izquierda */}
          <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/gallery/cabanas.shautiau 002.png"
                alt="Dormitorio confortable en Cabañas Shautiau"
                width={600}
                height={450}
                className="w-full h-full object-cover"
                data-ai-hint="wood fire grill cozy"
              />
            </div>
          {/* 4. Imagen Abajo a la Derecha */}
          <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/images/gallery/cabanas.shautiau 003.png"
              alt="Asador a leña en Cabañas Shautiau"
              width={600}
              height={450}
              className="w-full h-full object-cover"
              data-ai-hint="cabin bedroom cozy comfortable"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 items-start pt-20 ">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-lg'>
            <h2 className="text-[#1F2A2D] font-headline font-bold text-[48px] leading-[100%] tracking-normal mb-4">
              Una experiencia acogedora y cercana a la naturaleza
            </h2>
            <p className="font-['Poppins'] font-light text-2xl tracking-normal text-[#1F2A2D] mb-8 leading-relaxed">
              Las instalaciones incluyen habitaciones equipadas con baño privado, televisión de pantalla plana y conexión Wi-Fi gratuita. Además, disponen de estacionamiento privado sin costo adicional.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 mt-10 md:mt-0 md:pt-4 md:gap-8 justify-items-center lg:pr-4">
          <div className="lg:col-span-2 overflow-hidden aspect-[16/9]">
            <img
              src="/images/gallery/cabanas.shautiau 004.png"
              alt="Vista exterior de Cabañas Shautiau en un entorno natural"
              className="w-full h-full object-cover"
              data-ai-hint="cabin exterior nature daytime serene"
              width={800}
              height={450}
              />
          </div>
          <div className="flex flex-col justify-center lg:justify-start pt-8 sm:pt-0 px-4 sm:px-0">
            <p className="font-['Poppins'] text-[18px] tracking-[0%] text-[#1F2A2D] font-medium mb-3" id="servicios">
              🛏️ Cabañas equipadas para tu confort
            </p>
            <p className="font-body text-sm text-[#1F2A2D] mb-5 leading-relaxed">
              Nuestras cabañas tipo chalet cuentan con:
            </p>
            <ul className="space-y-2 mb-8 font-['Poppins'] text-[18px] leading-[216%] tracking-[0%] text-[#1F2A2D]">
              {amenitiesList.map((amenity, index) => (
                <li key={index} className="flex items-start gap-2.5 font-body text-sm text-[#1F2A2D]">
 <span className="flex-1">{amenity.text}</span>
                </li>
              ))}
            </ul>
            <Button 
              asChild 
              size="lg" 
              className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold text-base leading-none px-6 py-3 rounded-md shadow-lg w-full sm:w-auto border-t border-[#DA8836]"
            >
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Reserva Ahora por WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
