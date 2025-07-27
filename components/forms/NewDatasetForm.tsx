// components/forms/NewDatasetForm.tsx
'use client';

import { Dataset } from '@/lib/placeholder-data';
import React, { useState } from 'react';

type NewDatasetFormProps = {
  onCancel: () => void;
  onSubmit: (datasetData: Omit<Dataset, 'id' | 'createdAt'>) => void;
};

export function NewDatasetForm({ onCancel, onSubmit }: NewDatasetFormProps) {
  const [name, setName] = useState('');
  const [itemCount, setItemCount] = useState(0);
  const [type, setType] = useState<'Image' | 'Text' | 'Video'>('Image');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || itemCount <= 0) return;
    onSubmit({ name, itemCount, type });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Dataset Name</label>
        <input 
          type="text" 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-background border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          required 
        />
      </div>
      <div>
        <label htmlFor="itemCount" className="block text-sm font-medium text-muted-foreground mb-1">Item Count</label>
        <input 
          type="number" 
          id="itemCount" 
          value={itemCount}
          onChange={(e) => setItemCount(parseInt(e.target.value, 10))}
          className="w-full bg-background border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          required 
        />
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-muted-foreground mb-1">Type</label>
        <select 
          id="type" 
          value={type}
          onChange={(e) => setType(e.target.value as 'Image' | 'Text' | 'Video')}
          className="w-full bg-background border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option>Image</option>
          <option>Text</option>
          <option>Video</option>
        </select>
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <button type="button" onClick={onCancel} className="bg-secondary text-secondary-foreground font-semibold rounded-md px-4 py-2 hover:bg-secondary/80 transition-colors">
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-600 transition-colors">
          Add Dataset
        </button>
      </div>
    </form>
  );
}