import {
  designProjects,
  projectCategoryMeta,
} from "@/data/portfolio";
import { ExploreHeader } from "@/components/ExploreHeader";
import { ProjectExploreGrid } from "@/components/ProjectExploreGrid";

export const metadata = {
  title: "Creatives | Regina Galfo",
  description: projectCategoryMeta.creatives.description,
};

export default function CreativesExplorePage() {
  return (
    <>
      <ExploreHeader title={projectCategoryMeta.creatives.title} />
      <main className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-muted">
            Explore
          </p>
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {projectCategoryMeta.creatives.title}
          </h1>
          <p className="mt-3 max-w-xl text-muted">
            {projectCategoryMeta.creatives.description}
          </p>

          <div className="mt-10">
            <ProjectExploreGrid projects={designProjects} category="creatives" />
          </div>
        </div>
      </main>
    </>
  );
}
