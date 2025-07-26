// components/ui/Card.tsx
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
            bg-card text-card-foreground border border-border rounded-lg shadow-sm
      ${className}
    `}>
      {children}
    </div>
  );
}