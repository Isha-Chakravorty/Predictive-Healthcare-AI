import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MailCheck, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../constants';

export function VerifyEmailPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');

  useEffect(() => {
    // Mock API call
    const verify = async () => {
      await new Promise(r => setTimeout(r, 2000));
      setStatus('success');
    };
    verify();
  }, []);

  return (
    <div className="text-center">
      {status === 'verifying' && (
        <div className="py-8">
          <Loader2 size={48} className="mx-auto text-blue-600 animate-spin mb-4" />
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Verifying Email</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
            Please wait while we verify your email address...
          </p>
        </div>
      )}

      {status === 'success' && (
        <div className="py-8">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <MailCheck size={32} className="text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Email Verified!</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 mb-8">
            Your email address has been successfully verified. You can now sign in to your account.
          </p>
          <Button variant="gradient" fullWidth onClick={() => navigate(ROUTES.LOGIN)} rightIcon={<ArrowRight size={16} />}>
            Continue to Sign In
          </Button>
        </div>
      )}

      {status === 'error' && (
        <div className="py-8">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">Verification Failed</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 mb-8">
            The verification link is invalid or has expired.
          </p>
          <Button variant="outline" fullWidth onClick={() => navigate(ROUTES.LOGIN)}>
            Return to Sign In
          </Button>
        </div>
      )}
    </div>
  );
}
