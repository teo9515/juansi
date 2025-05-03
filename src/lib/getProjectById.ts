import { projects } from "@/data/projects";

export async function getProjectById(id: string) {
  return projects.find((p) => p.id === id) || null;
}
