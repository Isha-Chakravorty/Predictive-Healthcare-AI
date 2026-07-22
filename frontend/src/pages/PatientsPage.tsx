import React, { useEffect, useState, useCallback } from 'react';
import { Users, Plus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { AdvancedTable, ColumnDef } from '../components/ui/AdvancedTable';
import { RiskBadge, StatusBadge } from '../components/ui/Badge';
import { useToast } from '../context/ToastContext';
import type { Patient } from '../types';
import { formatDate } from '../utils';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';
import { EmptyState } from '../components/ui/EmptyState';
import patientService from '../services/patientService';
import { adaptPatients } from '../services/adapters';

export function PatientsPage() {
  const { success, error: toastError } = useToast();
  const navigate = useNavigate();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const loadPatients = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await patientService.getAll({ skip: 0, limit: 100 });
      setPatients(adaptPatients(result.items));
      setTotal(result.total);
    } catch (err) {
      console.error('Failed to load patients:', err);
      toastError('Load Failed', 'Could not fetch patients from server.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPatients();
  }, [loadPatients]);

  const handleRowClick = (patient: Patient) => {
    navigate(ROUTES.PATIENT_DETAIL.replace(':id', patient.id));
  };

  const handleBulkDelete = async (selected: Patient[]) => {
    try {
      await Promise.all(selected.map(p => patientService.delete(p.id)));
      success('Patients Deleted', `Successfully removed ${selected.length} records.`);
      loadPatients();
    } catch {
      toastError('Delete Failed', 'Could not delete selected patients.');
    }
  };

  const handleBulkExport = (selected: Patient[]) => {
    success('Export Started', `Preparing export for ${selected.length} records.`);
  };

  const columns: ColumnDef<Patient>[] = [
    {
      id: 'patientId',
      header: 'Patient ID',
      accessorKey: 'patientId',
      cell: (r) => (
        <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
          {r.patientId}
        </span>
      ),
    },
    {
      id: 'name',
      header: 'Patient Name',
      accessorKey: 'firstName',
      cell: (r) => (
        <div className="flex items-center gap-3 w-48">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-xs font-bold shrink-0">
            {r.firstName[0]}{r.lastName[0]}
          </div>
          <div className="truncate">
            <p className="font-medium text-slate-800 dark:text-slate-100 text-sm truncate">
              {r.firstName} {r.lastName}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {r.email}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'demographics',
      header: 'Demographics',
      accessorKey: 'age',
      cell: (r) => (
        <div className="text-xs text-slate-600 dark:text-slate-400">
          {r.age}y • {r.gender.charAt(0).toUpperCase() + r.gender.slice(1)} • {r.bloodType}
        </div>
      )
    },
    {
      id: 'status',
      header: 'Status',
      accessorKey: 'status',
      cell: (r) => <StatusBadge status={r.status} />,
    },
    {
      id: 'riskLevel',
      header: 'Risk',
      accessorKey: 'riskLevel',
      cell: (r) => <RiskBadge level={r.riskLevel as 'low' | 'moderate' | 'high' | 'critical'} />,
    },
    {
      id: 'conditions',
      header: 'Conditions',
      accessorKey: 'conditions',
      cell: (r) => {
        const conditions = r.conditions;
        return (
          <span className="text-xs text-slate-600 dark:text-slate-400">
            {conditions.slice(0, 2).join(', ')}
            {conditions.length > 2 && <span className="text-slate-400"> +{conditions.length - 2}</span>}
          </span>
        );
      },
    },
    {
      id: 'assignedDoctor',
      header: 'Physician',
      accessorKey: 'assignedDoctor',
      cell: (r) => <span className="text-sm text-slate-600 dark:text-slate-400 truncate w-32 block">{r.assignedDoctor}</span>,
    },
    {
      id: 'lastVisit',
      header: 'Last Visit',
      accessorKey: 'lastVisit',
      cell: (r) => (
        <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
          {formatDate(r.lastVisit, 'short')}
        </span>
      ),
    },
    {
      id: 'predictionCount',
      header: 'Predictions',
      accessorKey: 'predictionCount',
      cell: (r) => (
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{r.predictionCount}</span>
      ),
    },
  ];

  return (
    <div className="space-y-6 max-w-[1600px] h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <Users size={24} className="text-blue-600 dark:text-blue-400" />
            Patient Directory
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
            Manage, monitor, and analyze {patients.length} patient records.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="primary" 
            size="sm" 
            leftIcon={<Plus size={14} />}
            onClick={() => navigate(ROUTES.PATIENT_NEW)}
          >
            Add Patient
          </Button>
        </div>
      </div>

      {!isLoading && patients.length === 0 ? (
        <EmptyState
          icon={<Users size={32} />}
          title="No patients found"
          description="Get started by adding a new patient to your directory."
          action={
            <Button onClick={() => navigate(ROUTES.PATIENT_NEW)} leftIcon={<Plus size={16} />}>
              Add First Patient
            </Button>
          }
        />
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
          <AdvancedTable
            data={patients}
            columns={columns}
            onRowClick={handleRowClick}
            onBulkDelete={handleBulkDelete}
            onBulkExport={handleBulkExport}
            loading={isLoading}
          />
        </div>
      )}
    </div>
  );
}
