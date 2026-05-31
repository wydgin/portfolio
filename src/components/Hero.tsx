"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pb-20 pt-32 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted"
        >
          {siteConfig.title}
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,10vw,7rem)] font-bold leading-[0.95] tracking-tight text-foreground"
          >
            I MAKE
            <br />
            <span className="inline-block">
              <span className="text-flow-word" data-text="STUFF">
                <span className="text-flow-fill">STUFF</span>
              </span>{" "}
              :)
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          {siteConfig.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Explore Projects
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-muted"
          />
        </div>
      </motion.div>
    </section>
  );
}
