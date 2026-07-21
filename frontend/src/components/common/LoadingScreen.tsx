import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 flex flex-col items-center justify-center z-[200]">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, delay: 3 }}
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-400/30 blur-3xl"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo mark */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">
            <Activity size={40} className="text-white" />
          </div>
          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl border-2 border-cyan-400"
          />
        </motion.div>

        {/* App name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Predictive Healthcare AI
          </h1>
          <p className="text-blue-200 text-sm mt-1">Clinical Analytics Platform</p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-48"
        >
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
            />
          </div>
          <p className="text-blue-200/70 text-xs text-center mt-2">Loading platform...</p>
        </motion.div>
      </div>
    </div>
  );
}
