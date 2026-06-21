export default function Logo({ size = 48 }) {
  return (
    <img
      src="/logo.png"
      alt="Biofilia Consultoría Ambiental"
      style={{ height: size * 1.8, width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }}
    />
  )
}
