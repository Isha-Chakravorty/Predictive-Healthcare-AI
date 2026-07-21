import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';
import type { ToastMessage } from '../../types';
import { useToast } from '../../context/ToastContext';

// ============================================================
// Individual Toast Item
// ============================================================
const iconMap = {
  success: <CheckCircle  size={18} className="text-green-500 shrink-0" />,
  error:   <XCircle     size={18} className="text-red-500 shrink-0" />,
  warning: <AlertTriangle size={18} className="text-yellow-500 shrink-0" />,
  info:    <Info        size={18} className="text-blue-500 shrink-0" />,
};

const borderMap = {
  success: 'border-l-4 border-l-green-500',
  error:   'border-l-4 border-l-red-500',
  warning: 'border-l-4 border-l-yellow-500',
  info:    'border-l-4 border-l-blue-500',
};

function ToastItem({ toast }: { toast: ToastMessage }) {
  const { removeToast } = useToast();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 60, scale: 0.92 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 60, scale: 0.92 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={[
        'flex items-start gap-3 w-full max-w-sm',
        'bg-white dark:bg-slate-800 rounded-xl shadow-lg',
        'border border-slate-200 dark:border-slate-700',
        borderMap[toast.type],
        'p-4',
      ].join(' ')}
    >
      <div className="mt-0.5">{iconMap[toast.type]}</div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{toast.title}</p>
        {toast.message && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
            {toast.message}
          </p>
        )}
        {toast.action && (
          <button
            onClick={toast.action.onClick}
            className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-1.5 hover:underline"
          >
            {toast.action.label}
          </button>
        )}
      </div>
      <button
        onClick={() => removeToast(toast.id)}
        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors shrink-0 mt-0.5"
      >
        <X size={14} />
      </button>
    </motion.div>
  );
}

// ============================================================
// Toast Container
// ============================================================
export function ToastContainer() {
  const { toasts } = useToast();

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 items-end pointer-events-none"
      aria-live="polite"
    >
      <AnimatePresence mode="sync">
        {toasts.map(toast => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem toast={toast} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
