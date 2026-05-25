export interface CEFRLevel {
  code: string;
  label: string;
  description: string;
  color: string;
}

export const CEFR_LEVELS: readonly CEFRLevel[] = [
  { code: "A1", label: "Beginner", description: "Basic phrases & greetings", color: "#22c55e" },
  { code: "A2", label: "Elementary", description: "Simple everyday expressions", color: "#84cc16" },
  { code: "B1", label: "Intermediate", description: "Familiar topics & opinions", color: "#eab308" },
  { code: "B2", label: "Upper-Inter.", description: "Complex texts & discussions", color: "#f97316" },
  { code: "C1", label: "Advanced", description: "Fluent & spontaneous use", color: "#ef4444" },
  { code: "C2", label: "Mastery", description: "Near-native proficiency", color: "#8b5cf6" },
] as const;
