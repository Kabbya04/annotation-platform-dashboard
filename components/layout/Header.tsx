// components/layout/Header.tsx
'use client';

import { Bell, Moon, Sun } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { user } from '@/lib/placeholder-data';

export function Header() {
  const [lang, setLang] = useState('EN');
  const { theme, setTheme } = useTheme();
  
  // This state is essential to prevent a hydration mismatch.
  // The component must render null for the icon initially, 
  // then render the correct icon once it's mounted on the client.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleLang = () => setLang(lang === 'EN' ? 'BN' : 'EN');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  

  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b px-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Page Title */}
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Welcome back, {user.name}!</p>
      </div>

      {/* Header Icons Group */}
      <div className="flex items-center gap-4">
        {/* Language Toggler */}
        <button
          onClick={toggleLang}
          className="flex items-center rounded-md p-1 border text-sm font-medium transition-colors bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
          title="Toggle Language"
        >
          <span className={`px-2 py-1 rounded-sm transition-all duration-300 ease-in-out ${lang === 'EN' ? 'bg-white dark:bg-slate-600 text-violet-600 dark:text-white shadow-lg shadow-violet-500/30 dark:shadow-violet-600/40 relative z-10' : 'text-slate-500 dark:text-slate-400'}`}>EN</span>
          <span className={`px-2 py-1 rounded-sm transition-all duration-300 ease-in-out ${lang === 'BN' ? 'bg-white dark:bg-slate-600 text-violet-600 dark:text-white shadow-lg shadow-violet-500/30 dark:shadow-violet-600/40 relative z-10' : 'text-slate-500 dark:text-slate-400'}`}>BN</span>
        </button>
        
        {/* Theme Toggler */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        {/* Notifications */}
        <button
          className="relative p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          title="Notifications"
        >
          <Bell size={20} />
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-violet-500 ring-2 ring-white dark:ring-slate-900"></span>
        </button>
      </div>
    </header>
  );
}