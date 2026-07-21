import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  Sun,
  Moon,
  Menu,
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Check,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { mockNotifications } from '../../mock';
import { formatDate, getInitials } from '../../utils';
import { ROUTES } from '../../constants';
import type { Notification } from '../../types';

interface NavbarProps {
  onMenuToggle: () => void;
  sidebarCollapsed: boolean;
}

export function Navbar({ onMenuToggle, sidebarCollapsed }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { success } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const notifRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const handleLogout = () => {
    logout();
    success('Signed out', 'You have been successfully signed out.');
    navigate(ROUTES.LOGIN);
    setShowUserMenu(false);
  };

  // Breadcrumbs
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <header
      className={[
        'fixed top-0 right-0 z-30 h-16',
        'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl',
        'border-b border-slate-200 dark:border-slate-700',
        'flex items-center px-4 gap-4',
        'transition-all duration-300',
        sidebarCollapsed ? 'left-[72px]' : 'left-64',
      ].join(' ')}
    >
      {/* Mobile menu button */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
      >
        <Menu size={20} />
      </button>

      {/* Breadcrumbs */}
      <nav className="hidden sm:flex items-center gap-1.5 text-sm flex-1 min-w-0">
        <Link
          to={ROUTES.DASHBOARD}
          className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors shrink-0"
        >
          Home
        </Link>
        {pathSegments.map((segment, i) => {
          const isLast = i === pathSegments.length - 1;
          const label = segment
            .split('-')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');
          return (
            <React.Fragment key={i}>
              <span className="text-slate-300 dark:text-slate-600">/</span>
              {isLast ? (
                <span className="text-slate-700 dark:text-slate-200 font-medium truncate">
                  {label}
                </span>
              ) : (
                <Link
                  to={`/${pathSegments.slice(0, i + 1).join('/')}`}
                  className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors truncate"
                >
                  {label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>

      <div className="flex-1" />

      {/* Right actions */}
      <div className="flex items-center gap-1.5">
        {/* Theme toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <AnimatePresence mode="wait">
            {theme === 'light' ? (
              <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Sun size={18} />
              </motion.div>
            ) : (
              <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Moon size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Notifications */}
        <div ref={notifRef} className="relative">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowNotifications(s => !s)}
            className="relative p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center"
              >
                {unreadCount > 9 ? '9+' : unreadCount}
              </motion.span>
            )}
          </motion.button>

          {/* Notification panel */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute right-0 top-12 w-80 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl z-50 overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    Notifications
                    {unreadCount > 0 && (
                      <span className="ml-2 px-1.5 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full">
                        {unreadCount}
                      </span>
                    )}
                  </h3>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllRead}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <Check size={11} /> Mark all read
                    </button>
                  )}
                </div>
                <div className="max-h-80 overflow-y-auto divide-y divide-slate-50 dark:divide-slate-700">
                  {notifications.map(notif => (
                    <NotifItem key={notif.id} notif={notif} onRead={() => {
                      setNotifications(prev =>
                        prev.map(n => n.id === notif.id ? { ...n, isRead: true } : n)
                      );
                    }} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User menu */}
        <div ref={userRef} className="relative">
          <button
            onClick={() => setShowUserMenu(s => !s)}
            className="flex items-center gap-2 pl-2 pr-1.5 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {user ? getInitials(`${user.firstName} ${user.lastName}`) : 'U'}
            </div>
            <div className="hidden md:block text-left">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-tight whitespace-nowrap">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight capitalize">
                {user?.role}
              </p>
            </div>
            <ChevronDown size={14} className="text-slate-400 hidden md:block" />
          </button>

          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute right-0 top-12 w-52 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl z-50 overflow-hidden"
              >
                <div className="p-3 border-b border-slate-100 dark:border-slate-700">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {user?.email}
                  </p>
                </div>
                <div className="py-1">
                  <MenuButton icon={<User size={14} />} label="Profile" onClick={() => { navigate(ROUTES.PROFILE); setShowUserMenu(false); }} />
                  <MenuButton icon={<Settings size={14} />} label="Settings" onClick={() => { navigate(ROUTES.SETTINGS); setShowUserMenu(false); }} />
                  <div className="mx-2 my-1 border-t border-slate-100 dark:border-slate-700" />
                  <MenuButton icon={<LogOut size={14} />} label="Sign out" onClick={handleLogout} danger />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

function MenuButton({
  icon,
  label,
  onClick,
  danger = false,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        'w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors',
        danger
          ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700',
      ].join(' ')}
    >
      {icon} {label}
    </button>
  );
}

function NotifItem({ notif, onRead }: { notif: Notification; onRead: () => void }) {
  const colorMap: Record<string, string> = {
    alert:   'bg-red-500',
    warning: 'bg-yellow-500',
    success: 'bg-green-500',
    info:    'bg-blue-500',
  };
  return (
    <div
      onClick={onRead}
      className={[
        'flex gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors',
        !notif.isRead ? 'bg-blue-50/50 dark:bg-blue-900/10' : '',
      ].join(' ')}
    >
      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${colorMap[notif.type] || 'bg-slate-400'}`} />
      <div className="flex-1 min-w-0">
        <p className={`text-xs font-medium leading-snug ${!notif.isRead ? 'text-slate-800 dark:text-slate-100' : 'text-slate-600 dark:text-slate-300'}`}>
          {notif.title}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug line-clamp-2">
          {notif.message}
        </p>
        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">
          {formatDate(notif.timestamp, 'relative')}
        </p>
      </div>
    </div>
  );
}
