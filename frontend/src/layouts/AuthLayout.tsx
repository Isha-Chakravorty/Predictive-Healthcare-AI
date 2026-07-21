import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Shield, Brain, TrendingUp } from 'lucide-react';
import { ToastContainer } from '../components/ui/Toast';

const features = [
  { icon: <Brain size={20} />, title: 'AI-Powered Predictions', desc: 'State-of-the-art ML models' },
  { icon: <Shield size={20} />, title: 'HIPAA Compliant', desc: 'Enterprise-grade security' },
  { icon: <TrendingUp size={20} />, title: '96%+ Accuracy', desc: 'Clinically validated results' },
];

export function AuthLayout() {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950">
      {/* Left panel — decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800">
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.15, 1, 1.15], rotate: [5, 0, 5] }}
            transition={{ duration: 12, repeat: Infinity, delay: 6 }}
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
              <Activity size={22} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">Healthcare AI</p>
              <p className="text-blue-200 text-xs">Clinical Analytics Platform</p>
            </div>
          </div>

          {/* Headline */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-bold text-white leading-tight mb-4"
            >
              AI-Powered
              <br />
              <span className="text-cyan-300">Healthcare</span>
              <br />
              Analytics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-blue-100 text-base leading-relaxed mb-8"
            >
              Predict disease risk with 96%+ accuracy using our enterprise-grade
              clinical AI platform trusted by leading healthcare institutions.
            </motion.p>

            {/* Feature list */}
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{f.title}</p>
                    <p className="text-blue-200 text-xs">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { val: '1.2M+', label: 'Predictions' },
              { val: '96.2%', label: 'Accuracy' },
              { val: '500+', label: 'Hospitals' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl font-bold text-white">{stat.val}</p>
                <p className="text-blue-200 text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Activity size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold text-slate-800 dark:text-white">Healthcare AI</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
