import React from 'react';
import { motion } from 'framer-motion';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple' | 'outline';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  dot?: boolean;
  pulse?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:  'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  primary:  'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  success:  'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  warning:  'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  danger:   'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  info:     'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  purple:   'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  outline:  'border border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-400',
};

const dotColors: Record<BadgeVariant, string> = {
  default:  'bg-slate-400',
  primary:  'bg-blue-500',
  success:  'bg-green-500',
  warning:  'bg-yellow-500',
  danger:   'bg-red-500',
  info:     'bg-cyan-500',
  purple:   'bg-purple-500',
  outline:  'bg-slate-400',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-1.5 py-0.5 text-[10px]',
  md: 'px-2 py-0.5 text-xs',
  lg: 'px-2.5 py-1 text-xs',
};

export function Badge({
  variant = 'default',
  size = 'md',
  icon,
  dot = false,
  pulse = false,
  children,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 rounded-full font-semibold uppercase tracking-wide',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          {pulse && (
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotColors[variant]}`}
            />
          )}
          <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotColors[variant]}`} />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

// ============================================================
// Specialized Risk & Status Badges
// ============================================================

interface RiskBadgeProps {
  level: 'low' | 'moderate' | 'high' | 'critical';
  size?: BadgeSize;
}

const riskConfig: Record<string, { variant: BadgeVariant; label: string }> = {
  low:      { variant: 'success', label: 'Low Risk' },
  moderate: { variant: 'warning', label: 'Moderate' },
  high:     { variant: 'danger',  label: 'High Risk' },
  critical: { variant: 'danger',  label: 'Critical' },
};

export function RiskBadge({ level, size = 'md' }: RiskBadgeProps) {
  const config = riskConfig[level] || { variant: 'default' as BadgeVariant, label: level };
  return (
    <Badge variant={config.variant} size={size} dot pulse={level === 'critical'}>
      {config.label}
    </Badge>
  );
}

interface StatusBadgeProps {
  status: string;
  size?: BadgeSize;
}

const statusConfig: Record<string, { variant: BadgeVariant; label: string }> = {
  active:     { variant: 'success', label: 'Active' },
  inactive:   { variant: 'default', label: 'Inactive' },
  critical:   { variant: 'danger',  label: 'Critical' },
  recovered:  { variant: 'primary', label: 'Recovered' },
  monitoring: { variant: 'warning', label: 'Monitoring' },
  completed:  { variant: 'success', label: 'Completed' },
  pending:    { variant: 'warning', label: 'Pending' },
  processing: { variant: 'info',    label: 'Processing' },
  failed:     { variant: 'danger',  label: 'Failed' },
  testing:    { variant: 'purple',  label: 'Testing' },
  deprecated: { variant: 'default', label: 'Deprecated' },
};

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const config = statusConfig[status] || { variant: 'default' as BadgeVariant, label: status };
  return (
    <Badge variant={config.variant} size={size} dot>
      {config.label}
    </Badge>
  );
}

// ============================================================
// Score Badge (percentage display)
// ============================================================
interface ScoreBadgeProps {
  score: number; // 0–1
  size?: BadgeSize;
}

export function ScoreBadge({ score, size = 'md' }: ScoreBadgeProps) {
  const pct = Math.round(score * 100);
  const variant: BadgeVariant =
    pct >= 80 ? 'success' : pct >= 60 ? 'warning' : 'danger';

  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Badge variant={variant} size={size}>
        {pct}%
      </Badge>
    </motion.span>
  );
}
