import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../constants';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="mb-8 relative"
        >
          <div className="text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500 leading-none select-none">
            404
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-xl"
          >
            <Search size={36} className="text-blue-500" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
            Page not found
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Please check the URL or navigate back to the dashboard.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button variant="outline" leftIcon={<ArrowLeft size={16} />}
              onClick={() => navigate(-1)}>
              Go Back
            </Button>
            <Link to={ROUTES.DASHBOARD}>
              <Button variant="gradient" leftIcon={<Home size={16} />}>
                Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative dots */}
        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-600"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
