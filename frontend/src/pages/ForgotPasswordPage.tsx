import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useToast } from '../context/ToastContext';
import { ROUTES } from '../constants';

const schema = z.object({ email: z.email('Enter a valid email address') });
type ForgotForm = z.infer<typeof schema>;

export function ForgotPasswordPage() {
  const { success } = useToast();
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ForgotForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ForgotForm) => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsLoading(false);
    setSent(true);
    success('Email sent', `Password reset link sent to ${data.email}`);
  };

  return (
    <div>
      <Link
        to={ROUTES.LOGIN}
        className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 mb-7 transition-colors"
      >
        <ArrowLeft size={14} /> Back to sign in
      </Link>

      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.div key="form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <div className="mb-7">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Mail size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Reset password</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="you@hospital.com"
                error={errors.email?.message}
                required
                leftIcon={<Mail size={15} />}
                {...register('email')}
              />
              <Button variant="gradient" type="submit" fullWidth isLoading={isLoading}>
                Send Reset Link
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-5">
              <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Check your inbox</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              We've sent a password reset link to your email address. It expires in 30 minutes.
            </p>
            <Button variant="outline" onClick={() => setSent(false)}>
              Resend email
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
