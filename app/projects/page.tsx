// app/projects/page.tsx
'use client';

import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { ProjectList } from "@/components/dashboard/ProjectList";
import { 
  projects as initialProjects, 
  datasets as initialDatasets,
  ontologies as initialOntologies,
  Project,
  Dataset,
  Ontology
} from "@/lib/placeholder-data";
import { Plus } from "lucide-react";
import { Modal } from '@/components/ui/Modal';
import { NewProjectForm } from '@/components/forms/NewProjectForm';
import { NewDatasetForm } from '@/components/forms/NewDatasetForm';
import { NewOntologyForm } from '@/components/forms/NewOntologyForm';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [datasets, setDatasets] = useState<Dataset[]>(initialDatasets);
  const [ontologies, setOntologies] = useState<Ontology[]>(initialOntologies);

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isDatasetModalOpen, setIsDatasetModalOpen] = useState(false);
  const [isOntologyModalOpen, setIsOntologyModalOpen] = useState(false);

  const handleAddProject = (projectData: Omit<Project, 'id' | 'createdAt' | 'status' | 'teamSize' | 'assignedPM'>) => {
    const newProject: Project = {
      id: `proj_${Date.now()}`,
      ...projectData,
      assignedPM: 'Pending Assignment',
      status: 'Pending',
      teamSize: 0,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setProjects(prevProjects => [newProject, ...prevProjects]);
    setIsProjectModalOpen(false);
  };

  const handleAddDataset = (datasetData: Omit<Dataset, 'id' | 'createdAt'>) => {
    const newDataset: Dataset = {
      id: `ds_${Date.now()}`,
      ...datasetData,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setDatasets(prevDatasets => [newDataset, ...prevDatasets]);
    setIsDatasetModalOpen(false); // Close dataset modal, project modal remains open
  };

  const handleAddOntology = (ontologyData: Omit<Ontology, 'id' | 'projectCount'>) => {
    const newOntology: Ontology = {
      id: `ont_${Date.now()}`,
      ...ontologyData,
      projectCount: 0,
    };
    setOntologies(prevOntologies => [newOntology, ...prevOntologies]);
    setIsOntologyModalOpen(false); // Close ontology modal, project modal remains open
  };
  
  return (
    <>
      <Header />
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">All Projects</h1>
            <p className="text-muted-foreground mt-1">
              View and manage all your active, pending, and completed projects.
            </p>
          </div>
          <button 
            onClick={() => setIsProjectModalOpen(true)}
            className="flex items-center gap-2 bg-blue-500 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-200"
          >
            <Plus size={18} />
            <span>Create Project</span>
          </button>
        </div>

        <div className="w-full">
          <ProjectList projects={projects} />
        </div>
      </div>

      {/* Project Creation Modal */}
      <Modal isOpen={isProjectModalOpen} onClose={() => setIsProjectModalOpen(false)} title="Create New Project">
        <NewProjectForm 
          datasets={datasets}
          ontologies={ontologies}
          onCancel={() => setIsProjectModalOpen(false)}
          onSubmit={handleAddProject}
          onAddNewDataset={() => setIsDatasetModalOpen(true)}
          onAddNewOntology={() => setIsOntologyModalOpen(true)}
        />
      </Modal>

      {/* Dataset Creation Modal (can be opened from Project modal) */}
      <Modal isOpen={isDatasetModalOpen} onClose={() => setIsDatasetModalOpen(false)} title="Add New Dataset">
        <NewDatasetForm 
          onCancel={() => setIsDatasetModalOpen(false)}
          onSubmit={handleAddDataset}
        />
      </Modal>
      
      {/* Ontology Creation Modal (can be opened from Project modal) */}
      <Modal isOpen={isOntologyModalOpen} onClose={() => setIsOntologyModalOpen(false)} title="Create New Ontology">
        <NewOntologyForm 
          onCancel={() => setIsOntologyModalOpen(false)}
          onSubmit={handleAddOntology}
        />
      </Modal>
    </>
  );
}