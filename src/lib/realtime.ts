import { supabase } from './supabase'
import type { RealtimePostgresChangesPayload } from '@supabase/supabase-js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Payload = RealtimePostgresChangesPayload<Record<string, any>>
type Handler = (payload: Payload) => void

const listeners = new Map<string, Set<Handler>>()

function emit(table: string, payload: Payload) {
  listeners.get(table)?.forEach(fn => fn(payload))
}

// One WebSocket connection for the entire app instead of one per component
supabase
  .channel('app-rt')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'members' },             p => emit('members', p))
  .on('postgres_changes', { event: '*', schema: 'public', table: 'courses' },             p => emit('courses', p))
  .on('postgres_changes', { event: '*', schema: 'public', table: 'services' },            p => emit('services', p))
  .on('postgres_changes', { event: '*', schema: 'public', table: 'projects' },            p => emit('projects', p))
  .on('postgres_changes', { event: '*', schema: 'public', table: 'mentors' },             p => emit('mentors', p))
  .on('postgres_changes', { event: '*', schema: 'public', table: 'opportunities' },       p => emit('opportunities', p))
  .on('postgres_changes', { event: '*', schema: 'public', table: 'contact_submissions' }, p => emit('contact_submissions', p))
  .subscribe()

/** Subscribe to DB changes for a table. Returns cleanup fn for useEffect. */
export function onTableChange(table: string, handler: Handler): () => void {
  if (!listeners.has(table)) listeners.set(table, new Set())
  listeners.get(table)!.add(handler)
  return () => listeners.get(table)?.delete(handler)
}
