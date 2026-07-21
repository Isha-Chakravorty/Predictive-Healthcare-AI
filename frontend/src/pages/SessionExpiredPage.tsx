import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, LogIn } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../constants';

export function SessionExpiredPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
        <Clock size={32} className="text-yellow-600 dark:text-yellow-400" />
      </div>
      
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Session Expired</h1>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 max-w-sm mx-auto">
        For your security, your session has timed out due to inactivity. Please sign in again to continue working.
      </p>

      <div className="space-y-3">
        <Button variant="gradient" fullWidth onClick={() => navigate(ROUTES.LOGIN)} leftIcon={<LogIn size={16} />}>
          Sign In Again
        </Button>
      </div>
    </div>
  );
}
