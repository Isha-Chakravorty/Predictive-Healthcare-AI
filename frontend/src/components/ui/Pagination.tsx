import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];
  showPageSize?: boolean;
  className?: string;
}

export function Pagination({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 20, 50],
  showPageSize = true,
  className = '',
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  const getPageNumbers = (): (number | 'ellipsis')[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | 'ellipsis')[] = [1];
    if (page > 3) pages.push('ellipsis');
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) pages.push('ellipsis');
    pages.push(totalPages);
    return pages;
  };

  const btnBase =
    'flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium transition-all duration-150';

  return (
    <div
      className={`flex items-center justify-between gap-4 flex-wrap ${className}`}
    >
      {/* Results info */}
      <p className="text-sm text-slate-500 dark:text-slate-400 shrink-0">
        Showing{' '}
        <span className="font-medium text-slate-700 dark:text-slate-200">
          {total === 0 ? 0 : start}–{end}
        </span>{' '}
        of{' '}
        <span className="font-medium text-slate-700 dark:text-slate-200">{total}</span>
      </p>

      <div className="flex items-center gap-3">
        {/* Page size selector */}
        {showPageSize && onPageSizeChange && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500 dark:text-slate-400 shrink-0">Rows:</span>
            <select
              value={pageSize}
              onChange={e => {
                onPageSizeChange(Number(e.target.value));
                onPageChange(1);
              }}
              className="text-sm rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            >
              {pageSizeOptions.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Page buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => onPageChange(1)}
            disabled={page === 1}
            className={`${btnBase} text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed`}
            title="First page"
          >
            <ChevronsLeft size={16} />
          </button>
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className={`${btnBase} text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed`}
          >
            <ChevronLeft size={16} />
          </button>

          {getPageNumbers().map((p, i) =>
            p === 'ellipsis' ? (
              <span key={`e${i}`} className="w-8 text-center text-slate-400 text-sm">
                …
              </span>
            ) : (
              <button
                key={p}
                onClick={() => onPageChange(p)}
                className={[
                  btnBase,
                  p === page
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700',
                ].join(' ')}
              >
                {p}
              </button>
            )
          )}

          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages || totalPages === 0}
            className={`${btnBase} text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed`}
          >
            <ChevronRight size={16} />
          </button>
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={page === totalPages || totalPages === 0}
            className={`${btnBase} text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed`}
            title="Last page"
          >
            <ChevronsRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
