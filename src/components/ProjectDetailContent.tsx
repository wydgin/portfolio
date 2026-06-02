"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectDetailContent({ project }: { project: Project }) {
  const gallery = project.gallery ?? [];
  const hasGallery = gallery.length > 0;

  // Track the index of the open image (null means modal is closed)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Functions to navigate back and forth safely
  const showNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! + 1) % gallery.length);
  }, [activeIndex, gallery.length]);

  const showPrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! - 1 + gallery.length) % gallery.length);
  }, [activeIndex, gallery.length]);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  // Listen for keyboard arrow keys
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, showNext, showPrev, closeModal]);

  return (
    <>
      {hasGallery && (
        <div className="mt-10">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Gallery
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {gallery.map((src, index) => (
              <div
                key={src}
                onClick={() => setActiveIndex(index)} // Store the clicked item index
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface cursor-zoom-in group"
              >
                <Image
                  src={src}
                  alt={`${project.title} gallery item ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal Overlay */}
      {activeIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-between bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeModal}
        >
          {/* Top Header: Close Button and Image Counter */}
          <div className="absolute top-4 inset-x-4 z-50 flex items-center justify-between pointer-events-none">
            <span className="text-sm font-medium text-white/60 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md select-none">
              {activeIndex + 1} / {gallery.length}
            </span>
            <button 
              onClick={closeModal}
              className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors pointer-events-auto cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          

          {/* Left Navigation Button */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-4 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors md:flex hidden items-center justify-center cursor-pointer select-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* CHANGED SECTION: This block below is updated to center everything */}
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-auto p-4 flex items-center justify-center">
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <Image
                src={gallery[activeIndex]}
                alt="Zoomed gallery graphic"
                fill
                className="object-contain !position-absolute !inset-0 m-auto select-none"
                priority
              />
            </div>
          </div>
          {/* END OF CHANGED SECTION */}

          {/* Right Navigation Button */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-4 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors md:flex hidden items-center justify-center cursor-pointer select-none"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* PDF section */}
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