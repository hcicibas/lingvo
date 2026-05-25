"use client";

import { SUPPORTED_LANGUAGES } from "@/constants/languages";
import { TOP_LANGUAGE_PAIRS } from "@/constants/seo";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-2">Lingvo</h3>
          <p className="text-sm text-muted">AI-powered sentence practice for language learners</p>
        </div>

        <div className="mb-8">
          <p className="text-xs text-muted/50 text-center mb-4">Popular Practice Pairs</p>
          <div className="flex flex-wrap justify-center gap-2">
            {TOP_LANGUAGE_PAIRS.map((pair) => (
              <a
                key={`${pair.native}-${pair.target}`}
                href={`/practice/${pair.native}-${pair.target}`}
                className="text-xs px-3 py-1.5 bg-card border border-border hover:border-accent/30 rounded-full transition-colors text-muted hover:text-white"
              >
                {pair.native.charAt(0).toUpperCase() + pair.native.slice(1)}
                {" → "}
                {pair.target.charAt(0).toUpperCase() + pair.target.slice(1)}
              </a>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <p className="text-xs text-muted/50 text-center mb-4">Supported Languages</p>
          <div className="flex flex-wrap justify-center gap-2">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <a
                key={lang.code}
                href="#start"
                className="text-xs px-2.5 py-1 bg-card border border-border hover:border-accent/30 rounded-full transition-colors text-muted hover:text-white"
              >
                {lang.flag} {lang.name}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted/40">
            &copy; {new Date().getFullYear()} Lingvo. Built with AI for language learners worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
