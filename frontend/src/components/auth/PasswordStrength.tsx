import React from 'react';

export function PasswordStrength({ password }: { password?: string }) {
  if (!password) return null;

  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const strength = score <= 2 ? 'Weak' : score <= 4 ? 'Good' : 'Strong';
  const color = score <= 2 ? 'bg-red-500' : score <= 4 ? 'bg-yellow-500' : 'bg-green-500';
  const bars = Array.from({ length: 5 }).map((_, i) => (
    <div
      key={i}
      className={`h-1.5 flex-1 rounded-full transition-colors ${
        i < score ? color : 'bg-slate-200 dark:bg-slate-700'
      }`}
    />
  ));

  return (
    <div className="mt-2 space-y-1">
      <div className="flex gap-1">{bars}</div>
      <p className={`text-xs font-medium text-right ${
        score <= 2 ? 'text-red-500' : score <= 4 ? 'text-yellow-500' : 'text-green-500'
      }`}>
        {strength}
      </p>
    </div>
  );
}
