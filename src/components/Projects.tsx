"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Projects() {
  const [filter, setFilter] = useState("All");
  
  const allTechs = ["All", ...Array.from(new Set(PROJECTS.flatMap(p => p.technologies)))].slice(0, 6);

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.technologies.includes(filter));

  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Selected Works</h2>
          <p className="text-muted-foreground">
            A collection of projects showcasing full-stack capabilities, system design, and AI integration.
          </p>
        </div>
        
        <div className="overflow-x-auto pb-2 w-full md:w-auto">
          <Tabs defaultValue="All" onValueChange={setFilter}>
            <TabsList className="bg-white border border-border">
              {allTechs.map(tech => (
                <TabsTrigger key={tech} value={tech} className="text-xs">
                  {tech}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project) => (
          <div key={project.id} className="white-card flex flex-col group h-full">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="software project screenshot"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {project.githubUrl && (
                  <Link href={project.githubUrl} target="_blank" className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors shadow-lg">
                    <Github className="w-5 h-5" />
                  </Link>
                )}
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors shadow-lg">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded border border-border">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                {project.longDescription}
              </p>
              <div className="pt-4 border-t border-border/50">
                <Link 
                  href={project.githubUrl || "#"} 
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors group/link"
                >
                  Project Details <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}