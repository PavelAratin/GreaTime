export const API_URL = process.env.NEXT_DB_URL;

export const API_URLS = {
  REGISTRATION: `${API_URL}/auth/registration`,
};

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};