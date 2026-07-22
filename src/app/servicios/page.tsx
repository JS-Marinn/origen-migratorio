'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, FileText, ClipboardList, FolderOpen, FileCheck, MessageSquare, ShieldCheck, RefreshCw, CheckCircle, Scale, Briefcase, Users, HeartHandshake, FileWarning, Flag, Globe, IdCard, Search, BookOpen } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { CTABand } from '@/components/Sections';
import { services, generalInclusions } from '@/data/services';
import ServiceFilterBar from '@/components/ServiceFilterBar';
import FloatingCTA from '@/components/FloatingCTA';

const serviceIcons: Record<string, typeof Scale> = {
  'renovacion-residencia': IdCard,
  'peticion-familiar': Users,
  'ajuste-estatus': FileCheck,
  'asilo-afirmativo': ShieldCheck,
  'asilo-en-corte': Scale,
  'vawa-i-360': HeartHandshake,
  'ajuste-vawa': FileCheck,
  'visa-u-i-918': FileWarning,
  'visa-prometido': HeartHandshake,
  'exencion-provisional': FileText,
  'ciudadania-n-400': Flag,
  'eliminacion-condiciones': FileCheck,
  'renovacion-permiso-trabajo': Briefcase,
  'renovacion-tps': Globe,
  'renovacion-daca': BookOpen,
  'solicitud-foia': Search,
  'procesamiento-consular': Globe,
};

const inclusionIcons = [FileText, ClipboardList, FolderOpen, FileCheck, MessageSquare, ShieldCheck, RefreshCw, CheckCircle];

const inclusionDescriptions = [
  'Preparamos cada formulario y organizamos todos los documentos que respaldan el caso.',
  'Diligenciamos los formularios oficiales requeridos por las autoridades migratorias.',
  'Clasificamos y ordenamos la evidencia para que el expediente esté completo y coherente.',
  'Estructuramos el paquete migratorio en secciones claras para facilitar la revisión.',
  'Te mantenemos informado sobre el avance de cada etapa del proceso.',
  'Aplicamos un control interno para garantizar precisión y consistencia.',
  'Incorporamos los cambios que sean necesarios con hasta dos rondas de revisión.',
  'Entregamos cada expediente listo para que el abogado lo revise y lo presente.',
];

