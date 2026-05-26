import { SUPPORTED_LANGUAGES, Language } from "@/constants/languages";

const KEYS = {
  name: "lingvo_name",
  native: "lingvo_native_language",
  target: "lingvo_target_language",
  level: "lingvo_level",
} as const;

export interface SavedFormValues {
  name: string;
  nativeLanguage: Language | null;
  targetLanguage: Language | null;
  level: string;
}

function findByCode(code: string | null): Language | null {
  if (!code) return null;
  return SUPPORTED_LANGUAGES.find((l) => l.code === code) ?? null;
}

export function loadFormValues(): SavedFormValues {
  try {
    return {
      name: localStorage.getItem(KEYS.name) ?? "",
      nativeLanguage: findByCode(localStorage.getItem(KEYS.native)),
      targetLanguage: findByCode(localStorage.getItem(KEYS.target)),
      level: localStorage.getItem(KEYS.level) ?? "",
    };
  } catch {
    return { name: "", nativeLanguage: null, targetLanguage: null, level: "" };
  }
}

export function saveFormValues(values: {
  name: string;
  nativeCode: string | undefined;
  targetCode: string | undefined;
  level: string;
}): void {
  try {
    localStorage.setItem(KEYS.name, values.name);
    if (values.nativeCode) localStorage.setItem(KEYS.native, values.nativeCode);
    if (values.targetCode) localStorage.setItem(KEYS.target, values.targetCode);
    if (values.level) localStorage.setItem(KEYS.level, values.level);
  } catch {
    // localStorage unavailable
  }
}
