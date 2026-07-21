import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Users, Plus, Filter, Download } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SearchBar } from '../components/ui/SearchBar';
import { Table } from '../components/ui/Table';
import { Pagination } from '../components/ui/Pagination';
import { RiskBadge, StatusBadge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { Select } from '../components/ui/Input';
import { patientService } from '../services/mockService';
import { useToast } from '../context/ToastContext';
import type { Patient, Column } from '../types';
import { formatDate } from '../utils';
import { DISEASE_LABELS } from '../constants';

export function PatientsPage() {
  const { success } = useToast();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const load = useCallback(async () => {
    setIsLoading(true);
    const res = await patientService.getAll({ page, pageSize, search, status: statusFilter });
    setPatients(res.data);
    setTotal(res.pagination.total);
    setIsLoading(false);
  }, [page, pageSize, search, statusFilter]);

  useEffect(() => {
    const timer = setTimeout(load, search ? 300 : 0);
    return () => clearTimeout(timer);
  }, [load, search]);

  const handleRowClick = (patient: Patient) => {
    setSelectedPatient(patient);
    setShowDetail(true);
  };

  const columns: Column<Patient>[] = [
    {
      key: 'patientId',
      title: 'Patient ID',
      sortable: true,
      render: (_, r) => (
        <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
          {r.patientId}
        </span>
      ),
    },
    {
      key: 'firstName',
      title: 'Patient',
      sortable: true,
      render: (_, r) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-xs font-bold shrink-0">
            {r.firstName[0]}{r.lastName[0]}
          </div>
          <div>
            <p className="font-medium text-slate-800 dark:text-slate-100 text-sm">
              {r.firstName} {r.lastName}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {r.age}y · {r.gender}
            </p>
          </div>
        </div>
      ),
    },
    {
      key: 'status',
      title: 'Status',
      render: (val) => <StatusBadge status={String(val)} />,
    },
    {
      key: 'riskLevel',
      title: 'Risk',
      render: (val) => <RiskBadge level={val as 'low' | 'moderate' | 'high' | 'critical'} />,
    },
    {
      key: 'conditions',
      title: 'Conditions',
      render: (val) => {
        const conditions = val as string[];
        return (
          <span className="text-xs text-slate-600 dark:text-slate-400">
            {conditions.slice(0, 2).join(', ')}
            {conditions.length > 2 && <span className="text-slate-400"> +{conditions.length - 2}</span>}
          </span>
        );
      },
    },
    {
      key: 'assignedDoctor',
      title: 'Physician',
      render: (val) => <span className="text-sm text-slate-600 dark:text-slate-400 truncate">{String(val)}</span>,
    },
    {
      key: 'lastVisit',
      title: 'Last Visit',
      sortable: true,
      render: (val) => (
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {formatDate(String(val))}
        </span>
      ),
    },
    {
      key: 'predictionCount',
      title: 'Predictions',
      align: 'center',
      render: (val) => (
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{String(val)}</span>
      ),
    },
  ];

  return (
    <div className="space-y-5 max-w-[1400px]">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <Users size={24} className="text-blue-600 dark:text-blue-400" />
            Patients
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
            Manage and monitor patient records
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" leftIcon={<Download size={14} />}
            onClick={() => success('Export started', 'Patient data export is being prepared.')}>
            Export
          </Button>
          <Button variant="primary" size="sm" leftIcon={<Plus size={14} />}
            onClick={() => success('Coming soon', 'Patient registration form is in development.')}>
            Add Patient
          </Button>
        </div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <SearchBar
            value={search}
            onChange={val => { setSearch(val); setPage(1); }}
            placeholder="Search by name, ID, or condition..."
            className="flex-1 min-w-48"
          />
          <Select
            options={[
              { value: 'all',        label: 'All Status' },
              { value: 'active',     label: 'Active' },
              { value: 'critical',   label: 'Critical' },
              { value: 'monitoring', label: 'Monitoring' },
              { value: 'recovered',  label: 'Recovered' },
              { value: 'inactive',   label: 'Inactive' },
            ]}
            value={statusFilter}
            onChange={e => { setStatusFilter(e.target.value); setPage(1); }}
            containerClassName="w-40"
          />
          <Button variant="outline" size="md" leftIcon={<Filter size={14} />}>
            More Filters
          </Button>
          <div className="ml-auto shrink-0">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-200">{total}</span> patients
            </span>
          </div>
        </div>
      </motion.div>

      {/* Table */}
      <Table<Patient>
        columns={columns}
        data={patients}
        isLoading={isLoading}
        onRowClick={handleRowClick}
        emptyMessage="No patients found"
        emptyIcon={<Users size={40} />}
      />

      {/* Pagination */}
      {!isLoading && total > 0 && (
        <Pagination
          page={page}
          pageSize={pageSize}
          total={total}
          onPageChange={setPage}
          onPageSizeChange={pg => { setPageSize(pg); setPage(1); }}
        />
      )}

      {/* Patient Detail Modal */}
      <Modal
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
        title={selectedPatient ? `${selectedPatient.firstName} ${selectedPatient.lastName}` : ''}
        subtitle={selectedPatient?.patientId}
        size="lg"
      >
        {selectedPatient && <PatientDetailContent patient={selectedPatient} />}
      </Modal>
    </div>
  );
}

