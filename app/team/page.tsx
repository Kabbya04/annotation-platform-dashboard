// app/team/page.tsx
import { Header } from "@/components/layout/Header";

export default function TeamPage() {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-card-foreground">Team Overview</h1>
        <p className="text-muted-foreground mt-2">View the Project Managers, Reviewers, and Annotators assigned to your projects.</p>
        {/* Placeholder for team member list */}
      </div>
    </>
  );
}