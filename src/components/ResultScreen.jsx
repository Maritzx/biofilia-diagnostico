import Logo from './Logo'
import { levels, getPercentage } from '../data/questions'

export default function ResultScreen({ score, level, onRestart }) {
  const percentage = getPercentage(score)
  const currentLevelIndex = levels.findIndex((l) => l.name === level.name)

  return (
    <div className="min-h-dvh bg-cream flex flex-col">
      {/* Header */}
      <header className="px-6 pt-6 pb-3">
        <Logo size={36} />
      </header>

      <main className="flex-1 px-4 py-4 max-w-2xl mx-auto w-full fade-in">
        <div className="flex flex-col gap-5">

          {/* Score card */}
          <div className="gradient-result rounded-3xl p-8 text-white text-center shadow-xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 opacity-80">
              Nivel de Sostenibilidad
            </p>
            <h1 className="text-4xl font-bold mb-2">{level.name}</h1>
            <p className="text-sm italic opacity-90 mb-6">{level.tagline}</p>

            <div className="bg-white/15 backdrop-blur-sm rounded-2xl px-8 py-5 inline-block">
              <p className="text-xs opacity-75 mb-1">Tu puntuación</p>
              <p className="text-5xl font-bold">{percentage}%</p>
              <p className="text-xs opacity-70 mt-1">{score} de 33 puntos</p>
            </div>
          </div>

          {/* Level scale */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-5">
            <div className="flex gap-2">
              {levels.map((l, i) => (
                <div key={l.name} className="flex-1 text-center">
                  <div
                    className={`h-2 rounded-full mb-2 transition-all ${i <= currentLevelIndex ? 'opacity-100' : 'opacity-25'}`}
                    style={{ backgroundColor: l.color }}
                  />
                  <span className={`text-[10px] font-semibold ${i === currentLevelIndex ? 'text-forest' : 'text-stone-400'}`}>
                    {l.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* What it means */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
            <h2 className="text-base font-bold text-forest mb-3">¿Qué significa esto?</h2>
            <p className="text-sm text-stone-500 leading-relaxed">{level.description}</p>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
            <h2 className="text-base font-bold text-forest mb-4">Recomendaciones personalizadas</h2>
            <ul className="flex flex-col gap-3">
              {level.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="flex-shrink-0 mt-0.5"
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="#1B7A63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="text-sm text-stone-600 leading-relaxed">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div className="gradient-cta rounded-3xl p-8 text-white text-center shadow-xl">
            <h2 className="text-xl font-bold mb-2">¿Listo para dar el siguiente paso?</h2>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Nuestro equipo de consultores en triple impacto puede acompañarte para llevar tu organización al siguiente nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wearebiofilia.com/#contacto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-forest font-semibold text-sm px-6 py-3 rounded-full hover:bg-stone-50 transition-all duration-150 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Agendá una reunión gratuita con Biofilia →
              </a>
              <button
                onClick={onRestart}
                className="flex items-center justify-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full px-4 py-3"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.85"/></svg>
                Repetir test
              </button>
            </div>
          </div>

          {/* Footer spacer */}
          <div className="h-4" />
        </div>
      </main>
    </div>
  )
}
