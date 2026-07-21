import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { KeyRound, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PasswordInput } from '../components/ui/Input';
import { useToast } from '../context/ToastContext';
import { ROUTES } from '../constants';

const resetSchema = z.object({
  password: z.string().min(8, 'Minimum 8 characters'),
  confirmPassword: z.string(),
}).refine(d => d.password === d.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type ResetForm = z.infer<typeof resetSchema>;

export function ResetPasswordPage() {
  const { success } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ResetForm>({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit = async (data: ResetForm) => {
    setIsLoading(true);
    // Mock API call
    await new Promise(r => setTimeout(r, 1500));
    setIsLoading(false);
    success('Password Reset', 'Your password has been changed successfully.');
    navigate(ROUTES.LOGIN);
  };

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Reset Password</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Enter your new password below.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <PasswordInput
          label="New Password"
          placeholder="••••••••"
          error={errors.password?.message}
          required
          hint="Minimum 8 characters with letters and numbers"
          {...register('password')}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="••••••••"
          error={errors.confirmPassword?.message}
          required
          {...register('confirmPassword')}
        />

        <Button variant="gradient" type="submit" fullWidth isLoading={isLoading} rightIcon={isLoading ? undefined : <ArrowRight size={16} />}>
          Reset Password
        </Button>
      </form>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
        Remember your password?{' '}
        <Link to={ROUTES.LOGIN} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
