// components/forms/NewOntologyForm.tsx
'use client';

import { Ontology } from '@/lib/placeholder-data';
import React, { useState } from 'react';

type NewOntologyFormProps = {
  onCancel: () => void;
  onSubmit: (ontologyData: Omit<Ontology, 'id' | 'projectCount'>) => void;
};

export function NewOntologyForm({ onCancel, onSubmit }: NewOntologyFormProps) {
  const [name, setName] = useState('');
  const [labelCount, setLabelCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || labelCount <= 0) return;
    onSubmit({ name, labelCount });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Ontology Name</label>
        <input 
          type="text" 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md px-3 py-2 text-sm"
          required 
        />
      </div>
      <div>
        <label htmlFor="labelCount" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Label Count</label>
        <input 
          type="number" 
          id="labelCount" 
          value={labelCount}
          onChange={(e) => setLabelCount(parseInt(e.target.value, 10))}
          className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md px-3 py-2 text-sm"
          required 
        />
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <button type="button" onClick={onCancel} className="bg-slate-200 dark:bg-slate-600 text-slate-900 dark:text-white font-semibold rounded-md px-4 py-2 hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors">
          Cancel
        </button>
        <button type="submit" className="bg-violet-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-violet-700 transition-colors">
          Create Ontology
        </button>
      </div>
    </form>
  );
}