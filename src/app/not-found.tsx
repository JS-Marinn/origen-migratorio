import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, SearchX } from 'lucide-react';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Página no encontrada | Origen Migratorio LLC',
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-mist px-5 py-24 text-center">
      <Reveal className="flex flex-col items-center max-w-lg">
        <span className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-white text-navy shadow-lg shadow-navy/5">
          <SearchX size={40} strokeWidth={1.5} />
        </span>
        <p className="eyebrow mt-8 justify-center flex">Error 404</p>
        <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-5 text-base leading-relaxed text-body/80">
          Lo sentimos, no pudimos encontrar la página que buscas. Es posible que el enlace haya cambiado o ya no exista.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            Volver al inicio
          </Link>
          <Link href="/servicios" className="btn-outline">
            Ver servicios
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
