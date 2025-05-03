// src/app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectClient from "@/components/ProjectClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return <ProjectClient project={project} />;
}
