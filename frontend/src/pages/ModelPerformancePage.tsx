import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { Table } from '../components/ui/Table';
import { StatusBadge, ScoreBadge } from '../components/ui/Badge';
import { TableSkeleton } from '../components/ui/Skeleton';
import { modelService } from '../services/mockService';
import type { ModelMetrics, Column } from '../types';
import { formatDate } from '../utils';
import { DISEASE_LABELS } from '../constants';

export function ModelPerformancePage() {
  const [models, setModels] = useState<ModelMetrics[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    modelService.getAll().then(res => {
      setModels(res.data);
      setIsLoading(false);
    });
  }, []);

  const columns: Column<ModelMetrics>[] = [
    {
      key: 'modelName',
      title: 'Model',
      render: (_, r) => (
        <div>
          <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{r.modelName}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">{r.version}</p>
        </div>
      ),
    },
    {
      key: 'disease',
      title: 'Disease',
      render: (val) => (
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {DISEASE_LABELS[String(val)] || String(val)}
        </span>
      ),
    },
    {
      key: 'accuracy',
      title: 'Accuracy',
      align: 'center',
      sortable: true,
      render: (val) => <ScoreBadge score={Number(val)} />,
    },
    {
      key: 'precision',
      title: 'Precision',
      align: 'center',
      render: (val) => <ScoreBadge score={Number(val)} />,
    },
    {
      key: 'recall',
      title: 'Recall',
      align: 'center',
      render: (val) => <ScoreBadge score={Number(val)} />,
    },
    {
      key: 'f1Score',
      title: 'F1 Score',
      align: 'center',
      render: (val) => <ScoreBadge score={Number(val)} />,
    },
    {
      key: 'auc',
      title: 'AUC-ROC',
      align: 'center',
      render: (val) => <ScoreBadge score={Number(val)} />,
    },
    {
      key: 'trainingDataSize',
      title: 'Training Data',
      align: 'right',
      render: (val) => (
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {Number(val).toLocaleString()}
        </span>
      ),
    },
    {
      key: 'status',
      title: 'Status',
      render: (val) => <StatusBadge status={String(val)} />,
    },
    {
      key: 'lastTrained',
      title: 'Last Trained',
      sortable: true,
      render: (val) => (
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {formatDate(String(val))}
        </span>
      ),
    },
  ];

  // Overall metrics
  const avgAccuracy = models.length
    ? (models.reduce((s, m) => s + m.accuracy, 0) / models.length * 100).toFixed(1)
    : '–';
  const avgAuc = models.length
    ? (models.reduce((s, m) => s + m.auc, 0) / models.length * 100).toFixed(1)
    : '–';

  return (
    <div className="space-y-6 max-w-[1400px]">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <Activity size={24} className="text-green-600 dark:text-green-400" />
          Model Performance
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
          AI model metrics, accuracy, and status monitoring
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Active Models',    value: models.filter(m => m.status === 'active').length, icon: <CheckCircle size={18} />, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
          { label: 'Avg Accuracy',     value: `${avgAccuracy}%`, icon: <TrendingUp size={18} />, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
          { label: 'Avg AUC-ROC',      value: `${avgAuc}%`, icon: <Activity size={18} />, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
          { label: 'In Testing',       value: models.filter(m => m.status === 'testing').length, icon: <AlertCircle size={18} />, color: 'text-yellow-600', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</span>
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>{stat.icon}</div>
            </div>
            <p className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Individual model cards */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 h-48 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {models.map((model, i) => (
            <motion.div
              key={model.modelId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100">{model.modelName}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {DISEASE_LABELS[model.disease]} · {model.version}
                  </p>
                </div>
                <StatusBadge status={model.status} />
              </div>

              {/* Metric bars */}
              <div className="space-y-2.5">
                {[
                  { label: 'Accuracy',  value: model.accuracy  },
                  { label: 'Precision', value: model.precision },
                  { label: 'Recall',    value: model.recall    },
                  { label: 'F1',        value: model.f1Score   },
                ].map(m => (
                  <div key={m.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-500 dark:text-slate-400">{m.label}</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">
                        {(m.value * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${m.value * 100}%` }}
                        transition={{ duration: 0.8, delay: i * 0.07 + 0.3 }}
                        className={`h-full rounded-full ${m.value >= 0.95 ? 'bg-green-500' : m.value >= 0.88 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>AUC: <strong className="text-slate-700 dark:text-slate-300">{(model.auc * 100).toFixed(1)}%</strong></span>
                <span>Data: <strong className="text-slate-700 dark:text-slate-300">{(model.trainingDataSize / 1000).toFixed(0)}k</strong></span>
                <span>Last: <strong className="text-slate-700 dark:text-slate-300">{formatDate(model.lastTrained)}</strong></span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Comparison table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">
          Full Model Comparison
        </h3>
        {isLoading
          ? <TableSkeleton rows={6} cols={8} />
          : <Table<ModelMetrics> columns={columns} data={models} />}
      </div>
    </div>
  );
}
