import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, ArrowRight, Activity, Heart, Droplet, User, Coffee, FileText, CheckCircle, BrainCircuit } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useToast } from '../context/ToastContext';
import { ROUTES, DISEASE_LABELS } from '../constants';
import patientService from '../services/patientService';
import predictionService from '../services/predictionService';
import { adaptPatients } from '../services/adapters';
import { Patient } from '../types';

const predictionSchema = z.object({
  patientId: z.string().min(1, 'Please select a patient'),
  age: z.coerce.number().min(1).max(120),
  gender: z.enum(['male', 'female', 'other']),
  height: z.coerce.number().min(50).max(300), // cm
  weight: z.coerce.number().min(20).max(300), // kg
  bloodPressureSystolic: z.coerce.number().min(60).max(250),
  bloodPressureDiastolic: z.coerce.number().min(40).max(150),
  heartRate: z.coerce.number().min(30).max(220),
  glucoseLevel: z.coerce.number().min(40).max(600),
  hba1c: z.coerce.number().min(3).max(20).optional(),
  cholesterol: z.coerce.number().min(50).max(500),
  triglycerides: z.coerce.number().min(30).max(1000).optional(),
  smokingStatus: z.enum(['never', 'former', 'current']),
  alcoholConsumption: z.enum(['none', 'light', 'moderate', 'heavy']),
  exerciseFrequency: z.enum(['sedentary', 'light', 'moderate', 'active']),
  sleepDuration: z.coerce.number().min(2).max(16).optional(),
  stressLevel: z.enum(['low', 'medium', 'high']).optional(),
  dietType: z.string().optional(),
  familyHistory: z.string().optional(),
  previousConditions: z.string().optional(),
  medicationHistory: z.string().optional(),
});

type PredictionFormData = z.infer<typeof predictionSchema>;

const STEPS = [
  { id: 'patient', title: 'Patient', icon: User },
  { id: 'vitals', title: 'Vitals', icon: Heart },
  { id: 'labs', title: 'Lab Results', icon: Droplet },
  { id: 'lifestyle', title: 'Lifestyle', icon: Coffee },
  { id: 'history', title: 'History', icon: FileText },
];

