import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function MaintenancePage() {
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
          <div className="w-32 h-32 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Wrench size={48} className="text-blue-600 dark:text-blue-400" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
            System Maintenance
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
            We are currently performing scheduled maintenance to improve our services.
            The platform will be back online shortly. Thank you for your patience.
          </p>

          <Button variant="outline" onClick={handleReload}>
            Check Status
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