function PatientDetailContent({ patient }: { patient: Patient }) {
  const vitals = patient.vitalSigns;

  return (
    <div className="space-y-5">
      {/* Status row */}
      <div className="flex items-center gap-3 flex-wrap">
        <StatusBadge status={patient.status} size="lg" />
        <RiskBadge level={patient.riskLevel} size="lg" />
        <span className="text-sm text-slate-500 dark:text-slate-400">
          Blood Type: <strong className="text-slate-700 dark:text-slate-200">{patient.bloodType}</strong>
        </span>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          DOB: <strong className="text-slate-700 dark:text-slate-200">{formatDate(patient.dateOfBirth)}</strong>
        </span>
      </div>

      {/* Vitals grid */}
      <div>
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Vital Signs</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: 'Heart Rate',    value: `${vitals.heartRate} bpm`,              normal: vitals.heartRate >= 60 && vitals.heartRate <= 100 },
            { label: 'Blood Pressure', value: `${vitals.bloodPressureSystolic}/${vitals.bloodPressureDiastolic}`, normal: vitals.bloodPressureSystolic < 130 },
            { label: 'Temperature',   value: `${vitals.temperature}°F`,              normal: vitals.temperature <= 99.5 },
            { label: 'SpO2',          value: `${vitals.oxygenSaturation}%`,          normal: vitals.oxygenSaturation >= 95 },
            { label: 'Glucose',       value: `${vitals.glucoseLevel} mg/dL`,         normal: vitals.glucoseLevel < 126 },
            { label: 'BMI',           value: vitals.bmi.toFixed(1),                  normal: vitals.bmi < 30 },
          ].map(v => (
            <div key={v.label} className={`p-3 rounded-lg border ${v.normal ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20' : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'}`}>
              <p className="text-xs text-slate-500 dark:text-slate-400">{v.label}</p>
              <p className={`font-semibold text-sm mt-0.5 ${v.normal ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>{v.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conditions & Medications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Conditions</h4>
          <div className="flex flex-wrap gap-1.5">
            {patient.conditions.map(c => (
              <span key={c} className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Medications</h4>
          <div className="flex flex-wrap gap-1.5">
            {patient.medications.length > 0
              ? patient.medications.map(m => (
                  <span key={m} className="px-2.5 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium">
                    {m}
                  </span>
                ))
              : <span className="text-xs text-slate-400">None reported</span>}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div><span className="text-slate-500 dark:text-slate-400">Physician: </span><span className="font-medium text-slate-700 dark:text-slate-200">{patient.assignedDoctor}</span></div>
        <div><span className="text-slate-500 dark:text-slate-400">Last Visit: </span><span className="font-medium text-slate-700 dark:text-slate-200">{formatDate(patient.lastVisit)}</span></div>
        <div><span className="text-slate-500 dark:text-slate-400">Next Appt: </span><span className="font-medium text-slate-700 dark:text-slate-200">{patient.nextAppointment ? formatDate(patient.nextAppointment) : 'Not scheduled'}</span></div>
        <div><span className="text-slate-500 dark:text-slate-400">Predictions: </span><span className="font-medium text-slate-700 dark:text-slate-200">{patient.predictionCount}</span></div>
      </div>
    </div>
  );
}
