'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: '¿Qué tipo de servicios ofrece Origen Migratorio LLC?',
    a: 'Ofrecemos servicios de preparación documental y apoyo paralegal en procesos migratorios. Trabajamos con personas, familias y firmas de abogados, brindando expedientes organizados y listos para revisión.',
  },
  {
    q: '¿Origen Migratorio LLC es un bufete de abogados?',
    a: 'No. Origen Migratorio LLC no es un bufete de abogados ni brinda asesoría legal. Ofrecemos servicios administrativos y paralegales, y trabajamos de la mano de abogados licenciados para la preparación de cada caso.',
  },
  {
    q: '¿En qué idiomas ofrecemos atención?',
    a: 'Brindamos atención en español e inglés. Entendemos la importancia de una comunicación clara, por lo que nuestro equipo está preparado para atenderte en el idioma con el que te sientas más cómodo.',
  },
  {
    q: '¿Cuánto tiempo toma la preparación de un expediente?',
    a: 'El tiempo varía según la complejidad del caso y la documentación disponible. Trabajamos con plazos definidos desde el inicio y te mantenemos informado sobre el avance de tu expediente.',
  },
  {
    q: '¿Trabajan solo con abogados o también con personas individuales?',
    a: 'Trabajamos con ambos. Para personas individuales ofrecemos nuestros servicios a través de Hablamos Español, y para firmas de abogados a través de Servicios Paralegales.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-24" aria-label="Preguntas frecuentes">
      <div className="container-om mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow justify-center flex">Preguntas frecuentes</p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-navy sm:text-4xl">
            Resolvemos tus dudas
          </h2>
        </Reveal>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 80}>
              <div
                className={`group cursor-pointer overflow-hidden rounded-2xl bg-white ring-1 transition-all duration-500 ease-out hover:shadow-md ${
                  openIndex === i ? 'ring-gold/40 shadow-lg shadow-gold/5' : 'ring-navy/5'
                }`}
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i); } }}
                aria-expanded={openIndex === i}
              >
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <span className="text-sm font-semibold text-navy sm:text-base">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-gold transition-all duration-500 ease-out ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: openIndex === i ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-navy/5 px-6 py-5">
                      <p className="text-sm leading-relaxed text-body/80">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
