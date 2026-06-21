import { useState } from 'react'
import Logo from './Logo'
import { saveLead } from '../lib/supabase'

export default function LeadForm({ score, level, onSubmit }) {
  const [form, setForm] = useState({ nombre: '', email: '', organizacion: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await saveLead({
      nombre: form.nombre,
      email: form.email,
      organizacion: form.organizacion,
      puntaje: score,
      nivel: level.name,
    })

    setLoading(false)

    if (error) {
      setError('Hubo un error al guardar los datos. Intentá de nuevo.')
      return
    }

    onSubmit()
  }

  const isValid = form.nombre.trim() && form.email.includes('@') && form.organizacion.trim()

  return (
    <div className="min-h-dvh bg-cream flex flex-col">
      {/* Header */}
      <header className="px-6 pt-6 pb-3">
        <Logo size={36} />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 fade-in">
        <div className="w-full max-w-md">

          {/* Preview badge */}
          <div className="gradient-result rounded-2xl p-5 text-white text-center mb-6 shadow-lg">
            <p className="text-xs opacity-75 tracking-widest uppercase mb-1">Tu resultado está listo</p>
            <p className="text-2xl font-bold">{level.name}</p>
            <p className="text-sm opacity-80 mt-0.5">{Math.round((score / 33) * 100)}% · {score} de 33 puntos</p>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-7">
            <h2 className="text-xl font-bold text-forest mb-1">¿A quién le enviamos el diagnóstico?</h2>
            <p className="text-sm text-stone-400 mb-6 leading-relaxed">
              Completá tus datos para ver el resultado completo con recomendaciones personalizadas.
            </p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nombre" className="text-xs font-semibold text-forest tracking-wide uppercase">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                  autoComplete="name"
                  className="bg-cream border-2 border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all min-h-[48px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-forest tracking-wide uppercase">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@empresa.com"
                  required
                  autoComplete="email"
                  className="bg-cream border-2 border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all min-h-[48px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="organizacion" className="text-xs font-semibold text-forest tracking-wide uppercase">
                  Organización <span className="text-red-500">*</span>
                </label>
                <input
                  id="organizacion"
                  name="organizacion"
                  type="text"
                  value={form.organizacion}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa u organización"
                  required
                  autoComplete="organization"
                  className="bg-cream border-2 border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 transition-all min-h-[48px]"
                />
              </div>

              {error && (
                <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={!isValid || loading}
                className="mt-2 bg-forest text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-forest-dark transition-all duration-150 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 flex items-center justify-center gap-2 min-h-[48px]"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                    Guardando...
                  </>
                ) : (
                  <>
                    Ver mi diagnóstico completo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                  </>
                )}
              </button>

              <p className="text-xs text-stone-400 text-center leading-relaxed">
                Tu información es confidencial y nunca será compartida con terceros.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
