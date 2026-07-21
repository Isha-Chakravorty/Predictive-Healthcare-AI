import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Edit3, Trash2, Calendar, Phone, Mail, MapPin, Activity, 
  HeartPulse, FileText, Clock, AlertTriangle, Syringe, Pill, TrendingUp, ShieldAlert
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge, RiskBadge, StatusBadge } from '../components/ui/Badge';
import { useToast } from '../context/ToastContext';
import { mockPatients } from '../mock';
import type { Patient } from '../types';
import { formatDate } from '../utils';
import { Line, Doughnut } from 'react-chartjs-2';
import { CHART_COLORS } from '../constants';

export function PatientProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { success, error } = useToast();
  const [activeTab, setActiveTab] = useState<'overview' | 'medical' | 'predictions'>('overview');

  const patient = React.useMemo(() => mockPatients.find(p => p.id === id) || null, [id]);

  useEffect(() => {
    if (!patient) {
      error('Not Found', 'Patient record could not be found.');
    }
  }, [patient, error]);

  if (!patient) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-slate-500">Loading patient record...</p>
        </div>
      </div>
    );
  }

  // Chart configs
  const vitalsChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, border: { display: false } },
      y: { grid: { color: 'rgba(100,116,139,0.1)' }, border: { display: false } },
    },
  };

  const bpData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Systolic',
        data: [135, 138, 142, 130, 128, patient.vitalSigns.bloodPressureSystolic],
        borderColor: CHART_COLORS.danger,
        tension: 0.4,
      },
      {
        label: 'Diastolic',
        data: [85, 88, 90, 82, 80, patient.vitalSigns.bloodPressureDiastolic],
        borderColor: CHART_COLORS.primary,
        tension: 0.4,
      }
    ]
  };

  const healthScoreData = {
    labels: ['Health Score', 'Remaining'],
    datasets: [{
      data: [patient.healthScore || 85, 100 - (patient.healthScore || 85)],
      backgroundColor: [CHART_COLORS.success, '#e2e8f0'],
      borderWidth: 0,
      cutout: '75%',
    }]
  };

  return (
    <div className="space-y-6 max-w-[1400px]">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link to="/patients" className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-blue-600 transition-colors shadow-sm">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                {patient.firstName} {patient.lastName}
              </h1>
              <StatusBadge status={patient.status} />
              <RiskBadge level={patient.riskLevel as any} />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5 font-mono">
              ID: {patient.patientId}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button variant="outline" leftIcon={<Edit3 size={16} />} onClick={() => navigate(`/patients/${patient.id}/edit`)} className="flex-1 sm:flex-none justify-center">Edit</Button>
          <Button variant="danger" leftIcon={<Trash2 size={16} />} onClick={() => success('Delete Initiated', 'This requires admin confirmation.')} className="flex-1 sm:flex-none justify-center">Delete</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar - Profile & Contact */}
        <div className="lg:col-span-3 space-y-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <div className="px-5 pb-5 relative">
              <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-full border-4 border-white dark:border-slate-800 shadow-md flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400 -mt-10 mx-auto mb-3">
                {patient.firstName[0]}{patient.lastName[0]}
              </div>
              <div className="text-center mb-6">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white">{patient.age} years old</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 capitalize">{patient.gender} • {patient.bloodType}</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-slate-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300">{patient.phone}</p>
                    <p className="text-xs text-slate-500">Mobile</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-slate-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300 truncate w-48">{patient.email}</p>
                    <p className="text-xs text-slate-500">Email</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-slate-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-700 dark:text-slate-300">{patient.address.street}</p>
                    <p className="text-xs text-slate-500">{patient.address.city}, {patient.address.state} {patient.address.zipCode}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-5">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Activity size={16} className="text-blue-500" /> Current Conditions
            </h3>
            <div className="flex flex-wrap gap-2">
              {patient.conditions.map(c => (
                <Badge key={c} variant="warning">{c}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-5">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Pill size={16} className="text-purple-500" /> Active Medications
            </h3>
            <ul className="space-y-3">
              {patient.medications.map(m => (
                <li key={m} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  {m}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Main Content */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-700">
            {['overview', 'medical', 'predictions'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors capitalize ${
                  activeTab === tab 
                    ? 'border-blue-600 text-blue-600 dark:text-blue-400' 
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              
              {/* Quick Vitals Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Heart Rate', value: `${patient.vitalSigns.heartRate} bpm`, icon: HeartPulse, color: 'text-red-500' },
                  { label: 'Blood Pressure', value: `${patient.vitalSigns.bloodPressureSystolic}/${patient.vitalSigns.bloodPressureDiastolic}`, icon: Activity, color: 'text-blue-500' },
                  { label: 'Glucose', value: `${patient.vitalSigns.glucoseLevel} mg/dL`, icon: Syringe, color: 'text-orange-500' },
                  { label: 'BMI', value: patient.vitalSigns.bmi.toFixed(1), icon: TrendingUp, color: 'text-green-500' },
                ].map(vital => (
                  <div key={vital.label} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-sm flex items-center gap-4">
                    <div className={`p-3 bg-slate-50 dark:bg-slate-900 rounded-lg ${vital.color}`}>
                      <vital.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{vital.label}</p>
                      <p className="text-lg font-bold text-slate-800 dark:text-white">{vital.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Health Score */}
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 flex flex-col items-center justify-center text-center">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4 w-full text-left">Overall Health Score</h3>
                  <div className="relative w-40 h-40">
                    <Doughnut data={healthScoreData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } } }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-slate-800 dark:text-white">{patient.healthScore || 85}</span>
                      <span className="text-xs text-slate-500">/ 100</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">Based on recent vitals, lab reports, and AI risk analysis.</p>
                </div>

                {/* BP Trend */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">Blood Pressure Trend</h3>
                  <div className="h-[220px]">
                    <Line data={bpData} options={vitalsChartOptions} />
                  </div>
                </div>
              </div>
              
              {/* Timeline & Notes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <FileText size={16} /> Recent Doctor Notes
                  </h3>
                  <div className="space-y-4">
                    {patient.doctorNotes?.map(note => (
                      <div key={note.id} className="border-l-2 border-blue-500 pl-4 py-1">
                        <p className="text-xs text-slate-500 mb-1">{formatDate(note.date)} • {note.doctorName}</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">{note.note}</p>
                      </div>
                    )) || <p className="text-sm text-slate-500">No recent notes.</p>}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <Calendar size={16} /> Upcoming Appointments
                  </h3>
                  <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/50">
                    <div className="bg-white dark:bg-slate-800 p-2 rounded shadow-sm text-center min-w-[3rem]">
                      <span className="block text-xs font-bold text-red-500 uppercase">
                        {new Date(patient.nextAppointment || '').toLocaleString('default', { month: 'short' })}
                      </span>
                      <span className="block text-lg font-bold text-slate-800 dark:text-white">
                        {new Date(patient.nextAppointment || '').getDate()}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-100">Follow-up Checkup</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">with {patient.assignedDoctor}</p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          )}

          {/* Medical Tab Placeholder */}
          {activeTab === 'medical' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">Medical & Family History</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 border-b border-slate-100 dark:border-slate-700 pb-2">Past Surgeries</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      {patient.medicalHistory?.pastSurgeries.length ? patient.medicalHistory.pastSurgeries.map(s => <li key={s}>{s}</li>) : <li>None reported</li>}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 border-b border-slate-100 dark:border-slate-700 pb-2">Family History</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      {patient.familyHistory?.length ? patient.familyHistory.map(s => <li key={s}>{s}</li>) : <li>None reported</li>}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">Recent Lab Reports</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 dark:bg-slate-900/50">
                      <tr>
                        <th className="px-4 py-2">Test Name</th>
                        <th className="px-4 py-2">Result</th>
                        <th className="px-4 py-2">Reference Range</th>
                        <th className="px-4 py-2">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {patient.labReports?.map(lab => (
                        <tr key={lab.id}>
                          <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{lab.testName}</td>
                          <td className="px-4 py-3">
                            <span className={lab.status === 'abnormal' ? 'text-red-500 font-bold' : 'text-slate-600 dark:text-slate-400'}>
                              {lab.result} {lab.unit}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-slate-500">{lab.referenceRange}</td>
                          <td className="px-4 py-3 text-slate-500">{formatDate(lab.date)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Predictions Tab Placeholder */}
          {activeTab === 'predictions' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 text-center py-12 flex flex-col items-center">
                <ShieldAlert size={48} className="text-blue-500 mb-4 opacity-50" />
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">AI Prediction History</h3>
                <p className="text-sm text-slate-500 mt-2 max-w-md">
                  View the detailed history of predictive models run against this patient's health data.
                </p>
                <Button className="mt-6" onClick={() => navigate(`/prediction?patientId=${patient.id}`)}>
                  Run New Prediction
                </Button>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
