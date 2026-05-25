"use client";

import { useState, useCallback } from "react";
import { Language } from "@/constants/languages";
import { hasReachedLimit, incrementUsage } from "@/lib/usage-limit";
import HeroSection from "@/components/HeroSection";
import StartSection from "@/components/StartSection";
import QuizSection, { Sentence } from "@/components/QuizSection";
import ResultSection from "@/components/ResultSection";
import FeaturesSection from "@/components/FeaturesSection";
import LanguagesSection from "@/components/LanguagesSection";
import UsageLimitModal from "@/components/UsageLimitModal";
import Footer from "@/components/Footer";

type AppState = "setup" | "quiz" | "result";

export default function HomeClient() {
  const [appState, setAppState] = useState<AppState>("setup");
  const [name, setName] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState<Language | null>(null);
  const [targetLanguage, setTargetLanguage] = useState<Language | null>(null);
  const [level, setLevel] = useState("");
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showLimitModal, setShowLimitModal] = useState(false);

  const generateSentences = useCallback(async () => {
    if (!nativeLanguage || !targetLanguage || !level) return;

    if (hasReachedLimit()) {
      setShowLimitModal(true);
      return;
    }

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
      setSentences(data.sentences);
      setAppState("quiz");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [name, nativeLanguage, targetLanguage, level]);

  const handlePracticeAgain = useCallback(() => {
    setSentences([]);
    setAppState("setup");
    generateSentences();
  }, [generateSentences]);

  const handleChangeLevel = useCallback(() => {
    setSentences([]);
    setLevel("");
    setAppState("setup");
    setTimeout(() => {
      document.getElementById("start")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  const handleSelectLanguageFromGrid = useCallback((lang: Language) => {
    setTargetLanguage(lang);
  }, []);

  return (
    <main className="min-h-screen">
      {appState === "setup" && (
        <>
          <HeroSection />
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
          />
          {error && (
            <div className="max-w-2xl mx-auto px-4 -mt-12 mb-8">
              <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl py-3">
                {error}
              </p>
            </div>
          )}
          <FeaturesSection />
          <LanguagesSection onSelectLanguage={handleSelectLanguageFromGrid} />
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
