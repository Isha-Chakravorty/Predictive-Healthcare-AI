import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';
import type { User } from '../types';
import { STORAGE_KEYS } from '../constants';
import authService from '../services/authService';
import { adaptUser } from '../services/adapters';

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (params: { email: string; full_name: string; password: string }) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Restore user from localStorage if available
    const stored = localStorage.getItem(STORAGE_KEYS.USER);
    if (stored) {
      try {
        return JSON.parse(stored) as User;
      } catch {
        return null;
      }
    }
    return null;
  });
  const [isLoading, setIsLoading] = useState(true);

  // On mount: if we have a stored token, validate it by fetching /auth/me
  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
    if (!token) {
      setIsLoading(false);
      return;
    }
    authService
      .getMe()
      .then((backendUser) => {
        const adapted = adaptUser(backendUser);
        setUser(adapted);
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(adapted));
      })
      .catch(() => {
        // Token is invalid — clear everything
        authService.logout();
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // 1. Authenticate — stores tokens in localStorage
      await authService.login(email, password);
      // 2. Fetch user profile
      const backendUser = await authService.getMe();
      const adapted = adaptUser(backendUser);
      setUser(adapted);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(adapted));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(
    async (params: { email: string; full_name: string; password: string }) => {
      setIsLoading(true);
      try {
        await authService.register(params);
        // After registration, log in automatically
        await authService.login(params.email, params.password);
        const backendUser = await authService.getMe();
        const adapted = adaptUser(backendUser);
        setUser(adapted);
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(adapted));
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    authService.logout();
    setUser(null);
  }, []);

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...updates };
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const refreshUser = useCallback(async () => {
    try {
      const backendUser = await authService.getMe();
      const adapted = adaptUser(backendUser);
      setUser(adapted);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(adapted));
    } catch {
      // If refresh fails, keep existing user data
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateUser,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
