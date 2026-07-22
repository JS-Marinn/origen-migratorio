import Link from 'next/link'
import { Award, Eye, HeartHandshake, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

/** Franja "Nuestra promesa de servicio" — el detalle de empresa grande, antes del footer. */
export function PromiseStrip() {
  const items = [
    {
      icon: Award,
      title: 'Profesionalismo',
      text: 'Cada proceso es preparado con organización, precisión y atención a los detalles.',
    },
    {
      icon: Eye,
      title: 'Transparencia',
      text: 'Mantenemos una comunicación clara durante cada etapa para que siempre conozcas el estado de tu proceso.',
    },
    {
      icon: HeartHandshake,
      title: 'Compromiso',
      text: 'Trabajamos con responsabilidad para ofrecer un servicio que inspire confianza y acompañe tus objetivos migratorios.',
    },
  ]
  return (
    <section className="border-t-2 border-gold bg-white" aria-label="Nuestra promesa de servicio">
      <div className="container-om py-14">
        <Reveal>
          <p className="eyebrow justify-center flex">Nuestra promesa de servicio</p>
        </Reveal>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className="flex flex-col items-center text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-soft text-gold ring-1 ring-gold/30">
                <item.icon size={24} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-body/80">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Banda dorada de llamado a la acción. */
export function CTABand({
  title = '¿Necesitas orientación sobre tu proceso?',
  text = 'Agenda una consulta y recibe atención personalizada para conocer las opciones disponibles según tu situación.',
  button = 'Agendar consulta',
}: {
  title?: string
  text?: string
  button?: string
}) {
  return (
    <section className="relative overflow-hidden bg-gold" aria-label="Llamado a la acción">
      <img src="/images/logo.png" alt="" className="pointer-events-none absolute -right-16 -top-24 h-[420px] w-[420px] object-contain opacity-10" aria-hidden="true" />
      <div className="container-om relative py-20 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold text-navy-dark sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-dark/80">{text}</p>
          <Link href="/contacto" className="btn-primary mt-8 !px-9 !py-4 text-base hover:!bg-white hover:!text-navy hover:!shadow-white/30">
            {button}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/** Cinta dorada con los servicios en desplazamiento continuo. */
export function GoldTicker() {
  const items = [
    'Petición Familiar', 'Ajuste de Estatus', 'Asilo Afirmativo', 'Asilo en Corte',
    'VAWA', 'Visa U', 'Visa de Prometido', 'Exención Provisional',
    'Ciudadanía', 'Eliminación de Condiciones', 'Permiso de Trabajo',
    'TPS', 'DACA', 'FOIA', 'Procesamiento Consular',
  ]
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden bg-navy-dark py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-gold-light/90">
            {item}
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  )
}
