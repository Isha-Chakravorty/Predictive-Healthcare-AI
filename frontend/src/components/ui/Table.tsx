import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import type { SortState } from '../../types';

// Looser constraint so domain types (Patient, Prediction, etc.) satisfy it
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Column<T = any> {
  key: keyof T | string;
  title: string;
  sortable?: boolean;
  width?: string;
  render?: (value: unknown, record: T) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface TableProps<T = any> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
  emptyIcon?: React.ReactNode;
  onRowClick?: (record: T) => void;
  rowKey?: keyof T;
  sortState?: SortState;
  onSort?: (key: string) => void;
  stickyHeader?: boolean;
  compact?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Table<T = any>({
  columns,
  data,
  isLoading = false,
  emptyMessage = 'No data found',
  emptyIcon,
  onRowClick,
  rowKey = 'id' as keyof T,
  sortState,
  onSort,
  stickyHeader = false,
  compact = false,
}: TableProps<T>) {
  const cellPadding = compact ? 'px-4 py-2.5' : 'px-4 py-3.5';

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {/* Header */}
          <thead
            className={[
              'bg-slate-50 dark:bg-slate-900/50',
              stickyHeader ? 'sticky top-0 z-10' : '',
            ].join(' ')}
          >
            <tr>
              {columns.map(col => (
                <th
                  key={String(col.key)}
                  className={[
                    cellPadding,
                    'text-left font-semibold text-slate-500 dark:text-slate-400',
                    'border-b border-slate-200 dark:border-slate-700',
                    'text-xs uppercase tracking-wide',
                    col.sortable && onSort ? 'cursor-pointer hover:text-slate-700 dark:hover:text-slate-300 select-none' : '',
                    col.align === 'center' ? 'text-center' : '',
                    col.align === 'right' ? 'text-right' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => col.sortable && onSort && onSort(String(col.key))}
                >
                  <div
                    className={[
                      'inline-flex items-center gap-1',
                      col.align === 'center' ? 'justify-center' : '',
                      col.align === 'right' ? 'justify-end' : '',
                    ].join(' ')}
                  >
                    {col.title}
                    {col.sortable && onSort && (
                      <SortIcon
                        active={sortState?.key === String(col.key)}
                        direction={sortState?.key === String(col.key) ? sortState.direction : undefined}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i}>
                  {columns.map((_col, j) => (
                    <td key={j} className={cellPadding}>
                      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                    </td>
                  ))}
                </tr>
              ))
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="py-16 text-center">
                  <div className="flex flex-col items-center gap-3">
                    {emptyIcon && (
                      <div className="text-slate-300 dark:text-slate-600">{emptyIcon}</div>
                    )}
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{emptyMessage}</p>
                  </div>
                </td>
              </tr>
            ) : (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              data.map((record: any, idx: number) => (
                <motion.tr
                  key={String(record[rowKey as string]) || idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                  className={[
                    'bg-white dark:bg-slate-800 group',
                    onRowClick
                      ? 'cursor-pointer hover:bg-blue-50/50 dark:hover:bg-blue-900/10'
                      : 'hover:bg-slate-50/50 dark:hover:bg-slate-700/20',
                    'transition-colors duration-150',
                  ].join(' ')}
                  onClick={() => onRowClick?.(record)}
                >
                  {columns.map(col => (
                    <td
                      key={String(col.key)}
                      className={[
                        cellPadding,
                        'text-slate-700 dark:text-slate-300',
                        col.align === 'center' ? 'text-center' : '',
                        col.align === 'right' ? 'text-right' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {col.render
                        ? col.render(record[col.key as string], record)
                        : String(record[col.key as string] ?? '–')}
                    </td>
                  ))}
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SortIcon({
  active,
  direction,
}: {
  active: boolean;
  direction?: 'asc' | 'desc';
}) {
  if (!active) return <ChevronsUpDown size={12} className="opacity-40" />;
  return direction === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />;
}
