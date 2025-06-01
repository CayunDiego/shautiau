
'use client';

import Image from 'next/image';
import { Star, Zap } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    name: "Pato Mercado",
    date: "Hace 3 meses",
    score: 5,
    text: "Hermosa cabaña, muy cálida. Impecable limpieza. Un jardín con rosas deliciosas. La atención de sus dueños increíble: afables, solidarios. Lago Posadas un lugar maravilloso.",
    avatar_url: "https://lh3.googleusercontent.com/a-/ALV-UjVZ_nP2evop8Zyyv4OMmQEkNEn4ahUtIjzSXavgxwdHnkDFD8Kk=s40-c-rp-mo-br100"
  },
  {
    name: "Silva Hector",
    date: "Hace 4 meses",
    score: 5,
    text: "Muy lindas cabañas, recomiendo 100x100 limpias y con todo lo que tiene que tener para tener una buena estadía",
    avatar_url: "https://lh3.googleusercontent.com/a-/ALV-UjX-Lm_AY9brUC7eW3dZtxdOfXLk4kj20wwsr93O7Veggu6ePa3Ngg=s40-c-rp-mo-ba5-br100"
  },
  {
    name: "Andres Soria",
    date: "Hace un mes",
    score: 5,
    text: "Muy lindo",
    avatar_url: "https://lh3.googleusercontent.com/a-/ALV-UjW_GARCSUbCzLQQEOkRzMfS3pkYIrj73IRCTtW0VMem7cXKjF5q=s40-c-rp-mo-ba4-br100"
  },
  {
    name: "Marcos Ponce",
    date: "Hace 7 meses",
    score: 4,
    text: "Muy buen y cordial servicio!!! Lago Posadas es un lugar imperdible!!!!",
    avatar_url: "https://lh3.googleusercontent.com/a-/ALV-UjWZ84qneOtP3IsCmjRf3cwhuyd_yHxjJbhMjq0dF3atF8olxG2G=s40-c-rp-mo-ba6-br100"
  },
  {
    name: "Juan Manuel Gutierrez",
    date: "Hace un año",
    score: 4,
    text: "Bien ubicadas , internet andaba perfecto gracias a dios porque no hay señal de celular en el.pueblo",
    avatar_url: "https://lh3.googleusercontent.com/a-/ALV-UjUYuNIbMxH0EZZEa96wMVJf90MjUN-OnXOlVEmFJPillhiD_1YN5g=s40-c-rp-mo-ba3-br100"
  },
  {
    name: "Alejandro López",
    date: "Hace 3 años",
    score: 5,
    text: "Lugar muy cálido , equipado y muy limpio! Excelente lugar para descansar y disfrutar.",
    avatar_url: "https://lh3.googleusercontent.com/a/ACg8ocKKFYWJLa8HSbGJPUnrkivPiHEFRxzzEVEasnr4oYTCcsReMhM=s40-c-rp-mo-ba2-br100"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-24 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/gallery/fauna-patagonia-banner.png"
        alt="Fauna de la Patagonia, como llamas en un paisaje montañoso"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="patagonia wildlife llama"
        priority
      />

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Title & Subtitle */}
        <div className="mb-10 md:mb-16 text-center">
          <div className="flex items-center justify-center mb-3">
            <Zap className="w-7 h-7 md:w-8 md:h-8 text-cta transform -scale-x-100" /> {/* Icono izquierdo */}
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-headline font-bold text-white tracking-tight mx-3">
              ¿Cómo es hospedarse en Shautiau?
            </h2>
            <Zap className="w-7 h-7 md:w-8 md:h-8 text-cta" /> {/* Icono derecho */}
          </div>
          <p className="text-base sm:text-lg text-white/90 font-body max-w-2xl mx-auto">
            Ellos te lo cuentan
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: testimonialsData.length > 1, 
          }}
          className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto" // Aumentado el ancho máximo
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1"> 
                <div className="p-1 h-full"> {/* Asegurar que el item ocupe altura */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg min-h-[280px] justify-between"> {/* min-h y justify-between */}
                    <div>
                      <div className="flex items-center mb-4 space-x-3">
                        <Avatar className="w-10 h-10 border-2 border-white/50">
                          <AvatarImage src={testimonial.avatar_url} alt={testimonial.name} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {testimonial.name?.substring(0,1).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                          <p className="text-xs text-white/70">{testimonial.date}</p>
                        </div>
                      </div>
                      <div className="flex justify-center mb-3">
                        {Array(testimonial.score)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        {Array(5 - testimonial.score)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i + testimonial.score}
                              className="w-5 h-5 text-gray-500 fill-gray-500"
                            />
                          ))}
                      </div>
                      <p className="font-body text-white/95 text-sm md:text-base leading-relaxed italic">
                        “{testimonial.text}”
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {testimonialsData.length > 1 && ( 
            <>
              <CarouselPrevious className="text-white border-white/50 hover:bg-white/10 hover:text-white disabled:text-white/30 disabled:border-white/20 -left-2 sm:-left-4 md:-left-8" />
              <CarouselNext className="text-white border-white/50 hover:bg-white/10 hover:text-white disabled:text-white/30 disabled:border-white/20 -right-2 sm:-right-4 md:-right-8" />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
}
