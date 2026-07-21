import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users, Brain, TrendingUp, AlertTriangle,
  Activity, ArrowUpRight, Calendar, Clock,
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, Tooltip, Legend, Filler,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { StatCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { StatCardSkeleton, ChartSkeleton, ActivitySkeleton } from '../components/ui/Skeleton';
import { dashboardService, analyticsService } from '../services/mockService';
import type { DashboardStats, RecentActivity } from '../types';
import { formatDate } from '../utils';
import { CHART_COLORS } from '../constants';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, Tooltip, Legend, Filler
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 11 } } },
    y: { grid: { color: 'rgba(100,116,139,0.1)' }, border: { display: false }, ticks: { font: { size: 11 } } },
  },
};

export function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [activity, setActivity] = useState<RecentActivity[]>([]);
  const [chartData, setChartData] = useState<{ predictions: number[]; patients: number[]; labels: string[] } | null>(null);
  const [diseaseData, setDiseaseData] = useState<{ labels: string[]; counts: number[]; colors: string[] } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const [statsRes, activityRes, predictionsRes, patientsRes, diseaseRes] = await Promise.all([
        dashboardService.getStats(),
        dashboardService.getRecentActivity(),
        analyticsService.getPredictionTrend(),
        analyticsService.getPatientGrowth(),
        analyticsService.getDiseaseDistribution(),
      ]);
      setStats(statsRes.data);
      setActivity(activityRes.data);
      setChartData({
        labels: predictionsRes.data.map(d => d.date),
        predictions: predictionsRes.data.map(d => d.value),
        patients: patientsRes.data.map(d => d.value),
      });
      setDiseaseData({
        labels: diseaseRes.data.map(d => d.disease),
        counts: diseaseRes.data.map(d => d.count),
        colors: diseaseRes.data.map(d => d.color),
      });
      setIsLoading(false);
    };
    load();
  }, []);

  const statCards = stats
    ? [
        { title: 'Total Patients',       value: stats.totalPatients.toLocaleString(), change: 8.2,  changeType: 'increase' as const, icon: <Users size={20} />,         iconBg: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400', subtitle: `${stats.newPatientsThisWeek} new this week` },
        { title: 'Active Predictions',   value: stats.activePredictions,              change: 12.5, changeType: 'increase' as const, icon: <Brain size={20} />,         iconBg: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400', subtitle: `${stats.predictionsToday} today` },
        { title: 'Model Accuracy',       value: `${stats.modelAccuracy}%`,           change: 1.3,  changeType: 'increase' as const, icon: <TrendingUp size={20} />,    iconBg: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400', subtitle: `Avg confidence: ${stats.avgConfidenceScore}%` },
        { title: 'Critical Alerts',      value: stats.criticalAlerts,                 change: 3.1,  changeType: 'decrease' as const, icon: <AlertTriangle size={20} />, iconBg: 'bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400', subtitle: 'Requires immediate attention' },
      ]
    : [];

  const activitySeverityIcon: Record<string, string> = {
    error:   '🔴',
    warning: '🟡',
    success: '🟢',
    info:    '🔵',
  };

  return (
    <div className="space-y-6 max-w-[1400px]">
      {/* Page header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
            Clinical analytics overview · {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </span>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)
          : statCards.map((card, i) => (
              <StatCard key={card.title} {...card} delay={i * 0.05} />
            ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Prediction trend line chart */}
        <div className="lg:col-span-2">
          {isLoading ? (
            <ChartSkeleton height={280} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">
                    Predictions & Patient Growth
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Monthly trend</p>
                </div>
                <Badge variant="success" dot>Live</Badge>
              </div>
              <div style={{ height: 260 }}>
                <Line
                  data={{
                    labels: chartData?.labels ?? [],
                    datasets: [
                      {
                        label: 'Predictions',
                        data: chartData?.predictions ?? [],
                        borderColor: CHART_COLORS.primary,
                        backgroundColor: `${CHART_COLORS.primary}18`,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointBackgroundColor: CHART_COLORS.primary,
                        borderWidth: 2.5,
                      },
                      {
                        label: 'New Patients',
                        data: chartData?.patients ?? [],
                        borderColor: CHART_COLORS.secondary,
                        backgroundColor: `${CHART_COLORS.secondary}12`,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointBackgroundColor: CHART_COLORS.secondary,
                        borderWidth: 2.5,
                      },
                    ],
                  }}
                  options={{
                    ...chartOptions,
                    plugins: {
                      legend: {
                        display: true,
                        position: 'top' as const,
                        labels: { boxWidth: 12, font: { size: 11 } },
                      },
                    },
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Disease distribution donut */}
        {isLoading ? (
          <ChartSkeleton height={280} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
          >
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1">
              Disease Distribution
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">By prediction type</p>
            <div style={{ height: 200 }}>
              <Doughnut
                data={{
                  labels: diseaseData?.labels ?? [],
                  datasets: [{
                    data: diseaseData?.counts ?? [],
                    backgroundColor: diseaseData?.colors ?? [],
                    borderWidth: 0,
                    hoverOffset: 6,
                  }],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                    tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.parsed}` } },
                  },
                  cutout: '68%',
                }}
              />
            </div>
            <div className="mt-4 space-y-1.5">
              {diseaseData?.labels.slice(0, 4).map((label, i) => (
                <div key={label} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: diseaseData.colors[i] }} />
                    <span className="text-slate-600 dark:text-slate-400 truncate">{label}</span>
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{diseaseData.counts[i]}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom row: Activity feed + Bar chart */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Recent activity */}
        <div className="lg:col-span-3">
          {isLoading ? (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
              <div className="mb-4 h-5 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-40" />
              <ActivitySkeleton />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">
                  Recent Activity
                </h3>
                <Badge variant="primary" size="sm">{activity.length} events</Badge>
              </div>
              <div className="space-y-3">
                {activity.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.04 }}
                    className="flex items-start gap-3 py-2 border-b border-slate-50 dark:border-slate-700/50 last:border-0"
                  >
                    <span className="text-base leading-none mt-0.5">
                      {activitySeverityIcon[item.severity ?? 'info']}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-tight truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                      <Clock size={11} />
                      {formatDate(item.timestamp, 'relative')}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Bar chart — age or risk distribution */}
        <div className="lg:col-span-2">
          {isLoading ? (
            <ChartSkeleton height={340} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
            >
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1">
                Patients by Age Group
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Current distribution</p>
              <div style={{ height: 260 }}>
                <Bar
                  data={{
                    labels: ['18–30', '31–45', '46–60', '61–75', '75+'],
                    datasets: [{
                      data: [87, 214, 389, 412, 182],
                      backgroundColor: [
                        `${CHART_COLORS.primary}cc`,
                        `${CHART_COLORS.secondary}cc`,
                        `${CHART_COLORS.success}cc`,
                        `${CHART_COLORS.warning}cc`,
                        `${CHART_COLORS.purple}cc`,
                      ],
                      borderRadius: 6,
                      borderSkipped: false,
                    }],
                  }}
                  options={{
                    ...chartOptions,
                    scales: {
                      ...chartOptions.scales,
                      y: { ...chartOptions.scales.y, beginAtZero: true },
                    },
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Quick Actions</h3>
            <p className="text-blue-100 text-sm">Frequently used tools and reports</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {[
              { label: 'New Prediction', icon: <Brain size={14} /> },
              { label: 'Add Patient', icon: <Users size={14} /> },
              { label: 'View Analytics', icon: <Activity size={14} /> },
              { label: 'Schedule', icon: <Calendar size={14} /> },
            ].map(action => (
              <button
                key={action.label}
                className="flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-lg text-sm font-medium transition-all duration-200 border border-white/20 hover:border-white/40"
              >
                {action.icon}
                {action.label}
                <ArrowUpRight size={12} className="opacity-70" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
