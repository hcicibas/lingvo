export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  rtl: boolean;
}

export const SUPPORTED_LANGUAGES: readonly Language[] = [
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", rtl: false },
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", rtl: false },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", rtl: false },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", rtl: false },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", rtl: false },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", rtl: false },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", rtl: false },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", rtl: false },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", rtl: true },
  { code: "zh", name: "Chinese (Simplified)", nativeName: "简体中文", flag: "🇨🇳", rtl: false },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", rtl: false },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷", rtl: false },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱", rtl: false },
  { code: "pl", name: "Polish", nativeName: "Polski", flag: "🇵🇱", rtl: false },
  { code: "sv", name: "Swedish", nativeName: "Svenska", flag: "🇸🇪", rtl: false },
  { code: "no", name: "Norwegian", nativeName: "Norsk", flag: "🇳🇴", rtl: false },
  { code: "da", name: "Danish", nativeName: "Dansk", flag: "🇩🇰", rtl: false },
  { code: "el", name: "Greek", nativeName: "Ελληνικά", flag: "🇬🇷", rtl: false },
  { code: "he", name: "Hebrew", nativeName: "עברית", flag: "🇮🇱", rtl: true },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", rtl: false },
  { code: "fa", name: "Persian", nativeName: "فارسی", flag: "🇮🇷", rtl: true },
  { code: "ro", name: "Romanian", nativeName: "Română", flag: "🇷🇴", rtl: false },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", flag: "🇺🇦", rtl: false },
  { code: "cs", name: "Czech", nativeName: "Čeština", flag: "🇨🇿", rtl: false },
  { code: "hu", name: "Hungarian", nativeName: "Magyar", flag: "🇭🇺", rtl: false },
] as const;

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

export const DEFAULT_LANGUAGE: LanguageCode = "en";
