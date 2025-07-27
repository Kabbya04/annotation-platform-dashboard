// components/ui/Card.tsx
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-card text-card-foreground rounded-lg shadow-md dark:shadow-black/20
      ${className}
    `}>
      {children}
    </div>
  );
}