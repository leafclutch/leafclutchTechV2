import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const FETCH_TIMEOUT_MS = 20_000

async function fetchWithTimeout(url: RequestInfo | URL, options?: RequestInit): Promise<Response> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
  const signal = options?.signal
    ? anySignal([options.signal, controller.signal])
    : controller.signal
  return fetch(url, { ...options, signal }).finally(() => clearTimeout(timer))
}

function anySignal(signals: AbortSignal[]): AbortSignal {
  const controller = new AbortController()
  for (const signal of signals) {
    if (signal.aborted) { controller.abort(); break }
    signal.addEventListener('abort', () => controller.abort(), { once: true })
  }
  return controller.signal
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { fetch: fetchWithTimeout },
  auth: { persistSession: true, autoRefreshToken: true },
})
