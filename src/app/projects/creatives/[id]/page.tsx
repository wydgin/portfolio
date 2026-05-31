import { designProjects } from "@/data/portfolio";
import { ProjectDetailView } from "@/components/ProjectDetailView";

export function generateStaticParams() {
  return designProjects.map((project) => ({ id: project.id }));
}

export default async function CreativeProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectDetailView category="creatives" id={id} />;
}
