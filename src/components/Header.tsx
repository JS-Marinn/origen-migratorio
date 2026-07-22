'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { href: '/', label: 'Hogar' },
  { href: '/hablamos-espanol', label: 'Hablamos Español' },
  { href: '/servicios', label: 'Servicios Paralegales' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? 'shadow-lg shadow-navy/5' : 'shadow-none'
        }`}
      >
        <div className="container-om flex h-[76px] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[13px] font-semibold uppercase tracking-wider transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 ${
                    isActive ? 'text-navy after:w-full' : 'text-body/70 hover:text-navy after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contacto" className="btn-primary !py-3 !px-6">
              Agendar una consulta
            </Link>
          </div>

          <button
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden border-t border-navy/5 bg-white transition-all duration-300 ${
            open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="container-om flex flex-col py-4" aria-label="Navegación móvil">
            {navItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b border-mist py-4 text-sm font-semibold uppercase tracking-wider ${
                    isActive ? 'text-gold' : 'text-navy'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contacto" className="btn-primary mt-5 w-full">
              Agendar una consulta
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
