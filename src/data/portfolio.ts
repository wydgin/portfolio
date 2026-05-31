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
  featured?: boolean;
  image?: string;
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
    featured: true,
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
    aspect: "portrait",
  },
  {
    id: "buklod",
    title: "Project Buklod",
    caption: "Citizen app with data reconciliation for decentralized LGU databases.",
    description:
      "Centralized citizen application backed by a Dynamic Data Reconciliation engine for decentralized LGU databases, with an IoT warning system.",
    date: "2026",
    tags: ["Full Stack", "Social Impact"],
    aspect: "portrait",
  },
  {
    id: "gresbak",
    title: "GResbak",
    caption: "Emergency fund feature for gig workers — GCash ImaGnation.",
    description:
      "Emergency fund-building feature for gig workers — built for the GCash ImaGnation Innovation Challenge to create a financial safety net.",
    date: "2025",
    tags: ["Fintech", "Mobile"],
    aspect: "square",
  },
];

export const designProjects: Project[] = [
  {
    id: "creative-one",
    title: "Creative Project One",
    caption: "Placeholder — swap in your project details.",
    description:
      "Add a short description for your design work here.",
    date: "2026",
    tags: ["Branding"],
    featured: true,
    aspect: "portrait",
  },
  {
    id: "creative-two",
    title: "Creative Project Two",
    caption: "Placeholder — swap in your project details.",
    description:
      "Add a short description for your design work here.",
    date: "2026",
    tags: ["UI/UX"],
    featured: true,
    aspect: "landscape",
  },
  {
    id: "paw-unleashed",
    title: "Paw Unleashed Rebrand",
    caption: "Full rebrand and UI/UX for an Australian pet brand.",
    description:
      "Led the full rebrand for an Australian pet brand — UI/UX, visual identity, and automated content systems that improved engagement and sales conversion.",
    date: "2020 – 2021",
    tags: ["Branding", "UI/UX"],
    aspect: "square",
  },
  {
    id: "up-capes",
    title: "UP CAPES Job Fair 2026",
    caption: "Branding and publications for UP CAPES' flagship job fair.",
    description:
      "Team Lead for branding and publications on UP CAPES' biggest flagship event — visual identity, collaterals, and event materials for engineering students.",
    date: "2026",
    tags: ["Branding", "Publications"],
    aspect: "landscape",
  },
  {
    id: "freelance-branding",
    title: "Freelance Brand Identity",
    caption: "Logos, packaging, and social kits for small businesses.",
    description:
      "Creative direction and branding for small businesses — logos, packaging design, and social media kits that translate brand identity into visual assets.",
    date: "2024 – present",
    tags: ["Branding", "Freelance"],
    aspect: "square",
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
