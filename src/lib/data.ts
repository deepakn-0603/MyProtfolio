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
  imageUrl: string[];
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
  bio: "Software Engineer with experience progressing from Intern (Jan 2025 – Nov 2025) to Full-Time Engineer (Dec 2025 – Present). Skilled in building scalable REST APIs using Python and Django, with working knowledge of React.js. Experienced in AWS cloud services, Docker, Kubernetes, CI/CD pipelines, and infrastructure automation using Terraform and Ansible. Strong focus on system reliability, monitoring, and automation.",
  location: "Bangalore, India",
  email: "deepak.n.0603@gmail.com",
  social: {
    github: "https://github.com/deepakn-0603",
    linkedin: "https://www.linkedin.com/in/deepak-n-5b255b269",
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
  { name: "Jenkins", category: "DevOps" },
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
    imageUrl: ["/images/heart-wise-A.png", "/images/heart-wise-B.png"],
    liveUrl: "https://heart-wise-eight.vercel.app/",
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "Modern, responsive portfolio showcasing projects, skills, and experience.",
    longDescription: "A fully responsive and production-ready portfolio website built to highlight my experience as a full-stack developer. It includes dynamic project listings, categorized skills, and a professional experience section. Designed with a clean UI using React and integrated with scalable architecture practices. The application follows component-based design and is optimized for performance and maintainability.",
    technologies: ["React", "JavaScript", "CSS", "REST API", "Next js"],
    imageUrl: ["/images/portfolio-A.png", "/images/portfolio-B.png", "/images/portfolio-C.png"],
    liveUrl: "https://deepak-n-portfolio.vercel.app/"
  }
  // {
  //   id: "3",
  //   title: "CloudDeploy Toolkit",
  //   description: "Dockerized microservices environment with CI/CD automation.",
  //   longDescription: "A blueprint for deploying containerized Python apps to AWS. Includes multi-stage Dockerfiles, Terraform scripts for infrastructure as code, and automated testing via GitHub Actions.",
  //   technologies: ["Docker", "AWS", "Terraform", "Nginx"],
  //   imageUrl: PlaceHolderImages.find(img => img.id === "project-docker")?.imageUrl || "",
  //   githubUrl: "https://github.com/alex/cloud-deploy"
  // },
  // {
  //   id: "4",
  //   title: "AI Project Assistant",
  //   description: "GenAI tool for generating impactful project descriptions.",
  //   longDescription: "A specialized tool that leverages LLMs to help developers write concise and professional project summaries based on technical parameters.",
  //   technologies: ["Next.js", "Genkit", "Google Gemini", "Tailwind"],
  //   imageUrl: PlaceHolderImages.find(img => img.id === "project-ai")?.imageUrl || "",
  //   githubUrl: "https://github.com/alex/ai-desc-gen"
  // }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Software Engineer",
    company: "Team Geek Solution Pvt Ltd",
    duration: "Dec 2025 - Present",
    description: [
      "Developed and maintained scalable REST APIs using Python and Django to support cloud-based applications.",
      "Deployed and managed containerized and serverless applications on AWS (EC2, ECS, Lambda, S3, VPC) ensuring high availability.",
      "Implemented CI/CD pipelines using GitHub Actions to automate build, testing, and deployment workflows.",
      "Set up monitoring and alerting using Prometheus, Grafana, and CloudWatch to improve system reliability and observability.",
      "Supported Kubernetes cluster operations and contributed to zero-downtime deployment strategies.",
      "Participated in incident management, including troubleshooting, root cause analysis (RCA), and system improvements."
    ]
  },
  {
    id: "exp2",
    role: "Technical Intern",
    company: "Team Geek Solution Pvt Ltd",
    duration: "Jan 2025 - Nov 2025",
    description: [
      "Assisted in developing REST APIs using Python and Django for backend services.",
      "Supported deployment and testing of applications on AWS environments.",
      "Worked with Docker containers and gained exposure to Kubernetes-based deployments.",
      "Contributed to CI/CD pipeline setup and debugging using GitHub Actions.",
      "Collaborated with senior engineers on debugging, testing, and performance improvements."
    ]
  }
];