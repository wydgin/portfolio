"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const socialLinks = Object.entries(siteConfig.social).flatMap(
  ([key, href]) => {
    if (!href) return [];
    const label =
      key === "github"
        ? "GitHub"
        : key === "linkedin"
          ? "LinkedIn"
          : key.charAt(0).toUpperCase() + key.slice(1);
    return [{ label, href }];
  },
);

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.95] tracking-tight">
            LET&apos;S BUILD
            <br />
            <span className="text-muted">SOMETHING</span>
            <span className="text-accent">.</span>
          </h2>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-10 inline-block text-lg text-muted transition-colors hover:text-accent md:text-xl"
          >
            {siteConfig.email}
          </a>

          {socialLinks.length > 0 && (
          <div className="mt-10 flex items-center justify-center gap-8">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase tracking-wider text-muted transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
