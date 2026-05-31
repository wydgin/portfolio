import { siteConfig } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8 md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          © {year} {siteConfig.name.toUpperCase()} • CRAFTED WITH LOVE
        </p>
      </div>
    </footer>
  );
}
