// components/layout/Header.tsx
'use client';

import { Bell, Moon, Sun } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { user } from '@/lib/placeholder-data';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b px-8 bg-card transition-colors duration-300">
      <div>
        <h1 className="text-xl font-bold text-card-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Welcome back, {user.name}!</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-muted-foreground hover:bg-background hover:text-foreground transition-colors"
          title="Toggle Theme"
        >
          {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
        </button>
        <button
          className="relative p-2 rounded-full text-muted-foreground hover:bg-background hover:text-foreground transition-colors"
          title="Notifications"
        >
          <Bell size={20} />
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-blue-500 ring-2 ring-card"></span>
        </button>
      </div>
    </header>
  );
}