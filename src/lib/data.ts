import { PlaceHolderImages } from "./placeholder-images";

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "DevOps" | "Tools";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export const USER_INFO = {
  name: "Alex Thompson", // REPLACE WITH REAL NAME
  role: "Full-Stack Developer", // REPLACE WITH REAL ROLE
  bio: "Full-Stack Developer with over 1 year of professional experience building scalable web applications. Specialized in Python/Django backends and React frontends, with a strong foundation in SQL databases and automated deployment pipelines.",
  location: "San Francisco, CA",
  email: "alex.thompson@example.com",
  social: {
    github: "https://github.com/alex-thompson",
    linkedin: "https://linkedin.com/in/alex-thompson",
    twitter: "https://twitter.com/alexdev"
  }
};

export const SKILLS: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Redis", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS (EC2/S3)", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Git", category: "Tools" },
  { name: "Jira", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Figma", category: "Tools" }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "TaskFlow Manager",
    description: "Enterprise task management solution built with Django and React.",
    longDescription: "A high-performance task management application featuring real-time updates via WebSockets, complex state management using Redux Toolkit, and a modular Django backend with custom middleware for audit logging.",
    technologies: ["React", "Django", "PostgreSQL", "WebSockets"],
    imageUrl: PlaceHolderImages.find(img => img.id === "project-task")?.imageUrl || "",
    liveUrl: "https://example.com/taskflow",
    githubUrl: "https://github.com/alex/taskflow"
  },
  {
    id: "2",
    title: "SecureAuth Pro",
    description: "Robust authentication system implementing MFA and OTP.",
    longDescription: "An advanced authentication boilerplate implementing JWT, refresh tokens, and mobile-based OTP verification. Built with Django REST Framework and optimized for high-security environments.",
    technologies: ["Python", "Django", "Redis", "Twilio API"],
    imageUrl: PlaceHolderImages.find(img => img.id === "project-auth")?.imageUrl || "",
    githubUrl: "https://github.com/alex/secureauth"
  },
  {
    id: "3",
    title: "CloudDeploy Toolkit",
    description: "Dockerized microservices environment with CI/CD automation.",
    longDescription: "A blueprint for deploying containerized Python apps to AWS. Includes multi-stage Dockerfiles, Terraform scripts for infrastructure as code, and automated testing via GitHub Actions.",
    technologies: ["Docker", "AWS", "Terraform", "Nginx"],
    imageUrl: PlaceHolderImages.find(img => img.id === "project-docker")?.imageUrl || "",
    githubUrl: "https://github.com/alex/cloud-deploy"
  },
  {
    id: "4",
    title: "AI Project Assistant",
    description: "GenAI tool for generating impactful project descriptions.",
    longDescription: "A specialized tool that leverages LLMs to help developers write concise and professional project summaries based on technical parameters.",
    technologies: ["Next.js", "Genkit", "Google Gemini", "Tailwind"],
    imageUrl: PlaceHolderImages.find(img => img.id === "project-ai")?.imageUrl || "",
    githubUrl: "https://github.com/alex/ai-desc-gen"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Full-Stack Developer",
    company: "Nexus Digital Solutions",
    duration: "Jan 2024 - Present",
    description: [
      "Led the migration of a legacy monolithic PHP app to a modern Django/React microservices architecture.",
      "Optimized SQL queries reducing average page load times by 40% for high-traffic endpoints.",
      "Mentored junior developers on best practices for REST API design and modular React components.",
      "Implemented an automated CI/CD pipeline reducing deployment errors by 25%."
    ]
  },
  {
    id: "exp2",
    role: "Junior Web Developer",
    company: "BrightPath Tech",
    duration: "June 2023 - Dec 2023",
    description: [
      "Developed responsive UI components using React and styled-components for a financial dashboard.",
      "Integrated third-party APIs for real-time market data visualization using Recharts.",
      "Collaborated with UX designers to implement pixel-perfect designs across all breakpoints."
    ]
  }
];