// components/forms/NewOntologyForm.tsx
'use client';

import { Ontology } from '@/lib/placeholder-data';
import React, { useState, KeyboardEvent } from 'react';
import { Plus, X } from 'lucide-react';

type NewOntologyFormProps = {
  onCancel: () => void;
  onSubmit: (ontologyData: Omit<Ontology, 'id' | 'projectCount'>) => void;
};

export function NewOntologyForm({ onCancel, onSubmit }: NewOntologyFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [labels, setLabels] = useState<string[]>([]);
  const [currentLabel, setCurrentLabel] = useState('');

  const handleAddLabel = () => {
    if (currentLabel && !labels.includes(currentLabel)) {
      setLabels([...labels, currentLabel]);
      setCurrentLabel('');
    }
  };
  
  const handleLabelKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddLabel();
    }
  };

  const handleRemoveLabel = (labelToRemove: string) => {
    setLabels(labels.filter(label => label !== labelToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || labels.length === 0) return;
    onSubmit({ name, description, labels });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Ontology Title</label>
        <input 
          type="text" 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-background border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., Vehicle Classification"
          required 
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-muted-foreground mb-1">Description (Optional)</label>
        <textarea 
          id="description" 
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-background border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="A brief description of this ontology"
        />
      </div>
      <div>
        <label htmlFor="label" className="block text-sm font-medium text-muted-foreground mb-1">Objects / Classes</label>
        <div className="flex gap-2">
          <input 
            type="text" 
            id="label" 
            value={currentLabel}
            onChange={(e) => setCurrentLabel(e.target.value)}
            onKeyDown={handleLabelKeyDown}
            className="w-full bg-background border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type a class name and press Enter"
          />
          <button type="button" onClick={handleAddLabel} className="bg-secondary text-secondary-foreground p-2 rounded-md hover:bg-secondary/80">
            <Plus size={20} />
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {labels.map(label => (
            <span key={label} className="flex items-center gap-1.5 bg-blue-500/10 text-blue-500 text-xs font-medium px-2 py-1 rounded-full">
              {label}
              <button type="button" onClick={() => handleRemoveLabel(label)} className="text-blue-500/70 hover:text-blue-500">
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <button type="button" onClick={onCancel} className="bg-secondary text-secondary-foreground font-semibold rounded-md px-4 py-2 hover:bg-secondary/80 transition-colors">
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-600 transition-colors">
          Create Ontology
        </button>
      </div>
    </form>
  );
}