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
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-card-foreground">Ontologies</h2>
        <p className="text-sm text-muted-foreground">Your collections of labels and classes.</p>
      </div>

      <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b">
        <div className="col-span-6">Ontology Name</div>
        <div className="col-span-3 text-center">Projects Using</div>
        <div className="col-span-3 text-right">Labels</div>
      </div>

      <div className="divide-y">
        {ontologies.map((ontology) => (
          <div key={ontology.id} className="grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-secondary/50 transition-colors duration-150">
            <div className="col-span-6 font-medium text-foreground">{ontology.name}</div>
            <div className="col-span-3 text-center text-muted-foreground">{ontology.projectCount}</div>
            <div className="col-span-3 text-right text-muted-foreground flex items-center justify-end gap-2">
              <Tag size={14} />
              {/* Use the length of the labels array */}
              <span>{ontology.labels.length}</span>
              <button className="text-muted-foreground hover:text-foreground p-1 rounded-md ml-2">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}