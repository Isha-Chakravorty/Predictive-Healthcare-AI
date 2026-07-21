import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { UserPlus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input, PasswordInput, Select, Checkbox } from '../components/ui/Input';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { ROUTES } from '../constants';
import { SocialLogins } from '../components/auth/SocialLogins';
import { PasswordStrength } from '../components/auth/PasswordStrength';

const registerSchema = z.object({
  firstName: z.string().min(2, 'First name too short'),
  lastName:  z.string().min(2, 'Last name too short'),
  email:     z.email('Invalid email'),
  password:  z.string().min(8, 'Min 8 characters'),
  confirmPassword: z.string(),
  role:       z.string().min(1, 'Select a role'),
  department: z.string().min(2, 'Enter department'),
  agreeToTerms: z.boolean().refine(v => v, 'You must agree to terms'),
}).refine(d => d.password === d.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type RegisterForm = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const { login } = useAuth();
  const { success, error: toastError } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: { agreeToTerms: false },
  });

  const passwordValue = watch('password');

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    try {
      await login(data.email, data.password);
      success('Account created!', 'Welcome to Predictive Healthcare AI.');
      navigate(ROUTES.DASHBOARD);
    } catch {
      toastError('Registration failed', 'Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Create account</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Join the Healthcare AI platform</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        <div className="grid grid-cols-2 gap-3">
          <Input label="First Name" placeholder="John" error={errors.firstName?.message} required {...register('firstName')} />
          <Input label="Last Name" placeholder="Smith" error={errors.lastName?.message} required {...register('lastName')} />
        </div>
        <Input label="Email" type="email" placeholder="you@hospital.com" error={errors.email?.message} required {...register('email')} />
        <Select
          label="Role"
          options={[
            { value: 'doctor',  label: 'Physician / Doctor' },
            { value: 'analyst', label: 'Clinical Analyst' },
            { value: 'nurse',   label: 'Nurse' },
            { value: 'admin',   label: 'Administrator' },
          ]}
          placeholder="Select your role"
          error={errors.role?.message}
          required
          {...register('role')}
        />
        <Input label="Department" placeholder="e.g. Cardiology" error={errors.department?.message} required {...register('department')} />
        
        <div>
          <PasswordInput label="Password" placeholder="••••••••" error={errors.password?.message} required hint="Minimum 8 characters" {...register('password')} />
          <PasswordStrength password={passwordValue} />
        </div>

        <PasswordInput label="Confirm Password" placeholder="••••••••" error={errors.confirmPassword?.message} required {...register('confirmPassword')} />
        <Checkbox
          label="I agree to the Terms of Service and Privacy Policy"
          error={errors.agreeToTerms?.message}
          {...register('agreeToTerms')}
        />

        <Button variant="gradient" type="submit" fullWidth isLoading={isLoading}
          leftIcon={isLoading ? undefined : <UserPlus size={16} />}>
          Create Account
        </Button>
      </form>

      <SocialLogins action="Sign up" />

      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-5">
        Already have an account?{' '}
        <Link to={ROUTES.LOGIN} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
