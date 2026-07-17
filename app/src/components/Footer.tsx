import { Link } from 'react-router'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import Logo from './Logo'
import { services } from '../data/services'

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
              href="https://twitter.com/origenmigratorio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-gold hover:bg-gold hover:text-navy"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
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
              { to: '/', label: 'Nuestra Empresa' },
              { to: '/hablamos-espanol', label: 'Hablamos Español' },
              { to: '/servicios', label: 'Servicios Paralegales' },
              { to: '/contacto', label: 'Contacto' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/70 transition-colors hover:text-gold-light">
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
                <Link to={`/servicios/${s.slug}`} className="text-white/70 transition-colors hover:text-gold-light">
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
