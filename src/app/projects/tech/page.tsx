import {
  projectCategoryMeta,
  techProjects,
} from "@/data/portfolio";
import { ExploreHeader } from "@/components/ExploreHeader";
import { ProjectExploreGrid } from "@/components/ProjectExploreGrid";

export const metadata = {
  title: "Tech Projects | Regina Galfo",
  description: projectCategoryMeta.tech.description,
};

export default function TechExplorePage() {
  return (
    <>
      <ExploreHeader title={projectCategoryMeta.tech.title} />
      <main className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-muted">
            Explore
          </p>
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {projectCategoryMeta.tech.title}
          </h1>
          <p className="mt-3 max-w-xl text-muted">
            {projectCategoryMeta.tech.description}
          </p>

          <div className="mt-10">
            <ProjectExploreGrid projects={techProjects} category="tech" />
          </div>
        </div>
      </main>
    </>
  );
}