export default function Servicios() {
  const [activeCategory, setActiveCategory] = useState('todas');
  const filtered = activeCategory === 'todas' ? services : services.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* ============ HERO — Deep Blue ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#2C3560] via-navy to-navy-dark" aria-label="Servicios Paralegales para Abogados">
        <div className="pointer-events-none absolute -inset-x-20 -top-40 h-[600px] w-[600px] rounded-full bg-gold/[0.04] blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-gold/[0.03] blur-3xl" aria-hidden="true" />
        <img src="/images/logo.png" alt="" className="pointer-events-none absolute -right-20 -top-24 h-[380px] w-[380px] object-contain opacity-[0.05] brightness-0 invert" aria-hidden="true" />
        <img src="/images/logo.png" alt="" className="pointer-events-none absolute -left-20 bottom-0 h-[200px] w-[200px] object-contain opacity-[0.03] brightness-0 invert" aria-hidden="true" />
        <div className="container-om py-24 sm:py-28">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent p-10 ring-1 ring-white/[0.12] shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/15 blur-2xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl" aria-hidden="true" />
            <p className="eyebrow">Servicios Paralegales</p>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
              Servicios Paralegales para Abogados
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg text-justify">
              En Origen Migratorio brindamos apoyo paralegal en la preparación de procesos migratorios,
              permitiendo que su despacho delegue la elaboración técnica de expedientes mientras mantiene
              el control y la dirección legal de cada caso.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 text-justify">
              Nuestro equipo trabaja bajo altos estándares de organización, confidencialidad y control
              de calidad para entregar expedientes completos, listos para revisión y presentación.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contacto" className="btn-gold">
                Solicitar cotización
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="#catalogo" className="btn-outline-light">
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />
      </section>

      {/* ============ GENERAL INCLUSIONS — Glass Cards on Navy ============ */}
      <section className="relative overflow-hidden bg-navy py-24" aria-label="Qué incluyen nuestros servicios">
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-gold/[0.04] blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />
        <div className="container-om relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center flex">¿Qué incluyen nuestros servicios?</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
              Todo lo que tu despacho necesita
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Cada servicio incluye el soporte documental completo para que solo tengas que revisar y presentar.
            </p>
          </Reveal>

          <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {generalInclusions.map((item, i) => {
              const Icon = inclusionIcons[i];
              return (
                <Reveal key={item.text} delay={i * 50}>
                  <div className="group relative h-full rounded-2xl bg-white/[0.05] p-6 ring-1 ring-white/[0.08] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/20">
                    <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-light ring-1 ring-gold/25 transition-all duration-500 group-hover:bg-gold group-hover:text-navy group-hover:ring-gold">
                      <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="mt-4 block text-sm font-medium leading-snug text-white/80 transition-colors duration-300 group-hover:text-white">{item.text}</span>
                    <p className="mt-2 text-xs leading-relaxed text-white/40">{inclusionDescriptions[i]}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SERVICES CATALOG — Navy Dark ============ */}
      <section id="catalogo" className="relative overflow-hidden bg-gradient-to-b from-navy-dark to-navy py-24" aria-label="Catálogo de servicios">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-gold/[0.03] blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" aria-hidden="true" />
        <div className="container-om relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center flex">Nuestros servicios</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
              Expedientes listos para revisión
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {filtered.length} servicio{filtered.length !== 1 ? 's' : ''} especializado{filtered.length !== 1 ? 's' : ''}. Cada expediente se entrega completo, organizado y listo para que tu firma lo revise y presente.
            </p>
          </Reveal>

          <ServiceFilterBar active={activeCategory} onChange={setActiveCategory} dark />

          <div className="grid gap-6 sm:grid-cols-2">
            {filtered.map((service, i) => {
              const Icon = serviceIcons[service.slug] || FileText;
              return (
                <Reveal key={service.slug} delay={(i % 6) * 50} className="h-full">
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="card-lift group flex h-full rounded-3xl bg-white shadow-lg shadow-black/10 ring-1 ring-white/20 overflow-hidden"
                  >
                    <div className="relative w-[130px] shrink-0 overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-navy-light flex flex-col items-center justify-center gap-2.5 p-4 sm:w-[150px]">
                      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/[0.08] blur-xl" aria-hidden="true" />
                      <div className="pointer-events-none absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-white/[0.04] blur-xl" aria-hidden="true" />
                      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 200 200" aria-hidden="true">
                        <pattern id="grid-sm" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill="#CD9F44" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid-sm)" />
                      </svg>
                      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-gold-light ring-1 ring-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy group-hover:ring-gold">
                        <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <span className="relative text-[10px] font-bold uppercase tracking-[0.15em] text-gold-light/60 text-center leading-tight">
                        {service.formNumber}
                      </span>
                      <div className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-gold/50 to-transparent" aria-hidden="true" />
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex flex-1 flex-col justify-center">
                        <h3 className="font-serif text-base font-bold text-navy transition-colors duration-300 group-hover:text-gold sm:text-lg">
                          {service.name}
                        </h3>

                      <div className="mt-3 flex-1 space-y-1.5">
                        {service.bullets!.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-2">
                            <span className="mt-0.5 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-gold-soft">
                              <Check size={8} className="text-gold" strokeWidth={3} aria-hidden="true" />
                            </span>
                            <span className="text-xs leading-snug text-body/70 sm:text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold transition-all duration-300 group-hover:translate-x-1 sm:text-sm">
                        Ver detalle
                        <ArrowRight size={12} aria-hidden="true" />
                      </span>
                    </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        title="¿Necesitas apoyo paralegal para tu despacho?"
        text="Déjanos la preparación técnica de los expedientes mientras tú te enfocas en la estrategia legal de cada caso."
        button="Solicitar cotización"
      />

      <FloatingCTA />
    </>
  );
}
