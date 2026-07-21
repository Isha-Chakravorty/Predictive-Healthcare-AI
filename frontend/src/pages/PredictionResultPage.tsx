import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Download, Share2, Printer, BookmarkPlus, AlertTriangle, 
  CheckCircle, BrainCircuit, Activity, Info, ChevronRight, TrendingUp, TrendingDown, Minus
} from 'lucide-react';
import { Doughnut } from 'react-chartjs-2';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useToast } from '../context/ToastContext';
import { ROUTES, DISEASE_LABELS } from '../constants';
import { predictionService } from '../services/mockService';
import { DiseasePrediction } from '../types';

export function PredictionResultPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [prediction, setPrediction] = useState<DiseasePrediction | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!id) return;
      try {
        const res = await predictionService.getById(id);
        if (res.success && res.data) {
          setPrediction(res.data);
        } else {
          // If not found, just grab any prediction for demo purposes
          const fallback = await predictionService.getAll();
          if (fallback.data && fallback.data.length > 0) {
             setPrediction(fallback.data[0]);
             success('Demo Mode', 'Using a sample prediction result.');
          } else {
             error('Error', 'Prediction not found.');
             navigate(ROUTES.PREDICTION);
          }
        }
      } catch(e) {
        error('Error', 'Failed to load prediction result.');
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [id, navigate, error, success]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="flex flex-col items-center">
          <BrainCircuit size={48} className="text-blue-500 animate-pulse mb-4" />
          <p className="text-slate-500 font-medium">Retrieving inference report...</p>
        </div>
      </div>
    );
  }

  if (!prediction) return null;

  const getRiskColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low': return 'text-green-500';
      case 'medium': return 'text-orange-500';
      case 'high': return 'text-red-500';
      case 'critical': return 'text-red-700';
      default: return 'text-slate-500';
    }
  };

  const getRiskBg = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-orange-500';
      case 'high': return 'bg-red-500';
      case 'critical': return 'bg-red-700';
      default: return 'bg-slate-500';
    }
  };

  const riskScore = Math.round(prediction.probability * 100);
  
  const doughnutData = {
    labels: ['Risk', 'Safe'],
    datasets: [{
      data: [riskScore, 100 - riskScore],
      backgroundColor: [
        prediction.riskLevel === 'high' || prediction.riskLevel === 'critical' ? '#ef4444' : (prediction.riskLevel as string) === 'medium' || (prediction.riskLevel as string) === 'moderate' ? '#f97316' : '#22c55e',
        '#e2e8f0' // Slate 200
      ],
      borderWidth: 0,
      cutout: '80%',
      circumference: 270,
      rotation: 225,
    }]
  };

  const handleExport = (action: string) => {
    success(`${action} Initiated`, 'This feature uses mock UI in the current phase.');
  };

  const diseaseName = DISEASE_LABELS[prediction.diseaseType] || prediction.diseaseType;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => navigate(ROUTES.PREDICTION)} className="p-2">
            <ArrowLeft size={18} />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <BrainCircuit className="text-blue-600 dark:text-blue-400" size={24} />
              AI Prediction Report
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
              Model {prediction.modelVersion} • Generated {prediction.completedAt ? new Date(prediction.completedAt).toLocaleString() : 'Recently'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" leftIcon={<Printer size={16} />} onClick={() => handleExport('Print')}>Print</Button>
          <Button variant="outline" size="sm" leftIcon={<Share2 size={16} />} onClick={() => handleExport('Share')}>Share</Button>
          <Button variant="outline" size="sm" leftIcon={<BookmarkPlus size={16} />} onClick={() => handleExport('Save')}>Save</Button>
          <Button variant="primary" size="sm" leftIcon={<Download size={16} />} onClick={() => handleExport('PDF Download')}>PDF</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Risk Gauge & Overview */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm flex flex-col items-center"
          >
            <h2 className="text-lg font-bold text-slate-800 dark:text-white self-start mb-4">{diseaseName} Risk</h2>
            
            <div className="relative w-48 h-48">
              <Doughnut data={doughnutData} options={{ plugins: { tooltip: { enabled: false } }, maintainAspectRatio: false }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-4xl font-black ${getRiskColor(prediction.riskLevel)}`}>{riskScore}%</span>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mt-1">{prediction.riskLevel}</span>
              </div>
            </div>

            <div className="w-full mt-6 grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
                <p className="text-xs text-slate-500 font-medium mb-1">Confidence Score</p>
                <p className="text-lg font-bold text-slate-800 dark:text-white">{(prediction.confidence * 100).toFixed(1)}%</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700 text-center">
                <p className="text-xs text-slate-500 font-medium mb-1">Health Score</p>
                <p className="text-lg font-bold text-slate-800 dark:text-white">{prediction.result.overallHealthScore || '--'}/100</p>
              </div>
            </div>
            
            {prediction.result.estimatedSeverity && (
              <div className={`w-full mt-4 p-3 rounded-xl flex items-center justify-center gap-2 ${prediction.result.estimatedSeverity === 'severe' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-orange-50 text-orange-700 border border-orange-100'}`}>
                <AlertTriangle size={16} />
                <span className="font-semibold text-sm">Estimated Severity: <span className="capitalize">{prediction.result.estimatedSeverity}</span></span>
              </div>
            )}
          </motion.div>

          {/* Patient Snippet */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm"
          >
            <h3 className="font-bold text-slate-800 dark:text-white mb-3">Patient Context</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-2">
                <span className="text-slate-500 text-sm">Patient Name</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{prediction.patientName}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-2">
                <span className="text-slate-500 text-sm">Patient ID</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{prediction.patientId}</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-slate-500 text-sm">Age / Gender</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 capitalize">{prediction.features.age} / {prediction.features.gender}</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-2" onClick={() => navigate(ROUTES.PATIENT_DETAIL.replace(':id', prediction.patientId))}>
              View Full Profile
            </Button>
          </motion.div>
        </div>

        {/* Middle & Right Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Explainable AI Insights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-5">
              <BrainCircuit className="text-purple-600" size={24} />
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">Explainable AI Insights</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prediction.result.insights?.map((insight, idx) => (
                <div key={insight.id} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                  <div className={`p-2 rounded-full mt-0.5 shrink-0 ${
                    insight.impactType === 'negative' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                    insight.impactType === 'positive' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                    'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                  }`}>
                    {insight.impactType === 'negative' ? <TrendingUp size={16} /> :
                     insight.impactType === 'positive' ? <TrendingDown size={16} /> : <Minus size={16} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">{insight.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{insight.description}</p>
                  </div>
                </div>
              ))}
              {(!prediction.result.insights || prediction.result.insights.length === 0) && (
                <div className="col-span-2 p-4 bg-slate-50 text-slate-500 rounded-xl text-center text-sm">
                  No insights available for this prediction model.
                </div>
              )}
            </div>
          </motion.div>

          {/* Probability Bars (Risk Breakdown) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm"
          >
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2">
              <Activity className="text-blue-500" size={24} />
              Feature Contribution (Mock)
            </h2>
            
            <div className="space-y-4">
              {prediction.result.riskFactors.map((factor, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{factor.factor} ({factor.value})</span>
                    <span className="text-slate-500 dark:text-slate-400">Norm: {factor.normalRange}</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getRiskBg(factor.impact)}`} 
                      style={{ width: factor.impact === 'high' ? '85%' : factor.impact === 'medium' ? '50%' : '20%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <CheckCircle className="text-green-500" size={24} />
                Actionable Recommendations
              </h2>
            </div>
            
            <div className="space-y-3">
              {prediction.result.recommendations?.map((rec, idx) => (
                <div key={rec.id} className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors flex items-start gap-4">
                  <div className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider shrink-0 mt-0.5 ${
                    rec.priority === 'high' || rec.priority === 'critical' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' :
                    rec.priority === 'medium' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400' :
                    'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
                  }`}>
                    {rec.priority}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">{rec.text}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <span className="capitalize">{rec.category}</span>
                      <span>•</span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">Impact: {rec.estimatedImpact}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
