'use client';

import { categories } from '@/data/services';

interface Props {
  active: string
  onChange: (slug: string) => void
}

export default function ServiceFilterBar({ active, onChange }: Props) {
  return (
    <div className="flex items-center justify-center gap-3 overflow-x-auto py-6 scrollbar-none">
      <button
        onClick={() => onChange('todas')}
        className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
          active === 'todas'
            ? 'bg-navy text-gold-light shadow-sm shadow-navy/10'
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
              ? 'bg-navy text-gold-light shadow-sm shadow-navy/10'
              : 'bg-white text-body/70 ring-1 ring-navy/10 hover:bg-gold-soft hover:text-navy'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
