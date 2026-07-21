import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { History, Download, Filter } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SearchBar } from '../components/ui/SearchBar';
import { Table } from '../components/ui/Table';
import { Pagination } from '../components/ui/Pagination';
import { RiskBadge, StatusBadge, ScoreBadge } from '../components/ui/Badge';
import { Select } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { predictionService } from '../services/mockService';
import { useToast } from '../context/ToastContext';
import type { DiseasePrediction, Column } from '../types';
import { formatDate } from '../utils';
import { DISEASE_LABELS } from '../constants';

export function PredictionHistoryPage() {
  const { success } = useToast();
  const [predictions, setPredictions] = useState<DiseasePrediction[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selected, setSelected] = useState<DiseasePrediction | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const load = useCallback(async () => {
    setIsLoading(true);
    const res = await predictionService.getAll({ page, pageSize, search, status: statusFilter });
    setPredictions(res.data);
    setTotal(res.pagination.total);
    setIsLoading(false);
  }, [page, pageSize, search, statusFilter]);

  useEffect(() => {
    const t = setTimeout(load, search ? 300 : 0);
    return () => clearTimeout(t);
  }, [load, search]);

  const columns: Column<DiseasePrediction>[] = [
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
          <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{r.patientName}</span>
        </div>
      ),
    },
    {
      key: 'diseaseType',
      title: 'Disease Type',
      render: (val) => (
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {DISEASE_LABELS[String(val)] || String(val)}
        </span>
      ),
    },
    {
      key: 'probability',
      title: 'Probability',
      align: 'center',
      render: (val) => <ScoreBadge score={Number(val)} />,
    },
    {
      key: 'riskLevel',
      title: 'Risk',
      render: (val) => <RiskBadge level={val as 'low' | 'moderate' | 'high' | 'critical'} />,
    },
    {
      key: 'status',
      title: 'Status',
      render: (val) => <StatusBadge status={String(val)} />,
    },
    {
      key: 'modelVersion',
      title: 'Model',
      render: (val) => (
        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{String(val)}</span>
      ),
    },
    {
      key: 'requestedBy',
      title: 'Requested By',
      render: (val) => (
        <span className="text-xs text-slate-600 dark:text-slate-400">{String(val)}</span>
      ),
    },
    {
      key: 'createdAt',
      title: 'Date',
      sortable: true,
      render: (val) => (
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {formatDate(String(val))}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-5 max-w-[1400px]">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <History size={24} className="text-indigo-600 dark:text-indigo-400" />
            Prediction History
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
            All past AI disease prediction records
          </p>
        </div>
        <Button variant="outline" size="sm" leftIcon={<Download size={14} />}
          onClick={() => success('Export started', 'History export is being prepared.')}>
          Export CSV
        </Button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total',      value: total,  color: 'text-blue-600 dark:text-blue-400'  },
          { label: 'Completed',  value: predictions.filter(p => p.status === 'completed').length,  color: 'text-green-600 dark:text-green-400'  },
          { label: 'Processing', value: predictions.filter(p => p.status === 'processing').length, color: 'text-yellow-600 dark:text-yellow-400' },
          { label: 'High Risk',  value: predictions.filter(p => p.riskLevel === 'high').length,    color: 'text-red-600 dark:text-red-400'       },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center"
          >
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
        <div className="flex items-center gap-3 flex-wrap">
          <SearchBar
            value={search}
            onChange={val => { setSearch(val); setPage(1); }}
            placeholder="Search patient or disease..."
            className="flex-1 min-w-48"
          />
          <Select
            options={[
              { value: 'all',        label: 'All Status' },
              { value: 'completed',  label: 'Completed' },
              { value: 'processing', label: 'Processing' },
              { value: 'failed',     label: 'Failed' },
            ]}
            value={statusFilter}
            onChange={e => { setStatusFilter(e.target.value); setPage(1); }}
            containerClassName="w-40"
          />
        </div>
      </div>

      {/* Table */}
      <Table<DiseasePrediction>
        columns={columns}
        data={predictions}
        isLoading={isLoading}
        onRowClick={p => { setSelected(p); setShowDetail(true); }}
        emptyMessage="No predictions found"
        emptyIcon={<History size={40} />}
      />

      {!isLoading && total > 0 && (
        <Pagination
          page={page}
          pageSize={pageSize}
          total={total}
          onPageChange={setPage}
          onPageSizeChange={pg => { setPageSize(pg); setPage(1); }}
        />
      )}

      {/* Detail Modal */}
      <Modal
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
        title="Prediction Detail"
        subtitle={selected?.id}
        size="lg"
      >
        {selected && (
          <div className="space-y-5">
            <div className="flex items-center gap-3 flex-wrap">
              <StatusBadge status={selected.status} size="lg" />
              <RiskBadge level={selected.riskLevel} size="lg" />
              <ScoreBadge score={selected.probability} size="lg" />
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div><span className="text-slate-500">Patient: </span><strong className="text-slate-700 dark:text-slate-200">{selected.patientName}</strong></div>
              <div><span className="text-slate-500">Disease: </span><strong className="text-slate-700 dark:text-slate-200">{DISEASE_LABELS[selected.diseaseType]}</strong></div>
              <div><span className="text-slate-500">Model: </span><strong className="text-slate-700 dark:text-slate-200 font-mono">{selected.modelVersion}</strong></div>
              <div><span className="text-slate-500">Requested by: </span><strong className="text-slate-700 dark:text-slate-200">{selected.requestedBy}</strong></div>
              <div><span className="text-slate-500">Created: </span><strong className="text-slate-700 dark:text-slate-200">{formatDate(selected.createdAt)}</strong></div>
              {selected.completedAt && (
                <div><span className="text-slate-500">Completed: </span><strong className="text-slate-700 dark:text-slate-200">{formatDate(selected.completedAt)}</strong></div>
              )}
            </div>

            {selected.result.diagnosis && selected.result.diagnosis !== 'Processing...' && (
              <>
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Diagnosis</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{selected.result.diagnosis}</p>
                </div>

                {selected.result.riskFactors.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Risk Factors</h4>
                    <div className="space-y-2">
                      {selected.result.riskFactors.map(rf => (
                        <div key={rf.factor} className="flex items-center justify-between gap-4 py-2 border-b border-slate-50 dark:border-slate-700 last:border-0">
                          <span className="text-sm text-slate-700 dark:text-slate-300">{rf.factor}</span>
                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-xs text-slate-500">{rf.value}</span>
                            <RiskBadge level={rf.impact as 'low' | 'moderate' | 'high' | 'critical'} size="sm" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selected.result.recommendations.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Recommendations</h4>
                    <ul className="space-y-1.5">
                      {selected.result.recommendations.map((rec, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="text-blue-500 mt-0.5 shrink-0">→</span>
                          {typeof rec === 'string' ? rec : rec.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
