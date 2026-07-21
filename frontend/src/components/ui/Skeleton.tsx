import React from 'react';

// ============================================================
// Generic Skeleton
// ============================================================
interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const roundedClasses = {
  sm:   'rounded',
  md:   'rounded-md',
  lg:   'rounded-lg',
  xl:   'rounded-xl',
  full: 'rounded-full',
};

export function Skeleton({ className = '', height, width, rounded = 'md' }: SkeletonProps) {
  return (
    <div
      className={[
        'animate-pulse bg-slate-200 dark:bg-slate-700',
        roundedClasses[rounded],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        height: height !== undefined ? (typeof height === 'number' ? `${height}px` : height) : undefined,
        width: width !== undefined ? (typeof width === 'number' ? `${width}px` : width) : undefined,
      }}
    />
  );
}

// ============================================================
// Stat Card Skeleton
// ============================================================
export function StatCardSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Skeleton height={14} width={100} className="mb-3" />
          <Skeleton height={28} width={80} className="mb-2" />
          <Skeleton height={12} width={120} />
        </div>
        <Skeleton height={48} width={48} rounded="xl" />
      </div>
    </div>
  );
}

// ============================================================
// Table Row Skeleton
// ============================================================
export function TableSkeleton({ rows = 5, cols = 5 }: { rows?: number; cols?: number }) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-50 dark:bg-slate-900/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
        <div className="flex gap-6">
          {Array.from({ length: cols }).map((_, i) => (
            <Skeleton key={i} height={12} width={80} />
          ))}
        </div>
      </div>
      <div className="divide-y divide-slate-100 dark:divide-slate-700">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="px-4 py-3.5 flex gap-6 items-center bg-white dark:bg-slate-800">
            {Array.from({ length: cols }).map((_, j) => (
              <Skeleton key={j} height={14} width={j === 0 ? 120 : j === cols - 1 ? 60 : 90} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Card Skeleton
// ============================================================
export function CardSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 space-y-3">
      <div className="flex justify-between items-center">
        <Skeleton height={18} width={150} rounded="md" />
        <Skeleton height={32} width={80} rounded="lg" />
      </div>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} height={14} width={`${100 - i * 15}%`} />
      ))}
    </div>
  );
}

// ============================================================
// Chart Skeleton
// ============================================================
export function ChartSkeleton({ height = 300 }: { height?: number }) {
  return (
    <div
      className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <Skeleton height={18} width={160} className="mb-2" />
          <Skeleton height={13} width={100} />
        </div>
        <Skeleton height={32} width={120} rounded="lg" />
      </div>
      <Skeleton height={height} rounded="lg" />
    </div>
  );
}

// ============================================================
// Profile Skeleton
// ============================================================
export function ProfileSkeleton() {
  return (
    <div className="flex items-center gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
      <Skeleton height={64} width={64} rounded="full" />
      <div className="flex-1">
        <Skeleton height={18} width={160} className="mb-2" />
        <Skeleton height={13} width={120} className="mb-2" />
        <Skeleton height={11} width={80} />
      </div>
    </div>
  );
}

// ============================================================
// Activity Feed Skeleton
// ============================================================
export function ActivitySkeleton({ items = 5 }: { items?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex gap-3 items-start">
          <Skeleton height={36} width={36} rounded="full" />
          <div className="flex-1">
            <Skeleton height={14} width={`${80 - i * 5}%`} className="mb-1.5" />
            <Skeleton height={12} width={`${60 - i * 3}%`} />
          </div>
          <Skeleton height={11} width={50} />
        </div>
      ))}
    </div>
  );
}
