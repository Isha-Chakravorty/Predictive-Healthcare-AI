import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { Brain, Loader2, CheckCircle, AlertTriangle, ChevronRight, Info } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input, Select } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { RiskBadge } from '../components/ui/Badge';
import { predictionService } from '../services/mockService';
import { useToast } from '../context/ToastContext';
import { DISEASE_LABELS } from '../constants';

const predictionSchema = z.object({
  patientId:              z.string().min(1, 'Patient ID is required'),
  diseaseType:            z.string().min(1, 'Disease type is required'),
  age:                    z.number({ error: 'Required' }).min(1).max(120),
  gender:                 z.string().min(1, 'Required'),
  bmi:                    z.number({ error: 'Required' }).min(10).max(60),
  bloodPressureSystolic:  z.number({ error: 'Required' }).min(60).max(250),
  bloodPressureDiastolic: z.number({ error: 'Required' }).min(40).max(150),
  glucoseLevel:           z.number({ error: 'Required' }).min(40).max(600),
  cholesterol:            z.number({ error: 'Required' }).min(50).max(500),
  heartRate:              z.number({ error: 'Required' }).min(30).max(220),
  smokingStatus:          z.string().min(1, 'Required'),
  familyHistory:          z.string().min(1, 'Required'),
  physicalActivity:       z.string().min(1, 'Required'),
  alcoholConsumption:     z.string().min(1, 'Required'),
});

type PredictionForm = z.infer<typeof predictionSchema>;

interface PredictionResult {
  probability: number;
  confidence: number;
  riskLevel: string;
  diagnosis: string;
}

