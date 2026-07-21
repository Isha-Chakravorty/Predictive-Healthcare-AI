import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Monitor, Settings, Users, Brain, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES } from '../../constants';

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={18} />, path: ROUTES.DASHBOARD },
    { id: 'patients', label: 'Patient Directory', icon: <Users size={18} />, path: ROUTES.PATIENTS },
    { id: 'new_patient', label: 'Add New Patient', icon: <Users size={18} />, path: ROUTES.PATIENT_NEW },
    { id: 'prediction', label: 'AI Prediction Center', icon: <Brain size={18} />, path: ROUTES.PREDICTION },
    { id: 'analytics', label: 'Healthcare Analytics', icon: <Monitor size={18} />, path: ROUTES.ANALYTICS },
    { id: 'settings', label: 'System Settings', icon: <Settings size={18} />, path: ROUTES.SETTINGS },
    { id: 'help', label: 'Help Center', icon: <Search size={18} />, path: ROUTES.HELP_CENTER },
  ];

  const filteredItems = items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setQuery('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] sm:pt-[20vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 relative z-10"
          >
            <div className="flex items-center px-4 border-b border-slate-100 dark:border-slate-800">
              <Search className="text-slate-400 mr-3" size={20} />
              <input
                autoFocus
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search pages and commands..."
                className="w-full py-5 bg-transparent border-none outline-none text-slate-800 dark:text-white placeholder-slate-400 text-lg"
              />
              <kbd className="hidden sm:inline-flex px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono text-slate-500">ESC</kbd>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto py-2">
              {filteredItems.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <p className="text-slate-500 dark:text-slate-400">No results found for "{query}"</p>
                </div>
              ) : (
                <div className="px-2">
                  <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Navigation</p>
                  {filteredItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.path)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
                    >
                      <span className="text-slate-400">{item.icon}</span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
