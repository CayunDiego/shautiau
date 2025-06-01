import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactLocationSection() {
  const whatsappNumber = "5492974194434"; 
  const whatsappMessage = "Hola! Me gustaría hacer una reserva o consultar disponibilidad en Escapada Shautiau.";
  const direccion = "Avenida San Martín 234, Z9315 Lago Posadas, Santa Cruz, Argentina";
  const telefono = "+54 9 297 419-4434";

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* Columna Izquierda: Mapa */}
          <div className="aspect-[4/3] lg:aspect-auto lg:h-full rounded-lg overflow-hidden shadow-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d370.10564069715656!2d-71.74400447036132!3d-47.56622934414571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbd9492ae04fee0f1%3A0x3bcdcac6f8124d39!2sCaba%C3%B1as%20Shautiau!5e0!3m2!1ses!2sar!4v1748732726739!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Escapada Shautiau"
              aria-label="Mapa de ubicación de Escapada Shautiau"
            ></iframe>
          </div>

          {/* Columna Derecha: Información de Contacto */}
          <div className="font-body text-foreground space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              <span role="img" aria-label="calendar" className="mr-2">📅</span>Reservá tu cabaña hoy
            </h2>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <h3 className="text-xl font-headline font-semibold text-primary">
                  Ubicación privilegiada
                </h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Nos encontramos en Av. San Martín 234, Lago Posadas, provincia de Santa Cruz. A pasos del centro del pueblo y con fácil acceso a senderos, lagos color turquesa y el famoso Arco de Piedra.
              </p>
            </div>

            <div>
              <p className="text-base">
                <span className="font-bold text-foreground">Dirección:</span>{' '}
                <span className="text-muted-foreground">{direccion}</span>
              </p>
              <p className="text-base mt-1">
                <span className="font-bold text-foreground">Teléfono:</span>{' '}
                <Link href={`tel:${telefono.replace(/\s|-/g, '')}`} className="text-muted-foreground hover:text-primary hover:underline">
                  {telefono}
                </Link>
              </p>
            </div>
            
            <Button 
              asChild 
              size="lg" 
              className="bg-cta hover:bg-cta/90 text-cta-foreground font-semibold text-[20.34px] leading-none px-8 py-3 rounded-md shadow-lg w-full sm:w-auto border-t border-[#DA8836] transform transition-transform hover:scale-105"
            >
              <Link 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserva Ahora por WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
