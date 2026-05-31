import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function ExploreHeader({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <div className="flex items-center gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <span className="hidden text-border sm:inline">/</span>
          <p className="hidden font-display text-sm font-semibold text-foreground sm:block">
            {title}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-display text-sm font-bold tracking-tight text-foreground"
          >
            {siteConfig.name}
            <span className="text-accent">.</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
