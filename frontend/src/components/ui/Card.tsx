import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  animate?: boolean;
  delay?: number;
}

const paddingClasses = {
  none: '',
  sm:   'p-3',
  md:   'p-4',
  lg:   'p-5',
  xl:   'p-6',
};

export function Card({
  children,
  className = '',
  hover = false,
  glass = false,
  padding = 'lg',
  onClick,
  animate = true,
  delay = 0,
}: CardProps) {
  const baseClasses = [
    'rounded-xl border',
    glass
      ? 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/30 dark:border-slate-700/50'
      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700',
    'shadow-sm',
    hover ? 'cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md' : '',
    onClick ? 'cursor-pointer' : '',
    paddingClasses[padding],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay, ease: 'easeOut' }}
        className={baseClasses}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses} onClick={onClick}>
      {children}
    </div>
  );
}

// ============================================================
// Card subcomponents for semantic composition
// ============================================================

export function CardHeader({
  children,
  className = '',
  action,
}: {
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className={`flex items-start justify-between gap-3 mb-4 ${className}`}>
      <div className="min-w-0">{children}</div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function CardTitle({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-base font-semibold text-slate-800 dark:text-slate-100 ${className}`}>
      {children}
    </h3>
  );
}

export function CardSubtitle({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-sm text-slate-500 dark:text-slate-400 mt-0.5 ${className}`}>{children}</p>
  );
}

export function CardBody({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 ${className}`}
    >
      {children}
    </div>
  );
}

// ============================================================
// Stat Card (for dashboard metrics)
// ============================================================
interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon: React.ReactNode;
  iconBg?: string;
  subtitle?: string;
  delay?: number;
}

export function StatCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  iconBg = 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  subtitle,
  delay = 0,
}: StatCardProps) {
  return (
    <Card hover animate delay={delay}>
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 truncate">{title}</p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.1 }}
            className="text-2xl font-bold text-slate-900 dark:text-white mt-1"
          >
            {value}
          </motion.p>
          {subtitle && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{subtitle}</p>
          )}
          {change !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              <span
                className={[
                  'text-xs font-semibold',
                  changeType === 'increase' ? 'text-green-600 dark:text-green-400' : '',
                  changeType === 'decrease' ? 'text-red-600 dark:text-red-400' : '',
                  changeType === 'neutral' ? 'text-slate-500 dark:text-slate-400' : '',
                ].join(' ')}
              >
                {changeType === 'increase' ? '↑' : changeType === 'decrease' ? '↓' : '→'}{' '}
                {Math.abs(change)}%
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-xl ${iconBg} shrink-0`}>{icon}</div>
      </div>
    </Card>
  );
}
