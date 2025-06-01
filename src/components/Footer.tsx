import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-8 text-[#1F2A2D]">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          <Image
            src="/icons/logo-shautiau.svg"
            alt="Logo Cabañas Shautiau"
            width={120}
            height={16} // Aproximadamente 320/41 aspect ratio for 120 width
            className="h-auto" // Tailwind class to ensure responsiveness with explicit width/height
          />
        </div>
        <p className="text-sm font-body">
          © 2025 Cabañas Shautiau. Todos los derechos reservados.
        </p>
        <p className="text-xs font-body mt-2">
          Tu refugio en la naturaleza.
        </p>
      </div>
    </footer>
  );
}
