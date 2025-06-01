import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bed, Check, PawPrint } from 'lucide-react';

const amenitiesList = [
  { text: 'Baño privado con ducha y bidet' },
  { text: 'TV pantalla plana' },
  { text: 'Wi-Fi gratuito' },
  { text: 'Cocina equipada' },
  { text: 'Jardín con vistas a la cordillera' },
  { text: 'Estacionamiento privado sin costo' },
  { text: 'Aceptamos mascotas', icon: PawPrint },
];

export default function CabinDetailsSection() {
  const whatsappNumber = "5491112345678"; // Mantener consistencia con otras secciones
  const whatsappMessage = "Hola! Me gustaría hacer una reserva o consultar disponibilidad en Escapada Shautiau.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="alojamiento" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Sección Superior: Sobre las cabañas */}
        <div className="flex flex-col lg:flex-row lg:gap-12 items-start mb-16 md:mb-24">
          {/* Izquierda: Texto y Asador */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/icons/Lef-icon.svg"
                alt="Icono sección"
                width={32}
                height={32}
                className="text-primary" // text-primary podría no aplicar a un SVG directamente si los colores son internos. Se puede ajustar si es necesario.
              />
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
                Sobre las cabañas
              </h2>
            </div>
            <p className="text-muted-foreground mb-6 font-body text-base leading-relaxed">
              Dos cabañas totalmente equipadas para 4 y 5 personas. Naturaleza, confort y aire puro te esperan en el corazón de Santa Cruz. Incluyen asador a leña.
            </p>
            <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/3] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/gallery/cabanas.shautiau 002.png"
                alt="Dormitorio confortable en Cabañas Shautiau"
                width={400}
                height={300}
                className="w-full h-full object-cover"
                data-ai-hint="wood fire grill cozy"
              />
            </div>
          </div>
          {/* Derecha: Dos Imágenes Apiladas */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 space-y-6">
            <div className="rounded-lg overflow-hidden shadow-xl aspect-video">
              <Image
                src="/images/gallery/cabanas.shautiau 001.png"
                alt="Interior acogedor de una de las cabañas"
                width={600}
                height={338}
                className="w-full h-full object-cover"
                data-ai-hint="cabin interior dining rustic"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl aspect-video">
              <Image
                src="/images/gallery/cabanas.shautiau 003.png"
                alt="Asador a leña en Cabañas Shautiau"
                width={560}
                height={560}
                className="w-full h-full object-cover"
                data-ai-hint="cabin bedroom cozy comfortable"
              />
            </div>
          </div>
        </div>

        {/* Sección Inferior: Una experiencia acogedora */}
        <div className="flex flex-col lg:flex-row lg:gap-12 items-start">
          {/* Izquierda: Título, Texto, Imagen Exterior Grande */}
          <div className="lg:w-3/5">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4 leading-tight">
              Una experiencia<br />acogedora y cercana<br />a la naturaleza
            </h2>
            <p className="text-muted-foreground mb-8 font-body text-base leading-relaxed">
              Las instalaciones incluyen habitaciones equipadas con baño privado, televisión de pantalla plana y conexión Wi-Fi gratuita. Además, disponen de estacionamiento privado sin costo adicional.
            </p>
            <div className="rounded-lg overflow-hidden shadow-xl aspect-[16/9]">
              <Image
                src="https://placehold.co/800x450.png"
                alt="Vista exterior de Cabañas Shautiau en un entorno natural"
                width={800}
                height={450}
                className="w-full h-full object-cover"
                data-ai-hint="cabin exterior nature daytime serene"
              />
            </div>
          </div>
          {/* Derecha: Lista de Servicios y Botón */}
          <div className="lg:w-2/5 mt-10 lg:mt-0 lg:pt-4">
            <div className="flex items-center gap-2 mb-3">
              <Bed className="w-5 h-5 text-foreground flex-shrink-0" />
              <p className="font-body text-sm text-foreground font-medium">
                Cabañas equipadas para tu confort
              </p>
            </div>
            <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed">
              Nuestras cabañas tipo chalet cuentan con:
            </p>
            <ul className="space-y-2 mb-8">
              {amenitiesList.map((amenity, index) => (
                <li key={index} className="flex items-start gap-2.5 font-body text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="flex-1">{amenity.text}</span>
                  {amenity.icon && <amenity.icon className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />}
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
