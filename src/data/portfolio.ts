export const siteConfig = {
  name: "rspace",
  fullName: "Regina Galfo",
  title: "Full Stack Developer · Graphic Designer · Aspiring AI Engineer",
  email: "reginagalfo.work@gmail.com",
  location: "Quezon City, Philippines",
  focus: "AI & Social Impact",
  designFocus: "Graphic Design",
  webFocus: "Web Development",
  subtitle: "BS Computer Engineering · UP Diliman",
  profileImage: "/regina.JPG",
  bio: "Computer Engineering student at UP Diliman with interests in full-stack development, AI, and graphic design. I'm an affiliate at the Smart Systems Laboratory, working on assistive medical imaging and explainable AI, and I also take on freelance branding — from hackathon builds to logos and event collaterals.",
  heroDescription:
    "Exploring software, AI, and visual design — online and offline.",
  social: {
    github: "https://github.com/wydgin",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const expertise = [
  {
    title: "Full Stack Development",
    description:
      "Web & mobile apps, REST APIs, and cloud deployment with React, FastAPI, and Docker",
  },
  {
    title: "Graphic Design & Branding",
    description:
      "UI/UX, creative direction, and visual identity — logos, packaging, and social media kits",
  },
  {
    title: "AI & Smart Systems",
    description:
      "Explainable AI, computer vision, and assistive systems for real-world impact",
  },
];

export const techStack = {
  languages: [
    "Python",
    "TypeScript",
    "JavaScript",
    "C/C++",
    "Rust",
    "SQL",
    "HTML/CSS",
  ],
  tools: [
    "React",
    "React Native",
    "FastAPI",
    "TensorFlow",
    "Docker",
    "Figma",
    "Adobe CC",
    "Canva",
    "CapCut",
    "Vercel",
  ],
};

export type ProjectCategory = "tech" | "creatives";

export type Project = {
  id: string;
  title: string;
  caption: string;
  description: string;
  date: string;
  tags: string[];
  href?: string;
  hrefLabel?: string;
  featured?: boolean;
  image?: string;
  gallery?: string[];
  pdf?: string;
  aspect?: "portrait" | "landscape" | "square";
};

export const techProjects: Project[] = [
  {
    id: "chexit",
    title: "Chexit",
    caption: "AI-assisted TB screening platform.",
    description:
      "AI-assisted tuberculosis screening — helping streamline detection workflows with intelligent, accessible tooling.",
    date: "2026",
    tags: ["AI", "Health Tech"],
    href: "https://www.chexit.app/",
    hrefLabel: "Visit Chexit",
    featured: true,
    image: "/projects/chexit.png",
    aspect: "landscape",
  },
  {
    id: "revolt",
    title: "REvolt",
    caption: "Smarter EV ecosystem — MERALCO IDOL Hackathon Champion.",
    description:
      "Champion solution at MERALCO IDOL Hackathon 2025 — a smarter EV ecosystem with intelligent routing and charging infrastructure. 1st place out of 11 teams.",
    date: "2025",
    tags: ["AI", "Hackathon"],
    featured: true,
    image: "/projects/revolt1.png",
    aspect: "landscape",
  },
  {
    id: "family-tree",
    title: "Family Tree",
    caption: "Interactive family tree web app — DEMO 1 culminating project.",
    description:
      "A culminating requirement for DEMO 1 — an interactive family tree built and deployed on the web.",
    date: "2025",
    tags: ["Full Stack", "Web App"],
    href: "https://family-tree-galfo.vercel.app/",
    hrefLabel: "View live demo",
    image: "/projects/familytree.png",
    aspect: "landscape",
  },
  {
    id: "skysentry",
    title: "SkySentry",
    caption: "CanSat AQI probe — EEE 192 hardware project.",
    description:
      "EEE 192 project — a relatively low-cost CanSat designed to map atmospheric data scaled with US AQI, built with teammates for HWX.",
    date: "2025",
    tags: ["IoT", "Hardware"],
    href: "https://sites.google.com/view/skysentry-192hwx/home",
    hrefLabel: "View project site",
    image: "/projects/skysentry.png",
    aspect: "landscape",
  },
];

export const designProjects: Project[] = [
  {
    id: "ovcaa-oat-eot",
    title: "OVCAA-OAT End of Term Report",
    caption: "Document design and social assets for OVCAA-OAT, AY 2326.",
    description:
      "End of term report design for the Office of the Vice Chancellor for Academic Affairs — Office for the Advancement of Teaching. Includes the full document layout and companion social media graphics.",
    date: "AY 2326",
    tags: ["Publications", "Canva"],
    href: "https://canva.link/ovcaaoat-eot-2326",
    hrefLabel: "View on Canva",
    featured: true,
    image: "/projects/eotdoc-6.png",
    gallery: [
      "/projects/eotdoc-1.png",
      "/projects/eotdoc-2.png",
      "/projects/eotdoc-6.png",
      "/projects/eotdoc-7.png",
      "/projects/eot-2326-socmed-1.png",
      "/projects/eot-2326-socmed-2.png",
      "/projects/eot-2326-socmed-4.png",
      "/projects/eot-2326-socmed-15.png",
    ],
    aspect: "portrait",
  },
  {
    id: "chexit-brochure",
    title: "Chexit Brochure",
    caption: "Print and digital brochure for Chexit.",
    description:
      "Brochure design for Chexit — visual communication of the AI-assisted TB screening platform for print and digital distribution.",
    date: "2026",
    tags: ["Branding", "Print"],
    featured: true,
    image: "/projects/chexitbrochure.png",
    gallery: ["/projects/chexitbrochure.png", "/projects/chexitbrochure2.png"],
    aspect: "portrait",
  },
  {
    id: "capes-pubmats",
    title: "CAPES PubMats S2 2025–2026",
    caption: "Publications and collaterals for UP CAPES.",
    description:
      "Branding and publication materials for UP CAPES — including event tarps, handbooks, and promotional graphics for Semester 2, AY 2025–2026.",
    date: "2025 – 2026",
    tags: ["Branding", "Publications"],
    image: "/projects/jf26.png",
    gallery: [
      "/projects/jf26.png",
      "/projects/mixer.png",
      "/projects/jftarp.png",
      "/projects/career101handbook.png",
    ],
    aspect: "landscape",
  },
  {
    id: "eqdrill",
    title: "Earthquake Safety Pubmat",
    caption: "OVCAA earthquake safety tips infographic.",
    description:
      "Publication material for the OVCAA office — an earthquake safety tips infographic covering before, during, and after an earthquake.",
    date: "2025",
    tags: ["Publications", "OVCAA"],
    image: "/projects/eqdrill.png",
    aspect: "portrait",
  },
  {
    id: "rizal",
    title: "Life and Works of Rizal",
    caption: "PI 100 course requirement — visual study.",
    description:
      "PI 100 requirement on the Life and Works of José Rizal — a visual and research-driven project.",
    date: "2025",
    tags: ["Academic", "Design"],
    image: "/projects/rizal.png",
    aspect: "portrait",
  },
  {
    id: "galfo-portfolio-capes",
    title: "Galfo Portfolio — CAPES 2025",
    caption: "Portfolio for CAPES application, AY 2025.",
    description:
      "Design portfolio submitted for the UP CAPES application in 2025 — a curated selection of creative and technical work.",
    date: "2025",
    tags: ["Portfolio", "CAPES"],
    image: "/projects/galfoportfolio.png",
    pdf: "/projects/Galfo_portfolio_2025.pdf",
    aspect: "landscape",
  },
  {
    id: "journal",
    title: "Journal (Analog)",
    caption: "Handmade analog journal spreads.",
    description:
      "Personal analog journal — handmade layouts and spreads exploring visual storytelling offline.",
    date: "2025",
    tags: ["Analog", "Personal"],
    image: "/projects/journal.jpg",
    gallery: ["/projects/journalspread1.PNG"],
    aspect: "portrait",
  },
];

export type ProjectSection = {
  id: ProjectCategory;
  category: ProjectCategory;
  title: string;
  exploreHref: string;
  seeMoreLabel: string;
  projects: Project[];
};

export const projectSections: ProjectSection[] = [
  {
    id: "tech",
    category: "tech",
    title: "Tech Projects",
    exploreHref: "/projects/tech",
    seeMoreLabel: "See more of my technical work",
    projects: techProjects,
  },
  {
    id: "creatives",
    category: "creatives",
    title: "Graphic Design",
    exploreHref: "/projects/creatives",
    seeMoreLabel: "See more of my creative pursuits",
    projects: designProjects,
  },
];

export function getFeaturedProjects(projects: Project[], limit = 2) {
  const featured = projects.filter((project) => project.featured);
  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }
  const rest = projects.filter((project) => !project.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function getProjectById(category: ProjectCategory, id: string) {
  const projects =
    category === "tech" ? techProjects : designProjects;
  return projects.find((project) => project.id === id);
}

export function getProjectDetailPath(category: ProjectCategory, id: string) {
  return `/projects/${category}/${id}`;
}

export const projectCategoryMeta: Record<
  ProjectCategory,
  { title: string; description: string }
> = {
  tech: {
    title: "Tech Projects",
    description: "Software, AI systems, and hackathon builds.",
  },
  creatives: {
    title: "Creatives",
    description: "Branding, UI/UX, and visual design work.",
  },
};
