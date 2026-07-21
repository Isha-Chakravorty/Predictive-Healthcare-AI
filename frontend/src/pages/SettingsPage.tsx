import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Bell, Shield, Palette, Globe, Database, ChevronRight, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Input';
import { useToast } from '../context/ToastContext';
import { useTheme } from '../context/ThemeContext';

interface SettingSection {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const sections: SettingSection[] = [
  { id: 'appearance',     label: 'Appearance',     icon: <Palette size={16} /> },
  { id: 'notifications',  label: 'Notifications',   icon: <Bell size={16} />    },
  { id: 'security',       label: 'Security',         icon: <Shield size={16} />  },
  { id: 'regional',       label: 'Regional',         icon: <Globe size={16} />   },
  { id: 'data',           label: 'Data & Privacy',   icon: <Database size={16} />},
];

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${checked ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'}`}
    >
      <motion.div
        animate={{ x: checked ? 20 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
      />
    </button>
  );
}

export function SettingsPage() {
  const { success } = useToast();
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('appearance');
  const [isSaving, setIsSaving] = useState(false);

  const [notifSettings, setNotifSettings] = useState({
    emailAlerts: true,
    pushNotifications: true,
    smsAlerts: false,
    criticalAlerts: true,
    weeklyReports: true,
    modelUpdates: false,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: false,
    sessionTimeout: '30',
    loginNotifications: true,
  });

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsSaving(false);
    success('Settings saved', 'Your preferences have been updated successfully.');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Theme</h3>
              <div className="grid grid-cols-2 gap-3">
                {(['light', 'dark'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`relative p-4 rounded-xl border-2 transition-all text-left ${theme === t ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'}`}
                  >
                    {theme === t && <Check size={14} className="absolute top-3 right-3 text-blue-600 dark:text-blue-400" />}
                    <div className={`w-full h-16 rounded-lg mb-3 ${t === 'light' ? 'bg-gradient-to-br from-slate-50 to-white border border-slate-200' : 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700'}`} />
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200 capitalize">{t} Mode</p>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Dashboard Layout</h3>
              <Select
                options={[
                  { value: 'compact',     label: 'Compact' },
                  { value: 'comfortable', label: 'Comfortable (Default)' },
                  { value: 'spacious',    label: 'Spacious' },
                ]}
                defaultValue="comfortable"
                containerClassName="max-w-xs"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Language</h3>
              <Select
                options={[
                  { value: 'en', label: 'English (United States)' },
                  { value: 'es', label: 'Español' },
                  { value: 'fr', label: 'Français' },
                ]}
                defaultValue="en"
                containerClassName="max-w-xs"
              />
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-4">
            {Object.entries({
              emailAlerts:        { label: 'Email Alerts',          desc: 'Receive critical alerts via email' },
              pushNotifications:  { label: 'Push Notifications',    desc: 'In-app browser notifications' },
              smsAlerts:          { label: 'SMS Alerts',            desc: 'Text message for critical events' },
              criticalAlerts:     { label: 'Critical Patient Alerts', desc: 'Immediate alerts for critical cases' },
              weeklyReports:      { label: 'Weekly Reports',        desc: 'Automated analytics digest' },
              modelUpdates:       { label: 'Model Updates',         desc: 'Notifications when AI models retrain' },
            }).map(([key, config]) => (
              <div key={key} className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-700 last:border-0">
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{config.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{config.desc}</p>
                </div>
                <Toggle
                  checked={notifSettings[key as keyof typeof notifSettings]}
                  onChange={() => setNotifSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof notifSettings] }))}
                />
              </div>
            ))}
          </div>
        );

      case 'security':
        return (
          <div className="space-y-5">
            <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-700">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Two-Factor Authentication</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Adds an extra layer of security</p>
              </div>
              <Toggle
                checked={securitySettings.twoFactor}
                onChange={() => setSecuritySettings(prev => ({ ...prev, twoFactor: !prev.twoFactor }))}
              />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-700">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Login Notifications</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Alert on new device sign-in</p>
              </div>
              <Toggle
                checked={securitySettings.loginNotifications}
                onChange={() => setSecuritySettings(prev => ({ ...prev, loginNotifications: !prev.loginNotifications }))}
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Session Timeout</h3>
              <Select
                options={[
                  { value: '15', label: '15 minutes' },
                  { value: '30', label: '30 minutes (recommended)' },
                  { value: '60', label: '1 hour' },
                  { value: '480', label: '8 hours' },
                ]}
                value={securitySettings.sessionTimeout}
                onChange={e => setSecuritySettings(prev => ({ ...prev, sessionTimeout: e.target.value }))}
                containerClassName="max-w-xs"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Change Password</h3>
              <div className="space-y-3 max-w-sm">
                <Input label="Current Password" type="password" placeholder="••••••••" />
                <Input label="New Password" type="password" placeholder="••••••••" hint="Min 8 characters" />
                <Input label="Confirm Password" type="password" placeholder="••••••••" />
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-5">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">HIPAA Compliance</p>
              <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                This platform is HIPAA compliant. All patient data is encrypted at rest and in transit.
                Data retention policies follow healthcare regulations.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Export My Data', desc: 'Download all your account data', action: 'Request Export' },
                { label: 'Delete Account', desc: 'Permanently remove your account and data', action: 'Delete Account', danger: true },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-700 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                  <Button
                    variant={item.danger ? 'danger' : 'outline'}
                    size="sm"
                    onClick={() => success('Request received', `Your ${item.label.toLowerCase()} request has been submitted.`)}
                  >
                    {item.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="py-16 text-center">
            <p className="text-slate-500 dark:text-slate-400">Section coming soon</p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <Settings size={24} className="text-slate-600 dark:text-slate-400" />
          Settings
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
          Manage your preferences and account settings
        </p>
      </div>

      <div className="flex gap-6">
        {/* Side nav */}
        <div className="w-48 shrink-0">
          <nav className="space-y-0.5">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={[
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                  activeSection === section.id
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-200',
                ].join(' ')}
              >
                {section.icon}
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6"
        >
          <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-5 pb-3 border-b border-slate-100 dark:border-slate-700">
            {sections.find(s => s.id === activeSection)?.label}
          </h2>
          {renderSection()}
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button variant="primary" size="sm" isLoading={isSaving} onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
