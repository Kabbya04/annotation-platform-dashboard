// components/ui/Badge.tsx
import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  variant: 'active' | 'completed' | 'pending' | 'failed' | 'default';
  className?: string;
};

const variants = {
  active: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  completed: 'bg-green-500/20 text-green-300 border-green-500/30',
  pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  failed: 'bg-red-500/20 text-red-300 border-red-500/30',
  default: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
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