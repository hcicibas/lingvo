"use client";

import { useState, useCallback, useEffect, useMemo, ReactNode } from "react";
import { SUPPORTED_LANGUAGES, Language } from "@/constants/languages";
import { hasReachedLimit, incrementUsage } from "@/lib/usage-limit";
import { loadFormValues, saveFormValues } from "@/lib/form-storage";
import StartSection from "@/components/StartSection";
import QuizSection, { Sentence } from "@/components/QuizSection";
import ResultSection from "@/components/ResultSection";
import FeaturesSection from "@/components/FeaturesSection";
import UsageLimitModal from "@/components/UsageLimitModal";
import Footer from "@/components/Footer";

type AppState = "setup" | "quiz" | "result";

interface PracticeClientProps {
  targetCode: string;
  nativeCode: string;
  localizedTitle?: string;
  seoContent?: ReactNode;
}

export default function PracticeClient({
  targetCode,
  nativeCode,
  localizedTitle,
  seoContent,
}: PracticeClientProps) {
  const presetTarget = useMemo(
    () => SUPPORTED_LANGUAGES.find((l) => l.code === targetCode) ?? null,
    [targetCode]
  );
  const presetNative = useMemo(
    () => SUPPORTED_LANGUAGES.find((l) => l.code === nativeCode) ?? null,
    [nativeCode]
  );

  const [appState, setAppState] = useState<AppState>("setup");
  const [name, setName] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState<Language | null>(presetNative);
  const [targetLanguage, setTargetLanguage] = useState<Language | null>(presetTarget);
  const [level, setLevel] = useState("");
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    const saved = loadFormValues();
    if (saved.name) setName(saved.name);
    if (saved.level) setLevel(saved.level);
    setLimitReached(hasReachedLimit());
  }, []);

  const generateSentences = useCallback(async () => {
    if (!nativeLanguage || !targetLanguage || !level) return;

    if (hasReachedLimit()) {
      setLimitReached(true);
      setShowLimitModal(true);
      return;
    }

    saveFormValues({
      name,
      nativeCode: nativeLanguage.code,
      targetCode: targetLanguage.code,
      level,
    });

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          nativeLanguage: nativeLanguage.name,
          targetLanguage: targetLanguage.name,
          level,
          sessionId: crypto.randomUUID(),
        }),
      });

      if (!res.ok) throw new Error("Failed to generate sentences");

      const data = await res.json();
      incrementUsage();
      setLimitReached(true);
      setSentences(data.sentences);
      setAppState("quiz");
      window.scrollTo(0, 0);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [name, nativeLanguage, targetLanguage, level]);

  const handlePracticeAgain = useCallback(() => {
    if (hasReachedLimit()) {
      setShowLimitModal(true);
      return;
    }
    setSentences([]);
    setAppState("setup");
    generateSentences();
  }, [generateSentences]);

  const handleChangeLevel = useCallback(() => {
    if (hasReachedLimit()) {
      setShowLimitModal(true);
      return;
    }
    setSentences([]);
    setLevel("");
    setAppState("setup");
    setTimeout(() => {
      document.getElementById("start")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <main className="min-h-screen bg-bg">
      <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center">
          <a
            href="/"
            className="flex items-center gap-2 text-white font-bold text-lg hover:text-accent transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Lingvo
          </a>
        </div>
      </nav>

      {appState === "setup" && (
        <>
          <section className="pt-10 pb-4 px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 max-w-2xl mx-auto">
              {localizedTitle || `Practice ${presetTarget?.name} ${presetTarget?.flag}`}
            </h1>
            <p className="text-muted">
              {presetTarget?.flag} {presetTarget?.name} → {presetNative?.flag} {presetNative?.name}
            </p>
          </section>
          <StartSection
            name={name}
            setName={setName}
            nativeLanguage={nativeLanguage}
            setNativeLanguage={setNativeLanguage}
            targetLanguage={targetLanguage}
            setTargetLanguage={setTargetLanguage}
            level={level}
            setLevel={setLevel}
            onStart={generateSentences}
            loading={loading}
            limitReached={limitReached}
          />
          {error && (
            <div className="max-w-2xl mx-auto px-4 -mt-12 mb-8">
              <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl py-3">
                {error}
              </p>
            </div>
          )}
          <FeaturesSection />
          {seoContent}
        </>
      )}

      {appState === "quiz" && sentences.length > 0 && targetLanguage && nativeLanguage && (
        <QuizSection
          sentences={sentences}
          targetLanguage={targetLanguage}
          nativeLanguage={nativeLanguage}
          onComplete={() => setAppState("result")}
        />
      )}

      {appState === "result" && nativeLanguage && targetLanguage && (
        <ResultSection
          name={name}
          nativeLanguage={nativeLanguage}
          targetLanguage={targetLanguage}
          level={level}
          onPracticeAgain={handlePracticeAgain}
          onChangeLevel={handleChangeLevel}
          limitReached={limitReached}
        />
      )}

      <Footer />

      <UsageLimitModal
        isOpen={showLimitModal}
        onClose={() => setShowLimitModal(false)}
        nativeLanguage={nativeLanguage}
      />
    </main>
  );
}
