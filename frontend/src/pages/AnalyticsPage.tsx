import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, BarElement, ArcElement, RadialLinearScale,
  Tooltip, Legend, Filler,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { BarChart3, TrendingUp, Users, Brain, Download, Lightbulb, Activity, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Input';
import { ChartSkeleton, StatCardSkeleton } from '../components/ui/Skeleton';
import analyticsService from '../services/analyticsService';
import { adaptAnalytics } from '../services/adapters';
import { CHART_COLORS, DISEASE_LABELS } from '../constants';
import type { AnalyticsMetrics } from '../types';
import { useToast } from '../context/ToastContext';

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
  const [period, setPeriod] = useState('12m');
  const [data, setData] = useState<AnalyticsMetrics | null>(null);
  const { success } = useToast();

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const raw = await analyticsService.getAnalytics();
        setData(adaptAnalytics(raw));
      } catch (err) {
        console.error('Failed to load analytics data', err);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [period]);

  const handleExport = (type: string) => {
    success(`${type} Export Started`, 'Your file is being generated and will download shortly.');
  };

  const totalPredictions = data?.monthlyTrends.reduce((sum, t) => sum + t.predictions, 0) || 0;
  const totalHighRisk = data?.monthlyTrends.reduce((sum, t) => sum + t.highRisk, 0) || 0;
  const avgHighRiskRate = totalPredictions > 0 ? ((totalHighRisk / totalPredictions) * 100).toFixed(1) : 0;

  const kpiCards = [
    { label: 'Total Predictions (YTD)', value: totalPredictions.toLocaleString(), icon: <Brain size={18} />, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { label: 'High Risk Cases', value: totalHighRisk.toLocaleString(), icon: <Activity size={18} />, color: 'text-red-600', bg: 'bg-red-50 dark:bg-red-900/20' },
    { label: 'Avg High Risk Rate', value: `${avgHighRiskRate}%`, icon: <TrendingUp size={18} />, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { label: 'Total Patients Analyzed', value: data?.demographics.gender.reduce((s, g) => s + g.count, 0).toLocaleString() || 0, icon: <Users size={18} />, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
  ];

  return (
    <div className="space-y-6 max-w-[1400px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <BarChart3 size={24} className="text-blue-600 dark:text-blue-400" />
            Healthcare Analytics
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
            Enterprise clinical insights and AI prediction trends
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select
            options={[
              { value: '12m', label: 'Last 12 Months' },
              { value: '6m', label: 'Last 6 Months' },
              { value: '3m', label: 'Last 3 Months' },
            ]}
            value={period}
            onChange={e => setPeriod(e.target.value)}
            containerClassName="w-44"
          />
          <Button variant="outline" size="sm" leftIcon={<Download size={14} />} onClick={() => handleExport('PDF Report')}>
            Export Report
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
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{card.label}</span>
                  <div className={`p-2 rounded-lg ${card.bg} ${card.color}`}>{card.icon}</div>
                </div>
                <p className="text-2xl font-bold text-slate-800 dark:text-white">{card.value}</p>
              </motion.div>
            ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Trend Chart */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1">Prediction Volume & Risk Trends</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Total vs High Risk predictions over time</p>
            {isLoading ? <ChartSkeleton height={300} /> : (
              <div style={{ height: 320 }}>
                <Line
                  data={{
                    labels: data?.monthlyTrends.map(t => t.month) || [],
                    datasets: [
                      {
                        label: 'Total Predictions',
                        data: data?.monthlyTrends.map(t => t.predictions) || [],
                        borderColor: CHART_COLORS.primary,
                        backgroundColor: `${CHART_COLORS.primary}15`,
                        fill: true,
                        tension: 0.4,
                      },
                      {
                        label: 'High Risk Cases',
                        data: data?.monthlyTrends.map(t => t.highRisk) || [],
                        borderColor: CHART_COLORS.danger,
                        backgroundColor: 'transparent',
                        borderDash: [5, 5],
                        tension: 0.4,
                      }
                    ],
                  }}
                  options={{ ...baseChartOptions, plugins: { legend: { position: 'top' } } }}
                />
              </div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">Age Distribution</h3>
              {isLoading ? <ChartSkeleton height={200} /> : (
                <div style={{ height: 220 }}>
                  <Bar
                    data={{
                      labels: data?.demographics.ageGroups.map(a => a.group) || [],
                      datasets: [{
                        label: 'Patients',
                        data: data?.demographics.ageGroups.map(a => a.count) || [],
                        backgroundColor: `${CHART_COLORS.secondary}cc`,
                        borderRadius: 4,
                      }],
                    }}
                    options={{ ...baseChartOptions, plugins: { legend: { display: false } } }}
                  />
                </div>
              )}
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">Gender Distribution</h3>
              {isLoading ? <ChartSkeleton height={200} /> : (
                <div style={{ height: 220 }} className="flex justify-center relative">
                  <Doughnut
                    data={{
                      labels: data?.demographics.gender.map(g => g.gender) || [],
                      datasets: [{
                        data: data?.demographics.gender.map(g => g.count) || [],
                        backgroundColor: [CHART_COLORS.primary, CHART_COLORS.purple],
                        borderWidth: 0,
                      }],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      cutout: '70%',
                      plugins: { legend: { position: 'bottom' } },
                    }}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Lightbulb size={18} className="text-amber-500" />
              Key Insights
            </h3>
            <div className="space-y-4">
              {isLoading ? (
                Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-12 bg-slate-100 dark:bg-slate-700 rounded-lg animate-pulse" />)
              ) : (
                data?.insights.map((insight, i) => {
                  const Icon = insight.trend === 'up' ? ArrowUpRight : insight.trend === 'down' ? ArrowDownRight : Minus;
                  const color = insight.type === 'warning' ? 'text-red-500 bg-red-50 dark:bg-red-900/20' 
                              : insight.type === 'success' ? 'text-green-500 bg-green-50 dark:bg-green-900/20'
                              : 'text-blue-500 bg-blue-50 dark:bg-blue-900/20';
                  return (
                    <div key={i} className="flex gap-3 items-start">
                      <div className={`p-1.5 rounded-md shrink-0 mt-0.5 ${color}`}>
                        <Icon size={14} />
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                        {insight.text}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1">Disease Distribution</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Frequency of predictions by disease type</p>
            {isLoading ? <ChartSkeleton height={200} /> : (
              <div style={{ height: 260 }}>
                <Bar
                  data={{
                    labels: data?.diseaseDistribution.map(d => DISEASE_LABELS[d.disease] || d.disease) || [],
                    datasets: [{
                      label: 'Cases',
                      data: data?.diseaseDistribution.map(d => d.count) || [],
                      backgroundColor: `${CHART_COLORS.warning}cc`,
                      borderRadius: 4,
                    }],
                  }}
                  options={{
                    ...baseChartOptions,
                    indexAxis: 'y',
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
