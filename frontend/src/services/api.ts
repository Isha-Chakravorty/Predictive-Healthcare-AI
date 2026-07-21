/// <reference types="vite/client" />
import axios from 'axios';

// ============================================================
// Axios instance (mock-ready, swap baseURL for real API)
// ============================================================

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor – attach auth token
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('healthcare-ai-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor – handle global errors
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('healthcare-ai-token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
