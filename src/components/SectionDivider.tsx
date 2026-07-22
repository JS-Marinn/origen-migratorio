export default function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-6" aria-hidden="true">
      <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <span className="absolute flex h-3 w-3 rotate-45 border border-gold/40 bg-mist" />
    </div>
  );
}
