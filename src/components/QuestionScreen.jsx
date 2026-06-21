import Logo from './Logo'

export default function QuestionScreen({
  question,
  currentIndex,
  total,
  selected,
  onSelect,
  onNext,
  onPrev,
}) {
  const progress = Math.round(((currentIndex) / total) * 100)

  return (
    <div className="min-h-dvh bg-cream flex flex-col">
      {/* Header */}
      <header className="px-6 pt-6 pb-3">
        <Logo size={36} />
      </header>

      {/* Progress */}
      <div className="px-6 py-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-stone-400 font-medium">
            Pregunta {currentIndex + 1} de {total}
          </span>
          <span className="text-xs text-teal font-semibold">{progress}%</span>
        </div>
        <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      {/* Question card */}
      <main className="flex-1 flex flex-col px-4 py-4 max-w-2xl mx-auto w-full fade-in">
        <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-6 sm:p-8 flex flex-col gap-6 flex-1">
          {/* Category tag */}
          <span className="inline-block self-start bg-peach text-terra text-[11px] font-semibold tracking-widest px-3 py-1 rounded-full uppercase">
            {question.category}
          </span>

          {/* Question text */}
          <h2 className="text-xl sm:text-2xl font-bold text-forest leading-snug">
            {question.question}
          </h2>

          {/* Options */}
          <fieldset className="flex flex-col gap-3">
            <legend className="sr-only">Opciones de respuesta</legend>
            {question.options.map((option, idx) => (
              <label
                key={idx}
                className={`flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl border-2 cursor-pointer transition-all duration-150
                  ${selected === idx
                    ? 'border-teal bg-teal/5'
                    : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50'
                  }`}
              >
                <span className={`text-sm font-medium leading-snug ${selected === idx ? 'text-forest' : 'text-stone-600'}`}>
                  {option}
                </span>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={idx}
                  checked={selected === idx}
                  onChange={() => onSelect(idx)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-150
                  ${selected === idx ? 'border-teal' : 'border-stone-300'}`}
                >
                  {selected === idx && (
                    <div className="w-2.5 h-2.5 rounded-full bg-teal" />
                  )}
                </div>
              </label>
            ))}
          </fieldset>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-auto pt-2">
            <button
              onClick={onPrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-600 disabled:opacity-0 disabled:pointer-events-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-lg px-2 py-1"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
              Anterior
            </button>

            {selected !== null && (
              <button
                onClick={onNext}
                className="flex items-center gap-1.5 bg-forest text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-forest-dark transition-all duration-150 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 fade-in"
              >
                {currentIndex === total - 1 ? 'Ver resultado' : 'Siguiente'}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
