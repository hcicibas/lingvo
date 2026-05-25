"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@/constants/languages";
import { LIMIT_TRANSLATIONS } from "@/constants/limitTranslations";

interface UsageLimitModalProps {
  isOpen: boolean;
  onClose: () => void;
  nativeLanguage: Language | null;
}

export default function UsageLimitModal({
  isOpen,
  onClose,
  nativeLanguage,
}: UsageLimitModalProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const lang = nativeLanguage?.code ?? "en";
  const t = LIMIT_TRANSLATIONS[lang] ?? LIMIT_TRANSLATIONS.en;
  const isRtl = nativeLanguage?.rtl ?? false;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            dir={isRtl ? "rtl" : "ltr"}
            className="relative w-full max-w-md bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/50"
          >
            {/* Glow effect */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

            {/* Icon */}
            <div className="relative flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="relative text-xl sm:text-2xl font-bold text-white text-center mb-3 leading-snug">
              {t.title}
            </h2>

            {/* Message */}
            <p className="relative text-sm sm:text-base text-muted text-center mb-8 leading-relaxed">
              {t.message}
            </p>

            {/* Buttons */}
            <div className="relative space-y-3">
              {!showComingSoon ? (
                <button
                  onClick={() => setShowComingSoon(true)}
                  className="w-full py-3.5 rounded-xl text-base font-semibold bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t.upgrade} &rarr;
                </button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full py-3.5 rounded-xl text-sm font-medium bg-accent/10 border border-accent/20 text-accent text-center"
                >
                  {t.comingSoon}
                </motion.div>
              )}

              <button
                onClick={() => {
                  setShowComingSoon(false);
                  onClose();
                }}
                className="w-full py-3.5 rounded-xl text-base font-semibold bg-bg border border-border hover:border-accent/30 text-muted hover:text-white transition-all"
              >
                {t.comeBack}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
