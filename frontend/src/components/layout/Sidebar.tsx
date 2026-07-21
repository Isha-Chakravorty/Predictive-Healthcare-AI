import React, { useState, memo, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Brain,
  History,
  BarChart3,
  Activity,
  Settings,
  User,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  ChevronDown,
} from 'lucide-react';
import { ROUTES, STORAGE_KEYS } from '../../constants';

interface NavItem {
  label: string;
  path?: string;
  icon: React.ReactNode;
  children?: { label: string; path: string }[];
  badge?: string | number;
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: <LayoutDashboard size={18} />,
  },
  {
    label: 'Patients',
    path: ROUTES.PATIENTS,
    icon: <Users size={18} />,
  },
  {
    label: 'Predictions',
    icon: <Brain size={18} />,
    children: [
      { label: 'Run Prediction', path: ROUTES.PREDICTION },
      { label: 'History', path: ROUTES.PREDICTION_HISTORY },
    ],
  },
  {
    label: 'Analytics',
    path: ROUTES.ANALYTICS,
    icon: <BarChart3 size={18} />,
  },
  {
    label: 'Model Performance',
    path: ROUTES.MODEL_PERFORMANCE,
    icon: <Activity size={18} />,
  },
];

const bottomNavItems: NavItem[] = [
  {
    label: 'Profile',
    path: ROUTES.PROFILE,
    icon: <User size={18} />,
  },
  {
    label: 'Settings',
    path: ROUTES.SETTINGS,
    icon: <Settings size={18} />,
  },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const Sidebar = memo(function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const location = useLocation();
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['Predictions']);

  const toggleGroup = (label: string) => {
    setExpandedGroups(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  const isGroupActive = (item: NavItem) =>
    item.children?.some(child => location.pathname.startsWith(child.path)) ?? false;

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 72 : 256 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className={[
          'fixed left-0 top-0 h-screen z-40 flex flex-col overflow-hidden',
          'bg-slate-900 dark:bg-slate-950',
          'border-r border-slate-800 dark:border-slate-800',
          'shadow-xl',
        ].join(' ')}
      >
        {/* Logo */}
        <div className="flex items-center h-16 px-4 border-b border-slate-800 dark:border-slate-700 shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
              <Stethoscope size={16} className="text-white" />
            </div>
            <AnimatePresence>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-white font-semibold text-sm leading-tight whitespace-nowrap">
                    Healthcare AI
                  </p>
                  <p className="text-slate-400 text-[10px] leading-tight whitespace-nowrap">
                    Clinical Platform
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto overflow-x-hidden scrollbar-thin">
          <div className="space-y-0.5 px-2">
            {navItems.map(item => (
              <NavItemComponent
                key={item.label}
                item={item}
                collapsed={collapsed}
                isGroupActive={isGroupActive(item)}
                isExpanded={expandedGroups.includes(item.label)}
                onToggleGroup={() => toggleGroup(item.label)}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="mx-4 my-4 border-t border-slate-800" />

          <div className="space-y-0.5 px-2">
            {bottomNavItems.map(item => (
              <NavItemComponent
                key={item.label}
                item={item}
                collapsed={collapsed}
                isGroupActive={false}
                isExpanded={false}
                onToggleGroup={() => {}}
              />
            ))}
          </div>
        </nav>

        {/* Collapse Toggle */}
        <div className="px-2 py-3 border-t border-slate-800 shrink-0">
          <button
            onClick={onToggle}
            className={[
              'w-full flex items-center rounded-lg py-2 px-3',
              'text-slate-400 hover:text-white hover:bg-slate-800',
              'transition-all duration-200',
              collapsed ? 'justify-center' : 'justify-between',
            ].join(' ')}
          >
            {!collapsed && (
              <span className="text-xs font-medium whitespace-nowrap">Collapse</span>
            )}
            {collapsed ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </button>
        </div>
      </motion.aside>
    </>
  );
});

// ============================================================
// Individual Nav Item
// ============================================================
interface NavItemProps {
  item: NavItem;
  collapsed: boolean;
  isGroupActive: boolean;
  isExpanded: boolean;
  onToggleGroup: () => void;
}

function NavItemComponent({
  item,
  collapsed,
  isGroupActive,
  isExpanded,
  onToggleGroup,
}: NavItemProps) {
  // Group with children
  if (item.children) {
    return (
      <div>
        <button
          onClick={onToggleGroup}
          title={collapsed ? item.label : undefined}
          className={[
            'w-full flex items-center rounded-lg py-2.5 transition-all duration-150',
            collapsed ? 'px-3 justify-center' : 'px-3 gap-3',
            isGroupActive
              ? 'bg-blue-500/15 text-blue-300'
              : 'text-slate-400 hover:text-white hover:bg-slate-800',
          ].join(' ')}
        >
          <span className="shrink-0">{item.icon}</span>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="flex items-center justify-between flex-1 overflow-hidden"
              >
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Submenu */}
        <AnimatePresence>
          {isExpanded && !collapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden ml-4 mt-0.5 space-y-0.5"
            >
              {item.children!.map(child => (
                <NavLink
                  key={child.path}
                  to={child.path}
                  className={({ isActive }) =>
                    [
                      'flex items-center gap-3 rounded-lg py-2 pl-7 pr-3 text-sm transition-all duration-150',
                      isActive
                        ? 'bg-blue-500/20 text-blue-300 font-medium'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800',
                    ].join(' ')
                  }
                >
                  <span className="w-1 h-1 rounded-full bg-current shrink-0" />
                  {child.label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Regular link
  return (
    <NavLink
      to={item.path!}
      title={collapsed ? item.label : undefined}
      className={({ isActive }) =>
        [
          'flex items-center rounded-lg py-2.5 transition-all duration-150',
          collapsed ? 'px-3 justify-center' : 'px-3 gap-3',
          isActive
            ? 'bg-blue-500/15 text-blue-300 font-medium'
            : 'text-slate-400 hover:text-white hover:bg-slate-800',
        ].join(' ')
      }
    >
      <span className="shrink-0">{item.icon}</span>
      <AnimatePresence>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="text-sm font-medium whitespace-nowrap overflow-hidden"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </NavLink>
  );
}
