import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit3, Save, X, Mail, Phone, Building, Stethoscope, Calendar, Shield, Activity, Clock, ShieldCheck, Lock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Input';
import { StatusBadge } from '../components/ui/Badge';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { getInitials, formatDate } from '../utils';

export function ProfilePage() {
  const { user, updateUser } = useAuth();
  const { success } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'activity'>('profile');

  const [form, setForm] = useState({
    firstName:      user?.firstName ?? '',
    lastName:       user?.lastName ?? '',
    email:          user?.email ?? '',
    phone:          user?.phone ?? '',
    hospital:       'Central General Hospital',
    department:     user?.department ?? '',
    specialization: user?.specialization ?? '',
    bio:            'Senior physician with over 15 years of experience in cardiology and predictive healthcare analytics.',
  });

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 1000));
    updateUser(form);
    setIsSaving(false);
    setIsEditing(false);
    success('Profile updated', 'Your profile information has been saved.');
  };

  if (!user) return null;

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Profile settings</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
          Manage your personal information, security preferences, and view activity.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200 dark:border-slate-700">
        {[
          { id: 'profile', label: 'Profile Information', icon: <Stethoscope size={16} /> },
          { id: 'security', label: 'Security', icon: <Shield size={16} /> },
          { id: 'activity', label: 'Activity Log', icon: <Activity size={16} /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'profile' | 'security' | 'activity')}
            className={`flex items-center gap-2 px-1 pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id 
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'profile' && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
        >
          {/* Cover */}
          <div className="h-32 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          </div>

          <div className="px-6 pb-6">
            {/* Avatar */}
            <div className="flex items-end justify-between -mt-12 mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl border-4 border-white dark:border-slate-800 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  {getInitials(`${user.firstName} ${user.lastName}`)}
                </div>
                <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-blue-600 text-white border-2 border-white dark:border-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm">
                  <Camera size={12} />
                </button>
              </div>
              <div className="flex gap-2">
                {isEditing ? (
                  <>
                    <Button variant="outline" size="sm" leftIcon={<X size={14} />}
                      onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button variant="primary" size="sm" leftIcon={<Save size={14} />}
                      isLoading={isSaving} onClick={handleSave}>
                      Save
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" size="sm" leftIcon={<Edit3 size={14} />}
                    onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>

            {/* Name & role */}
            {!isEditing ? (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  {user.firstName} {user.lastName}
                </h2>
                <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                  <StatusBadge status="active" />
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 capitalize">{user.role}</span>
                  <span className="text-slate-300 dark:text-slate-600">·</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1"><Building size={14} />{form.hospital}</span>
                  <span className="text-slate-300 dark:text-slate-600">·</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{form.department}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-4 text-sm leading-relaxed max-w-3xl">
                  {form.bio}
                </p>
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="First Name" value={form.firstName}
                    onChange={e => setForm(p => ({ ...p, firstName: e.target.value }))} />
                  <Input label="Last Name" value={form.lastName}
                    onChange={e => setForm(p => ({ ...p, lastName: e.target.value }))} />
                </div>
                <Textarea label="Professional Bio" value={form.bio} rows={3}
                    onChange={e => setForm(p => ({ ...p, bio: e.target.value }))} />
              </div>
            )}

            <hr className="border-slate-200 dark:border-slate-700 mb-6" />

            <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-4">Contact & Role Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {isEditing ? (
                <>
                  <Input label="Email" type="email" leftIcon={<Mail size={14} />}
                    value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
                  <Input label="Phone" type="tel" leftIcon={<Phone size={14} />}
                    value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                  <Input label="Hospital / Facility" leftIcon={<Building size={14} />}
                    value={form.hospital} onChange={e => setForm(p => ({ ...p, hospital: e.target.value }))} />
                  <Input label="Department" leftIcon={<Stethoscope size={14} />}
                    value={form.department} onChange={e => setForm(p => ({ ...p, department: e.target.value }))} />
                  <Input label="Specialization" leftIcon={<Stethoscope size={14} />}
                    value={form.specialization ?? ''}
                    onChange={e => setForm(p => ({ ...p, specialization: e.target.value }))} />
                </>
              ) : (
                <>
                  {[
                    { icon: <Mail size={15} />, label: 'Email Address', value: user.email },
                    { icon: <Phone size={15} />, label: 'Phone Number', value: user.phone ?? 'Not provided' },
                    { icon: <Building size={15} />, label: 'Hospital Facility', value: form.hospital },
                    { icon: <Stethoscope size={15} />, label: 'Department', value: form.department },
                    { icon: <Stethoscope size={15} />, label: 'Specialization', value: form.specialization ?? 'Not specified' },
                    { icon: <Calendar size={15} />, label: 'Member Since', value: formatDate(user.createdAt) },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200 mt-0.5">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'security' && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Change Password</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Ensure your account is using a long, random password to stay secure.</p>
            <div className="max-w-md space-y-4">
              <Input type="password" label="Current Password" placeholder="••••••••" />
              <Input type="password" label="New Password" placeholder="••••••••" />
              <Input type="password" label="Confirm New Password" placeholder="••••••••" />
              <Button>Update Password</Button>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 flex items-start gap-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Two-Factor Authentication</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Add additional security to your account using two-factor authentication.</p>
              <Button variant="outline">Enable 2FA</Button>
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'activity' && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Recent Activity & Logins</h3>
          
          <div className="space-y-6">
            {[
              { title: 'Logged in from new device', desc: 'Windows 11, Chrome Browser (IP: 192.168.1.1)', time: '2 hours ago', icon: <Lock size={16} /> },
              { title: 'Generated Diabetes Prediction Report', desc: 'Patient ID: P-10234', time: '5 hours ago', icon: <Activity size={16} /> },
              { title: 'Updated Profile Information', desc: 'Changed department to Cardiology', time: '2 days ago', icon: <Edit3 size={16} /> },
              { title: 'Password Changed', desc: 'Successfully updated account password', time: '1 week ago', icon: <Shield size={16} /> },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4 relative">
                {i !== 3 && <div className="absolute top-8 left-[19px] bottom-0 w-px bg-slate-200 dark:bg-slate-700" />}
                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 shrink-0 z-10">
                  {activity.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white">{activity.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{activity.desc}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1"><Clock size={12} /> {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

    </div>
  );
}
