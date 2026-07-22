import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Servicios Paralegales para Abogados | Origen Migratorio LLC',
  description: 'Apoyo paralegal en la preparación de procesos migratorios. Expedientes completos, organizados y listos para revisión. I-130, I-485, I-589, VAWA, Visa U y más.',
  openGraph: {
    title: 'Servicios Paralegales para Abogados | Origen Migratorio LLC',
    description: 'Apoyo paralegal en la preparación de procesos migratorios. Expedientes completos, organizados y listos para revisión.',
  }
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
