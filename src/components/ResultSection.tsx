"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Language } from "@/constants/languages";
import { getUIStrings, interpolate } from "@/constants/uiTranslations";

interface ResultSectionProps {
  name: string;
  nativeLanguage: Language;
  targetLanguage: Language;
  level: string;
  onPracticeAgain: () => void;
  onChangeLevel: () => void;
}

export default function ResultSection({
  name,
  nativeLanguage,
  targetLanguage,
  level,
  onPracticeAgain,
  onChangeLevel,
}: ResultSectionProps) {
  const t = useMemo(() => getUIStrings(nativeLanguage.code), [nativeLanguage.code]);

  return (
    <section className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-3xl border border-border p-6 sm:p-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-6xl mb-6"
          >
            🎉
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl font-bold text-white mb-2"
          >
            {interpolate(t.wellDone, { name })}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted mb-8"
          >
            {interpolate(t.youCompleted, { level })}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 sm:gap-6 mb-8"
          >
            <div className="bg-bg rounded-xl px-5 py-3 border border-border">
              <p className="text-xs text-muted mb-1">Level</p>
              <p className="text-lg font-bold text-accent">{level}</p>
            </div>
            <div className="bg-bg rounded-xl px-5 py-3 border border-border">
              <p className="text-xs text-muted mb-1">Languages</p>
              <p className="text-lg">
                {nativeLanguage.flag} → {targetLanguage.flag}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onPracticeAgain}
              className="flex-1 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold transition-colors shadow-lg shadow-accent/20 min-h-[52px]"
            >
              {t.practiceAgain}
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onChangeLevel}
              className="flex-1 py-4 bg-border hover:bg-card-hover text-muted rounded-xl font-semibold transition-colors min-h-[52px]"
            >
              {t.changeLevel}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
