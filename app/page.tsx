// app/page.tsx
import { Header } from "@/components/layout/Header";
import { ProjectList } from "@/components/dashboard/ProjectList";
import { DatasetList } from "@/components/dashboard/DatasetList";
import { OntologyList } from "@/components/dashboard/OntologyList";
import { projects, datasets, ontologies } from "@/lib/placeholder-data";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
        <div className="space-y-8">
          <ProjectList projects={projects} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DatasetList datasets={datasets} />
            <OntologyList ontologies={ontologies} />
          </div>
        </div>
      </div>
    </>
  );
}