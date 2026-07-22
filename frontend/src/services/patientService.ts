import api from './api';

// ============================================================
// Types matching backend PatientResponse schema
// ============================================================
export interface BackendPatient {
  id: string;
  first_name: string;
  last_name: string;
  gender: string | null;
  age: number;
  date_of_birth: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  height: number | null;
  weight: number | null;
  blood_group: string | null;
  medical_history: string | null;
  allergies: string | null;
  smoking_status: string | null;
  alcohol_consumption: string | null;
  created_at: string;
  updated_at: string;
  created_by: string;
  is_deleted: boolean;
}

export interface PatientListResponse {
  items: BackendPatient[];
  total: number;
  skip: number;
  limit: number;
}

export interface PatientCreatePayload {
  first_name: string;
  last_name: string;
  age: number;
  gender?: string;
  date_of_birth?: string;
  phone?: string;
  email?: string;
  address?: string;
  height?: number;
  weight?: number;
  blood_group?: string;
  medical_history?: string;
  allergies?: string;
  smoking_status?: string;
  alcohol_consumption?: string;
}

// ============================================================
// Patient Service
// ============================================================
const patientService = {
  async getAll(params?: {
    skip?: number;
    limit?: number;
    search?: string;
  }): Promise<PatientListResponse> {
    const { data } = await api.get<PatientListResponse>('/patients', { params });
    return data;
  },

  async getById(id: string): Promise<BackendPatient> {
    const { data } = await api.get<BackendPatient>(`/patients/${id}`);
    return data;
  },

  async create(payload: PatientCreatePayload): Promise<BackendPatient> {
    const { data } = await api.post<BackendPatient>('/patients', payload);
    return data;
  },

  async update(id: string, payload: Partial<PatientCreatePayload>): Promise<BackendPatient> {
    const { data } = await api.put<BackendPatient>(`/patients/${id}`, payload);
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/patients/${id}`);
  },

  async getPatientPredictions(id: string, params?: { skip?: number; limit?: number }) {
    const { data } = await api.get(`/patients/${id}/predictions`, { params });
    return data;
  },
};

export default patientService;
