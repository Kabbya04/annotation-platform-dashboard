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
    <Card>
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-card-foreground">Your Projects</h2>
        <p className="text-sm text-muted-foreground">Manage and track your annotation projects.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs text-muted-foreground uppercase bg-secondary">
            <tr>
              <th className="px-4 py-3 font-medium text-left">Project Name</th>
              <th className="px-4 py-3 font-medium text-left">Status</th>
              <th className="px-4 py-3 font-medium text-left">Project Manager</th>
              <th className="px-4 py-3 font-medium text-center">Team</th>
              <th className="px-4 py-3 font-medium text-right">Created</th>
              <th className="px-4 py-3 w-12"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-secondary/50">
                <td className="px-4 py-3 font-medium text-foreground">{project.name}</td>
                <td className="px-4 py-3"><Badge variant={getStatusVariant(project.status)}>{project.status}</Badge></td>
                <td className="px-4 py-3 text-muted-foreground">{project.assignedPM}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  <div className="flex items-center justify-center gap-1">
                    <Users size={14} />
                    <span>{project.teamSize}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground text-right">{new Date(project.createdAt).toLocaleDateString('en-GB')}</td>
                <td className="px-4 py-3 text-right">
                  <button className="text-muted-foreground hover:text-foreground p-1 rounded-md">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}