"use client";

import { motion } from "framer-motion";
import { Language } from "@/constants/languages";
import { CEFR_LEVELS } from "@/constants/levels";
import LanguageSelector from "./LanguageSelector";

interface StartSectionProps {
  name: string;
  setName: (name: string) => void;
  nativeLanguage: Language | null;
  setNativeLanguage: (lang: Language) => void;
  targetLanguage: Language | null;
  setTargetLanguage: (lang: Language) => void;
  level: string;
  setLevel: (level: string) => void;
  onStart: () => void;
  loading: boolean;
}

const stepVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function StartSection({
  name,
  setName,
  nativeLanguage,
  setNativeLanguage,
  targetLanguage,
  setTargetLanguage,
  level,
  setLevel,
  onStart,
  loading,
}: StartSectionProps) {
  const isReady = name.trim() && nativeLanguage && targetLanguage && level;

  return (
    <section id="start" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-3xl border border-border p-6 sm:p-10"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Set Up Your Practice
          </h2>

          <div className="space-y-8">
            <motion.div custom={0} variants={stepVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <label className="block text-sm font-semibold text-muted mb-2">
                What&apos;s your name?
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3.5 bg-bg border border-border rounded-xl text-white placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all"
              />
            </motion.div>

            <motion.div custom={1} variants={stepVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <label className="block text-sm font-semibold text-muted mb-2">
                What&apos;s your native language?
              </label>
              <LanguageSelector
                value={nativeLanguage}
                onChange={setNativeLanguage}
                placeholder="Select your native language"
              />
            </motion.div>

            <motion.div custom={2} variants={stepVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <label className="block text-sm font-semibold text-muted mb-2">
                What language do you want to practice?
              </label>
              <LanguageSelector
                value={targetLanguage}
                onChange={setTargetLanguage}
                exclude={nativeLanguage}
                placeholder="Select target language"
              />
            </motion.div>

            <motion.div custom={3} variants={stepVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <label className="block text-sm font-semibold text-muted mb-3">
                Select your CEFR level
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {CEFR_LEVELS.map((l) => (
                  <motion.button
                    key={l.code}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLevel(l.code)}
                    className={`relative flex flex-col items-center p-3 rounded-xl border transition-all min-h-[72px] ${
                      level === l.code
                        ? "border-accent bg-accent/10 shadow-lg shadow-accent/10"
                        : "border-border hover:border-accent/30 bg-bg"
                    }`}
                  >
                    <span
                      className="text-lg font-bold mb-0.5"
                      style={{ color: l.color }}
                    >
                      {l.code}
                    </span>
                    <span className="text-[10px] text-muted leading-tight text-center">
                      {l.label}
                    </span>
                  </motion.button>
                ))}
              </div>
              {level && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-xs text-muted mt-2 text-center"
                >
                  {CEFR_LEVELS.find((l) => l.code === level)?.description}
                </motion.p>
              )}
            </motion.div>

            <motion.div custom={4} variants={stepVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.button
                type="button"
                whileHover={isReady ? { scale: 1.02 } : {}}
                whileTap={isReady ? { scale: 0.98 } : {}}
                onClick={onStart}
                disabled={!isReady || loading}
                className={`w-full py-4 rounded-xl text-lg font-semibold transition-all min-h-[56px] ${
                  isReady && !loading
                    ? "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20"
                    : "bg-border text-muted/40 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Generating sentences...
                  </span>
                ) : (
                  "Start Practice"
                )}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
