import { Link } from 'react-router'
import {
  Users, ShieldCheck, HeartHandshake, FileWarning, Globe2, Flag, IdCard, Briefcase, FileSearch, Scale,
  Check, CalendarCheck,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import { CTABand } from '../components/Sections'
import heroEspanol from '../assets/hero-espanol.webp'

const communityServices = [
  { icon: Users, name: 'Procesos familiares', slug: 'procesos-familiares' },
  { icon: ShieldCheck, name: 'Asilo', slug: 'asilo' },
  { icon: HeartHandshake, name: 'VAWA', slug: 'vawa' },
  { icon: FileWarning, name: 'Visa U', slug: 'visa-u' },
  { icon: Globe2, name: 'TPS', slug: 'tps' },
  { icon: Flag, name: 'Ciudadanía', slug: 'ciudadania' },
  { icon: IdCard, name: 'Residencia', slug: 'residencia-permanente' },
  { icon: Briefcase, name: 'Permisos de trabajo', slug: 'permisos-de-trabajo' },
  { icon: FileSearch, name: 'FOIA', slug: 'foia' },
  { icon: Scale, name: 'Corte de inmigración', slug: 'tribunal-de-inmigracion' },
]

const commitments = [
  'Atención en español.',
  'Comunicación clara.',
  'Organización documental.',
  'Acompañamiento administrativo.',
  'Compromiso en cada proceso.',
]

export default function HablamosEspanol() {
  return (
    <>
      {/* ============ HERO cálido ============ */}
      <section className="relative isolate overflow-hidden bg-navy" aria-label="Hablamos Español">
        <img
          src={heroEspanol}
          alt="Familia hispana unida y sonriendo al atardecer"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-navy/30" aria-hidden="true" />
        <div className="container-om relative flex min-h-[540px] items-center py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Para nuestra comunidad</p>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Entendemos tu idioma.
              <span className="mt-2 block text-gold-light">Entendemos tu historia.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Sabemos que iniciar un proceso migratorio puede generar muchas dudas e incertidumbre. Por eso ponemos
              a tu disposición un equipo que habla español y está comprometido con brindarte una atención clara,
              cercana y respetuosa durante todo el proceso.
            </p>
            <div className="mt-9">
              <Link to="/contacto" className="btn-gold">
                <CalendarCheck size={18} aria-hidden="true" />
                Agendar una consulta
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ Estamos para ayudarte ============ */}
      <section className="bg-white py-24" aria-label="Estamos para ayudarte">
        <div className="container-om grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -right-5 -top-5 h-full w-full rounded-3xl border-2 border-gold/40" aria-hidden="true" />
              <img
                src={heroEspanol}
                alt="Acompañamiento cercano a familias hispanas"
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-3xl object-cover object-[center_20%] shadow-2xl shadow-navy/20"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow">Estamos para ayudarte</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
              La comunicación es fundamental
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-body/85">
              <p>
                En Origen Migratorio LLC creemos que la comunicación es fundamental. Nuestro objetivo es que
                comprendas cada etapa del proceso, resuelvas tus inquietudes y te sientas acompañado desde el
                primer contacto.
              </p>
              <p>
                Nos esforzamos por ofrecer una atención personalizada que facilite la preparación de tu
                documentación y te permita avanzar con mayor tranquilidad.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ Servicios para la comunidad hispana ============ */}
      <section className="bg-mist py-24" aria-label="Servicios para la comunidad hispana">
        <div className="container-om">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center flex">Servicios para la comunidad hispana</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl">
              Todo lo que necesitas, en tu idioma
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {communityServices.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <Link
                  to={`/servicios/${s.slug}`}
                  className="card-lift group flex h-full flex-col items-center rounded-3xl bg-white px-4 py-8 text-center shadow-sm ring-1 ring-navy/5"
                >
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-soft text-gold ring-1 ring-gold/30 transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-light">
                    <s.icon size={27} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="mt-4 text-sm font-semibold leading-snug text-navy">{s.name}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Nuestro compromiso contigo ============ */}
      <section className="bg-white py-24" aria-label="Nuestro compromiso contigo">
        <div className="container-om grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Nuestro compromiso contigo</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Un trato cercano, del primer mensaje al último documento
            </h2>
            <p className="mt-5 text-base leading-relaxed text-body/85">
              Sabemos lo que significa dejarlo todo para buscar un futuro mejor. Por eso nos comprometemos con
              cinco principios simples que guían cada caso que atendemos.
            </p>
            <Link to="/contacto" className="btn-primary mt-8">
              Hablar con nuestro equipo
            </Link>
          </Reveal>
          <div className="rounded-3xl bg-mist p-8 ring-1 ring-navy/5 sm:p-10">
            <ul className="space-y-5">
              {commitments.map((c, i) => (
                <Reveal key={c} delay={i * 90}>
                  <li className="flex items-center gap-4 border-b border-navy/5 pb-5 last:border-0 last:pb-0">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                      <Check size={18} strokeWidth={2.6} aria-hidden="true" />
                    </span>
                    <span className="font-serif text-xl font-medium text-navy">{c}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        title="Tu historia merece ser escuchada"
        text="Cuéntanos tu situación en español y recibe una orientación clara sobre las opciones disponibles para tu caso."
        button="Agendar mi consulta"
      />
    </>
  )
}
