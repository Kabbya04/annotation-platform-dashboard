// lib/placeholder-data.ts

export type Project = {
  id: string;
  name: string;
  description?: string; // Optional description
  status: 'Active' | 'Pending' | 'Completed' | 'Failed';
  assignedPM: string;
  teamSize: number;
  createdAt: string;
  datasetId?: string; // Link to dataset
  ontologyId?: string; // Link to ontology
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
    description: 'Tagging and categorizing retail products from shelf images for the Q4 sales analysis.',
    status: 'Active',
    assignedPM: 'Alice Johnson',
    teamSize: 5,
    createdAt: '2023-11-20',
    datasetId: 'ds_1',
    ontologyId: 'ont_1',
  },
  {
    id: 'proj_2',
    name: 'Autonomous Vehicle - Lane Detection',
    description: 'Annotating lane markings in video clips for the AV perception model.',
    status: 'Active',
    assignedPM: 'Bob Williams',
    teamSize: 12,
    createdAt: '2023-11-15',
    datasetId: 'ds_2',
    ontologyId: 'ont_2',
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
    datasetId: 'ds_3',
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
    description: 'Classifying movie reviews as positive, negative, or neutral.',
    status: 'Failed',
    assignedPM: 'Diana Prince',
    teamSize: 3,
    createdAt: '2023-08-25',
    ontologyId: 'ont_3',
  },
];

export type Dataset = {
  id: string;
  name: string;
  // Make these optional as they won't be in the new form
  itemCount?: number;
  type?: 'Image' | 'Text' | 'Video';
  createdAt: string;
};

export const datasets: Dataset[] = [
  { id: 'ds_1', name: 'Retail Shelf Images - Q4 2023', itemCount: 12500, type: 'Image', createdAt: '2023-10-15' },
  { id: 'ds_2', name: 'AV Lane Detection Clips', itemCount: 500, type: 'Video', createdAt: '2023-11-02' },
  { id: 'ds_3', name: 'Customer Support Transcripts', itemCount: 8230, type: 'Text', createdAt: '2023-11-18' },
];

export type Ontology = {
  id: string;
  name: string;
  description?: string; // Optional description
  projectCount: number;
  labels: string[]; // Replaced labelCount with an array of labels
};

export const ontologies: Ontology[] = [
  { id: 'ont_1', name: 'Product Recognition', description: 'Labels for common retail products.', projectCount: 3, labels: ['Cereal Box', 'Milk Carton', 'Soda Can', 'Water Bottle', 'Shampoo'] },
  { id: 'ont_2', name: 'Vehicle & Pedestrian Classes', projectCount: 1, labels: ['Car', 'Truck', 'Bus', 'Motorcycle', 'Pedestrian', 'Bicycle'] },
  { id: 'ont_3', name: 'Sentiment Analysis Labels', description: 'Classification labels for text sentiment.', projectCount: 5, labels: ['Positive', 'Negative', 'Neutral'] },
];