import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarCheck, Check } from 'lucide-react';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import { CTABand } from '@/components/Sections';
import { services } from '@/data/services';
import { SITE_URL } from '@/lib/seo';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const title = service.formNumber
    ? `${service.name} (${service.formNumber}) | Origen Migratorio LLC`
    : `${service.name} | Origen Migratorio LLC`;

  return {
    title,
    description: service.short,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title,
      description: service.short,
      url: `/servicios/${service.slug}`,
    },
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: service.name,
        description: service.intro,
        provider: { '@type': 'LegalService', name: 'Origen Migratorio LLC', url: SITE_URL },
      }),
    },
  };
}

export default async function ServicioDetalle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE_URL}/servicios` },
          { '@type': 'ListItem', position: 3, name: service.name, item: `${SITE_URL}/servicios/${service.slug}` },
        ],
      },
      {
        '@type': 'Service',
        serviceType: service.name,
        description: service.intro,
        provider: { '@type': 'LegalService', name: 'Origen Migratorio LLC', url: SITE_URL },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden bg-navy py-20" aria-label={service.name}>
        <div className="container-om relative max-w-3xl">
          <Reveal>
            <Link href="/servicios" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-gold-light">
              <ArrowLeft size={16} aria-hidden="true" />
              Todos los servicios
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                {service.name}
              </h1>
              {service.formNumber && (
                <span className="rounded-full bg-gold/15 px-4 py-1.5 text-sm font-bold text-gold-light ring-1 ring-gold/25">
                  {service.formNumber}
                </span>
              )}
            </div>
            <p className="mt-5 text-lg font-medium text-gold-light">{service.short}</p>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" aria-hidden="true" />
      </section>

      <section className="bg-white py-16" aria-label="Descripción del servicio">
        <div className="container-om max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-body/85 sm:text-lg">{service.intro}</p>
          </Reveal>
        </div>
      </section>

      {service.bullets && (
        <section className="bg-mist py-20" aria-label="Lo que incluye">
          <div className="container-om">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center flex">Lo que incluye</p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl">
                Expediente completo, listo para revisión
              </h2>
            </Reveal>

            <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
              {service.bullets.map((bullet) => (
                <Reveal key={bullet}>
                  <div className="flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-navy/5">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold">
                      <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium leading-snug text-body">{bullet}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-20" aria-label="Evaluación del caso">
        <div className="container-om">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-light p-10 text-center sm:p-14">
              <img src="/images/logo.png" alt="" className="pointer-events-none absolute -right-14 -top-16 h-[280px] w-[280px] object-contain opacity-10 brightness-0 invert" aria-hidden="true" />
              <h2 className="relative font-serif text-3xl font-bold text-white sm:text-4xl">
                ¿Necesitas apoyo en este proceso?
              </h2>
              <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85">
                Permítenos encargarnos de la preparación técnica del expediente mientras tú mantienes el control legal del caso.
              </p>
              <p className="relative mx-auto mt-3 max-w-2xl font-semibold text-gold-light">
                Solicita una cotización y recibe información sobre nuestros servicios paralegales.
              </p>
              <Link href="/contacto" className="btn-gold relative mt-8">
                <CalendarCheck size={18} aria-hidden="true" />
                Solicitar cotización
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-16" aria-label="Otros servicios">
        <div className="container-om">
          <Reveal>
            <h2 className="text-center font-serif text-2xl font-bold text-navy">También te puede interesar</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link href={`/servicios/${s.slug}`} className="card-lift group flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-navy/5">
                  {s.formNumber && <span className="text-xs font-bold uppercase tracking-widest text-gold/70">{s.formNumber}</span>}
                  <h3 className={`font-serif text-lg font-semibold text-navy ${s.formNumber ? 'mt-1' : ''}`}>{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-body/75">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
                    Ver detalle <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