export function PredictionPage() {
  const { success, error } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<PredictionForm>({
    resolver: zodResolver(predictionSchema),
    defaultValues: {
      age: 45, bmi: 25, bloodPressureSystolic: 120, bloodPressureDiastolic: 80,
      glucoseLevel: 100, cholesterol: 180, heartRate: 72,
    },
  });

  const onSubmit = async (data: PredictionForm) => {
    setIsLoading(true);
    setResult(null);
    try {
      const res = await predictionService.runPrediction(data as unknown as Record<string, unknown>);
      setResult(res.data as PredictionResult);
      success('Prediction Complete', 'AI analysis has been completed successfully.');
      setStep(3);
    } catch {
      error('Prediction Failed', 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    reset();
    setResult(null);
    setStep(1);
  };

  const diseaseOptions = Object.entries(DISEASE_LABELS).map(([value, label]) => ({ value, label }));

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <Brain size={24} className="text-purple-600 dark:text-purple-400" />
          Disease Prediction
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
          AI-powered risk assessment using clinical parameters
        </p>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2">
        {['Patient Info', 'Clinical Data', 'Results'].map((s, i) => (
          <React.Fragment key={s}>
            <div className={`flex items-center gap-2 ${i < step ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-600'}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${i + 1 < step ? 'bg-blue-600 border-blue-600 text-white' : i + 1 === step ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' : 'border-slate-300 dark:border-slate-600'}`}>
                {i + 1 < step ? <CheckCircle size={14} /> : i + 1}
              </div>
              <span className="text-sm font-medium hidden sm:inline">{s}</span>
            </div>
            {i < 2 && <ChevronRight size={16} className="text-slate-300 dark:text-slate-600" />}
          </React.Fragment>
        ))}
      </div>

      {/* Form */}
      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Step 1: Patient info */}
              <Card>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200">Patient Information</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Patient ID"
                    placeholder="e.g. HCA-2024-001"
                    error={errors.patientId?.message}
                    required
                    {...register('patientId')}
                  />
                  <Select
                    label="Disease Type"
                    options={diseaseOptions}
                    placeholder="Select disease type"
                    error={errors.diseaseType?.message}
                    required
                    {...register('diseaseType')}
                  />
                  <Input
                    label="Age"
                    type="number"
                    placeholder="45"
                    error={errors.age?.message}
                    required
                    {...register('age', { valueAsNumber: true })}
                  />
                  <Select
                    label="Gender"
                    options={[
                      { value: 'male', label: 'Male' },
                      { value: 'female', label: 'Female' },
                      { value: 'other', label: 'Other' },
                    ]}
                    placeholder="Select gender"
                    error={errors.gender?.message}
                    required
                    {...register('gender')}
                  />
                </div>
              </Card>

              {/* Step 2: Clinical data */}
              <Card>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200">Clinical Parameters</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Input label="BMI" type="number" step="0.1" placeholder="25.0" error={errors.bmi?.message} required
                    hint="Normal: 18.5–24.9" {...register('bmi', { valueAsNumber: true })} />
                  <Input label="Systolic BP (mmHg)" type="number" placeholder="120" error={errors.bloodPressureSystolic?.message} required
                    hint="Normal: <120" {...register('bloodPressureSystolic', { valueAsNumber: true })} />
                  <Input label="Diastolic BP (mmHg)" type="number" placeholder="80" error={errors.bloodPressureDiastolic?.message} required
                    hint="Normal: <80" {...register('bloodPressureDiastolic', { valueAsNumber: true })} />
                  <Input label="Glucose (mg/dL)" type="number" placeholder="100" error={errors.glucoseLevel?.message} required
                    hint="Normal: <100" {...register('glucoseLevel', { valueAsNumber: true })} />
                  <Input label="Cholesterol (mg/dL)" type="number" placeholder="180" error={errors.cholesterol?.message} required
                    hint="Normal: <200" {...register('cholesterol', { valueAsNumber: true })} />
                  <Input label="Heart Rate (bpm)" type="number" placeholder="72" error={errors.heartRate?.message} required
                    hint="Normal: 60–100" {...register('heartRate', { valueAsNumber: true })} />
                  <Select label="Smoking Status" options={[
                    { value: 'never', label: 'Never Smoked' },
                    { value: 'former', label: 'Former Smoker' },
                    { value: 'current', label: 'Current Smoker' },
                  ]} placeholder="Select" error={errors.smokingStatus?.message} required {...register('smokingStatus')} />
                  <Select label="Family History" options={[
                    { value: 'true', label: 'Yes — positive' },
                    { value: 'false', label: 'No — negative' },
                  ]} placeholder="Select" error={errors.familyHistory?.message} required {...register('familyHistory')} />
                  <Select label="Physical Activity" options={[
                    { value: 'sedentary', label: 'Sedentary' },
                    { value: 'light', label: 'Light' },
                    { value: 'moderate', label: 'Moderate' },
                    { value: 'active', label: 'Active' },
                    { value: 'very_active', label: 'Very Active' },
                  ]} placeholder="Select" error={errors.physicalActivity?.message} required {...register('physicalActivity')} />
                  <Select label="Alcohol Consumption" options={[
                    { value: 'none', label: 'None' },
                    { value: 'light', label: 'Light' },
                    { value: 'moderate', label: 'Moderate' },
                    { value: 'heavy', label: 'Heavy' },
                  ]} placeholder="Select" error={errors.alcoholConsumption?.message} required {...register('alcoholConsumption')} />
                </div>
              </Card>

              {/* Disclaimer */}
              <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                <Info size={18} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                  <strong>Clinical Disclaimer:</strong> This AI prediction is a decision-support tool only.
                  Results must be interpreted by a licensed healthcare professional. Not for use as a sole diagnostic tool.
                </p>
              </div>

              <div className="flex items-center gap-3 justify-end">
                <Button variant="outline" type="button" onClick={handleReset}>
                  Clear Form
                </Button>
                <Button
                  variant="gradient"
                  type="submit"
                  isLoading={isLoading}
                  leftIcon={isLoading ? undefined : <Brain size={16} />}
                >
                  {isLoading ? 'Analyzing...' : 'Run AI Prediction'}
                </Button>
              </div>

              {/* Loading state */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col items-center gap-4 py-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-4 border-blue-200 dark:border-blue-800 flex items-center justify-center">
                        <Brain size={28} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <Loader2 size={20} className="absolute -top-1 -right-1 text-blue-600 dark:text-blue-400 animate-spin" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-slate-700 dark:text-slate-200">AI Model Processing</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        Analyzing 14 clinical parameters...
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        ) : (
          /* Results */
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            {/* Result card */}
            <div className={`rounded-xl border-2 p-6 ${result.riskLevel === 'high' ? 'border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20' : result.riskLevel === 'moderate' ? 'border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20' : 'border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20'}`}>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {result.riskLevel === 'high' ? (
                      <AlertTriangle size={24} className="text-red-600 dark:text-red-400" />
                    ) : (
                      <CheckCircle size={24} className="text-green-600 dark:text-green-400" />
                    )}
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">Prediction Result</h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{result.diagnosis}</p>
                </div>
                <RiskBadge level={result.riskLevel as 'low' | 'moderate' | 'high' | 'critical'} size="lg" />
              </div>

              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-white/70 dark:bg-slate-800/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-slate-800 dark:text-white">
                    {(result.probability * 100).toFixed(1)}%
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Risk Probability</p>
                </div>
                <div className="bg-white/70 dark:bg-slate-800/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-slate-800 dark:text-white">
                    {(result.confidence * 100).toFixed(1)}%
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Model Confidence</p>
                </div>
                <div className="bg-white/70 dark:bg-slate-800/50 rounded-xl p-4 text-center col-span-2 sm:col-span-1">
                  <p className="text-2xl font-bold text-slate-800 dark:text-white capitalize">{result.riskLevel}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Risk Level</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={handleReset}>New Prediction</Button>
              <Button variant="primary">Save to History</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
