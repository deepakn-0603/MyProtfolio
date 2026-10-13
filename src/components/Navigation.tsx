"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAVIGATE } from "@/constants";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#1e1e1e] text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 md:px-8">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="navigation-drawer"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
        <Link href="/" className="font-headline text-xl font-medium tracking-wide">
          Narayana Deepak
        </Link>
      </div>

      {isOpen && (
        <div
          id="navigation-drawer"
          className="absolute left-0 top-full w-64 border-b border-r border-white/10 bg-[#1e1e1e] px-2 py-2 shadow-xl"
        >
          {NAVIGATE.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}