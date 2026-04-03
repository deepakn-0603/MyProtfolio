import { SKILLS } from "@/lib/data";
import { Layers, Database, Cloud, Wrench } from "lucide-react";

export function Skills() {
  const categories = [
    { name: "Frontend", icon: <Layers className="w-5 h-5" />, color: "bg-blue-50 text-blue-600" },
    { name: "Backend", icon: <Database className="w-5 h-5" />, color: "bg-green-50 text-green-600" },
    { name: "DevOps", icon: <Cloud className="w-5 h-5" />, color: "bg-purple-50 text-purple-600" },
    { name: "Tools", icon: <Wrench className="w-5 h-5" />, color: "bg-orange-50 text-orange-600" },
  ];

  return (
    <section id="skills" className="section-padding bg-white/50 border-y border-border/40">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A focused set of skills honed through real-world development and problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div key={cat.name} className="white-card p-6">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${cat.color}`}>
              {cat.icon}
            </div>
            <h3 className="text-lg font-bold mb-4">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.filter((s) => s.category === cat.name).map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}