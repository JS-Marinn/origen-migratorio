import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, CalendarCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import { CTABand } from '../components/Sections'
import { services } from '../data/services'

export default function ServicioDetalle() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  useEffect(() => {
    if (service) {
      document.title = `${service.name} | Origen Migratorio LLC`
      const meta = document.querySelector('meta[name="description"]')
      meta?.setAttribute('content', `${service.short} ${service.intro.slice(0, 110)}…`)
    }
    return () => {
      document.title = 'Origen Migratorio LLC | Servicios Migratorios y Paralegales en Español'
    }
  }, [service])

  if (!service) return <Navigate to="/servicios" replace />

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      {/* ============ Encabezado de la ficha ============ */}
      <section className="relative overflow-hidden bg-navy py-20" aria-label={service.name}>
        <div className="container-om relative max-w-3xl">
          <Reveal>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-gold-light"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Todos los servicios
            </Link>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-5 text-lg font-medium text-gold-light">{service.short}</p>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" aria-hidden="true" />
      </section>

      {/* ============ Introducción ============ */}
      <section className="bg-white py-16" aria-label="Descripción del servicio">
        <div className="container-om max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-body/85 sm:text-lg">{service.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* ============ Requisitos ============ */}
      {service.requirements && (
        <section className="bg-mist py-20" aria-label="Requisitos generales">
          <div className="container-om">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center flex">Requisitos generales</p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl">
                ¿Quiénes pueden iniciar este proceso?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-body/75">
                Cada caso debe analizarse de manera individual para determinar si reúne las condiciones necesarias.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {service.requirements.map((req, i) => (
                <Reveal key={req.title} delay={(i % 2) * 100}>
                  {req.highlight ? (
                    <article className="relative h-full overflow-hidden rounded-3xl bg-navy p-8 shadow-xl shadow-navy/20">
                      <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-dark">
                        Punto clave
                      </span>
                      <h3 className="max-w-[80%] font-serif text-2xl font-semibold text-gold-light">{req.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/85">{req.text}</p>
                      <div className="absolute bottom-0 left-0 h-1 w-full bg-gold" aria-hidden="true" />
                    </article>
                  ) : (
                    <article className="card-lift h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy/5">
                      <span className="font-serif text-3xl font-bold text-gold/60">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="mt-2 font-serif text-xl font-semibold text-navy">{req.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-body/80">{req.text}</p>
                    </article>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ Cierre: ¿No estás seguro si calificas? ============ */}
      <section className="bg-white py-20" aria-label="Evaluación del caso">
        <div className="container-om">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-light p-10 text-center sm:p-14">
              <svg
                className="pointer-events-none absolute -right-14 -top-16 h-[280px] w-[280px] opacity-10"
                viewBox="0 0 64 64"
                aria-hidden="true"
              >
                <circle cx="32" cy="32" r="30" fill="none" stroke="#CD9F44" strokeWidth="1.5" />
                <path d="M20 42 V26 l8 9 8-9 v16" fill="none" stroke="#CD9F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="relative font-serif text-3xl font-bold text-white sm:text-4xl">
                ¿No estás seguro si calificas?
              </h2>
              <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85">
                Cada historia migratoria es diferente. Una evaluación profesional puede ayudarte a identificar las
                opciones disponibles y determinar si tu caso reúne los requisitos para iniciar este proceso en
                Estados Unidos.
              </p>
              <p className="relative mx-auto mt-3 max-w-2xl font-semibold text-gold-light">
                Agenda una consulta con nuestro equipo y recibe una evaluación personalizada de tu caso.
              </p>
              <Link to="/contacto" className="btn-gold relative mt-8">
                <CalendarCheck size={18} aria-hidden="true" />
                Agendar una consulta
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ Otros servicios ============ */}
      <section className="bg-mist py-16" aria-label="Otros servicios">
        <div className="container-om">
          <Reveal>
            <h2 className="text-center font-serif text-2xl font-bold text-navy">También te puede interesar</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link
                  to={`/servicios/${s.slug}`}
                  className="card-lift group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5"
                >
                  <h3 className="font-serif text-lg font-semibold text-navy">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-body/75">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
                    Conocer más <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
