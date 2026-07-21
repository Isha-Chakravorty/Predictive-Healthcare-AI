import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const firstNames = ['James', 'Maria', 'David', 'Emily', 'Robert', 'Patricia', 'Michael', 'Linda', 'William', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];
const diseases = ['diabetes', 'heart_disease', 'stroke', 'kidney_disease', 'hypertension', 'cancer_risk'];
const riskLevels = ['low', 'moderate', 'high', 'critical'];
const doctors = ['Dr. Sarah Mitchell', 'Dr. James Chen', 'Dr. Lisa Park', 'Dr. Robert King'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const patients = [];
for (let i = 1; i <= 120; i++) {
  const gender = Math.random() > 0.5 ? 'male' : 'female';
  const age = getRandomInt(18, 90);
  const status = getRandomItem(['active', 'monitoring', 'critical', 'recovered']);
  patients.push({
    id: `pat_${i.toString().padStart(3, '0')}`,
    patientId: `HCA-2024-${i.toString().padStart(3, '0')}`,
    firstName: getRandomItem(firstNames),
    lastName: getRandomItem(lastNames),
    age,
    gender,
    bloodType: getRandomItem(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
    dateOfBirth: new Date(new Date().getFullYear() - age, getRandomInt(0, 11), getRandomInt(1, 28)).toISOString().split('T')[0],
    email: `patient${i}@email.com`,
    phone: `+1 (555) ${getRandomInt(100, 999)}-${getRandomInt(1000, 9999)}`,
    address: { street: `${getRandomInt(100, 9999)} Main St`, city: 'Metropolis', state: 'NY', zipCode: '10001', country: 'USA' },
    status,
    riskLevel: getRandomItem(riskLevels),
    assignedDoctor: getRandomItem(doctors),
    conditions: [getRandomItem(['Hypertension', 'Type 2 Diabetes', 'Asthma', 'None', 'Arthritis', 'High Cholesterol'])],
    medications: [getRandomItem(['Aspirin', 'Metformin', 'Lisinopril', 'None'])],
    lastVisit: new Date(Date.now() - getRandomInt(1, 30) * 86400000).toISOString().split('T')[0],
    nextAppointment: new Date(Date.now() + getRandomInt(1, 30) * 86400000).toISOString().split('T')[0],
    predictionCount: getRandomInt(1, 15),
    createdAt: new Date(Date.now() - getRandomInt(30, 365) * 86400000).toISOString(),
    updatedAt: new Date().toISOString(),
    vitalSigns: {
      heartRate: getRandomInt(60, 110),
      bloodPressureSystolic: getRandomInt(110, 160),
      bloodPressureDiastolic: getRandomInt(70, 100),
      temperature: 98 + Math.random() * 2,
      oxygenSaturation: getRandomInt(92, 100),
      respiratoryRate: getRandomInt(12, 22),
      weight: getRandomInt(120, 250),
      height: getRandomInt(60, 75),
      bmi: 20 + Math.random() * 15,
      glucoseLevel: getRandomInt(80, 200),
    },
  });
}

const predictions = [];
for (let i = 1; i <= 150; i++) {
  const patient = getRandomItem(patients);
  predictions.push({
    id: `pred_${i.toString().padStart(3, '0')}`,
    patientId: patient.id,
    patientName: `${patient.firstName} ${patient.lastName}`,
    diseaseType: getRandomItem(diseases),
    probability: Math.random(),
    riskLevel: getRandomItem(riskLevels),
    confidence: 0.7 + Math.random() * 0.28,
    status: 'completed',
    modelVersion: 'v2.4.0',
    createdAt: new Date(Date.now() - getRandomInt(0, 10) * 86400000).toISOString(),
    completedAt: new Date(Date.now() - getRandomInt(0, 10) * 86400000).toISOString(),
    requestedBy: patient.assignedDoctor,
    features: {
      age: patient.age,
      gender: patient.gender,
      bmi: patient.vitalSigns.bmi,
      bloodPressureSystolic: patient.vitalSigns.bloodPressureSystolic,
      bloodPressureDiastolic: patient.vitalSigns.bloodPressureDiastolic,
      glucoseLevel: patient.vitalSigns.glucoseLevel,
      cholesterol: getRandomInt(150, 280),
      heartRate: patient.vitalSigns.heartRate,
      smokingStatus: getRandomItem(['never', 'former', 'current']),
      familyHistory: Math.random() > 0.5,
      physicalActivity: getRandomItem(['sedentary', 'light', 'moderate', 'active']),
      alcoholConsumption: getRandomItem(['none', 'light', 'moderate', 'heavy']),
    },
    result: {
      diagnosis: 'Generated diagnosis based on AI analysis.',
      probability: Math.random(),
      confidence: 0.7 + Math.random() * 0.28,
      riskFactors: [],
      recommendations: ['Follow up in 30 days', 'Dietary modifications'],
      followUpRequired: Math.random() > 0.5,
      urgency: getRandomItem(['routine', 'soon', 'urgent']),
    },
  });
}

const checkups = [];
for (let i = 1; i <= 20; i++) {
  const patient = getRandomItem(patients);
  checkups.push({
    id: `chk_${i}`,
    patientName: `${patient.firstName} ${patient.lastName}`,
    patientId: patient.id,
    date: new Date(Date.now() + getRandomInt(1, 14) * 86400000).toISOString(),
    type: getRandomItem(['Routine Checkup', 'Follow-up', 'Cardiology Consult', 'Blood Work']),
    doctor: patient.assignedDoctor,
  });
}

const dashboardStats = {
  totalPatients: 3450,
  highRiskPatients: patients.filter(p => p.riskLevel === 'high' || p.riskLevel === 'critical').length * 15,
  diabetesPredictions: predictions.filter(p => p.diseaseType === 'diabetes').length * 10,
  heartDiseasePredictions: predictions.filter(p => p.diseaseType === 'heart_disease').length * 10,
  avgRiskScore: 42,
  monthlyPredictions: 1240,
  activePredictions: 47,
  modelAccuracy: 94.7,
  criticalAlerts: 12,
  predictionsToday: 45,
  newPatientsThisWeek: 89,
  avgConfidenceScore: 88.3,
  tasksCompleted: 156,
};

const output = `// Auto-generated mock data
import type { Patient, DiseasePrediction, DashboardStats } from '../types';

export const generatedPatients: Patient[] = ${JSON.stringify(patients, null, 2)};
export const generatedPredictions: DiseasePrediction[] = ${JSON.stringify(predictions, null, 2)};
export const generatedCheckups = ${JSON.stringify(checkups, null, 2)};
export const generatedDashboardStats: DashboardStats & Record<string, any> = ${JSON.stringify(dashboardStats, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src/mock/generated.ts'), output);
console.log('Mock data generated!');
