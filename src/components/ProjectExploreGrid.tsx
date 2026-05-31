"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  getProjectDetailPath,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectExploreGrid({
  projects,
  category,
}: {
  projects: Project[];
  category: ProjectCategory;
}) {
  return (
    <div className="explore-grid">
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.25) }}
          className="explore-item"
        >
          <Link
            href={getProjectDetailPath(category, project.id)}
            className="group block overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-hover"
          >
            <ProjectVisual project={project} category={category} />

            <div className="border-t border-border px-4 py-3">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm leading-snug text-foreground transition-colors group-hover:text-accent">
                  {project.caption}
                </p>
                <time className="shrink-0 text-xs uppercase tracking-wider text-muted">
                  {project.date}
                </time>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
