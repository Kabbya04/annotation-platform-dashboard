// components/forms/NewDatasetForm.tsx
'use client';

import { Dataset } from '@/lib/placeholder-data';
import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';

type NewDatasetFormProps = {
  onCancel: () => void;
  onSubmit: (datasetData: Omit<Dataset, 'id' | 'createdAt'>) => void;
};

export function NewDatasetForm({ onCancel, onSubmit }: NewDatasetFormProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    // Mocking itemCount and type, as they are no longer in the form
    onSubmit({ 
      name, 
      itemCount: Math.floor(Math.random() * 1000) + 50, 
      type: 'Image' 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Dataset Title</label>
        <input 
          type="text" 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-background border rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., Q1 Self-Driving Car Images"
          required 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-1">Upload</label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-border px-6 py-10">
          <div className="text-center">
            <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" aria-hidden="true" />
            <div className="mt-4 flex text-sm leading-6 text-muted-foreground">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-background font-semibold text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
              >
                <span>Upload a folder</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-muted-foreground/80">Images, Video, Text, or ZIP files</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
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