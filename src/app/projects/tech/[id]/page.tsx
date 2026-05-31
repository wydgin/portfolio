import { techProjects } from "@/data/portfolio";
import { ProjectDetailView } from "@/components/ProjectDetailView";

export function generateStaticParams() {
  return techProjects.map((project) => ({ id: project.id }));
}

export default async function TechProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectDetailView category="tech" id={id} />;
}
