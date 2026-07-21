import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useToast } from '../context/ToastContext';
import { ROUTES } from '../constants';

const tfaSchema = z.object({
  code: z.string().length(6, 'Authentication code must be exactly 6 digits').regex(/^\d+$/, 'Must contain only numbers'),
});

type TFAForm = z.infer<typeof tfaSchema>;

export function TwoFactorAuthPage() {
  const { success, error: toastError } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<TFAForm>({
    resolver: zodResolver(tfaSchema),
  });

  const onSubmit = async (data: TFAForm) => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsLoading(false);

    if (data.code === '123456') {
      success('Authentication Successful', 'You are now signed in.');
      navigate(ROUTES.DASHBOARD);
    } else {
      toastError('Invalid Code', 'The code you entered is incorrect. (Try 123456)');
    }
  };

  return (
    <div>
      <div className="mb-7 text-center">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShieldCheck size={24} className="text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Two-Factor Auth</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
          Enter the 6-digit code sent to your authenticator app or email.
        </p>
      </div>

      <div className="mb-5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
        <p className="text-xs text-slate-500 dark:text-slate-400">For demo purposes, use code: <span className="font-mono font-bold text-slate-800 dark:text-slate-200">123456</span></p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          placeholder="000000"
          error={errors.code?.message}
          maxLength={6}
          className="text-center tracking-[0.5em] text-2xl font-mono py-3"
          required
          {...register('code')}
        />

        <Button variant="gradient" type="submit" fullWidth isLoading={isLoading} rightIcon={isLoading ? undefined : <ArrowRight size={16} />}>
          Verify
        </Button>
      </form>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
        Having trouble?{' '}
        <Link to={ROUTES.HELP_CENTER} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          Contact support
        </Link>
      </p>
    </div>
  );
}
