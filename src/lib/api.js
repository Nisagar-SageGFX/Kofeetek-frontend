import { supabase } from './supabase'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

async function authHeaders() {
  const { data: { session } } = await supabase.auth.getSession()
  return session?.access_token ? { Authorization: `Bearer ${session.access_token}` } : {}
}

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(body.error || 'Request failed')
  return body
}

// Public — used by the popup enquiry form (and can be reused by the contact form)
export function submitLead(payload) {
  return request('/api/leads', { method: 'POST', body: JSON.stringify(payload) })
}

// Admin — all three require the signed-in Supabase session used by AdminLogin/ProtectedRoute
export async function fetchLeads({ status } = {}) {
  const headers = await authHeaders()
  const qs = status && status !== 'all' ? `?status=${encodeURIComponent(status)}` : ''
  return request(`/api/leads${qs}`, { headers })
}

export async function updateLead(id, updates) {
  const headers = await authHeaders()
  return request(`/api/leads/${id}`, { method: 'PATCH', headers, body: JSON.stringify(updates) })
}

export async function deleteLead(id) {
  const headers = await authHeaders()
  return request(`/api/leads/${id}`, { method: 'DELETE', headers })
}
