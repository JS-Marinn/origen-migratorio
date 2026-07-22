'use client'

import Link from 'next/link'
import { Calendar } from 'lucide-react'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 left-6 z-50 animate-cta-enter">
      <Link
        href="/contacto"
        className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-gold to-gold-light px-5 py-3 shadow-xl shadow-gold/25 ring-1 ring-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-1 hover:animate-none animate-gentle-float"
      >
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-dark text-gold-light transition-colors duration-300 group-hover:bg-navy">
          <Calendar size={14} strokeWidth={2.2} />
        </span>
        <span className="text-left leading-tight">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-navy-dark">
            Reserva hoy mismo
          </span>
          <span className="block text-[10px] font-medium text-navy-dark/80">
            Consulta gratuita de 30 min
          </span>
        </span>
      </Link>
    </div>
  )
}
