export interface PracticePageContent {
  title: string;
  description: string;
  faq: { question: string; answer: string }[];
  examples: { target: string; native: string }[];
}

// Key format: native-target (URL format)
// Content language: written in the NATIVE language
const PRACTICE_CONTENT: Record<string, PracticePageContent> = {

  // ─── ENGLISH speakers learning X (pages in English) ───

  "english-turkish": {
    title: "Practice Turkish with AI-Powered Sentence Exercises",
    description: "Master Turkish with Lingvo's AI-generated practice sentences. Get natural, diverse sentences tailored to your CEFR level with English translations, grammar hints, and pronunciation support.",
    faq: [
      { question: "How does Lingvo help me learn Turkish?", answer: "Lingvo uses AI to generate 10 unique Turkish sentences per session, matched to your CEFR level. Each sentence includes an English translation and grammar hints covering agglutination, vowel harmony, and verb conjugations." },
      { question: "What makes Turkish grammar unique?", answer: "Turkish is an agglutinative language — suffixes are added to words to change meaning. Lingvo introduces these patterns gradually through natural sentences at each CEFR level." },
      { question: "What topics are covered?", answer: "Sentences cover daily life, work, travel, food, technology, relationships, emotions, and nature. The AI ensures varied grammatical structures for comprehensive practice." },
      { question: "Can I hear Turkish pronunciation?", answer: "Yes. Click the speaker icon next to any sentence to hear it spoken aloud using text-to-speech with Turkish pronunciation." },
      { question: "What level should I start with?", answer: "Start with A1 for basic present tense and simple vocabulary. Progress to higher levels as you master vowel harmony and more complex suffixes." },
    ],
    examples: [
      { target: "Bu akşam seninle buluşabilir miyiz?", native: "Can we meet with you this evening?" },
      { target: "Dün marketten taze meyve aldım.", native: "I bought fresh fruit from the market yesterday." },
      { target: "Hava güzel olursa pikniğe gideriz.", native: "If the weather is nice, we will go on a picnic." },
      { target: "Annesi ona yeni bir kitap hediye etti.", native: "His mother gave him a new book as a gift." },
    ],
  },

  "english-spanish": {
    title: "Practice Spanish with AI-Powered Sentence Exercises",
    description: "Master Spanish with Lingvo's AI-generated practice sentences. Get natural, diverse sentences tailored to your CEFR level with English translations, grammar hints, and pronunciation support.",
    faq: [
      { question: "How does Lingvo help me learn Spanish?", answer: "Lingvo uses AI to generate 10 unique Spanish sentences per session, matched to your CEFR level. Each sentence includes an English translation and grammar hints." },
      { question: "What Spanish topics are covered?", answer: "Sentences cover daily life, work, travel, food, technology, relationships, emotions, and nature with varied grammatical structures." },
      { question: "Can I practice both Latin American and European Spanish?", answer: "The AI generates standard Spanish sentences understood across all Spanish-speaking regions." },
      { question: "How do I hear Spanish pronunciation?", answer: "Click the speaker icon next to any sentence to hear it spoken aloud using text-to-speech." },
      { question: "What level should I start with?", answer: "If you're new to Spanish, start with A1. If you can handle basic conversations, try B1." },
    ],
    examples: [
      { target: "Me gustaría reservar una mesa para dos personas.", native: "I would like to reserve a table for two people." },
      { target: "¿Podrías decirme cómo llegar a la estación?", native: "Could you tell me how to get to the station?" },
      { target: "Llevo viviendo en esta ciudad desde hace cinco años.", native: "I have been living in this city for five years." },
      { target: "No creo que llueva esta tarde.", native: "I don't think it will rain this afternoon." },
    ],
  },

  "english-french": {
    title: "Practice French with AI-Powered Sentence Exercises",
    description: "Improve your French with Lingvo's AI-generated practice sentences. Get natural sentences from A1 to C2 with English translations and grammar hints.",
    faq: [
      { question: "How does Lingvo help me learn French?", answer: "Lingvo generates 10 unique French sentences per session using AI, matched to your CEFR level with English translations and grammar hints." },
      { question: "Are the French sentences natural-sounding?", answer: "Yes. The AI generates sentences that native French speakers would actually use in everyday life." },
      { question: "Can beginners use Lingvo for French?", answer: "Absolutely. Start with A1 for simple present-tense sentences with basic vocabulary." },
      { question: "Does Lingvo teach French grammar rules?", answer: "Each sentence includes grammar hints that highlight key structures, helping you learn grammar in context." },
      { question: "How often should I practice?", answer: "For best results, practice daily. Each session takes just a few minutes with 10 fresh sentences." },
    ],
    examples: [
      { target: "Pourriez-vous me montrer le chemin vers le musée?", native: "Could you show me the way to the museum?" },
      { target: "Je travaille dans cette entreprise depuis deux ans.", native: "I have been working at this company for two years." },
      { target: "Il faut que nous partions avant midi.", native: "We need to leave before noon." },
      { target: "Elle a décidé de voyager seule cet été.", native: "She decided to travel alone this summer." },
    ],
  },

  "english-german": {
    title: "Practice German with AI-Powered Sentence Exercises",
    description: "Learn German effectively with Lingvo's AI-generated practice sentences. Practice real-world German from A1 to C2 with English translations and grammar hints.",
    faq: [
      { question: "How does Lingvo help me learn German?", answer: "Lingvo creates 10 authentic German sentences per session, tailored to your CEFR level with English translations and grammar hints." },
      { question: "Does Lingvo cover German cases and word order?", answer: "Yes. Sentences use all four German cases and varied word orders appropriate to your level." },
      { question: "Is this suitable for complete beginners?", answer: "Yes. A1 sentences use simple structures like present tense and basic word order." },
      { question: "Can I practice German pronunciation?", answer: "Yes. Click the speaker icon to hear each sentence spoken aloud." },
      { question: "What makes Lingvo different from textbooks?", answer: "Every session generates completely new, natural sentences — not repetitive textbook drills." },
    ],
    examples: [
      { target: "Könnten Sie mir bitte den Weg zum Bahnhof zeigen?", native: "Could you please show me the way to the train station?" },
      { target: "Ich habe gestern einen interessanten Film gesehen.", native: "I watched an interesting movie yesterday." },
      { target: "Wenn ich mehr Zeit hätte, würde ich öfter reisen.", native: "If I had more time, I would travel more often." },
      { target: "Er hat mir erzählt, dass er nächste Woche umzieht.", native: "He told me that he is moving next week." },
    ],
  },

  "english-japanese": {
    title: "Practice Japanese with AI-Powered Sentence Exercises",
    description: "Master Japanese with Lingvo's AI-generated practice sentences. Practice reading real Japanese sentences at your CEFR level with English translations and pronunciation.",
    faq: [
      { question: "How does Lingvo help me learn Japanese?", answer: "Lingvo generates 10 unique Japanese sentences per session with English translations and grammar hints covering particles, verb forms, and sentence patterns." },
      { question: "Does Lingvo use hiragana, katakana, and kanji?", answer: "Yes. The AI generates natural Japanese writing with the appropriate mix for your selected CEFR level." },
      { question: "Can I practice Japanese pronunciation?", answer: "Yes. Click the speaker icon to hear each sentence spoken aloud." },
      { question: "Is this good for JLPT preparation?", answer: "The sentence difficulty maps well: A1-A2 covers N5-N4, B1-B2 covers N3-N2, and C1-C2 covers N1 level content." },
      { question: "What grammar points are covered?", answer: "From basic particles and verb conjugations at A1 to passive, causative, and conditional forms at higher levels." },
    ],
    examples: [
      { target: "駅までの道を教えていただけますか？", native: "Could you tell me the way to the station?" },
      { target: "昨日は友達と映画を見に行きました。", native: "Yesterday I went to see a movie with my friend." },
      { target: "もっと早く起きればよかったのに。", native: "I wish I had woken up earlier." },
      { target: "この料理は母が作ったものです。", native: "This dish was made by my mother." },
    ],
  },

  "english-korean": {
    title: "Practice Korean with AI-Powered Sentence Exercises",
    description: "Learn Korean with Lingvo's AI-generated practice sentences. Practice natural Korean at your level with English translations and grammar hints.",
    faq: [
      { question: "How does Lingvo help me learn Korean?", answer: "Lingvo creates 10 unique Korean sentences per session tailored to your CEFR level with English translations and grammar hints." },
      { question: "Does Lingvo teach formal and informal Korean?", answer: "Yes. Lower levels focus on polite speech, while advanced levels include casual and formal patterns." },
      { question: "Can I practice reading Hangul?", answer: "Yes. All Korean sentences are written in Hangul with the speaker icon for pronunciation." },
      { question: "Is this helpful for TOPIK preparation?", answer: "A1-A2 aligns with TOPIK I, B1-B2 with TOPIK II (levels 3-4), and C1-C2 with TOPIK II (levels 5-6)." },
      { question: "What topics do the sentences cover?", answer: "Sentences span daily life, work, travel, food, technology, relationships, emotions, and nature." },
    ],
    examples: [
      { target: "이 근처에 좋은 카페가 있나요?", native: "Is there a good cafe near here?" },
      { target: "저는 서울에서 삼 년째 살고 있습니다.", native: "I have been living in Seoul for three years." },
      { target: "내일 비가 올 것 같아서 우산을 가져가세요.", native: "It looks like it will rain tomorrow, so take an umbrella." },
      { target: "어제 친구와 맛있는 음식을 먹었어요.", native: "I ate delicious food with my friend yesterday." },
    ],
  },

  "english-italian": {
    title: "Practice Italian with AI-Powered Sentence Exercises",
    description: "Master Italian with Lingvo's AI-generated practice sentences. Practice natural Italian from A1 to C2 with English translations and grammar hints.",
    faq: [
      { question: "How does Lingvo help me learn Italian?", answer: "Lingvo generates 10 unique Italian sentences per session tailored to your CEFR level with English translations and grammar hints." },
      { question: "Are the sentences conversational Italian?", answer: "Yes. The AI creates natural, everyday Italian sentences covering real-life topics." },
      { question: "Does it cover Italian verb conjugations?", answer: "Yes. From presente and passato prossimo at A1 to congiuntivo and condizionale at higher levels." },
      { question: "Can I hear the Italian pronunciation?", answer: "Yes. Click the speaker icon next to any sentence to hear it spoken aloud." },
      { question: "How is this different from a phrasebook?", answer: "Lingvo generates fresh sentences every session — you learn sentence patterns, not isolated phrases." },
    ],
    examples: [
      { target: "Potrebbe consigliarmi un buon ristorante qui vicino?", native: "Could you recommend a good restaurant nearby?" },
      { target: "Ieri sera sono andato a teatro con i miei amici.", native: "Last night I went to the theater with my friends." },
      { target: "Se avessi più tempo, viaggerei di più.", native: "If I had more time, I would travel more." },
      { target: "Mi piacerebbe imparare a cucinare la pasta fresca.", native: "I would like to learn how to make fresh pasta." },
    ],
  },

  "english-portuguese": {
    title: "Practice Portuguese with AI-Powered Sentence Exercises",
    description: "Improve your Portuguese with Lingvo's AI-generated practice sentences. Practice real-world Portuguese at every CEFR level with English translations.",
    faq: [
      { question: "How does Lingvo help me learn Portuguese?", answer: "Lingvo uses AI to generate 10 authentic Portuguese sentences per session at your chosen CEFR level with English translations." },
      { question: "Does Lingvo cover Brazilian and European Portuguese?", answer: "The AI generates standard Portuguese understood in both Brazil and Portugal." },
      { question: "What grammar structures are practiced?", answer: "From basic present tense at A1 to subjunctive mood and complex conditionals at advanced levels." },
      { question: "Can I listen to pronunciation?", answer: "Yes. Use the speaker icon to hear each sentence spoken aloud." },
      { question: "Is Lingvo free to use?", answer: "Yes. Lingvo is completely free with no registration required." },
    ],
    examples: [
      { target: "Você poderia me dizer onde fica a estação de metrô?", native: "Could you tell me where the subway station is?" },
      { target: "Eu tenho estudado português há seis meses.", native: "I have been studying Portuguese for six months." },
      { target: "Se eu soubesse, teria te avisado antes.", native: "If I had known, I would have warned you earlier." },
      { target: "Ela me pediu para levar um presente para a festa.", native: "She asked me to bring a gift to the party." },
    ],
  },

  "english-russian": {
    title: "Practice Russian with AI-Powered Sentence Exercises",
    description: "Master Russian with Lingvo's AI-generated practice sentences. Practice reading Cyrillic script with natural Russian sentences at your CEFR level.",
    faq: [
      { question: "How does Lingvo help me learn Russian?", answer: "Lingvo generates 10 unique Russian sentences per session tailored to your CEFR level with English translations and grammar hints." },
      { question: "Does Lingvo cover Russian cases?", answer: "Yes. Sentences include all six Russian cases appropriate to your proficiency level." },
      { question: "Can I practice reading Cyrillic?", answer: "Yes. All sentences are written in Cyrillic with the speaker icon for pronunciation." },
      { question: "What verb aspects are covered?", answer: "The AI generates sentences using both perfective and imperfective verb aspects." },
      { question: "Is this suitable for beginners?", answer: "Yes. Start with A1 for simple present-tense sentences and progress to complex grammar." },
    ],
    examples: [
      { target: "Не могли бы вы подсказать, как пройти к метро?", native: "Could you tell me how to get to the metro?" },
      { target: "Я работаю в этой компании уже три года.", native: "I have been working at this company for three years." },
      { target: "Если бы у меня было больше времени, я бы путешествовал чаще.", native: "If I had more time, I would travel more often." },
      { target: "Она попросила меня помочь ей с проектом.", native: "She asked me to help her with the project." },
    ],
  },

  "english-arabic": {
    title: "Practice Arabic with AI-Powered Sentence Exercises",
    description: "Master Arabic with Lingvo's AI-generated practice sentences. Practice Modern Standard Arabic at your CEFR level with English translations and RTL support.",
    faq: [
      { question: "How does Lingvo help me learn Arabic?", answer: "Lingvo generates 10 unique Arabic sentences per session with English translations and grammar hints covering root patterns and verb forms." },
      { question: "Does Lingvo use Modern Standard Arabic?", answer: "Yes. Sentences are generated in MSA, understood across all Arabic-speaking countries." },
      { question: "Does the interface support right-to-left text?", answer: "Yes. Arabic sentences are displayed with proper right-to-left text direction." },
      { question: "Can I hear Arabic pronunciation?", answer: "Yes. Use the speaker icon to hear each sentence spoken in Arabic." },
      { question: "What grammar is covered?", answer: "From basic verb conjugation at A1 to advanced rhetoric and literary structures at C2." },
    ],
    examples: [
      { target: "هل يمكنك أن تدلني على أقرب مطعم؟", native: "Can you direct me to the nearest restaurant?" },
      { target: "أعمل في هذه الشركة منذ خمس سنوات.", native: "I have been working at this company for five years." },
      { target: "لو كان الطقس جميلاً، لذهبنا إلى الشاطئ.", native: "If the weather were nice, we would have gone to the beach." },
      { target: "طلبت منه أن يساعدني في إنهاء المشروع.", native: "I asked him to help me finish the project." },
    ],
  },

  "english-chinese": {
    title: "Practice Chinese with AI-Powered Sentence Exercises",
    description: "Learn Mandarin Chinese with Lingvo's AI-generated practice sentences. Practice reading Chinese at your CEFR level with English translations.",
    faq: [
      { question: "How does Lingvo help me learn Chinese?", answer: "Lingvo generates 10 unique Mandarin sentences per session matched to your CEFR level with English translations and grammar hints." },
      { question: "Does Lingvo use simplified or traditional characters?", answer: "Lingvo uses simplified Chinese characters, the standard in mainland China." },
      { question: "Is this suitable for HSK preparation?", answer: "A1 covers HSK 1-2, A2-B1 covers HSK 3-4, B2-C1 covers HSK 5, and C2 covers HSK 6." },
      { question: "Can I hear Chinese pronunciation?", answer: "Yes. Click the speaker icon to hear Mandarin pronunciation with correct tones." },
      { question: "What grammar points are covered?", answer: "From basic SVO order and measure words at A1 to complement constructions at advanced levels." },
    ],
    examples: [
      { target: "请问，最近的地铁站在哪里？", native: "Excuse me, where is the nearest subway station?" },
      { target: "我在这家公司已经工作了三年。", native: "I have been working at this company for three years." },
      { target: "如果明天不下雨，我们就去公园吧。", native: "If it doesn't rain tomorrow, let's go to the park." },
      { target: "她告诉我她下个月要去日本旅行。", native: "She told me she is going to travel to Japan next month." },
    ],
  },

  "english-dutch": {
    title: "Practice Dutch with AI-Powered Sentence Exercises",
    description: "Learn Dutch with Lingvo's AI-generated practice sentences. Practice natural Dutch from A1 to C2 with English translations and grammar hints.",
    faq: [
      { question: "How does Lingvo help me learn Dutch?", answer: "Lingvo creates 10 unique Dutch sentences per session matched to your CEFR level with English translations." },
      { question: "Does it cover Dutch word order rules?", answer: "Yes. Sentences demonstrate V2 word order, subordinate clauses, and separable verbs." },
      { question: "Is this useful for Flemish too?", answer: "Yes. Sentences use standard Dutch (ABN) understood in both the Netherlands and Belgium." },
      { question: "Can I hear Dutch pronunciation?", answer: "Yes. Click the speaker icon to hear each sentence spoken aloud." },
      { question: "What topics are covered?", answer: "Daily life, work, travel, food, technology, relationships, emotions, and nature." },
    ],
    examples: [
      { target: "Kunt u mij vertellen waar het station is?", native: "Can you tell me where the station is?" },
      { target: "Ik woon al vijf jaar in Amsterdam.", native: "I have been living in Amsterdam for five years." },
      { target: "Als het morgen mooi weer is, gaan we naar het strand.", native: "If the weather is nice tomorrow, we will go to the beach." },
      { target: "Hij heeft me gevraagd om hem te helpen.", native: "He asked me to help him." },
    ],
  },

  "english-polish": {
    title: "Practice Polish with AI-Powered Sentence Exercises",
    description: "Learn Polish with Lingvo's AI-generated practice sentences. Practice real-world Polish at your CEFR level with English translations and grammar hints.",
    faq: [
      { question: "How does Lingvo help me learn Polish?", answer: "Lingvo generates 10 unique Polish sentences per session matched to your CEFR level with English translations and grammar hints." },
      { question: "Does Lingvo cover Polish cases?", answer: "Yes. Sentences use all seven Polish cases appropriate to your level." },
      { question: "Can I practice Polish pronunciation?", answer: "Yes. Use the speaker icon to hear each sentence spoken aloud." },
      { question: "What makes Polish challenging?", answer: "Polish has seven cases, gendered nouns, and verb aspects. Lingvo introduces these gradually." },
      { question: "Is this free?", answer: "Yes. Completely free with no registration required." },
    ],
    examples: [
      { target: "Czy mógłbyś mi powiedzieć, gdzie jest najbliższa apteka?", native: "Could you tell me where the nearest pharmacy is?" },
      { target: "Pracuję w tej firmie od trzech lat.", native: "I have been working at this company for three years." },
      { target: "Gdybym miał więcej czasu, podróżowałbym częściej.", native: "If I had more time, I would travel more often." },
      { target: "Poprosiła mnie o pomoc w przygotowaniu kolacji.", native: "She asked me for help preparing dinner." },
    ],
  },

  "english-swedish": { title: "Practice Swedish with AI-Powered Sentence Exercises", description: "Learn Swedish with Lingvo's AI-generated practice sentences at every CEFR level with English translations and pronunciation.", faq: [{ question: "How does Lingvo help me learn Swedish?", answer: "Lingvo generates 10 unique Swedish sentences per session at your CEFR level with English translations." }, { question: "What grammar is covered?", answer: "From basic word order at A1 to subordinate clauses and passive voice at advanced levels." }, { question: "Can I hear Swedish pronunciation?", answer: "Yes. Click the speaker icon to hear each sentence with Swedish pronunciation." }, { question: "Is Swedish similar to Norwegian?", answer: "Yes, they are closely related. Practicing Swedish will also improve your Scandinavian comprehension." }, { question: "What level should I start with?", answer: "Start with A1 if you're new to Swedish. Each level builds on the previous one." }], examples: [{ target: "Kan du berätta för mig var närmaste busshållplats är?", native: "Can you tell me where the nearest bus stop is?" }, { target: "Jag har bott i Stockholm i tre år.", native: "I have lived in Stockholm for three years." }, { target: "Om det inte regnar imorgon, går vi till parken.", native: "If it doesn't rain tomorrow, we'll go to the park." }, { target: "Hon bad mig att hjälpa henne med flytten.", native: "She asked me to help her with the move." }] },
  "english-norwegian": { title: "Practice Norwegian with AI-Powered Sentence Exercises", description: "Master Norwegian with Lingvo's AI-generated practice sentences. Practice Bokmål from A1 to C2 with English translations.", faq: [{ question: "How does Lingvo help me learn Norwegian?", answer: "Lingvo generates 10 unique Norwegian (Bokmål) sentences per session tailored to your CEFR level." }, { question: "Does Lingvo use Bokmål or Nynorsk?", answer: "Lingvo uses Bokmål, the most widely used written form of Norwegian." }, { question: "Can I hear Norwegian pronunciation?", answer: "Yes. Use the speaker icon to hear each sentence spoken aloud." }, { question: "Is Norwegian easy for English speakers?", answer: "Norwegian is considered one of the easiest languages for English speakers." }, { question: "What topics are covered?", answer: "Daily life, work, travel, food, nature, technology, relationships, and emotions." }], examples: [{ target: "Kan du fortelle meg veien til sentrum?", native: "Can you tell me the way to the city center?" }, { target: "Jeg har bodd i Oslo i fire år.", native: "I have lived in Oslo for four years." }, { target: "Hvis det er fint vær i morgen, drar vi på tur.", native: "If the weather is nice tomorrow, we'll go on a trip." }, { target: "Han ba meg om å hjelpe ham med prosjektet.", native: "He asked me to help him with the project." }] },
  "english-danish": { title: "Practice Danish with AI-Powered Sentence Exercises", description: "Learn Danish with Lingvo's AI-generated practice sentences at your CEFR level with English translations and pronunciation.", faq: [{ question: "How does Lingvo help me learn Danish?", answer: "Lingvo creates 10 unique Danish sentences per session at your CEFR level with English translations." }, { question: "What grammar is covered?", answer: "From basic V2 word order at A1 to complex subordinate clauses at advanced levels." }, { question: "Can I hear Danish pronunciation?", answer: "Yes. Click the speaker icon to practice Danish pronunciation." }, { question: "Is Danish hard to pronounce?", answer: "Danish pronunciation can be challenging, but the text-to-speech feature helps you practice." }, { question: "Is this free?", answer: "Yes. Completely free with no registration." }], examples: [{ target: "Kan du fortælle mig, hvor den nærmeste station er?", native: "Can you tell me where the nearest station is?" }, { target: "Jeg har arbejdet her i fem år.", native: "I have worked here for five years." }, { target: "Hvis det ikke regner, tager vi til stranden.", native: "If it doesn't rain, we'll go to the beach." }, { target: "Hun bad mig om at hjælpe med opgaven.", native: "She asked me to help with the task." }] },
  "english-greek": { title: "Practice Greek with AI-Powered Sentence Exercises", description: "Learn Modern Greek with Lingvo's AI-generated practice sentences at your CEFR level with English translations.", faq: [{ question: "How does Lingvo help me learn Greek?", answer: "Lingvo generates 10 unique Modern Greek sentences per session matched to your CEFR level." }, { question: "Does Lingvo use Modern or Ancient Greek?", answer: "Lingvo generates Modern Greek (Demotic), the standard language in Greece today." }, { question: "Can I practice reading the Greek alphabet?", answer: "Yes. All sentences are in the Greek alphabet, building your reading fluency." }, { question: "Can I hear Greek pronunciation?", answer: "Yes. Use the speaker icon for Modern Greek pronunciation." }, { question: "What grammar is covered?", answer: "From basic verb conjugations at A1 to subjunctive mood and complex syntax at advanced levels." }], examples: [{ target: "Μπορείτε να μου πείτε πού είναι το μουσείο;", native: "Can you tell me where the museum is?" }, { target: "Ζω στην Αθήνα εδώ και τρία χρόνια.", native: "I have been living in Athens for three years." }, { target: "Αν είχα περισσότερο χρόνο, θα ταξίδευα πιο συχνά.", native: "If I had more time, I would travel more often." }, { target: "Με ρώτησε αν μπορώ να τον βοηθήσω.", native: "He asked me if I could help him." }] },
  "english-hebrew": { title: "Practice Hebrew with AI-Powered Sentence Exercises", description: "Learn Modern Hebrew with Lingvo's AI-generated practice sentences at your CEFR level with English translations and RTL support.", faq: [{ question: "How does Lingvo help me learn Hebrew?", answer: "Lingvo generates 10 unique Hebrew sentences per session with English translations and grammar hints." }, { question: "Does the interface support right-to-left?", answer: "Yes. Hebrew sentences are displayed with proper right-to-left direction." }, { question: "Does Lingvo use Modern or Biblical Hebrew?", answer: "Lingvo generates Modern Hebrew (Ivrit), the language spoken in Israel today." }, { question: "Can I hear Hebrew pronunciation?", answer: "Yes. Click the speaker icon for Modern Hebrew pronunciation." }, { question: "What grammar is covered?", answer: "From basic present tense and common binyanim at A1 to complex verb patterns at advanced levels." }], examples: [{ target: "אתה יכול להגיד לי איפה התחנה הקרובה?", native: "Can you tell me where the nearest station is?" }, { target: "אני גר בתל אביב כבר חמש שנים.", native: "I have been living in Tel Aviv for five years." }, { target: "אם הייתי יודע, הייתי אומר לך מראש.", native: "If I had known, I would have told you in advance." }, { target: "היא ביקשה ממני לעזור לה בפרויקט.", native: "She asked me to help her with the project." }] },
  "english-hindi": { title: "Practice Hindi with AI-Powered Sentence Exercises", description: "Learn Hindi with Lingvo's AI-generated practice sentences in Devanagari script at your CEFR level with English translations.", faq: [{ question: "How does Lingvo help me learn Hindi?", answer: "Lingvo generates 10 unique Hindi sentences per session using Devanagari script with English translations." }, { question: "Does Lingvo use Devanagari script?", answer: "Yes. All Hindi sentences are written in Devanagari script." }, { question: "Can I hear Hindi pronunciation?", answer: "Yes. Click the speaker icon to hear Hindi pronunciation." }, { question: "Is Hindi different from Urdu?", answer: "Hindi and Urdu share core grammar and spoken vocabulary. Lingvo uses Hindi in Devanagari." }, { question: "What level should I start with?", answer: "Start with A1 for basic postpositions, simple verbs, and everyday vocabulary." }], examples: [{ target: "क्या आप मुझे नज़दीकी अस्पताल का रास्ता बता सकते हैं?", native: "Can you tell me the way to the nearest hospital?" }, { target: "मैं इस शहर में पाँच साल से रह रहा हूँ।", native: "I have been living in this city for five years." }, { target: "अगर कल बारिश नहीं हुई तो हम पार्क जाएँगे।", native: "If it doesn't rain tomorrow, we will go to the park." }, { target: "उसने मुझसे प्रोजेक्ट में मदद करने को कहा।", native: "He asked me to help with the project." }] },
  "english-persian": { title: "Practice Persian with AI-Powered Sentence Exercises", description: "Learn Persian (Farsi) with Lingvo's AI-generated practice sentences at your CEFR level with English translations and RTL support.", faq: [{ question: "How does Lingvo help me learn Persian?", answer: "Lingvo generates 10 unique Persian sentences per session with English translations and grammar hints." }, { question: "Does the interface support right-to-left?", answer: "Yes. Persian sentences are displayed with proper right-to-left direction." }, { question: "Is this Modern Persian?", answer: "Yes. Lingvo generates Modern Persian (Farsi) used in everyday Iran." }, { question: "Can I hear Persian pronunciation?", answer: "Yes. Use the speaker icon to hear each sentence." }, { question: "What grammar is covered?", answer: "From basic SOV order at A1 to compound verbs and subjunctive mood at advanced levels." }], examples: [{ target: "می‌توانید به من بگویید نزدیک‌ترین ایستگاه مترو کجاست؟", native: "Can you tell me where the nearest metro station is?" }, { target: "من سه سال است که در این شرکت کار می‌کنم.", native: "I have been working at this company for three years." }, { target: "اگر فردا هوا خوب باشد، به پارک می‌رویم.", native: "If the weather is good tomorrow, we will go to the park." }, { target: "او از من خواست که در پروژه کمکش کنم.", native: "He asked me to help him with the project." }] },
  "english-romanian": { title: "Practice Romanian with AI-Powered Sentence Exercises", description: "Learn Romanian with Lingvo's AI-generated practice sentences at your CEFR level with English translations and grammar hints.", faq: [{ question: "How does Lingvo help me learn Romanian?", answer: "Lingvo generates 10 unique Romanian sentences per session matched to your CEFR level." }, { question: "Is Romanian similar to other Romance languages?", answer: "Yes. Romanian shares vocabulary and grammar with Italian, French, Spanish, and Portuguese." }, { question: "What grammar is covered?", answer: "From basic verb conjugations at A1 to subjunctive mood and complex clauses at advanced levels." }, { question: "Can I hear Romanian pronunciation?", answer: "Yes. Click the speaker icon to hear each sentence." }, { question: "Is this free?", answer: "Yes. Completely free with no registration required." }], examples: [{ target: "Puteți să-mi spuneți unde este cea mai apropiată farmacie?", native: "Can you tell me where the nearest pharmacy is?" }, { target: "Locuiesc în București de cinci ani.", native: "I have been living in Bucharest for five years." }, { target: "Dacă ar fi mai cald, am merge la plajă.", native: "If it were warmer, we would go to the beach." }, { target: "M-a rugat să o ajut cu traducerea.", native: "She asked me to help her with the translation." }] },
  "english-ukrainian": { title: "Practice Ukrainian with AI-Powered Sentence Exercises", description: "Learn Ukrainian with Lingvo's AI-generated practice sentences in Cyrillic script at your CEFR level with English translations.", faq: [{ question: "How does Lingvo help me learn Ukrainian?", answer: "Lingvo generates 10 unique Ukrainian sentences per session with English translations and grammar hints." }, { question: "Does Lingvo use Ukrainian Cyrillic?", answer: "Yes. All sentences use the Ukrainian Cyrillic alphabet, distinct from Russian." }, { question: "Can I practice reading Cyrillic?", answer: "Yes. All sentences are in Ukrainian Cyrillic with pronunciation via the speaker icon." }, { question: "What grammar is covered?", answer: "From basic verb conjugations at A1 to verb aspects and complex syntax at advanced levels." }, { question: "Can I hear Ukrainian pronunciation?", answer: "Yes. Use the speaker icon to hear each sentence." }], examples: [{ target: "Чи можете ви підказати, де найближча зупинка?", native: "Can you tell me where the nearest stop is?" }, { target: "Я працюю в цій компанії вже чотири роки.", native: "I have been working at this company for four years." }, { target: "Якби в мене було більше часу, я б подорожував частіше.", native: "If I had more time, I would travel more often." }, { target: "Вона попросила мене допомогти їй з проєктом.", native: "She asked me to help her with the project." }] },
  "english-czech": { title: "Practice Czech with AI-Powered Sentence Exercises", description: "Learn Czech with Lingvo's AI-generated practice sentences at your CEFR level with English translations and pronunciation.", faq: [{ question: "How does Lingvo help me learn Czech?", answer: "Lingvo generates 10 unique Czech sentences per session tailored to your CEFR level." }, { question: "Does Lingvo cover Czech cases?", answer: "Yes. Sentences include all seven Czech cases introduced gradually." }, { question: "Can I hear Czech pronunciation?", answer: "Yes. Click the speaker icon to hear each sentence with Czech pronunciation." }, { question: "What makes Czech challenging?", answer: "Czech has seven cases, verb aspects, and complex consonant clusters. Lingvo introduces these gradually." }, { question: "Is this free?", answer: "Yes. Completely free with no registration required." }], examples: [{ target: "Můžete mi říct, kde je nejbližší lékárna?", native: "Can you tell me where the nearest pharmacy is?" }, { target: "Pracuji v této firmě už tři roky.", native: "I have been working at this company for three years." }, { target: "Kdybych měl více času, cestoval bych častěji.", native: "If I had more time, I would travel more often." }, { target: "Požádala mě, abych jí pomohl s úkolem.", native: "She asked me to help her with the task." }] },
  "english-hungarian": { title: "Practice Hungarian with AI-Powered Sentence Exercises", description: "Learn Hungarian with Lingvo's AI-generated practice sentences at your CEFR level with English translations and grammar hints.", faq: [{ question: "How does Lingvo help me learn Hungarian?", answer: "Lingvo generates 10 unique Hungarian sentences per session with English translations and grammar hints." }, { question: "Is Hungarian very different from other European languages?", answer: "Yes. Hungarian is a Finno-Ugric language with vowel harmony and agglutinative grammar." }, { question: "What grammar is covered?", answer: "From basic word order at A1 to definite/indefinite conjugation and complex suffixes at advanced levels." }, { question: "Can I hear Hungarian pronunciation?", answer: "Yes. Use the speaker icon to hear each sentence." }, { question: "Is Hungarian hard to learn?", answer: "Hungarian has complex grammar, but Lingvo breaks it down into manageable steps." }], examples: [{ target: "Meg tudná mondani, hol van a legközelebbi megálló?", native: "Could you tell me where the nearest stop is?" }, { target: "Három éve dolgozom ennél a cégnél.", native: "I have been working at this company for three years." }, { target: "Ha szép lenne az idő, elmennénk kirándulni.", native: "If the weather were nice, we would go on an excursion." }, { target: "Megkért, hogy segítsek neki a projektben.", native: "He asked me to help him with the project." }] },

  // ─── X speakers learning English (pages in native language) ───

  "turkish-english": {
    title: "Yapay Zeka ile İngilizce Cümle Pratiği",
    description: "Lingvo ile İngilizce cümle pratiği yapın. Yapay zeka tarafından oluşturulan, seviyenize uygun doğal cümlelerle İngilizcenizi geliştirin. A1'den C2'ye kadar tüm CEFR seviyeleri desteklenir.",
    faq: [
      { question: "Lingvo ile İngilizce nasıl pratik yapabilirim?", answer: "CEFR seviyenizi seçin, Lingvo sizin için 10 benzersiz İngilizce cümle oluşturur. Her cümlenin Türkçe çevirisi ve gramer ipuçları bulunur." },
      { question: "Hangi seviyeler destekleniyor?", answer: "A1 (Başlangıç), A2 (Temel), B1 (Orta), B2 (Orta-Üst), C1 (İleri) ve C2 (Ustalık) olmak üzere tüm CEFR seviyeleri desteklenir." },
      { question: "Cümleler her seferinde aynı mı?", answer: "Hayır. Her pratik oturumunda yapay zeka tamamen yeni ve farklı cümleler oluşturur." },
      { question: "Cümlelerin telaffuzunu dinleyebilir miyim?", answer: "Evet. Her cümlenin yanındaki hoparlör simgesine tıklayarak İngilizce telaffuzu dinleyebilirsiniz." },
      { question: "Lingvo ücretsiz mi?", answer: "Evet, Lingvo tamamen ücretsiz bir dil pratik aracıdır. Kayıt olmadan hemen pratik yapmaya başlayabilirsiniz." },
    ],
    examples: [
      { target: "Could you recommend a good restaurant nearby?", native: "Yakınlarda iyi bir restoran önerebilir misiniz?" },
      { target: "I have been working here for three years.", native: "Üç yıldır burada çalışıyorum." },
      { target: "The weather is supposed to get better tomorrow.", native: "Yarın havanın düzelmesi bekleniyor." },
      { target: "She asked me to help her with the project.", native: "Projede ona yardım etmemi istedi." },
    ],
  },

  "spanish-english": {
    title: "Practica inglés con ejercicios de oraciones con IA",
    description: "Mejora tu inglés con Lingvo. Practica oraciones generadas por inteligencia artificial adaptadas a tu nivel CEFR, con traducciones al español y sugerencias gramaticales.",
    faq: [
      { question: "¿Cómo me ayuda Lingvo a aprender inglés?", answer: "Lingvo genera 10 oraciones únicas en inglés por sesión, adaptadas a tu nivel CEFR. Cada oración incluye traducción al español y consejos gramaticales." },
      { question: "¿Qué niveles están disponibles?", answer: "Todos los niveles CEFR: A1 (Principiante), A2 (Elemental), B1 (Intermedio), B2 (Intermedio-Alto), C1 (Avanzado) y C2 (Maestría)." },
      { question: "¿Las oraciones son siempre diferentes?", answer: "Sí. La IA genera oraciones completamente nuevas en cada sesión de práctica." },
      { question: "¿Puedo escuchar la pronunciación?", answer: "Sí. Haz clic en el icono del altavoz junto a cualquier oración para escuchar la pronunciación en inglés." },
      { question: "¿Es gratis?", answer: "Sí. Lingvo es completamente gratuito y no requiere registro." },
    ],
    examples: [
      { target: "Could you tell me how to get to the nearest station?", native: "¿Podrías decirme cómo llegar a la estación más cercana?" },
      { target: "I have been studying English for two years.", native: "Llevo dos años estudiando inglés." },
      { target: "If I had more time, I would travel around the world.", native: "Si tuviera más tiempo, viajaría por todo el mundo." },
      { target: "She asked me to help her with the presentation.", native: "Me pidió que la ayudara con la presentación." },
    ],
  },

  "french-english": {
    title: "Pratiquez l'anglais avec des exercices de phrases par IA",
    description: "Améliorez votre anglais avec Lingvo. Pratiquez des phrases générées par l'IA adaptées à votre niveau CECR, avec des traductions en français et des conseils grammaticaux.",
    faq: [
      { question: "Comment Lingvo m'aide-t-il à apprendre l'anglais ?", answer: "Lingvo génère 10 phrases uniques en anglais par session, adaptées à votre niveau CECR. Chaque phrase comprend une traduction en français et des conseils grammaticaux." },
      { question: "Quels niveaux sont disponibles ?", answer: "Tous les niveaux CECR : A1 (Débutant), A2 (Élémentaire), B1 (Intermédiaire), B2 (Intermédiaire-Avancé), C1 (Avancé) et C2 (Maîtrise)." },
      { question: "Les phrases sont-elles toujours différentes ?", answer: "Oui. L'IA génère des phrases entièrement nouvelles à chaque session de pratique." },
      { question: "Puis-je écouter la prononciation ?", answer: "Oui. Cliquez sur l'icône du haut-parleur à côté de chaque phrase pour entendre la prononciation en anglais." },
      { question: "Est-ce gratuit ?", answer: "Oui. Lingvo est entièrement gratuit et ne nécessite aucune inscription." },
    ],
    examples: [
      { target: "Would you mind showing me the way to the museum?", native: "Pourriez-vous me montrer le chemin du musée ?" },
      { target: "I have been living in this city for five years.", native: "Je vis dans cette ville depuis cinq ans." },
      { target: "If it rains tomorrow, we will stay home.", native: "S'il pleut demain, nous resterons à la maison." },
      { target: "He told me that he was going to change jobs.", native: "Il m'a dit qu'il allait changer de travail." },
    ],
  },

  "german-english": {
    title: "Englisch üben mit KI-gestützten Satzübungen",
    description: "Verbessern Sie Ihr Englisch mit Lingvo. Üben Sie KI-generierte Sätze, angepasst an Ihr GER-Niveau, mit deutschen Übersetzungen und Grammatiktipps.",
    faq: [
      { question: "Wie hilft mir Lingvo beim Englischlernen?", answer: "Lingvo generiert 10 einzigartige englische Sätze pro Sitzung, angepasst an Ihr GER-Niveau. Jeder Satz enthält eine deutsche Übersetzung und Grammatiktipps." },
      { question: "Welche Niveaus werden unterstützt?", answer: "Alle GER-Niveaus: A1 (Anfänger), A2 (Grundstufe), B1 (Mittelstufe), B2 (Obere Mittelstufe), C1 (Fortgeschritten) und C2 (Meisterschaft)." },
      { question: "Sind die Sätze immer unterschiedlich?", answer: "Ja. Die KI generiert bei jeder Übungssitzung völlig neue Sätze." },
      { question: "Kann ich die Aussprache hören?", answer: "Ja. Klicken Sie auf das Lautsprecher-Symbol neben jedem Satz, um die englische Aussprache zu hören." },
      { question: "Ist es kostenlos?", answer: "Ja. Lingvo ist völlig kostenlos und erfordert keine Registrierung." },
    ],
    examples: [
      { target: "Could you please tell me where the nearest pharmacy is?", native: "Könnten Sie mir bitte sagen, wo die nächste Apotheke ist?" },
      { target: "I have been working at this company for three years.", native: "Ich arbeite seit drei Jahren in dieser Firma." },
      { target: "If I had known earlier, I would have told you.", native: "Wenn ich es früher gewusst hätte, hätte ich es dir gesagt." },
      { target: "She suggested that we go to the new Italian restaurant.", native: "Sie schlug vor, dass wir in das neue italienische Restaurant gehen." },
    ],
  },

  "japanese-english": {
    title: "AIを活用した英語の文章練習",
    description: "Lingvoで英語の文章練習をしましょう。AIが生成する自然な英文で、CEFRレベルに合わせた練習ができます。日本語訳と文法ヒント付き。",
    faq: [
      { question: "Lingvoはどのように英語学習に役立ちますか？", answer: "Lingvoは、あなたのCEFRレベルに合わせた10のユニークな英文をAIで生成します。各文には日本語訳と文法ヒントが含まれています。" },
      { question: "どのレベルがサポートされていますか？", answer: "CEFRの全レベル：A1（初心者）、A2（初級）、B1（中級）、B2（中上級）、C1（上級）、C2（マスター）に対応しています。" },
      { question: "毎回異なる文が出ますか？", answer: "はい。毎回のセッションでAIが完全に新しい文を生成します。同じ文を二度見ることはありません。" },
      { question: "発音を聞くことはできますか？", answer: "はい。各文の横にあるスピーカーアイコンをクリックすると、英語の発音を聞くことができます。" },
      { question: "無料ですか？", answer: "はい。Lingvoは完全無料で、登録不要です。すぐに練習を始められます。" },
    ],
    examples: [
      { target: "Could you tell me how to get to the train station?", native: "駅への行き方を教えていただけますか？" },
      { target: "I have been studying Japanese for two years.", native: "私は2年間日本語を勉強しています。" },
      { target: "If the weather is nice this weekend, let's go hiking.", native: "今週末天気が良ければ、ハイキングに行きましょう。" },
      { target: "He asked me to send him the report by Friday.", native: "彼は金曜日までにレポートを送るように頼みました。" },
    ],
  },

  "korean-english": {
    title: "AI 기반 영어 문장 연습",
    description: "Lingvo로 영어 문장 연습을 하세요. AI가 생성한 자연스러운 영어 문장으로 CEFR 수준에 맞게 연습할 수 있습니다. 한국어 번역과 문법 힌트가 포함됩니다.",
    faq: [
      { question: "Lingvo는 영어 학습에 어떻게 도움이 되나요?", answer: "Lingvo는 AI를 사용하여 CEFR 수준에 맞는 10개의 고유한 영어 문장을 생성합니다. 각 문장에는 한국어 번역과 문법 힌트가 포함됩니다." },
      { question: "어떤 수준이 지원되나요?", answer: "모든 CEFR 수준이 지원됩니다: A1(초급), A2(기초), B1(중급), B2(중상급), C1(고급), C2(마스터)." },
      { question: "매번 다른 문장이 나오나요?", answer: "네. AI가 매 세션마다 완전히 새로운 문장을 생성합니다." },
      { question: "발음을 들을 수 있나요?", answer: "네. 각 문장 옆의 스피커 아이콘을 클릭하면 영어 발음을 들을 수 있습니다." },
      { question: "무료인가요?", answer: "네. Lingvo는 완전 무료이며 회원가입이 필요 없습니다." },
    ],
    examples: [
      { target: "Excuse me, could you tell me where the nearest subway station is?", native: "실례합니다, 가장 가까운 지하철역이 어디인지 알려주시겠어요?" },
      { target: "I have been living in Seoul for three years.", native: "저는 서울에서 3년째 살고 있습니다." },
      { target: "If it rains tomorrow, we should cancel the picnic.", native: "내일 비가 오면 소풍을 취소해야 합니다." },
      { target: "My teacher recommended that I read more English books.", native: "선생님이 영어 책을 더 읽으라고 추천하셨습니다." },
    ],
  },

  "italian-english": {
    title: "Pratica l'inglese con esercizi di frasi con IA",
    description: "Migliora il tuo inglese con Lingvo. Pratica frasi generate dall'IA adattate al tuo livello QCER, con traduzioni in italiano e suggerimenti grammaticali.",
    faq: [
      { question: "Come mi aiuta Lingvo a imparare l'inglese?", answer: "Lingvo genera 10 frasi uniche in inglese per sessione, adattate al tuo livello QCER. Ogni frase include traduzione in italiano e suggerimenti grammaticali." },
      { question: "Quali livelli sono disponibili?", answer: "Tutti i livelli QCER: A1 (Principiante), A2 (Elementare), B1 (Intermedio), B2 (Intermedio-Avanzato), C1 (Avanzato) e C2 (Padronanza)." },
      { question: "Le frasi sono sempre diverse?", answer: "Sì. L'IA genera frasi completamente nuove ad ogni sessione di pratica." },
      { question: "Posso ascoltare la pronuncia?", answer: "Sì. Clicca sull'icona dell'altoparlante accanto a ogni frase per ascoltare la pronuncia in inglese." },
      { question: "È gratuito?", answer: "Sì. Lingvo è completamente gratuito e non richiede registrazione." },
    ],
    examples: [
      { target: "Would you mind helping me with this form?", native: "Ti dispiacerebbe aiutarmi con questo modulo?" },
      { target: "I have been learning Italian for six months.", native: "Studio italiano da sei mesi." },
      { target: "If we leave now, we can catch the last train.", native: "Se partiamo adesso, possiamo prendere l'ultimo treno." },
      { target: "She told me she would arrive before noon.", native: "Mi ha detto che sarebbe arrivata prima di mezzogiorno." },
    ],
  },

  "portuguese-english": {
    title: "Pratique inglês com exercícios de frases com IA",
    description: "Melhore seu inglês com Lingvo. Pratique frases geradas por IA adaptadas ao seu nível CEFR, com traduções em português e dicas gramaticais.",
    faq: [
      { question: "Como o Lingvo me ajuda a aprender inglês?", answer: "O Lingvo gera 10 frases únicas em inglês por sessão, adaptadas ao seu nível CEFR. Cada frase inclui tradução em português e dicas gramaticais." },
      { question: "Quais níveis são suportados?", answer: "Todos os níveis CEFR: A1 (Iniciante), A2 (Básico), B1 (Intermediário), B2 (Intermediário-Avançado), C1 (Avançado) e C2 (Fluente)." },
      { question: "As frases são sempre diferentes?", answer: "Sim. A IA gera frases completamente novas a cada sessão de prática." },
      { question: "Posso ouvir a pronúncia?", answer: "Sim. Clique no ícone do alto-falante ao lado de cada frase para ouvir a pronúncia em inglês." },
      { question: "É gratuito?", answer: "Sim. O Lingvo é totalmente gratuito e não requer cadastro." },
    ],
    examples: [
      { target: "Could you recommend a good place to eat around here?", native: "Você poderia recomendar um bom lugar para comer por aqui?" },
      { target: "I have been working from home since last year.", native: "Eu trabalho de casa desde o ano passado." },
      { target: "If I had studied harder, I would have passed the exam.", native: "Se eu tivesse estudado mais, teria passado na prova." },
      { target: "He asked me to call him when I arrive.", native: "Ele me pediu para ligar quando eu chegar." },
    ],
  },

  "russian-english": {
    title: "Практика английского с упражнениями на основе ИИ",
    description: "Улучшите свой английский с Lingvo. Практикуйте предложения, сгенерированные ИИ, адаптированные к вашему уровню CEFR, с переводом на русский и грамматическими подсказками.",
    faq: [
      { question: "Как Lingvo помогает учить английский?", answer: "Lingvo генерирует 10 уникальных английских предложений за сессию, адаптированных к вашему уровню CEFR. Каждое предложение включает перевод на русский и грамматические подсказки." },
      { question: "Какие уровни поддерживаются?", answer: "Все уровни CEFR: A1 (Начальный), A2 (Элементарный), B1 (Средний), B2 (Выше среднего), C1 (Продвинутый) и C2 (Мастерство)." },
      { question: "Предложения всегда разные?", answer: "Да. ИИ генерирует совершенно новые предложения на каждой сессии практики." },
      { question: "Можно ли слушать произношение?", answer: "Да. Нажмите на значок динамика рядом с любым предложением, чтобы услышать английское произношение." },
      { question: "Это бесплатно?", answer: "Да. Lingvo полностью бесплатен и не требует регистрации." },
    ],
    examples: [
      { target: "Could you tell me where the nearest bus stop is?", native: "Не могли бы вы подсказать, где ближайшая автобусная остановка?" },
      { target: "I have been studying English for five years.", native: "Я изучаю английский уже пять лет." },
      { target: "If I were you, I would accept the job offer.", native: "На вашем месте я бы принял предложение о работе." },
      { target: "She promised that she would finish the report by Monday.", native: "Она пообещала, что закончит отчёт к понедельнику." },
    ],
  },

  "arabic-english": {
    title: "تدرب على الإنجليزية مع تمارين جمل بالذكاء الاصطناعي",
    description: "حسّن لغتك الإنجليزية مع Lingvo. تدرب على جمل مولّدة بالذكاء الاصطناعي مناسبة لمستواك في CEFR، مع ترجمات عربية وتلميحات قواعدية.",
    faq: [
      { question: "كيف يساعدني Lingvo في تعلم الإنجليزية؟", answer: "يولّد Lingvo 10 جمل إنجليزية فريدة في كل جلسة، مناسبة لمستواك في CEFR. كل جملة تتضمن ترجمة عربية وتلميحات قواعدية." },
      { question: "ما المستويات المدعومة؟", answer: "جميع مستويات CEFR: A1 (مبتدئ)، A2 (أساسي)، B1 (متوسط)، B2 (فوق المتوسط)، C1 (متقدم)، C2 (إتقان)." },
      { question: "هل الجمل مختلفة في كل مرة؟", answer: "نعم. يولّد الذكاء الاصطناعي جملاً جديدة تماماً في كل جلسة تدريب." },
      { question: "هل يمكنني سماع النطق؟", answer: "نعم. انقر على أيقونة مكبر الصوت بجانب أي جملة لسماع النطق الإنجليزي." },
      { question: "هل هو مجاني؟", answer: "نعم. Lingvo مجاني تماماً ولا يتطلب تسجيل حساب." },
    ],
    examples: [
      { target: "Excuse me, could you help me find the library?", native: "عفواً، هل يمكنك مساعدتي في إيجاد المكتبة؟" },
      { target: "I have been learning English since I was in school.", native: "أتعلم الإنجليزية منذ أن كنت في المدرسة." },
      { target: "If I finish my work early, I will join you for dinner.", native: "إذا أنهيت عملي مبكراً، سأنضم إليكم على العشاء." },
      { target: "The teacher asked us to prepare a presentation.", native: "طلب منا المعلم إعداد عرض تقديمي." },
    ],
  },

  "chinese-english": {
    title: "AI驱动的英语句子练习",
    description: "使用Lingvo练习英语句子。AI生成的自然英语句子，根据您的CEFR水平量身定制，附中文翻译和语法提示。",
    faq: [
      { question: "Lingvo如何帮助我学习英语？", answer: "Lingvo使用AI每次生成10个独特的英语句子，适配您的CEFR水平。每个句子包含中文翻译和语法提示。" },
      { question: "支持哪些水平？", answer: "所有CEFR水平：A1（入门）、A2（基础）、B1（中级）、B2（中高级）、C1（高级）、C2（精通）。" },
      { question: "每次的句子都不一样吗？", answer: "是的。AI每次练习都会生成全新的句子。" },
      { question: "可以听发音吗？", answer: "可以。点击每个句子旁边的喇叭图标即可听到英语发音。" },
      { question: "免费吗？", answer: "是的。Lingvo完全免费，无需注册即可使用。" },
    ],
    examples: [
      { target: "Could you tell me how to get to the airport?", native: "你能告诉我怎么去机场吗？" },
      { target: "I have been studying English for three years.", native: "我已经学了三年英语了。" },
      { target: "If we leave now, we won't be late for the meeting.", native: "如果我们现在出发，就不会迟到开会了。" },
      { target: "My friend recommended this book to me.", native: "我的朋友向我推荐了这本书。" },
    ],
  },

  "dutch-english": { title: "Oefen Engels met AI-gestuurde zinsoefeningen", description: "Verbeter je Engels met Lingvo. Oefen door AI gegenereerde zinnen aangepast aan je CEFR-niveau, met Nederlandse vertalingen en grammaticatips.", faq: [{ question: "Hoe helpt Lingvo mij Engels te leren?", answer: "Lingvo genereert 10 unieke Engelse zinnen per sessie, aangepast aan je CEFR-niveau, met Nederlandse vertalingen en grammaticatips." }, { question: "Welke niveaus worden ondersteund?", answer: "Alle CEFR-niveaus: A1 tot C2." }, { question: "Zijn de zinnen altijd anders?", answer: "Ja. De AI genereert elke sessie volledig nieuwe zinnen." }, { question: "Kan ik de uitspraak beluisteren?", answer: "Ja. Klik op het luidsprekericoon naast elke zin." }, { question: "Is het gratis?", answer: "Ja. Lingvo is volledig gratis zonder registratie." }], examples: [{ target: "Would you mind closing the window?", native: "Zou je het raam willen sluiten?" }, { target: "I have been working here since 2020.", native: "Ik werk hier sinds 2020." }, { target: "If it stops raining, we can go for a walk.", native: "Als het stopt met regenen, kunnen we gaan wandelen." }, { target: "She told me she was moving to a new city.", native: "Ze vertelde me dat ze naar een nieuwe stad verhuisde." }] },
  "polish-english": { title: "Ćwicz angielski z ćwiczeniami zdań opartymi na AI", description: "Popraw swój angielski z Lingvo. Ćwicz zdania generowane przez AI dopasowane do Twojego poziomu CEFR, z polskimi tłumaczeniami i wskazówkami gramatycznymi.", faq: [{ question: "Jak Lingvo pomaga mi uczyć się angielskiego?", answer: "Lingvo generuje 10 unikalnych angielskich zdań na sesję, dopasowanych do Twojego poziomu CEFR, z polskimi tłumaczeniami." }, { question: "Jakie poziomy są dostępne?", answer: "Wszystkie poziomy CEFR: od A1 do C2." }, { question: "Czy zdania są zawsze inne?", answer: "Tak. AI generuje zupełnie nowe zdania w każdej sesji." }, { question: "Czy mogę słuchać wymowy?", answer: "Tak. Kliknij ikonę głośnika obok każdego zdania." }, { question: "Czy to jest darmowe?", answer: "Tak. Lingvo jest całkowicie darmowe i nie wymaga rejestracji." }], examples: [{ target: "Could you help me carry these bags?", native: "Czy mógłbyś pomóc mi nieść te torby?" }, { target: "I have been living in Warsaw for two years.", native: "Mieszkam w Warszawie od dwóch lat." }, { target: "If I spoke better English, I would apply for that job.", native: "Gdybym lepiej mówił po angielsku, ubiegałbym się o tę pracę." }, { target: "He suggested that we meet at the cafe.", native: "Zasugerował, żebyśmy spotkali się w kawiarni." }] },
  "swedish-english": { title: "Öva engelska med AI-drivna meningsövningar", description: "Förbättra din engelska med Lingvo. Öva AI-genererade meningar anpassade till din CEFR-nivå, med svenska översättningar.", faq: [{ question: "Hur hjälper Lingvo mig att lära mig engelska?", answer: "Lingvo genererar 10 unika engelska meningar per session, anpassade till din CEFR-nivå med svenska översättningar." }, { question: "Vilka nivåer stöds?", answer: "Alla CEFR-nivåer: A1 till C2." }, { question: "Är meningarna alltid olika?", answer: "Ja. AI genererar helt nya meningar varje session." }, { question: "Kan jag lyssna på uttal?", answer: "Ja. Klicka på högtalarikonen bredvid varje mening." }, { question: "Är det gratis?", answer: "Ja. Lingvo är helt gratis utan registrering." }], examples: [{ target: "Do you know where the closest pharmacy is?", native: "Vet du var närmaste apotek ligger?" }, { target: "I have been studying English since high school.", native: "Jag har studerat engelska sedan gymnasiet." }, { target: "If we hurry, we can make it to the concert on time.", native: "Om vi skyndar oss kan vi hinna till konserten i tid." }, { target: "She asked me to water her plants while she was away.", native: "Hon bad mig att vattna hennes växter medan hon var borta." }] },
  "norwegian-english": { title: "Øv engelsk med AI-drevne setningsøvelser", description: "Forbedre engelsken din med Lingvo. Øv på AI-genererte setninger tilpasset ditt CEFR-nivå, med norske oversettelser.", faq: [{ question: "Hvordan hjelper Lingvo meg å lære engelsk?", answer: "Lingvo genererer 10 unike engelske setninger per økt, tilpasset ditt CEFR-nivå med norske oversettelser." }, { question: "Hvilke nivåer støttes?", answer: "Alle CEFR-nivåer: A1 til C2." }, { question: "Er setningene alltid forskjellige?", answer: "Ja. AI genererer helt nye setninger hver økt." }, { question: "Kan jeg lytte til uttale?", answer: "Ja. Klikk på høyttalerikonet ved siden av hver setning." }, { question: "Er det gratis?", answer: "Ja. Lingvo er helt gratis uten registrering." }], examples: [{ target: "Could you pass me the salt, please?", native: "Kan du sende meg saltet?" }, { target: "I have been living in Norway for six months.", native: "Jeg har bodd i Norge i seks måneder." }, { target: "If the train is delayed, I will take a taxi.", native: "Hvis toget er forsinket, tar jeg en taxi." }, { target: "He recommended that I visit the fjords.", native: "Han anbefalte meg å besøke fjordene." }] },
  "danish-english": { title: "Øv engelsk med AI-drevne sætningsøvelser", description: "Forbedr dit engelsk med Lingvo. Øv AI-genererede sætninger tilpasset dit CEFR-niveau, med danske oversættelser.", faq: [{ question: "Hvordan hjælper Lingvo mig med at lære engelsk?", answer: "Lingvo genererer 10 unikke engelske sætninger per session, tilpasset dit CEFR-niveau med danske oversættelser." }, { question: "Hvilke niveauer understøttes?", answer: "Alle CEFR-niveauer: A1 til C2." }, { question: "Er sætningerne altid forskellige?", answer: "Ja. AI genererer helt nye sætninger hver session." }, { question: "Kan jeg lytte til udtalen?", answer: "Ja. Klik på højttalerikonet ved siden af hver sætning." }, { question: "Er det gratis?", answer: "Ja. Lingvo er helt gratis uden registrering." }], examples: [{ target: "Would you like to join us for dinner tonight?", native: "Vil du spise aftensmad med os i aften?" }, { target: "I have been working in Copenhagen for a year.", native: "Jeg har arbejdet i København i et år." }, { target: "If you need help, don't hesitate to ask.", native: "Hvis du har brug for hjælp, så tøv ikke med at spørge." }, { target: "She told me that the meeting had been postponed.", native: "Hun fortalte mig, at mødet var blevet udsat." }] },
  "greek-english": { title: "Εξασκηθείτε στα Αγγλικά με ασκήσεις προτάσεων AI", description: "Βελτιώστε τα Αγγλικά σας με το Lingvo. Εξασκηθείτε σε προτάσεις που δημιουργούνται από AI, προσαρμοσμένες στο επίπεδο CEFR σας, με ελληνικές μεταφράσεις.", faq: [{ question: "Πώς με βοηθά το Lingvo να μάθω Αγγλικά;", answer: "Το Lingvo δημιουργεί 10 μοναδικές αγγλικές προτάσεις ανά συνεδρία, προσαρμοσμένες στο επίπεδο CEFR σας, με ελληνικές μεταφράσεις." }, { question: "Ποια επίπεδα υποστηρίζονται;", answer: "Όλα τα επίπεδα CEFR: A1 έως C2." }, { question: "Οι προτάσεις είναι πάντα διαφορετικές;", answer: "Ναι. Η AI δημιουργεί εντελώς νέες προτάσεις σε κάθε συνεδρία." }, { question: "Μπορώ να ακούσω την προφορά;", answer: "Ναι. Κάντε κλικ στο εικονίδιο ηχείου δίπλα σε κάθε πρόταση." }, { question: "Είναι δωρεάν;", answer: "Ναι. Το Lingvo είναι εντελώς δωρεάν χωρίς εγγραφή." }], examples: [{ target: "Could you show me on the map where we are?", native: "Μπορείτε να μου δείξετε στον χάρτη πού βρισκόμαστε;" }, { target: "I have been learning English for many years.", native: "Μαθαίνω Αγγλικά εδώ και πολλά χρόνια." }, { target: "If you study every day, you will improve quickly.", native: "Αν μελετάτε κάθε μέρα, θα βελτιωθείτε γρήγορα." }, { target: "My colleague asked me to translate this document.", native: "Ο συνάδελφός μου μου ζήτησε να μεταφράσω αυτό το έγγραφο." }] },
  "hebrew-english": { title: "תרגול אנגלית עם תרגילי משפטים מבוססי AI", description: "שפרו את האנגלית שלכם עם Lingvo. תרגלו משפטים שנוצרו על ידי AI, מותאמים לרמת ה-CEFR שלכם, עם תרגומים לעברית.", faq: [{ question: "?איך Lingvo עוזר לי ללמוד אנגלית", answer: "Lingvo מייצר 10 משפטים ייחודיים באנגלית בכל מפגש, מותאמים לרמת ה-CEFR שלך, עם תרגומים לעברית." }, { question: "?אילו רמות נתמכות", answer: ".C2 עד A1 :CEFR כל רמות" }, { question: "?האם המשפטים תמיד שונים", answer: ".כן. ה-AI מייצר משפטים חדשים לגמרי בכל מפגש" }, { question: "?אפשר לשמוע את ההגייה", answer: ".כן. לחצו על סמל הרמקול ליד כל משפט" }, { question: "?זה בחינם", answer: ".כן. Lingvo חינמי לחלוטין וללא הרשמה" }], examples: [{ target: "Excuse me, do you know where the nearest ATM is?", native: "?סליחה, אתה יודע איפה הכספומט הקרוב" }, { target: "I have been studying English since university.", native: ".אני לומד אנגלית מאז האוניברסיטה" }, { target: "If you practice every day, your English will improve.", native: ".אם תתרגל כל יום, האנגלית שלך תשתפר" }, { target: "She asked me to explain the instructions again.", native: ".היא ביקשה ממני להסביר את ההוראות שוב" }] },
  "hindi-english": { title: "AI-संचालित वाक्य अभ्यास के साथ अंग्रेजी सीखें", description: "Lingvo के साथ अंग्रेजी का अभ्यास करें। AI द्वारा उत्पन्न वाक्यों का अभ्यास करें जो आपके CEFR स्तर के अनुसार हैं, हिंदी अनुवाद और व्याकरण संकेतों के साथ।", faq: [{ question: "Lingvo मुझे अंग्रेजी सीखने में कैसे मदद करता है?", answer: "Lingvo AI का उपयोग करके प्रति सत्र 10 अद्वितीय अंग्रेजी वाक्य उत्पन्न करता है, जो आपके CEFR स्तर के अनुसार हैं।" }, { question: "कौन से स्तर समर्थित हैं?", answer: "सभी CEFR स्तर: A1 से C2 तक।" }, { question: "क्या वाक्य हर बार अलग होते हैं?", answer: "हाँ। AI हर सत्र में पूरी तरह से नए वाक्य बनाता है।" }, { question: "क्या मैं उच्चारण सुन सकता हूँ?", answer: "हाँ। प्रत्येक वाक्य के बगल में स्पीकर आइकन पर क्लिक करें।" }, { question: "क्या यह मुफ्त है?", answer: "हाँ। Lingvo पूरी तरह से मुफ्त है और पंजीकरण की आवश्यकता नहीं है।" }], examples: [{ target: "Could you please speak a little more slowly?", native: "क्या आप कृपया थोड़ा और धीरे बोल सकते हैं?" }, { target: "I have been learning English for five years.", native: "मैं पाँच साल से अंग्रेजी सीख रहा हूँ।" }, { target: "If you need any help, feel free to ask me.", native: "अगर आपको कोई मदद चाहिए, तो बेझिझक मुझसे पूछें।" }, { target: "The manager asked everyone to submit their reports.", native: "प्रबंधक ने सभी से अपनी रिपोर्ट जमा करने को कहा।" }] },
  "persian-english": { title: "تمرین انگلیسی با تمرینات جمله‌سازی مبتنی بر هوش مصنوعی", description: "انگلیسی خود را با Lingvo بهبود دهید. جملاتی که توسط هوش مصنوعی تولید شده‌اند را تمرین کنید، با ترجمه فارسی و نکات گرامری.", faq: [{ question: "Lingvo چگونه به من در یادگیری انگلیسی کمک می‌کند؟", answer: "Lingvo در هر جلسه ۱۰ جمله انگلیسی منحصر به فرد تولید می‌کند که با سطح CEFR شما هماهنگ است." }, { question: "چه سطوحی پشتیبانی می‌شوند؟", answer: "تمام سطوح CEFR: از A1 تا C2." }, { question: "آیا جملات هر بار متفاوتند؟", answer: "بله. هوش مصنوعی در هر جلسه جملات کاملاً جدید تولید می‌کند." }, { question: "آیا می‌توانم تلفظ را بشنوم؟", answer: "بله. روی آیکون بلندگو کنار هر جمله کلیک کنید." }, { question: "آیا رایگان است؟", answer: "بله. Lingvo کاملاً رایگان و بدون نیاز به ثبت‌نام است." }], examples: [{ target: "Would you mind repeating that, please?", native: "ممکن است لطفاً آن را تکرار کنید؟" }, { target: "I have been studying English for four years.", native: "من چهار سال است که انگلیسی می‌خوانم." }, { target: "If I finish work early, I will go to the gym.", native: "اگر کارم زودتر تمام شود، به باشگاه می‌روم." }, { target: "The doctor advised me to get more rest.", native: "دکتر به من توصیه کرد بیشتر استراحت کنم." }] },
  "romanian-english": { title: "Exersează engleza cu exerciții de propoziții cu IA", description: "Îmbunătățește-ți engleza cu Lingvo. Exersează propoziții generate de IA adaptate nivelului tău CEFR, cu traduceri în română.", faq: [{ question: "Cum mă ajută Lingvo să învăț engleza?", answer: "Lingvo generează 10 propoziții unice în engleză per sesiune, adaptate nivelului tău CEFR, cu traduceri în română." }, { question: "Ce niveluri sunt disponibile?", answer: "Toate nivelurile CEFR: de la A1 la C2." }, { question: "Propozițiile sunt mereu diferite?", answer: "Da. IA generează propoziții complet noi la fiecare sesiune." }, { question: "Pot asculta pronunția?", answer: "Da. Apasă pe iconița difuzorului de lângă fiecare propoziție." }, { question: "Este gratuit?", answer: "Da. Lingvo este complet gratuit și nu necesită înregistrare." }], examples: [{ target: "Could you help me find my way to the hotel?", native: "Mă puteți ajuta să găsesc drumul către hotel?" }, { target: "I have been studying English since I was ten.", native: "Învăț engleză de când aveam zece ani." }, { target: "If you read more books, your vocabulary will grow.", native: "Dacă citești mai multe cărți, vocabularul tău va crește." }, { target: "My boss asked me to prepare the presentation.", native: "Șeful meu m-a rugat să pregătesc prezentarea." }] },
  "ukrainian-english": { title: "Практикуйте англійську з вправами на основі ШІ", description: "Покращуйте свою англійську з Lingvo. Практикуйте речення, згенеровані ШІ, адаптовані до вашого рівня CEFR, з українськими перекладами.", faq: [{ question: "Як Lingvo допомагає мені вчити англійську?", answer: "Lingvo генерує 10 унікальних англійських речень за сесію, адаптованих до вашого рівня CEFR, з українськими перекладами." }, { question: "Які рівні підтримуються?", answer: "Усі рівні CEFR: від A1 до C2." }, { question: "Чи завжди речення різні?", answer: "Так. ШІ генерує повністю нові речення кожну сесію." }, { question: "Чи можу я слухати вимову?", answer: "Так. Натисніть на іконку динаміка поруч з кожним реченням." }, { question: "Це безкоштовно?", answer: "Так. Lingvo повністю безкоштовний і не потребує реєстрації." }], examples: [{ target: "Do you mind if I open the window?", native: "Ви не проти, якщо я відкрию вікно?" }, { target: "I have been learning English for three years.", native: "Я вчу англійську вже три роки." }, { target: "If she calls, tell her I will be back soon.", native: "Якщо вона зателефонує, скажіть їй, що я скоро повернуся." }, { target: "The professor asked us to write an essay.", native: "Професор попросив нас написати есе." }] },
  "czech-english": { title: "Procvičujte angličtinu s AI cvičeními vět", description: "Zlepšete svou angličtinu s Lingvo. Procvičujte věty generované AI přizpůsobené vašemu CEFR úrovni, s českými překlady.", faq: [{ question: "Jak mi Lingvo pomáhá učit se anglicky?", answer: "Lingvo generuje 10 unikátních anglických vět za relaci, přizpůsobených vašemu CEFR úrovni, s českými překlady." }, { question: "Jaké úrovně jsou podporovány?", answer: "Všechny úrovně CEFR: od A1 po C2." }, { question: "Jsou věty vždy jiné?", answer: "Ano. AI generuje zcela nové věty v každé relaci." }, { question: "Mohu poslouchat výslovnost?", answer: "Ano. Klikněte na ikonu reproduktoru vedle každé věty." }, { question: "Je to zdarma?", answer: "Ano. Lingvo je zcela zdarma bez registrace." }], examples: [{ target: "Excuse me, is this seat taken?", native: "Promiňte, je toto místo obsazené?" }, { target: "I have been working here for two years.", native: "Pracuji tady už dva roky." }, { target: "If you don't understand, please ask me again.", native: "Pokud nerozumíte, zeptejte se mě znovu." }, { target: "She asked me to pick her up from the airport.", native: "Požádala mě, abych ji vyzvedl z letiště." }] },
  "hungarian-english": { title: "Gyakorolj angolul AI-alapú mondatgyakorlatokkal", description: "Fejleszd az angolod a Lingvo-val. Gyakorolj AI által generált mondatokat a CEFR szintednek megfelelően, magyar fordításokkal.", faq: [{ question: "Hogyan segít a Lingvo az angol tanulásban?", answer: "A Lingvo AI segítségével munkamenetenként 10 egyedi angol mondatot generál, a CEFR szintedhez igazítva, magyar fordításokkal." }, { question: "Milyen szintek támogatottak?", answer: "Az összes CEFR szint: A1-től C2-ig." }, { question: "Mindig mások a mondatok?", answer: "Igen. Az AI minden munkamenetben teljesen új mondatokat generál." }, { question: "Meghallgathatom a kiejtést?", answer: "Igen. Kattints a hangszóró ikonra minden mondat mellett." }, { question: "Ingyenes?", answer: "Igen. A Lingvo teljesen ingyenes és nem igényel regisztrációt." }], examples: [{ target: "Could you tell me what time the store closes?", native: "Meg tudná mondani, mikor zár a bolt?" }, { target: "I have been studying English since primary school.", native: "Általános iskola óta tanulok angolul." }, { target: "If you practice regularly, you will see results.", native: "Ha rendszeresen gyakorolsz, látni fogod az eredményeket." }, { target: "My teacher asked me to give a short presentation.", native: "A tanárom megkért, hogy tartsak egy rövid prezentációt." }] },
};

export function getPracticeContent(pairSlug: string): PracticePageContent | null {
  return PRACTICE_CONTENT[pairSlug] ?? null;
}
