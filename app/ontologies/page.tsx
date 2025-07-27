// app/ontologies/page.tsx
'use client';

import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { OntologyList } from "@/components/dashboard/OntologyList";
import { ontologies as initialOntologies, Ontology } from "@/lib/placeholder-data";
import { Plus } from "lucide-react";
import { Modal } from '@/components/ui/Modal';
import { NewOntologyForm } from '@/components/forms/NewOntologyForm';

export default function OntologiesPage() {
  const [ontologies, setOntologies] = useState<Ontology[]>(initialOntologies);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddOntology = (ontologyData: Omit<Ontology, 'id' | 'projectCount'>) => {
    const newOntology: Ontology = {
      id: `ont_${Date.now()}`,
      ...ontologyData,
      projectCount: 0,
    };
    setOntologies(prevOntologies => [newOntology, ...prevOntologies]);
    setIsModalOpen(false);
  };
  
  return (
    <>
      <Header />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Ontologies Management</h1>
            <p className="text-muted-foreground mt-1">Define and manage annotation labels for your projects.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-violet-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-violet-700 transition-colors duration-200"
          >
            <Plus size={18} />
            <span>Create New Ontology</span>
          </button>
        </div>
        <div className="w-full">
          <OntologyList ontologies={ontologies} />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Ontology">
        <NewOntologyForm 
          onCancel={() => setIsModalOpen(false)}
          onSubmit={handleAddOntology}
        />
      </Modal>
    </>
  );
}