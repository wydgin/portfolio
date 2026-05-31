"use client";

import { motion } from "framer-motion";
import { Code2, MapPin, Palette, Sparkles } from "lucide-react";
import { expertise, siteConfig, techStack } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-12 text-xs font-medium uppercase tracking-[0.25em] text-muted"
        >
          Section 01 // About Me
        </motion.p>

        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl bg-surface"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface to-surface-hover" />
            <div className="absolute inset-0 flex items-end p-6">
              <span className="text-xs uppercase tracking-widest text-muted">
                Add photo at /public/profile.jpg
              </span>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                {siteConfig.name}
                <span className="text-accent">.</span>
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.15em] text-muted">
                {siteConfig.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 space-y-4 text-base leading-relaxed text-muted md:text-lg"
            >
              <p>{siteConfig.bio}</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted">
                <MapPin className="h-3.5 w-3.5" />
                {siteConfig.location}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted">
                <Sparkles className="h-3.5 w-3.5" />
                {siteConfig.focus}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted">
                <Palette className="h-3.5 w-3.5" />
                {siteConfig.designFocus}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted">
                <Code2 className="h-3.5 w-3.5" />
                {siteConfig.webFocus}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16 grid gap-10 md:grid-cols-2"
            >
              <div>
                <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Core Expertise
                </h3>
                <ul className="space-y-6">
                  {expertise.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="mt-1 text-accent">✦</span>
                      <div>
                        <p className="font-medium text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-muted">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Tech Stack
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="mb-3 text-sm font-medium text-foreground">
                      Languages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {techStack.languages.map((lang) => (
                        <span
                          key={lang}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-medium text-foreground">
                      Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {techStack.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
