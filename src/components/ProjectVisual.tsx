import Image from "next/image";
import type { Project, ProjectCategory } from "@/data/portfolio";

const aspectClasses = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

const previewClasses: Record<ProjectCategory, string> = {
  tech: "bg-gradient-to-br from-accent/20 via-surface-hover to-surface",
  creatives: "bg-gradient-to-br from-rose-500/15 via-surface-hover to-surface",
};

export function ProjectVisual({
  project,
  category,
  className = "",
  priority = false,
}: {
  project: Project;
  category: ProjectCategory;
  className?: string;
  priority?: boolean;
}) {
  const aspect = aspectClasses[project.aspect ?? "landscape"];

  if (project.image) {
    return (
      <div className={`relative overflow-hidden ${aspect} ${className}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`${aspect} ${previewClasses[category]} ${className}`}
      aria-hidden
    />
  );
}
