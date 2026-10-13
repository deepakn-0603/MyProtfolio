import {
  Cloud,
  Code2,
  Workflow,
} from "lucide-react";
import { Metadata } from "next";

export const NAVIGATE = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const NAV_LINKS = [
  { label: "Projects", mobileLabel: "Projects", href: "#projects" },
  { label: "Experience", mobileLabel: "Experience", href: "#experience" },
  { label: "Tech", mobileLabel: "Tech", href: "#stack" },
] as const;

export const HERO_DATA = {
  profession: "SOFTWARE ENGINEER",
  specialization: "BACKEND ENGINEER & CLOUD",
  greeting: "Hello, I'm",
  subtitleStart: "Software Engineer building",
  scalable: "Scalable",
  subtitleMiddle: "and",
  infrastructure: "Infrastructure",
  subtitleEnd: ".",
  copy: "I build dependable services and cloud systems that help products grow—from thoughtfully designed APIs to automated deployments.",
  location: "BASED IN BANGALORE · IMMEDIATELY JOINER",
  index: "01",
  indexCaption: "BUILD / SHIP / SCALE",
  scrollLabel: "SCROLL TO EXPLORE",
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/deepakn-0603",
  linkedin: "https://www.linkedin.com/in/deepak-n-5b255b269",
  email: "mailto:deepak.n.0603@gmail.com",
  emailLabel: "deepak.n.0603@gmail.com",
} as const;

export const SKILLS_DATA = [
  {
    title: "Backend & Full Stack",
    subtitle: "Scalable APIs, relational databases & modern web UI.",
    icon: Code2,
    skills: ["Python", "Django REST", "FastAPI", "PostgreSQL", "MySQL", "Redis", "REST APIs", "React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Distributed infrastructure, containers & CI/CD automation.",
    icon: Cloud,
    skills: ["AWS (EC2, S3, Lambda, VPC)", "Kubernetes", "Docker", "Terraform", "Ansible", "GitHub Actions", "Jenkins", "Linux"],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Agentic workflows, RAG pipelines & vector search.",
    icon: Workflow,
    skills: ["LangChain", "LlamaIndex", "Pinecone", "RAG Architecture", "Hugging Face", "Genkit", "scikit-learn", "MCP", "GitHub Copilot"],
  },
];

export const PROJECTS_DATA = [
  {
    name: "Heart-Wise Intelligence Platform",
    type: "BACKEND / AI",
    status: "LIVE",
    description: [
      "Developed machine learning classification models using scikit-learn in a Python environment, achieving high accuracy and precision.",
      "Integrated Genkit to generate interpretable AI medical explanations, utilizing structured schema validation for high reliability.",
    ],
    tags: ["Python", "Render", "PostgreSQL", "Docker", "scikit-learn", "Genkit"],
    kind: "heart",
  },
  {
    name: "DocMind AI – Intelligent Document Processing",
    type: "AI / DOCUMENT PROCESSING",
    status: "IN PROGRESS",
    description: [
      "Designed an AI-powered document platform featuring real-time background processing to initiate OCR and embedding ingestion immediately after file upload.",
      "Integrated Pinecone vector search with Hugging Face embeddings, securing user-level access via JWT authentication and RBAC.",
    ],
    tags: ["Python", "React.js", "FastAPI", "LangChain", "Pinecone", "Hugging Face"],
    kind: "ai",
  },
] as const;

export const EXPERIENCE_DATA = {
  role: "Software Engineer",
  company: "TEAM GEEK SOLUTIONS PVT LTD",
  highlights: [
    ["Architected scalable backend infrastructure for a real-time AI meeting platform on ", "AWS", ", automating CI/CD workflows via", " GitHub Actions", " to accelerate deployment cycles by 30%."],
    ["Resolved severe API latency by eliminating N+1 query bottlenecks in", " PostgreSQL", " and", " MySQL", ". Strategic database indexing reduced CPU utilization by 40% under high traffic."],
    ["Troubleshot customer-reported issues in B2B SaaS applications, performing comprehensive testing and debugging to deploy rapid bug fixes to", " Python REST APIs", "."],
    ["Engaged in Agile team discussions and rigorous code reviews, and documented software specifications and clean architecture patterns to build maintainable backend services."],
  ],
} as const;

export const CERTIFICATION_DATA = {
  title: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
  note: "MICROSOFT • AI & CLOUD",
} as const;

export const metadata: Metadata = {
  title: 'Narayana Deepak | Software Engineer',
  description: 'Portfolio of Narayana Deepak, a software engineer building scalable backend systems and cloud infrastructure.',
};