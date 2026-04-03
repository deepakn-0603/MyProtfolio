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

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export const USER_INFO = {
  name: "Deepak N",
  role: "Software Engineer / DevOps Engineer",
  bio: "Software Engineer with 1+ year of experience in backend development and DevOps. Skilled in building scalable REST APIs using Python and Django, with working knowledge of React.js. Experienced in AWS cloud services, Docker, Kubernetes, CI/CD pipelines, and infrastructure automation using Terraform and Ansible. Strong focus on system reliability, monitoring, and automation.",
  location: "Bangalore, India",
  email: "deepak.n.0603@gmail.com",
  social: {
    github: "https://github.com/deepakn-0603",
    linkedin: "https://linkedin.com/in/deepak-n",
  } as SocialLinks
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
    title: "Heart Wise",
    description: "AI-powered health monitoring and heart disease prediction platform.",
    longDescription: "Heart Wise is a full-stack health monitoring application designed to predict and analyze heart-related conditions using machine learning models. The platform allows users to input health parameters and receive predictive insights, while also providing a user-friendly dashboard for tracking health metrics. Built with a scalable backend using Django and integrated with modern DevOps practices including containerization, CI/CD pipelines, and cloud deployment.",
    technologies: ["Python", "Django", "Machine Learning", "React", "Docker", "AWS", "CI/CD"],
    imageUrl: PlaceHolderImages.find(img => img.id === "project-heartwise")?.imageUrl || "",
    liveUrl: "",
    githubUrl: "https://github.com/deepakn-0603/Heart-wise"
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
