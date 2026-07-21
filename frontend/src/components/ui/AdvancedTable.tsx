import React, { useState, useMemo, useEffect, memo } from 'react';
import { Search, ChevronDown, ChevronUp, Columns, Download, Trash2, Filter, Settings, FileSpreadsheet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { Badge } from './Badge';

export interface ColumnDef<T> {
  id: string;
  header: string;
  accessorKey?: keyof T;
  cell?: (item: T) => React.ReactNode;
  enableSorting?: boolean;
  enableHiding?: boolean;
}

interface AdvancedTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (item: T) => void;
  onBulkDelete?: (items: T[]) => void;
  onBulkExport?: (items: T[]) => void;
  loading?: boolean;
}

function AdvancedTableInner<T extends { id: string | number }>({
  data,
  columns,
  onRowClick,
  onBulkDelete,
  onBulkExport,
  loading = false,
}: AdvancedTableProps<T>) {
  const [globalSearch, setGlobalSearch] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [visibleColumns, setVisibleColumns] = useState<string[]>(columns.map(c => c.id));
  const [showColumnToggle, setShowColumnToggle] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(new Set());
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Process data (filter -> sort -> paginate)
  const processedData = useMemo(() => {
    let result = [...data];

    // Global Search
    if (globalSearch) {
      const lowerQuery = globalSearch.toLowerCase();
      result = result.filter((item: any) =>
        Object.values(item).some(
          val => val !== null && val !== undefined && String(val).toLowerCase().includes(lowerQuery)
        )
      );
    }

    // Sort
    if (sortConfig) {
      const col = columns.find(c => c.id === sortConfig.key);
      const accessor = col?.accessorKey as keyof T;
      if (accessor) {
        result.sort((a, b) => {
          const valA = a[accessor];
          const valB = b[accessor];
          if (valA === valB) return 0;
          if (valA === undefined || valA === null) return 1;
          if (valB === undefined || valB === null) return -1;
          const aString = String(valA).toLowerCase();
          const bString = String(valB).toLowerCase();
          if (sortConfig.direction === 'asc') return aString > bString ? 1 : -1;
          return aString < bString ? 1 : -1;
        });
      }
    }

    return result;
  }, [data, globalSearch, sortConfig, columns]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return processedData.slice(start, start + pageSize);
  }, [processedData, page, pageSize]);

  const totalPages = Math.ceil(processedData.length / pageSize);

  const handleSort = (key: string) => {
    const col = columns.find(c => c.id === key);
    if (!col || col.enableSorting === false || !col.accessorKey) return;
    
    setSortConfig(prev => {
      if (prev?.key === key) {
        if (prev.direction === 'asc') return { key, direction: 'desc' };
        return null; // toggle off
      }
      return { key, direction: 'asc' };
    });
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === paginatedData.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(paginatedData.map(item => item.id)));
    }
  };

  const toggleSelect = (id: string | number) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedIds(newSet);
  };

  const activeColumns = columns.filter(c => visibleColumns.includes(c.id));

  // Export CSV
  const handleExportCSV = () => {
    const exportData = selectedIds.size > 0 
      ? data.filter(item => selectedIds.has(item.id)) 
      : processedData;
    
    const headers = activeColumns.map(c => c.header).join(',');
    const rows = exportData.map((item: any) => 
      activeColumns.map(col => {
        let val = col.accessorKey ? item[col.accessorKey] : '';
        // Escape quotes
        val = String(val || '').replace(/"/g, '""');
        return `"${val}"`;
      }).join(',')
    ).join('\\n');
    
    const csv = `${headers}\n${rows}`;
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `patients_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedItems = data.filter(item => selectedIds.has(item.id));

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col w-full overflow-hidden">
      
      {/* Toolbar */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search all columns..."
            className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-slate-200"
            value={globalSearch}
            onChange={e => { setGlobalSearch(e.target.value); setPage(1); }}
          />
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <AnimatePresence>
            {selectedIds.size > 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, width: 0 }}
                animate={{ opacity: 1, scale: 1, width: 'auto' }}
                exit={{ opacity: 0, scale: 0.95, width: 0 }}
                className="flex items-center gap-2 mr-2 overflow-hidden whitespace-nowrap"
              >
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-md">
                  {selectedIds.size} selected
                </span>
                {onBulkDelete && (
                  <Button variant="danger" size="sm" leftIcon={<Trash2 size={14} />} onClick={() => { onBulkDelete(selectedItems); setSelectedIds(new Set()); }}>
                    Delete
                  </Button>
                )}
                {onBulkExport && (
                  <Button variant="outline" size="sm" leftIcon={<FileSpreadsheet size={14} />} onClick={() => onBulkExport(selectedItems)}>
                    Export
                  </Button>
                )}
                <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1"></div>
              </motion.div>
            )}
          </AnimatePresence>

          <Button variant="outline" size="sm" leftIcon={<Download size={14} />} onClick={handleExportCSV}>CSV</Button>
          
          <div className="relative">
            <Button variant="outline" size="sm" leftIcon={<Columns size={14} />} onClick={() => setShowColumnToggle(!showColumnToggle)}>
              Columns
            </Button>
            {showColumnToggle && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50">
                <div className="px-3 pb-2 mb-2 border-b border-slate-100 dark:border-slate-700">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Toggle Columns</span>
                </div>
                {columns.map(col => (
                  <label key={col.id} className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer text-sm text-slate-700 dark:text-slate-300">
                    <input 
                      type="checkbox" 
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 bg-white dark:bg-slate-900"
                      checked={visibleColumns.includes(col.id)}
                      disabled={col.enableHiding === false}
                      onChange={(e) => {
                        if (e.target.checked) setVisibleColumns([...visibleColumns, col.id]);
                        else setVisibleColumns(visibleColumns.filter(id => id !== col.id));
                      }}
                    />
                    {col.header}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto flex-1 w-full min-h-[400px]">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 dark:bg-slate-900/80 sticky top-0 z-10 shadow-sm border-b border-slate-200 dark:border-slate-700">
            <tr>
              <th className="px-4 py-3 w-12 sticky left-0 bg-slate-50 dark:bg-slate-900/80 z-20">
                <input 
                  type="checkbox" 
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  checked={paginatedData.length > 0 && selectedIds.size === paginatedData.length}
                  onChange={toggleSelectAll}
                />
              </th>
              {activeColumns.map((col, index) => (
                <th 
                  key={col.id} 
                  className={`px-4 py-3 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider ${col.enableSorting !== false ? 'cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors' : ''} ${index === 0 ? 'sticky left-12 bg-slate-50 dark:bg-slate-900/80 z-20 shadow-[1px_0_0_0_#e2e8f0] dark:shadow-[1px_0_0_0_#334155]' : ''}`}
                  onClick={() => handleSort(col.id)}
                >
                  <div className="flex items-center gap-1">
                    {col.header}
                    {sortConfig?.key === col.id && (
                      sortConfig.direction === 'asc' ? <ChevronUp size={14} className="text-blue-500" /> : <ChevronDown size={14} className="text-blue-500" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
            {loading ? (
              Array.from({ length: pageSize }).map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td className="px-4 py-4"><div className="w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div></td>
                  {activeColumns.map((c, j) => (
                    <td key={c.id} className="px-4 py-4"><div className={`h-4 bg-slate-200 dark:bg-slate-700 rounded ${j === 0 ? 'w-32' : 'w-24'}`}></div></td>
                  ))}
                </tr>
              ))
            ) : paginatedData.length === 0 ? (
              <tr>
                <td colSpan={activeColumns.length + 1} className="px-4 py-12 text-center">
                  <div className="flex flex-col items-center justify-center text-slate-400">
                    <Filter size={32} className="mb-2 opacity-50" />
                    <p className="text-sm font-medium">No results found</p>
                    <p className="text-xs mt-1">Try adjusting your filters or search query.</p>
                  </div>
                </td>
              </tr>
            ) : (
              paginatedData.map((item) => (
                <tr 
                  key={item.id} 
                  onClick={() => onRowClick?.(item)}
                  className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                >
                  <td className="px-4 py-3 w-12 sticky left-0 bg-white dark:bg-slate-800 group-hover:bg-slate-50/80 dark:group-hover:bg-slate-800/50 transition-colors z-10" onClick={e => e.stopPropagation()}>
                    <input 
                      type="checkbox" 
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedIds.has(item.id)}
                      onChange={() => toggleSelect(item.id)}
                    />
                  </td>
                  {activeColumns.map((col, index) => (
                    <td 
                      key={col.id} 
                      className={`px-4 py-3 text-sm text-slate-700 dark:text-slate-300 ${index === 0 ? 'sticky left-12 bg-white dark:bg-slate-800 group-hover:bg-slate-50/80 dark:group-hover:bg-slate-800/50 transition-colors z-10 shadow-[1px_0_0_0_#e2e8f0] dark:shadow-[1px_0_0_0_#334155]' : ''}`}
                    >
                      {col.cell ? col.cell(item) : (col.accessorKey ? item[col.accessorKey] as React.ReactNode : '-')}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-900/50 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-3">
          <span>Rows per page:</span>
          <select 
            className="bg-transparent border border-slate-300 dark:border-slate-600 rounded px-2 py-1 text-slate-700 dark:text-slate-300 focus:ring-blue-500 focus:border-blue-500"
            value={pageSize}
            onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
          >
            {[10, 25, 50, 100].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        
        <div className="flex items-center gap-4">
          <span>Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, processedData.length)} of {processedData.length} entries</span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled={page === 1} onClick={() => setPage(p => p - 1)}>Prev</Button>
            <Button variant="outline" size="sm" disabled={page === totalPages || totalPages === 0} onClick={() => setPage(p => p + 1)}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Ensure generic types are preserved with memo
export const AdvancedTable = memo(AdvancedTableInner) as typeof AdvancedTableInner;
