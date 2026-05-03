"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { AIAssistant } from "@/components/AIAssistant";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative">
      <Navigation />
      
      <Hero />
      
      <section id="about" className="section-padding flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground italic">
          &quot;I am a developer who believes in the power of clean code and efficient architectures. 
          With a background in building complex financial tools and AI-driven applications, 
          I bridge the gap between creative UI design and high-performance server logic.&quot;
        </p>
      </section>

      <Skills />
      
      <Projects />
      
      <AIAssistant />
      
      <Experience />
      
      <Contact />

      <footer className="py-12 border-t border-border bg-white text-center">
        <p className="text-muted-foreground text-sm">
          © {mounted ? new Date().getFullYear() : "..."} Deepak N. Built with Next.js, Django Principles, and AI.
        </p>
      </footer>

      <Toaster />
    </main>
  );
}
