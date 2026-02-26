const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export function getToken() {
  return localStorage.getItem("token");
}

async function handle(res) {
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!res.ok) {
    throw new Error(data?.message || data?.error || data || "Request failed");
  }
  return data;
}

function authHeaders(auth) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

export const apiGet = (path, opts = {}) =>
  fetch(`${API_BASE}${path}`, {
    headers: authHeaders(opts.auth),
  }).then(handle);

export const apiPost = (path, body, opts = {}) =>
  fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: authHeaders(opts.auth),
    body: JSON.stringify(body),
  }).then(handle);

export const apiPatch = (path, body, opts = {}) =>
  fetch(`${API_BASE}${path}`, {
    method: "PATCH",
    headers: authHeaders(opts.auth),
    body: JSON.stringify(body),
  }).then(handle);

export const apiDelete = (path, opts = {}) =>
  fetch(`${API_BASE}${path}`, {
    method: "DELETE",
    headers: authHeaders(opts.auth),
  }).then(handle);
