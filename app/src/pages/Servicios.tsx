import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, Users, ShieldCheck, HeartHandshake, FileWarning, Globe2, Flag, IdCard, Briefcase, FileSearch, Scale } from 'lucide-react'
import Reveal from '../components/Reveal'
import { CTABand } from '../components/Sections'
import { services } from '../data/services'

const serviceIcons: Record<string, typeof Users> = {
  'procesos-familiares': Users,
  asilo: ShieldCheck,
  vawa: HeartHandshake,
  'visa-u': FileWarning,
  tps: Globe2,
  ciudadania: Flag,
  'residencia-permanente': IdCard,
  'permisos-de-trabajo': Briefcase,
  foia: FileSearch,
  'tribunal-de-inmigracion': Scale,
}

const filters = ['Todos', 'Familiar', 'Humanitario', 'Residencia', 'Trabajo', 'Registros', 'Tribunal'] as const

export default function Servicios() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Todos')
  const visible = filter === 'Todos' ? services : services.filter((s) => s.category === filter)

  return (
    <>
      {/* ============ Intro ============ */}
      <section className="relative overflow-hidden bg-navy py-24" aria-label="Servicios Paralegales">
        <svg
          className="pointer-events-none absolute -right-16 -top-20 h-[340px] w-[340px] opacity-[0.07]"
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <circle cx="32" cy="32" r="30" fill="none" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M20 42 V26 l8 9 8-9 v16" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="container-om relative max-w-3xl">
          <Reveal>
            <p className="eyebrow">Servicios Paralegales</p>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
              Preparación documental experta para tu proceso migratorio
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
              En Origen Migratorio LLC ofrecemos servicios administrativos y paralegales enfocados en la
              preparación documental de diversos procesos migratorios. Cada servicio se desarrolla siguiendo
              procedimientos organizados que permiten brindar una atención eficiente y un adecuado seguimiento
              durante cada etapa.
            </p>
            <p className="mt-4 font-medium text-gold-light">Selecciona el servicio que deseas conocer.</p>
          </Reveal>
        </div>
      </section>

      {/* ============ Filtros + Grid ============ */}
      <section className="bg-mist py-20" aria-label="Lista de servicios">
        <div className="container-om">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar servicios por categoría">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    filter === f
                      ? 'bg-navy text-white shadow-lg shadow-navy/20'
                      : 'bg-white text-navy ring-1 ring-navy/10 hover:ring-gold'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s, i) => {
              const Icon = serviceIcons[s.slug]
              return (
                <Reveal key={s.slug} delay={(i % 3) * 90}>
                  <Link
                    to={`/servicios/${s.slug}`}
                    className="card-lift group flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy/5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold-light transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                        <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <span className="rounded-full bg-gold-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">
                        {s.category}
                      </span>
                    </div>
                    <h2 className="mt-5 font-serif text-xl font-semibold text-navy">{s.name}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-body/80">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
                      Ver requisitos <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CTABand
        title="¿No encuentras tu caso en la lista?"
        text="Cada historia migratoria es diferente. Agenda una consulta y evaluamos tu situación de manera personalizada."
      />
    </>
  )
}
