// components/ui/Badge.tsx
import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  variant: 'active' | 'completed' | 'pending' | 'failed' | 'default';
  className?: string;
};

const variants = {
  active: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30',
  completed: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-500/20 dark:text-green-300 dark:border-green-500/30',
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-500/20 dark:text-yellow-300 dark:border-yellow-500/30',
  failed: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-500/20 dark:text-red-300 dark:border-red-500/30',
  default: 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-500/20 dark:text-slate-300 dark:border-slate-500/30',
};

export function Badge({ children, variant, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}