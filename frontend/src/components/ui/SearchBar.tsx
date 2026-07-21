import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  autoFocus?: boolean;
  id?: string;
}

const sizeClasses = {
  sm: 'py-1.5 text-sm',
  md: 'py-2 text-sm',
  lg: 'py-2.5 text-base',
};

const iconSizes = { sm: 14, md: 16, lg: 18 };

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
  size = 'md',
  autoFocus = false,
  id,
}: SearchBarProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Search
        size={iconSizes[size]}
        className="absolute left-3 text-slate-400 dark:text-slate-500 pointer-events-none"
      />
      <input
        id={id}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={[
          'w-full pl-9 pr-8 rounded-lg border',
          'bg-white dark:bg-slate-900',
          'text-slate-900 dark:text-slate-100',
          'placeholder:text-slate-400 dark:placeholder:text-slate-500',
          'border-slate-300 dark:border-slate-600',
          'focus:outline-none focus:border-blue-500 dark:focus:border-blue-400',
          'focus:ring-2 focus:ring-blue-500/20',
          'transition-all duration-200',
          sizeClasses[size],
        ].join(' ')}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <X size={iconSizes[size]} />
        </button>
      )}
    </div>
  );
}
