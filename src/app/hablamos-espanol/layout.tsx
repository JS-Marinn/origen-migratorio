import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hablamos Español | Origen Migratorio LLC',
  description: 'Entendemos tu idioma y tu historia. Ofrecemos servicios migratorios y paralegales en español para nuestra comunidad.',
  openGraph: {
    title: 'Hablamos Español | Origen Migratorio LLC',
    description: 'Entendemos tu idioma y tu historia. Ofrecemos servicios migratorios y paralegales en español.',
  },
};

export default function HablamosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
