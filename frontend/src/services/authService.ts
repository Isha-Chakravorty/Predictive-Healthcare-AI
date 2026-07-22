import api, { tokenStorage } from './api';

// ============================================================
// Types matching backend schemas
// ============================================================
export interface BackendUser {
  id: string;
  email: string;
  full_name: string;
  role: string;
  is_active: boolean;
  created_at: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

// ============================================================
// Auth Service
// ============================================================
const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>('/auth/login', { email, password });
    tokenStorage.setTokens(data.access_token, data.refresh_token);
    return data;
  },

  async register(params: {
    email: string;
    full_name: string;
    password: string;
  }): Promise<BackendUser> {
    const { data } = await api.post<BackendUser>('/auth/register', params);
    return data;
  },

  async getMe(): Promise<BackendUser> {
    const { data } = await api.get<BackendUser>('/auth/me');
    return data;
  },

  async updateProfile(full_name: string): Promise<BackendUser> {
    const { data } = await api.put<BackendUser>('/auth/me', { full_name });
    return data;
  },

  async changePassword(current_password: string, new_password: string): Promise<void> {
    await api.post('/auth/me/change-password', { current_password, new_password });
  },

  logout(): void {
    tokenStorage.clear();
  },

  isLoggedIn(): boolean {
    return !!tokenStorage.getAccess();
  },
};

export default authService;
