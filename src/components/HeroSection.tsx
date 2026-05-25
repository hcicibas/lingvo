"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SUPPORTED_LANGUAGES } from "@/constants/languages";

const PAIRS = [
  [0, 1], [3, 9], [1, 4], [2, 10], [1, 7],
  [0, 2], [5, 11], [1, 8], [0, 3], [6, 13],
];

export default function HeroSection() {
  const [pairIndex, setPairIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPairIndex((i) => (i + 1) % PAIRS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const [fromIdx, toIdx] = PAIRS[pairIndex];
  const from = SUPPORTED_LANGUAGES[fromIdx];
  const to = SUPPORTED_LANGUAGES[toIdx];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-bg to-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-[128px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="text-white">Learn Any Language with </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-accent-hover">
            AI-Powered
          </span>
          <br />
          <span className="text-white">Sentence Practice</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl text-muted mb-12 max-w-2xl mx-auto"
        >
          Practice real sentences in 25+ languages, personalized to your level
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-14 h-16"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={pairIndex}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 bg-card/80 backdrop-blur-xl px-6 py-3 rounded-2xl border border-border"
            >
              <span className="text-3xl sm:text-4xl">{from.flag}</span>
              <span className="text-sm font-medium text-muted hidden sm:inline">{from.name}</span>
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-3xl sm:text-4xl">{to.flag}</span>
              <span className="text-sm font-medium text-muted hidden sm:inline">{to.name}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.a
          href="#start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-accent/20 transition-colors"
        >
          Get Started
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
