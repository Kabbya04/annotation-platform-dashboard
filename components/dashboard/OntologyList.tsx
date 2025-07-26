// components/dashboard/OntologyList.tsx
import React from 'react';
import { Card } from '@/components/ui/Card';
import { Ontology } from '@/lib/placeholder-data';
import { MoreVertical, Tag } from 'lucide-react';

type OntologyListProps = {
  ontologies: Ontology[];
};

export function OntologyList({ ontologies }: OntologyListProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b border-slate-200 dark:border-slate-700/80">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Ontologies</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Your collections of labels and classes.</p>
      </div>

      <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700/80">
        <div className="col-span-6">Ontology Name</div>
        <div className="col-span-3 text-center">Projects Using</div>
        <div className="col-span-3 text-right">Labels</div>
      </div>

      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {ontologies.map((ontology) => (
          <div key={ontology.id} className="grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors duration-150">
            <div className="col-span-6 font-medium text-slate-900 dark:text-white">{ontology.name}</div>
            <div className="col-span-3 text-center text-slate-600 dark:text-slate-300">{ontology.projectCount}</div>
            <div className="col-span-3 text-right text-slate-600 dark:text-slate-300 flex items-center justify-end gap-2">
              <Tag size={14} />
              <span>{ontology.labelCount}</span>
              <button className="text-slate-500 hover:text-white p-1 rounded-md ml-2">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        ))}
      </div> {/* <-- FIX: This closing div was missing */}
    </Card>
  );
}