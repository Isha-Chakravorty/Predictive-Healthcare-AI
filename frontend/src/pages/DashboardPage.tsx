import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Users, Brain, TrendingUp, AlertTriangle,
  Activity, ArrowUpRight, Calendar, Heart, ArrowRight, Bell
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

import { mockPatients, mockPredictions, mockRecentActivity, mockDashboardStats, mockCheckups, mockNotifications } from '../mock';
import type { DashboardStats } from '../types';
import { formatDate } from '../utils';
import { CHART_COLORS } from '../constants';
import { Link } from 'react-router-dom';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      // simulate delay
      await new Promise(r => setTimeout(r, 600));
      setStats(mockDashboardStats);
      setIsLoading(false);
    };
    load();
  }, []);

  const statCards = useMemo(() => stats
    ? [
        { title: 'Total Patients', value: stats.totalPatients.toLocaleString(), change: 4.2, changeType: 'increase' as const, icon: <Users size={20} />, iconBg: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400', subtitle: `${stats.newPatientsThisWeek} new this week` },
        { title: 'High Risk Patients', value: stats.highRiskPatients?.toLocaleString() ?? 482, change: -2.1, changeType: 'decrease' as const, icon: <AlertTriangle size={20} />, iconBg: 'bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400', subtitle: 'Requires monitoring' },
        { title: 'Diabetes Predictions', value: stats.diabetesPredictions?.toLocaleString() ?? 823, change: 12.5, changeType: 'increase' as const, icon: <Activity size={20} />, iconBg: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400', subtitle: 'AI analysis complete' },
        { title: 'Heart Disease', value: stats.heartDiseasePredictions?.toLocaleString() ?? 594, change: 8.3, changeType: 'increase' as const, icon: <Heart size={20} />, iconBg: 'bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400', subtitle: 'AI analysis complete' },
        { title: 'Avg Risk Score', value: `${stats.avgRiskScore ?? 42}`, change: -1.2, changeType: 'decrease' as const, icon: <TrendingUp size={20} />, iconBg: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400', subtitle: 'Across all cohorts' },
        { title: 'Monthly Predictions', value: stats.monthlyPredictions?.toLocaleString() ?? 1240, change: 18.2, changeType: 'increase' as const, icon: <Brain size={20} />, iconBg: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400', subtitle: '30-day volume' },
      ]
    : [], [stats]);

  const activitySeverityIcon: Record<string, string> = {
    error: '🔴', warning: '🟡', success: '🟢', info: '🔵',
  };

  const getRiskBadge = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high':
      case 'critical':
        return <Badge variant="danger">{risk}</Badge>;
      case 'moderate':
        return <Badge variant="warning">{risk}</Badge>;
      default:
        return <Badge variant="success">{risk}</Badge>;
    }
  };

  // Mock data calculations for charts
  const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const diseaseData = {
    labels: ['Diabetes', 'Heart Disease', 'Stroke', 'Kidney', 'Hypertension', 'Cancer Risk'],
    counts: [450, 320, 150, 180, 520, 120],
    colors: [CHART_COLORS.primary, CHART_COLORS.secondary, CHART_COLORS.warning, CHART_COLORS.purple, CHART_COLORS.success, CHART_COLORS.danger],
  };

  return (
    <div className="space-y-6 max-w-[1600px]">
      {/* Page header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Healthcare Analytics Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
            Predictive Healthcare AI · {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            System Live
          </span>
        </div>
      </div>

      {/* Stat cards (KPIs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <StatCardSkeleton key={i} />)
          : statCards.map((card, i) => (
              <StatCard key={card.title} {...card} delay={i * 0.05} />
            ))}
      </div>

      {/* Charts section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">Disease Distribution</h3>
          {isLoading ? <ChartSkeleton height={220} /> : (
            <div style={{ height: 220 }}>
              <Doughnut data={{
                labels: diseaseData.labels,
                datasets: [{ data: diseaseData.counts, backgroundColor: diseaseData.colors, borderWidth: 0, hoverOffset: 4 }]
              }} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right', labels: { boxWidth: 10, font: { size: 10 } } } }, cutout: '65%' }} />
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">Monthly Prediction Trend</h3>
          {isLoading ? <ChartSkeleton height={220} /> : (
            <div style={{ height: 220 }}>
              <Line data={{
                labels: monthlyLabels,
                datasets: [{
                  label: 'Predictions', data: [820, 930, 1050, 980, 1150, 1320, 1450],
                  borderColor: CHART_COLORS.primary, backgroundColor: `${CHART_COLORS.primary}20`, fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3
                }]
              }} options={chartOptions} />
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">Risk Level Distribution</h3>
          {isLoading ? <ChartSkeleton height={220} /> : (
            <div style={{ height: 220 }}>
              <Bar data={{
                labels: ['Low', 'Moderate', 'High', 'Critical'],
                datasets: [{
                  data: [1250, 840, 430, 125],
                  backgroundColor: [CHART_COLORS.success, CHART_COLORS.warning, CHART_COLORS.danger, CHART_COLORS.purple],
                  borderRadius: 4
                }]
              }} options={{ ...chartOptions, plugins: { legend: { display: false } } }} />
            </div>
          )}
        </motion.div>
      </div>

      {/* Charts section 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">Age Group Analysis</h3>
          {isLoading ? <ChartSkeleton height={220} /> : (
            <div style={{ height: 220 }}>
              <Bar data={{
                labels: ['18-30', '31-45', '46-60', '61-75', '75+'],
                datasets: [{ data: [150, 420, 780, 650, 320], backgroundColor: CHART_COLORS.secondary, borderRadius: 4 }]
              }} options={chartOptions} />
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">Prediction Accuracy Overview</h3>
          {isLoading ? <ChartSkeleton height={220} /> : (
            <div style={{ height: 220 }}>
              <Line data={{
                labels: monthlyLabels,
                datasets: [{
                  label: 'Accuracy %', data: [91.2, 92.5, 93.1, 92.8, 93.9, 94.2, 94.7],
                  borderColor: CHART_COLORS.success, backgroundColor: `${CHART_COLORS.success}10`, fill: true, tension: 0.4, borderWidth: 2, pointRadius: 3
                }]
              }} options={{ ...chartOptions, scales: { ...chartOptions.scales, y: { ...chartOptions.scales.y, min: 85, max: 100 } } }} />
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">Gender Distribution</h3>
          {isLoading ? <ChartSkeleton height={220} /> : (
            <div style={{ height: 220 }}>
              <Doughnut data={{
                labels: ['Male', 'Female'],
                datasets: [{ data: [1420, 1580], backgroundColor: [CHART_COLORS.primary, CHART_COLORS.purple], borderWidth: 0, hoverOffset: 4 }]
              }} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, cutout: '75%' }} />
            </div>
          )}
        </motion.div>
      </div>

      {/* Tables and Feeds */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent Predictions Table */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col"
        >
          <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">Recent Predictions</h3>
            <Link to="/predictions" className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium flex items-center gap-1">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 uppercase border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-4 py-3 font-medium">Patient</th>
                  <th className="px-4 py-3 font-medium">Disease Type</th>
                  <th className="px-4 py-3 font-medium">Risk Level</th>
                  <th className="px-4 py-3 font-medium">Confidence</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr><td colSpan={5} className="p-4 text-center text-slate-500">Loading...</td></tr>
                ) : (
                  mockPredictions.slice(0, 5).map((pred) => (
                    <tr key={pred.id} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{pred.patientName}</td>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-300 capitalize">{pred.diseaseType.replace('_', ' ')}</td>
                      <td className="px-4 py-3">{getRiskBadge(pred.riskLevel)}</td>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{(pred.confidence * 100).toFixed(1)}%</td>
                      <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{formatDate(pred.createdAt, 'short')}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Activity Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-5 flex flex-col h-full"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">Recent Activity</h3>
            <Badge variant="primary" size="sm">Live</Badge>
          </div>
          {isLoading ? <ActivitySkeleton /> : (
            <div className="space-y-4 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
              {mockRecentActivity.slice(0, 6).map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div className="mt-0.5">{activitySeverityIcon[activity.severity || 'info']}</div>
                  <div>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{activity.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{activity.description}</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">{formatDate(activity.timestamp, 'relative')}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* High Risk Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          className="bg-white dark:bg-slate-800 rounded-xl border border-red-200 dark:border-red-900/50 shadow-sm p-5 flex flex-col h-full relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-red-700 dark:text-red-400 flex items-center gap-2">
              <AlertTriangle size={18} /> High Risk Alerts
            </h3>
          </div>
          <div className="space-y-3">
            {mockPatients.filter(p => p.riskLevel === 'high' || p.riskLevel === 'critical').slice(0, 4).map(patient => (
              <div key={patient.id} className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/10 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{patient.firstName} {patient.lastName}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">ID: {patient.patientId}</p>
                </div>
                <Badge variant="danger">{patient.riskLevel}</Badge>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Checkups */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-5 flex flex-col h-full"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <Calendar size={18} className="text-blue-500" /> Upcoming Checkups
            </h3>
          </div>
          <div className="space-y-3">
            {mockCheckups?.slice(0, 4).map(checkup => (
              <div key={checkup.id} className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-700/30 rounded-lg transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-600">
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-lg">
                  <Calendar size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{checkup.patientName}</p>
                  <p className="text-xs text-slate-500">{checkup.type} · {new Date(checkup.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-5 flex flex-col h-full"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <Bell size={18} className="text-purple-500" /> System Notifications
            </h3>
          </div>
          <div className="space-y-3">
            {mockNotifications.slice(0, 4).map(notification => (
              <div key={notification.id} className="flex flex-col p-3 hover:bg-slate-50 dark:hover:bg-slate-700/30 rounded-lg transition-colors">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{notification.title}</p>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">{notification.message}</p>
                <span className="text-[10px] text-slate-400 mt-2">{formatDate(notification.timestamp, 'relative')}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions Footer */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 rounded-xl p-6 text-white shadow-lg"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Quick Actions</h3>
            <p className="text-blue-100 text-sm">Frequently used tools and predictive models</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {[
              { label: 'Run AI Prediction', icon: <Brain size={14} />, to: '/predictions' },
              { label: 'Register Patient', icon: <Users size={14} />, to: '/patients' },
              { label: 'System Analytics', icon: <Activity size={14} />, to: '/analytics' },
            ].map(action => (
              <Link
                to={action.to}
                key={action.label}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium transition-all duration-200 border border-white/20 hover:border-white/40"
              >
                {action.icon}
                {action.label}
                <ArrowUpRight size={12} className="opacity-70" />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
