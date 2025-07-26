// app/datasets/page.tsx
'use client';

import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { DatasetList } from "@/components/dashboard/DatasetList";
import { datasets as initialDatasets, Dataset } from "@/lib/placeholder-data";
import { Plus } from "lucide-react";
import { Modal } from '@/components/ui/Modal';
import { NewDatasetForm } from '@/components/forms/NewDatasetForm';

export default function DatasetsPage() {
  const [datasets, setDatasets] = useState<Dataset[]>(initialDatasets);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDataset = (datasetData: Omit<Dataset, 'id' | 'createdAt'>) => {
    const newDataset: Dataset = {
      id: `ds_${Date.now()}`,
      ...datasetData,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setDatasets(prevDatasets => [newDataset, ...prevDatasets]);
    setIsModalOpen(false);
  };
  
  return (
    <>
      <Header />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Datasets Management</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Upload, view, and manage your project datasets.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-violet-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-violet-700 transition-colors duration-200"
          >
            <Plus size={18} />
            <span>Add New Dataset</span>
          </button>
        </div>
        <div className="w-full">
          <DatasetList datasets={datasets} />
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Dataset">
        <NewDatasetForm 
          onCancel={() => setIsModalOpen(false)}
          onSubmit={handleAddDataset}
        />
      </Modal>
    </>
  );
}