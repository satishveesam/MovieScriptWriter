const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api/v1'
export const API_BASE_URL = (rawBaseUrl.startsWith('http') && !rawBaseUrl.endsWith('/api/v1'))
  ? `${rawBaseUrl.replace(/\/+$/, '')}/api/v1`
  : rawBaseUrl

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'sw_access_token',
  REFRESH_TOKEN: 'sw_refresh_token',
  USER: 'sw_user',
}

export const ROLES = {
  ADMIN: 'ADMIN',
  DIRECTOR: 'DIRECTOR',
  WRITER: 'WRITER',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER',
}
