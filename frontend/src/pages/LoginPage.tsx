import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { LogIn } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input, PasswordInput } from '../components/ui/Input';
import { Checkbox } from '../components/ui/Input';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { ROUTES } from '../constants';
import { SocialLogins } from '../components/auth/SocialLogins';

const loginSchema = z.object({
  email: z.email('Enter a valid email'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});
type LoginForm = z.infer<typeof loginSchema>;

export function LoginPage() {
  const { login } = useAuth();
  const { success, error: toastError } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: 'sarah.mitchell@healthcare-ai.com', password: 'demo1234' },
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      await login(data.email, data.password);
      success('Welcome back!', 'You have been successfully signed in.');
      navigate(ROUTES.DASHBOARD);
    } catch {
      toastError('Sign in failed', 'Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Sign in</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Access your Healthcare AI dashboard
        </p>
      </div>

      {/* Demo hint */}
      <div className="mb-5 p-3.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Demo Credentials</p>
        <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">sarah.mitchell@healthcare-ai.com</p>
        <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">demo1234</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="you@hospital.com"
          error={errors.email?.message}
          required
          {...register('email')}
        />
        <PasswordInput
          label="Password"
          placeholder="••••••••"
          error={errors.password?.message}
          required
          {...register('password')}
        />

        <div className="flex items-center justify-between">
          <Checkbox label="Remember me" {...register('rememberMe')} />
          <Link to={ROUTES.FORGOT_PASSWORD}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button variant="gradient" type="submit" fullWidth isLoading={isLoading}
          leftIcon={isLoading ? undefined : <LogIn size={16} />}>
          Sign In
        </Button>
      </form>

      <SocialLogins action="Sign in" />

      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
        Don't have an account?{' '}
        <Link to={ROUTES.REGISTER} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          Create account
        </Link>
      </p>
    </div>
  );
}
