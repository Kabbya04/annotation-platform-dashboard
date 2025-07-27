// app/projects/page.tsx
'use client';

import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { ProjectList } from "@/components/dashboard/ProjectList";
import { projects as initialProjects, Project } from "@/lib/placeholder-data";
import { Plus } from "lucide-react";
import { Modal } from '@/components/ui/Modal';
import { NewProjectForm } from '@/components/forms/NewProjectForm';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProject = (projectData: Omit<Project, 'id' | 'createdAt' | 'status' | 'teamSize'>) => {
    const newProject: Project = {
      id: `proj_${Date.now()}`,
      ...projectData,
      status: 'Pending',
      teamSize: 0,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setProjects(prevProjects => [newProject, ...prevProjects]);
    setIsModalOpen(false);
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
            onClick={() => setIsModalOpen(true)}
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Project">
        <NewProjectForm 
          onCancel={() => setIsModalOpen(false)}
          onSubmit={handleAddProject}
        />
      </Modal>
    </>
  );
}