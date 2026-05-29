"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@/constants/languages";
import { getUIStrings } from "@/constants/uiTranslations";

export interface Sentence {
  target: string;
  native: string;
  hint: string;
  topic: string;
}

interface QuizSectionProps {
  sentences: Sentence[];
  targetLanguage: Language;
  nativeLanguage: Language;
  onComplete: () => void;
}

export default function QuizSection({
  sentences,
  targetLanguage,
  nativeLanguage,
  onComplete,
}: QuizSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const t = useMemo(() => getUIStrings(nativeLanguage.code), [nativeLanguage.code]);

  const current = sentences[currentIndex];
  const progress = currentIndex + 1;
  const total = sentences.length;

  const speakTarget = useCallback(() => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(current.target);
    utterance.lang = targetLanguage.code;
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }, [current.target, targetLanguage.code]);

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      setShowTranslation(false);
    } else {
      onComplete();
    }
  };

  return (
    <section className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-3xl border border-border p-6 sm:p-10"
        >
          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-muted">
                {progress} / {total}
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent-hover rounded-full">
                {current.topic}
              </span>
            </div>
            <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-purple-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(progress / total) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Sentence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-center mb-10"
            >
              {/* Question: sentence in native language */}
              <p
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-relaxed mb-8"
                dir={nativeLanguage.rtl ? "rtl" : "ltr"}
              >
                {current.native}
              </p>

              {/* Answer: translation in target language */}
              {!showTranslation ? (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowTranslation(true)}
                  className="px-8 py-3 bg-border hover:bg-card-hover text-muted rounded-xl text-sm font-medium transition-colors min-h-[44px]"
                >
                  {t.showTranslation}
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <p
                      className="text-lg text-accent font-medium"
                      dir={targetLanguage.rtl ? "rtl" : "ltr"}
                    >
                      {current.target}
                    </p>
                    <button
                      type="button"
                      onClick={speakTarget}
                      className="flex-shrink-0 p-2 rounded-full hover:bg-accent/10 transition-colors"
                      title="Listen"
                    >
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-muted/50 italic">{current.hint}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Next */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            className="w-full py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold transition-colors shadow-lg shadow-accent/20 min-h-[56px]"
          >
            {currentIndex < total - 1 ? t.nextSentence : t.seeResults}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
