// lib/placeholder-data.ts

export type Project = {
  id: string;
  name: string;
  status: 'Active' | 'Pending' | 'Completed' | 'Failed';
  assignedPM: string;
  teamSize: number;
  createdAt: string;
};

export const user = {
  name: 'Client User',
  email: 'client@acme.com',
  avatar: 'CU',
};

export const projects: Project[] = [
  {
    id: 'proj_1',
    name: 'Q4 Retail Product Tagging',
    status: 'Active',
    assignedPM: 'Alice Johnson',
    teamSize: 5,
    createdAt: '2023-11-20',
  },
  {
    id: 'proj_2',
    name: 'Autonomous Vehicle - Lane Detection',
    status: 'Active',
    assignedPM: 'Bob Williams',
    teamSize: 12,
    createdAt: '2023-11-15',
  },
  {
    id: 'proj_3',
    name: 'Medical Imaging Segmentation',
    status: 'Completed',
    assignedPM: 'Alice Johnson',
    teamSize: 8,
    createdAt: '2023-10-05',
  },
  {
    id: 'proj_4',
    name: 'Customer Support Chatbot Intents',
    status: 'Pending',
    assignedPM: 'Pending Assignment',
    teamSize: 0,
    createdAt: '2023-11-21',
  },
  {
    id: 'proj_5',
    name: 'Legal Document Analysis (Q3)',
    status: 'Completed',
    assignedPM: 'Charlie Brown',
    teamSize: 4,
    createdAt: '2023-09-12',
  },
    {
    id: 'proj_6',
    name: 'Sentiment Analysis for Movie Reviews',
    status: 'Failed',
    assignedPM: 'Diana Prince',
    teamSize: 3,
    createdAt: '2023-08-25',
  },
];

export type Dataset = {
  id: string;
  name: string;
  itemCount: number;
  type: 'Image' | 'Text' | 'Video';
  createdAt: string;
};

export const datasets: Dataset[] = [
  { id: 'ds_1', name: 'Retail Shelf Images - Q4 2023', itemCount: 12500, type: 'Image', createdAt: '2023-10-15' },
  { id: 'ds_2', name: 'AV Lane Detection Clips', itemCount: 500, type: 'Video', createdAt: '2023-11-02' },
  { id: 'ds_3', name: 'Customer Support Transcripts', itemCount: 8230, type: 'Text', createdAt: '2023-11-18' },
];

// --- NEW DATA FOR ONTOLOGIES ---
export type Ontology = {
  id: string;
  name: string;
  projectCount: number;
  labelCount: number;
};

export const ontologies: Ontology[] = [
  { id: 'ont_1', name: 'Product Recognition', projectCount: 3, labelCount: 45 },
  { id: 'ont_2', name: 'Vehicle & Pedestrian Classes', projectCount: 1, labelCount: 12 },
  { id: 'ont_3', name: 'Sentiment Analysis Labels', projectCount: 5, labelCount: 5 },
];