import React from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, MessageCircle, FileText, Keyboard, Info, ExternalLink } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export function HelpCenterPage() {
  return (
    <div className="max-w-5xl space-y-8">
      {/* Header & Search */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative z-10 max-w-2xl mx-auto text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">How can we help you today?</h1>
          <p className="text-blue-100 mb-8 text-lg">Search for guides, FAQs, and documentation</p>
          <div className="relative max-w-lg mx-auto text-left">
            <Input 
              leftIcon={<Search size={18} className="text-slate-400" />} 
              placeholder="Search for articles..." 
              className="pl-10 py-3 shadow-lg border-0"
              containerClassName="mb-0"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <BookOpen size={24} />, title: 'Getting Started', desc: 'Learn the basics of the Predictive Healthcare AI platform.' },
          { icon: <FileText size={24} />, title: 'AI Prediction Guide', desc: 'Detailed explanation of how our machine learning models work.' },
          { icon: <Keyboard size={24} />, title: 'Keyboard Shortcuts', desc: 'Navigate the platform quickly like a pro.' },
          { icon: <Info size={24} />, title: 'About Application', desc: 'Version information, changelogs, and release notes.' },
          { icon: <MessageCircle size={24} />, title: 'Support Contact', desc: 'Get in touch with our dedicated medical IT support team.' },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{card.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{card.desc}</p>
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
              Read more <ExternalLink size={14} />
            </span>
          </motion.div>
        ))}
      </div>

      {/* FAQs */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'How accurate are the AI predictions?', a: 'Our models are trained on extensive clinical datasets and average over 94% accuracy, though they should always be used as a supplementary tool alongside professional medical judgment.' },
            { q: 'Is patient data secure and HIPAA compliant?', a: 'Yes, the platform employs end-to-end encryption and strict role-based access controls to maintain full HIPAA compliance.' },
            { q: 'How do I export analytics reports?', a: 'Navigate to the Analytics Dashboard and click the "Export Report" button in the top right corner to generate a PDF.' },
          ].map((faq, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h4 className="text-base font-semibold text-slate-800 dark:text-white mb-2">{faq.q}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
