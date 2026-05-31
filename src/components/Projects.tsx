"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  type Project,
  projectSections,
} from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ProjectCard({
  project,
  variant,
  index,
}: {
  project: Project;
  variant: "tech" | "design";
  index: number;
}) {
  const previewClass =
    variant === "design"
      ? "bg-gradient-to-br from-rose-500/10 via-surface-hover to-surface"
      : "bg-gradient-to-br from-accent/10 via-surface-hover to-surface";

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-hover"
    >
      <div className={`aspect-[16/10] ${previewClass}`} />

      <div className="p-6 md:p-8">
        <p className="mb-4 text-xs uppercase tracking-wider">
          {project.tags.map((tag, tagIndex) => (
            <span key={tag}>
              <span
                className={tag === "Featured" ? "text-accent" : "text-muted"}
              >
                {tag}
              </span>
              {tagIndex < project.tags.length - 1 && (
                <span className="mx-2 text-border">•</span>
              )}
            </span>
          ))}
        </p>

        <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {project.href && (
          <a
            href={project.href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent"
          >
            {project.featured ? "VIEW PROJECT" : "LEARN MORE →"}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

function ProjectGroup({
  label,
  title,
  projects,
  variant,
}: {
  label: string;
  title: string;
  projects: Project[];
  variant: "tech" | "design";
}) {
  return (
    <div className={variant === "design" ? "mt-24 md:mt-32" : ""}>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted"
      >
        {label}
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10 flex flex-wrap items-end justify-between gap-4"
      >
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="text-sm text-muted">
          {String(projects.length).padStart(2, "0")} projects
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant={variant}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {projectSections.map((section) => (
          <ProjectGroup
            key={section.id}
            label={section.label}
            title={section.title}
            projects={section.projects}
            variant={section.variant}
          />
        ))}
      </div>
    </section>
  );
}
