import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, ArrowRight, Save, User, Activity, Coffee, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useToast } from '../context/ToastContext';
import { ROUTES } from '../constants';

const patientSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  age: z.coerce.number().min(0).max(120),
  gender: z.enum(['male', 'female', 'other']),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  bloodType: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  allergies: z.string(),
  chronicConditions: z.string(),
  smokingStatus: z.enum(['never', 'former', 'current']),
  alcoholConsumption: z.enum(['none', 'light', 'moderate', 'heavy']),
  physicalActivity: z.enum(['sedentary', 'light', 'moderate', 'active']),
  diet: z.string().min(2, 'Please specify diet'),
});

type PatientFormData = z.infer<typeof patientSchema>;

const STEPS = [
  { id: 'personal', title: 'Personal Info', icon: User },
  { id: 'medical', title: 'Medical Details', icon: Activity },
  { id: 'lifestyle', title: 'Lifestyle', icon: Coffee },
  { id: 'review', title: 'Review', icon: CheckCircle },
];

export function AddPatientPage() {
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [currentStep, setCurrentStep] = useState(0);

  // Load draft from localstorage
  const draftData = localStorage.getItem('patientDraft') 
    ? JSON.parse(localStorage.getItem('patientDraft')!) 
    : {};

  const methods = useForm<PatientFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(patientSchema) as any,
    defaultValues: {
      firstName: draftData.firstName || '',
      lastName: draftData.lastName || '',
      age: draftData.age || 0,
      gender: draftData.gender || 'male',
      email: draftData.email || '',
      phone: draftData.phone || '',
      bloodType: draftData.bloodType || 'A+',
      allergies: draftData.allergies || '',
      chronicConditions: draftData.chronicConditions || '',
      smokingStatus: draftData.smokingStatus || 'never',
      alcoholConsumption: draftData.alcoholConsumption || 'none',
      physicalActivity: draftData.physicalActivity || 'light',
      diet: draftData.diet || '',
    },
    mode: 'onTouched',
  });

  const { handleSubmit, trigger, formState: { errors, isValid } } = methods;
  const formValues = useWatch({ control: methods.control }) as PatientFormData;

  useEffect(() => {
    // Autosave draft
    localStorage.setItem('patientDraft', JSON.stringify(formValues));
  }, [formValues]);

  const handleNext = async () => {
    let fieldsToValidate: (keyof PatientFormData)[] = [];
    if (currentStep === 0) fieldsToValidate = ['firstName', 'lastName', 'age', 'gender', 'email', 'phone'];
    if (currentStep === 1) fieldsToValidate = ['bloodType', 'allergies', 'chronicConditions'];
    if (currentStep === 2) fieldsToValidate = ['smokingStatus', 'alcoholConsumption', 'physicalActivity', 'diet'];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
    } else {
      error('Validation Error', 'Please check the highlighted fields.');
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const onSubmit = (_data: PatientFormData) => {
    localStorage.removeItem('patientDraft');
    success('Patient Registered', 'The patient has been successfully added to the system.');
    navigate(ROUTES.PATIENTS);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={() => navigate(ROUTES.PATIENTS)} className="p-2">
          <ArrowLeft size={18} />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Register New Patient</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Complete the multi-step form to add a new record.</p>
        </div>
      </div>

      {/* Stepper Header */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-700 -z-10 -translate-y-1/2"></div>
          {STEPS.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 transition-colors ${
                currentStep >= index 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-400'
              }`}>
                <step.icon size={18} />
              </div>
              <span className={`text-xs font-semibold ${currentStep >= index ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden min-h-[400px] flex flex-col">
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
                  
                  {/* Step 1: Personal Info */}
                  {currentStep === 0 && (
                    <div className="space-y-6">
                      <h2 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">Personal Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="First Name" name="firstName" placeholder="e.g. John" error={errors.firstName?.message} />
                        <Input label="Last Name" name="lastName" placeholder="e.g. Doe" error={errors.lastName?.message} />
                        <Input label="Age" name="age" type="number" error={errors.age?.message} />
                        
                        <div className="space-y-1.5">
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Gender</label>
                          <select {...methods.register('gender')} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 dark:text-slate-200 text-sm">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <Input label="Email Address" name="email" type="email" placeholder="john.doe@example.com" error={errors.email?.message} />
                        <Input label="Phone Number" name="phone" placeholder="+1 (555) 000-0000" error={errors.phone?.message} />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Medical Details */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">Medical History</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Blood Type</label>
                          <select {...methods.register('bloodType')} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 dark:text-slate-200 text-sm">
                            {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        
                        <Input label="Known Allergies" name="allergies" placeholder="e.g. Penicillin, Peanuts (or None)" error={errors.allergies?.message} />
                        
                        <div className="md:col-span-2">
                          <Input label="Chronic Conditions" name="chronicConditions" placeholder="e.g. Hypertension, Asthma (or None)" error={errors.chronicConditions?.message} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Lifestyle */}
                  {currentStep === 2 && (
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
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Physical Activity</label>
                          <select {...methods.register('physicalActivity')} className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 dark:text-slate-200 text-sm">
                            <option value="sedentary">Sedentary</option>
                            <option value="light">Light Activity</option>
                            <option value="moderate">Moderate Activity</option>
                            <option value="active">Highly Active</option>
                          </select>
                        </div>

                        <Input label="Diet Preferences / Notes" name="diet" placeholder="e.g. Vegetarian, Keto, Normal" error={errors.diet?.message} />

                      </div>
                    </div>
                  )}

                  {/* Step 4: Review */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2 flex items-center gap-2">
                        Review Patient Details
                        {!isValid && <AlertCircle size={16} className="text-red-500" />}
                      </h2>
                      
                      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-5 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        
                        <div>
                          <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2 border-b border-slate-200 dark:border-slate-700 pb-1">Personal</h3>
                          <p className="text-slate-600 dark:text-slate-400 mb-1"><span className="font-medium text-slate-800 dark:text-slate-200">Name:</span> {formValues.firstName} {formValues.lastName}</p>
                          <p className="text-slate-600 dark:text-slate-400 mb-1"><span className="font-medium text-slate-800 dark:text-slate-200">Age/Gender:</span> {formValues.age} y/o {formValues.gender}</p>
                          <p className="text-slate-600 dark:text-slate-400"><span className="font-medium text-slate-800 dark:text-slate-200">Contact:</span> {formValues.email} | {formValues.phone}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2 border-b border-slate-200 dark:border-slate-700 pb-1">Medical</h3>
                          <p className="text-slate-600 dark:text-slate-400 mb-1"><span className="font-medium text-slate-800 dark:text-slate-200">Blood Type:</span> {formValues.bloodType}</p>
                          <p className="text-slate-600 dark:text-slate-400 mb-1"><span className="font-medium text-slate-800 dark:text-slate-200">Allergies:</span> {formValues.allergies}</p>
                          <p className="text-slate-600 dark:text-slate-400"><span className="font-medium text-slate-800 dark:text-slate-200">Conditions:</span> {formValues.chronicConditions}</p>
                        </div>

                        <div className="md:col-span-2">
                          <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2 border-b border-slate-200 dark:border-slate-700 pb-1">Lifestyle</h3>
                          <div className="flex gap-6">
                            <p className="text-slate-600 dark:text-slate-400 mb-1"><span className="font-medium text-slate-800 dark:text-slate-200">Smoking:</span> {formValues.smokingStatus}</p>
                            <p className="text-slate-600 dark:text-slate-400 mb-1"><span className="font-medium text-slate-800 dark:text-slate-200">Alcohol:</span> {formValues.alcoholConsumption}</p>
                            <p className="text-slate-600 dark:text-slate-400"><span className="font-medium text-slate-800 dark:text-slate-200">Activity:</span> {formValues.physicalActivity}</p>
                          </div>
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
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              
              {currentStep < STEPS.length - 1 ? (
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
                  leftIcon={<Save size={16} />}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Register Patient
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
