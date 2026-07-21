import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const firstNames = ['James', 'Maria', 'David', 'Emily', 'Robert', 'Patricia', 'Michael', 'Linda', 'William', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy', 'Daniel', 'Lisa', 'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark', 'Sandra', 'Donald', 'Ashley'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson'];
const diseases = ['diabetes', 'heart_disease', 'stroke', 'kidney_disease', 'hypertension', 'cancer_risk', 'pneumonia', 'alzheimers', 'liver_disease'];
const riskLevels = ['low', 'moderate', 'high', 'critical'];
const doctors = ['Dr. Sarah Mitchell', 'Dr. James Chen', 'Dr. Lisa Park', 'Dr. Robert King', 'Dr. Emily Carter', 'Dr. David Foster'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const patients = [];
for (let i = 1; i <= 300; i++) {
  const gender = Math.random() > 0.5 ? 'male' : 'female';
  const age = getRandomInt(18, 90);
  const status = getRandomItem(['active', 'monitoring', 'critical', 'recovered', 'inactive']);
  
  // Generating comprehensive mock data for patient profile
  const labReports = [
    { id: `lab_${getRandomInt(100, 999)}`, testName: 'HbA1c', date: new Date(Date.now() - getRandomInt(1, 60) * 86400000).toISOString().split('T')[0], result: (5 + Math.random() * 3).toFixed(1), status: Math.random() > 0.8 ? 'abnormal' : 'normal', unit: '%', referenceRange: '< 5.7%' },
    { id: `lab_${getRandomInt(100, 999)}`, testName: 'Total Cholesterol', date: new Date(Date.now() - getRandomInt(1, 60) * 86400000).toISOString().split('T')[0], result: getRandomInt(150, 260).toString(), status: Math.random() > 0.7 ? 'abnormal' : 'normal', unit: 'mg/dL', referenceRange: '< 200 mg/dL' },
    { id: `lab_${getRandomInt(100, 999)}`, testName: 'Vitamin D', date: new Date(Date.now() - getRandomInt(1, 90) * 86400000).toISOString().split('T')[0], result: getRandomInt(20, 60).toString(), status: Math.random() > 0.85 ? 'abnormal' : 'normal', unit: 'ng/mL', referenceRange: '20-50 ng/mL' }
  ];

  const lifestyle = {
    smokingStatus: getRandomItem(['never', 'former', 'current']),
    alcoholConsumption: getRandomItem(['none', 'light', 'moderate', 'heavy']),
    physicalActivity: getRandomItem(['sedentary', 'light', 'moderate', 'active']),
    diet: getRandomItem(['Balanced', 'Vegetarian', 'Vegan', 'Keto', 'High Sodium', 'Low Carb']),
  };

  const medicalHistory = {
    pastSurgeries: Math.random() > 0.7 ? [getRandomItem(['Appendectomy', 'Gallbladder removal', 'Knee replacement', 'Cataract surgery'])] : [],
    chronicDiseases: Math.random() > 0.5 ? [getRandomItem(['Asthma', 'Arthritis', 'Osteoporosis', 'Hypothyroidism'])] : [],
    allergies: Math.random() > 0.6 ? [getRandomItem(['Penicillin', 'Peanuts', 'Latex', 'Sulfa drugs'])] : [],
  };

  const familyHistory = Math.random() > 0.5 ? [getRandomItem(['Type 2 Diabetes (Father)', 'Heart Disease (Mother)', 'Breast Cancer (Mother)', 'Hypertension (Both Parents)'])] : [];

  const doctorNotes = [
    { id: `note_${getRandomInt(100, 999)}`, date: new Date(Date.now() - getRandomInt(1, 30) * 86400000).toISOString().split('T')[0], doctorName: getRandomItem(doctors), note: 'Patient is progressing well. Recommended continuing current medication regimen.' },
    { id: `note_${getRandomInt(100, 999)}`, date: new Date(Date.now() - getRandomInt(31, 90) * 86400000).toISOString().split('T')[0], doctorName: getRandomItem(doctors), note: 'Discussed lifestyle changes. Patient agreed to increase physical activity to 30 mins/day.' }
  ];

  const documents = [
    { id: `doc_${getRandomInt(100, 999)}`, title: 'Annual Physical Report', type: 'PDF', uploadDate: new Date(Date.now() - getRandomInt(10, 100) * 86400000).toISOString().split('T')[0], url: '#' },
    { id: `doc_${getRandomInt(100, 999)}`, title: 'ECG Results', type: 'IMAGE', uploadDate: new Date(Date.now() - getRandomInt(5, 50) * 86400000).toISOString().split('T')[0], url: '#' }
  ];

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
    labReports,
    lifestyle,
    medicalHistory,
    familyHistory,
    healthScore: getRandomInt(50, 98),
    doctorNotes,
    documents,
    notes: 'Standard patient record generated by HCA data synth.',
  });
}

const predictions = [];
for (let i = 1; i <= 350; i++) {
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
    createdAt: new Date(Date.now() - getRandomInt(0, 150) * 86400000).toISOString(),
    completedAt: new Date(Date.now() - getRandomInt(0, 150) * 86400000).toISOString(),
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
      smokingStatus: patient.lifestyle.smokingStatus,
      familyHistory: patient.familyHistory.length > 0,
      physicalActivity: patient.lifestyle.physicalActivity,
      alcoholConsumption: patient.lifestyle.alcoholConsumption,
    },
    result: {
      diagnosis: 'Generated diagnosis based on AI analysis.',
      probability: Math.random(),
      confidence: 0.7 + Math.random() * 0.28,
      riskFactors: [
        { factor: 'Age', impact: 'medium', value: `${patient.age}`, normalRange: '<60' },
        { factor: 'BMI', impact: patient.vitalSigns.bmi > 30 ? 'high' : 'low', value: patient.vitalSigns.bmi.toFixed(1), normalRange: '18.5-24.9' }
      ],
      recommendations: ['Follow up in 30 days', 'Dietary modifications', 'Increase physical activity'],
      followUpRequired: Math.random() > 0.5,
      urgency: getRandomItem(['routine', 'soon', 'urgent']),
    },
  });
}

const checkups = [];
for (let i = 1; i <= 50; i++) {
  const patient = getRandomItem(patients);
  checkups.push({
    id: `chk_${i.toString().padStart(3, '0')}`,
    patientId: patient.id,
    patientName: `${patient.firstName} ${patient.lastName}`,
    type: getRandomItem(['Routine Physical', 'Cardiology Follow-up', 'Endocrinology', 'Post-Op Check']),
    date: new Date(Date.now() + getRandomInt(1, 30) * 86400000).toISOString(),
    doctor: patient.assignedDoctor,
  });
}

const fileContent = `// THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY.
export const generatedPatients = ${JSON.stringify(patients, null, 2)};
export const generatedPredictions = ${JSON.stringify(predictions, null, 2)};
export const generatedCheckups = ${JSON.stringify(checkups, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src/mock/generated.ts'), fileContent, 'utf-8');
console.log('Successfully generated mock data for 300 patients, 350 predictions, and 50 checkups.');
