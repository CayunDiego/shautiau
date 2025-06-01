'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const whatsappNumber = "5491112345678";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola! Me gustaría consultar sobre Cabañas Shautiau.")}`;

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-3 px-4 md:px-8 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out
      ${isScrolled
        ? 'bg-background/60 backdrop-blur-md shadow-sm border-b border-border/20'
        : 'bg-transparent shadow-none border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/icons/logo-shautiau.svg"
            alt="Logo Cabañas Shautiau"
            width={200}
            height={41}
            className="transition-opacity duration-300 group-hover:opacity-80 h-auto lg:w-auto"
            priority
          />
        </Link>

        {/* Botón hamburguesa en mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menú principal (visible en desktop) */}
        <nav className="hidden md:flex items-center space-x-3 md:space-x-5 font-body">
          <Link href="#alojamiento" className="font-bold text-lg text-[#2F3C40] hover:text-primary transition-colors">Alojamiento</Link>
          <Link href="#servicios" className="font-bold text-lg text-[#2F3C40] hover:text-primary transition-colors">Servicios</Link>
          <Link href="#contact" className="font-bold text-lg text-[#2F3C40] hover:text-primary transition-colors">Contactanos</Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/whatsApp.svg" alt="WhatsApp" width={24} height={24} />
          </Link>
        </nav>
      </div>

      {/* Menú desplegable en mobile */}
      {menuOpen && (
        <div className="md:hidden mt-3 px-4 bg-black/30 backdrop-blur-sm shadow-lg rounded-md space-y-3 pb-4">
          <Link href="#alojamiento" className="block text-lg text-[#2F3C40] hover:text-white" onClick={() => setMenuOpen(false)}>Alojamiento</Link>
          <Link href="#servicios" className="block text-lg text-[#2F3C40] hover:text-white" onClick={() => setMenuOpen(false)}>Servicios</Link>
          <Link href="#contact" className="block text-lg text-[#2F3C40] hover:text-white" onClick={() => setMenuOpen(false)}>Contactanos</Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
            <Image src="/icons/whatsApp.svg" alt="WhatsApp" width={24} height={24} />
          </Link>
        </div>
      )}
    </header>
  );
}
