import { Link } from 'react-router'
import {
  ArrowRight, Users, ShieldCheck, Scale, IdCard, Briefcase, FileSearch,
  UserCheck, FolderCheck, MessagesSquare, BadgeCheck, CalendarCheck, FileText, Search, ClipboardCheck, RefreshCw,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import { CTABand, GoldTicker } from '../components/Sections'
import { homeCategories } from '../data/services'
import heroHome from '../assets/hero-home.webp'

const categoryIcons: Record<string, typeof Users> = {
  users: Users,
  shield: ShieldCheck,
  scale: Scale,
  'id-card': IdCard,
  briefcase: Briefcase,
  'file-search': FileSearch,
}

const whyUs = [
  {
    icon: UserCheck,
    title: 'Atención personalizada',
    text: 'Cada caso es diferente. Escuchamos tu historia y te orientamos según tus necesidades.',
  },
  {
    icon: FolderCheck,
    title: 'Organización documental',
    text: 'Preparamos expedientes completos, organizados y estructurados para facilitar el desarrollo del proceso.',
  },
  {
    icon: MessagesSquare,
    title: 'Comunicación constante',
    text: 'Mantenemos informado al cliente durante cada etapa del servicio.',
  },
  {
    icon: BadgeCheck,
    title: 'Compromiso y profesionalismo',
    text: 'Trabajamos con altos estándares de calidad, cuidando cada detalle de la documentación.',
  },
]

const steps = [
  { icon: Search, text: 'Evaluamos tu situación.' },
  { icon: FolderCheck, text: 'Organizamos la documentación necesaria.' },
  { icon: FileText, text: 'Preparamos tu expediente.' },
  { icon: ClipboardCheck, text: 'Revisamos cada detalle antes de la entrega.' },
  { icon: RefreshCw, text: 'Realizamos seguimiento administrativo del proceso.' },
]

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden bg-navy" aria-label="Presentación">
        <img
          src={heroHome}
          alt="Equipo de Origen Migratorio LLC preparando documentación migratoria"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-navy/25" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/80 to-navy/30" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-dark/60 to-transparent" aria-hidden="true" />

        <div className="container-om relative grid min-h-[620px] items-center gap-12 py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Servicios migratorios y paralegales</p>
              <h1 className="mt-5 max-w-2xl font-serif text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.4rem]">
                Tu proceso migratorio comienza con un equipo que{' '}
                <span className="relative inline-block text-gold-light">
                  trabaja por tus objetivos.
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M2 6 Q 75 1 150 4 T 298 3" stroke="#CD9F44" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                En Origen Migratorio LLC brindamos servicios migratorios y apoyo paralegal con un enfoque
                profesional, organizado y humano. Acompañamos a personas, familias y abogados mediante procesos
                estructurados que facilitan la preparación documental y el desarrollo de cada caso.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link to="/contacto" className="btn-gold">
                  <CalendarCheck size={18} aria-hidden="true" />
                  Agendar una consulta
                </Link>
                <Link to="/servicios" className="btn-outline-light">
                  Conocer nuestros servicios
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Tarjeta flotante de confianza */}
          <Reveal delay={250} className="hidden lg:block">
            <div className="animate-float-slow ml-auto max-w-sm rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">
              <p className="font-serif text-xl font-semibold text-white">Trabajamos de la mano de abogados</p>
              <ul className="mt-5 space-y-4 text-sm text-white/85">
                {[
                  'Servicios paralegales para personas y firmas de abogados',
                  'Procesos organizados y atención personalizada',
                  'Acompañamiento durante cada etapa',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-navy-dark">
                      <BadgeCheck size={13} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-white/15 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">Hablamos Español</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <GoldTicker />

      {/* ============ ¿Quiénes somos? ============ */}
      <section className="bg-white py-24" aria-label="Quiénes somos">
        <div className="container-om grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">¿Quiénes somos?</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Comprometidos con cada paso de tu proceso migratorio.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-body/85">
              <p>
                En Origen Migratorio LLC creemos que cada historia merece ser atendida con responsabilidad,
                organización y profesionalismo.
              </p>
              <p>
                Nuestro equipo trabaja para ofrecer servicios administrativos y paralegales orientados a facilitar
                la preparación documental de cada caso, manteniendo una comunicación cercana y un acompañamiento
                constante durante todo el proceso.
              </p>
              <p className="font-medium text-navy">
                Nuestra prioridad es brindar soluciones organizadas que permitan a nuestros clientes avanzar con
                confianza hacia sus objetivos migratorios.
              </p>
            </div>
            <Link to="/hablamos-espanol" className="btn-outline mt-8">
              Conoce cómo te acompañamos
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-full w-full rounded-3xl border-2 border-gold/40" aria-hidden="true" />
              <img
                src={heroHome}
                alt="Detalle del trabajo documental organizado de Origen Migratorio"
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-3xl object-cover object-[center_30%] shadow-2xl shadow-navy/20"
              />
              <div className="absolute -bottom-7 -right-4 rounded-2xl bg-navy px-7 py-5 shadow-xl sm:-right-7">
                <p className="font-serif text-2xl font-bold text-gold-light">100%</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/80">Compromiso contigo</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ¿Por qué elegirnos? ============ */}
      <section className="bg-mist py-24" aria-label="Por qué elegirnos">
        <div className="container-om">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center flex">¿Por qué elegir Origen Migratorio?</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl">
              La diferencia está en cómo cuidamos tu caso
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <article className="card-lift group h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy/5">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-soft text-gold ring-1 ring-gold/25 transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-light">
                    <item.icon size={26} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body/80">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Nuestro proceso ============ */}
      <section className="bg-white py-24" aria-label="Nuestro proceso de trabajo">
        <div className="container-om">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center flex">Nuestro proceso de trabajo</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl">
              Cinco pasos, un solo objetivo: tu tranquilidad
            </h2>
          </Reveal>

          {/* Desktop: línea horizontal */}
          <div className="relative mt-16 hidden lg:block">
            <div className="absolute left-0 right-0 top-7 h-[2px] bg-gradient-to-r from-gold/20 via-gold to-gold/20" aria-hidden="true" />
            <ol className="relative grid grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <Reveal key={step.text} delay={i * 120}>
                  <li className="flex flex-col items-center text-center">
                    <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy font-serif text-lg font-bold text-gold-light ring-4 ring-white">
                      {i + 1}
                    </span>
                    <span className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-soft text-gold">
                      <step.icon size={19} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <p className="mt-3 max-w-[190px] text-sm font-medium leading-snug text-body">{step.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Mobile: vertical */}
          <ol className="relative mt-12 space-y-8 border-l-2 border-gold/40 pl-8 lg:hidden">
            {steps.map((step, i) => (
              <Reveal key={step.text} delay={i * 80}>
                <li className="relative">
                  <span className="absolute -left-[49px] inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy font-serif text-sm font-bold text-gold-light ring-4 ring-white">
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium text-body">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ Servicios (categorías) ============ */}
      <section className="bg-mist py-24" aria-label="Nuestros servicios">
        <div className="container-om">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center flex">Nuestros servicios</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl">
              Soluciones organizadas para cada etapa de tu proceso
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeCategories.map((cat, i) => {
              const Icon = categoryIcons[cat.icon]
              return (
                <Reveal key={cat.name} delay={i * 90}>
                  <Link
                    to={`/servicios/${cat.slug}`}
                    className="card-lift group flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-navy/5"
                  >
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold-light transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                      <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-serif text-xl font-semibold text-navy">{cat.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-body/80">{cat.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-transform duration-300 group-hover:translate-x-1">
                      Conocer más <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/servicios" className="btn-primary">
              Ver todos los servicios
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ Nuestro compromiso ============ */}
      <section className="relative overflow-hidden bg-navy py-24" aria-label="Nuestro compromiso">
        <svg
          className="pointer-events-none absolute -left-20 -bottom-24 h-[380px] w-[380px] opacity-[0.07]"
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <circle cx="32" cy="32" r="30" fill="none" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M20 42 V26 l8 9 8-9 v16" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="container-om relative text-center">
          <Reveal>
            <p className="eyebrow justify-center flex">Nuestro compromiso</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              No solo organizamos documentos.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Trabajamos para que cada proceso sea preparado con responsabilidad, precisión y atención a los
              detalles, ofreciendo un servicio cercano que genere confianza durante todo el camino migratorio.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
