// app/projects/page.tsx
import { Header } from "@/components/layout/Header";
import { ProjectList } from "@/components/dashboard/ProjectList";
import { projects } from "@/lib/placeholder-data";
import { Plus } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      {/* 
        This div structure ensures that the header stays fixed 
        and only the content area is scrollable if it overflows.
      */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Page Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">All Projects</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              View and manage all your active, pending, and completed projects.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-violet-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-violet-700 transition-colors duration-200 shadow-[0_0_15px_rgba(132,109,248,0.3)]">
            <Plus size={18} />
            <span>Create Project</span>
          </button>
        </div>

        {/* Main Content - The list of projects */}
        <div className="w-full">
          <ProjectList projects={projects} />
        </div>
      </div>
    </>
  );
}