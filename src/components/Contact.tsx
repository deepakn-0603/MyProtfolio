"use client";

import { useState } from "react";
import { USER_INFO } from "@/lib/data";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or want to discuss a potential opportunity? 
              I&apos;m always open to talking about software engineering and creative ideas.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Email</p>
                <a href={`mailto:${USER_INFO.email}`} className="text-lg font-bold text-primary hover:text-accent transition-colors">
                  {USER_INFO.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="text-lg font-bold text-primary">{USER_INFO.location}</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="font-bold mb-4">Find me on</p>
            <div className="flex gap-4">
              {[
                { icon: <Github />, link: USER_INFO.social.github },
                { icon: <Linkedin />, link: USER_INFO.social.linkedin },
                { icon: <Twitter />, link: USER_INFO.social.twitter },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  className="w-12 h-12 rounded-xl bg-white shadow-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-accent transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="white-card p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Name</label>
                <Input placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Email</label>
                <Input type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">Subject</label>
              <Input placeholder="Project Inquiry" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">Message</label>
              <Textarea placeholder="Tell me more about your project..." className="min-h-[150px]" required />
            </div>
            <Button type="submit" className="w-full btn-accent h-12 font-bold" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}