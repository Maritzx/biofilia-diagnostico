export default function Logo({ color = '#C96B3A', size = 48 }) {
  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="21" stroke={color} strokeWidth="2.5" fill="none" />
        <circle cx="24" cy="24" r="13" stroke={color} strokeWidth="2.5" fill="none" />
        <circle cx="24" cy="24" r="6"  stroke={color} strokeWidth="2.5" fill="none" />
        <ellipse cx="24" cy="24" rx="2.5" ry="4" stroke={color} strokeWidth="2" fill="none" />
      </svg>
      <div>
        <p style={{ color }} className="font-bold tracking-[0.18em] text-sm leading-tight">
          BIOFILIA
        </p>
        <p style={{ color }} className="text-[9px] tracking-[0.15em] font-light">
          CONSULTORÍA AMBIENTAL
        </p>
      </div>
    </div>
  )
}
