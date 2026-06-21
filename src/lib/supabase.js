import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Only create client if env vars are present
export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

export async function saveLead({ nombre, email, organizacion, puntaje, nivel }) {
  if (!supabase) {
    console.warn('Supabase no configurado — completá el archivo .env')
    return { error: null }   // no bloquea el flujo en desarrollo
  }

  const { error } = await supabase.from('leads').insert([
    {
      nombre,
      email,
      organizacion,
      puntaje,
      nivel,
      porcentaje: Math.round((puntaje / 33) * 100),
      created_at: new Date().toISOString(),
    },
  ])

  if (error) console.error('Supabase error:', error)
  return { error }
}
