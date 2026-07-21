import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Activity, Heart, Droplet, Wind, FileText, Lock, Plus, Clock, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../constants';

const AVAILABLE_MODELS = [
  {
    id: 'diabetes',
    title: 'Diabetes Prediction',
    description: 'Predict the likelihood of Type 2 Diabetes based on vitals, lifestyle, and lab results.',
    icon: Droplet,
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    accuracy: '94.2%',
    status: 'active'
  },
  {
    id: 'heart_disease',
    title: 'Heart Disease Risk',
    description: 'Evaluate cardiovascular risk over the next 10 years using advanced clinical models.',
    icon: Heart,
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-900/20',
    accuracy: '91.8%',
    status: 'active'
  }
];

const UPCOMING_MODELS = [
  {
    id: 'kidney_disease',
    title: 'Kidney Disease',
    description: 'Chronic kidney disease progression forecasting.',
    icon: Activity,
    status: 'upcoming'
  },
  {
    id: 'liver_disease',
    title: 'Liver Disease',
    description: 'Hepatic condition probability assessment.',
    icon: FileText,
    status: 'upcoming'
  },
  {
    id: 'stroke',
    title: 'Stroke Risk',
    description: 'Cerebrovascular accident probability.',
    icon: Brain,
    status: 'upcoming'
  },
  {
    id: 'lung_disease',
    title: 'Lung Disease',
    description: 'Respiratory condition progression risk.',
    icon: Wind,
    status: 'upcoming'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: any = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export function PredictionPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <Brain className="text-blue-600 dark:text-blue-400" size={32} />
            AI Prediction Center
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Select a clinical model to run an AI-powered diagnostic prediction. 
            Our models are trained on diverse clinical datasets to provide explainable risk assessments.
          </p>
        </div>
        <Button variant="outline" leftIcon={<Activity size={18} />} onClick={() => navigate(ROUTES.PREDICTION_HISTORY)}>
          View History
        </Button>
      </div>

      {/* Available Models */}
      <section>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Available Models</h2>
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="show" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {AVAILABLE_MODELS.map((model) => (
            <motion.div key={model.id} variants={itemVariants}>
              <div 
                className="group h-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer flex flex-col"
                onClick={() => navigate(ROUTES.PREDICTION_NEW.replace(':type', model.id))}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${model.bg} ${model.color}`}>
                    <model.icon size={28} />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                    {model.accuracy} Acc
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{model.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-1">
                  {model.description}
                </p>
                
                <div className="mt-auto">
                  <Button 
                    className="w-full justify-center group-hover:bg-blue-700 transition-colors"
                    rightIcon={<Plus size={18} />}
                  >
                    Run Prediction
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Upcoming Models */}
      <section className="pt-6 border-t border-slate-200 dark:border-slate-700">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
          <Lock size={18} className="text-slate-400" />
          In Development
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {UPCOMING_MODELS.map((model) => (
            <div key={model.id} className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-5 opacity-70">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-500">
                  <model.icon size={20} />
                </div>
                <h3 className="font-semibold text-slate-700 dark:text-slate-300">{model.title}</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-500">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mini Prediction History Preview */}
      <section className="pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
            <Clock size={18} className="text-slate-400" />
            Recent Predictions
          </h2>
          <Button variant="ghost" size="sm" rightIcon={<ChevronRight size={16} />} onClick={() => navigate(ROUTES.PREDICTION_HISTORY)}>
            View All
          </Button>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm divide-y divide-slate-100 dark:divide-slate-700/50">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400`}>
                  <Brain size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200">Diabetes Risk Assessment</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Patient ID: P-1004{i} • 2 days ago</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
                  Medium Risk
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
