"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SUPPORTED_LANGUAGES, Language } from "@/constants/languages";

interface LanguageSelectorProps {
  value: Language | null;
  onChange: (lang: Language) => void;
  exclude?: Language | null;
  placeholder: string;
}

export default function LanguageSelector({
  value,
  onChange,
  exclude,
  placeholder,
}: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const filtered = SUPPORTED_LANGUAGES.filter((lang) => {
    if (exclude && lang.code === exclude.code) return false;
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      lang.name.toLowerCase().includes(q) ||
      lang.nativeName.toLowerCase().includes(q) ||
      lang.code.toLowerCase().includes(q)
    );
  });

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3.5 bg-card border border-border rounded-xl hover:border-accent/40 transition-colors text-left min-h-[52px]"
      >
        {value ? (
          <>
            <span className="text-2xl">{value.flag}</span>
            <span className="font-medium text-white">{value.name}</span>
            <span className="text-muted text-sm">({value.nativeName})</span>
          </>
        ) : (
          <span className="text-muted">{placeholder}</span>
        )}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-muted ml-auto flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 w-full mt-2 bg-card border border-border rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            <div className="p-2 border-b border-border">
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search languages..."
                className="w-full px-3 py-2.5 text-sm bg-bg rounded-lg text-white placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-accent/30 transition-shadow"
              />
            </div>
            <div className="max-h-64 overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="px-4 py-3 text-sm text-muted">No languages found</div>
              ) : (
                filtered.map((lang, i) => (
                  <motion.button
                    key={lang.code}
                    type="button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.02 }}
                    onClick={() => {
                      onChange(lang);
                      setOpen(false);
                      setSearch("");
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors text-left ${
                      value?.code === lang.code ? "bg-accent/10" : ""
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-medium text-white text-sm">{lang.name}</span>
                    <span className="text-muted text-xs">({lang.nativeName})</span>
                  </motion.button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
