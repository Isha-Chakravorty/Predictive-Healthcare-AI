import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, RefreshCw, ServerCrash } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../constants';

export function ServerErrorPage() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="mb-8 relative"
        >
          <div className="text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-purple-600 leading-none select-none">
            500
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-xl"
          >
            <ServerCrash size={36} className="text-red-500" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
            Internal Server Error
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
            Oops! Something went wrong on our end. Our engineering team has been notified. Please try again later.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button variant="outline" leftIcon={<RefreshCw size={16} />}
              onClick={handleReload}>
              Try Again
            </Button>
            <Link to={ROUTES.DASHBOARD}>
              <Button variant="primary" leftIcon={<Home size={16} />}>
                Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
