import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import Logo from './Logo'
import { services } from '@/data/services'

const quickServices = services.slice(0, 6)

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-om grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div>
          <Logo dark />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Servicios migratorios y apoyo paralegal con un enfoque profesional, organizado y humano.
            Acompañamos a personas, familias y abogados en cada etapa del proceso.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://facebook.com/origenmigratorio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-navy"
            >
              <Facebook size={17} />
            </a>
            <a
              href="https://instagram.com/origenmigratorio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-navy"
            >
              <Instagram size={17} />
            </a>
            <a
              href="https://x.com/origenmigratorio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-navy"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a
              href="https://tiktok.com/@origenmigratorio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-navy"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </div>
        </div>

        {/* Navegación */}
        <nav aria-label="Navegación del pie de página">
          <h3 className="font-serif text-lg font-semibold text-gold-light">Navegación</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { href: '/', label: 'Hogar' },
              { href: '/hablamos-espanol', label: 'Hablamos Español' },
              { href: '/servicios', label: 'Servicios Paralegales' },
              { href: '/contacto', label: 'Contacto' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 transition-colors hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Servicios rápidos */}
        <nav aria-label="Servicios">
          <h3 className="font-serif text-lg font-semibold text-gold-light">Servicios</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="text-white/70 transition-colors hover:text-gold-light">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacto */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-gold-light">Contacto</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span>[Teléfono — pendiente]</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span>[Correo — pendiente]</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span>[Dirección — pendiente]</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span>[Horario — pendiente]</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-om flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Origen Migratorio LLC. Todos los derechos reservados.</p>
          <p className="max-w-xl">
            Origen Migratorio LLC no es un bufete de abogados y no brinda asesoría legal. Ofrecemos servicios
            administrativos y paralegales, trabajando de la mano de abogados licenciados.
          </p>
        </div>
      </div>
    </footer>
  )
}
