import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Bell, Shield, Palette, Globe, Database, Monitor, Keyboard, Info, Download, Trash2, ShieldAlert } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input, Select } from '../components/ui/Input';
import { useToast } from '../context/ToastContext';
import { useTheme } from '../context/ThemeContext';

interface SettingSection {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const sections: SettingSection[] = [
  { id: 'general',        label: 'General',         icon: <Settings size={16} /> },
  { id: 'appearance',     label: 'Appearance',      icon: <Palette size={16} /> },
  { id: 'notifications',  label: 'Notifications',   icon: <Bell size={16} />    },
  { id: 'security',       label: 'Security',        icon: <Shield size={16} />  },
  { id: 'privacy',        label: 'Data & Privacy',  icon: <Database size={16} />},
  { id: 'accessibility',  label: 'Accessibility',   icon: <Monitor size={16} /> },
  { id: 'shortcuts',      label: 'Keyboard',        icon: <Keyboard size={16} />},
  { id: 'system',         label: 'System Info',     icon: <Info size={16} />    },
];

function Toggle({ checked, onChange, label, desc }: { checked: boolean; onChange: () => void, label: string, desc?: string }) {
  return (
    <div className="flex items-start justify-between py-3">
      <div>
        <p className="text-sm font-medium text-slate-800 dark:text-white">{label}</p>
        {desc && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-sm">{desc}</p>}
      </div>
      <button
        type="button"
        onClick={onChange}
        className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shrink-0 ${checked ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'}`}
      >
        <motion.div
          animate={{ x: checked ? 20 : 2 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
        />
      </button>
    </div>
  );
}

export function SettingsPage() {
  const { success } = useToast();
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('general');
  const [isSaving, setIsSaving] = useState(false);

  const [settings, setSettings] = useState({
    emailAlerts: true,
    pushNotifications: true,
    smsAlerts: false,
    criticalAlerts: true,
    weeklyReports: true,
    predictionAlerts: true,
    appointmentReminders: true,
    highContrast: false,
    reducedMotion: false,
    twoFactor: false,
    dataSharing: false,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(s => ({ ...s, [key]: !s[key] }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsSaving(false);
    success('Settings saved', 'Your preferences have been updated successfully.');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'general':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">General Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select label="Language" options={[{value:'en', label:'English (US)'}, {value:'es', label:'Spanish'}, {value:'fr', label:'French'}]} defaultValue="en" />
              <Select label="Timezone" options={[{value:'pst', label:'Pacific Time (PT)'}, {value:'est', label:'Eastern Time (ET)'}, {value:'utc', label:'UTC'}]} defaultValue="pst" />
              <Select label="Date Format" options={[{value:'mmddyyyy', label:'MM/DD/YYYY'}, {value:'ddmmyyyy', label:'DD/MM/YYYY'}]} defaultValue="mmddyyyy" />
            </div>
          </div>
        );
      case 'appearance':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Appearance</h3>
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Theme Options</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(['light', 'dark'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${theme === t ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'}`}
                  >
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200 capitalize">{t} Theme</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Notification Preferences</h3>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <Toggle checked={settings.emailAlerts} onChange={() => handleToggle('emailAlerts')} label="Email Notifications" desc="Receive updates via email" />
              <Toggle checked={settings.pushNotifications} onChange={() => handleToggle('pushNotifications')} label="Push Notifications" desc="Receive push notifications in the browser" />
              <Toggle checked={settings.smsAlerts} onChange={() => handleToggle('smsAlerts')} label="SMS Notifications" desc="Receive important alerts via text message" />
              <Toggle checked={settings.criticalAlerts} onChange={() => handleToggle('criticalAlerts')} label="Critical Health Alerts" desc="Immediate notifications for high-risk patient predictions" />
              <Toggle checked={settings.predictionAlerts} onChange={() => handleToggle('predictionAlerts')} label="Prediction Completion Alerts" desc="Get notified when batch predictions are ready" />
              <Toggle checked={settings.appointmentReminders} onChange={() => handleToggle('appointmentReminders')} label="Appointment Reminders" desc="Reminders for upcoming patient meetings" />
              <Toggle checked={settings.weeklyReports} onChange={() => handleToggle('weeklyReports')} label="Weekly Reports" desc="Weekly summary of predictive analytics" />
            </div>
          </div>
        );
      case 'accessibility':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Accessibility Options</h3>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <Toggle checked={settings.highContrast} onChange={() => handleToggle('highContrast')} label="High Contrast Mode" desc="Increase contrast for easier reading" />
              <Toggle checked={settings.reducedMotion} onChange={() => handleToggle('reducedMotion')} label="Reduced Motion" desc="Disable UI animations and transitions" />
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Security Settings</h3>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <Toggle checked={settings.twoFactor} onChange={() => handleToggle('twoFactor')} label="Two-Factor Authentication (2FA)" desc="Require an extra security code during login" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-white mb-2">Active Sessions</p>
              <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Windows PC - Chrome</p>
                  <p className="text-xs text-slate-500">Current Session · IP: 192.168.1.1</p>
                </div>
                <Button variant="outline" size="sm">Revoke</Button>
              </div>
            </div>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Data & Privacy</h3>
            <div className="divide-y divide-slate-100 dark:divide-slate-800 mb-6">
              <Toggle checked={settings.dataSharing} onChange={() => handleToggle('dataSharing')} label="Anonymous Usage Data" desc="Help us improve by sending anonymous usage statistics" />
            </div>
            
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-medium text-slate-800 dark:text-white mb-3">Export Data</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Download a copy of all your patient and prediction data.</p>
              <Button variant="outline" leftIcon={<Download size={16} />}>Export All Data</Button>
            </div>
            
            <div className="pt-4 border-t border-red-200 dark:border-red-900/30">
              <h4 className="text-sm font-medium text-red-600 dark:text-red-400 mb-3 flex items-center gap-2"><ShieldAlert size={16} /> Danger Zone</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Permanently delete your account and all associated data.</p>
              <Button className="bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40 border-0" leftIcon={<Trash2 size={16} />}>Delete Account</Button>
            </div>
          </div>
        );
      case 'shortcuts':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Keyboard Shortcuts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Command Palette', keys: ['Ctrl', 'K'] },
                { label: 'New Patient', keys: ['Ctrl', 'Shift', 'P'] },
                { label: 'Run Prediction', keys: ['Ctrl', 'Enter'] },
                { label: 'Search', keys: ['/'] },
                { label: 'Close Modal', keys: ['Esc'] },
              ].map(shortcut => (
                <div key={shortcut.label} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                  <span className="text-sm text-slate-700 dark:text-slate-300">{shortcut.label}</span>
                  <div className="flex gap-1">
                    {shortcut.keys.map(k => (
                      <kbd key={k} className="px-2 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-xs font-mono text-slate-600 dark:text-slate-300 shadow-sm">{k}</kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'system':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">System Information</h3>
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-sm text-slate-500">Version</span>
                <span className="text-sm font-medium text-slate-800 dark:text-white">v1.0.0-enterprise</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-sm text-slate-500">Environment</span>
                <span className="text-sm font-medium text-slate-800 dark:text-white">Production</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-500">Last Updated</span>
                <span className="text-sm font-medium text-slate-800 dark:text-white">Oct 24, 2023</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Settings</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage your platform preferences and configurations</p>
        </div>
        <Button variant="primary" onClick={handleSave} isLoading={isSaving}>Save Changes</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-1">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 min-h-[400px]"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
