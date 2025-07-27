'use client';

import Link from 'next/link';

import {
  LayoutDashboard, FolderKanban, Users, PlusCircle, Box, 
  DatabaseZap, FileJson2, MessageSquare,
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

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 bg-card border-r flex flex-col">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <Box className="text-blue-500" size={28} />
          <span>TDI x Annotate</span>
        </Link>
      </div>
      <div className="p-4">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold rounded-md p-2.5 hover:bg-blue-600 transition-colors duration-200 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <PlusCircle size={20} />
          <span>New Project</span>
        </button>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {mainNavItems.map((item) => {
          const isActive = pathname.startsWith(item.href) && (item.href !== '/' || pathname === '/');
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? 'bg-background text-blue-500 font-semibold'
                  : 'text-muted-foreground hover:bg-background hover:text-foreground'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-4 py-2 mt-auto border-t">
        <div className="flex items-center gap-3 p-3 rounded-md">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">
            {user.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}