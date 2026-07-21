import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit3, Save, X, Mail, Phone, Building, Stethoscope, Calendar, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input, Textarea, Select } from '../components/ui/Input';
import { StatusBadge } from '../components/ui/Badge';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { getInitials, formatDate } from '../utils';

export function ProfilePage() {
  const { user, updateUser } = useAuth();
  const { success } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [form, setForm] = useState({
    firstName:      user?.firstName ?? '',
    lastName:       user?.lastName ?? '',
    email:          user?.email ?? '',
    phone:          user?.phone ?? '',
    department:     user?.department ?? '',
    specialization: user?.specialization ?? '',
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
    <div className="max-w-3xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Profile</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
          Manage your personal and professional information
        </p>
      </div>

      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
      >
        {/* Cover */}
        <div className="h-28 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        </div>

        <div className="px-6 pb-6">
          {/* Avatar */}
          <div className="flex items-end justify-between -mt-12 mb-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl border-4 border-white dark:border-slate-800 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                {getInitials(`${user.firstName} ${user.lastName}`)}
              </div>
              <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-blue-600 text-white border-2 border-white dark:border-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Camera size={12} />
              </button>
            </div>
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <Button variant="outline" size="sm" leftIcon={<X size={14} />}
                    onClick={() => { setIsEditing(false); }}>
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
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                {user.firstName} {user.lastName}
              </h2>
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <StatusBadge status="active" />
                <span className="text-sm text-slate-500 dark:text-slate-400 capitalize">{user.role}</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{user.department}</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Input label="First Name" value={form.firstName}
                onChange={e => setForm(p => ({ ...p, firstName: e.target.value }))} />
              <Input label="Last Name" value={form.lastName}
                onChange={e => setForm(p => ({ ...p, lastName: e.target.value }))} />
            </div>
          )}

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {isEditing ? (
              <>
                <Input label="Email" type="email" leftIcon={<Mail size={14} />}
                  value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
                <Input label="Phone" type="tel" leftIcon={<Phone size={14} />}
                  value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                <Input label="Department" leftIcon={<Building size={14} />}
                  value={form.department} onChange={e => setForm(p => ({ ...p, department: e.target.value }))} />
                <Input label="Specialization" leftIcon={<Stethoscope size={14} />}
                  value={form.specialization ?? ''}
                  onChange={e => setForm(p => ({ ...p, specialization: e.target.value }))} />
              </>
            ) : (
              <>
                {[
                  { icon: <Mail size={15} />, label: 'Email', value: user.email },
                  { icon: <Phone size={15} />, label: 'Phone', value: user.phone ?? 'Not provided' },
                  { icon: <Building size={15} />, label: 'Department', value: user.department },
                  { icon: <Stethoscope size={15} />, label: 'Specialization', value: user.specialization ?? 'Not specified' },
                  { icon: <Shield size={15} />, label: 'Role', value: user.role.charAt(0).toUpperCase() + user.role.slice(1) },
                  { icon: <Calendar size={15} />, label: 'Member Since', value: formatDate(user.createdAt) },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 shrink-0">
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

      {/* Activity stats */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-4"
      >
        {[
          { label: 'Predictions Run', value: '128' },
          { label: 'Patients Managed', value: '47'  },
          { label: 'Reports Generated', value: '24' },
        ].map((stat, i) => (
          <div key={stat.label}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-center">
            <p className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
