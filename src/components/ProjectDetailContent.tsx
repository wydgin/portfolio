import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectDetailContent({ project }: { project: Project }) {
  const gallery = project.gallery ?? [];
  const hasGallery = gallery.length > 0;

  return (
    <>
      {hasGallery && (
        <div className="mt-10">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Gallery
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {gallery.map((src) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {project.pdf && (
        <div className="mt-10">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Preview
            </h2>
            <a
              href={project.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Open full PDF
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <iframe
              src={`${project.pdf}#view=FitH`}
              title={`${project.title} PDF`}
              className="h-[min(80vh,900px)] w-full"
            />
          </div>
        </div>
      )}

      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {project.hrefLabel ?? "View project"}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </>
  );
}
