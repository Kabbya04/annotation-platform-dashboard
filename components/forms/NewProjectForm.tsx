// components/forms/NewProjectForm.tsx
'use client';

import { Project, Dataset, Ontology } from '@/lib/placeholder-data';
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

type NewProjectFormProps = {
  datasets: Dataset[];
  ontologies: Ontology[];
  onCancel: () => void;
  onSubmit: (projectData: Omit<Project, 'id' | 'createdAt' | 'status' | 'teamSize' | 'assignedPM'>) => void;
  onAddNewDataset: () => void;
  onAddNewOntology: () => void;
};

export function NewProjectForm({ 
  datasets, 
  ontologies, 
  onCancel, 
  onSubmit,
  onAddNewDataset,
  onAddNewOntology
}: NewProjectFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [datasetId, setDatasetId] = useState<string>('');
  const [ontologyId, setOntologyId] = useState<string>('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    onSubmit({ name, description, datasetId, ontologyId });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Project Title</label>
        <input 
          type="text" 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-background border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., Q1 Product Tagging Initiative"
          required 
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-muted-foreground mb-1">Description (Optional)</label>
        <textarea 
          id="description" 
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-background border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="A brief description of the project goals and requirements"
        />
      </div>
      
      <div>
        <label htmlFor="dataset" className="block text-sm font-medium text-muted-foreground mb-1">Attach Dataset</label>
        <div className="flex gap-2">
          <select 
            id="dataset" 
            value={datasetId}
            onChange={(e) => setDatasetId(e.target.value)}
            className="w-full bg-background border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a dataset...</option>
            {datasets.map(ds => <option key={ds.id} value={ds.id}>{ds.name}</option>)}
          </select>
          <button type="button" onClick={onAddNewDataset} className="flex-shrink-0 flex items-center gap-1.5 bg-secondary text-secondary-foreground p-2 rounded-md hover:bg-secondary/80 text-sm">
            <Plus size={16} /> New
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="ontology" className="block text-sm font-medium text-muted-foreground mb-1">Attach Ontology</label>
        <div className="flex gap-2">
          <select 
            id="ontology" 
            value={ontologyId}
            onChange={(e) => setOntologyId(e.target.value)}
            className="w-full bg-background border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select an ontology...</option>
            {ontologies.map(ont => <option key={ont.id} value={ont.id}>{ont.name}</option>)}
          </select>
          <button type="button" onClick={onAddNewOntology} className="flex-shrink-0 flex items-center gap-1.5 bg-secondary text-secondary-foreground p-2 rounded-md hover:bg-secondary/80 text-sm">
            <Plus size={16} /> New
          </button>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button type="button" onClick={onCancel} className="bg-secondary text-secondary-foreground font-semibold rounded-md px-4 py-2 hover:bg-secondary/80 transition-colors">
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-600 transition-colors">
          Create Project
        </button>
      </div>
    </form>
  );
}