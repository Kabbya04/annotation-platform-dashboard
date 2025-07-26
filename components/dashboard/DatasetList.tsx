// components/dashboard/DatasetList.tsx
import React from 'react';
import { Card } from '@/components/ui/Card';
import { Dataset } from '@/lib/placeholder-data';
import { MoreVertical, ImageIcon, FileText, VideoIcon } from 'lucide-react';

const TypeIcon = ({ type }: { type: Dataset['type'] }) => {
  if (type === 'Image') return <ImageIcon className="text-slate-400" size={16} />;
  if (type === 'Video') return <VideoIcon className="text-slate-400" size={16} />;
  return <FileText className="text-slate-400" size={16} />;
};

type DatasetListProps = {
  datasets: Dataset[];
};

export function DatasetList({ datasets }: DatasetListProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b border-slate-200 dark:border-slate-700/80">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Datasets</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Your uploaded data sources.</p>
      </div>

      <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700/80">
        <div className="col-span-6">Dataset Name</div>
        <div className="col-span-3 text-center">Items</div>
        <div className="col-span-3 text-right">Created</div>
      </div>

      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {datasets.map((dataset) => (
          <div key={dataset.id} className="grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors duration-150">
            <div className="col-span-6 font-medium text-slate-900 dark:text-white flex items-center gap-3">
              <TypeIcon type={dataset.type} />
              <span>{dataset.name}</span>
            </div>
            <div className="col-span-3 text-center text-slate-600 dark:text-slate-300">{dataset.itemCount.toLocaleString()}</div>
            <div className="col-span-3 text-right text-slate-500 dark:text-slate-400 text-sm flex items-center justify-end gap-2">
              <span>{new Date(dataset.createdAt).toLocaleDateString()}</span>
              <button className="text-slate-500 hover:text-white p-1 rounded-md">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        ))}
      </div> {/* <-- FIX: This closing div was missing */}
    </Card>
  );
}