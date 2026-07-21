import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { History, Download, Filter, FileSpreadsheet, Printer, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';
import { Pagination } from '../components/ui/Pagination';
import { RiskBadge, ScoreBadge } from '../components/ui/Badge';
import { predictionService } from '../services/mockService';
import { useToast } from '../context/ToastContext';
import { ROUTES, DISEASE_LABELS } from '../constants';
import type { DiseasePrediction, Column } from '../types';
import { formatDate } from '../utils';

export function PredictionHistoryPage() {
  const { success, error } = useToast();
  const navigate = useNavigate();
  
  const [predictions, setPredictions] = useState<DiseasePrediction[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Pagination & Filtering state
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const [diseaseFilter, setDiseaseFilter] = useState('all');
  const [riskFilter, setRiskFilter] = useState('all');

  const load = useCallback(async () => {
    setIsLoading(true);
    try {
      // Pass all our filters to the service
      const res = await predictionService.getAll({ 
        page, 
        pageSize, 
        search, 
        status: 'all' // History shows all statuses, usually 'completed'
      });
      // In a real app, the backend would handle these exact filters.
      // Here we will do some client-side post-filtering for demonstration:
      let filteredData = res.data;
      if (diseaseFilter !== 'all') {
        filteredData = filteredData.filter(p => p.diseaseType === diseaseFilter);
      }
      if (riskFilter !== 'all') {
        filteredData = filteredData.filter(p => p.riskLevel === riskFilter);
      }
      
      setPredictions(filteredData);
      setTotal(res.pagination.total); // Note: total might not perfectly reflect client-side filtering in mock
    } catch {
      error('Error', 'Failed to load prediction history.');
    } finally {
      setIsLoading(false);
    }
  }, [page, pageSize, search, diseaseFilter, riskFilter, error]);

  useEffect(() => {
    const t = setTimeout(load, search ? 300 : 0);
    return () => clearTimeout(t);
  }, [load, search]);

  const handleExport = (type: string) => {
    success(`${type} Export Started`, 'Your file is being generated and will download shortly.');
  };

  const columns: Column<DiseasePrediction>[] = useMemo(() => [
    {
      key: 'id',
      title: 'ID',
      render: (val) => (
        <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold">
          {String(val).toUpperCase()}
        </span>
      ),
    },
    {
      key: 'patientName',
      title: 'Patient',
      sortable: true,
      render: (_, r) => (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white text-xs font-bold shrink-0">
            {r.patientName.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <span className="font-medium text-slate-700 dark:text-slate-200 text-sm block">{r.patientName}</span>
            <span className="text-[10px] text-slate-500">{r.patientId}</span>
          </div>
        </div>
      ),
    },
    {
      key: 'diseaseType',
      title: 'Disease',
      render: (val) => (
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {DISEASE_LABELS[String(val)] || String(val)}
        </span>
      ),
    },
    {
      key: 'createdAt',
      title: 'Date',
      sortable: true,
      render: (val) => (
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {formatDate(String(val))}
        </span>
      ),
    },
    {
      key: 'probability',
      title: 'Risk Score',
      align: 'center',
      render: (val) => <ScoreBadge score={Number(val)} />,
    },
    {
      key: 'confidence',
      title: 'Confidence',
      align: 'center',
      render: (val) => (
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
          {(Number(val) * 100).toFixed(1)}%
        </span>
      ),
    },
    {
      key: 'riskLevel',
      title: 'Risk Level',
      render: (val) => <RiskBadge level={val as 'low' | 'moderate' | 'high' | 'critical'} />,
    },
    {
      key: 'requestedBy',
      title: 'Doctor',
      render: (val) => (
        <span className="text-xs text-slate-600 dark:text-slate-400">
          {String(val)}
        </span>
      ),
    },
  ], []);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <History className="text-blue-600 dark:text-blue-400" size={24} />
            Prediction History
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            View, filter, and export historical AI disease risk assessments.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" leftIcon={<FileSpreadsheet size={16} />} onClick={() => handleExport('Excel')}>Excel</Button>
          <Button variant="outline" size="sm" leftIcon={<Download size={16} />} onClick={() => handleExport('CSV')}>CSV</Button>
          <Button variant="outline" size="sm" leftIcon={<Printer size={16} />} onClick={() => handleExport('Print')}>Print</Button>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by patient name, ID, or disease..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 dark:text-slate-200"
            />
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <select 
            value={diseaseFilter} 
            onChange={(e) => setDiseaseFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-700 dark:text-slate-300"
          >
            <option value="all">All Diseases</option>
            <option value="diabetes">Diabetes</option>
            <option value="heart_disease">Heart Disease</option>
            <option value="stroke">Stroke</option>
            <option value="kidney_disease">Kidney Disease</option>
          </select>
          
          <select 
            value={riskFilter} 
            onChange={(e) => setRiskFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-700 dark:text-slate-300"
          >
            <option value="all">All Risks</option>
            <option value="low">Low Risk</option>
            <option value="moderate">Moderate Risk</option>
            <option value="high">High Risk</option>
            <option value="critical">Critical</option>
          </select>

          <Button variant="outline" size="sm" leftIcon={<Filter size={16} />}>More Filters</Button>
        </div>
      </div>

      {/* Data Table */}
      <Table 
        columns={columns} 
        data={predictions} 
        isLoading={isLoading} 
        stickyHeader 
        onRowClick={(record) => navigate(ROUTES.PREDICTION_RESULT.replace(':id', record.id))}
      />

      <Pagination
        page={page}
        pageSize={pageSize}
        total={total}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
}
