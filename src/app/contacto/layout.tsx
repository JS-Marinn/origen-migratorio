import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Origen Migratorio LLC',
  description: 'Contáctanos para agendar una consulta y obtener más información sobre nuestros servicios migratorios.',
  openGraph: {
    title: 'Contacto | Origen Migratorio LLC',
    description: 'Contáctanos para agendar una consulta y obtener más información sobre nuestros servicios migratorios.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
