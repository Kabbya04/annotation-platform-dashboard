// components/dashboard/DatasetList.tsx
import React from 'react';
import { Card } from '@/components/ui/Card';
import { Dataset } from '@/lib/placeholder-data';
import { MoreVertical, ImageIcon, FileText, VideoIcon, HelpCircle } from 'lucide-react';

const TypeIcon = ({ type }: { type: Dataset['type'] }) => {
  if (type === 'Image') return <ImageIcon className="text-muted-foreground" size={16} />;
  if (type === 'Video') return <VideoIcon className="text-muted-foreground" size={16} />;
  if (type === 'Text') return <FileText className="text-muted-foreground" size={16} />;
  return <HelpCircle className="text-muted-foreground" size={16} />;
};

type DatasetListProps = {
  datasets: Dataset[];
};

export function DatasetList({ datasets }: DatasetListProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-card-foreground">Recent Datasets</h2>
        <p className="text-sm text-muted-foreground">Your uploaded data sources.</p>
      </div>
      <div>
        {datasets.map((dataset, index) => (
          <div key={dataset.id} className={`grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-secondary/50 transition-colors duration-150 ${index === datasets.length - 1 ? '' : 'border-b'}`}>
            <div className="col-span-7 font-medium text-foreground flex items-center gap-3">
              <TypeIcon type={dataset.type} />
              <span>{dataset.name}</span>
            </div>
            <div className="col-span-2 text-center text-muted-foreground">
              {(dataset.itemCount ?? 0).toLocaleString()}
            </div>
            <div className="col-span-3 text-right text-muted-foreground text-sm flex items-center justify-end gap-2">
              <span>{new Date(dataset.createdAt).toLocaleDateString('en-GB')}</span>
              <button className="text-muted-foreground hover:text-foreground p-1 rounded-md">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}