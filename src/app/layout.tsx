import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { SITE_URL } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: '#313B5F',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Origen Migratorio LLC | Servicios Migratorios y Paralegales en Español",
  description: "En Origen Migratorio LLC brindamos servicios migratorios y apoyo paralegal con un enfoque profesional, organizado y humano. Hablamos español. Asilo, VAWA, Visa U, TPS, residencia, permisos de trabajo y más.",
  keywords: "servicios migratorios, paralegal inmigración, asilo, VAWA, visa U, TPS, residencia permanente, permisos de trabajo, FOIA, hablamos español",
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    siteName: "Origen Migratorio LLC",
    title: "Origen Migratorio LLC | Tu proceso migratorio comienza aquí",
    description: "Servicios migratorios y apoyo paralegal con un enfoque profesional, organizado y humano. Hablamos español.",
    url: "/",
    images: '/images/social/og-image.webp',
  },
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/x-icon" href="/images/icons/favicon.ico" />
        <link rel="shortcut icon" href="/images/icons/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Origen Migratorio LLC",
          "description": "Servicios migratorios y apoyo paralegal con un enfoque profesional, organizado y humano. Hablamos español.",
          "url": SITE_URL,
          "areaServed": "Estados Unidos",
          "availableLanguage": ["es", "en"],
          "knowsAbout": ["Asilo", "VAWA", "Visa U", "TPS", "Residencia permanente", "Permisos de trabajo", "FOIA", "Ciudadanía", "Tribunal de inmigración"]
        }) }} />
      </head>
      <body suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
