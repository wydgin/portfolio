import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  getProjectById,
  projectCategoryMeta,
  type ProjectCategory,
} from "@/data/portfolio";
import { ExploreHeader } from "@/components/ExploreHeader";
import { ProjectVisual } from "@/components/ProjectVisual";

export function ProjectDetailView({
  category,
  id,
}: {
  category: ProjectCategory;
  id: string;
}) {
  const project = getProjectById(category, id);

  if (!project) {
    notFound();
  }

  const meta = projectCategoryMeta[category];
  const exploreHref = `/projects/${category}`;

  return (
    <>
      <ExploreHeader title={meta.title} />
      <main className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-4xl">
          <Link
            href={exploreHref}
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All {meta.title.toLowerCase()}
          </Link>

          <div className="overflow-hidden rounded-2xl border border-border">
            <ProjectVisual
              project={project}
              category={category}
              className="!aspect-[16/10] w-full"
              priority
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <time className="text-xs uppercase tracking-[0.2em] text-muted">
              {project.date}
            </time>
            <p className="text-xs uppercase tracking-wider text-muted">
              {project.tags.join(" • ")}
            </p>
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {project.description}
          </p>

          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View live project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}

          <div className="mt-12 border-t border-border pt-8">
            <Link
              href={exploreHref}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              ← Explore more {category === "tech" ? "tech" : "creative"} work
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
