import { EXPERIENCES } from "@/lib/data";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Career Journey</h2>
          <p className="text-muted-foreground">
            Professional milestones and growth within the software engineering space.
          </p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 border-l-2 border-accent/30 pb-4">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center border-4 border-background">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              
              <div className="white-card p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}