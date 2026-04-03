"use client";

import { useState } from "react";
import { aiGenerateProjectDescription } from "@/ai/flows/ai-generate-project-description";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export function AIAssistant() {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [goals, setGoals] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!title || !tech || !goals) {
      toast({ title: "Incomplete details", description: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    try {
      const output = await aiGenerateProjectDescription({
        projectTitle: title,
        technologies: tech.split(",").map(s => s.trim()),
        projectGoals: goals,
      });
      setResult(output.generatedDescription);
    } catch (error) {
      toast({ title: "Error", description: "Failed to generate description. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ title: "Copied!", description: "Description copied to clipboard." });
  };

  return (
    <section className="section-padding bg-accent/5">
      <div className="max-w-4xl mx-auto">
        {/* <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase mb-4">
            <Sparkles className="w-3 h-3" /> Portfolio Tools
          </div>
          <h2 className="text-3xl font-bold mb-4">AI Project Copywriter</h2>
          <p className="text-muted-foreground">
            Struggling to describe your work? Use my custom-built AI tool to generate professional, impactful project summaries.
          </p>
        </div> */}

        {/* <Card className="white-card border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
               Generate compelling descriptions
            </CardTitle>
            <CardDescription>Based on your project metadata</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Project Title</label>
                <Input 
                  placeholder="e.g., E-commerce API" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Tech Stack (comma separated)</label>
                <Input 
                  placeholder="e.g., Django, Postgres, AWS" 
                  value={tech}
                  onChange={(e) => setTech(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">What did this project solve?</label>
              <Textarea 
                placeholder="Describe the main goals and outcomes..." 
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
              />
            </div>
            
            <Button 
              onClick={handleGenerate} 
              className="w-full btn-accent font-bold"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Description
                </>
              )}
            </Button>

            {result && (
              <div className="mt-8 p-6 bg-white border border-accent/30 rounded-xl relative group">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" onClick={copyToClipboard} className="h-8 w-8">
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <p className="text-primary italic leading-relaxed">&quot;{result}&quot;</p>
              </div>
            )}
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
}