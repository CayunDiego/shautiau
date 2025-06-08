import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Cabañas Shautiau',
  description: 'Tu refugio perfecto en la naturaleza. Disfrutá de Lago Posadas en Santa Cruz, Argentina, con estilo, confort y astroturismo.',
  keywords: [
    'hotel',
    'hostal',
    'Lago Posadas',
    'Lago Buenos Aires',
    'Lago Puyrredon',
    'Patagonia',
    'Santa Cruz',
    'turismo',
    'naturaleza',
    'astroturismo',
    'cabañas',
    'escapada',
    'vacaciones',
  ],
  authors: [{ name: 'Cabañas Shautiau', url: 'www.shautiau.com.ar' }],
  creator: 'Cabañas Shautiau',
  publisher: 'Cabañas Shautiau',
  metadataBase: new URL('www.shautiau.com.ar'),
  openGraph: {
    title: 'Cabañas Shautiau',
    description: 'Tu refugio perfecto en la naturaleza junto al Lago Posadas, con astroturismo y relax en Santa Cruz.',
    url: 'www.shautiau.com.ar',
    siteName: 'Cabañas Shautiau',
    type: 'website',
    images: [
      {
        url: 'www.shautiau.com.ar/og-image-shautiau.jpg',
        width: 1200,
        height: 630,
        alt: 'Cabañas Shautiau junto al Lago Posadas en Santa Cruz, Patagonia',
      },
    ],
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabañas Shautiau',
    description: 'Tu refugio perfecto en la naturaleza. Disfrutá del Lago Posadas y noches estrelladas en Santa Cruz.',
    images: ['www.shautiau.com.ar/og-image-shautiau.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Style+Script&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-[65px]"> {/* Added pt-[65px] for fixed header */}
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
