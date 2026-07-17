import { Link } from 'react-router'

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Origen Migratorio LLC — Inicio">
      <img 
        src="/logo.png" 
        alt="Origen Migratorio LLC" 
        className={`h-[46px] w-auto object-contain ${dark ? 'brightness-0 invert' : ''}`} 
      />
    </Link>
  )
}
