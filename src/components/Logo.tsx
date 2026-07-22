import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Origen Migratorio LLC — Inicio">
      <Image
        src="/images/logo.png"
        alt="Origen Migratorio LLC"
        width={1904}
        height={1879}
        className={`h-[38px] w-auto ${dark ? 'brightness-0 invert' : ''}`}
        unoptimized
        priority
      />
      <span className={`hidden text-[13px] font-semibold uppercase tracking-wider sm:block ${dark ? 'text-white' : 'text-navy'}`}>
        ORIGEN MIGRATORIO
      </span>
    </Link>
  )
}
