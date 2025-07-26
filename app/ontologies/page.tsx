// app/ontologies/page.tsx
import { Header } from "@/components/layout/Header";
import { OntologyList } from "@/components/dashboard/OntologyList";
import { ontologies } from "@/lib/placeholder-data";
import { Plus } from "lucide-react";

export default function OntologiesPage() {
  return (
    <>
      <Header />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Ontologies Management</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Define and manage annotation labels for your projects.</p>
          </div>
          <button className="flex items-center gap-2 bg-violet-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-violet-700 transition-colors duration-200">
            <Plus size={18} />
            <span>Create New Ontology</span>
          </button>
        </div>
        <div className="w-full">
          <OntologyList ontologies={ontologies} />
        </div>
      </div>
    </>
  );
}