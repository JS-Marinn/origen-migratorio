'use client';

import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MapPinned } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { services } from '@/data/services';

const contactCards = [
  { icon: Phone, title: 'Llámanos', value: '[Teléfono — pendiente]', href: 'tel:+10000000000' },
  { icon: Mail, title: 'Escríbenos', value: '[Correo — pendiente]', href: 'mailto:info@ejemplo.com' },
  { icon: MapPin, title: 'Visítanos', value: '[Dirección — pendiente]', href: undefined },
];

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ============ Encabezado ============ */}
      <section className="relative overflow-hidden bg-navy py-20" aria-label="Contacto">
        <div className="container-om relative max-w-3xl">
          <Reveal>
            <p className="eyebrow">Contacto</p>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
              Estamos listos para ayudarte.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
              Si deseas obtener más información sobre nuestros servicios o agendar una consulta, nuestro equipo
              estará disponible para atenderte y orientarte.
            </p>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" aria-hidden="true" />
      </section>

      {/* ============ Tarjetas de contacto ============ */}
      <section className="bg-mist py-16" aria-label="Información de contacto">
        <div className="container-om grid gap-6 sm:grid-cols-3">
          {contactCards.map((card, i) => {
            const inner = (
              <>
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-soft text-gold ring-1 ring-gold/30 transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-light">
                  <card.icon size={26} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-serif text-xl font-semibold text-navy">{card.title}</h2>
                <p className="mt-2 text-sm font-medium text-gold">{card.value}</p>
              </>
            );
            return (
              <Reveal key={card.title} delay={i * 100}>
                {card.href ? (
                  <a href={card.href} className="card-lift group flex h-full flex-col items-center rounded-3xl bg-white p-9 text-center shadow-sm ring-1 ring-navy/5">
                    {inner}
                  </a>
                ) : (
                  <div className="card-lift group flex h-full flex-col items-center rounded-3xl bg-white p-9 text-center shadow-sm ring-1 ring-navy/5">
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6">
          <div className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm text-body/80 ring-1 ring-navy/5 sm:mx-auto sm:w-fit">
            <Clock size={18} className="text-gold" aria-hidden="true" />
            <span>Horario de atención: <strong className="text-navy">[Horario — pendiente]</strong></span>
          </div>
        </Reveal>
      </section>

      {/* ============ Formulario + mapa ============ */}
      <section className="bg-white py-20" aria-label="Formulario de contacto">
        <div className="container-om grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl bg-white p-8 shadow-xl shadow-navy/10 ring-1 ring-navy/5 sm:p-10">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gold-soft text-gold">
                    <CheckCircle2 size={40} aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 font-serif text-3xl font-bold text-navy">¡Solicitud enviada!</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-body/80">
                    Gracias por escribirnos. Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo a la
                    brevedad posible. Si tu caso es urgente, llámanos directamente.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-outline mt-8">
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl font-bold text-navy">Agenda tu consulta</h2>
                  <p className="mt-2 text-sm text-body/75">
                    Completa el formulario y te contactaremos para coordinar tu atención personalizada.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nombre" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy">
                        Nombre
                      </label>
                      <input
                        id="nombre" name="nombre" type="text" required autoComplete="name"
                        className="w-full rounded-xl border border-navy/15 bg-mist/50 px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/25"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy">
                        Teléfono
                      </label>
                      <input
                        id="telefono" name="telefono" type="tel" required autoComplete="tel"
                        className="w-full rounded-xl border border-navy/15 bg-mist/50 px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/25"
                        placeholder="(000) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="correo" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy">
                        Correo electrónico
                      </label>
                      <input
                        id="correo" name="correo" type="email" required autoComplete="email"
                        className="w-full rounded-xl border border-navy/15 bg-mist/50 px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/25"
                        placeholder="tucorreo@ejemplo.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="servicio" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy">
                        Servicio de interés
                      </label>
                      <select
                        id="servicio" name="servicio" required defaultValue=""
                        className="w-full rounded-xl border border-navy/15 bg-mist/50 px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/25"
                      >
                        <option value="" disabled>Selecciona un servicio</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.name}>{s.name}</option>
                        ))}
                        <option value="Otro">Otro / No estoy seguro</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="mensaje" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy">
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje" name="mensaje" rows={5} required
                        className="w-full resize-none rounded-xl border border-navy/15 bg-mist/50 px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/25"
                        placeholder="Cuéntanos brevemente tu situación…"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button type="submit" className="btn-primary w-full sm:w-auto">
                        Enviar solicitud
                        <Send size={17} aria-hidden="true" />
                      </button>
                      <p className="mt-4 text-xs leading-relaxed text-body/60">
                        Al enviar este formulario aceptas ser contactado por nuestro equipo. Tu información se
                        maneja de forma confidencial.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* Mapa / ubicación */}
          <Reveal delay={150}>
            <div className="flex h-full min-h-[380px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gold/40 bg-gold-soft/40 p-10 text-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-gold shadow-md">
                <MapPinned size={28} aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-serif text-xl font-semibold text-navy">Nuestra ubicación</h2>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-body/75">
                [Dirección — pendiente] Aquí se integrará el mapa interactivo cuando esté disponible la dirección
                oficial de la oficina.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
