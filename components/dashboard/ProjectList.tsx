// components/dashboard/ProjectList.tsx
import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Project } from '@/lib/placeholder-data';
import { MoreVertical, Users } from 'lucide-react';

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  const getStatusVariant = (status: Project['status']) => {
    switch (status) {
      case 'Active': return 'active';
      case 'Completed': return 'completed';
      case 'Pending': return 'pending';
      case 'Failed': return 'failed';
      default: return 'default';
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b border-slate-200 dark:border-slate-700/80">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Your Projects</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Manage and track your annotation projects.</p>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700/80">
        <div className="col-span-4">Project Name</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-3">Project Manager</div>
        <div className="col-span-1 text-center">Team</div>
        <div className="col-span-2 text-right">Created</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {projects.map((project) => (
          <div key={project.id} className="grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors duration-150">
            <div className="col-span-4 font-medium text-slate-900 dark:text-white">{project.name}</div>
            <div className="col-span-2">
              <Badge variant={getStatusVariant(project.status)}>{project.status}</Badge>
            </div>
            <div className="col-span-3 text-slate-600 dark:text-slate-300">{project.assignedPM}</div>
            <div className="col-span-1 flex items-center justify-center gap-1 text-slate-600 dark:text-slate-300">
                <Users size={14} />
                <span>{project.teamSize}</span>
            </div>
            <div className="col-span-2 text-right text-slate-500 dark:text-slate-400 text-sm flex items-center justify-end gap-2">
              <span>{new Date(project.createdAt).toLocaleDateString()}</span>
              <button className="text-slate-500 hover:text-white p-1 rounded-md">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        ))}
    </Card>
  );
}