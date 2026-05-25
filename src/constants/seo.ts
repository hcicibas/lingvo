export const SITE_URL = "https://lingvo.online";
export const SITE_NAME = "Lingvo";

export const TOP_LANGUAGE_PAIRS = [
  // English speakers learning other languages
  { native: "english", target: "turkish" },
  { native: "english", target: "spanish" },
  { native: "english", target: "french" },
  { native: "english", target: "german" },
  { native: "english", target: "japanese" },
  { native: "english", target: "korean" },
  { native: "english", target: "italian" },
  { native: "english", target: "portuguese" },
  { native: "english", target: "russian" },
  { native: "english", target: "arabic" },
  { native: "english", target: "chinese" },
  { native: "english", target: "dutch" },
  { native: "english", target: "polish" },
  { native: "english", target: "swedish" },
  { native: "english", target: "norwegian" },
  { native: "english", target: "danish" },
  { native: "english", target: "greek" },
  { native: "english", target: "hebrew" },
  { native: "english", target: "hindi" },
  { native: "english", target: "persian" },
  { native: "english", target: "romanian" },
  { native: "english", target: "ukrainian" },
  { native: "english", target: "czech" },
  { native: "english", target: "hungarian" },
  // Other speakers learning English
  { native: "turkish", target: "english" },
  { native: "spanish", target: "english" },
  { native: "french", target: "english" },
  { native: "german", target: "english" },
  { native: "japanese", target: "english" },
  { native: "korean", target: "english" },
  { native: "italian", target: "english" },
  { native: "portuguese", target: "english" },
  { native: "russian", target: "english" },
  { native: "arabic", target: "english" },
  { native: "chinese", target: "english" },
  { native: "dutch", target: "english" },
  { native: "polish", target: "english" },
  { native: "swedish", target: "english" },
  { native: "norwegian", target: "english" },
  { native: "danish", target: "english" },
  { native: "greek", target: "english" },
  { native: "hebrew", target: "english" },
  { native: "hindi", target: "english" },
  { native: "persian", target: "english" },
  { native: "romanian", target: "english" },
  { native: "ukrainian", target: "english" },
  { native: "czech", target: "english" },
  { native: "hungarian", target: "english" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How does Lingvo help me learn a new language?",
    answer:
      "Lingvo uses AI to generate natural, diverse practice sentences tailored to your CEFR proficiency level. Each session provides 10 unique sentences covering different topics and grammatical structures, with translations in your native language.",
  },
  {
    question: "What are CEFR levels?",
    answer:
      "CEFR (Common European Framework of Reference for Languages) defines six levels of language proficiency: A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper-Intermediate), C1 (Advanced), and C2 (Mastery). Lingvo generates sentences matched to your selected level.",
  },
  {
    question: "How many languages does Lingvo support?",
    answer:
      "Lingvo supports 25 languages including English, Spanish, French, German, Italian, Portuguese, Turkish, Russian, Arabic, Chinese, Japanese, Korean, Dutch, Polish, Swedish, Norwegian, Danish, Greek, Hebrew, Hindi, Persian, Romanian, Ukrainian, Czech, and Hungarian.",
  },
  {
    question: "Are the practice sentences always different?",
    answer:
      "Yes. Every practice session generates completely new sentences using AI. The sentences cover different topics like daily life, work, travel, emotions, food, technology, relationships, and nature, ensuring you never practice the same material twice.",
  },
  {
    question: "Can I listen to the pronunciation of sentences?",
    answer:
      "Yes. Lingvo includes a pronunciation feature powered by the Web Speech API. Click the speaker icon next to any sentence to hear it spoken aloud in the target language.",
  },
];
