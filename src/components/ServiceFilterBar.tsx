'use client';

import { categories } from '@/data/services';

interface Props {
  active: string
  onChange: (slug: string) => void
  dark?: boolean
}

export default function ServiceFilterBar({ active, onChange, dark = false }: Props) {
  return (
    <div className="flex items-center justify-center gap-3 overflow-x-auto py-6 scrollbar-none">
      <button
        onClick={() => onChange('todas')}
        className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
          active === 'todas'
            ? dark
              ? 'bg-gold text-navy-dark shadow-sm shadow-black/20'
              : 'bg-navy text-gold-light shadow-sm shadow-navy/10'
            : dark
              ? 'bg-white/10 text-white/70 ring-1 ring-white/15 hover:bg-white/20 hover:text-white'
              : 'bg-white text-body/70 ring-1 ring-navy/10 hover:bg-gold-soft hover:text-navy'
        }`}
      >
        Todas
      </button>
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onChange(cat.slug)}
          className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
            active === cat.slug
              ? dark
                ? 'bg-gold text-navy-dark shadow-sm shadow-black/20'
                : 'bg-navy text-gold-light shadow-sm shadow-navy/10'
              : dark
                ? 'bg-white/10 text-white/70 ring-1 ring-white/15 hover:bg-white/20 hover:text-white'
                : 'bg-white text-body/70 ring-1 ring-navy/10 hover:bg-gold-soft hover:text-navy'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
