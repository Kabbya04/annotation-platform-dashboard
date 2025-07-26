// components/forms/NewProjectForm.tsx
'use client';

import { Project } from '@/lib/placeholder-data';
import React, { useState } from 'react';

type NewProjectFormProps = {
  onCancel: () => void;
  onSubmit: (projectData: Omit<Project, 'id' | 'createdAt' | 'status' | 'teamSize'>) => void;
};

export function NewProjectForm({ onCancel, onSubmit }: NewProjectFormProps) {
  const [name, setName] = useState('');
  const [assignedPM, setAssignedPM] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !assignedPM) return; // Basic validation
    onSubmit({ name, assignedPM });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Project Name</label>
        <input 
          type="text" 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md px-3 py-2 text-sm focus:ring-violet-500 focus:border-violet-500"
          required 
        />
      </div>
      <div>
        <label htmlFor="pm" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Project Manager</label>
        <input 
          type="text" 
          id="pm" 
          value={assignedPM}
          onChange={(e) => setAssignedPM(e.target.value)}
          className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md px-3 py-2 text-sm focus:ring-violet-500 focus:border-violet-500"
          required 
        />
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <button type="button" onClick={onCancel} className="bg-slate-200 dark:bg-slate-600 text-slate-900 dark:text-white font-semibold rounded-md px-4 py-2 hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">
          Cancel
        </button>
        <button type="submit" className="bg-violet-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-violet-700 transition-colors">
          Create Project
        </button>
      </div>
    </form>
  );
}