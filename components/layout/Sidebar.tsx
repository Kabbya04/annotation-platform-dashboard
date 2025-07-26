// components/layout/Sidebar.tsx
'use client';

import {
  LayoutDashboard, FolderKanban, Users, Settings, HelpCircle,
  PlusCircle, Box, DatabaseZap, FileJson2, MessageSquare,
} from 'lucide-react';
import React from 'react';
import { usePathname } from 'next/navigation';
import { user } from '@/lib/placeholder-data';

const mainNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: FolderKanban, label: 'Projects', href: '/projects' },
  { icon: DatabaseZap, label: 'Datasets', href: '/datasets' },
  { icon: FileJson2, label: 'Ontologies', href: '/ontologies' },
  { icon: Users, label: 'Team', href: '/team' },
  { icon: MessageSquare, label: 'Chat', href: '/chats' },
];

const bottomNavItems = [
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Get Help', href: '/help' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-900/80 backdrop-blur-lg border-r border-slate-200 dark:border-slate-800 flex flex-col">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <a href="/" className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
          <Box className="text-violet-500 dark:text-violet-400" size={28} />
          <span>TDI x Annotate</span>
        </a>
      </div>

      <div className="p-4">
        <button className="w-full flex items-center justify-center gap-2 bg-violet-600 text-white font-semibold rounded-md p-2.5 hover:bg-violet-700 transition-colors duration-200 shadow-[0_0_15px_rgba(132,109,248,0.3)]">
          <PlusCircle size={20} />
          <span>New Project</span>
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {mainNavItems.map((item) => {
          const isActive = pathname.startsWith(item.href) && (item.href !== '/' || pathname === '/');
          return (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? 'bg-slate-100 dark:bg-slate-700/50 text-violet-600 dark:text-white'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="px-4 py-2 mt-auto border-t border-slate-200 dark:border-slate-800">
        <nav className="space-y-1 mb-2">
          {bottomNavItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? 'bg-slate-100 dark:bg-slate-700/50 text-violet-600 dark:text-white'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 p-3 rounded-md bg-slate-100 dark:bg-slate-800/50">
          <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center font-bold text-white">
            {user.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{user.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}