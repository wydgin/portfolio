"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  getFeaturedProject,
  getProjectDetailPath,
  projectSections,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function FeaturedProjectCard({
  project,
  category,
  title,
  exploreHref,
  index,
}: {
  project: Project;
  category: ProjectCategory;
  title: string;
  exploreHref: string;
  index: number;
}) {
  const detailHref = getProjectDetailPath(category, project.id);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex h-full flex-col"
    >
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted">
        {title}
      </p>

      <Link
        href={detailHref}
        className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-hover"
      >
        <ProjectVisual project={project} category={category} />

        <div className="flex flex-1 flex-col p-6 md:p-8">
          <p className="mb-3 text-xs uppercase tracking-wider text-muted">
            {project.tags.join(" • ")}
          </p>
          <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
            View project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>

      <Link
        href={exploreHref}
        className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-border-hover hover:text-foreground"
      >
        See more
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted"
        >
          Section 02 // Projects
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 font-display text-3xl font-bold tracking-tight md:text-4xl"
        >
          Selected Work
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
          {projectSections.map((section, index) => (
            <FeaturedProjectCard
              key={section.id}
              project={getFeaturedProject(section.projects)}
              category={section.category}
              title={section.title}
              exploreHref={section.exploreHref}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
