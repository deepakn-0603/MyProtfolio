import { USER_INFO } from "@/lib/data";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const avatar = PlaceHolderImages.find(img => img.id === 'avatar');

  return (
    <section className="section-padding pt-32 lg:pt-48 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left space-y-6">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
          Available for new opportunities
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
          Hi, I&apos;m <span className="text-primary">{USER_INFO.name}</span>
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
          {USER_INFO.role}
        </p>
        <p className="max-w-xl text-lg text-muted-foreground mx-auto lg:mx-0">
          I build robust, secure, and scalable web applications with a focus on 
          <span className="text-primary font-semibold"> Django</span> backends and 
          <span className="text-primary font-semibold"> React</span> interfaces.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
          <Link href="#projects" className="btn-accent flex items-center gap-2 group">
            View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-4 px-4">
            {USER_INFO.social.github && (
              <Link href={USER_INFO.social.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </Link>
            )}
            {USER_INFO.social.linkedin && (
              <Link href={USER_INFO.social.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
            )}
            {USER_INFO.social.twitter && (
              <Link href={USER_INFO.social.twitter} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
          <div className="absolute inset-0 rounded-3xl bg-accent/20 rotate-6 translate-x-4 translate-y-4" />
          <div className="absolute inset-0 rounded-3xl bg-primary/10 -rotate-3" />
          <Image
            src={avatar?.imageUrl || "https://picsum.photos/seed/devprofile/400/400"}
            alt={USER_INFO.name}
            width={400}
            height={400}
            className="rounded-3xl object-cover relative z-10 shadow-xl border-4 border-white"
            data-ai-hint="professional headshot"
          />
        </div>
      </div>
    </section>
  );
}
