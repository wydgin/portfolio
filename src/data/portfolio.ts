export const siteConfig = {
  name: "rspace",
  fullName: "Regina Galfo",
  title: "Full Stack Developer · Graphic Designer · AI Engineer",
  email: "reginagalfo.work@gmail.com",
  location: "Quezon City, Philippines",
  focus: "AI & Social Impact",
  availability: "Available for\nFreelance",
  subtitle: "BS Computer Engineering · UP Diliman",
  bio: "Computer Engineering student at UP Diliman with interests in full-stack development, AI, and graphic design. I'm an affiliate at the Smart Systems Laboratory, working on assistive medical imaging and explainable AI, and I also take on freelance branding — from hackathon builds to logos and event collaterals.",
  heroDescription:
    "Exploring software, AI, and visual design — building in the lab, at hackathons, and through freelance work.",
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
    description: "Web & mobile apps, REST APIs, and cloud deployment with React, FastAPI, and Docker",
  },
  {
    title: "Graphic Design & Branding",
    description: "UI/UX, creative direction, and visual identity — logos, packaging, and social media kits",
  },
  {
    title: "AI & Smart Systems",
    description: "Explainable AI, computer vision, and assistive systems for real-world impact",
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
    "Vercel",
  ],
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
  image?: string;
};

export const techProjects: Project[] = [
  {
    id: "t01",
    title: "REvolt",
    description:
      "Champion solution at MERALCO IDOL Hackathon 2025 — a smarter EV ecosystem with intelligent routing and charging infrastructure. 1st place out of 11 teams.",
    tags: ["Featured", "AI", "Hackathon"],
    featured: true,
  },
  {
    id: "t02",
    title: "Project Buklod",
    description:
      "Centralized citizen application backed by a Dynamic Data Reconciliation engine for decentralized LGU databases, with an IoT warning system.",
    tags: ["Full Stack", "Social Impact"],
  },
  {
    id: "t03",
    title: "GResbak",
    description:
      "Emergency fund-building feature for gig workers — built for the GCash ImaGnation Innovation Challenge to create a financial safety net.",
    tags: ["Fintech", "Mobile"],
  },
];

export const designProjects: Project[] = [
  {
    id: "d01",
    title: "Paw Unleashed Rebrand",
    description:
      "Led the full rebrand for an Australian pet brand — UI/UX, visual identity, and automated content systems that improved engagement and sales conversion.",
    tags: ["Featured", "Branding", "UI/UX"],
    featured: true,
  },
  {
    id: "d02",
    title: "UP CAPES Job Fair 2026",
    description:
      "Team Lead for branding and publications on UP CAPES' biggest flagship event — visual identity, collaterals, and event materials for engineering students.",
    tags: ["Branding", "Publications"],
  },
  {
    id: "d03",
    title: "Freelance Brand Identity",
    description:
      "Creative direction and branding for small businesses — logos, packaging design, and social media kits that translate brand identity into visual assets.",
    tags: ["Branding", "Freelance"],
  },
];

export const projectSections = [
  {
    id: "tech",
    label: "Section 02 // Tech Projects",
    title: "Tech Projects",
    projects: techProjects,
    variant: "tech" as const,
  },
  {
    id: "design",
    label: "Section 03 // Graphic Design",
    title: "Graphic Design",
    projects: designProjects,
    variant: "design" as const,
  },
];
