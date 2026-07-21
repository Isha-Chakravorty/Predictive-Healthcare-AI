// ============================================================
// Utility Functions
// ============================================================

/**
 * Format a date string into a human-readable format
 */
export function formatDate(dateStr: string, format: 'display' | 'short' | 'relative' = 'display'): string {
  const date = new Date(dateStr);
  const now = new Date();

  if (format === 'relative') {
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  if (format === 'short') {
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  }

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/**
 * Format a percentage value
 */
export function formatPercentage(value: number, decimals = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Format a raw percentage (0–100 range)
 */
export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Format a number with commas
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

/**
 * Format currency
 */
export function formatCurrency(value: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
}

/**
 * Capitalize first letter of each word
 */
export function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(/[\s_-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Truncate long strings
 */
export function truncate(str: string, maxLength = 50): string {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}...`;
}

/**
 * Generate a unique ID
 */
export function generateId(prefix = 'id'): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Debounce a function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Deep clone an object
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Get initials from a full name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Get color for risk level
 */
export function getRiskColor(level: string): string {
  const colors: Record<string, string> = {
    low:      '#22c55e',
    moderate: '#f59e0b',
    high:     '#ef4444',
    critical: '#9f1239',
  };
  return colors[level] || '#94a3b8';
}

/**
 * Get Tailwind classes for risk badge
 */
export function getRiskBadgeClass(level: string): string {
  const classes: Record<string, string> = {
    low:      'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    moderate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    high:     'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    critical: 'bg-rose-100 text-rose-900 dark:bg-rose-900/30 dark:text-rose-300',
  };
  return classes[level] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
}

/**
 * Get Tailwind classes for status badge
 */
export function getStatusBadgeClass(status: string): string {
  const classes: Record<string, string> = {
    active:     'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    inactive:   'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
    critical:   'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    recovered:  'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    monitoring: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    completed:  'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    pending:    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    processing: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    failed:     'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    testing:    'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    deprecated: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  };
  return classes[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
}

/**
 * Filter an array by a search term across multiple keys
 */
export function filterBySearch<T extends Record<string, unknown>>(
  items: T[],
  search: string,
  keys: (keyof T)[]
): T[] {
  if (!search.trim()) return items;
  const term = search.toLowerCase();
  return items.filter(item =>
    keys.some(key => {
      const value = item[key];
      return typeof value === 'string' && value.toLowerCase().includes(term);
    })
  );
}

/**
 * Sort an array by a key
 */
export function sortBy<T>(
  items: T[],
  key: keyof T,
  direction: 'asc' | 'desc' = 'asc'
): T[] {
  return [...items].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    if (aVal < bVal) return direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}

/**
 * Paginate an array
 */
export function paginate<T>(items: T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

/**
 * Check if user prefers dark mode
 */
export function prefersDarkMode(): boolean {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

/**
 * Apply or remove dark class from <html>
 */
export function applyTheme(theme: 'light' | 'dark'): void {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
