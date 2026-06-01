"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  getFeaturedProjects,
  getProjectDetailPath,
  projectSections,
  type Project,
  type ProjectCategory,
  type ProjectSection,
} from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function FeaturedProjectCard({
  project,
  category,
  index,
}: {
  project: Project;
  category: ProjectCategory;
  index: number;
}) {
  const detailHref = getProjectDetailPath(category, project.id);

  const cardClassName =
    "group flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-hover";

  const cardContent = (
    <>
      <ProjectVisual
        project={project}
        category={category}
        variant="featured"
      />

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="mb-2 text-xs uppercase tracking-wider text-muted">
          {project.tags.join(" • ")}
        </p>
        <h3 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
          View project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </>
  );

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full min-h-0"
    >
      <Link href={detailHref} className={cardClassName}>
        {cardContent}
      </Link>
    </motion.div>
  );
}

function HighlightsGrid() {
  const [techSection, creativesSection] = projectSections;
  const techFeatured = getFeaturedProjects(techSection.projects, 2);
  const creativesFeatured = getFeaturedProjects(creativesSection.projects, 2);

  return (
    <>
      {/* Desktop: row-aligned grid so paired cards share height */}
      <div className="hidden md:grid md:grid-cols-2 md:grid-rows-[auto_1fr_1fr_auto] md:gap-x-8 md:gap-y-6 lg:gap-x-12">
        <SectionLabel section={techSection} index={0} />
        <SectionLabel section={creativesSection} index={1} />

        <FeaturedProjectCard
          project={techFeatured[0]}
          category="tech"
          index={0}
        />
        <FeaturedProjectCard
          project={creativesFeatured[0]}
          category="creatives"
          index={1}
        />

        <FeaturedProjectCard
          project={techFeatured[1]}
          category="tech"
          index={2}
        />
        <FeaturedProjectCard
          project={creativesFeatured[1]}
          category="creatives"
          index={3}
        />

        <SeeMoreLink section={techSection} index={4} />
        <SeeMoreLink section={creativesSection} index={5} />
      </div>

      {/* Mobile: stacked columns */}
      <div className="flex flex-col gap-12 md:hidden">
        <ProjectColumnMobile section={techSection} startIndex={0} />
        <ProjectColumnMobile section={creativesSection} startIndex={2} />
      </div>
    </>
  );
}

function SectionLabel({
  section,
  index,
}: {
  section: ProjectSection;
  index: number;
}) {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="text-xs font-medium uppercase tracking-[0.25em] text-muted"
    >
      {section.title}
    </motion.p>
  );
}

function SeeMoreLink({
  section,
  index,
}: {
  section: ProjectSection;
  index: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="self-end"
    >
      <Link
        href={section.exploreHref}
        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-border-hover hover:text-foreground"
      >
        {section.seeMoreLabel}
        <ArrowUpRight className="h-4 w-4 shrink-0" />
      </Link>
    </motion.div>
  );
}

function ProjectColumnMobile({
  section,
  startIndex,
}: {
  section: ProjectSection;
  startIndex: number;
}) {
  const featured = getFeaturedProjects(section.projects, 2);

  return (
    <div>
      <SectionLabel section={section} index={startIndex} />

      <div className="mt-6 grid gap-6">
        {featured.map((project, index) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            category={section.category}
            index={startIndex + index}
          />
        ))}
      </div>

      <div className="mt-6">
        <SeeMoreLink section={section} index={startIndex + 2} />
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
          Highlights
        </motion.h2>

        <HighlightsGrid />
      </div>
    </section>
  );
}
