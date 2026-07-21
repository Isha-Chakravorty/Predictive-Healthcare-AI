import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, BarElement, ArcElement, RadialLinearScale,
  Tooltip, Legend, Filler,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { BarChart3, TrendingUp, Users, Brain, Download, Calendar } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Input';
import { ChartSkeleton, StatCardSkeleton } from '../components/ui/Skeleton';
import { analyticsService } from '../services/mockService';
import { CHART_COLORS } from '../constants';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, RadialLinearScale, Tooltip, Legend, Filler
);

const baseChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { labels: { font: { size: 11 }, boxWidth: 12 } } },
  scales: {
    x: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 11 } } },
    y: { grid: { color: 'rgba(100,116,139,0.1)' }, border: { display: false }, ticks: { font: { size: 11 } } },
  },
};

export function AnalyticsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [period, setPeriod] = useState('7m');
  const [data, setData] = useState<{
    predictions: { date: string; value: number }[];
    patients: { date: string; value: number }[];
    accuracy: { date: string; value: number }[];
    diseases: { disease: string; count: number; color: string }[];
    risks: { label: string; value: number; color: string }[];
    ages: { label: string; value: number }[];
  } | null>(null);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const [pred, pat, acc, dis, risk, age] = await Promise.all([
        analyticsService.getPredictionTrend(),
        analyticsService.getPatientGrowth(),
        analyticsService.getAccuracyTrend(),
        analyticsService.getDiseaseDistribution(),
        analyticsService.getRiskDistribution(),
        analyticsService.getAgeDistribution(),
      ]);
      setData({
        predictions: pred.data,
        patients: pat.data,
        accuracy: acc.data,
        diseases: dis.data,
        risks: risk.data,
        ages: age.data,
      });
      setIsLoading(false);
    };
    load();
  }, [period]);

  const kpiCards = data
    ? [
        { label: 'Total Predictions',  value: data.predictions.reduce((s, d) => s + d.value, 0).toLocaleString(), icon: <Brain size={18} />, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
        { label: 'New Patients',        value: data.patients.reduce((s, d) => s + d.value, 0).toLocaleString(), icon: <Users size={18} />, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
        { label: 'Avg. Accuracy',       value: `${(data.accuracy.reduce((s, d) => s + d.value, 0) / data.accuracy.length).toFixed(1)}%`, icon: <TrendingUp size={18} />, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
        { label: 'High Risk Cases',     value: data.risks.find(r => r.label === 'High Risk')?.value.toString() ?? '-', icon: <BarChart3 size={18} />, color: 'text-red-600', bg: 'bg-red-50 dark:bg-red-900/20' },
      ]
    : [];

  return (
    <div className="space-y-6 max-w-[1400px]">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <BarChart3 size={24} className="text-blue-600 dark:text-blue-400" />
            Analytics
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
            Comprehensive platform metrics and trends
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select
            options={[
              { value: '7m', label: 'Last 7 Months' },
              { value: '3m', label: 'Last 3 Months' },
              { value: '1y', label: 'Last Year' },
            ]}
            value={period}
            onChange={e => setPeriod(e.target.value)}
            containerClassName="w-44"
          />
          <Button variant="outline" size="sm" leftIcon={<Download size={14} />}>
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)
          : kpiCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{card.label}</span>
                  <div className={`p-2 rounded-lg ${card.bg} ${card.color}`}>{card.icon}</div>
                </div>
                <p className="text-2xl font-bold text-slate-800 dark:text-white">{card.value}</p>
              </motion.div>
            ))}
      </div>

      {/* Charts — Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {isLoading ? (
          <><ChartSkeleton height={300} /><ChartSkeleton height={300} /></>
        ) : (
          <>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1">Prediction Volume</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Monthly predictions run</p>
              <div style={{ height: 260 }}>
                <Bar
                  data={{
                    labels: data!.predictions.map(d => d.date),
                    datasets: [{
                      label: 'Predictions',
                      data: data!.predictions.map(d => d.value),
                      backgroundColor: `${CHART_COLORS.primary}cc`,
                      borderRadius: 6,
                      borderSkipped: false,
                    }],
                  }}
                  options={{ ...baseChartOptions, plugins: { legend: { display: false } } }}
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1">Model Accuracy Trend</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Weekly accuracy over time</p>
              <div style={{ height: 260 }}>
                <Line
                  data={{
                    labels: data!.accuracy.map(d => d.date),
                    datasets: [{
                      label: 'Accuracy %',
                      data: data!.accuracy.map(d => d.value),
                      borderColor: CHART_COLORS.success,
                      backgroundColor: `${CHART_COLORS.success}15`,
                      fill: true,
                      tension: 0.4,
                      pointRadius: 5,
                      pointBackgroundColor: CHART_COLORS.success,
                      borderWidth: 2.5,
                    }],
                  }}
                  options={{
                    ...baseChartOptions,
                    plugins: { legend: { display: false } },
                    scales: {
                      ...baseChartOptions.scales,
                      y: { ...baseChartOptions.scales.y, min: 88, max: 98 },
                    },
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Charts — Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <><ChartSkeleton height={300} /><ChartSkeleton height={300} /><ChartSkeleton height={300} /></>
        ) : (
          <>
            {/* Patient growth */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1">Patient Growth</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">New registrations by month</p>
              <div style={{ height: 220 }}>
                <Line
                  data={{
                    labels: data!.patients.map(d => d.date),
                    datasets: [{
                      label: 'Patients',
                      data: data!.patients.map(d => d.value),
                      borderColor: CHART_COLORS.secondary,
                      backgroundColor: `${CHART_COLORS.secondary}15`,
                      fill: true,
                      tension: 0.4,
                      pointRadius: 4,
                      borderWidth: 2,
                    }],
                  }}
                  options={{ ...baseChartOptions, plugins: { legend: { display: false } } }}
                />
              </div>
            </motion.div>

            {/* Disease distribution */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1">Disease Mix</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Prediction by disease type</p>
              <div style={{ height: 180 }}>
                <Doughnut
                  data={{
                    labels: data!.diseases.map(d => d.disease),
                    datasets: [{
                      data: data!.diseases.map(d => d.count),
                      backgroundColor: data!.diseases.map(d => d.color),
                      borderWidth: 0,
                    }],
                  }}
                  options={{
                    responsive: true, maintainAspectRatio: false,
                    cutout: '65%',
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
              <div className="mt-3 space-y-1.5">
                {data!.diseases.slice(0, 4).map(d => (
                  <div key={d.disease} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                      <span className="text-slate-600 dark:text-slate-400">{d.disease}</span>
                    </div>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {((d.count / data!.diseases.reduce((s: number, x: { count: number }) => s + x.count, 0)) * 100).toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Risk distribution */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1">Risk Distribution</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Patient risk levels</p>
              <div className="space-y-3 mt-2">
                {data!.risks.map(r => {
                  const total = data!.risks.reduce((s, d) => s + d.value, 0);
                  const pct = ((r.value / total) * 100).toFixed(1);
                  return (
                    <div key={r.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600 dark:text-slate-400">{r.label}</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{r.value} ({pct}%)</span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: r.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
