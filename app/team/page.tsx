// app/team/page.tsx
import { Header } from "@/components/layout/Header";

export default function TeamPage() {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Team Overview</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">View the Project Managers, Reviewers, and Annotators assigned to your projects.</p>
        {/* Placeholder for team member list */}
      </div>
    </>
  );
}