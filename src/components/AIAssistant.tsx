"use client";

import { useState, type FormEvent } from "react";
import { aiGenerateProjectDescription } from "@/ai/flows/ai-generate-project-description";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { starterQuestions, fallbackAnswers } from "@/constants";

type Message = { role: "user" | "assistant"; content: string };

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const ask = async (rawQuestion: string) => {
    const trimmedQuestion = rawQuestion.trim();
    if (!trimmedQuestion || loading) return;
    setQuestion("");
    setMessages((current) => [...current, { role: "user", content: trimmedQuestion }]);
    setLoading(true);
    try {
      const output = await aiGenerateProjectDescription({
        projectTitle: "Deepak's engineering background and portfolio",
        technologies: ["Backend", "Cloud", "AI", "Heart-Wise", "DocMind AI"],
        projectGoals: `Answer this recruiter question using the portfolio's available details, including the full architecture and tech stack for DocMind AI and Heart-Wise: ${trimmedQuestion}. Do not invent details.`,
      });
      setMessages((current) => [...current, { role: "assistant", content: output.generatedDescription }]);
    } catch (error) {
      const answer = fallbackAnswers[trimmedQuestion] ??
        "Deepak is a Software Engineer at Team Geek Solutions with Backend, Cloud, and AI skills. His projects include Heart-Wise and DocMind AI, and he holds the Microsoft Azure AI Developer Associate certification. He is available to join immediately in Bangalore. Please ask a more specific question for additional details.";
      setMessages((current) => [...current, { role: "assistant", content: answer }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void ask(question);
  };

  const copyResponse = async (content: string) => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#4ade80]">05 / AI ASSISTANT</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ask Deepak&apos;s AI</h2>
          <p className="mt-2 text-white/60">Portfolio &amp; Resume Assistant — ask about engineering experience, projects, or availability.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0f1311] p-5 shadow-xl sm:p-7">
          <div className="mb-5 flex items-center gap-2 font-mono text-xs text-white/50">
            <Sparkles className="h-4 w-4 text-[#4ade80]" />
            <span>RECRUITER QUICK PROMPTS</span>
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            {starterQuestions.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => void ask(prompt)}
                disabled={loading}
                className="rounded-full border border-white/10 px-3 py-2 text-left text-xs text-white/70 transition hover:border-[#4ade80]/50 hover:text-[#4ade80] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="mb-5 max-h-96 space-y-4 overflow-y-auto" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`group relative max-w-[90%] rounded-xl border px-4 py-3 ${message.role === "user" ? "border-[#4ade80]/20 bg-[#4ade80]/10 text-white" : "border-white/10 bg-black/20 pr-12 text-white/80"}`}>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#4ade80]">{message.role === "user" ? "You" : "Deepak's AI"}</p>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                  {message.role === "assistant" && (
                    <button
                      type="button"
                      onClick={() => void copyResponse(message.content)}
                      aria-label="Copy response"
                      className="absolute right-2 top-2 rounded p-1.5 text-white/50 transition hover:text-[#4ade80]"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Loader2 className="h-4 w-4 animate-spin text-[#4ade80]" /> Thinking...
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about Deepak's experience, projects, or availability..."
              aria-label="Ask Deepak's AI a question"
              className="h-12 border-white/10 bg-black/30 text-white placeholder:text-white/35 focus-visible:ring-[#4ade80]"
              disabled={loading}
            />
            <Button type="submit" disabled={loading || !question.trim()} className="h-12 shrink-0 bg-[#4ade80] px-4 font-semibold text-black hover:bg-[#4ade80]/90">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Sparkles className="mr-2 h-4 w-4" />Ask AI</>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}