export function NewPredictionPage() {
  const navigate = useNavigate();
  const { type } = useParams<{ type: string }>();
  const [searchParams] = useSearchParams();
  const initialPatientId = searchParams.get('patientId');
  const { success, error } = useToast();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Load Draft
  const draftKey = `predDraft_${type}`;
  const draftData = localStorage.getItem(draftKey) 
    ? JSON.parse(localStorage.getItem(draftKey)!) 
    : {};

  const methods = useForm<PredictionFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(predictionSchema) as any,
    defaultValues: {
      patientId: initialPatientId || draftData.patientId || '',
      age: draftData.age || 0,
      gender: draftData.gender || 'male',
      height: draftData.height || 170,
      weight: draftData.weight || 70,
      bloodPressureSystolic: draftData.bloodPressureSystolic || 120,
      bloodPressureDiastolic: draftData.bloodPressureDiastolic || 80,
      heartRate: draftData.heartRate || 72,
      glucoseLevel: draftData.glucoseLevel || 90,
      hba1c: draftData.hba1c || 5.5,
      cholesterol: draftData.cholesterol || 180,
      triglycerides: draftData.triglycerides || 150,
      smokingStatus: draftData.smokingStatus || 'never',
      alcoholConsumption: draftData.alcoholConsumption || 'none',
      exerciseFrequency: draftData.exerciseFrequency || 'moderate',
      sleepDuration: draftData.sleepDuration || 7,
      stressLevel: draftData.stressLevel || 'low',
      dietType: draftData.dietType || 'Balanced',
      familyHistory: draftData.familyHistory || 'None',
      previousConditions: draftData.previousConditions || 'None',
      medicationHistory: draftData.medicationHistory || 'None',
    },
    mode: 'onTouched',
  });

  const { handleSubmit, trigger, setValue } = methods;
  const formValues = useWatch({ control: methods.control }) as PredictionFormData;

  useEffect(() => {
    // Autosave
    localStorage.setItem(draftKey, JSON.stringify(formValues));
  }, [formValues, draftKey]);

  const prefillFromPatient = (p: Patient) => {
    setValue('patientId', p.id);
    setValue('age', p.age);
    setValue('gender', p.gender as 'male' | 'female' | 'other');
    setValue('bloodPressureSystolic', p.vitalSigns.bloodPressureSystolic);
    setValue('bloodPressureDiastolic', p.vitalSigns.bloodPressureDiastolic);
    setValue('heartRate', p.vitalSigns.heartRate);
    setValue('glucoseLevel', p.vitalSigns.glucoseLevel);
    setValue('smokingStatus', (p.lifestyle?.smokingStatus as 'never' | 'former' | 'current') || 'never');
    setValue('alcoholConsumption', (p.lifestyle?.alcoholConsumption as 'none' | 'light' | 'moderate' | 'heavy') || 'none');
    setValue('exerciseFrequency', (p.lifestyle?.physicalActivity as 'sedentary' | 'light' | 'moderate' | 'active') || 'moderate');
    setValue('familyHistory', p.familyHistory?.join(', ') || 'None');
    setValue('previousConditions', p.conditions.join(', ') || 'None');
  };

  useEffect(() => {
    // Load patients for dropdown from real backend
    const fetchPatients = async () => {
      try {
        const res = await patientService.getAll({ limit: 100 });
        const adapted = adaptPatients(res.items);
        setPatients(adapted);
        if (initialPatientId) {
          const p = adapted.find(pat => pat.id === initialPatientId);
          if (p) prefillFromPatient(p);
        }
      } catch (err) {
        console.error('Failed to load patients:', err);
      }
    };
    fetchPatients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPatientId]);

  const handleNext = async () => {
    let fieldsToValidate: (keyof PredictionFormData)[] = [];
    if (currentStep === 0) fieldsToValidate = ['patientId', 'age', 'gender'];
    if (currentStep === 1) fieldsToValidate = ['height', 'weight', 'bloodPressureSystolic', 'bloodPressureDiastolic', 'heartRate'];
    if (currentStep === 2) fieldsToValidate = ['glucoseLevel', 'hba1c', 'cholesterol', 'triglycerides'];
    if (currentStep === 3) fieldsToValidate = ['smokingStatus', 'alcoholConsumption', 'exerciseFrequency', 'sleepDuration', 'stressLevel', 'dietType'];
    if (currentStep === 4) fieldsToValidate = ['familyHistory', 'previousConditions', 'medicationHistory'];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
    } else {
      error('Validation Error', 'Please check the required fields.');
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: PredictionFormData) => {
    setIsRunning(true);
    try {
      // Build input features based on disease type
      let inputFeatures: Record<string, number | string>;
      if (type === 'diabetes') {
        inputFeatures = {
          Pregnancies: 0,
          Glucose: data.glucoseLevel,
          BloodPressure: data.bloodPressureDiastolic,
          SkinThickness: 20,
          Insulin: 80,
          BMI: data.weight / Math.pow(data.height / 100, 2),
          DiabetesPedigreeFunction: 0.5,
          Age: data.age,
        };
      } else if (type === 'heart_disease') {
        inputFeatures = {
          age: data.age,
          sex: data.gender === 'male' ? 1 : 0,
          cp: 0,
          trestbps: data.bloodPressureSystolic,
          chol: data.cholesterol,
          fbs: data.glucoseLevel > 120 ? 1 : 0,
          restecg: 0,
          thalach: data.heartRate,
          exang: 0,
          oldpeak: 1.0,
          slope: 2,
          ca: 0,
          thal: 2,
        };
      } else {
        // Fallback: try diabetes format
        inputFeatures = {
          Glucose: data.glucoseLevel,
          BMI: data.weight / Math.pow(data.height / 100, 2),
          Age: data.age,
        };
      }

      const result = await predictionService.create({
        patient_id: data.patientId,
        input_features: inputFeatures,
      });

      localStorage.removeItem(draftKey);
      success('Prediction Complete', 'AI analysis has been successfully generated.');
      navigate(ROUTES.PREDICTION_RESULT.replace(':id', result.id));
    } catch (err: unknown) {
      const apiError = err as { response?: { data?: { detail?: string } } };
      const msg = apiError?.response?.data?.detail ?? 'AI prediction failed.';
      error('Prediction Failed', msg);
    } finally {
      setIsRunning(false);
    }
  };

  const diseaseTitle = type ? DISEASE_LABELS[type] || 'Disease' : 'Disease';

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={() => navigate(ROUTES.PREDICTION)} className="p-2">
          <ArrowLeft size={18} />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Run AI {diseaseTitle} Prediction</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Enter clinical parameters to generate a risk assessment model.</p>
        </div>
      </div>

      {/* Stepper Header */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-700 -z-10 -translate-y-1/2"></div>
          {[...STEPS, { id: 'review', title: 'Review', icon: CheckCircle }].map((step, index) => (
            <div key={step.id} className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 transition-colors ${
                currentStep >= index 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-400'
              }`}>
                <step.icon size={18} />
              </div>
              <span className={`text-xs font-semibold hidden sm:block ${currentStep >= index ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden min-h-[450px] flex flex-col relative">
        
        {/* Loading Overlay */}
        {isRunning && (
          <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
            <BrainCircuit size={48} className="text-blue-600 dark:text-blue-400 animate-pulse mb-4" />
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Analyzing clinical data...</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Running model inference algorithms.</p>
            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-700 rounded-full mt-6 overflow-hidden">
              <div className="h-full bg-blue-600 animate-[progress_2s_ease-in-out_infinite]" />
            </div>
          </div>
        )}

        <FormProvider {...methods}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <form onSubmit={handleSubmit(onSubmit as any)} className="flex flex-col flex-1">
            
            <div className="p-6 flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  
                  {/* Step 1: Patient Select */}
                  {currentStep === 0 && (
                    <div className="space-y-6">
                      <h2 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">Patient Selection</h2>
                      
                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Select Existing Patient (Optional Autofill)</label>
                          <select 
                            onChange={(e) => {
                              const p = patients.find(pat => pat.id === e.target.value);
                              if (p) prefillFromPatient(p);
                            }}
                            value={formValues.patientId}
                            className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 dark:text-slate-200"
                          >
                            <option value="">Select a patient to autofill...</option>
                            {patients.slice(0, 50).map(p => (
                              <option key={p.id} value={p.id}>{p.firstName} {p.lastName} (ID: {p.id})</option>
                            ))}
                          </select>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input label="Age" name="age" type="number" />
                          <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Gender</label>
                            <select {...methods.register('gender')} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 dark:text-slate-200 text-sm">
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Vitals */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">Physical Vitals</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Height (cm)" name="height" type="number" />
                        <Input label="Weight (kg)" name="weight" type="number" />
                        <Input label="Systolic Blood Pressure (mmHg)" name="bloodPressureSystolic" type="number" />
                        <Input label="Diastolic Blood Pressure (mmHg)" name="bloodPressureDiastolic" type="number" />
                        <Input label="Resting Heart Rate (bpm)" name="heartRate" type="number" />
                        
                        <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-md">
                            <Activity size={20} />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Calculated BMI</p>
                            <p className="font-bold text-slate-800 dark:text-white">
                              {formValues.height && formValues.weight ? (formValues.weight / Math.pow(formValues.height / 100, 2)).toFixed(1) : '--'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Labs */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">Laboratory Results</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Fasting Glucose (mg/dL)" name="glucoseLevel" type="number" />
                        <Input label="HbA1c (%)" name="hba1c" type="number" step="0.1" />
                        <Input label="Total Cholesterol (mg/dL)" name="cholesterol" type="number" />
                        <Input label="Triglycerides (mg/dL)" name="triglycerides" type="number" />
                      </div>
                    </div>
                  )}

                  {/* Step 4: Lifestyle */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">Lifestyle Factors</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Smoking Status</label>
                          <select {...methods.register('smokingStatus')} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 dark:text-slate-200 text-sm">
                            <option value="never">Never Smoked</option>
                            <option value="former">Former Smoker</option>
                            <option value="current">Current Smoker</option>
                          </select>
                        </div>
                        
                        <div className="space-y-1.5">
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Alcohol Consumption</label>
                          <select {...methods.register('alcoholConsumption')} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 dark:text-slate-200 text-sm">
                            <option value="none">None</option>
                            <option value="light">Light</option>
                            <option value="moderate">Moderate</option>
                            <option value="heavy">Heavy</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Exercise Frequency</label>
                          <select {...methods.register('exerciseFrequency')} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 dark:text-slate-200 text-sm">
                            <option value="sedentary">Sedentary (Rarely)</option>
                            <option value="light">Light (1-2 times/wk)</option>
                            <option value="moderate">Moderate (3-4 times/wk)</option>
                            <option value="active">Active (5+ times/wk)</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Stress Level</label>
                          <select {...methods.register('stressLevel')} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 dark:text-slate-200 text-sm">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                          </select>
                        </div>

                        <Input label="Avg Sleep Duration (hrs)" name="sleepDuration" type="number" />
                        <Input label="Diet Type" name="dietType" placeholder="e.g. Balanced, Vegetarian, Keto" />
                      </div>
                    </div>
                  )}

                  {/* Step 5: History */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h2 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">Medical History</h2>
                      <div className="space-y-6">
                        <Input label="Family History" name="familyHistory" placeholder="e.g. Father: Heart Disease, Mother: Diabetes (or None)" />
                        <Input label="Previous Conditions" name="previousConditions" placeholder="e.g. Hypertension, Asthma (or None)" />
                        <Input label="Current Medications" name="medicationHistory" placeholder="e.g. Metformin 500mg, Lisinopril 10mg (or None)" />
                      </div>
                    </div>
                  )}

                  {/* Step 6: Review */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <h2 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">Review Data</h2>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 border border-blue-100 dark:border-blue-800 flex items-start gap-4">
                        <BrainCircuit className="text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                        <div>
                          <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-1">Ready for Inference</h3>
                          <p className="text-sm text-blue-800 dark:text-blue-400 opacity-80">
                            The input features have been normalized and validated. Clicking 'Run Prediction' will execute the {diseaseTitle} risk analysis model against this data array.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                          <p className="text-xs text-slate-500">Age / Gender</p>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">{formValues.age} / {formValues.gender}</p>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                          <p className="text-xs text-slate-500">BP</p>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">{formValues.bloodPressureSystolic}/{formValues.bloodPressureDiastolic}</p>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                          <p className="text-xs text-slate-500">Glucose / HbA1c</p>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">{formValues.glucoseLevel} / {formValues.hba1c}</p>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                          <p className="text-xs text-slate-500">Lifestyle Risk</p>
                          <p className="font-semibold text-slate-800 dark:text-slate-200 capitalize">{formValues.smokingStatus} smoker</p>
                        </div>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            <div className="p-6 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 flex justify-between items-center">
              <Button 
                type="button" 
                variant="outline" 
                leftIcon={<ArrowLeft size={16} />} 
                onClick={handlePrev}
                disabled={currentStep === 0 || isRunning}
              >
                Previous
              </Button>
              
              {currentStep < STEPS.length ? (
                <Button 
                  type="button" 
                  variant="primary" 
                  rightIcon={<ArrowRight size={16} />}
                  onClick={handleNext}
                >
                  Next Step
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  variant="primary" 
                  leftIcon={<BrainCircuit size={16} />}
                  className="bg-blue-600 hover:bg-blue-700"
                  isLoading={isRunning}
                >
                  Run Prediction
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
