// Auto-generated mock data
import type { Patient, DiseasePrediction, DashboardStats } from '../types';

export const generatedPatients: Patient[] = [
  {
    "id": "pat_001",
    "patientId": "HCA-2024-001",
    "firstName": "Linda",
    "lastName": "Thomas",
    "age": 35,
    "gender": "male",
    "bloodType": "O-",
    "dateOfBirth": "1991-12-09",
    "email": "patient1@email.com",
    "phone": "+1 (555) 515-9638",
    "address": {
      "street": "5003 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-19",
    "nextAppointment": "2026-08-01",
    "predictionCount": 8,
    "createdAt": "2026-01-05T11:39:59.805Z",
    "updatedAt": "2026-07-21T11:39:59.805Z",
    "vitalSigns": {
      "heartRate": 78,
      "bloodPressureSystolic": 146,
      "bloodPressureDiastolic": 76,
      "temperature": 99.86769351397623,
      "oxygenSaturation": 93,
      "respiratoryRate": 18,
      "weight": 160,
      "height": 60,
      "bmi": 20.308953395319072,
      "glucoseLevel": 164
    }
  },
  {
    "id": "pat_002",
    "patientId": "HCA-2024-002",
    "firstName": "William",
    "lastName": "Martinez",
    "age": 35,
    "gender": "female",
    "bloodType": "B+",
    "dateOfBirth": "1991-10-10",
    "email": "patient2@email.com",
    "phone": "+1 (555) 369-4846",
    "address": {
      "street": "9609 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-18",
    "nextAppointment": "2026-07-22",
    "predictionCount": 14,
    "createdAt": "2026-03-02T11:39:59.805Z",
    "updatedAt": "2026-07-21T11:39:59.805Z",
    "vitalSigns": {
      "heartRate": 96,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 97,
      "temperature": 98.32357237392306,
      "oxygenSaturation": 92,
      "respiratoryRate": 12,
      "weight": 215,
      "height": 66,
      "bmi": 20.853870236640077,
      "glucoseLevel": 82
    }
  },
  {
    "id": "pat_003",
    "patientId": "HCA-2024-003",
    "firstName": "Jessica",
    "lastName": "Martinez",
    "age": 88,
    "gender": "male",
    "bloodType": "B+",
    "dateOfBirth": "1938-08-03",
    "email": "patient3@email.com",
    "phone": "+1 (555) 270-6683",
    "address": {
      "street": "5576 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-12",
    "nextAppointment": "2026-08-12",
    "predictionCount": 13,
    "createdAt": "2025-10-06T11:39:59.805Z",
    "updatedAt": "2026-07-21T11:39:59.805Z",
    "vitalSigns": {
      "heartRate": 90,
      "bloodPressureSystolic": 127,
      "bloodPressureDiastolic": 94,
      "temperature": 98.6087021494255,
      "oxygenSaturation": 99,
      "respiratoryRate": 18,
      "weight": 208,
      "height": 65,
      "bmi": 27.437562753675863,
      "glucoseLevel": 100
    }
  },
  {
    "id": "pat_004",
    "patientId": "HCA-2024-004",
    "firstName": "Maria",
    "lastName": "Lopez",
    "age": 48,
    "gender": "male",
    "bloodType": "O+",
    "dateOfBirth": "1978-07-16",
    "email": "patient4@email.com",
    "phone": "+1 (555) 699-2487",
    "address": {
      "street": "8773 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-06-21",
    "nextAppointment": "2026-08-09",
    "predictionCount": 12,
    "createdAt": "2025-09-29T11:39:59.805Z",
    "updatedAt": "2026-07-21T11:39:59.805Z",
    "vitalSigns": {
      "heartRate": 63,
      "bloodPressureSystolic": 125,
      "bloodPressureDiastolic": 76,
      "temperature": 98.40206367444618,
      "oxygenSaturation": 92,
      "respiratoryRate": 22,
      "weight": 124,
      "height": 60,
      "bmi": 31.958835940384766,
      "glucoseLevel": 95
    }
  },
  {
    "id": "pat_005",
    "patientId": "HCA-2024-005",
    "firstName": "Maria",
    "lastName": "Martinez",
    "age": 59,
    "gender": "male",
    "bloodType": "B+",
    "dateOfBirth": "1967-11-23",
    "email": "patient5@email.com",
    "phone": "+1 (555) 593-6792",
    "address": {
      "street": "4337 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-13",
    "nextAppointment": "2026-07-27",
    "predictionCount": 6,
    "createdAt": "2025-10-15T11:39:59.805Z",
    "updatedAt": "2026-07-21T11:39:59.805Z",
    "vitalSigns": {
      "heartRate": 72,
      "bloodPressureSystolic": 142,
      "bloodPressureDiastolic": 94,
      "temperature": 99.00693486526924,
      "oxygenSaturation": 94,
      "respiratoryRate": 15,
      "weight": 148,
      "height": 64,
      "bmi": 28.84557287443712,
      "glucoseLevel": 155
    }
  },
  {
    "id": "pat_006",
    "patientId": "HCA-2024-006",
    "firstName": "Sarah",
    "lastName": "Hernandez",
    "age": 84,
    "gender": "female",
    "bloodType": "O-",
    "dateOfBirth": "1942-07-26",
    "email": "patient6@email.com",
    "phone": "+1 (555) 688-7303",
    "address": {
      "street": "4381 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "high",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-06-25",
    "nextAppointment": "2026-08-06",
    "predictionCount": 9,
    "createdAt": "2026-02-07T11:39:59.805Z",
    "updatedAt": "2026-07-21T11:39:59.805Z",
    "vitalSigns": {
      "heartRate": 83,
      "bloodPressureSystolic": 144,
      "bloodPressureDiastolic": 95,
      "temperature": 99.59824435905385,
      "oxygenSaturation": 94,
      "respiratoryRate": 13,
      "weight": 165,
      "height": 65,
      "bmi": 25.07487421489268,
      "glucoseLevel": 93
    }
  },
  {
    "id": "pat_007",
    "patientId": "HCA-2024-007",
    "firstName": "Susan",
    "lastName": "Jackson",
    "age": 33,
    "gender": "female",
    "bloodType": "B-",
    "dateOfBirth": "1993-02-23",
    "email": "patient7@email.com",
    "phone": "+1 (555) 826-6945",
    "address": {
      "street": "6372 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "None"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-03",
    "nextAppointment": "2026-07-25",
    "predictionCount": 15,
    "createdAt": "2026-01-04T11:39:59.805Z",
    "updatedAt": "2026-07-21T11:39:59.805Z",
    "vitalSigns": {
      "heartRate": 91,
      "bloodPressureSystolic": 128,
      "bloodPressureDiastolic": 71,
      "temperature": 98.55029465915308,
      "oxygenSaturation": 95,
      "respiratoryRate": 15,
      "weight": 216,
      "height": 68,
      "bmi": 29.842333013717568,
      "glucoseLevel": 178
    }
  },
  {
    "id": "pat_008",
    "patientId": "HCA-2024-008",
    "firstName": "Emily",
    "lastName": "Johnson",
    "age": 25,
    "gender": "male",
    "bloodType": "B-",
    "dateOfBirth": "2001-09-12",
    "email": "patient8@email.com",
    "phone": "+1 (555) 263-5148",
    "address": {
      "street": "6301 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "low",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-18",
    "nextAppointment": "2026-08-10",
    "predictionCount": 1,
    "createdAt": "2025-11-17T11:39:59.805Z",
    "updatedAt": "2026-07-21T11:39:59.805Z",
    "vitalSigns": {
      "heartRate": 101,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 83,
      "temperature": 99.51164844612931,
      "oxygenSaturation": 94,
      "respiratoryRate": 15,
      "weight": 187,
      "height": 68,
      "bmi": 23.520971877441465,
      "glucoseLevel": 84
    }
  },
  {
    "id": "pat_009",
    "patientId": "HCA-2024-009",
    "firstName": "Susan",
    "lastName": "Gonzalez",
    "age": 58,
    "gender": "female",
    "bloodType": "AB+",
    "dateOfBirth": "1968-07-12",
    "email": "patient9@email.com",
    "phone": "+1 (555) 531-7163",
    "address": {
      "street": "9891 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "None"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-05",
    "nextAppointment": "2026-08-19",
    "predictionCount": 9,
    "createdAt": "2025-08-28T11:39:59.805Z",
    "updatedAt": "2026-07-21T11:39:59.805Z",
    "vitalSigns": {
      "heartRate": 100,
      "bloodPressureSystolic": 131,
      "bloodPressureDiastolic": 74,
      "temperature": 98.33766231260513,
      "oxygenSaturation": 99,
      "respiratoryRate": 22,
      "weight": 201,
      "height": 72,
      "bmi": 20.264098103352236,
      "glucoseLevel": 141
    }
  },
  {
    "id": "pat_010",
    "patientId": "HCA-2024-010",
    "firstName": "Thomas",
    "lastName": "Jones",
    "age": 33,
    "gender": "female",
    "bloodType": "B+",
    "dateOfBirth": "1993-09-20",
    "email": "patient10@email.com",
    "phone": "+1 (555) 360-5722",
    "address": {
      "street": "4438 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-06",
    "nextAppointment": "2026-08-17",
    "predictionCount": 9,
    "createdAt": "2025-11-03T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 92,
      "bloodPressureSystolic": 139,
      "bloodPressureDiastolic": 70,
      "temperature": 98.84730601244537,
      "oxygenSaturation": 94,
      "respiratoryRate": 12,
      "weight": 182,
      "height": 62,
      "bmi": 27.58933520716766,
      "glucoseLevel": 127
    }
  },
  {
    "id": "pat_011",
    "patientId": "HCA-2024-011",
    "firstName": "Karen",
    "lastName": "Anderson",
    "age": 19,
    "gender": "male",
    "bloodType": "AB-",
    "dateOfBirth": "2007-02-09",
    "email": "patient11@email.com",
    "phone": "+1 (555) 508-4196",
    "address": {
      "street": "5645 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-11",
    "nextAppointment": "2026-08-17",
    "predictionCount": 11,
    "createdAt": "2025-11-24T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 66,
      "bloodPressureSystolic": 120,
      "bloodPressureDiastolic": 72,
      "temperature": 99.30986035187112,
      "oxygenSaturation": 94,
      "respiratoryRate": 19,
      "weight": 138,
      "height": 75,
      "bmi": 20.118560477538008,
      "glucoseLevel": 182
    }
  },
  {
    "id": "pat_012",
    "patientId": "HCA-2024-012",
    "firstName": "Susan",
    "lastName": "Wilson",
    "age": 73,
    "gender": "male",
    "bloodType": "AB+",
    "dateOfBirth": "1953-07-26",
    "email": "patient12@email.com",
    "phone": "+1 (555) 374-8257",
    "address": {
      "street": "2733 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "None"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-18",
    "nextAppointment": "2026-08-15",
    "predictionCount": 7,
    "createdAt": "2026-06-07T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 80,
      "bloodPressureSystolic": 134,
      "bloodPressureDiastolic": 81,
      "temperature": 98.2547278456554,
      "oxygenSaturation": 96,
      "respiratoryRate": 12,
      "weight": 166,
      "height": 70,
      "bmi": 32.28206070760761,
      "glucoseLevel": 141
    }
  },
  {
    "id": "pat_013",
    "patientId": "HCA-2024-013",
    "firstName": "Linda",
    "lastName": "Johnson",
    "age": 63,
    "gender": "female",
    "bloodType": "A+",
    "dateOfBirth": "1963-03-03",
    "email": "patient13@email.com",
    "phone": "+1 (555) 173-5071",
    "address": {
      "street": "8017 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-06-22",
    "nextAppointment": "2026-08-19",
    "predictionCount": 7,
    "createdAt": "2025-12-02T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 98,
      "bloodPressureSystolic": 138,
      "bloodPressureDiastolic": 96,
      "temperature": 98.03983052678697,
      "oxygenSaturation": 95,
      "respiratoryRate": 20,
      "weight": 182,
      "height": 61,
      "bmi": 22.30406280515861,
      "glucoseLevel": 162
    }
  },
  {
    "id": "pat_014",
    "patientId": "HCA-2024-014",
    "firstName": "Maria",
    "lastName": "Hernandez",
    "age": 79,
    "gender": "female",
    "bloodType": "AB-",
    "dateOfBirth": "1947-02-15",
    "email": "patient14@email.com",
    "phone": "+1 (555) 644-1629",
    "address": {
      "street": "298 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-14",
    "nextAppointment": "2026-07-29",
    "predictionCount": 2,
    "createdAt": "2026-04-11T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 66,
      "bloodPressureSystolic": 158,
      "bloodPressureDiastolic": 85,
      "temperature": 99.81715283021073,
      "oxygenSaturation": 93,
      "respiratoryRate": 17,
      "weight": 186,
      "height": 63,
      "bmi": 29.23350121078108,
      "glucoseLevel": 93
    }
  },
  {
    "id": "pat_015",
    "patientId": "HCA-2024-015",
    "firstName": "Michael",
    "lastName": "Rodriguez",
    "age": 47,
    "gender": "male",
    "bloodType": "A-",
    "dateOfBirth": "1979-12-22",
    "email": "patient15@email.com",
    "phone": "+1 (555) 818-3517",
    "address": {
      "street": "6210 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-02",
    "nextAppointment": "2026-08-14",
    "predictionCount": 8,
    "createdAt": "2026-04-09T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 67,
      "bloodPressureSystolic": 138,
      "bloodPressureDiastolic": 95,
      "temperature": 99.75730436867704,
      "oxygenSaturation": 94,
      "respiratoryRate": 12,
      "weight": 229,
      "height": 71,
      "bmi": 30.971679355635025,
      "glucoseLevel": 141
    }
  },
  {
    "id": "pat_016",
    "patientId": "HCA-2024-016",
    "firstName": "Maria",
    "lastName": "Williams",
    "age": 82,
    "gender": "female",
    "bloodType": "B-",
    "dateOfBirth": "1944-10-13",
    "email": "patient16@email.com",
    "phone": "+1 (555) 177-2281",
    "address": {
      "street": "8191 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "low",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-03",
    "nextAppointment": "2026-07-27",
    "predictionCount": 5,
    "createdAt": "2026-01-14T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 81,
      "bloodPressureSystolic": 124,
      "bloodPressureDiastolic": 93,
      "temperature": 98.02794050111709,
      "oxygenSaturation": 94,
      "respiratoryRate": 14,
      "weight": 242,
      "height": 62,
      "bmi": 27.729964249611662,
      "glucoseLevel": 166
    }
  },
  {
    "id": "pat_017",
    "patientId": "HCA-2024-017",
    "firstName": "William",
    "lastName": "Williams",
    "age": 30,
    "gender": "male",
    "bloodType": "O-",
    "dateOfBirth": "1996-11-11",
    "email": "patient17@email.com",
    "phone": "+1 (555) 331-5785",
    "address": {
      "street": "6284 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-09",
    "nextAppointment": "2026-08-04",
    "predictionCount": 5,
    "createdAt": "2026-05-27T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 99,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 94,
      "temperature": 99.05746089971508,
      "oxygenSaturation": 93,
      "respiratoryRate": 20,
      "weight": 172,
      "height": 61,
      "bmi": 22.58750972938378,
      "glucoseLevel": 105
    }
  },
  {
    "id": "pat_018",
    "patientId": "HCA-2024-018",
    "firstName": "William",
    "lastName": "Lopez",
    "age": 59,
    "gender": "male",
    "bloodType": "B+",
    "dateOfBirth": "1967-11-17",
    "email": "patient18@email.com",
    "phone": "+1 (555) 686-3388",
    "address": {
      "street": "7717 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-16",
    "nextAppointment": "2026-08-15",
    "predictionCount": 9,
    "createdAt": "2026-04-13T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 94,
      "bloodPressureSystolic": 133,
      "bloodPressureDiastolic": 92,
      "temperature": 99.57266831999617,
      "oxygenSaturation": 100,
      "respiratoryRate": 13,
      "weight": 195,
      "height": 63,
      "bmi": 27.55998346009058,
      "glucoseLevel": 105
    }
  },
  {
    "id": "pat_019",
    "patientId": "HCA-2024-019",
    "firstName": "Charles",
    "lastName": "Brown",
    "age": 83,
    "gender": "male",
    "bloodType": "B+",
    "dateOfBirth": "1943-08-27",
    "email": "patient19@email.com",
    "phone": "+1 (555) 855-6298",
    "address": {
      "street": "9994 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-15",
    "nextAppointment": "2026-08-07",
    "predictionCount": 2,
    "createdAt": "2025-09-03T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 107,
      "bloodPressureSystolic": 132,
      "bloodPressureDiastolic": 84,
      "temperature": 98.2024429105609,
      "oxygenSaturation": 97,
      "respiratoryRate": 16,
      "weight": 199,
      "height": 63,
      "bmi": 23.844050637984235,
      "glucoseLevel": 163
    }
  },
  {
    "id": "pat_020",
    "patientId": "HCA-2024-020",
    "firstName": "Richard",
    "lastName": "Brown",
    "age": 26,
    "gender": "female",
    "bloodType": "A+",
    "dateOfBirth": "2000-06-13",
    "email": "patient20@email.com",
    "phone": "+1 (555) 465-6700",
    "address": {
      "street": "7064 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-20",
    "nextAppointment": "2026-08-04",
    "predictionCount": 4,
    "createdAt": "2026-03-04T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 75,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 74,
      "temperature": 99.63286823646142,
      "oxygenSaturation": 99,
      "respiratoryRate": 17,
      "weight": 178,
      "height": 66,
      "bmi": 25.35176382858941,
      "glucoseLevel": 165
    }
  },
  {
    "id": "pat_021",
    "patientId": "HCA-2024-021",
    "firstName": "Barbara",
    "lastName": "Smith",
    "age": 52,
    "gender": "female",
    "bloodType": "O-",
    "dateOfBirth": "1974-04-10",
    "email": "patient21@email.com",
    "phone": "+1 (555) 880-5626",
    "address": {
      "street": "5950 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-06-26",
    "nextAppointment": "2026-08-09",
    "predictionCount": 2,
    "createdAt": "2025-10-15T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 98,
      "bloodPressureSystolic": 150,
      "bloodPressureDiastolic": 91,
      "temperature": 99.17999074685471,
      "oxygenSaturation": 97,
      "respiratoryRate": 12,
      "weight": 150,
      "height": 66,
      "bmi": 22.709316209614084,
      "glucoseLevel": 129
    }
  },
  {
    "id": "pat_022",
    "patientId": "HCA-2024-022",
    "firstName": "Maria",
    "lastName": "Gonzalez",
    "age": 43,
    "gender": "male",
    "bloodType": "AB-",
    "dateOfBirth": "1983-12-08",
    "email": "patient22@email.com",
    "phone": "+1 (555) 588-9415",
    "address": {
      "street": "3909 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-16",
    "nextAppointment": "2026-08-03",
    "predictionCount": 12,
    "createdAt": "2026-01-19T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 109,
      "bloodPressureSystolic": 110,
      "bloodPressureDiastolic": 78,
      "temperature": 98.35209713123848,
      "oxygenSaturation": 96,
      "respiratoryRate": 12,
      "weight": 208,
      "height": 70,
      "bmi": 29.72634018978691,
      "glucoseLevel": 126
    }
  },
  {
    "id": "pat_023",
    "patientId": "HCA-2024-023",
    "firstName": "Jessica",
    "lastName": "Davis",
    "age": 31,
    "gender": "male",
    "bloodType": "O-",
    "dateOfBirth": "1995-05-27",
    "email": "patient23@email.com",
    "phone": "+1 (555) 705-6025",
    "address": {
      "street": "6563 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-20",
    "nextAppointment": "2026-08-08",
    "predictionCount": 12,
    "createdAt": "2026-06-21T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 97,
      "bloodPressureSystolic": 134,
      "bloodPressureDiastolic": 76,
      "temperature": 98.3779698580543,
      "oxygenSaturation": 92,
      "respiratoryRate": 21,
      "weight": 170,
      "height": 71,
      "bmi": 26.757547875035115,
      "glucoseLevel": 177
    }
  },
  {
    "id": "pat_024",
    "patientId": "HCA-2024-024",
    "firstName": "Jessica",
    "lastName": "Davis",
    "age": 25,
    "gender": "female",
    "bloodType": "A+",
    "dateOfBirth": "2001-10-16",
    "email": "patient24@email.com",
    "phone": "+1 (555) 814-9445",
    "address": {
      "street": "7214 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-19",
    "nextAppointment": "2026-07-30",
    "predictionCount": 14,
    "createdAt": "2025-08-23T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 101,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 79,
      "temperature": 99.45802205919587,
      "oxygenSaturation": 92,
      "respiratoryRate": 16,
      "weight": 188,
      "height": 70,
      "bmi": 24.284611497273175,
      "glucoseLevel": 89
    }
  },
  {
    "id": "pat_025",
    "patientId": "HCA-2024-025",
    "firstName": "Joseph",
    "lastName": "Gonzalez",
    "age": 53,
    "gender": "female",
    "bloodType": "AB-",
    "dateOfBirth": "1973-10-03",
    "email": "patient25@email.com",
    "phone": "+1 (555) 818-6145",
    "address": {
      "street": "2444 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "None"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-06-26",
    "nextAppointment": "2026-08-03",
    "predictionCount": 9,
    "createdAt": "2025-08-30T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 96,
      "bloodPressureSystolic": 132,
      "bloodPressureDiastolic": 75,
      "temperature": 99.95955580462416,
      "oxygenSaturation": 99,
      "respiratoryRate": 21,
      "weight": 214,
      "height": 70,
      "bmi": 31.239290259746205,
      "glucoseLevel": 87
    }
  },
  {
    "id": "pat_026",
    "patientId": "HCA-2024-026",
    "firstName": "Susan",
    "lastName": "Brown",
    "age": 84,
    "gender": "male",
    "bloodType": "B+",
    "dateOfBirth": "1942-12-17",
    "email": "patient26@email.com",
    "phone": "+1 (555) 582-3890",
    "address": {
      "street": "5076 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-11",
    "nextAppointment": "2026-08-16",
    "predictionCount": 14,
    "createdAt": "2026-01-15T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 61,
      "bloodPressureSystolic": 126,
      "bloodPressureDiastolic": 86,
      "temperature": 99.5507793689848,
      "oxygenSaturation": 93,
      "respiratoryRate": 15,
      "weight": 176,
      "height": 60,
      "bmi": 23.118926920048164,
      "glucoseLevel": 109
    }
  },
  {
    "id": "pat_027",
    "patientId": "HCA-2024-027",
    "firstName": "Patricia",
    "lastName": "Wilson",
    "age": 79,
    "gender": "male",
    "bloodType": "AB+",
    "dateOfBirth": "1947-04-26",
    "email": "patient27@email.com",
    "phone": "+1 (555) 405-2605",
    "address": {
      "street": "5342 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-06-30",
    "nextAppointment": "2026-08-15",
    "predictionCount": 15,
    "createdAt": "2026-01-05T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 81,
      "bloodPressureSystolic": 155,
      "bloodPressureDiastolic": 83,
      "temperature": 99.87497818229588,
      "oxygenSaturation": 99,
      "respiratoryRate": 14,
      "weight": 134,
      "height": 65,
      "bmi": 34.46398689310688,
      "glucoseLevel": 115
    }
  },
  {
    "id": "pat_028",
    "patientId": "HCA-2024-028",
    "firstName": "Susan",
    "lastName": "Gonzalez",
    "age": 62,
    "gender": "male",
    "bloodType": "B-",
    "dateOfBirth": "1964-01-21",
    "email": "patient28@email.com",
    "phone": "+1 (555) 915-6307",
    "address": {
      "street": "1419 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-04",
    "nextAppointment": "2026-07-27",
    "predictionCount": 8,
    "createdAt": "2025-12-29T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 81,
      "bloodPressureSystolic": 130,
      "bloodPressureDiastolic": 95,
      "temperature": 99.62212764352061,
      "oxygenSaturation": 96,
      "respiratoryRate": 21,
      "weight": 207,
      "height": 66,
      "bmi": 21.088583150386732,
      "glucoseLevel": 184
    }
  },
  {
    "id": "pat_029",
    "patientId": "HCA-2024-029",
    "firstName": "David",
    "lastName": "Williams",
    "age": 37,
    "gender": "male",
    "bloodType": "O+",
    "dateOfBirth": "1989-07-13",
    "email": "patient29@email.com",
    "phone": "+1 (555) 374-3838",
    "address": {
      "street": "4115 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-16",
    "nextAppointment": "2026-07-22",
    "predictionCount": 7,
    "createdAt": "2025-11-14T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 94,
      "bloodPressureSystolic": 139,
      "bloodPressureDiastolic": 73,
      "temperature": 98.89905833597845,
      "oxygenSaturation": 99,
      "respiratoryRate": 18,
      "weight": 180,
      "height": 73,
      "bmi": 29.26513533689839,
      "glucoseLevel": 135
    }
  },
  {
    "id": "pat_030",
    "patientId": "HCA-2024-030",
    "firstName": "David",
    "lastName": "Brown",
    "age": 26,
    "gender": "female",
    "bloodType": "B-",
    "dateOfBirth": "2000-03-13",
    "email": "patient30@email.com",
    "phone": "+1 (555) 981-6273",
    "address": {
      "street": "6531 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-18",
    "nextAppointment": "2026-08-19",
    "predictionCount": 2,
    "createdAt": "2026-02-06T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 106,
      "bloodPressureSystolic": 141,
      "bloodPressureDiastolic": 99,
      "temperature": 99.63817349425692,
      "oxygenSaturation": 96,
      "respiratoryRate": 14,
      "weight": 158,
      "height": 66,
      "bmi": 33.03297155584001,
      "glucoseLevel": 138
    }
  },
  {
    "id": "pat_031",
    "patientId": "HCA-2024-031",
    "firstName": "Patricia",
    "lastName": "Moore",
    "age": 53,
    "gender": "male",
    "bloodType": "B+",
    "dateOfBirth": "1973-08-23",
    "email": "patient31@email.com",
    "phone": "+1 (555) 199-8430",
    "address": {
      "street": "9785 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-06-30",
    "nextAppointment": "2026-08-20",
    "predictionCount": 6,
    "createdAt": "2026-02-25T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 97,
      "bloodPressureSystolic": 123,
      "bloodPressureDiastolic": 73,
      "temperature": 98.08125432279239,
      "oxygenSaturation": 94,
      "respiratoryRate": 18,
      "weight": 176,
      "height": 75,
      "bmi": 25.44445977906087,
      "glucoseLevel": 183
    }
  },
  {
    "id": "pat_032",
    "patientId": "HCA-2024-032",
    "firstName": "Linda",
    "lastName": "Taylor",
    "age": 44,
    "gender": "female",
    "bloodType": "A+",
    "dateOfBirth": "1982-10-06",
    "email": "patient32@email.com",
    "phone": "+1 (555) 910-4426",
    "address": {
      "street": "6222 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-01",
    "nextAppointment": "2026-08-13",
    "predictionCount": 3,
    "createdAt": "2025-11-24T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 106,
      "bloodPressureSystolic": 143,
      "bloodPressureDiastolic": 73,
      "temperature": 99.44822455356704,
      "oxygenSaturation": 95,
      "respiratoryRate": 15,
      "weight": 225,
      "height": 69,
      "bmi": 21.24717763020645,
      "glucoseLevel": 152
    }
  },
  {
    "id": "pat_033",
    "patientId": "HCA-2024-033",
    "firstName": "Patricia",
    "lastName": "Jones",
    "age": 87,
    "gender": "male",
    "bloodType": "B+",
    "dateOfBirth": "1939-10-22",
    "email": "patient33@email.com",
    "phone": "+1 (555) 623-2506",
    "address": {
      "street": "4579 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-02",
    "nextAppointment": "2026-07-27",
    "predictionCount": 13,
    "createdAt": "2025-10-05T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 110,
      "bloodPressureSystolic": 122,
      "bloodPressureDiastolic": 89,
      "temperature": 99.92856244199349,
      "oxygenSaturation": 95,
      "respiratoryRate": 17,
      "weight": 233,
      "height": 60,
      "bmi": 21.10130931218486,
      "glucoseLevel": 163
    }
  },
  {
    "id": "pat_034",
    "patientId": "HCA-2024-034",
    "firstName": "Richard",
    "lastName": "Rodriguez",
    "age": 56,
    "gender": "female",
    "bloodType": "O-",
    "dateOfBirth": "1970-10-02",
    "email": "patient34@email.com",
    "phone": "+1 (555) 522-8609",
    "address": {
      "street": "6606 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-06-21",
    "nextAppointment": "2026-08-10",
    "predictionCount": 15,
    "createdAt": "2025-11-08T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 109,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 73,
      "temperature": 98.24931888203041,
      "oxygenSaturation": 96,
      "respiratoryRate": 20,
      "weight": 129,
      "height": 73,
      "bmi": 21.889029629483407,
      "glucoseLevel": 98
    }
  },
  {
    "id": "pat_035",
    "patientId": "HCA-2024-035",
    "firstName": "Linda",
    "lastName": "Miller",
    "age": 38,
    "gender": "male",
    "bloodType": "A+",
    "dateOfBirth": "1988-03-14",
    "email": "patient35@email.com",
    "phone": "+1 (555) 656-7088",
    "address": {
      "street": "2484 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-13",
    "nextAppointment": "2026-08-18",
    "predictionCount": 13,
    "createdAt": "2026-01-21T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 103,
      "bloodPressureSystolic": 160,
      "bloodPressureDiastolic": 77,
      "temperature": 99.20753225162736,
      "oxygenSaturation": 97,
      "respiratoryRate": 21,
      "weight": 148,
      "height": 75,
      "bmi": 31.732583070712913,
      "glucoseLevel": 124
    }
  },
  {
    "id": "pat_036",
    "patientId": "HCA-2024-036",
    "firstName": "Emily",
    "lastName": "Hernandez",
    "age": 79,
    "gender": "male",
    "bloodType": "AB+",
    "dateOfBirth": "1947-07-11",
    "email": "patient36@email.com",
    "phone": "+1 (555) 303-2938",
    "address": {
      "street": "1546 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-05",
    "nextAppointment": "2026-08-13",
    "predictionCount": 10,
    "createdAt": "2025-12-09T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 71,
      "bloodPressureSystolic": 116,
      "bloodPressureDiastolic": 84,
      "temperature": 99.30036705765399,
      "oxygenSaturation": 95,
      "respiratoryRate": 14,
      "weight": 198,
      "height": 72,
      "bmi": 23.801394835348052,
      "glucoseLevel": 189
    }
  },
  {
    "id": "pat_037",
    "patientId": "HCA-2024-037",
    "firstName": "Sarah",
    "lastName": "Martinez",
    "age": 54,
    "gender": "male",
    "bloodType": "B+",
    "dateOfBirth": "1972-02-21",
    "email": "patient37@email.com",
    "phone": "+1 (555) 857-9365",
    "address": {
      "street": "6120 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-06-26",
    "nextAppointment": "2026-07-25",
    "predictionCount": 3,
    "createdAt": "2026-05-23T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 79,
      "bloodPressureSystolic": 155,
      "bloodPressureDiastolic": 95,
      "temperature": 98.52305756883928,
      "oxygenSaturation": 97,
      "respiratoryRate": 20,
      "weight": 165,
      "height": 65,
      "bmi": 33.88731225898701,
      "glucoseLevel": 83
    }
  },
  {
    "id": "pat_038",
    "patientId": "HCA-2024-038",
    "firstName": "Christopher",
    "lastName": "Gonzalez",
    "age": 28,
    "gender": "female",
    "bloodType": "A+",
    "dateOfBirth": "1998-10-07",
    "email": "patient38@email.com",
    "phone": "+1 (555) 382-7422",
    "address": {
      "street": "8962 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-06-26",
    "nextAppointment": "2026-08-18",
    "predictionCount": 9,
    "createdAt": "2025-08-30T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 106,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 71,
      "temperature": 98.80546029853241,
      "oxygenSaturation": 96,
      "respiratoryRate": 18,
      "weight": 220,
      "height": 62,
      "bmi": 22.625730190322134,
      "glucoseLevel": 165
    }
  },
  {
    "id": "pat_039",
    "patientId": "HCA-2024-039",
    "firstName": "Linda",
    "lastName": "Anderson",
    "age": 31,
    "gender": "female",
    "bloodType": "A-",
    "dateOfBirth": "1995-12-07",
    "email": "patient39@email.com",
    "phone": "+1 (555) 414-3154",
    "address": {
      "street": "9167 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-01",
    "nextAppointment": "2026-08-03",
    "predictionCount": 9,
    "createdAt": "2026-04-22T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 104,
      "bloodPressureSystolic": 149,
      "bloodPressureDiastolic": 73,
      "temperature": 98.378583652676,
      "oxygenSaturation": 97,
      "respiratoryRate": 13,
      "weight": 227,
      "height": 66,
      "bmi": 28.862169059639854,
      "glucoseLevel": 88
    }
  },
  {
    "id": "pat_040",
    "patientId": "HCA-2024-040",
    "firstName": "Michael",
    "lastName": "Moore",
    "age": 26,
    "gender": "female",
    "bloodType": "A-",
    "dateOfBirth": "2000-10-23",
    "email": "patient40@email.com",
    "phone": "+1 (555) 360-9125",
    "address": {
      "street": "8682 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-11",
    "nextAppointment": "2026-08-11",
    "predictionCount": 2,
    "createdAt": "2025-07-31T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 70,
      "bloodPressureSystolic": 140,
      "bloodPressureDiastolic": 90,
      "temperature": 99.8973839017593,
      "oxygenSaturation": 96,
      "respiratoryRate": 14,
      "weight": 233,
      "height": 62,
      "bmi": 26.02902037308451,
      "glucoseLevel": 178
    }
  },
  {
    "id": "pat_041",
    "patientId": "HCA-2024-041",
    "firstName": "William",
    "lastName": "Lopez",
    "age": 74,
    "gender": "female",
    "bloodType": "B+",
    "dateOfBirth": "1952-03-18",
    "email": "patient41@email.com",
    "phone": "+1 (555) 104-9691",
    "address": {
      "street": "2744 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "None"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-08",
    "nextAppointment": "2026-08-12",
    "predictionCount": 12,
    "createdAt": "2026-06-18T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 63,
      "bloodPressureSystolic": 142,
      "bloodPressureDiastolic": 76,
      "temperature": 98.52172323030929,
      "oxygenSaturation": 92,
      "respiratoryRate": 15,
      "weight": 207,
      "height": 61,
      "bmi": 32.61595862235191,
      "glucoseLevel": 147
    }
  },
  {
    "id": "pat_042",
    "patientId": "HCA-2024-042",
    "firstName": "Barbara",
    "lastName": "Martinez",
    "age": 61,
    "gender": "male",
    "bloodType": "A+",
    "dateOfBirth": "1965-10-02",
    "email": "patient42@email.com",
    "phone": "+1 (555) 182-7047",
    "address": {
      "street": "5965 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-01",
    "nextAppointment": "2026-08-03",
    "predictionCount": 6,
    "createdAt": "2025-08-17T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 105,
      "bloodPressureSystolic": 110,
      "bloodPressureDiastolic": 71,
      "temperature": 99.72477050406525,
      "oxygenSaturation": 100,
      "respiratoryRate": 16,
      "weight": 178,
      "height": 64,
      "bmi": 26.37060488822273,
      "glucoseLevel": 120
    }
  },
  {
    "id": "pat_043",
    "patientId": "HCA-2024-043",
    "firstName": "Susan",
    "lastName": "Miller",
    "age": 72,
    "gender": "female",
    "bloodType": "AB-",
    "dateOfBirth": "1954-11-03",
    "email": "patient43@email.com",
    "phone": "+1 (555) 343-7714",
    "address": {
      "street": "4766 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-06",
    "nextAppointment": "2026-08-04",
    "predictionCount": 14,
    "createdAt": "2025-09-27T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 69,
      "bloodPressureSystolic": 114,
      "bloodPressureDiastolic": 72,
      "temperature": 99.68635078050285,
      "oxygenSaturation": 95,
      "respiratoryRate": 14,
      "weight": 186,
      "height": 67,
      "bmi": 20.279019446258708,
      "glucoseLevel": 99
    }
  },
  {
    "id": "pat_044",
    "patientId": "HCA-2024-044",
    "firstName": "Jessica",
    "lastName": "Johnson",
    "age": 60,
    "gender": "male",
    "bloodType": "O+",
    "dateOfBirth": "1966-10-11",
    "email": "patient44@email.com",
    "phone": "+1 (555) 422-2296",
    "address": {
      "street": "6257 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-12",
    "nextAppointment": "2026-08-08",
    "predictionCount": 8,
    "createdAt": "2026-05-11T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 106,
      "bloodPressureSystolic": 121,
      "bloodPressureDiastolic": 98,
      "temperature": 99.44246778989394,
      "oxygenSaturation": 94,
      "respiratoryRate": 22,
      "weight": 240,
      "height": 72,
      "bmi": 27.133913082084657,
      "glucoseLevel": 131
    }
  },
  {
    "id": "pat_045",
    "patientId": "HCA-2024-045",
    "firstName": "Thomas",
    "lastName": "Martinez",
    "age": 90,
    "gender": "male",
    "bloodType": "O-",
    "dateOfBirth": "1936-08-01",
    "email": "patient45@email.com",
    "phone": "+1 (555) 952-6936",
    "address": {
      "street": "6156 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-04",
    "nextAppointment": "2026-08-15",
    "predictionCount": 1,
    "createdAt": "2026-05-31T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 109,
      "bloodPressureSystolic": 132,
      "bloodPressureDiastolic": 97,
      "temperature": 99.7396655803194,
      "oxygenSaturation": 96,
      "respiratoryRate": 18,
      "weight": 230,
      "height": 62,
      "bmi": 24.42683343676941,
      "glucoseLevel": 163
    }
  },
  {
    "id": "pat_046",
    "patientId": "HCA-2024-046",
    "firstName": "Karen",
    "lastName": "Smith",
    "age": 77,
    "gender": "male",
    "bloodType": "O+",
    "dateOfBirth": "1949-10-23",
    "email": "patient46@email.com",
    "phone": "+1 (555) 270-8382",
    "address": {
      "street": "5219 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-18",
    "nextAppointment": "2026-07-29",
    "predictionCount": 3,
    "createdAt": "2025-10-10T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 72,
      "bloodPressureSystolic": 160,
      "bloodPressureDiastolic": 98,
      "temperature": 98.67285973491423,
      "oxygenSaturation": 100,
      "respiratoryRate": 19,
      "weight": 236,
      "height": 70,
      "bmi": 33.548203666892626,
      "glucoseLevel": 94
    }
  },
  {
    "id": "pat_047",
    "patientId": "HCA-2024-047",
    "firstName": "Christopher",
    "lastName": "Johnson",
    "age": 82,
    "gender": "male",
    "bloodType": "AB-",
    "dateOfBirth": "1944-01-01",
    "email": "patient47@email.com",
    "phone": "+1 (555) 316-2423",
    "address": {
      "street": "543 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "low",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-18",
    "nextAppointment": "2026-07-28",
    "predictionCount": 9,
    "createdAt": "2026-03-13T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 65,
      "bloodPressureSystolic": 153,
      "bloodPressureDiastolic": 90,
      "temperature": 98.8216097579891,
      "oxygenSaturation": 97,
      "respiratoryRate": 19,
      "weight": 166,
      "height": 67,
      "bmi": 26.948052058060213,
      "glucoseLevel": 194
    }
  },
  {
    "id": "pat_048",
    "patientId": "HCA-2024-048",
    "firstName": "Jessica",
    "lastName": "Jackson",
    "age": 67,
    "gender": "male",
    "bloodType": "B-",
    "dateOfBirth": "1959-02-22",
    "email": "patient48@email.com",
    "phone": "+1 (555) 223-2512",
    "address": {
      "street": "7879 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "high",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-06-22",
    "nextAppointment": "2026-07-22",
    "predictionCount": 12,
    "createdAt": "2026-01-14T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 60,
      "bloodPressureSystolic": 125,
      "bloodPressureDiastolic": 94,
      "temperature": 99.93432055427002,
      "oxygenSaturation": 98,
      "respiratoryRate": 20,
      "weight": 135,
      "height": 68,
      "bmi": 26.977829194382792,
      "glucoseLevel": 177
    }
  },
  {
    "id": "pat_049",
    "patientId": "HCA-2024-049",
    "firstName": "William",
    "lastName": "Smith",
    "age": 41,
    "gender": "male",
    "bloodType": "AB+",
    "dateOfBirth": "1985-08-09",
    "email": "patient49@email.com",
    "phone": "+1 (555) 139-6246",
    "address": {
      "street": "4789 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-05",
    "nextAppointment": "2026-07-31",
    "predictionCount": 13,
    "createdAt": "2026-01-01T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 78,
      "bloodPressureSystolic": 131,
      "bloodPressureDiastolic": 95,
      "temperature": 99.79111989673483,
      "oxygenSaturation": 100,
      "respiratoryRate": 15,
      "weight": 218,
      "height": 74,
      "bmi": 24.208665651373146,
      "glucoseLevel": 182
    }
  },
  {
    "id": "pat_050",
    "patientId": "HCA-2024-050",
    "firstName": "Thomas",
    "lastName": "Taylor",
    "age": 79,
    "gender": "male",
    "bloodType": "A+",
    "dateOfBirth": "1947-06-07",
    "email": "patient50@email.com",
    "phone": "+1 (555) 996-8432",
    "address": {
      "street": "144 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-06-26",
    "nextAppointment": "2026-08-07",
    "predictionCount": 1,
    "createdAt": "2026-01-10T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 95,
      "bloodPressureSystolic": 127,
      "bloodPressureDiastolic": 100,
      "temperature": 99.02277092049256,
      "oxygenSaturation": 94,
      "respiratoryRate": 12,
      "weight": 215,
      "height": 67,
      "bmi": 21.320690851867468,
      "glucoseLevel": 192
    }
  },
  {
    "id": "pat_051",
    "patientId": "HCA-2024-051",
    "firstName": "David",
    "lastName": "Anderson",
    "age": 37,
    "gender": "female",
    "bloodType": "AB+",
    "dateOfBirth": "1989-05-08",
    "email": "patient51@email.com",
    "phone": "+1 (555) 450-2150",
    "address": {
      "street": "9096 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "None"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-12",
    "nextAppointment": "2026-08-16",
    "predictionCount": 2,
    "createdAt": "2026-04-20T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 83,
      "bloodPressureSystolic": 131,
      "bloodPressureDiastolic": 93,
      "temperature": 98.91841214404896,
      "oxygenSaturation": 93,
      "respiratoryRate": 15,
      "weight": 126,
      "height": 74,
      "bmi": 34.51322035809847,
      "glucoseLevel": 181
    }
  },
  {
    "id": "pat_052",
    "patientId": "HCA-2024-052",
    "firstName": "Nancy",
    "lastName": "Wilson",
    "age": 19,
    "gender": "male",
    "bloodType": "O+",
    "dateOfBirth": "2007-01-12",
    "email": "patient52@email.com",
    "phone": "+1 (555) 372-3408",
    "address": {
      "street": "6880 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "low",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-06",
    "nextAppointment": "2026-07-25",
    "predictionCount": 10,
    "createdAt": "2026-01-03T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 74,
      "bloodPressureSystolic": 151,
      "bloodPressureDiastolic": 99,
      "temperature": 98.91911513684086,
      "oxygenSaturation": 99,
      "respiratoryRate": 18,
      "weight": 197,
      "height": 69,
      "bmi": 28.56918678398248,
      "glucoseLevel": 87
    }
  },
  {
    "id": "pat_053",
    "patientId": "HCA-2024-053",
    "firstName": "Robert",
    "lastName": "Miller",
    "age": 25,
    "gender": "male",
    "bloodType": "A-",
    "dateOfBirth": "2001-07-16",
    "email": "patient53@email.com",
    "phone": "+1 (555) 471-8042",
    "address": {
      "street": "5369 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-06-29",
    "nextAppointment": "2026-08-04",
    "predictionCount": 10,
    "createdAt": "2026-01-01T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 73,
      "bloodPressureSystolic": 143,
      "bloodPressureDiastolic": 82,
      "temperature": 98.91303580512445,
      "oxygenSaturation": 94,
      "respiratoryRate": 20,
      "weight": 174,
      "height": 66,
      "bmi": 23.329429977693163,
      "glucoseLevel": 135
    }
  },
  {
    "id": "pat_054",
    "patientId": "HCA-2024-054",
    "firstName": "Emily",
    "lastName": "Williams",
    "age": 63,
    "gender": "male",
    "bloodType": "AB-",
    "dateOfBirth": "1963-12-02",
    "email": "patient54@email.com",
    "phone": "+1 (555) 960-5812",
    "address": {
      "street": "9751 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "None"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-20",
    "nextAppointment": "2026-08-10",
    "predictionCount": 6,
    "createdAt": "2025-12-10T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 70,
      "bloodPressureSystolic": 140,
      "bloodPressureDiastolic": 77,
      "temperature": 98.92376037163864,
      "oxygenSaturation": 94,
      "respiratoryRate": 13,
      "weight": 182,
      "height": 68,
      "bmi": 30.461810100544312,
      "glucoseLevel": 114
    }
  },
  {
    "id": "pat_055",
    "patientId": "HCA-2024-055",
    "firstName": "Joseph",
    "lastName": "Lopez",
    "age": 30,
    "gender": "male",
    "bloodType": "B-",
    "dateOfBirth": "1996-12-26",
    "email": "patient55@email.com",
    "phone": "+1 (555) 642-9541",
    "address": {
      "street": "185 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-06-29",
    "nextAppointment": "2026-08-11",
    "predictionCount": 8,
    "createdAt": "2025-08-16T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 75,
      "bloodPressureSystolic": 156,
      "bloodPressureDiastolic": 99,
      "temperature": 98.85090814589539,
      "oxygenSaturation": 94,
      "respiratoryRate": 13,
      "weight": 131,
      "height": 66,
      "bmi": 20.639779176339406,
      "glucoseLevel": 177
    }
  },
  {
    "id": "pat_056",
    "patientId": "HCA-2024-056",
    "firstName": "Robert",
    "lastName": "Martin",
    "age": 84,
    "gender": "female",
    "bloodType": "B+",
    "dateOfBirth": "1942-07-17",
    "email": "patient56@email.com",
    "phone": "+1 (555) 234-9654",
    "address": {
      "street": "1389 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "None"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-08",
    "nextAppointment": "2026-08-20",
    "predictionCount": 3,
    "createdAt": "2025-08-10T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 74,
      "bloodPressureSystolic": 134,
      "bloodPressureDiastolic": 81,
      "temperature": 98.49722530800673,
      "oxygenSaturation": 97,
      "respiratoryRate": 12,
      "weight": 155,
      "height": 62,
      "bmi": 20.888868683546804,
      "glucoseLevel": 164
    }
  },
  {
    "id": "pat_057",
    "patientId": "HCA-2024-057",
    "firstName": "Maria",
    "lastName": "Wilson",
    "age": 55,
    "gender": "female",
    "bloodType": "A+",
    "dateOfBirth": "1971-11-07",
    "email": "patient57@email.com",
    "phone": "+1 (555) 642-4451",
    "address": {
      "street": "6275 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-06-24",
    "nextAppointment": "2026-08-01",
    "predictionCount": 1,
    "createdAt": "2025-08-24T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 66,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 86,
      "temperature": 99.46622241852783,
      "oxygenSaturation": 98,
      "respiratoryRate": 14,
      "weight": 207,
      "height": 73,
      "bmi": 24.483722263164267,
      "glucoseLevel": 185
    }
  },
  {
    "id": "pat_058",
    "patientId": "HCA-2024-058",
    "firstName": "William",
    "lastName": "Smith",
    "age": 86,
    "gender": "male",
    "bloodType": "B+",
    "dateOfBirth": "1940-06-27",
    "email": "patient58@email.com",
    "phone": "+1 (555) 833-6968",
    "address": {
      "street": "7327 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-15",
    "nextAppointment": "2026-08-03",
    "predictionCount": 12,
    "createdAt": "2025-08-13T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 81,
      "bloodPressureSystolic": 113,
      "bloodPressureDiastolic": 78,
      "temperature": 99.9260713193221,
      "oxygenSaturation": 97,
      "respiratoryRate": 14,
      "weight": 150,
      "height": 68,
      "bmi": 23.688031217380292,
      "glucoseLevel": 120
    }
  },
  {
    "id": "pat_059",
    "patientId": "HCA-2024-059",
    "firstName": "William",
    "lastName": "Wilson",
    "age": 41,
    "gender": "male",
    "bloodType": "A-",
    "dateOfBirth": "1985-03-10",
    "email": "patient59@email.com",
    "phone": "+1 (555) 123-9678",
    "address": {
      "street": "8884 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-05",
    "nextAppointment": "2026-07-28",
    "predictionCount": 7,
    "createdAt": "2026-06-06T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 100,
      "bloodPressureSystolic": 114,
      "bloodPressureDiastolic": 88,
      "temperature": 99.01428651841479,
      "oxygenSaturation": 100,
      "respiratoryRate": 20,
      "weight": 125,
      "height": 69,
      "bmi": 26.099182337854312,
      "glucoseLevel": 84
    }
  },
  {
    "id": "pat_060",
    "patientId": "HCA-2024-060",
    "firstName": "Michael",
    "lastName": "Taylor",
    "age": 60,
    "gender": "male",
    "bloodType": "AB-",
    "dateOfBirth": "1966-04-03",
    "email": "patient60@email.com",
    "phone": "+1 (555) 658-8970",
    "address": {
      "street": "6543 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-02",
    "nextAppointment": "2026-08-01",
    "predictionCount": 5,
    "createdAt": "2025-09-24T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 63,
      "bloodPressureSystolic": 132,
      "bloodPressureDiastolic": 85,
      "temperature": 98.25664381788201,
      "oxygenSaturation": 97,
      "respiratoryRate": 14,
      "weight": 242,
      "height": 72,
      "bmi": 23.05772555291893,
      "glucoseLevel": 163
    }
  },
  {
    "id": "pat_061",
    "patientId": "HCA-2024-061",
    "firstName": "William",
    "lastName": "Miller",
    "age": 57,
    "gender": "female",
    "bloodType": "B+",
    "dateOfBirth": "1969-04-08",
    "email": "patient61@email.com",
    "phone": "+1 (555) 584-6945",
    "address": {
      "street": "216 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-02",
    "nextAppointment": "2026-08-02",
    "predictionCount": 7,
    "createdAt": "2026-03-05T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 68,
      "bloodPressureSystolic": 157,
      "bloodPressureDiastolic": 70,
      "temperature": 99.14619719703325,
      "oxygenSaturation": 99,
      "respiratoryRate": 16,
      "weight": 126,
      "height": 65,
      "bmi": 27.709782433670718,
      "glucoseLevel": 123
    }
  },
  {
    "id": "pat_062",
    "patientId": "HCA-2024-062",
    "firstName": "Nancy",
    "lastName": "Jones",
    "age": 62,
    "gender": "female",
    "bloodType": "O-",
    "dateOfBirth": "1964-12-01",
    "email": "patient62@email.com",
    "phone": "+1 (555) 469-7989",
    "address": {
      "street": "4072 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-12",
    "nextAppointment": "2026-08-06",
    "predictionCount": 14,
    "createdAt": "2025-11-18T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 75,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 77,
      "temperature": 99.4763246269761,
      "oxygenSaturation": 92,
      "respiratoryRate": 19,
      "weight": 200,
      "height": 70,
      "bmi": 26.905647992532987,
      "glucoseLevel": 126
    }
  },
  {
    "id": "pat_063",
    "patientId": "HCA-2024-063",
    "firstName": "Sarah",
    "lastName": "Hernandez",
    "age": 63,
    "gender": "female",
    "bloodType": "O-",
    "dateOfBirth": "1963-10-25",
    "email": "patient63@email.com",
    "phone": "+1 (555) 496-9098",
    "address": {
      "street": "7872 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "None"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-03",
    "nextAppointment": "2026-08-18",
    "predictionCount": 13,
    "createdAt": "2026-04-19T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 108,
      "bloodPressureSystolic": 126,
      "bloodPressureDiastolic": 70,
      "temperature": 98.93601659090412,
      "oxygenSaturation": 92,
      "respiratoryRate": 19,
      "weight": 246,
      "height": 69,
      "bmi": 20.824095195629056,
      "glucoseLevel": 113
    }
  },
  {
    "id": "pat_064",
    "patientId": "HCA-2024-064",
    "firstName": "Richard",
    "lastName": "Williams",
    "age": 88,
    "gender": "male",
    "bloodType": "O+",
    "dateOfBirth": "1938-12-03",
    "email": "patient64@email.com",
    "phone": "+1 (555) 666-2277",
    "address": {
      "street": "7818 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-20",
    "nextAppointment": "2026-08-06",
    "predictionCount": 15,
    "createdAt": "2025-10-06T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 98,
      "bloodPressureSystolic": 153,
      "bloodPressureDiastolic": 73,
      "temperature": 98.3024756617903,
      "oxygenSaturation": 97,
      "respiratoryRate": 18,
      "weight": 234,
      "height": 64,
      "bmi": 33.327865290591035,
      "glucoseLevel": 90
    }
  },
  {
    "id": "pat_065",
    "patientId": "HCA-2024-065",
    "firstName": "Maria",
    "lastName": "Williams",
    "age": 31,
    "gender": "male",
    "bloodType": "B-",
    "dateOfBirth": "1995-03-28",
    "email": "patient65@email.com",
    "phone": "+1 (555) 952-8874",
    "address": {
      "street": "129 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-07",
    "nextAppointment": "2026-08-09",
    "predictionCount": 1,
    "createdAt": "2026-03-29T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 102,
      "bloodPressureSystolic": 156,
      "bloodPressureDiastolic": 91,
      "temperature": 99.37751816649623,
      "oxygenSaturation": 100,
      "respiratoryRate": 15,
      "weight": 174,
      "height": 67,
      "bmi": 30.510807634754194,
      "glucoseLevel": 130
    }
  },
  {
    "id": "pat_066",
    "patientId": "HCA-2024-066",
    "firstName": "Robert",
    "lastName": "Miller",
    "age": 81,
    "gender": "male",
    "bloodType": "A-",
    "dateOfBirth": "1945-05-17",
    "email": "patient66@email.com",
    "phone": "+1 (555) 542-5591",
    "address": {
      "street": "6419 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-08",
    "nextAppointment": "2026-08-12",
    "predictionCount": 10,
    "createdAt": "2026-03-30T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 68,
      "bloodPressureSystolic": 156,
      "bloodPressureDiastolic": 91,
      "temperature": 99.96805898792144,
      "oxygenSaturation": 92,
      "respiratoryRate": 19,
      "weight": 202,
      "height": 66,
      "bmi": 26.613407775311885,
      "glucoseLevel": 124
    }
  },
  {
    "id": "pat_067",
    "patientId": "HCA-2024-067",
    "firstName": "Michael",
    "lastName": "Williams",
    "age": 51,
    "gender": "male",
    "bloodType": "AB+",
    "dateOfBirth": "1975-04-10",
    "email": "patient67@email.com",
    "phone": "+1 (555) 676-7115",
    "address": {
      "street": "4988 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "None"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-02",
    "nextAppointment": "2026-08-06",
    "predictionCount": 2,
    "createdAt": "2025-11-05T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 87,
      "bloodPressureSystolic": 148,
      "bloodPressureDiastolic": 94,
      "temperature": 98.76069412398378,
      "oxygenSaturation": 99,
      "respiratoryRate": 18,
      "weight": 150,
      "height": 66,
      "bmi": 31.001219601100466,
      "glucoseLevel": 164
    }
  },
  {
    "id": "pat_068",
    "patientId": "HCA-2024-068",
    "firstName": "Jessica",
    "lastName": "Taylor",
    "age": 31,
    "gender": "female",
    "bloodType": "A+",
    "dateOfBirth": "1995-01-05",
    "email": "patient68@email.com",
    "phone": "+1 (555) 864-9112",
    "address": {
      "street": "9112 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "low",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-03",
    "nextAppointment": "2026-07-30",
    "predictionCount": 4,
    "createdAt": "2026-04-06T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 87,
      "bloodPressureSystolic": 143,
      "bloodPressureDiastolic": 78,
      "temperature": 98.66205733043996,
      "oxygenSaturation": 93,
      "respiratoryRate": 19,
      "weight": 238,
      "height": 64,
      "bmi": 34.737294382129015,
      "glucoseLevel": 159
    }
  },
  {
    "id": "pat_069",
    "patientId": "HCA-2024-069",
    "firstName": "Susan",
    "lastName": "Anderson",
    "age": 34,
    "gender": "female",
    "bloodType": "A-",
    "dateOfBirth": "1992-01-24",
    "email": "patient69@email.com",
    "phone": "+1 (555) 724-7367",
    "address": {
      "street": "600 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "None"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-06-21",
    "nextAppointment": "2026-07-26",
    "predictionCount": 14,
    "createdAt": "2025-08-17T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 80,
      "bloodPressureSystolic": 154,
      "bloodPressureDiastolic": 81,
      "temperature": 98.52218746843528,
      "oxygenSaturation": 100,
      "respiratoryRate": 22,
      "weight": 161,
      "height": 70,
      "bmi": 26.204950102217545,
      "glucoseLevel": 146
    }
  },
  {
    "id": "pat_070",
    "patientId": "HCA-2024-070",
    "firstName": "Charles",
    "lastName": "Smith",
    "age": 71,
    "gender": "female",
    "bloodType": "O+",
    "dateOfBirth": "1955-09-26",
    "email": "patient70@email.com",
    "phone": "+1 (555) 637-8313",
    "address": {
      "street": "5227 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-06-27",
    "nextAppointment": "2026-08-14",
    "predictionCount": 3,
    "createdAt": "2026-04-19T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 110,
      "bloodPressureSystolic": 158,
      "bloodPressureDiastolic": 78,
      "temperature": 98.89664477665472,
      "oxygenSaturation": 98,
      "respiratoryRate": 19,
      "weight": 198,
      "height": 73,
      "bmi": 27.54954532834407,
      "glucoseLevel": 196
    }
  },
  {
    "id": "pat_071",
    "patientId": "HCA-2024-071",
    "firstName": "Michael",
    "lastName": "Lopez",
    "age": 20,
    "gender": "male",
    "bloodType": "AB-",
    "dateOfBirth": "2006-06-24",
    "email": "patient71@email.com",
    "phone": "+1 (555) 754-4247",
    "address": {
      "street": "3124 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-08",
    "nextAppointment": "2026-07-31",
    "predictionCount": 7,
    "createdAt": "2026-02-09T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 62,
      "bloodPressureSystolic": 146,
      "bloodPressureDiastolic": 97,
      "temperature": 99.37655398868279,
      "oxygenSaturation": 98,
      "respiratoryRate": 13,
      "weight": 211,
      "height": 65,
      "bmi": 20.61825079527863,
      "glucoseLevel": 157
    }
  },
  {
    "id": "pat_072",
    "patientId": "HCA-2024-072",
    "firstName": "Barbara",
    "lastName": "Wilson",
    "age": 57,
    "gender": "female",
    "bloodType": "B+",
    "dateOfBirth": "1969-10-26",
    "email": "patient72@email.com",
    "phone": "+1 (555) 680-9522",
    "address": {
      "street": "5666 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "high",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-04",
    "nextAppointment": "2026-08-03",
    "predictionCount": 9,
    "createdAt": "2025-08-06T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 72,
      "bloodPressureSystolic": 147,
      "bloodPressureDiastolic": 70,
      "temperature": 98.19711819306266,
      "oxygenSaturation": 95,
      "respiratoryRate": 22,
      "weight": 236,
      "height": 67,
      "bmi": 31.259277433761177,
      "glucoseLevel": 167
    }
  },
  {
    "id": "pat_073",
    "patientId": "HCA-2024-073",
    "firstName": "Richard",
    "lastName": "Lopez",
    "age": 89,
    "gender": "female",
    "bloodType": "B-",
    "dateOfBirth": "1937-01-09",
    "email": "patient73@email.com",
    "phone": "+1 (555) 590-4046",
    "address": {
      "street": "7151 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-19",
    "nextAppointment": "2026-08-03",
    "predictionCount": 10,
    "createdAt": "2026-06-19T11:39:59.806Z",
    "updatedAt": "2026-07-21T11:39:59.806Z",
    "vitalSigns": {
      "heartRate": 96,
      "bloodPressureSystolic": 130,
      "bloodPressureDiastolic": 86,
      "temperature": 99.25936300924099,
      "oxygenSaturation": 93,
      "respiratoryRate": 22,
      "weight": 151,
      "height": 60,
      "bmi": 26.451333734601988,
      "glucoseLevel": 99
    }
  },
  {
    "id": "pat_074",
    "patientId": "HCA-2024-074",
    "firstName": "Karen",
    "lastName": "Rodriguez",
    "age": 67,
    "gender": "male",
    "bloodType": "B-",
    "dateOfBirth": "1959-01-08",
    "email": "patient74@email.com",
    "phone": "+1 (555) 109-3026",
    "address": {
      "street": "4930 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-06-28",
    "nextAppointment": "2026-07-27",
    "predictionCount": 9,
    "createdAt": "2025-08-02T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 101,
      "bloodPressureSystolic": 112,
      "bloodPressureDiastolic": 84,
      "temperature": 98.89032317295451,
      "oxygenSaturation": 92,
      "respiratoryRate": 12,
      "weight": 208,
      "height": 66,
      "bmi": 20.34488518561887,
      "glucoseLevel": 149
    }
  },
  {
    "id": "pat_075",
    "patientId": "HCA-2024-075",
    "firstName": "Thomas",
    "lastName": "Thomas",
    "age": 54,
    "gender": "male",
    "bloodType": "O+",
    "dateOfBirth": "1972-08-23",
    "email": "patient75@email.com",
    "phone": "+1 (555) 720-4271",
    "address": {
      "street": "1931 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "None"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-06-26",
    "nextAppointment": "2026-08-20",
    "predictionCount": 3,
    "createdAt": "2025-11-24T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 69,
      "bloodPressureSystolic": 121,
      "bloodPressureDiastolic": 75,
      "temperature": 99.56701180195103,
      "oxygenSaturation": 93,
      "respiratoryRate": 18,
      "weight": 250,
      "height": 61,
      "bmi": 20.45258867189398,
      "glucoseLevel": 149
    }
  },
  {
    "id": "pat_076",
    "patientId": "HCA-2024-076",
    "firstName": "Michael",
    "lastName": "Jones",
    "age": 65,
    "gender": "female",
    "bloodType": "B-",
    "dateOfBirth": "1961-04-27",
    "email": "patient76@email.com",
    "phone": "+1 (555) 129-5623",
    "address": {
      "street": "1963 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-06",
    "nextAppointment": "2026-07-27",
    "predictionCount": 3,
    "createdAt": "2026-04-07T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 96,
      "bloodPressureSystolic": 155,
      "bloodPressureDiastolic": 93,
      "temperature": 99.97093721723643,
      "oxygenSaturation": 96,
      "respiratoryRate": 20,
      "weight": 173,
      "height": 68,
      "bmi": 23.67879603416425,
      "glucoseLevel": 145
    }
  },
  {
    "id": "pat_077",
    "patientId": "HCA-2024-077",
    "firstName": "Sarah",
    "lastName": "Miller",
    "age": 59,
    "gender": "male",
    "bloodType": "A+",
    "dateOfBirth": "1967-10-02",
    "email": "patient77@email.com",
    "phone": "+1 (555) 435-6551",
    "address": {
      "street": "9662 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-14",
    "nextAppointment": "2026-07-29",
    "predictionCount": 15,
    "createdAt": "2025-10-18T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 91,
      "bloodPressureSystolic": 110,
      "bloodPressureDiastolic": 76,
      "temperature": 98.4588279845341,
      "oxygenSaturation": 99,
      "respiratoryRate": 20,
      "weight": 233,
      "height": 73,
      "bmi": 22.224660254679943,
      "glucoseLevel": 88
    }
  },
  {
    "id": "pat_078",
    "patientId": "HCA-2024-078",
    "firstName": "Linda",
    "lastName": "Williams",
    "age": 83,
    "gender": "male",
    "bloodType": "B+",
    "dateOfBirth": "1943-11-08",
    "email": "patient78@email.com",
    "phone": "+1 (555) 567-1314",
    "address": {
      "street": "5662 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-17",
    "nextAppointment": "2026-08-03",
    "predictionCount": 15,
    "createdAt": "2025-09-25T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 87,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 96,
      "temperature": 98.21356164327823,
      "oxygenSaturation": 95,
      "respiratoryRate": 22,
      "weight": 120,
      "height": 63,
      "bmi": 26.523597893456635,
      "glucoseLevel": 148
    }
  },
  {
    "id": "pat_079",
    "patientId": "HCA-2024-079",
    "firstName": "Maria",
    "lastName": "Hernandez",
    "age": 18,
    "gender": "female",
    "bloodType": "AB-",
    "dateOfBirth": "2008-06-09",
    "email": "patient79@email.com",
    "phone": "+1 (555) 192-1137",
    "address": {
      "street": "9049 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-06-28",
    "nextAppointment": "2026-08-11",
    "predictionCount": 9,
    "createdAt": "2026-04-01T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 70,
      "bloodPressureSystolic": 136,
      "bloodPressureDiastolic": 71,
      "temperature": 99.70795496324611,
      "oxygenSaturation": 92,
      "respiratoryRate": 21,
      "weight": 194,
      "height": 67,
      "bmi": 34.7378535389002,
      "glucoseLevel": 80
    }
  },
  {
    "id": "pat_080",
    "patientId": "HCA-2024-080",
    "firstName": "Nancy",
    "lastName": "Thomas",
    "age": 33,
    "gender": "female",
    "bloodType": "O+",
    "dateOfBirth": "1993-08-24",
    "email": "patient80@email.com",
    "phone": "+1 (555) 853-2384",
    "address": {
      "street": "8572 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-12",
    "nextAppointment": "2026-08-11",
    "predictionCount": 9,
    "createdAt": "2026-03-28T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 97,
      "bloodPressureSystolic": 127,
      "bloodPressureDiastolic": 88,
      "temperature": 99.27003607200919,
      "oxygenSaturation": 95,
      "respiratoryRate": 12,
      "weight": 244,
      "height": 67,
      "bmi": 21.478720729483957,
      "glucoseLevel": 97
    }
  },
  {
    "id": "pat_081",
    "patientId": "HCA-2024-081",
    "firstName": "Joseph",
    "lastName": "Jackson",
    "age": 21,
    "gender": "female",
    "bloodType": "A-",
    "dateOfBirth": "2005-05-10",
    "email": "patient81@email.com",
    "phone": "+1 (555) 421-6241",
    "address": {
      "street": "2516 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-04",
    "nextAppointment": "2026-08-20",
    "predictionCount": 5,
    "createdAt": "2026-05-29T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 100,
      "bloodPressureSystolic": 134,
      "bloodPressureDiastolic": 89,
      "temperature": 99.72825337070033,
      "oxygenSaturation": 94,
      "respiratoryRate": 19,
      "weight": 214,
      "height": 64,
      "bmi": 34.72897897475366,
      "glucoseLevel": 97
    }
  },
  {
    "id": "pat_082",
    "patientId": "HCA-2024-082",
    "firstName": "Nancy",
    "lastName": "Brown",
    "age": 43,
    "gender": "female",
    "bloodType": "B+",
    "dateOfBirth": "1983-07-26",
    "email": "patient82@email.com",
    "phone": "+1 (555) 119-4463",
    "address": {
      "street": "3310 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-10",
    "nextAppointment": "2026-08-03",
    "predictionCount": 9,
    "createdAt": "2026-03-04T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 62,
      "bloodPressureSystolic": 154,
      "bloodPressureDiastolic": 80,
      "temperature": 99.03873134678317,
      "oxygenSaturation": 95,
      "respiratoryRate": 22,
      "weight": 211,
      "height": 68,
      "bmi": 22.71484456946894,
      "glucoseLevel": 182
    }
  },
  {
    "id": "pat_083",
    "patientId": "HCA-2024-083",
    "firstName": "Jessica",
    "lastName": "Anderson",
    "age": 81,
    "gender": "male",
    "bloodType": "O-",
    "dateOfBirth": "1945-10-14",
    "email": "patient83@email.com",
    "phone": "+1 (555) 751-5908",
    "address": {
      "street": "6103 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-18",
    "nextAppointment": "2026-07-28",
    "predictionCount": 4,
    "createdAt": "2026-05-17T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 91,
      "bloodPressureSystolic": 140,
      "bloodPressureDiastolic": 88,
      "temperature": 98.07655502293538,
      "oxygenSaturation": 95,
      "respiratoryRate": 20,
      "weight": 121,
      "height": 71,
      "bmi": 28.884967797571115,
      "glucoseLevel": 95
    }
  },
  {
    "id": "pat_084",
    "patientId": "HCA-2024-084",
    "firstName": "Emily",
    "lastName": "Hernandez",
    "age": 18,
    "gender": "male",
    "bloodType": "O+",
    "dateOfBirth": "2008-04-04",
    "email": "patient84@email.com",
    "phone": "+1 (555) 300-9689",
    "address": {
      "street": "7758 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "high",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-06-26",
    "nextAppointment": "2026-08-02",
    "predictionCount": 15,
    "createdAt": "2026-04-23T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 71,
      "bloodPressureSystolic": 155,
      "bloodPressureDiastolic": 81,
      "temperature": 99.62284071495982,
      "oxygenSaturation": 99,
      "respiratoryRate": 22,
      "weight": 140,
      "height": 63,
      "bmi": 20.062885418090787,
      "glucoseLevel": 124
    }
  },
  {
    "id": "pat_085",
    "patientId": "HCA-2024-085",
    "firstName": "Barbara",
    "lastName": "Gonzalez",
    "age": 19,
    "gender": "male",
    "bloodType": "A+",
    "dateOfBirth": "2007-12-21",
    "email": "patient85@email.com",
    "phone": "+1 (555) 731-1555",
    "address": {
      "street": "5359 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-06-30",
    "nextAppointment": "2026-08-09",
    "predictionCount": 14,
    "createdAt": "2026-02-16T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 101,
      "bloodPressureSystolic": 120,
      "bloodPressureDiastolic": 83,
      "temperature": 98.34792624253205,
      "oxygenSaturation": 100,
      "respiratoryRate": 21,
      "weight": 164,
      "height": 74,
      "bmi": 30.029868621986292,
      "glucoseLevel": 177
    }
  },
  {
    "id": "pat_086",
    "patientId": "HCA-2024-086",
    "firstName": "Sarah",
    "lastName": "Williams",
    "age": 65,
    "gender": "female",
    "bloodType": "O+",
    "dateOfBirth": "1961-04-21",
    "email": "patient86@email.com",
    "phone": "+1 (555) 385-2373",
    "address": {
      "street": "5827 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-14",
    "nextAppointment": "2026-07-26",
    "predictionCount": 9,
    "createdAt": "2025-11-30T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 107,
      "bloodPressureSystolic": 128,
      "bloodPressureDiastolic": 85,
      "temperature": 98.93134252210623,
      "oxygenSaturation": 96,
      "respiratoryRate": 19,
      "weight": 250,
      "height": 74,
      "bmi": 26.697880810403696,
      "glucoseLevel": 118
    }
  },
  {
    "id": "pat_087",
    "patientId": "HCA-2024-087",
    "firstName": "Joseph",
    "lastName": "Martinez",
    "age": 55,
    "gender": "female",
    "bloodType": "AB+",
    "dateOfBirth": "1971-05-21",
    "email": "patient87@email.com",
    "phone": "+1 (555) 206-4749",
    "address": {
      "street": "6180 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-16",
    "nextAppointment": "2026-08-08",
    "predictionCount": 9,
    "createdAt": "2025-09-30T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 99,
      "bloodPressureSystolic": 127,
      "bloodPressureDiastolic": 72,
      "temperature": 99.85011616979273,
      "oxygenSaturation": 97,
      "respiratoryRate": 16,
      "weight": 145,
      "height": 61,
      "bmi": 29.58040811408846,
      "glucoseLevel": 179
    }
  },
  {
    "id": "pat_088",
    "patientId": "HCA-2024-088",
    "firstName": "Charles",
    "lastName": "Williams",
    "age": 74,
    "gender": "male",
    "bloodType": "B-",
    "dateOfBirth": "1952-12-12",
    "email": "patient88@email.com",
    "phone": "+1 (555) 877-2016",
    "address": {
      "street": "5722 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-17",
    "nextAppointment": "2026-08-02",
    "predictionCount": 13,
    "createdAt": "2025-12-21T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 83,
      "bloodPressureSystolic": 117,
      "bloodPressureDiastolic": 92,
      "temperature": 99.15899254201865,
      "oxygenSaturation": 99,
      "respiratoryRate": 14,
      "weight": 141,
      "height": 71,
      "bmi": 26.331309666813382,
      "glucoseLevel": 82
    }
  },
  {
    "id": "pat_089",
    "patientId": "HCA-2024-089",
    "firstName": "Charles",
    "lastName": "Johnson",
    "age": 69,
    "gender": "female",
    "bloodType": "B-",
    "dateOfBirth": "1957-09-06",
    "email": "patient89@email.com",
    "phone": "+1 (555) 712-8922",
    "address": {
      "street": "4650 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "None"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-01",
    "nextAppointment": "2026-07-26",
    "predictionCount": 5,
    "createdAt": "2025-08-16T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 98,
      "bloodPressureSystolic": 148,
      "bloodPressureDiastolic": 80,
      "temperature": 99.31944925993898,
      "oxygenSaturation": 100,
      "respiratoryRate": 19,
      "weight": 246,
      "height": 66,
      "bmi": 30.75997317831366,
      "glucoseLevel": 137
    }
  },
  {
    "id": "pat_090",
    "patientId": "HCA-2024-090",
    "firstName": "Jessica",
    "lastName": "Davis",
    "age": 63,
    "gender": "female",
    "bloodType": "A+",
    "dateOfBirth": "1963-07-05",
    "email": "patient90@email.com",
    "phone": "+1 (555) 880-3997",
    "address": {
      "street": "1267 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-18",
    "nextAppointment": "2026-08-16",
    "predictionCount": 3,
    "createdAt": "2025-08-30T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 83,
      "bloodPressureSystolic": 138,
      "bloodPressureDiastolic": 92,
      "temperature": 99.26544179883831,
      "oxygenSaturation": 96,
      "respiratoryRate": 21,
      "weight": 178,
      "height": 60,
      "bmi": 33.64927456403059,
      "glucoseLevel": 173
    }
  },
  {
    "id": "pat_091",
    "patientId": "HCA-2024-091",
    "firstName": "Joseph",
    "lastName": "Lopez",
    "age": 67,
    "gender": "female",
    "bloodType": "O+",
    "dateOfBirth": "1959-04-03",
    "email": "patient91@email.com",
    "phone": "+1 (555) 481-3722",
    "address": {
      "street": "4120 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-13",
    "nextAppointment": "2026-08-03",
    "predictionCount": 3,
    "createdAt": "2026-03-13T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 88,
      "bloodPressureSystolic": 158,
      "bloodPressureDiastolic": 75,
      "temperature": 99.01847251929088,
      "oxygenSaturation": 95,
      "respiratoryRate": 22,
      "weight": 168,
      "height": 74,
      "bmi": 26.464709907887197,
      "glucoseLevel": 199
    }
  },
  {
    "id": "pat_092",
    "patientId": "HCA-2024-092",
    "firstName": "Jessica",
    "lastName": "Williams",
    "age": 76,
    "gender": "female",
    "bloodType": "AB+",
    "dateOfBirth": "1950-05-02",
    "email": "patient92@email.com",
    "phone": "+1 (555) 435-8676",
    "address": {
      "street": "1543 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-08",
    "nextAppointment": "2026-07-29",
    "predictionCount": 10,
    "createdAt": "2026-02-15T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 85,
      "bloodPressureSystolic": 130,
      "bloodPressureDiastolic": 77,
      "temperature": 98.48187711356894,
      "oxygenSaturation": 100,
      "respiratoryRate": 12,
      "weight": 124,
      "height": 62,
      "bmi": 22.526024004285727,
      "glucoseLevel": 154
    }
  },
  {
    "id": "pat_093",
    "patientId": "HCA-2024-093",
    "firstName": "Linda",
    "lastName": "Williams",
    "age": 57,
    "gender": "male",
    "bloodType": "A-",
    "dateOfBirth": "1969-01-26",
    "email": "patient93@email.com",
    "phone": "+1 (555) 103-8605",
    "address": {
      "street": "4033 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-02",
    "nextAppointment": "2026-08-20",
    "predictionCount": 7,
    "createdAt": "2026-02-06T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 103,
      "bloodPressureSystolic": 143,
      "bloodPressureDiastolic": 74,
      "temperature": 99.88122712428924,
      "oxygenSaturation": 100,
      "respiratoryRate": 22,
      "weight": 180,
      "height": 67,
      "bmi": 26.000112978811032,
      "glucoseLevel": 95
    }
  },
  {
    "id": "pat_094",
    "patientId": "HCA-2024-094",
    "firstName": "Nancy",
    "lastName": "Jackson",
    "age": 58,
    "gender": "female",
    "bloodType": "A+",
    "dateOfBirth": "1968-06-03",
    "email": "patient94@email.com",
    "phone": "+1 (555) 296-3612",
    "address": {
      "street": "7887 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-20",
    "nextAppointment": "2026-08-10",
    "predictionCount": 8,
    "createdAt": "2026-01-18T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 76,
      "bloodPressureSystolic": 130,
      "bloodPressureDiastolic": 76,
      "temperature": 98.62679624751948,
      "oxygenSaturation": 93,
      "respiratoryRate": 22,
      "weight": 141,
      "height": 65,
      "bmi": 25.3139730642969,
      "glucoseLevel": 171
    }
  },
  {
    "id": "pat_095",
    "patientId": "HCA-2024-095",
    "firstName": "Thomas",
    "lastName": "Thomas",
    "age": 84,
    "gender": "female",
    "bloodType": "O+",
    "dateOfBirth": "1942-09-27",
    "email": "patient95@email.com",
    "phone": "+1 (555) 820-6869",
    "address": {
      "street": "3062 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "high",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-14",
    "nextAppointment": "2026-07-28",
    "predictionCount": 15,
    "createdAt": "2026-05-15T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 98,
      "bloodPressureSystolic": 152,
      "bloodPressureDiastolic": 87,
      "temperature": 98.8322186921063,
      "oxygenSaturation": 93,
      "respiratoryRate": 17,
      "weight": 189,
      "height": 62,
      "bmi": 33.84453466699438,
      "glucoseLevel": 141
    }
  },
  {
    "id": "pat_096",
    "patientId": "HCA-2024-096",
    "firstName": "Linda",
    "lastName": "Hernandez",
    "age": 67,
    "gender": "female",
    "bloodType": "A-",
    "dateOfBirth": "1959-03-07",
    "email": "patient96@email.com",
    "phone": "+1 (555) 198-8485",
    "address": {
      "street": "1158 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-13",
    "nextAppointment": "2026-08-02",
    "predictionCount": 13,
    "createdAt": "2025-08-28T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 94,
      "bloodPressureSystolic": 138,
      "bloodPressureDiastolic": 80,
      "temperature": 98.9493888943595,
      "oxygenSaturation": 93,
      "respiratoryRate": 20,
      "weight": 229,
      "height": 73,
      "bmi": 22.003621125871398,
      "glucoseLevel": 92
    }
  },
  {
    "id": "pat_097",
    "patientId": "HCA-2024-097",
    "firstName": "David",
    "lastName": "Thomas",
    "age": 41,
    "gender": "male",
    "bloodType": "O-",
    "dateOfBirth": "1985-02-21",
    "email": "patient97@email.com",
    "phone": "+1 (555) 298-1413",
    "address": {
      "street": "9584 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-06-24",
    "nextAppointment": "2026-08-04",
    "predictionCount": 6,
    "createdAt": "2025-07-23T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 77,
      "bloodPressureSystolic": 140,
      "bloodPressureDiastolic": 72,
      "temperature": 98.9062652540239,
      "oxygenSaturation": 99,
      "respiratoryRate": 12,
      "weight": 197,
      "height": 60,
      "bmi": 34.10056661531626,
      "glucoseLevel": 194
    }
  },
  {
    "id": "pat_098",
    "patientId": "HCA-2024-098",
    "firstName": "Joseph",
    "lastName": "Wilson",
    "age": 56,
    "gender": "female",
    "bloodType": "A-",
    "dateOfBirth": "1970-01-02",
    "email": "patient98@email.com",
    "phone": "+1 (555) 625-7114",
    "address": {
      "street": "965 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-19",
    "nextAppointment": "2026-07-29",
    "predictionCount": 2,
    "createdAt": "2026-01-05T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 88,
      "bloodPressureSystolic": 139,
      "bloodPressureDiastolic": 88,
      "temperature": 99.24355902490213,
      "oxygenSaturation": 93,
      "respiratoryRate": 12,
      "weight": 125,
      "height": 60,
      "bmi": 33.10283211912007,
      "glucoseLevel": 182
    }
  },
  {
    "id": "pat_099",
    "patientId": "HCA-2024-099",
    "firstName": "James",
    "lastName": "Rodriguez",
    "age": 61,
    "gender": "female",
    "bloodType": "O-",
    "dateOfBirth": "1965-04-21",
    "email": "patient99@email.com",
    "phone": "+1 (555) 205-6026",
    "address": {
      "street": "5593 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "low",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "None"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-14",
    "nextAppointment": "2026-08-14",
    "predictionCount": 10,
    "createdAt": "2026-06-02T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 74,
      "bloodPressureSystolic": 147,
      "bloodPressureDiastolic": 77,
      "temperature": 98.24030366107056,
      "oxygenSaturation": 97,
      "respiratoryRate": 17,
      "weight": 246,
      "height": 63,
      "bmi": 23.20422049592217,
      "glucoseLevel": 156
    }
  },
  {
    "id": "pat_100",
    "patientId": "HCA-2024-100",
    "firstName": "David",
    "lastName": "Brown",
    "age": 56,
    "gender": "female",
    "bloodType": "B+",
    "dateOfBirth": "1970-10-23",
    "email": "patient100@email.com",
    "phone": "+1 (555) 284-6383",
    "address": {
      "street": "6575 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-08",
    "nextAppointment": "2026-08-10",
    "predictionCount": 2,
    "createdAt": "2025-10-24T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 83,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 83,
      "temperature": 99.44750187453648,
      "oxygenSaturation": 92,
      "respiratoryRate": 17,
      "weight": 249,
      "height": 73,
      "bmi": 33.3412142784263,
      "glucoseLevel": 189
    }
  },
  {
    "id": "pat_101",
    "patientId": "HCA-2024-101",
    "firstName": "David",
    "lastName": "Wilson",
    "age": 28,
    "gender": "male",
    "bloodType": "B+",
    "dateOfBirth": "1998-07-05",
    "email": "patient101@email.com",
    "phone": "+1 (555) 864-7755",
    "address": {
      "street": "9137 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-03",
    "nextAppointment": "2026-08-18",
    "predictionCount": 15,
    "createdAt": "2026-03-06T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 99,
      "bloodPressureSystolic": 121,
      "bloodPressureDiastolic": 73,
      "temperature": 98.49262383238577,
      "oxygenSaturation": 95,
      "respiratoryRate": 17,
      "weight": 182,
      "height": 68,
      "bmi": 22.422349179267364,
      "glucoseLevel": 154
    }
  },
  {
    "id": "pat_102",
    "patientId": "HCA-2024-102",
    "firstName": "Susan",
    "lastName": "Martin",
    "age": 22,
    "gender": "male",
    "bloodType": "A-",
    "dateOfBirth": "2004-11-20",
    "email": "patient102@email.com",
    "phone": "+1 (555) 505-1536",
    "address": {
      "street": "1495 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-02",
    "nextAppointment": "2026-08-16",
    "predictionCount": 8,
    "createdAt": "2025-08-19T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 84,
      "bloodPressureSystolic": 123,
      "bloodPressureDiastolic": 77,
      "temperature": 99.89305199317121,
      "oxygenSaturation": 98,
      "respiratoryRate": 21,
      "weight": 143,
      "height": 68,
      "bmi": 32.50766543102824,
      "glucoseLevel": 108
    }
  },
  {
    "id": "pat_103",
    "patientId": "HCA-2024-103",
    "firstName": "Joseph",
    "lastName": "Davis",
    "age": 46,
    "gender": "female",
    "bloodType": "A-",
    "dateOfBirth": "1980-12-03",
    "email": "patient103@email.com",
    "phone": "+1 (555) 131-6192",
    "address": {
      "street": "2782 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-06-21",
    "nextAppointment": "2026-08-19",
    "predictionCount": 4,
    "createdAt": "2026-02-20T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 75,
      "bloodPressureSystolic": 123,
      "bloodPressureDiastolic": 96,
      "temperature": 98.41198293765119,
      "oxygenSaturation": 98,
      "respiratoryRate": 19,
      "weight": 124,
      "height": 60,
      "bmi": 24.144036635725072,
      "glucoseLevel": 133
    }
  },
  {
    "id": "pat_104",
    "patientId": "HCA-2024-104",
    "firstName": "Michael",
    "lastName": "Miller",
    "age": 75,
    "gender": "female",
    "bloodType": "AB-",
    "dateOfBirth": "1951-05-28",
    "email": "patient104@email.com",
    "phone": "+1 (555) 293-6947",
    "address": {
      "street": "6404 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-06-23",
    "nextAppointment": "2026-08-04",
    "predictionCount": 4,
    "createdAt": "2026-05-26T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 109,
      "bloodPressureSystolic": 153,
      "bloodPressureDiastolic": 90,
      "temperature": 99.94688617449431,
      "oxygenSaturation": 92,
      "respiratoryRate": 21,
      "weight": 126,
      "height": 72,
      "bmi": 29.56383542021957,
      "glucoseLevel": 185
    }
  },
  {
    "id": "pat_105",
    "patientId": "HCA-2024-105",
    "firstName": "Nancy",
    "lastName": "Taylor",
    "age": 29,
    "gender": "female",
    "bloodType": "A-",
    "dateOfBirth": "1997-05-13",
    "email": "patient105@email.com",
    "phone": "+1 (555) 806-4614",
    "address": {
      "street": "5939 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-06-21",
    "nextAppointment": "2026-08-19",
    "predictionCount": 2,
    "createdAt": "2025-09-10T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 73,
      "bloodPressureSystolic": 117,
      "bloodPressureDiastolic": 75,
      "temperature": 99.64343830596592,
      "oxygenSaturation": 95,
      "respiratoryRate": 20,
      "weight": 229,
      "height": 73,
      "bmi": 26.316669071919158,
      "glucoseLevel": 123
    }
  },
  {
    "id": "pat_106",
    "patientId": "HCA-2024-106",
    "firstName": "Jessica",
    "lastName": "Martinez",
    "age": 74,
    "gender": "female",
    "bloodType": "A-",
    "dateOfBirth": "1952-04-15",
    "email": "patient106@email.com",
    "phone": "+1 (555) 497-7993",
    "address": {
      "street": "9120 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-03",
    "nextAppointment": "2026-07-23",
    "predictionCount": 10,
    "createdAt": "2025-10-08T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 88,
      "bloodPressureSystolic": 111,
      "bloodPressureDiastolic": 70,
      "temperature": 99.73315521837472,
      "oxygenSaturation": 93,
      "respiratoryRate": 20,
      "weight": 132,
      "height": 72,
      "bmi": 25.209392461800018,
      "glucoseLevel": 143
    }
  },
  {
    "id": "pat_107",
    "patientId": "HCA-2024-107",
    "firstName": "Barbara",
    "lastName": "Martinez",
    "age": 84,
    "gender": "male",
    "bloodType": "A-",
    "dateOfBirth": "1942-02-01",
    "email": "patient107@email.com",
    "phone": "+1 (555) 992-9943",
    "address": {
      "street": "3784 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-08",
    "nextAppointment": "2026-08-02",
    "predictionCount": 1,
    "createdAt": "2025-08-22T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 97,
      "bloodPressureSystolic": 124,
      "bloodPressureDiastolic": 94,
      "temperature": 98.05096686436498,
      "oxygenSaturation": 96,
      "respiratoryRate": 13,
      "weight": 130,
      "height": 61,
      "bmi": 33.59995288324925,
      "glucoseLevel": 90
    }
  },
  {
    "id": "pat_108",
    "patientId": "HCA-2024-108",
    "firstName": "David",
    "lastName": "Jones",
    "age": 77,
    "gender": "male",
    "bloodType": "B-",
    "dateOfBirth": "1949-10-25",
    "email": "patient108@email.com",
    "phone": "+1 (555) 198-8077",
    "address": {
      "street": "7729 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Arthritis"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-06-24",
    "nextAppointment": "2026-08-20",
    "predictionCount": 4,
    "createdAt": "2025-08-12T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 110,
      "bloodPressureSystolic": 149,
      "bloodPressureDiastolic": 85,
      "temperature": 99.93034941055178,
      "oxygenSaturation": 97,
      "respiratoryRate": 22,
      "weight": 210,
      "height": 73,
      "bmi": 26.738538862228246,
      "glucoseLevel": 131
    }
  },
  {
    "id": "pat_109",
    "patientId": "HCA-2024-109",
    "firstName": "Emily",
    "lastName": "Moore",
    "age": 81,
    "gender": "male",
    "bloodType": "O+",
    "dateOfBirth": "1945-06-24",
    "email": "patient109@email.com",
    "phone": "+1 (555) 171-1038",
    "address": {
      "street": "1485 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "high",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-04",
    "nextAppointment": "2026-07-28",
    "predictionCount": 5,
    "createdAt": "2025-10-03T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 104,
      "bloodPressureSystolic": 111,
      "bloodPressureDiastolic": 99,
      "temperature": 99.6416924553309,
      "oxygenSaturation": 95,
      "respiratoryRate": 18,
      "weight": 173,
      "height": 66,
      "bmi": 30.942142681279336,
      "glucoseLevel": 131
    }
  },
  {
    "id": "pat_110",
    "patientId": "HCA-2024-110",
    "firstName": "Joseph",
    "lastName": "Moore",
    "age": 60,
    "gender": "male",
    "bloodType": "B-",
    "dateOfBirth": "1966-12-01",
    "email": "patient110@email.com",
    "phone": "+1 (555) 300-7364",
    "address": {
      "street": "7540 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "critical",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-06-21",
    "nextAppointment": "2026-07-29",
    "predictionCount": 6,
    "createdAt": "2025-11-08T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 102,
      "bloodPressureSystolic": 137,
      "bloodPressureDiastolic": 97,
      "temperature": 98.42115386737302,
      "oxygenSaturation": 94,
      "respiratoryRate": 13,
      "weight": 212,
      "height": 61,
      "bmi": 28.134097692340056,
      "glucoseLevel": 143
    }
  },
  {
    "id": "pat_111",
    "patientId": "HCA-2024-111",
    "firstName": "Sarah",
    "lastName": "Thomas",
    "age": 51,
    "gender": "male",
    "bloodType": "B-",
    "dateOfBirth": "1975-01-26",
    "email": "patient111@email.com",
    "phone": "+1 (555) 442-3907",
    "address": {
      "street": "1118 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-06-25",
    "nextAppointment": "2026-08-10",
    "predictionCount": 12,
    "createdAt": "2025-08-05T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 105,
      "bloodPressureSystolic": 120,
      "bloodPressureDiastolic": 95,
      "temperature": 98.15575669728923,
      "oxygenSaturation": 94,
      "respiratoryRate": 20,
      "weight": 187,
      "height": 70,
      "bmi": 32.92071034107496,
      "glucoseLevel": 183
    }
  },
  {
    "id": "pat_112",
    "patientId": "HCA-2024-112",
    "firstName": "Thomas",
    "lastName": "Taylor",
    "age": 82,
    "gender": "male",
    "bloodType": "O-",
    "dateOfBirth": "1944-12-20",
    "email": "patient112@email.com",
    "phone": "+1 (555) 288-3639",
    "address": {
      "street": "2125 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Lisa Park",
    "conditions": [
      "Type 2 Diabetes"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-20",
    "nextAppointment": "2026-07-31",
    "predictionCount": 12,
    "createdAt": "2026-03-27T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 83,
      "bloodPressureSystolic": 122,
      "bloodPressureDiastolic": 73,
      "temperature": 99.38572587733957,
      "oxygenSaturation": 94,
      "respiratoryRate": 19,
      "weight": 135,
      "height": 63,
      "bmi": 21.8921321637818,
      "glucoseLevel": 96
    }
  },
  {
    "id": "pat_113",
    "patientId": "HCA-2024-113",
    "firstName": "Susan",
    "lastName": "Jones",
    "age": 44,
    "gender": "male",
    "bloodType": "B-",
    "dateOfBirth": "1982-12-11",
    "email": "patient113@email.com",
    "phone": "+1 (555) 451-5495",
    "address": {
      "street": "8533 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-07-08",
    "nextAppointment": "2026-08-17",
    "predictionCount": 1,
    "createdAt": "2026-05-20T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 95,
      "bloodPressureSystolic": 129,
      "bloodPressureDiastolic": 77,
      "temperature": 98.85741166818046,
      "oxygenSaturation": 98,
      "respiratoryRate": 20,
      "weight": 224,
      "height": 69,
      "bmi": 25.57059767856378,
      "glucoseLevel": 150
    }
  },
  {
    "id": "pat_114",
    "patientId": "HCA-2024-114",
    "firstName": "Susan",
    "lastName": "Taylor",
    "age": 65,
    "gender": "male",
    "bloodType": "AB+",
    "dateOfBirth": "1961-08-15",
    "email": "patient114@email.com",
    "phone": "+1 (555) 905-1379",
    "address": {
      "street": "9897 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "None"
    ],
    "medications": [
      "None"
    ],
    "lastVisit": "2026-06-26",
    "nextAppointment": "2026-07-29",
    "predictionCount": 5,
    "createdAt": "2026-02-26T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 104,
      "bloodPressureSystolic": 113,
      "bloodPressureDiastolic": 84,
      "temperature": 99.25430651680699,
      "oxygenSaturation": 94,
      "respiratoryRate": 17,
      "weight": 189,
      "height": 66,
      "bmi": 34.8204871104779,
      "glucoseLevel": 121
    }
  },
  {
    "id": "pat_115",
    "patientId": "HCA-2024-115",
    "firstName": "Robert",
    "lastName": "Miller",
    "age": 89,
    "gender": "male",
    "bloodType": "A+",
    "dateOfBirth": "1937-10-18",
    "email": "patient115@email.com",
    "phone": "+1 (555) 888-5756",
    "address": {
      "street": "5773 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "low",
    "assignedDoctor": "Dr. Sarah Mitchell",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-11",
    "nextAppointment": "2026-08-05",
    "predictionCount": 9,
    "createdAt": "2026-03-02T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 102,
      "bloodPressureSystolic": 115,
      "bloodPressureDiastolic": 83,
      "temperature": 99.29738232472818,
      "oxygenSaturation": 99,
      "respiratoryRate": 18,
      "weight": 192,
      "height": 67,
      "bmi": 34.547236060287766,
      "glucoseLevel": 111
    }
  },
  {
    "id": "pat_116",
    "patientId": "HCA-2024-116",
    "firstName": "Patricia",
    "lastName": "Davis",
    "age": 21,
    "gender": "male",
    "bloodType": "AB+",
    "dateOfBirth": "2005-10-25",
    "email": "patient116@email.com",
    "phone": "+1 (555) 355-8685",
    "address": {
      "street": "4720 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-10",
    "nextAppointment": "2026-08-10",
    "predictionCount": 1,
    "createdAt": "2026-01-27T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 104,
      "bloodPressureSystolic": 122,
      "bloodPressureDiastolic": 70,
      "temperature": 99.05130761306467,
      "oxygenSaturation": 93,
      "respiratoryRate": 16,
      "weight": 210,
      "height": 75,
      "bmi": 34.85249766361369,
      "glucoseLevel": 135
    }
  },
  {
    "id": "pat_117",
    "patientId": "HCA-2024-117",
    "firstName": "Robert",
    "lastName": "Jackson",
    "age": 68,
    "gender": "male",
    "bloodType": "AB-",
    "dateOfBirth": "1958-03-11",
    "email": "patient117@email.com",
    "phone": "+1 (555) 158-6631",
    "address": {
      "street": "6806 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "active",
    "riskLevel": "critical",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Hypertension"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-17",
    "nextAppointment": "2026-07-28",
    "predictionCount": 14,
    "createdAt": "2025-08-03T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 62,
      "bloodPressureSystolic": 118,
      "bloodPressureDiastolic": 85,
      "temperature": 99.51686344322214,
      "oxygenSaturation": 96,
      "respiratoryRate": 13,
      "weight": 196,
      "height": 66,
      "bmi": 32.91295912788358,
      "glucoseLevel": 152
    }
  },
  {
    "id": "pat_118",
    "patientId": "HCA-2024-118",
    "firstName": "Emily",
    "lastName": "Williams",
    "age": 48,
    "gender": "male",
    "bloodType": "A+",
    "dateOfBirth": "1978-12-09",
    "email": "patient118@email.com",
    "phone": "+1 (555) 659-7330",
    "address": {
      "street": "5040 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "monitoring",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. Robert King",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Aspirin"
    ],
    "lastVisit": "2026-07-01",
    "nextAppointment": "2026-08-08",
    "predictionCount": 10,
    "createdAt": "2026-01-24T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 94,
      "bloodPressureSystolic": 118,
      "bloodPressureDiastolic": 72,
      "temperature": 99.13167945545753,
      "oxygenSaturation": 100,
      "respiratoryRate": 14,
      "weight": 144,
      "height": 70,
      "bmi": 32.96169687733648,
      "glucoseLevel": 139
    }
  },
  {
    "id": "pat_119",
    "patientId": "HCA-2024-119",
    "firstName": "Jessica",
    "lastName": "Jackson",
    "age": 73,
    "gender": "female",
    "bloodType": "B+",
    "dateOfBirth": "1953-10-19",
    "email": "patient119@email.com",
    "phone": "+1 (555) 992-5521",
    "address": {
      "street": "9271 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "moderate",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "High Cholesterol"
    ],
    "medications": [
      "Lisinopril"
    ],
    "lastVisit": "2026-07-17",
    "nextAppointment": "2026-08-02",
    "predictionCount": 14,
    "createdAt": "2025-08-20T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 103,
      "bloodPressureSystolic": 111,
      "bloodPressureDiastolic": 91,
      "temperature": 98.49819578608734,
      "oxygenSaturation": 95,
      "respiratoryRate": 17,
      "weight": 189,
      "height": 67,
      "bmi": 32.87018682482294,
      "glucoseLevel": 150
    }
  },
  {
    "id": "pat_120",
    "patientId": "HCA-2024-120",
    "firstName": "Maria",
    "lastName": "Rodriguez",
    "age": 30,
    "gender": "female",
    "bloodType": "O-",
    "dateOfBirth": "1996-02-27",
    "email": "patient120@email.com",
    "phone": "+1 (555) 231-5651",
    "address": {
      "street": "5797 Main St",
      "city": "Metropolis",
      "state": "NY",
      "zipCode": "10001",
      "country": "USA"
    },
    "status": "recovered",
    "riskLevel": "high",
    "assignedDoctor": "Dr. James Chen",
    "conditions": [
      "Asthma"
    ],
    "medications": [
      "Metformin"
    ],
    "lastVisit": "2026-07-19",
    "nextAppointment": "2026-08-05",
    "predictionCount": 4,
    "createdAt": "2026-01-10T11:39:59.807Z",
    "updatedAt": "2026-07-21T11:39:59.807Z",
    "vitalSigns": {
      "heartRate": 97,
      "bloodPressureSystolic": 149,
      "bloodPressureDiastolic": 84,
      "temperature": 98.32777061176573,
      "oxygenSaturation": 100,
      "respiratoryRate": 14,
      "weight": 245,
      "height": 69,
      "bmi": 34.28736313028786,
      "glucoseLevel": 191
    }
  }
];
export const generatedPredictions: DiseasePrediction[] = [
  {
    "id": "pred_001",
    "patientId": "pat_047",
    "patientName": "Christopher Johnson",
    "diseaseType": "stroke",
    "probability": 0.1007465186937917,
    "riskLevel": "moderate",
    "confidence": 0.7593586125565783,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.807Z",
    "completedAt": "2026-07-14T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 82,
      "gender": "male",
      "bmi": 26.948052058060213,
      "bloodPressureSystolic": 153,
      "bloodPressureDiastolic": 90,
      "glucoseLevel": 194,
      "cholesterol": 209,
      "heartRate": 65,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.024010722510888094,
      "confidence": 0.9529346918359676,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_002",
    "patientId": "pat_108",
    "patientName": "David Jones",
    "diseaseType": "cancer_risk",
    "probability": 0.343173544355975,
    "riskLevel": "critical",
    "confidence": 0.7068412643146986,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.807Z",
    "completedAt": "2026-07-20T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 77,
      "gender": "male",
      "bmi": 26.738538862228246,
      "bloodPressureSystolic": 149,
      "bloodPressureDiastolic": 85,
      "glucoseLevel": 131,
      "cholesterol": 233,
      "heartRate": 110,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.9384256136419576,
      "confidence": 0.7229700020560275,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_003",
    "patientId": "pat_040",
    "patientName": "Michael Moore",
    "diseaseType": "heart_disease",
    "probability": 0.14495220268600073,
    "riskLevel": "high",
    "confidence": 0.841604849561352,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-21T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 26,
      "gender": "female",
      "bmi": 26.02902037308451,
      "bloodPressureSystolic": 140,
      "bloodPressureDiastolic": 90,
      "glucoseLevel": 178,
      "cholesterol": 175,
      "heartRate": 70,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8195274580893332,
      "confidence": 0.8154518417053385,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_004",
    "patientId": "pat_055",
    "patientName": "Joseph Lopez",
    "diseaseType": "cancer_risk",
    "probability": 0.9400462396547923,
    "riskLevel": "high",
    "confidence": 0.7181599390774531,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.807Z",
    "completedAt": "2026-07-13T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 30,
      "gender": "male",
      "bmi": 20.639779176339406,
      "bloodPressureSystolic": 156,
      "bloodPressureDiastolic": 99,
      "glucoseLevel": 177,
      "cholesterol": 211,
      "heartRate": 75,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.13359918320248954,
      "confidence": 0.9746679513238818,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_005",
    "patientId": "pat_057",
    "patientName": "Maria Wilson",
    "diseaseType": "cancer_risk",
    "probability": 0.2386421847646497,
    "riskLevel": "low",
    "confidence": 0.853410170980009,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.807Z",
    "completedAt": "2026-07-21T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 55,
      "gender": "female",
      "bmi": 24.483722263164267,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 86,
      "glucoseLevel": 185,
      "cholesterol": 169,
      "heartRate": 66,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.30405780048387343,
      "confidence": 0.9254889709325813,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_006",
    "patientId": "pat_015",
    "patientName": "Michael Rodriguez",
    "diseaseType": "diabetes",
    "probability": 0.11539937655960886,
    "riskLevel": "critical",
    "confidence": 0.8813236855307474,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-17T11:39:59.807Z",
    "completedAt": "2026-07-18T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 47,
      "gender": "male",
      "bmi": 30.971679355635025,
      "bloodPressureSystolic": 138,
      "bloodPressureDiastolic": 95,
      "glucoseLevel": 141,
      "cholesterol": 221,
      "heartRate": 67,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6253726049604138,
      "confidence": 0.706745241321623,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_007",
    "patientId": "pat_112",
    "patientName": "Thomas Taylor",
    "diseaseType": "diabetes",
    "probability": 0.9568396846307633,
    "riskLevel": "high",
    "confidence": 0.7584074603654178,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.807Z",
    "completedAt": "2026-07-15T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 82,
      "gender": "male",
      "bmi": 21.8921321637818,
      "bloodPressureSystolic": 122,
      "bloodPressureDiastolic": 73,
      "glucoseLevel": 96,
      "cholesterol": 247,
      "heartRate": 83,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.1252903465466373,
      "confidence": 0.7492344476046183,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_008",
    "patientId": "pat_100",
    "patientName": "David Brown",
    "diseaseType": "hypertension",
    "probability": 0.413255696013358,
    "riskLevel": "moderate",
    "confidence": 0.9420684506631806,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 56,
      "gender": "female",
      "bmi": 33.3412142784263,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 83,
      "glucoseLevel": 189,
      "cholesterol": 277,
      "heartRate": 83,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.24628038477814118,
      "confidence": 0.8207917397472059,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_009",
    "patientId": "pat_031",
    "patientName": "Patricia Moore",
    "diseaseType": "stroke",
    "probability": 0.7099271633798363,
    "riskLevel": "critical",
    "confidence": 0.8593825819353961,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.807Z",
    "completedAt": "2026-07-13T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 53,
      "gender": "male",
      "bmi": 25.44445977906087,
      "bloodPressureSystolic": 123,
      "bloodPressureDiastolic": 73,
      "glucoseLevel": 183,
      "cholesterol": 277,
      "heartRate": 97,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.9331222204977025,
      "confidence": 0.9041732601418738,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_010",
    "patientId": "pat_098",
    "patientName": "Joseph Wilson",
    "diseaseType": "diabetes",
    "probability": 0.4699073665809905,
    "riskLevel": "low",
    "confidence": 0.8402386828408553,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-20T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 56,
      "gender": "female",
      "bmi": 33.10283211912007,
      "bloodPressureSystolic": 139,
      "bloodPressureDiastolic": 88,
      "glucoseLevel": 182,
      "cholesterol": 211,
      "heartRate": 88,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.14444751490376462,
      "confidence": 0.751461681457843,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_011",
    "patientId": "pat_017",
    "patientName": "William Williams",
    "diseaseType": "kidney_disease",
    "probability": 0.8573707851348483,
    "riskLevel": "moderate",
    "confidence": 0.8512708573668888,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.807Z",
    "completedAt": "2026-07-13T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 30,
      "gender": "male",
      "bmi": 22.58750972938378,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 94,
      "glucoseLevel": 105,
      "cholesterol": 272,
      "heartRate": 99,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.9726662740021695,
      "confidence": 0.9406241011418996,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_012",
    "patientId": "pat_069",
    "patientName": "Susan Anderson",
    "diseaseType": "cancer_risk",
    "probability": 0.146841804783316,
    "riskLevel": "moderate",
    "confidence": 0.8123085802916228,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.807Z",
    "completedAt": "2026-07-11T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 34,
      "gender": "female",
      "bmi": 26.204950102217545,
      "bloodPressureSystolic": 154,
      "bloodPressureDiastolic": 81,
      "glucoseLevel": 146,
      "cholesterol": 194,
      "heartRate": 80,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7334274099803132,
      "confidence": 0.9488035073078184,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_013",
    "patientId": "pat_034",
    "patientName": "Richard Rodriguez",
    "diseaseType": "hypertension",
    "probability": 0.6112420690122878,
    "riskLevel": "high",
    "confidence": 0.8323346812244004,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-19T11:39:59.807Z",
    "completedAt": "2026-07-16T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 56,
      "gender": "female",
      "bmi": 21.889029629483407,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 73,
      "glucoseLevel": 98,
      "cholesterol": 216,
      "heartRate": 109,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.26641439684308166,
      "confidence": 0.8181908720893585,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_014",
    "patientId": "pat_106",
    "patientName": "Jessica Martinez",
    "diseaseType": "hypertension",
    "probability": 0.6427911460793371,
    "riskLevel": "high",
    "confidence": 0.8111252154054726,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-12T11:39:59.807Z",
    "completedAt": "2026-07-18T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 74,
      "gender": "female",
      "bmi": 25.209392461800018,
      "bloodPressureSystolic": 111,
      "bloodPressureDiastolic": 70,
      "glucoseLevel": 143,
      "cholesterol": 262,
      "heartRate": 88,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6878083638085334,
      "confidence": 0.9629755404134311,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_015",
    "patientId": "pat_064",
    "patientName": "Richard Williams",
    "diseaseType": "heart_disease",
    "probability": 0.3248406199989654,
    "riskLevel": "moderate",
    "confidence": 0.9496802093012408,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.807Z",
    "completedAt": "2026-07-21T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 88,
      "gender": "male",
      "bmi": 33.327865290591035,
      "bloodPressureSystolic": 153,
      "bloodPressureDiastolic": 73,
      "glucoseLevel": 90,
      "cholesterol": 214,
      "heartRate": 98,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.1804470276793615,
      "confidence": 0.9462771340805582,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_016",
    "patientId": "pat_010",
    "patientName": "Thomas Jones",
    "diseaseType": "hypertension",
    "probability": 0.9984221678267649,
    "riskLevel": "moderate",
    "confidence": 0.9319991100626274,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.807Z",
    "completedAt": "2026-07-14T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 33,
      "gender": "female",
      "bmi": 27.58933520716766,
      "bloodPressureSystolic": 139,
      "bloodPressureDiastolic": 70,
      "glucoseLevel": 127,
      "cholesterol": 174,
      "heartRate": 92,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.11034116067407107,
      "confidence": 0.969808104218816,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_017",
    "patientId": "pat_108",
    "patientName": "David Jones",
    "diseaseType": "cancer_risk",
    "probability": 0.3144125108690077,
    "riskLevel": "critical",
    "confidence": 0.8685099675628378,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-12T11:39:59.807Z",
    "completedAt": "2026-07-21T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 77,
      "gender": "male",
      "bmi": 26.738538862228246,
      "bloodPressureSystolic": 149,
      "bloodPressureDiastolic": 85,
      "glucoseLevel": 131,
      "cholesterol": 267,
      "heartRate": 110,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6252576614751381,
      "confidence": 0.9542646818784707,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_018",
    "patientId": "pat_017",
    "patientName": "William Williams",
    "diseaseType": "diabetes",
    "probability": 0.09213222748679195,
    "riskLevel": "high",
    "confidence": 0.8495741534428333,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.807Z",
    "completedAt": "2026-07-14T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 30,
      "gender": "male",
      "bmi": 22.58750972938378,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 94,
      "glucoseLevel": 105,
      "cholesterol": 207,
      "heartRate": 99,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6646905174668638,
      "confidence": 0.9271068970880378,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_019",
    "patientId": "pat_100",
    "patientName": "David Brown",
    "diseaseType": "hypertension",
    "probability": 0.7268146116277056,
    "riskLevel": "moderate",
    "confidence": 0.8427645266829931,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.807Z",
    "completedAt": "2026-07-11T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 56,
      "gender": "female",
      "bmi": 33.3412142784263,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 83,
      "glucoseLevel": 189,
      "cholesterol": 265,
      "heartRate": 83,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.5140274595186243,
      "confidence": 0.7956094263710136,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_020",
    "patientId": "pat_080",
    "patientName": "Nancy Thomas",
    "diseaseType": "kidney_disease",
    "probability": 0.02613856187808805,
    "riskLevel": "critical",
    "confidence": 0.9381986116360386,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 33,
      "gender": "female",
      "bmi": 21.478720729483957,
      "bloodPressureSystolic": 127,
      "bloodPressureDiastolic": 88,
      "glucoseLevel": 97,
      "cholesterol": 220,
      "heartRate": 97,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.4645147938607709,
      "confidence": 0.7925395472776661,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_021",
    "patientId": "pat_003",
    "patientName": "Jessica Martinez",
    "diseaseType": "cancer_risk",
    "probability": 0.9629628658529793,
    "riskLevel": "low",
    "confidence": 0.7257568257178467,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-19T11:39:59.807Z",
    "completedAt": "2026-07-13T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 88,
      "gender": "male",
      "bmi": 27.437562753675863,
      "bloodPressureSystolic": 127,
      "bloodPressureDiastolic": 94,
      "glucoseLevel": 100,
      "cholesterol": 196,
      "heartRate": 90,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.2798615987695834,
      "confidence": 0.92749846242108,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_022",
    "patientId": "pat_120",
    "patientName": "Maria Rodriguez",
    "diseaseType": "kidney_disease",
    "probability": 0.726301177317386,
    "riskLevel": "moderate",
    "confidence": 0.826878489361955,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.807Z",
    "completedAt": "2026-07-21T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 30,
      "gender": "female",
      "bmi": 34.28736313028786,
      "bloodPressureSystolic": 149,
      "bloodPressureDiastolic": 84,
      "glucoseLevel": 191,
      "cholesterol": 225,
      "heartRate": 97,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.5074693136762393,
      "confidence": 0.7414391585953622,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_023",
    "patientId": "pat_020",
    "patientName": "Richard Brown",
    "diseaseType": "heart_disease",
    "probability": 0.30692984164480164,
    "riskLevel": "high",
    "confidence": 0.86224741771254,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.807Z",
    "completedAt": "2026-07-20T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 26,
      "gender": "female",
      "bmi": 25.35176382858941,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 74,
      "glucoseLevel": 165,
      "cholesterol": 195,
      "heartRate": 75,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.5200486344732475,
      "confidence": 0.7261332967668822,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_024",
    "patientId": "pat_022",
    "patientName": "Maria Gonzalez",
    "diseaseType": "cancer_risk",
    "probability": 0.9331469684895937,
    "riskLevel": "high",
    "confidence": 0.8684659001739219,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.807Z",
    "completedAt": "2026-07-13T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 43,
      "gender": "male",
      "bmi": 29.72634018978691,
      "bloodPressureSystolic": 110,
      "bloodPressureDiastolic": 78,
      "glucoseLevel": 126,
      "cholesterol": 277,
      "heartRate": 109,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8731199973416217,
      "confidence": 0.8913190234218933,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_025",
    "patientId": "pat_061",
    "patientName": "William Miller",
    "diseaseType": "kidney_disease",
    "probability": 0.08651973055954498,
    "riskLevel": "critical",
    "confidence": 0.8922132912676682,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.807Z",
    "completedAt": "2026-07-15T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 57,
      "gender": "female",
      "bmi": 27.709782433670718,
      "bloodPressureSystolic": 157,
      "bloodPressureDiastolic": 70,
      "glucoseLevel": 123,
      "cholesterol": 217,
      "heartRate": 68,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.9891193724340009,
      "confidence": 0.9235558962844949,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_026",
    "patientId": "pat_005",
    "patientName": "Maria Martinez",
    "diseaseType": "cancer_risk",
    "probability": 0.003915899966873693,
    "riskLevel": "moderate",
    "confidence": 0.7501154449081072,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.807Z",
    "completedAt": "2026-07-12T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 59,
      "gender": "male",
      "bmi": 28.84557287443712,
      "bloodPressureSystolic": 142,
      "bloodPressureDiastolic": 94,
      "glucoseLevel": 155,
      "cholesterol": 275,
      "heartRate": 72,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8214468102406939,
      "confidence": 0.9314131997297594,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_027",
    "patientId": "pat_027",
    "patientName": "Patricia Wilson",
    "diseaseType": "hypertension",
    "probability": 0.42911178873365274,
    "riskLevel": "low",
    "confidence": 0.7633049026416853,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.807Z",
    "completedAt": "2026-07-18T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 79,
      "gender": "male",
      "bmi": 34.46398689310688,
      "bloodPressureSystolic": 155,
      "bloodPressureDiastolic": 83,
      "glucoseLevel": 115,
      "cholesterol": 227,
      "heartRate": 81,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6980590438282961,
      "confidence": 0.9143431161952508,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_028",
    "patientId": "pat_089",
    "patientName": "Charles Johnson",
    "diseaseType": "diabetes",
    "probability": 0.3067213245264063,
    "riskLevel": "moderate",
    "confidence": 0.848099971412129,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.807Z",
    "completedAt": "2026-07-16T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 69,
      "gender": "female",
      "bmi": 30.75997317831366,
      "bloodPressureSystolic": 148,
      "bloodPressureDiastolic": 80,
      "glucoseLevel": 137,
      "cholesterol": 154,
      "heartRate": 98,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.24538285895456335,
      "confidence": 0.7499746469975986,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_029",
    "patientId": "pat_078",
    "patientName": "Linda Williams",
    "diseaseType": "stroke",
    "probability": 0.501140158531652,
    "riskLevel": "moderate",
    "confidence": 0.7814818589357708,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-21T11:39:59.807Z",
    "completedAt": "2026-07-12T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 83,
      "gender": "male",
      "bmi": 26.523597893456635,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 96,
      "glucoseLevel": 148,
      "cholesterol": 182,
      "heartRate": 87,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6831421500902332,
      "confidence": 0.8989399221698421,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_030",
    "patientId": "pat_112",
    "patientName": "Thomas Taylor",
    "diseaseType": "cancer_risk",
    "probability": 0.22710026019618945,
    "riskLevel": "low",
    "confidence": 0.8584126211466354,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 82,
      "gender": "male",
      "bmi": 21.8921321637818,
      "bloodPressureSystolic": 122,
      "bloodPressureDiastolic": 73,
      "glucoseLevel": 96,
      "cholesterol": 174,
      "heartRate": 83,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.48227688069698027,
      "confidence": 0.9420758332024057,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_031",
    "patientId": "pat_053",
    "patientName": "Robert Miller",
    "diseaseType": "stroke",
    "probability": 0.37304310312851763,
    "riskLevel": "moderate",
    "confidence": 0.9353751070513446,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.807Z",
    "completedAt": "2026-07-21T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 25,
      "gender": "male",
      "bmi": 23.329429977693163,
      "bloodPressureSystolic": 143,
      "bloodPressureDiastolic": 82,
      "glucoseLevel": 135,
      "cholesterol": 184,
      "heartRate": 73,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.36949442740700267,
      "confidence": 0.9772546383578985,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_032",
    "patientId": "pat_116",
    "patientName": "Patricia Davis",
    "diseaseType": "cancer_risk",
    "probability": 0.4699966250054314,
    "riskLevel": "moderate",
    "confidence": 0.920122426569312,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 21,
      "gender": "male",
      "bmi": 34.85249766361369,
      "bloodPressureSystolic": 122,
      "bloodPressureDiastolic": 70,
      "glucoseLevel": 135,
      "cholesterol": 183,
      "heartRate": 104,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.2188964186600304,
      "confidence": 0.8133692162787831,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_033",
    "patientId": "pat_039",
    "patientName": "Linda Anderson",
    "diseaseType": "stroke",
    "probability": 0.8450179090204895,
    "riskLevel": "critical",
    "confidence": 0.9459931091467738,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 31,
      "gender": "female",
      "bmi": 28.862169059639854,
      "bloodPressureSystolic": 149,
      "bloodPressureDiastolic": 73,
      "glucoseLevel": 88,
      "cholesterol": 225,
      "heartRate": 104,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6314276532843464,
      "confidence": 0.7277926913157597,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_034",
    "patientId": "pat_087",
    "patientName": "Joseph Martinez",
    "diseaseType": "kidney_disease",
    "probability": 0.8684900927644446,
    "riskLevel": "critical",
    "confidence": 0.7853013607074228,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.807Z",
    "completedAt": "2026-07-12T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 55,
      "gender": "female",
      "bmi": 29.58040811408846,
      "bloodPressureSystolic": 127,
      "bloodPressureDiastolic": 72,
      "glucoseLevel": 179,
      "cholesterol": 188,
      "heartRate": 99,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7142437080046293,
      "confidence": 0.7711995484494661,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_035",
    "patientId": "pat_102",
    "patientName": "Susan Martin",
    "diseaseType": "diabetes",
    "probability": 0.5632451093159244,
    "riskLevel": "critical",
    "confidence": 0.8945712727861033,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.807Z",
    "completedAt": "2026-07-17T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 22,
      "gender": "male",
      "bmi": 32.50766543102824,
      "bloodPressureSystolic": 123,
      "bloodPressureDiastolic": 77,
      "glucoseLevel": 108,
      "cholesterol": 224,
      "heartRate": 84,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.47498826386736825,
      "confidence": 0.7541337450066398,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_036",
    "patientId": "pat_097",
    "patientName": "David Thomas",
    "diseaseType": "stroke",
    "probability": 0.9819790480406175,
    "riskLevel": "low",
    "confidence": 0.897028156289393,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.807Z",
    "completedAt": "2026-07-13T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 41,
      "gender": "male",
      "bmi": 34.10056661531626,
      "bloodPressureSystolic": 140,
      "bloodPressureDiastolic": 72,
      "glucoseLevel": 194,
      "cholesterol": 266,
      "heartRate": 77,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6863893132513799,
      "confidence": 0.9252015316825143,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_037",
    "patientId": "pat_092",
    "patientName": "Jessica Williams",
    "diseaseType": "cancer_risk",
    "probability": 0.8951421794409768,
    "riskLevel": "low",
    "confidence": 0.9483434351804476,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 76,
      "gender": "female",
      "bmi": 22.526024004285727,
      "bloodPressureSystolic": 130,
      "bloodPressureDiastolic": 77,
      "glucoseLevel": 154,
      "cholesterol": 205,
      "heartRate": 85,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.13391771111038187,
      "confidence": 0.8689363784273781,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_038",
    "patientId": "pat_063",
    "patientName": "Sarah Hernandez",
    "diseaseType": "hypertension",
    "probability": 0.7733982761812297,
    "riskLevel": "moderate",
    "confidence": 0.8834288044317361,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.807Z",
    "completedAt": "2026-07-12T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 63,
      "gender": "female",
      "bmi": 20.824095195629056,
      "bloodPressureSystolic": 126,
      "bloodPressureDiastolic": 70,
      "glucoseLevel": 113,
      "cholesterol": 185,
      "heartRate": 108,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.3683752768831352,
      "confidence": 0.8789735600915534,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_039",
    "patientId": "pat_029",
    "patientName": "David Williams",
    "diseaseType": "heart_disease",
    "probability": 0.3787954361644602,
    "riskLevel": "moderate",
    "confidence": 0.9776842914975648,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 37,
      "gender": "male",
      "bmi": 29.26513533689839,
      "bloodPressureSystolic": 139,
      "bloodPressureDiastolic": 73,
      "glucoseLevel": 135,
      "cholesterol": 173,
      "heartRate": 94,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6232824470018182,
      "confidence": 0.9101673327909063,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_040",
    "patientId": "pat_003",
    "patientName": "Jessica Martinez",
    "diseaseType": "stroke",
    "probability": 0.50142346850866,
    "riskLevel": "moderate",
    "confidence": 0.904349883148166,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.807Z",
    "completedAt": "2026-07-14T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 88,
      "gender": "male",
      "bmi": 27.437562753675863,
      "bloodPressureSystolic": 127,
      "bloodPressureDiastolic": 94,
      "glucoseLevel": 100,
      "cholesterol": 163,
      "heartRate": 90,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.4270368751070024,
      "confidence": 0.7492046123078115,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_041",
    "patientId": "pat_083",
    "patientName": "Jessica Anderson",
    "diseaseType": "diabetes",
    "probability": 0.6090688899409695,
    "riskLevel": "high",
    "confidence": 0.7364901958007195,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.807Z",
    "completedAt": "2026-07-17T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 81,
      "gender": "male",
      "bmi": 28.884967797571115,
      "bloodPressureSystolic": 140,
      "bloodPressureDiastolic": 88,
      "glucoseLevel": 95,
      "cholesterol": 243,
      "heartRate": 91,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.27080269718479066,
      "confidence": 0.8026969232935675,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_042",
    "patientId": "pat_095",
    "patientName": "Thomas Thomas",
    "diseaseType": "diabetes",
    "probability": 0.3862176829258057,
    "riskLevel": "high",
    "confidence": 0.8302238257075606,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-19T11:39:59.807Z",
    "completedAt": "2026-07-16T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 84,
      "gender": "female",
      "bmi": 33.84453466699438,
      "bloodPressureSystolic": 152,
      "bloodPressureDiastolic": 87,
      "glucoseLevel": 141,
      "cholesterol": 229,
      "heartRate": 98,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7895497870126097,
      "confidence": 0.935536346543492,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_043",
    "patientId": "pat_077",
    "patientName": "Sarah Miller",
    "diseaseType": "diabetes",
    "probability": 0.0988624918125427,
    "riskLevel": "critical",
    "confidence": 0.7271303598741141,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.807Z",
    "completedAt": "2026-07-18T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 59,
      "gender": "male",
      "bmi": 22.224660254679943,
      "bloodPressureSystolic": 110,
      "bloodPressureDiastolic": 76,
      "glucoseLevel": 88,
      "cholesterol": 174,
      "heartRate": 91,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6876530067074615,
      "confidence": 0.8218412713350367,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_044",
    "patientId": "pat_069",
    "patientName": "Susan Anderson",
    "diseaseType": "cancer_risk",
    "probability": 0.6759462191560958,
    "riskLevel": "moderate",
    "confidence": 0.9027620978955884,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.807Z",
    "completedAt": "2026-07-11T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 34,
      "gender": "female",
      "bmi": 26.204950102217545,
      "bloodPressureSystolic": 154,
      "bloodPressureDiastolic": 81,
      "glucoseLevel": 146,
      "cholesterol": 205,
      "heartRate": 80,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8285486439924827,
      "confidence": 0.9544198395873515,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_045",
    "patientId": "pat_107",
    "patientName": "Barbara Martinez",
    "diseaseType": "kidney_disease",
    "probability": 0.4809052961553949,
    "riskLevel": "critical",
    "confidence": 0.8109971629988241,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-21T11:39:59.807Z",
    "completedAt": "2026-07-20T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 84,
      "gender": "male",
      "bmi": 33.59995288324925,
      "bloodPressureSystolic": 124,
      "bloodPressureDiastolic": 94,
      "glucoseLevel": 90,
      "cholesterol": 276,
      "heartRate": 97,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7030318135329567,
      "confidence": 0.718304350351208,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_046",
    "patientId": "pat_014",
    "patientName": "Maria Hernandez",
    "diseaseType": "hypertension",
    "probability": 0.3732979896384242,
    "riskLevel": "critical",
    "confidence": 0.7015039587817256,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 79,
      "gender": "female",
      "bmi": 29.23350121078108,
      "bloodPressureSystolic": 158,
      "bloodPressureDiastolic": 85,
      "glucoseLevel": 93,
      "cholesterol": 233,
      "heartRate": 66,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.36648856908558713,
      "confidence": 0.8204644332065227,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_047",
    "patientId": "pat_055",
    "patientName": "Joseph Lopez",
    "diseaseType": "kidney_disease",
    "probability": 0.7680018204883465,
    "riskLevel": "high",
    "confidence": 0.8739407567168909,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 30,
      "gender": "male",
      "bmi": 20.639779176339406,
      "bloodPressureSystolic": 156,
      "bloodPressureDiastolic": 99,
      "glucoseLevel": 177,
      "cholesterol": 241,
      "heartRate": 75,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6823493370435225,
      "confidence": 0.702353812424978,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_048",
    "patientId": "pat_025",
    "patientName": "Joseph Gonzalez",
    "diseaseType": "stroke",
    "probability": 0.47782458368642455,
    "riskLevel": "high",
    "confidence": 0.9222407707272093,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-19T11:39:59.807Z",
    "completedAt": "2026-07-17T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 53,
      "gender": "female",
      "bmi": 31.239290259746205,
      "bloodPressureSystolic": 132,
      "bloodPressureDiastolic": 75,
      "glucoseLevel": 87,
      "cholesterol": 239,
      "heartRate": 96,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8518208292518026,
      "confidence": 0.7740568895596096,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_049",
    "patientId": "pat_027",
    "patientName": "Patricia Wilson",
    "diseaseType": "stroke",
    "probability": 0.4593064963860599,
    "riskLevel": "critical",
    "confidence": 0.7986730847656239,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.807Z",
    "completedAt": "2026-07-18T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 79,
      "gender": "male",
      "bmi": 34.46398689310688,
      "bloodPressureSystolic": 155,
      "bloodPressureDiastolic": 83,
      "glucoseLevel": 115,
      "cholesterol": 259,
      "heartRate": 81,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.3336541924620232,
      "confidence": 0.9292390795921759,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_050",
    "patientId": "pat_075",
    "patientName": "Thomas Thomas",
    "diseaseType": "diabetes",
    "probability": 0.712693935520944,
    "riskLevel": "critical",
    "confidence": 0.7806341621763392,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-20T11:39:59.807Z",
    "completedAt": "2026-07-20T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 54,
      "gender": "male",
      "bmi": 20.45258867189398,
      "bloodPressureSystolic": 121,
      "bloodPressureDiastolic": 75,
      "glucoseLevel": 149,
      "cholesterol": 205,
      "heartRate": 69,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.9944057290214932,
      "confidence": 0.7263245857357231,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_051",
    "patientId": "pat_047",
    "patientName": "Christopher Johnson",
    "diseaseType": "diabetes",
    "probability": 0.12199944126614526,
    "riskLevel": "critical",
    "confidence": 0.8141146146682054,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-17T11:39:59.807Z",
    "completedAt": "2026-07-17T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 82,
      "gender": "male",
      "bmi": 26.948052058060213,
      "bloodPressureSystolic": 153,
      "bloodPressureDiastolic": 90,
      "glucoseLevel": 194,
      "cholesterol": 175,
      "heartRate": 65,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7242245819222957,
      "confidence": 0.7962985277373076,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_052",
    "patientId": "pat_011",
    "patientName": "Karen Anderson",
    "diseaseType": "diabetes",
    "probability": 0.08883823866414386,
    "riskLevel": "moderate",
    "confidence": 0.903543376615606,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.807Z",
    "completedAt": "2026-07-14T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 19,
      "gender": "male",
      "bmi": 20.118560477538008,
      "bloodPressureSystolic": 120,
      "bloodPressureDiastolic": 72,
      "glucoseLevel": 182,
      "cholesterol": 162,
      "heartRate": 66,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8809075490109152,
      "confidence": 0.7603469283238312,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_053",
    "patientId": "pat_014",
    "patientName": "Maria Hernandez",
    "diseaseType": "diabetes",
    "probability": 0.6955029657944841,
    "riskLevel": "moderate",
    "confidence": 0.7038984851504114,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-20T11:39:59.807Z",
    "completedAt": "2026-07-18T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 79,
      "gender": "female",
      "bmi": 29.23350121078108,
      "bloodPressureSystolic": 158,
      "bloodPressureDiastolic": 85,
      "glucoseLevel": 93,
      "cholesterol": 231,
      "heartRate": 66,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.859231229562962,
      "confidence": 0.9713460097985893,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_054",
    "patientId": "pat_113",
    "patientName": "Susan Jones",
    "diseaseType": "diabetes",
    "probability": 0.3067928230622642,
    "riskLevel": "low",
    "confidence": 0.9627976937930856,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.807Z",
    "completedAt": "2026-07-11T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 44,
      "gender": "male",
      "bmi": 25.57059767856378,
      "bloodPressureSystolic": 129,
      "bloodPressureDiastolic": 77,
      "glucoseLevel": 150,
      "cholesterol": 269,
      "heartRate": 95,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.4125862321585745,
      "confidence": 0.8734715474584289,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_055",
    "patientId": "pat_028",
    "patientName": "Susan Gonzalez",
    "diseaseType": "diabetes",
    "probability": 0.3248276104581296,
    "riskLevel": "moderate",
    "confidence": 0.8588352275121826,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-21T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 62,
      "gender": "male",
      "bmi": 21.088583150386732,
      "bloodPressureSystolic": 130,
      "bloodPressureDiastolic": 95,
      "glucoseLevel": 184,
      "cholesterol": 178,
      "heartRate": 81,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.3926235523019944,
      "confidence": 0.9120342745849135,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_056",
    "patientId": "pat_062",
    "patientName": "Nancy Jones",
    "diseaseType": "hypertension",
    "probability": 0.28089738074225534,
    "riskLevel": "critical",
    "confidence": 0.7801326003092753,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.807Z",
    "completedAt": "2026-07-18T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 62,
      "gender": "female",
      "bmi": 26.905647992532987,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 77,
      "glucoseLevel": 126,
      "cholesterol": 225,
      "heartRate": 75,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.5973400059926764,
      "confidence": 0.8322012847499439,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_057",
    "patientId": "pat_076",
    "patientName": "Michael Jones",
    "diseaseType": "hypertension",
    "probability": 0.5990312044345408,
    "riskLevel": "moderate",
    "confidence": 0.7213495138343556,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.807Z",
    "completedAt": "2026-07-18T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 65,
      "gender": "female",
      "bmi": 23.67879603416425,
      "bloodPressureSystolic": 155,
      "bloodPressureDiastolic": 93,
      "glucoseLevel": 145,
      "cholesterol": 181,
      "heartRate": 96,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8058045119603894,
      "confidence": 0.9320433835203996,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_058",
    "patientId": "pat_020",
    "patientName": "Richard Brown",
    "diseaseType": "heart_disease",
    "probability": 0.11184852718004312,
    "riskLevel": "moderate",
    "confidence": 0.7015849276871637,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-17T11:39:59.807Z",
    "completedAt": "2026-07-16T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 26,
      "gender": "female",
      "bmi": 25.35176382858941,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 74,
      "glucoseLevel": 165,
      "cholesterol": 207,
      "heartRate": 75,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.1484080557865619,
      "confidence": 0.7289448653314472,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_059",
    "patientId": "pat_013",
    "patientName": "Linda Johnson",
    "diseaseType": "cancer_risk",
    "probability": 0.5910869121235434,
    "riskLevel": "low",
    "confidence": 0.8835004026720258,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.807Z",
    "completedAt": "2026-07-13T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 63,
      "gender": "female",
      "bmi": 22.30406280515861,
      "bloodPressureSystolic": 138,
      "bloodPressureDiastolic": 96,
      "glucoseLevel": 162,
      "cholesterol": 251,
      "heartRate": 98,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6175561672492635,
      "confidence": 0.885023102468675,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_060",
    "patientId": "pat_095",
    "patientName": "Thomas Thomas",
    "diseaseType": "diabetes",
    "probability": 0.563978464535567,
    "riskLevel": "high",
    "confidence": 0.9447699498365573,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.807Z",
    "completedAt": "2026-07-11T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 84,
      "gender": "female",
      "bmi": 33.84453466699438,
      "bloodPressureSystolic": 152,
      "bloodPressureDiastolic": 87,
      "glucoseLevel": 141,
      "cholesterol": 169,
      "heartRate": 98,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.9542835229987019,
      "confidence": 0.8017838934835679,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_061",
    "patientId": "pat_091",
    "patientName": "Joseph Lopez",
    "diseaseType": "cancer_risk",
    "probability": 0.5115872130986867,
    "riskLevel": "high",
    "confidence": 0.8223415283549615,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-21T11:39:59.807Z",
    "completedAt": "2026-07-16T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 67,
      "gender": "female",
      "bmi": 26.464709907887197,
      "bloodPressureSystolic": 158,
      "bloodPressureDiastolic": 75,
      "glucoseLevel": 199,
      "cholesterol": 171,
      "heartRate": 88,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.29425437302374036,
      "confidence": 0.7304314944509323,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_062",
    "patientId": "pat_003",
    "patientName": "Jessica Martinez",
    "diseaseType": "hypertension",
    "probability": 0.7009565871179783,
    "riskLevel": "low",
    "confidence": 0.9473355503670264,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.807Z",
    "completedAt": "2026-07-11T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 88,
      "gender": "male",
      "bmi": 27.437562753675863,
      "bloodPressureSystolic": 127,
      "bloodPressureDiastolic": 94,
      "glucoseLevel": 100,
      "cholesterol": 193,
      "heartRate": 90,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.5840940323840267,
      "confidence": 0.7816361433844599,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_063",
    "patientId": "pat_058",
    "patientName": "William Smith",
    "diseaseType": "stroke",
    "probability": 0.49711197383464023,
    "riskLevel": "critical",
    "confidence": 0.8599084744335417,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-17T11:39:59.807Z",
    "completedAt": "2026-07-13T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 86,
      "gender": "male",
      "bmi": 23.688031217380292,
      "bloodPressureSystolic": 113,
      "bloodPressureDiastolic": 78,
      "glucoseLevel": 120,
      "cholesterol": 191,
      "heartRate": 81,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.21164363328049662,
      "confidence": 0.8471319006050976,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_064",
    "patientId": "pat_097",
    "patientName": "David Thomas",
    "diseaseType": "kidney_disease",
    "probability": 0.9963093653401611,
    "riskLevel": "moderate",
    "confidence": 0.8388437571070849,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.807Z",
    "completedAt": "2026-07-20T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 41,
      "gender": "male",
      "bmi": 34.10056661531626,
      "bloodPressureSystolic": 140,
      "bloodPressureDiastolic": 72,
      "glucoseLevel": 194,
      "cholesterol": 163,
      "heartRate": 77,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.5583585439204782,
      "confidence": 0.7652872048006076,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_065",
    "patientId": "pat_103",
    "patientName": "Joseph Davis",
    "diseaseType": "hypertension",
    "probability": 0.9035242787847204,
    "riskLevel": "moderate",
    "confidence": 0.9319729102014229,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.807Z",
    "completedAt": "2026-07-14T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 46,
      "gender": "female",
      "bmi": 24.144036635725072,
      "bloodPressureSystolic": 123,
      "bloodPressureDiastolic": 96,
      "glucoseLevel": 133,
      "cholesterol": 171,
      "heartRate": 75,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.9364273540721573,
      "confidence": 0.8797527435939443,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_066",
    "patientId": "pat_119",
    "patientName": "Jessica Jackson",
    "diseaseType": "heart_disease",
    "probability": 0.4711866133977225,
    "riskLevel": "critical",
    "confidence": 0.830087086930217,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.807Z",
    "completedAt": "2026-07-15T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 73,
      "gender": "female",
      "bmi": 32.87018682482294,
      "bloodPressureSystolic": 111,
      "bloodPressureDiastolic": 91,
      "glucoseLevel": 150,
      "cholesterol": 273,
      "heartRate": 103,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.05390889507567331,
      "confidence": 0.9357380620707271,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_067",
    "patientId": "pat_008",
    "patientName": "Emily Johnson",
    "diseaseType": "hypertension",
    "probability": 0.048554749437932476,
    "riskLevel": "low",
    "confidence": 0.7777313282227972,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-19T11:39:59.807Z",
    "completedAt": "2026-07-13T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 25,
      "gender": "male",
      "bmi": 23.520971877441465,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 83,
      "glucoseLevel": 84,
      "cholesterol": 160,
      "heartRate": 101,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.828421433235644,
      "confidence": 0.8790840181967787,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_068",
    "patientId": "pat_071",
    "patientName": "Michael Lopez",
    "diseaseType": "stroke",
    "probability": 0.8554719910757298,
    "riskLevel": "high",
    "confidence": 0.8672184122520779,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.807Z",
    "completedAt": "2026-07-16T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 20,
      "gender": "male",
      "bmi": 20.61825079527863,
      "bloodPressureSystolic": 146,
      "bloodPressureDiastolic": 97,
      "glucoseLevel": 157,
      "cholesterol": 273,
      "heartRate": 62,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.670666731850569,
      "confidence": 0.9279201785000448,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_069",
    "patientId": "pat_092",
    "patientName": "Jessica Williams",
    "diseaseType": "stroke",
    "probability": 0.0866807311184079,
    "riskLevel": "critical",
    "confidence": 0.706323635771811,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.807Z",
    "completedAt": "2026-07-21T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 76,
      "gender": "female",
      "bmi": 22.526024004285727,
      "bloodPressureSystolic": 130,
      "bloodPressureDiastolic": 77,
      "glucoseLevel": 154,
      "cholesterol": 266,
      "heartRate": 85,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.11919002976234039,
      "confidence": 0.7307497007430264,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_070",
    "patientId": "pat_045",
    "patientName": "Thomas Martinez",
    "diseaseType": "cancer_risk",
    "probability": 0.7594625320432217,
    "riskLevel": "low",
    "confidence": 0.9186475615548477,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.807Z",
    "completedAt": "2026-07-17T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 90,
      "gender": "male",
      "bmi": 24.42683343676941,
      "bloodPressureSystolic": 132,
      "bloodPressureDiastolic": 97,
      "glucoseLevel": 163,
      "cholesterol": 222,
      "heartRate": 109,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.17819597370468865,
      "confidence": 0.8339653678124036,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_071",
    "patientId": "pat_051",
    "patientName": "David Anderson",
    "diseaseType": "diabetes",
    "probability": 0.08997611470164768,
    "riskLevel": "critical",
    "confidence": 0.8683339743771961,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-20T11:39:59.807Z",
    "completedAt": "2026-07-14T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 37,
      "gender": "female",
      "bmi": 34.51322035809847,
      "bloodPressureSystolic": 131,
      "bloodPressureDiastolic": 93,
      "glucoseLevel": 181,
      "cholesterol": 154,
      "heartRate": 83,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.4757697204669089,
      "confidence": 0.8122037692111049,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_072",
    "patientId": "pat_021",
    "patientName": "Barbara Smith",
    "diseaseType": "stroke",
    "probability": 0.869650787779301,
    "riskLevel": "high",
    "confidence": 0.7240587732536725,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-12T11:39:59.807Z",
    "completedAt": "2026-07-15T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 52,
      "gender": "female",
      "bmi": 22.709316209614084,
      "bloodPressureSystolic": 150,
      "bloodPressureDiastolic": 91,
      "glucoseLevel": 129,
      "cholesterol": 173,
      "heartRate": 98,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.4488472105106107,
      "confidence": 0.8812765860829141,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_073",
    "patientId": "pat_079",
    "patientName": "Maria Hernandez",
    "diseaseType": "stroke",
    "probability": 0.8478394863921659,
    "riskLevel": "moderate",
    "confidence": 0.7207364733619269,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-12T11:39:59.807Z",
    "completedAt": "2026-07-12T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 18,
      "gender": "female",
      "bmi": 34.7378535389002,
      "bloodPressureSystolic": 136,
      "bloodPressureDiastolic": 71,
      "glucoseLevel": 80,
      "cholesterol": 224,
      "heartRate": 70,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.05001928697701863,
      "confidence": 0.7596890045015752,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_074",
    "patientId": "pat_014",
    "patientName": "Maria Hernandez",
    "diseaseType": "diabetes",
    "probability": 0.16688742977664262,
    "riskLevel": "moderate",
    "confidence": 0.7516227580192306,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.807Z",
    "completedAt": "2026-07-12T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 79,
      "gender": "female",
      "bmi": 29.23350121078108,
      "bloodPressureSystolic": 158,
      "bloodPressureDiastolic": 85,
      "glucoseLevel": 93,
      "cholesterol": 171,
      "heartRate": 66,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.30831625594998513,
      "confidence": 0.7192089547381751,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_075",
    "patientId": "pat_041",
    "patientName": "William Lopez",
    "diseaseType": "stroke",
    "probability": 0.578376605220447,
    "riskLevel": "high",
    "confidence": 0.8247221939283996,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-19T11:39:59.807Z",
    "completedAt": "2026-07-11T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 74,
      "gender": "female",
      "bmi": 32.61595862235191,
      "bloodPressureSystolic": 142,
      "bloodPressureDiastolic": 76,
      "glucoseLevel": 147,
      "cholesterol": 158,
      "heartRate": 63,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.2286579199927794,
      "confidence": 0.7819139946401671,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_076",
    "patientId": "pat_079",
    "patientName": "Maria Hernandez",
    "diseaseType": "stroke",
    "probability": 0.04075166833707633,
    "riskLevel": "low",
    "confidence": 0.8014160891945021,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-19T11:39:59.807Z",
    "completedAt": "2026-07-18T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 18,
      "gender": "female",
      "bmi": 34.7378535389002,
      "bloodPressureSystolic": 136,
      "bloodPressureDiastolic": 71,
      "glucoseLevel": 80,
      "cholesterol": 248,
      "heartRate": 70,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.381419484918321,
      "confidence": 0.9423086212177105,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_077",
    "patientId": "pat_020",
    "patientName": "Richard Brown",
    "diseaseType": "hypertension",
    "probability": 0.5400691124633378,
    "riskLevel": "low",
    "confidence": 0.8443761067641853,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.807Z",
    "completedAt": "2026-07-17T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 26,
      "gender": "female",
      "bmi": 25.35176382858941,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 74,
      "glucoseLevel": 165,
      "cholesterol": 242,
      "heartRate": 75,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.18069967681239052,
      "confidence": 0.9121332333223139,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_078",
    "patientId": "pat_051",
    "patientName": "David Anderson",
    "diseaseType": "hypertension",
    "probability": 0.7712312322992858,
    "riskLevel": "low",
    "confidence": 0.8847333769216096,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-20T11:39:59.807Z",
    "completedAt": "2026-07-16T11:39:59.807Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 37,
      "gender": "female",
      "bmi": 34.51322035809847,
      "bloodPressureSystolic": 131,
      "bloodPressureDiastolic": 93,
      "glucoseLevel": 181,
      "cholesterol": 193,
      "heartRate": 83,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.797140097871029,
      "confidence": 0.8693352365639391,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_079",
    "patientId": "pat_097",
    "patientName": "David Thomas",
    "diseaseType": "heart_disease",
    "probability": 0.9018681520921651,
    "riskLevel": "moderate",
    "confidence": 0.7704495406519926,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-17T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 41,
      "gender": "male",
      "bmi": 34.10056661531626,
      "bloodPressureSystolic": 140,
      "bloodPressureDiastolic": 72,
      "glucoseLevel": 194,
      "cholesterol": 265,
      "heartRate": 77,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.2976945469995319,
      "confidence": 0.8319093081207428,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_080",
    "patientId": "pat_033",
    "patientName": "Patricia Jones",
    "diseaseType": "stroke",
    "probability": 0.28738681602418337,
    "riskLevel": "critical",
    "confidence": 0.7397702571265998,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.807Z",
    "completedAt": "2026-07-19T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 87,
      "gender": "male",
      "bmi": 21.10130931218486,
      "bloodPressureSystolic": 122,
      "bloodPressureDiastolic": 89,
      "glucoseLevel": 163,
      "cholesterol": 192,
      "heartRate": 110,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7170242104811575,
      "confidence": 0.7507509752706205,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_081",
    "patientId": "pat_003",
    "patientName": "Jessica Martinez",
    "diseaseType": "stroke",
    "probability": 0.9272142193511899,
    "riskLevel": "critical",
    "confidence": 0.8231221937568625,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-12T11:39:59.807Z",
    "completedAt": "2026-07-16T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 88,
      "gender": "male",
      "bmi": 27.437562753675863,
      "bloodPressureSystolic": 127,
      "bloodPressureDiastolic": 94,
      "glucoseLevel": 100,
      "cholesterol": 262,
      "heartRate": 90,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.999014065526167,
      "confidence": 0.7219421413784832,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_082",
    "patientId": "pat_042",
    "patientName": "Barbara Martinez",
    "diseaseType": "diabetes",
    "probability": 0.2549575595535146,
    "riskLevel": "low",
    "confidence": 0.8142659690554874,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.807Z",
    "completedAt": "2026-07-14T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 61,
      "gender": "male",
      "bmi": 26.37060488822273,
      "bloodPressureSystolic": 110,
      "bloodPressureDiastolic": 71,
      "glucoseLevel": 120,
      "cholesterol": 252,
      "heartRate": 105,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6848705447316437,
      "confidence": 0.8652574745580328,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_083",
    "patientId": "pat_082",
    "patientName": "Nancy Brown",
    "diseaseType": "kidney_disease",
    "probability": 0.5331002126726457,
    "riskLevel": "moderate",
    "confidence": 0.8048126641652631,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.807Z",
    "completedAt": "2026-07-13T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 43,
      "gender": "female",
      "bmi": 22.71484456946894,
      "bloodPressureSystolic": 154,
      "bloodPressureDiastolic": 80,
      "glucoseLevel": 182,
      "cholesterol": 173,
      "heartRate": 62,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.560634695510379,
      "confidence": 0.8724788546200963,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_084",
    "patientId": "pat_111",
    "patientName": "Sarah Thomas",
    "diseaseType": "heart_disease",
    "probability": 0.11242160511507027,
    "riskLevel": "low",
    "confidence": 0.8331943505087515,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.807Z",
    "completedAt": "2026-07-13T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 51,
      "gender": "male",
      "bmi": 32.92071034107496,
      "bloodPressureSystolic": 120,
      "bloodPressureDiastolic": 95,
      "glucoseLevel": 183,
      "cholesterol": 174,
      "heartRate": 105,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.30369318749613483,
      "confidence": 0.9275622065004441,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_085",
    "patientId": "pat_004",
    "patientName": "Maria Lopez",
    "diseaseType": "hypertension",
    "probability": 0.8584428316369749,
    "riskLevel": "moderate",
    "confidence": 0.817815375757297,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.807Z",
    "completedAt": "2026-07-17T11:39:59.807Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 48,
      "gender": "male",
      "bmi": 31.958835940384766,
      "bloodPressureSystolic": 125,
      "bloodPressureDiastolic": 76,
      "glucoseLevel": 95,
      "cholesterol": 187,
      "heartRate": 63,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8765695692302244,
      "confidence": 0.9792468265943807,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_086",
    "patientId": "pat_010",
    "patientName": "Thomas Jones",
    "diseaseType": "stroke",
    "probability": 0.8973123534966208,
    "riskLevel": "low",
    "confidence": 0.7782550166743913,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.807Z",
    "completedAt": "2026-07-20T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 33,
      "gender": "female",
      "bmi": 27.58933520716766,
      "bloodPressureSystolic": 139,
      "bloodPressureDiastolic": 70,
      "glucoseLevel": 127,
      "cholesterol": 175,
      "heartRate": 92,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8178806077916203,
      "confidence": 0.8663720058964988,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_087",
    "patientId": "pat_110",
    "patientName": "Joseph Moore",
    "diseaseType": "heart_disease",
    "probability": 0.09591480890390824,
    "riskLevel": "low",
    "confidence": 0.9138882332474688,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-20T11:39:59.807Z",
    "completedAt": "2026-07-15T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 60,
      "gender": "male",
      "bmi": 28.134097692340056,
      "bloodPressureSystolic": 137,
      "bloodPressureDiastolic": 97,
      "glucoseLevel": 143,
      "cholesterol": 233,
      "heartRate": 102,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.24557163349951383,
      "confidence": 0.7437134678547657,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_088",
    "patientId": "pat_033",
    "patientName": "Patricia Jones",
    "diseaseType": "hypertension",
    "probability": 0.04480392344425632,
    "riskLevel": "high",
    "confidence": 0.7803552027515733,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.807Z",
    "completedAt": "2026-07-12T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 87,
      "gender": "male",
      "bmi": 21.10130931218486,
      "bloodPressureSystolic": 122,
      "bloodPressureDiastolic": 89,
      "glucoseLevel": 163,
      "cholesterol": 225,
      "heartRate": 110,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8269763358129859,
      "confidence": 0.8634034225371321,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_089",
    "patientId": "pat_057",
    "patientName": "Maria Wilson",
    "diseaseType": "cancer_risk",
    "probability": 0.8446577186781783,
    "riskLevel": "low",
    "confidence": 0.9237505500617859,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.807Z",
    "completedAt": "2026-07-12T11:39:59.807Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 55,
      "gender": "female",
      "bmi": 24.483722263164267,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 86,
      "glucoseLevel": 185,
      "cholesterol": 194,
      "heartRate": 66,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6668794749466299,
      "confidence": 0.7377946077535582,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_090",
    "patientId": "pat_082",
    "patientName": "Nancy Brown",
    "diseaseType": "heart_disease",
    "probability": 0.355820630834199,
    "riskLevel": "moderate",
    "confidence": 0.81359993892814,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-20T11:39:59.807Z",
    "completedAt": "2026-07-20T11:39:59.807Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 43,
      "gender": "female",
      "bmi": 22.71484456946894,
      "bloodPressureSystolic": 154,
      "bloodPressureDiastolic": 80,
      "glucoseLevel": 182,
      "cholesterol": 274,
      "heartRate": 62,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.9228966853310948,
      "confidence": 0.9776175125929973,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_091",
    "patientId": "pat_100",
    "patientName": "David Brown",
    "diseaseType": "kidney_disease",
    "probability": 0.5300879264636256,
    "riskLevel": "moderate",
    "confidence": 0.9529901752131614,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.808Z",
    "completedAt": "2026-07-14T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 56,
      "gender": "female",
      "bmi": 33.3412142784263,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 83,
      "glucoseLevel": 189,
      "cholesterol": 215,
      "heartRate": 83,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8467675087039808,
      "confidence": 0.8408402435328536,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_092",
    "patientId": "pat_095",
    "patientName": "Thomas Thomas",
    "diseaseType": "stroke",
    "probability": 0.6746227983355734,
    "riskLevel": "high",
    "confidence": 0.9715669570288059,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.808Z",
    "completedAt": "2026-07-19T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 84,
      "gender": "female",
      "bmi": 33.84453466699438,
      "bloodPressureSystolic": 152,
      "bloodPressureDiastolic": 87,
      "glucoseLevel": 141,
      "cholesterol": 163,
      "heartRate": 98,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.970095637475164,
      "confidence": 0.8549638499634107,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_093",
    "patientId": "pat_085",
    "patientName": "Barbara Gonzalez",
    "diseaseType": "hypertension",
    "probability": 0.25151077651456555,
    "riskLevel": "moderate",
    "confidence": 0.9382880927919266,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-17T11:39:59.808Z",
    "completedAt": "2026-07-20T11:39:59.808Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 19,
      "gender": "male",
      "bmi": 30.029868621986292,
      "bloodPressureSystolic": 120,
      "bloodPressureDiastolic": 83,
      "glucoseLevel": 177,
      "cholesterol": 280,
      "heartRate": 101,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.5633736311924045,
      "confidence": 0.9438730538726763,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_094",
    "patientId": "pat_064",
    "patientName": "Richard Williams",
    "diseaseType": "hypertension",
    "probability": 0.632591676840564,
    "riskLevel": "critical",
    "confidence": 0.7709955554325832,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.808Z",
    "completedAt": "2026-07-12T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 88,
      "gender": "male",
      "bmi": 33.327865290591035,
      "bloodPressureSystolic": 153,
      "bloodPressureDiastolic": 73,
      "glucoseLevel": 90,
      "cholesterol": 162,
      "heartRate": 98,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6220667752841812,
      "confidence": 0.7847823578902445,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_095",
    "patientId": "pat_004",
    "patientName": "Maria Lopez",
    "diseaseType": "kidney_disease",
    "probability": 0.3446932750326016,
    "riskLevel": "high",
    "confidence": 0.7719147472624204,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-17T11:39:59.808Z",
    "completedAt": "2026-07-19T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 48,
      "gender": "male",
      "bmi": 31.958835940384766,
      "bloodPressureSystolic": 125,
      "bloodPressureDiastolic": 76,
      "glucoseLevel": 95,
      "cholesterol": 154,
      "heartRate": 63,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.3760491681070166,
      "confidence": 0.9198977987897835,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_096",
    "patientId": "pat_005",
    "patientName": "Maria Martinez",
    "diseaseType": "stroke",
    "probability": 0.47929561222675465,
    "riskLevel": "low",
    "confidence": 0.7396276256510368,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-21T11:39:59.808Z",
    "completedAt": "2026-07-12T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 59,
      "gender": "male",
      "bmi": 28.84557287443712,
      "bloodPressureSystolic": 142,
      "bloodPressureDiastolic": 94,
      "glucoseLevel": 155,
      "cholesterol": 235,
      "heartRate": 72,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.19177594602283887,
      "confidence": 0.9082716008302079,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_097",
    "patientId": "pat_085",
    "patientName": "Barbara Gonzalez",
    "diseaseType": "kidney_disease",
    "probability": 0.1824099115573684,
    "riskLevel": "critical",
    "confidence": 0.8835957693266475,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-17T11:39:59.808Z",
    "completedAt": "2026-07-12T11:39:59.808Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 19,
      "gender": "male",
      "bmi": 30.029868621986292,
      "bloodPressureSystolic": 120,
      "bloodPressureDiastolic": 83,
      "glucoseLevel": 177,
      "cholesterol": 191,
      "heartRate": 101,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7486967684758977,
      "confidence": 0.7051465296153097,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_098",
    "patientId": "pat_105",
    "patientName": "Nancy Taylor",
    "diseaseType": "hypertension",
    "probability": 0.0073365033723731266,
    "riskLevel": "low",
    "confidence": 0.8796303359959966,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-20T11:39:59.808Z",
    "completedAt": "2026-07-11T11:39:59.808Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 29,
      "gender": "female",
      "bmi": 26.316669071919158,
      "bloodPressureSystolic": 117,
      "bloodPressureDiastolic": 75,
      "glucoseLevel": 123,
      "cholesterol": 260,
      "heartRate": 73,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.1832780326814163,
      "confidence": 0.8853957302869881,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_099",
    "patientId": "pat_008",
    "patientName": "Emily Johnson",
    "diseaseType": "kidney_disease",
    "probability": 0.19510527378169495,
    "riskLevel": "critical",
    "confidence": 0.727540810393846,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-17T11:39:59.808Z",
    "completedAt": "2026-07-20T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 25,
      "gender": "male",
      "bmi": 23.520971877441465,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 83,
      "glucoseLevel": 84,
      "cholesterol": 154,
      "heartRate": 101,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.31069765190096876,
      "confidence": 0.7474543934101132,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_100",
    "patientId": "pat_050",
    "patientName": "Thomas Taylor",
    "diseaseType": "kidney_disease",
    "probability": 0.9920023685677695,
    "riskLevel": "critical",
    "confidence": 0.9595956867162263,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.808Z",
    "completedAt": "2026-07-12T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 79,
      "gender": "male",
      "bmi": 21.320690851867468,
      "bloodPressureSystolic": 127,
      "bloodPressureDiastolic": 100,
      "glucoseLevel": 192,
      "cholesterol": 211,
      "heartRate": 95,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7511964417126176,
      "confidence": 0.9767920549852789,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_101",
    "patientId": "pat_028",
    "patientName": "Susan Gonzalez",
    "diseaseType": "stroke",
    "probability": 0.10615078725589278,
    "riskLevel": "moderate",
    "confidence": 0.9780085233846183,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.808Z",
    "completedAt": "2026-07-16T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 62,
      "gender": "male",
      "bmi": 21.088583150386732,
      "bloodPressureSystolic": 130,
      "bloodPressureDiastolic": 95,
      "glucoseLevel": 184,
      "cholesterol": 162,
      "heartRate": 81,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7378880138665285,
      "confidence": 0.9592617958994558,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_102",
    "patientId": "pat_027",
    "patientName": "Patricia Wilson",
    "diseaseType": "kidney_disease",
    "probability": 0.3142623815884916,
    "riskLevel": "critical",
    "confidence": 0.8132537855883897,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.808Z",
    "completedAt": "2026-07-11T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 79,
      "gender": "male",
      "bmi": 34.46398689310688,
      "bloodPressureSystolic": 155,
      "bloodPressureDiastolic": 83,
      "glucoseLevel": 115,
      "cholesterol": 159,
      "heartRate": 81,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.4808941792541799,
      "confidence": 0.90223684421852,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_103",
    "patientId": "pat_076",
    "patientName": "Michael Jones",
    "diseaseType": "heart_disease",
    "probability": 0.010218089633858729,
    "riskLevel": "critical",
    "confidence": 0.9587137383358371,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.808Z",
    "completedAt": "2026-07-18T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 65,
      "gender": "female",
      "bmi": 23.67879603416425,
      "bloodPressureSystolic": 155,
      "bloodPressureDiastolic": 93,
      "glucoseLevel": 145,
      "cholesterol": 264,
      "heartRate": 96,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.9723784799407574,
      "confidence": 0.7573442796210875,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_104",
    "patientId": "pat_030",
    "patientName": "David Brown",
    "diseaseType": "stroke",
    "probability": 0.4853768476594087,
    "riskLevel": "moderate",
    "confidence": 0.8018758797113918,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-20T11:39:59.808Z",
    "completedAt": "2026-07-11T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 26,
      "gender": "female",
      "bmi": 33.03297155584001,
      "bloodPressureSystolic": 141,
      "bloodPressureDiastolic": 99,
      "glucoseLevel": 138,
      "cholesterol": 170,
      "heartRate": 106,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7967468120900448,
      "confidence": 0.9383101340863885,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_105",
    "patientId": "pat_011",
    "patientName": "Karen Anderson",
    "diseaseType": "kidney_disease",
    "probability": 0.11193758295584155,
    "riskLevel": "critical",
    "confidence": 0.8697848089911524,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-17T11:39:59.808Z",
    "completedAt": "2026-07-17T11:39:59.808Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 19,
      "gender": "male",
      "bmi": 20.118560477538008,
      "bloodPressureSystolic": 120,
      "bloodPressureDiastolic": 72,
      "glucoseLevel": 182,
      "cholesterol": 154,
      "heartRate": 66,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7242583385243819,
      "confidence": 0.8186240137597551,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_106",
    "patientId": "pat_071",
    "patientName": "Michael Lopez",
    "diseaseType": "cancer_risk",
    "probability": 0.6148779232650409,
    "riskLevel": "high",
    "confidence": 0.8869286019952952,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.808Z",
    "completedAt": "2026-07-14T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 20,
      "gender": "male",
      "bmi": 20.61825079527863,
      "bloodPressureSystolic": 146,
      "bloodPressureDiastolic": 97,
      "glucoseLevel": 157,
      "cholesterol": 220,
      "heartRate": 62,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.0420047938374809,
      "confidence": 0.905123680390319,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_107",
    "patientId": "pat_082",
    "patientName": "Nancy Brown",
    "diseaseType": "diabetes",
    "probability": 0.39132556705809374,
    "riskLevel": "moderate",
    "confidence": 0.9489990230071982,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-21T11:39:59.808Z",
    "completedAt": "2026-07-21T11:39:59.808Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 43,
      "gender": "female",
      "bmi": 22.71484456946894,
      "bloodPressureSystolic": 154,
      "bloodPressureDiastolic": 80,
      "glucoseLevel": 182,
      "cholesterol": 270,
      "heartRate": 62,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8654879199360659,
      "confidence": 0.7075819481954817,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_108",
    "patientId": "pat_037",
    "patientName": "Sarah Martinez",
    "diseaseType": "diabetes",
    "probability": 0.3191448715537709,
    "riskLevel": "high",
    "confidence": 0.9685220671850518,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.808Z",
    "completedAt": "2026-07-12T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 54,
      "gender": "male",
      "bmi": 33.88731225898701,
      "bloodPressureSystolic": 155,
      "bloodPressureDiastolic": 95,
      "glucoseLevel": 83,
      "cholesterol": 258,
      "heartRate": 79,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.046855535381304825,
      "confidence": 0.9799318529865968,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_109",
    "patientId": "pat_013",
    "patientName": "Linda Johnson",
    "diseaseType": "kidney_disease",
    "probability": 0.15965099252946313,
    "riskLevel": "high",
    "confidence": 0.954613419163689,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-21T11:39:59.808Z",
    "completedAt": "2026-07-12T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 63,
      "gender": "female",
      "bmi": 22.30406280515861,
      "bloodPressureSystolic": 138,
      "bloodPressureDiastolic": 96,
      "glucoseLevel": 162,
      "cholesterol": 259,
      "heartRate": 98,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.9947441692040082,
      "confidence": 0.810774073466664,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_110",
    "patientId": "pat_069",
    "patientName": "Susan Anderson",
    "diseaseType": "heart_disease",
    "probability": 0.21302635785959512,
    "riskLevel": "moderate",
    "confidence": 0.9317658057305054,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.808Z",
    "completedAt": "2026-07-15T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 34,
      "gender": "female",
      "bmi": 26.204950102217545,
      "bloodPressureSystolic": 154,
      "bloodPressureDiastolic": 81,
      "glucoseLevel": 146,
      "cholesterol": 179,
      "heartRate": 80,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.5548347046541046,
      "confidence": 0.739378672893982,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_111",
    "patientId": "pat_062",
    "patientName": "Nancy Jones",
    "diseaseType": "hypertension",
    "probability": 0.2425498351243105,
    "riskLevel": "high",
    "confidence": 0.9239997971302224,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.808Z",
    "completedAt": "2026-07-11T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 62,
      "gender": "female",
      "bmi": 26.905647992532987,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 77,
      "glucoseLevel": 126,
      "cholesterol": 151,
      "heartRate": 75,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.05123295041330356,
      "confidence": 0.7278955809103494,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_112",
    "patientId": "pat_011",
    "patientName": "Karen Anderson",
    "diseaseType": "diabetes",
    "probability": 0.351954490487958,
    "riskLevel": "low",
    "confidence": 0.7862160926505339,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-17T11:39:59.808Z",
    "completedAt": "2026-07-20T11:39:59.808Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 19,
      "gender": "male",
      "bmi": 20.118560477538008,
      "bloodPressureSystolic": 120,
      "bloodPressureDiastolic": 72,
      "glucoseLevel": 182,
      "cholesterol": 176,
      "heartRate": 66,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.9214653723564005,
      "confidence": 0.7320567581159826,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_113",
    "patientId": "pat_031",
    "patientName": "Patricia Moore",
    "diseaseType": "hypertension",
    "probability": 0.6788746314837732,
    "riskLevel": "moderate",
    "confidence": 0.7721603495200996,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-21T11:39:59.808Z",
    "completedAt": "2026-07-14T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 53,
      "gender": "male",
      "bmi": 25.44445977906087,
      "bloodPressureSystolic": 123,
      "bloodPressureDiastolic": 73,
      "glucoseLevel": 183,
      "cholesterol": 217,
      "heartRate": 97,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6287359425062458,
      "confidence": 0.867703050509774,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_114",
    "patientId": "pat_013",
    "patientName": "Linda Johnson",
    "diseaseType": "kidney_disease",
    "probability": 0.460949989282487,
    "riskLevel": "high",
    "confidence": 0.7697288938274525,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.808Z",
    "completedAt": "2026-07-19T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 63,
      "gender": "female",
      "bmi": 22.30406280515861,
      "bloodPressureSystolic": 138,
      "bloodPressureDiastolic": 96,
      "glucoseLevel": 162,
      "cholesterol": 153,
      "heartRate": 98,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8042662099826282,
      "confidence": 0.9791532240715646,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_115",
    "patientId": "pat_047",
    "patientName": "Christopher Johnson",
    "diseaseType": "hypertension",
    "probability": 0.7353941322889889,
    "riskLevel": "critical",
    "confidence": 0.9547456694227464,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.808Z",
    "completedAt": "2026-07-15T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 82,
      "gender": "male",
      "bmi": 26.948052058060213,
      "bloodPressureSystolic": 153,
      "bloodPressureDiastolic": 90,
      "glucoseLevel": 194,
      "cholesterol": 196,
      "heartRate": 65,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7921835894973309,
      "confidence": 0.9115323016152238,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_116",
    "patientId": "pat_004",
    "patientName": "Maria Lopez",
    "diseaseType": "cancer_risk",
    "probability": 0.5158186499874317,
    "riskLevel": "critical",
    "confidence": 0.8641287229919358,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.808Z",
    "completedAt": "2026-07-13T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 48,
      "gender": "male",
      "bmi": 31.958835940384766,
      "bloodPressureSystolic": 125,
      "bloodPressureDiastolic": 76,
      "glucoseLevel": 95,
      "cholesterol": 266,
      "heartRate": 63,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8998033689848222,
      "confidence": 0.7403806118367768,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_117",
    "patientId": "pat_071",
    "patientName": "Michael Lopez",
    "diseaseType": "cancer_risk",
    "probability": 0.5187406532538776,
    "riskLevel": "moderate",
    "confidence": 0.9119536870645756,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-12T11:39:59.808Z",
    "completedAt": "2026-07-19T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 20,
      "gender": "male",
      "bmi": 20.61825079527863,
      "bloodPressureSystolic": 146,
      "bloodPressureDiastolic": 97,
      "glucoseLevel": 157,
      "cholesterol": 217,
      "heartRate": 62,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.034730473289658836,
      "confidence": 0.9772720255055708,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_118",
    "patientId": "pat_074",
    "patientName": "Karen Rodriguez",
    "diseaseType": "diabetes",
    "probability": 0.9903592416471605,
    "riskLevel": "moderate",
    "confidence": 0.8841371632043669,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-17T11:39:59.808Z",
    "completedAt": "2026-07-12T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 67,
      "gender": "male",
      "bmi": 20.34488518561887,
      "bloodPressureSystolic": 112,
      "bloodPressureDiastolic": 84,
      "glucoseLevel": 149,
      "cholesterol": 194,
      "heartRate": 101,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7993134674105314,
      "confidence": 0.7991769638161228,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_119",
    "patientId": "pat_055",
    "patientName": "Joseph Lopez",
    "diseaseType": "cancer_risk",
    "probability": 0.6569631337051185,
    "riskLevel": "moderate",
    "confidence": 0.8064771611198168,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.808Z",
    "completedAt": "2026-07-19T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 30,
      "gender": "male",
      "bmi": 20.639779176339406,
      "bloodPressureSystolic": 156,
      "bloodPressureDiastolic": 99,
      "glucoseLevel": 177,
      "cholesterol": 241,
      "heartRate": 75,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.4741006057548648,
      "confidence": 0.8330087763892451,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_120",
    "patientId": "pat_011",
    "patientName": "Karen Anderson",
    "diseaseType": "heart_disease",
    "probability": 0.38606098166792036,
    "riskLevel": "high",
    "confidence": 0.8933804727007647,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.808Z",
    "completedAt": "2026-07-16T11:39:59.808Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 19,
      "gender": "male",
      "bmi": 20.118560477538008,
      "bloodPressureSystolic": 120,
      "bloodPressureDiastolic": 72,
      "glucoseLevel": 182,
      "cholesterol": 274,
      "heartRate": 66,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.5096294425207687,
      "confidence": 0.7543182354295371,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_121",
    "patientId": "pat_072",
    "patientName": "Barbara Wilson",
    "diseaseType": "kidney_disease",
    "probability": 0.5888926477761793,
    "riskLevel": "high",
    "confidence": 0.9608597039165656,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-21T11:39:59.808Z",
    "completedAt": "2026-07-21T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 57,
      "gender": "female",
      "bmi": 31.259277433761177,
      "bloodPressureSystolic": 147,
      "bloodPressureDiastolic": 70,
      "glucoseLevel": 167,
      "cholesterol": 223,
      "heartRate": 72,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.5179379101542227,
      "confidence": 0.8874558251463143,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_122",
    "patientId": "pat_043",
    "patientName": "Susan Miller",
    "diseaseType": "heart_disease",
    "probability": 0.27788559018915615,
    "riskLevel": "low",
    "confidence": 0.757256165018158,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.808Z",
    "completedAt": "2026-07-16T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 72,
      "gender": "female",
      "bmi": 20.279019446258708,
      "bloodPressureSystolic": 114,
      "bloodPressureDiastolic": 72,
      "glucoseLevel": 99,
      "cholesterol": 242,
      "heartRate": 69,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.44099034105026824,
      "confidence": 0.9600880534365117,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_123",
    "patientId": "pat_029",
    "patientName": "David Williams",
    "diseaseType": "kidney_disease",
    "probability": 0.2674411397373888,
    "riskLevel": "critical",
    "confidence": 0.7651922980128884,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-20T11:39:59.808Z",
    "completedAt": "2026-07-14T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 37,
      "gender": "male",
      "bmi": 29.26513533689839,
      "bloodPressureSystolic": 139,
      "bloodPressureDiastolic": 73,
      "glucoseLevel": 135,
      "cholesterol": 277,
      "heartRate": 94,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.5813452008730726,
      "confidence": 0.8515750913713667,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_124",
    "patientId": "pat_075",
    "patientName": "Thomas Thomas",
    "diseaseType": "kidney_disease",
    "probability": 0.3033185392962392,
    "riskLevel": "low",
    "confidence": 0.7052515040991545,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-20T11:39:59.808Z",
    "completedAt": "2026-07-11T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 54,
      "gender": "male",
      "bmi": 20.45258867189398,
      "bloodPressureSystolic": 121,
      "bloodPressureDiastolic": 75,
      "glucoseLevel": 149,
      "cholesterol": 229,
      "heartRate": 69,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.32020082339411493,
      "confidence": 0.8465619999496854,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_125",
    "patientId": "pat_063",
    "patientName": "Sarah Hernandez",
    "diseaseType": "stroke",
    "probability": 0.40839870132546463,
    "riskLevel": "high",
    "confidence": 0.8672894244575788,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-12T11:39:59.808Z",
    "completedAt": "2026-07-12T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 63,
      "gender": "female",
      "bmi": 20.824095195629056,
      "bloodPressureSystolic": 126,
      "bloodPressureDiastolic": 70,
      "glucoseLevel": 113,
      "cholesterol": 212,
      "heartRate": 108,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.2174642011145027,
      "confidence": 0.7283381156509097,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_126",
    "patientId": "pat_018",
    "patientName": "William Lopez",
    "diseaseType": "hypertension",
    "probability": 0.9207065627506362,
    "riskLevel": "low",
    "confidence": 0.8926679408528327,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.808Z",
    "completedAt": "2026-07-18T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 59,
      "gender": "male",
      "bmi": 27.55998346009058,
      "bloodPressureSystolic": 133,
      "bloodPressureDiastolic": 92,
      "glucoseLevel": 105,
      "cholesterol": 276,
      "heartRate": 94,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7185299435811507,
      "confidence": 0.823861480909833,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_127",
    "patientId": "pat_035",
    "patientName": "Linda Miller",
    "diseaseType": "kidney_disease",
    "probability": 0.5553346066752199,
    "riskLevel": "critical",
    "confidence": 0.871086919840653,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-19T11:39:59.808Z",
    "completedAt": "2026-07-11T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 38,
      "gender": "male",
      "bmi": 31.732583070712913,
      "bloodPressureSystolic": 160,
      "bloodPressureDiastolic": 77,
      "glucoseLevel": 124,
      "cholesterol": 173,
      "heartRate": 103,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.25766049610827857,
      "confidence": 0.9169315438260859,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_128",
    "patientId": "pat_019",
    "patientName": "Charles Brown",
    "diseaseType": "diabetes",
    "probability": 0.3610140529432888,
    "riskLevel": "low",
    "confidence": 0.9638735184064319,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.808Z",
    "completedAt": "2026-07-20T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 83,
      "gender": "male",
      "bmi": 23.844050637984235,
      "bloodPressureSystolic": 132,
      "bloodPressureDiastolic": 84,
      "glucoseLevel": 163,
      "cholesterol": 200,
      "heartRate": 107,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.8817166620065316,
      "confidence": 0.7371757162950816,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_129",
    "patientId": "pat_029",
    "patientName": "David Williams",
    "diseaseType": "kidney_disease",
    "probability": 0.9373917885802365,
    "riskLevel": "critical",
    "confidence": 0.8125027544408392,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-11T11:39:59.808Z",
    "completedAt": "2026-07-21T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 37,
      "gender": "male",
      "bmi": 29.26513533689839,
      "bloodPressureSystolic": 139,
      "bloodPressureDiastolic": 73,
      "glucoseLevel": 135,
      "cholesterol": 235,
      "heartRate": 94,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.2628126080836919,
      "confidence": 0.8429736038835092,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_130",
    "patientId": "pat_088",
    "patientName": "Charles Williams",
    "diseaseType": "cancer_risk",
    "probability": 0.7841929917813947,
    "riskLevel": "low",
    "confidence": 0.9463181291369733,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.808Z",
    "completedAt": "2026-07-21T11:39:59.808Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 74,
      "gender": "male",
      "bmi": 26.331309666813382,
      "bloodPressureSystolic": 117,
      "bloodPressureDiastolic": 92,
      "glucoseLevel": 82,
      "cholesterol": 194,
      "heartRate": 83,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.33497084659512366,
      "confidence": 0.9143167468452822,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_131",
    "patientId": "pat_024",
    "patientName": "Jessica Davis",
    "diseaseType": "heart_disease",
    "probability": 0.8724768009330115,
    "riskLevel": "critical",
    "confidence": 0.92576404050413,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.808Z",
    "completedAt": "2026-07-19T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 25,
      "gender": "female",
      "bmi": 24.284611497273175,
      "bloodPressureSystolic": 119,
      "bloodPressureDiastolic": 79,
      "glucoseLevel": 89,
      "cholesterol": 263,
      "heartRate": 101,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.40344881019055034,
      "confidence": 0.7991263781779236,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_132",
    "patientId": "pat_066",
    "patientName": "Robert Miller",
    "diseaseType": "kidney_disease",
    "probability": 0.4779725538629578,
    "riskLevel": "high",
    "confidence": 0.9456249219223621,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.808Z",
    "completedAt": "2026-07-17T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 81,
      "gender": "male",
      "bmi": 26.613407775311885,
      "bloodPressureSystolic": 156,
      "bloodPressureDiastolic": 91,
      "glucoseLevel": 124,
      "cholesterol": 173,
      "heartRate": 68,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7295230992528215,
      "confidence": 0.7148473156297129,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_133",
    "patientId": "pat_113",
    "patientName": "Susan Jones",
    "diseaseType": "heart_disease",
    "probability": 0.4359590683019824,
    "riskLevel": "moderate",
    "confidence": 0.7167929807419229,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-21T11:39:59.808Z",
    "completedAt": "2026-07-20T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 44,
      "gender": "male",
      "bmi": 25.57059767856378,
      "bloodPressureSystolic": 129,
      "bloodPressureDiastolic": 77,
      "glucoseLevel": 150,
      "cholesterol": 172,
      "heartRate": 95,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "moderate",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.20840358365883205,
      "confidence": 0.9588291782693217,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_134",
    "patientId": "pat_089",
    "patientName": "Charles Johnson",
    "diseaseType": "hypertension",
    "probability": 0.955015970841792,
    "riskLevel": "low",
    "confidence": 0.7387916693640646,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.808Z",
    "completedAt": "2026-07-21T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 69,
      "gender": "female",
      "bmi": 30.75997317831366,
      "bloodPressureSystolic": 148,
      "bloodPressureDiastolic": 80,
      "glucoseLevel": 137,
      "cholesterol": 198,
      "heartRate": 98,
      "smokingStatus": "current",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.453312552958008,
      "confidence": 0.8598797286792296,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_135",
    "patientId": "pat_057",
    "patientName": "Maria Wilson",
    "diseaseType": "cancer_risk",
    "probability": 0.9841186271927465,
    "riskLevel": "critical",
    "confidence": 0.8948748741706145,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.808Z",
    "completedAt": "2026-07-12T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 55,
      "gender": "female",
      "bmi": 24.483722263164267,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 86,
      "glucoseLevel": 185,
      "cholesterol": 166,
      "heartRate": 66,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7676054193185439,
      "confidence": 0.9415438631402717,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_136",
    "patientId": "pat_043",
    "patientName": "Susan Miller",
    "diseaseType": "heart_disease",
    "probability": 0.029654276762564713,
    "riskLevel": "low",
    "confidence": 0.8516412071846688,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.808Z",
    "completedAt": "2026-07-21T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 72,
      "gender": "female",
      "bmi": 20.279019446258708,
      "bloodPressureSystolic": 114,
      "bloodPressureDiastolic": 72,
      "glucoseLevel": 99,
      "cholesterol": 219,
      "heartRate": 69,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.16148880183542158,
      "confidence": 0.7210420541401117,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_137",
    "patientId": "pat_059",
    "patientName": "William Wilson",
    "diseaseType": "cancer_risk",
    "probability": 0.213224612237511,
    "riskLevel": "low",
    "confidence": 0.8243651106961591,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-16T11:39:59.808Z",
    "completedAt": "2026-07-17T11:39:59.808Z",
    "requestedBy": "Dr. Lisa Park",
    "features": {
      "age": 41,
      "gender": "male",
      "bmi": 26.099182337854312,
      "bloodPressureSystolic": 114,
      "bloodPressureDiastolic": 88,
      "glucoseLevel": 84,
      "cholesterol": 243,
      "heartRate": 100,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.5577356135199384,
      "confidence": 0.8082872742124455,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_138",
    "patientId": "pat_057",
    "patientName": "Maria Wilson",
    "diseaseType": "stroke",
    "probability": 0.7836869741510966,
    "riskLevel": "critical",
    "confidence": 0.7266619280725547,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.808Z",
    "completedAt": "2026-07-18T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 55,
      "gender": "female",
      "bmi": 24.483722263164267,
      "bloodPressureSystolic": 145,
      "bloodPressureDiastolic": 86,
      "glucoseLevel": 185,
      "cholesterol": 153,
      "heartRate": 66,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.17205748206530647,
      "confidence": 0.8777798216760653,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_139",
    "patientId": "pat_067",
    "patientName": "Michael Williams",
    "diseaseType": "cancer_risk",
    "probability": 0.5449101924163586,
    "riskLevel": "low",
    "confidence": 0.7216388015366525,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-19T11:39:59.808Z",
    "completedAt": "2026-07-16T11:39:59.808Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 51,
      "gender": "male",
      "bmi": 31.001219601100466,
      "bloodPressureSystolic": 148,
      "bloodPressureDiastolic": 94,
      "glucoseLevel": 164,
      "cholesterol": 247,
      "heartRate": 87,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "light",
      "alcoholConsumption": "light"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.05579962759562851,
      "confidence": 0.9712805642739608,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_140",
    "patientId": "pat_052",
    "patientName": "Nancy Wilson",
    "diseaseType": "stroke",
    "probability": 0.8152457200844946,
    "riskLevel": "high",
    "confidence": 0.8135892233863427,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-19T11:39:59.808Z",
    "completedAt": "2026-07-19T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 19,
      "gender": "male",
      "bmi": 28.56918678398248,
      "bloodPressureSystolic": 151,
      "bloodPressureDiastolic": 99,
      "glucoseLevel": 87,
      "cholesterol": 231,
      "heartRate": 74,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.15331565436457018,
      "confidence": 0.9562315753636,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_141",
    "patientId": "pat_115",
    "patientName": "Robert Miller",
    "diseaseType": "heart_disease",
    "probability": 0.7087616303566344,
    "riskLevel": "high",
    "confidence": 0.7271369087011541,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.808Z",
    "completedAt": "2026-07-20T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 89,
      "gender": "male",
      "bmi": 34.547236060287766,
      "bloodPressureSystolic": 115,
      "bloodPressureDiastolic": 83,
      "glucoseLevel": 111,
      "cholesterol": 182,
      "heartRate": 102,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.17755067207604647,
      "confidence": 0.7820543786638661,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_142",
    "patientId": "pat_061",
    "patientName": "William Miller",
    "diseaseType": "kidney_disease",
    "probability": 0.623249619855539,
    "riskLevel": "critical",
    "confidence": 0.9109872970854972,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.808Z",
    "completedAt": "2026-07-20T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 57,
      "gender": "female",
      "bmi": 27.709782433670718,
      "bloodPressureSystolic": 157,
      "bloodPressureDiastolic": 70,
      "glucoseLevel": 123,
      "cholesterol": 173,
      "heartRate": 68,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "active",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.6733722199391904,
      "confidence": 0.8575990295180967,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_143",
    "patientId": "pat_026",
    "patientName": "Susan Brown",
    "diseaseType": "heart_disease",
    "probability": 0.17950586355598375,
    "riskLevel": "critical",
    "confidence": 0.7461170071652399,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.808Z",
    "completedAt": "2026-07-15T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 84,
      "gender": "male",
      "bmi": 23.118926920048164,
      "bloodPressureSystolic": 126,
      "bloodPressureDiastolic": 86,
      "glucoseLevel": 109,
      "cholesterol": 275,
      "heartRate": 61,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "active",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.32961160974888914,
      "confidence": 0.9050671413987442,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_144",
    "patientId": "pat_071",
    "patientName": "Michael Lopez",
    "diseaseType": "stroke",
    "probability": 0.7369112218124908,
    "riskLevel": "moderate",
    "confidence": 0.8759448580921779,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-15T11:39:59.808Z",
    "completedAt": "2026-07-21T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 20,
      "gender": "male",
      "bmi": 20.61825079527863,
      "bloodPressureSystolic": 146,
      "bloodPressureDiastolic": 97,
      "glucoseLevel": 157,
      "cholesterol": 160,
      "heartRate": 62,
      "smokingStatus": "never",
      "familyHistory": false,
      "physicalActivity": "sedentary",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.9107672940809467,
      "confidence": 0.8511159902521117,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_145",
    "patientId": "pat_046",
    "patientName": "Karen Smith",
    "diseaseType": "hypertension",
    "probability": 0.1563451283455095,
    "riskLevel": "low",
    "confidence": 0.9758407243818997,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-14T11:39:59.808Z",
    "completedAt": "2026-07-21T11:39:59.808Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 77,
      "gender": "male",
      "bmi": 33.548203666892626,
      "bloodPressureSystolic": 160,
      "bloodPressureDiastolic": 98,
      "glucoseLevel": 94,
      "cholesterol": 202,
      "heartRate": 72,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7755004466952655,
      "confidence": 0.750918985510297,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "routine"
    }
  },
  {
    "id": "pred_146",
    "patientId": "pat_044",
    "patientName": "Jessica Johnson",
    "diseaseType": "stroke",
    "probability": 0.7117971866705728,
    "riskLevel": "critical",
    "confidence": 0.7761012429102438,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-19T11:39:59.808Z",
    "completedAt": "2026-07-12T11:39:59.808Z",
    "requestedBy": "Dr. Robert King",
    "features": {
      "age": 60,
      "gender": "male",
      "bmi": 27.133913082084657,
      "bloodPressureSystolic": 121,
      "bloodPressureDiastolic": 98,
      "glucoseLevel": 131,
      "cholesterol": 261,
      "heartRate": 106,
      "smokingStatus": "former",
      "familyHistory": false,
      "physicalActivity": "light",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.29061647321967243,
      "confidence": 0.721207759925888,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "urgent"
    }
  },
  {
    "id": "pred_147",
    "patientId": "pat_056",
    "patientName": "Robert Martin",
    "diseaseType": "stroke",
    "probability": 0.516636079393295,
    "riskLevel": "critical",
    "confidence": 0.7083131545757146,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-12T11:39:59.808Z",
    "completedAt": "2026-07-11T11:39:59.808Z",
    "requestedBy": "Dr. Sarah Mitchell",
    "features": {
      "age": 84,
      "gender": "female",
      "bmi": 20.888868683546804,
      "bloodPressureSystolic": 134,
      "bloodPressureDiastolic": 81,
      "glucoseLevel": 164,
      "cholesterol": 214,
      "heartRate": 74,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7728315183419242,
      "confidence": 0.8581547745640521,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_148",
    "patientId": "pat_070",
    "patientName": "Charles Smith",
    "diseaseType": "stroke",
    "probability": 0.15621338756025982,
    "riskLevel": "moderate",
    "confidence": 0.9713077675205053,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-13T11:39:59.808Z",
    "completedAt": "2026-07-13T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 71,
      "gender": "female",
      "bmi": 27.54954532834407,
      "bloodPressureSystolic": 158,
      "bloodPressureDiastolic": 78,
      "glucoseLevel": 196,
      "cholesterol": 252,
      "heartRate": 110,
      "smokingStatus": "current",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "moderate"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.027351274385126856,
      "confidence": 0.840116430317583,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": true,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_149",
    "patientId": "pat_061",
    "patientName": "William Miller",
    "diseaseType": "stroke",
    "probability": 0.934721113956722,
    "riskLevel": "critical",
    "confidence": 0.8180196350762954,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-19T11:39:59.808Z",
    "completedAt": "2026-07-19T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 57,
      "gender": "female",
      "bmi": 27.709782433670718,
      "bloodPressureSystolic": 157,
      "bloodPressureDiastolic": 70,
      "glucoseLevel": 123,
      "cholesterol": 256,
      "heartRate": 68,
      "smokingStatus": "former",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "none"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7138638511839337,
      "confidence": 0.8680117254650013,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  },
  {
    "id": "pred_150",
    "patientId": "pat_119",
    "patientName": "Jessica Jackson",
    "diseaseType": "hypertension",
    "probability": 0.772672359594287,
    "riskLevel": "low",
    "confidence": 0.7571685238045497,
    "status": "completed",
    "modelVersion": "v2.4.0",
    "createdAt": "2026-07-18T11:39:59.808Z",
    "completedAt": "2026-07-12T11:39:59.808Z",
    "requestedBy": "Dr. James Chen",
    "features": {
      "age": 73,
      "gender": "female",
      "bmi": 32.87018682482294,
      "bloodPressureSystolic": 111,
      "bloodPressureDiastolic": 91,
      "glucoseLevel": 150,
      "cholesterol": 266,
      "heartRate": 103,
      "smokingStatus": "never",
      "familyHistory": true,
      "physicalActivity": "moderate",
      "alcoholConsumption": "heavy"
    },
    "result": {
      "diagnosis": "Generated diagnosis based on AI analysis.",
      "probability": 0.7534341253879756,
      "confidence": 0.8227037519680129,
      "riskFactors": [],
      "recommendations": [
        "Follow up in 30 days",
        "Dietary modifications"
      ],
      "followUpRequired": false,
      "urgency": "soon"
    }
  }
];
export const generatedCheckups = [
  {
    "id": "chk_1",
    "patientName": "James Rodriguez",
    "patientId": "pat_099",
    "date": "2026-07-29T11:39:59.808Z",
    "type": "Follow-up",
    "doctor": "Dr. James Chen"
  },
  {
    "id": "chk_2",
    "patientName": "Maria Gonzalez",
    "patientId": "pat_022",
    "date": "2026-07-22T11:39:59.808Z",
    "type": "Cardiology Consult",
    "doctor": "Dr. Lisa Park"
  },
  {
    "id": "chk_3",
    "patientName": "Linda Williams",
    "patientId": "pat_093",
    "date": "2026-07-28T11:39:59.808Z",
    "type": "Blood Work",
    "doctor": "Dr. Sarah Mitchell"
  },
  {
    "id": "chk_4",
    "patientName": "Karen Smith",
    "patientId": "pat_046",
    "date": "2026-07-29T11:39:59.808Z",
    "type": "Cardiology Consult",
    "doctor": "Dr. Robert King"
  },
  {
    "id": "chk_5",
    "patientName": "Linda Miller",
    "patientId": "pat_035",
    "date": "2026-08-02T11:39:59.808Z",
    "type": "Cardiology Consult",
    "doctor": "Dr. James Chen"
  },
  {
    "id": "chk_6",
    "patientName": "David Wilson",
    "patientId": "pat_101",
    "date": "2026-08-04T11:39:59.808Z",
    "type": "Follow-up",
    "doctor": "Dr. James Chen"
  },
  {
    "id": "chk_7",
    "patientName": "Joseph Gonzalez",
    "patientId": "pat_025",
    "date": "2026-07-29T11:39:59.808Z",
    "type": "Follow-up",
    "doctor": "Dr. Robert King"
  },
  {
    "id": "chk_8",
    "patientName": "Patricia Wilson",
    "patientId": "pat_027",
    "date": "2026-07-27T11:39:59.808Z",
    "type": "Cardiology Consult",
    "doctor": "Dr. Lisa Park"
  },
  {
    "id": "chk_9",
    "patientName": "Joseph Martinez",
    "patientId": "pat_087",
    "date": "2026-07-26T11:39:59.808Z",
    "type": "Routine Checkup",
    "doctor": "Dr. Lisa Park"
  },
  {
    "id": "chk_10",
    "patientName": "Emily Williams",
    "patientId": "pat_118",
    "date": "2026-08-01T11:39:59.808Z",
    "type": "Routine Checkup",
    "doctor": "Dr. Robert King"
  },
  {
    "id": "chk_11",
    "patientName": "David Brown",
    "patientId": "pat_100",
    "date": "2026-08-03T11:39:59.808Z",
    "type": "Blood Work",
    "doctor": "Dr. Lisa Park"
  },
  {
    "id": "chk_12",
    "patientName": "Susan Miller",
    "patientId": "pat_043",
    "date": "2026-07-29T11:39:59.808Z",
    "type": "Cardiology Consult",
    "doctor": "Dr. Lisa Park"
  },
  {
    "id": "chk_13",
    "patientName": "Maria Williams",
    "patientId": "pat_065",
    "date": "2026-07-22T11:39:59.808Z",
    "type": "Routine Checkup",
    "doctor": "Dr. Robert King"
  },
  {
    "id": "chk_14",
    "patientName": "Maria Gonzalez",
    "patientId": "pat_022",
    "date": "2026-08-04T11:39:59.808Z",
    "type": "Cardiology Consult",
    "doctor": "Dr. Lisa Park"
  },
  {
    "id": "chk_15",
    "patientName": "Thomas Thomas",
    "patientId": "pat_095",
    "date": "2026-08-01T11:39:59.808Z",
    "type": "Follow-up",
    "doctor": "Dr. James Chen"
  },
  {
    "id": "chk_16",
    "patientName": "Robert Miller",
    "patientId": "pat_053",
    "date": "2026-07-31T11:39:59.808Z",
    "type": "Cardiology Consult",
    "doctor": "Dr. Lisa Park"
  },
  {
    "id": "chk_17",
    "patientName": "Thomas Taylor",
    "patientId": "pat_112",
    "date": "2026-08-04T11:39:59.808Z",
    "type": "Routine Checkup",
    "doctor": "Dr. Lisa Park"
  },
  {
    "id": "chk_18",
    "patientName": "Maria Gonzalez",
    "patientId": "pat_022",
    "date": "2026-07-30T11:39:59.808Z",
    "type": "Blood Work",
    "doctor": "Dr. Lisa Park"
  },
  {
    "id": "chk_19",
    "patientName": "Joseph Moore",
    "patientId": "pat_110",
    "date": "2026-07-28T11:39:59.808Z",
    "type": "Routine Checkup",
    "doctor": "Dr. Sarah Mitchell"
  },
  {
    "id": "chk_20",
    "patientName": "Thomas Taylor",
    "patientId": "pat_050",
    "date": "2026-08-03T11:39:59.808Z",
    "type": "Routine Checkup",
    "doctor": "Dr. Lisa Park"
  }
];
export const generatedDashboardStats: DashboardStats & Record<string, any> = {
  "totalPatients": 3450,
  "highRiskPatients": 795,
  "diabetesPredictions": 240,
  "heartDiseasePredictions": 190,
  "avgRiskScore": 42,
  "monthlyPredictions": 1240,
  "activePredictions": 47,
  "modelAccuracy": 94.7,
  "criticalAlerts": 12,
  "predictionsToday": 45,
  "newPatientsThisWeek": 89,
  "avgConfidenceScore": 88.3,
  "tasksCompleted": 156
};
