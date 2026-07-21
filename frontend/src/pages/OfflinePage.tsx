import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function OfflinePage() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  if (isOnline) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">You are back online!</h2>
        <Button onClick={handleReload}>Return to App</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            <WifiOff size={48} className="text-slate-500 dark:text-slate-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
            No Internet Connection
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
            It looks like you're offline. Please check your network connection. We will automatically reconnect you when the network is restored.
          </p>

          <Button variant="outline" leftIcon={<RefreshCw size={16} />} onClick={handleReload}>
            Try Again
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
