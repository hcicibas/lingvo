"use client";

import { motion } from "framer-motion";
import { SUPPORTED_LANGUAGES, Language } from "@/constants/languages";

interface LanguagesSectionProps {
  onSelectLanguage: (lang: Language) => void;
}

export default function LanguagesSection({ onSelectLanguage }: LanguagesSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-4"
        >
          Supported Languages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-center mb-12 max-w-xl mx-auto"
        >
          Click any language to start practicing
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {SUPPORTED_LANGUAGES.map((lang, i) => (
            <motion.button
              key={lang.code}
              type="button"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onSelectLanguage(lang);
                document.getElementById("start")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2.5 p-3 sm:p-3.5 bg-card rounded-xl border border-border hover:border-accent/30 transition-all min-h-[52px]"
            >
              <span className="text-2xl">{lang.flag}</span>
              <div className="text-left min-w-0">
                <p className="text-sm font-medium text-white truncate">{lang.name}</p>
                <p className="text-xs text-muted truncate">{lang.nativeName}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
