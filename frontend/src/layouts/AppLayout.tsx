import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sidebar } from '../components/layout/Sidebar';
import { Navbar } from '../components/layout/Navbar';
import { ToastContainer } from '../components/ui/Toast';
import { CommandPalette } from '../components/common/CommandPalette';
import { STORAGE_KEYS } from '../constants';

export function AppLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.SIDEBAR_COLLAPSED);
    return stored === 'true';
  });

  const toggleSidebar = () => {
    setSidebarCollapsed(prev => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEYS.SIDEBAR_COLLAPSED, String(next));
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
      <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />

      {/* Main content */}
      <motion.div
        animate={{ marginLeft: sidebarCollapsed ? 72 : 256 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="flex-1 flex flex-col min-h-screen min-w-0"
      >
        <Navbar onMenuToggle={toggleSidebar} sidebarCollapsed={sidebarCollapsed} />

        {/* Page content */}
        <main className="flex-1 pt-16 overflow-auto">
          <motion.div
            key="page"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="p-6"
          >
            <Outlet />
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              © 2024 Predictive Healthcare AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-400 dark:text-slate-500">v1.0.0</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-slate-400 dark:text-slate-500">All systems operational</span>
            </div>
          </div>
        </footer>
      </motion.div>

      <ToastContainer />
      <CommandPalette />
    </div>
  );
}
