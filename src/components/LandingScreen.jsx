import Logo from './Logo'

export default function LandingScreen({ onStart }) {
  return (
    <div className="min-h-dvh bg-cream flex flex-col">
      {/* Header */}
      <header className="p-0">
        <Logo />
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2 mb-10 shadow-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B7A63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span className="text-xs font-medium text-stone-600 tracking-wide">
            Autoevaluación de madurez en sostenibilidad
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-bold text-forest leading-tight max-w-xl mb-6">
          ¿Qué tan sostenible es tu{' '}
          <span className="text-teal">empresa?</span>
        </h1>

        <p className="text-stone-500 text-base sm:text-lg max-w-lg leading-relaxed mb-10">
          Descubrí el nivel de madurez de tu organización en sostenibilidad y triple impacto.
          Recibí recomendaciones personalizadas para llevar tu estrategia al siguiente nivel.
        </p>

        <button
          onClick={onStart}
          className="bg-forest text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-forest-dark transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-forest/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
        >
          Comenzar diagnóstico
        </button>

        {/* Feature strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 w-full max-w-2xl">
          {[
            { icon: '📋', label: '11 preguntas', sub: 'Sobre triple impacto' },
            { icon: '⏱️', label: '5 minutos',    sub: 'Rápido y sencillo' },
            { icon: '📊', label: 'Diagnóstico',  sub: 'Personalizado' },
            { icon: '✅', label: 'Recomendaciones', sub: 'Listas para aplicar' },
          ].map((f) => (
            <div key={f.label} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-stone-100">
              <div className="w-10 h-10 bg-peach rounded-xl flex items-center justify-center mx-auto mb-2 text-lg">
                {f.icon}
              </div>
              <p className="text-sm font-semibold text-forest">{f.label}</p>
              <p className="text-xs text-stone-400 mt-0.5">{f.sub}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
