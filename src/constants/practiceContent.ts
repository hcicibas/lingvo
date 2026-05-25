export interface PracticePageContent {
  title: string;
  description: string;
  faq: { question: string; answer: string }[];
  examples: { target: string; native: string }[];
}

const PRACTICE_CONTENT: Record<string, PracticePageContent> = {
  "english-turkish": {
    title: "Yapay Zeka ile İngilizce Cümle Pratiği",
    description:
      "Lingvo ile İngilizce cümle pratiği yapın. Yapay zeka tarafından oluşturulan, seviyenize uygun doğal cümlelerle İngilizcenizi geliştirin. A1'den C2'ye kadar tüm CEFR seviyeleri desteklenir.",
    faq: [
      {
        question: "Lingvo ile İngilizce nasıl pratik yapabilirim?",
        answer:
          "CEFR seviyenizi seçin, Lingvo sizin için 10 benzersiz İngilizce cümle oluşturur. Her cümlenin Türkçe çevirisi ve gramer ipuçları bulunur.",
      },
      {
        question: "Hangi seviyeler destekleniyor?",
        answer:
          "A1 (Başlangıç), A2 (Temel), B1 (Orta), B2 (Orta-Üst), C1 (İleri) ve C2 (Ustalık) olmak üzere tüm CEFR seviyeleri desteklenir.",
      },
      {
        question: "Cümleler her seferinde aynı mı?",
        answer:
          "Hayır. Her pratik oturumunda yapay zeka tamamen yeni ve farklı cümleler oluşturur. Günlük yaşam, iş, seyahat, yemek gibi farklı konularda pratik yaparsınız.",
      },
      {
        question: "Cümlelerin telaffuzunu dinleyebilir miyim?",
        answer:
          "Evet. Her cümlenin yanındaki hoparlör simgesine tıklayarak İngilizce telaffuzu dinleyebilirsiniz.",
      },
      {
        question: "Lingvo ücretsiz mi?",
        answer:
          "Evet, Lingvo tamamen ücretsiz bir dil pratik aracıdır. Kayıt olmadan hemen pratik yapmaya başlayabilirsiniz.",
      },
    ],
    examples: [
      { target: "Could you recommend a good restaurant nearby?", native: "Yakınlarda iyi bir restoran önerebilir misiniz?" },
      { target: "I have been working here for three years.", native: "Üç yıldır burada çalışıyorum." },
      { target: "The weather is supposed to get better tomorrow.", native: "Yarın havanın düzelmesi bekleniyor." },
      { target: "She asked me to help her with the project.", native: "Projede ona yardım etmemi istedi." },
    ],
  },

  "spanish-english": {
    title: "Practice Spanish with AI-Powered Sentence Exercises",
    description:
      "Master Spanish with Lingvo's AI-generated practice sentences. Get natural, diverse sentences tailored to your CEFR level with English translations, grammar hints, and pronunciation support.",
    faq: [
      {
        question: "How does Lingvo help me learn Spanish?",
        answer:
          "Lingvo uses AI to generate 10 unique Spanish sentences per session, matched to your CEFR level. Each sentence includes an English translation and grammar hints to help you understand the structure.",
      },
      {
        question: "What Spanish topics are covered?",
        answer:
          "Sentences cover daily life, work, travel, food, technology, relationships, emotions, and nature. The AI ensures each sentence uses a different grammatical structure for varied practice.",
      },
      {
        question: "Can I practice both Latin American and European Spanish?",
        answer:
          "The AI generates standard Spanish sentences that are understood across all Spanish-speaking regions. The vocabulary and structures are universally applicable.",
      },
      {
        question: "How do I hear Spanish pronunciation?",
        answer:
          "Click the speaker icon next to any sentence to hear it spoken aloud using text-to-speech. This helps you learn correct pronunciation and intonation.",
      },
      {
        question: "What level should I start with?",
        answer:
          "If you're new to Spanish, start with A1. If you can handle basic conversations, try B1. The CEFR level guide on the practice page helps you choose the right starting point.",
      },
    ],
    examples: [
      { target: "Me gustaría reservar una mesa para dos personas.", native: "I would like to reserve a table for two people." },
      { target: "¿Podrías decirme cómo llegar a la estación?", native: "Could you tell me how to get to the station?" },
      { target: "Llevo viviendo en esta ciudad desde hace cinco años.", native: "I have been living in this city for five years." },
      { target: "No creo que llueva esta tarde.", native: "I don't think it will rain this afternoon." },
    ],
  },

  "french-english": {
    title: "Practice French with AI-Powered Sentence Exercises",
    description:
      "Improve your French with Lingvo's AI-generated practice sentences. Get natural sentences from A1 beginner to C2 mastery level, complete with English translations and grammar hints.",
    faq: [
      {
        question: "How does Lingvo help me learn French?",
        answer:
          "Lingvo generates 10 unique French sentences per session using AI. Each sentence matches your CEFR level and comes with an English translation and helpful grammar hints.",
      },
      {
        question: "Are the French sentences natural-sounding?",
        answer:
          "Yes. The AI generates sentences that native French speakers would actually use in everyday life, covering topics like daily routines, work, travel, and social interactions.",
      },
      {
        question: "Can beginners use Lingvo for French?",
        answer:
          "Absolutely. Start with A1 level for simple present-tense sentences with basic vocabulary. As you improve, move up through the CEFR levels for more complex grammar and expressions.",
      },
      {
        question: "Does Lingvo teach French grammar rules?",
        answer:
          "Each sentence includes grammar hints that highlight key structures. While not a full grammar course, it helps you learn grammar in context through natural sentence patterns.",
      },
      {
        question: "How often should I practice?",
        answer:
          "For best results, practice daily. Each session takes just a few minutes and gives you 10 fresh sentences, making it easy to build a consistent learning habit.",
      },
    ],
    examples: [
      { target: "Pourriez-vous me montrer le chemin vers le musée?", native: "Could you show me the way to the museum?" },
      { target: "Je travaille dans cette entreprise depuis deux ans.", native: "I have been working at this company for two years." },
      { target: "Il faut que nous partions avant midi.", native: "We need to leave before noon." },
      { target: "Elle a décidé de voyager seule cet été.", native: "She decided to travel alone this summer." },
    ],
  },

  "german-english": {
    title: "Practice German with AI-Powered Sentence Exercises",
    description:
      "Learn German effectively with Lingvo's AI-generated practice sentences. Practice real-world German from A1 to C2, with English translations, grammar hints, and text-to-speech pronunciation.",
    faq: [
      {
        question: "How does Lingvo help me learn German?",
        answer:
          "Lingvo uses AI to create 10 authentic German sentences per session, tailored to your CEFR level. Each comes with an English translation and grammar hints to help you understand sentence structure.",
      },
      {
        question: "Does Lingvo cover German cases and word order?",
        answer:
          "Yes. The AI generates sentences using varied grammatical structures including all four German cases (Nominativ, Akkusativ, Dativ, Genitiv) and different word orders appropriate to your level.",
      },
      {
        question: "Is this suitable for complete beginners?",
        answer:
          "Yes. A1 level sentences use simple structures like present tense, basic word order, and common vocabulary. You'll gradually encounter more complex grammar as you advance through levels.",
      },
      {
        question: "Can I practice German pronunciation?",
        answer:
          "Yes. Click the speaker icon next to any sentence to hear it spoken aloud. This is especially helpful for practicing German sounds like umlauts and compound words.",
      },
      {
        question: "What makes Lingvo different from textbooks?",
        answer:
          "Unlike textbooks, every session generates completely new sentences. You practice with natural, context-rich sentences rather than repetitive drills, keeping your learning fresh and engaging.",
      },
    ],
    examples: [
      { target: "Könnten Sie mir bitte den Weg zum Bahnhof zeigen?", native: "Could you please show me the way to the train station?" },
      { target: "Ich habe gestern einen interessanten Film gesehen.", native: "I watched an interesting movie yesterday." },
      { target: "Wenn ich mehr Zeit hätte, würde ich öfter reisen.", native: "If I had more time, I would travel more often." },
      { target: "Er hat mir erzählt, dass er nächste Woche umzieht.", native: "He told me that he is moving next week." },
    ],
  },

  "japanese-english": {
    title: "Practice Japanese with AI-Powered Sentence Exercises",
    description:
      "Master Japanese with Lingvo's AI-generated practice sentences. Practice reading real Japanese sentences at your CEFR level with English translations, grammar hints, and pronunciation support.",
    faq: [
      {
        question: "How does Lingvo help me learn Japanese?",
        answer:
          "Lingvo generates 10 unique Japanese sentences per session, matched to your proficiency level. Each sentence includes English translation and grammar hints to help you understand particles, verb forms, and sentence patterns.",
      },
      {
        question: "Does Lingvo use hiragana, katakana, and kanji?",
        answer:
          "Yes. The AI generates sentences using natural Japanese writing with the appropriate mix of hiragana, katakana, and kanji for your selected CEFR level.",
      },
      {
        question: "Can I practice Japanese pronunciation?",
        answer:
          "Yes. Click the speaker icon to hear each sentence spoken aloud. This helps you practice Japanese pitch accent and natural speech rhythm.",
      },
      {
        question: "Is this good for JLPT preparation?",
        answer:
          "While Lingvo uses CEFR levels rather than JLPT levels, the sentence difficulty maps well: A1-A2 covers N5-N4, B1-B2 covers N3-N2, and C1-C2 covers N2-N1 level content.",
      },
      {
        question: "What grammar points are covered?",
        answer:
          "Sentences cover a wide range of grammar from basic particles and verb conjugations at A1 to complex structures like passive, causative, and conditional forms at higher levels.",
      },
    ],
    examples: [
      { target: "駅までの道を教えていただけますか？", native: "Could you tell me the way to the station?" },
      { target: "昨日は友達と映画を見に行きました。", native: "Yesterday I went to see a movie with my friend." },
      { target: "もっと早く起きればよかったのに。", native: "I wish I had woken up earlier." },
      { target: "この料理は母が作ったものです。", native: "This dish was made by my mother." },
    ],
  },

  "korean-english": {
    title: "Practice Korean with AI-Powered Sentence Exercises",
    description:
      "Learn Korean with Lingvo's AI-generated practice sentences. Practice natural Korean at your level with English translations, grammar hints, and pronunciation support for every sentence.",
    faq: [
      {
        question: "How does Lingvo help me learn Korean?",
        answer:
          "Lingvo creates 10 unique Korean sentences per session using AI. Each is tailored to your CEFR level and includes English translations and grammar hints covering particles, verb endings, and honorifics.",
      },
      {
        question: "Does Lingvo teach formal and informal Korean?",
        answer:
          "Yes. The AI generates sentences using appropriate speech levels. Lower levels focus on polite speech (존댓말), while advanced levels include casual and formal patterns.",
      },
      {
        question: "Can I practice reading Hangul?",
        answer:
          "Yes. All Korean sentences are written in Hangul. Combined with the speaker icon for pronunciation, this helps reinforce your Hangul reading skills naturally.",
      },
      {
        question: "Is this helpful for TOPIK preparation?",
        answer:
          "While Lingvo uses CEFR levels, the content maps well to TOPIK: A1-A2 aligns with TOPIK I, B1-B2 with TOPIK II (levels 3-4), and C1-C2 with TOPIK II (levels 5-6).",
      },
      {
        question: "What topics do the sentences cover?",
        answer:
          "Sentences span daily life, work, travel, food, technology, relationships, emotions, and nature. This variety ensures you learn vocabulary and grammar across real-life contexts.",
      },
    ],
    examples: [
      { target: "이 근처에 좋은 카페가 있나요?", native: "Is there a good cafe near here?" },
      { target: "저는 서울에서 삼 년째 살고 있습니다.", native: "I have been living in Seoul for three years." },
      { target: "내일 비가 올 것 같아서 우산을 가져가세요.", native: "It looks like it will rain tomorrow, so take an umbrella." },
      { target: "어제 친구와 맛있는 음식을 먹었어요.", native: "I ate delicious food with my friend yesterday." },
    ],
  },

  "italian-english": {
    title: "Practice Italian with AI-Powered Sentence Exercises",
    description:
      "Master Italian with Lingvo's AI-generated practice sentences. Practice natural Italian sentences from A1 to C2, with English translations, grammar hints, and text-to-speech pronunciation.",
    faq: [
      {
        question: "How does Lingvo help me learn Italian?",
        answer:
          "Lingvo generates 10 unique Italian sentences per session tailored to your CEFR level. Each sentence comes with an English translation and grammar hints to help you master Italian sentence structure.",
      },
      {
        question: "Are the sentences conversational Italian?",
        answer:
          "Yes. The AI creates natural, everyday Italian sentences covering topics like ordering food, asking for directions, discussing work, and expressing emotions.",
      },
      {
        question: "Does it cover Italian verb conjugations?",
        answer:
          "Yes. Sentences include varied verb tenses and moods appropriate to your level, from presente and passato prossimo at A1-A2 to congiuntivo and condizionale at higher levels.",
      },
      {
        question: "Can I hear the Italian pronunciation?",
        answer:
          "Yes. Click the speaker icon next to any sentence to hear it spoken with Italian pronunciation. This helps you learn the natural rhythm and intonation of Italian.",
      },
      {
        question: "How is this different from a phrasebook?",
        answer:
          "Unlike phrasebooks with fixed content, Lingvo generates fresh sentences every session. You learn to understand sentence patterns rather than memorizing isolated phrases.",
      },
    ],
    examples: [
      { target: "Potrebbe consigliarmi un buon ristorante qui vicino?", native: "Could you recommend a good restaurant nearby?" },
      { target: "Ieri sera sono andato a teatro con i miei amici.", native: "Last night I went to the theater with my friends." },
      { target: "Se avessi più tempo, viaggerei di più.", native: "If I had more time, I would travel more." },
      { target: "Mi piacerebbe imparare a cucinare la pasta fresca.", native: "I would like to learn how to make fresh pasta." },
    ],
  },

  "portuguese-english": {
    title: "Practice Portuguese with AI-Powered Sentence Exercises",
    description:
      "Improve your Portuguese with Lingvo's AI-generated practice sentences. Practice real-world Portuguese at every CEFR level with English translations, grammar hints, and pronunciation.",
    faq: [
      {
        question: "How does Lingvo help me learn Portuguese?",
        answer:
          "Lingvo uses AI to generate 10 authentic Portuguese sentences per session at your chosen CEFR level. Each includes an English translation and grammar hints for effective learning.",
      },
      {
        question: "Does Lingvo cover Brazilian and European Portuguese?",
        answer:
          "The AI generates standard Portuguese sentences that are understood in both Brazil and Portugal. Core grammar and vocabulary are shared across both variants.",
      },
      {
        question: "What grammar structures are practiced?",
        answer:
          "From basic present tense at A1 to subjunctive mood, complex conditionals, and idiomatic expressions at advanced levels, covering the full range of Portuguese grammar.",
      },
      {
        question: "Can I listen to pronunciation?",
        answer:
          "Yes. Use the speaker icon to hear each sentence spoken aloud. This is especially useful for practicing Portuguese nasal vowels and unique sounds.",
      },
      {
        question: "Is Lingvo free to use?",
        answer:
          "Yes. Lingvo is completely free with no registration required. Start practicing Portuguese sentences immediately at any CEFR level.",
      },
    ],
    examples: [
      { target: "Você poderia me dizer onde fica a estação de metrô?", native: "Could you tell me where the subway station is?" },
      { target: "Eu tenho estudado português há seis meses.", native: "I have been studying Portuguese for six months." },
      { target: "Se eu soubesse, teria te avisado antes.", native: "If I had known, I would have warned you earlier." },
      { target: "Ela me pediu para levar um presente para a festa.", native: "She asked me to bring a gift to the party." },
    ],
  },

  "chinese-english": {
    title: "Practice Chinese with AI-Powered Sentence Exercises",
    description:
      "Learn Mandarin Chinese with Lingvo's AI-generated practice sentences. Practice reading real Chinese sentences at your CEFR level with English translations, grammar hints, and pronunciation.",
    faq: [
      {
        question: "How does Lingvo help me learn Chinese?",
        answer:
          "Lingvo generates 10 unique Mandarin Chinese sentences per session, matched to your CEFR level. Each includes an English translation and grammar hints to help you understand Chinese sentence patterns.",
      },
      {
        question: "Does Lingvo use simplified or traditional characters?",
        answer:
          "Lingvo generates sentences in simplified Chinese characters, which are the standard writing system used in mainland China and widely taught internationally.",
      },
      {
        question: "Is this suitable for HSK preparation?",
        answer:
          "While Lingvo uses CEFR levels, they map well to HSK: A1 covers HSK 1-2, A2-B1 covers HSK 3-4, B2-C1 covers HSK 5, and C2 covers HSK 6 level content.",
      },
      {
        question: "Can I hear Chinese pronunciation?",
        answer:
          "Yes. Click the speaker icon next to any sentence to hear Mandarin pronunciation. This helps you practice tones and natural speech patterns.",
      },
      {
        question: "What grammar points are covered?",
        answer:
          "Sentences cover Chinese grammar from basic subject-verb-object order and measure words at A1 to complex structures like complement constructions and formal expressions at advanced levels.",
      },
    ],
    examples: [
      { target: "请问，最近的地铁站在哪里？", native: "Excuse me, where is the nearest subway station?" },
      { target: "我在这家公司已经工作了三年。", native: "I have been working at this company for three years." },
      { target: "如果明天不下雨，我们就去公园吧。", native: "If it doesn't rain tomorrow, let's go to the park." },
      { target: "她告诉我她下个月要去日本旅行。", native: "She told me she is going to travel to Japan next month." },
    ],
  },

  "arabic-english": {
    title: "Practice Arabic with AI-Powered Sentence Exercises",
    description:
      "Master Arabic with Lingvo's AI-generated practice sentences. Practice Modern Standard Arabic at your CEFR level with English translations, grammar hints, and pronunciation support.",
    faq: [
      {
        question: "How does Lingvo help me learn Arabic?",
        answer:
          "Lingvo generates 10 unique Arabic sentences per session at your CEFR level. Each includes an English translation and grammar hints covering root patterns, verb forms, and case endings.",
      },
      {
        question: "Does Lingvo use Modern Standard Arabic?",
        answer:
          "Yes. Sentences are generated in Modern Standard Arabic (MSA / Fusha), which is understood across all Arabic-speaking countries and used in media, education, and formal communication.",
      },
      {
        question: "Does the interface support right-to-left text?",
        answer:
          "Yes. Arabic sentences are displayed with proper right-to-left text direction, ensuring natural readability for Arabic script.",
      },
      {
        question: "Can I hear Arabic pronunciation?",
        answer:
          "Yes. Use the speaker icon to hear each sentence spoken in Arabic. This helps you practice pronunciation, stress patterns, and the distinctive sounds of Arabic.",
      },
      {
        question: "What grammar is covered at each level?",
        answer:
          "A1-A2 covers basic verb conjugation and noun-adjective agreement. B1-B2 introduces verb forms and complex sentences. C1-C2 covers advanced rhetoric and literary structures.",
      },
    ],
    examples: [
      { target: "هل يمكنك أن تدلني على أقرب مطعم؟", native: "Can you direct me to the nearest restaurant?" },
      { target: "أعمل في هذه الشركة منذ خمس سنوات.", native: "I have been working at this company for five years." },
      { target: "لو كان الطقس جميلاً، لذهبنا إلى الشاطئ.", native: "If the weather were nice, we would have gone to the beach." },
      { target: "طلبت منه أن يساعدني في إنهاء المشروع.", native: "I asked him to help me finish the project." },
    ],
  },

  "turkish-english": {
    title: "Yapay Zeka ile Türkçe Cümle Pratiği",
    description:
      "Lingvo ile Türkçe cümle pratiği yapın. CEFR seviyenize uygun yapay zeka tarafından oluşturulan doğal Türkçe cümlelerle pratik yapın. İngilizce çeviriler ve gramer ipuçları ile desteklenir.",
    faq: [
      {
        question: "Lingvo ile Türkçe nasıl öğrenebilirim?",
        answer:
          "Lingvo, yapay zeka kullanarak CEFR seviyenize uygun 10 benzersiz Türkçe cümle oluşturur. Her cümle İngilizce çevirisi ve gramer ipuçları ile birlikte sunulur.",
      },
      {
        question: "Türkçe için hangi konular işleniyor?",
        answer:
          "Günlük yaşam, iş, seyahat, yemek, teknoloji, ilişkiler, duygular ve doğa gibi çeşitli konularda cümleler oluşturulur.",
      },
      {
        question: "Başlangıç seviyesi için uygun mu?",
        answer:
          "Evet. A1 seviyesinde basit şimdiki zaman ve temel kelime dağarcığı ile başlayabilirsiniz. İlerledikçe daha karmaşık gramer yapılarıyla karşılaşırsınız.",
      },
      {
        question: "Türkçe telaffuzu dinleyebilir miyim?",
        answer:
          "Evet. Her cümlenin yanındaki hoparlör simgesine tıklayarak Türkçe telaffuzu dinleyebilirsiniz.",
      },
      {
        question: "Her oturumda farklı cümleler mi geliyor?",
        answer:
          "Evet. Her pratik oturumunda yapay zeka tamamen yeni cümleler oluşturur. Aynı cümleyi iki kez görmezsiniz.",
      },
    ],
    examples: [
      { target: "Bu akşam seninle buluşabilir miyiz?", native: "Can we meet with you this evening?" },
      { target: "Dün marketten taze meyve aldım.", native: "I bought fresh fruit from the market yesterday." },
      { target: "Hava güzel olursa pikniğe gideriz.", native: "If the weather is nice, we will go on a picnic." },
      { target: "Annesi ona yeni bir kitap hediye etti.", native: "His mother gave him a new book as a gift." },
    ],
  },

  "russian-english": {
    title: "Practice Russian with AI-Powered Sentence Exercises",
    description:
      "Master Russian with Lingvo's AI-generated practice sentences. Practice reading Cyrillic script with natural Russian sentences at your CEFR level, complete with English translations.",
    faq: [
      {
        question: "How does Lingvo help me learn Russian?",
        answer:
          "Lingvo generates 10 unique Russian sentences per session using AI, tailored to your CEFR level. Each sentence includes English translation and grammar hints covering cases, verb aspects, and word order.",
      },
      {
        question: "Does Lingvo cover Russian cases?",
        answer:
          "Yes. Sentences include all six Russian cases (nominative, genitive, dative, accusative, instrumental, prepositional) appropriate to your proficiency level.",
      },
      {
        question: "Can I practice reading Cyrillic?",
        answer:
          "Yes. All Russian sentences are written in Cyrillic script with the speaker icon available for pronunciation, helping you build reading fluency naturally.",
      },
      {
        question: "What verb aspects are covered?",
        answer:
          "The AI generates sentences using both perfective and imperfective verb aspects, helping you understand this essential feature of Russian grammar in context.",
      },
      {
        question: "Is this suitable for complete beginners?",
        answer:
          "Yes. Start with A1 for simple present-tense sentences. As you advance, you'll encounter more complex grammar including perfective verbs, participles, and conditional structures.",
      },
    ],
    examples: [
      { target: "Не могли бы вы подсказать, как пройти к метро?", native: "Could you tell me how to get to the metro?" },
      { target: "Я работаю в этой компании уже три года.", native: "I have been working at this company for three years." },
      { target: "Если бы у меня было больше времени, я бы путешествовал чаще.", native: "If I had more time, I would travel more often." },
      { target: "Она попросила меня помочь ей с проектом.", native: "She asked me to help her with the project." },
    ],
  },

  "dutch-english": {
    title: "Practice Dutch with AI-Powered Sentence Exercises",
    description:
      "Learn Dutch with Lingvo's AI-generated practice sentences. Practice natural Dutch from A1 to C2 with English translations, grammar hints, and pronunciation support.",
    faq: [
      {
        question: "How does Lingvo help me learn Dutch?",
        answer:
          "Lingvo creates 10 unique Dutch sentences per session matched to your CEFR level. Each comes with English translation and grammar hints to help you master Dutch word order and verb placement.",
      },
      {
        question: "Does it cover Dutch word order rules?",
        answer:
          "Yes. The AI generates sentences demonstrating Dutch V2 word order, subordinate clause structures, and separable verbs at appropriate difficulty levels.",
      },
      {
        question: "Is this useful for learning both Dutch and Flemish?",
        answer:
          "Yes. The sentences use standard Dutch (ABN) that is understood in both the Netherlands and Belgium.",
      },
      {
        question: "Can I hear Dutch pronunciation?",
        answer:
          "Yes. Click the speaker icon to hear each sentence spoken aloud, helping you practice Dutch vowel sounds and intonation.",
      },
      {
        question: "What topics are covered?",
        answer:
          "Sentences span daily life, work, travel, food, technology, relationships, emotions, and nature for practical, real-world language practice.",
      },
    ],
    examples: [
      { target: "Kunt u mij vertellen waar het station is?", native: "Can you tell me where the station is?" },
      { target: "Ik woon al vijf jaar in Amsterdam.", native: "I have been living in Amsterdam for five years." },
      { target: "Als het morgen mooi weer is, gaan we naar het strand.", native: "If the weather is nice tomorrow, we will go to the beach." },
      { target: "Hij heeft me gevraagd om hem te helpen.", native: "He asked me to help him." },
    ],
  },

  "polish-english": {
    title: "Practice Polish with AI-Powered Sentence Exercises",
    description:
      "Learn Polish with Lingvo's AI-generated practice sentences. Practice real-world Polish at your CEFR level with English translations, grammar hints covering cases, and pronunciation.",
    faq: [
      {
        question: "How does Lingvo help me learn Polish?",
        answer:
          "Lingvo generates 10 unique Polish sentences per session, matched to your CEFR level. Each includes English translation and grammar hints to help you navigate Polish cases and verb conjugations.",
      },
      {
        question: "Does Lingvo cover Polish grammatical cases?",
        answer:
          "Yes. Sentences use all seven Polish cases appropriate to your level, from basic nominative and accusative at A1 to instrumental and locative at higher levels.",
      },
      {
        question: "Can I practice Polish pronunciation?",
        answer:
          "Yes. Use the speaker icon to hear each sentence, helping you practice Polish sounds like szcz, rz, and nasal vowels.",
      },
      {
        question: "What makes Polish practice challenging?",
        answer:
          "Polish has complex grammar with seven cases, gendered nouns, and verb aspects. Lingvo introduces these gradually through natural sentences at each CEFR level.",
      },
      {
        question: "Is this free to use?",
        answer:
          "Yes. Lingvo is completely free with no registration required. Start practicing Polish immediately.",
      },
    ],
    examples: [
      { target: "Czy mógłbyś mi powiedzieć, gdzie jest najbliższa apteka?", native: "Could you tell me where the nearest pharmacy is?" },
      { target: "Pracuję w tej firmie od trzech lat.", native: "I have been working at this company for three years." },
      { target: "Gdybym miał więcej czasu, podróżowałbym częściej.", native: "If I had more time, I would travel more often." },
      { target: "Poprosiła mnie o pomoc w przygotowaniu kolacji.", native: "She asked me for help preparing dinner." },
    ],
  },

  "swedish-english": {
    title: "Practice Swedish with AI-Powered Sentence Exercises",
    description:
      "Learn Swedish with Lingvo's AI-generated practice sentences. Practice natural Swedish at every CEFR level with English translations, grammar hints, and text-to-speech pronunciation.",
    faq: [
      {
        question: "How does Lingvo help me learn Swedish?",
        answer:
          "Lingvo uses AI to generate 10 unique Swedish sentences per session at your CEFR level. Each includes an English translation and grammar hints for effective learning.",
      },
      {
        question: "What grammar is covered?",
        answer:
          "From basic word order and common verbs at A1 to subordinate clauses, passive voice, and idiomatic expressions at advanced levels.",
      },
      {
        question: "Can I hear Swedish pronunciation?",
        answer:
          "Yes. Click the speaker icon to hear each sentence with Swedish pronunciation, including the distinctive pitch accent.",
      },
      {
        question: "Is Swedish similar to Norwegian and Danish?",
        answer:
          "Yes, they are closely related. Practicing Swedish with Lingvo will also improve your understanding of Norwegian and Danish to some extent.",
      },
      {
        question: "What level should I start with?",
        answer:
          "If you're new to Swedish, start with A1. If you can handle basic conversations, try B1. Each level builds on the previous one.",
      },
    ],
    examples: [
      { target: "Kan du berätta för mig var närmaste busshållplats är?", native: "Can you tell me where the nearest bus stop is?" },
      { target: "Jag har bott i Stockholm i tre år.", native: "I have lived in Stockholm for three years." },
      { target: "Om det inte regnar imorgon, går vi till parken.", native: "If it doesn't rain tomorrow, we'll go to the park." },
      { target: "Hon bad mig att hjälpa henne med flytten.", native: "She asked me to help her with the move." },
    ],
  },

  "norwegian-english": {
    title: "Practice Norwegian with AI-Powered Sentence Exercises",
    description:
      "Master Norwegian with Lingvo's AI-generated practice sentences. Practice Bokmål sentences from A1 to C2 with English translations and grammar hints.",
    faq: [
      {
        question: "How does Lingvo help me learn Norwegian?",
        answer:
          "Lingvo generates 10 unique Norwegian (Bokmål) sentences per session, tailored to your CEFR level with English translations and grammar hints.",
      },
      {
        question: "Does Lingvo use Bokmål or Nynorsk?",
        answer:
          "Lingvo generates sentences in Bokmål, which is the most widely used written form of Norwegian and the standard taught to most learners.",
      },
      {
        question: "Can I hear Norwegian pronunciation?",
        answer:
          "Yes. Use the speaker icon to hear each sentence spoken aloud with Norwegian pronunciation.",
      },
      {
        question: "Is Norwegian easy for English speakers?",
        answer:
          "Norwegian is considered one of the easiest languages for English speakers due to similar vocabulary and grammar. Lingvo helps you build on these similarities.",
      },
      {
        question: "What topics are covered?",
        answer:
          "Sentences cover daily life, work, travel, food, nature, technology, relationships, and emotions for practical Norwegian practice.",
      },
    ],
    examples: [
      { target: "Kan du fortelle meg veien til sentrum?", native: "Can you tell me the way to the city center?" },
      { target: "Jeg har bodd i Oslo i fire år.", native: "I have lived in Oslo for four years." },
      { target: "Hvis det er fint vær i morgen, drar vi på tur.", native: "If the weather is nice tomorrow, we'll go on a trip." },
      { target: "Han ba meg om å hjelpe ham med prosjektet.", native: "He asked me to help him with the project." },
    ],
  },

  "danish-english": {
    title: "Practice Danish with AI-Powered Sentence Exercises",
    description:
      "Learn Danish with Lingvo's AI-generated practice sentences. Practice natural Danish at your CEFR level with English translations, grammar hints, and pronunciation support.",
    faq: [
      {
        question: "How does Lingvo help me learn Danish?",
        answer:
          "Lingvo creates 10 unique Danish sentences per session at your chosen CEFR level, each with English translation and grammar hints.",
      },
      {
        question: "What grammar structures are practiced?",
        answer:
          "From basic V2 word order and present tense at A1 to complex subordinate clauses and passive constructions at advanced levels.",
      },
      {
        question: "Can I hear Danish pronunciation?",
        answer:
          "Yes. Click the speaker icon to practice Danish pronunciation, including the soft 'd' and glottal stop (stød).",
      },
      {
        question: "Is Danish hard to pronounce?",
        answer:
          "Danish pronunciation can be challenging, but Lingvo's text-to-speech feature helps you hear and practice natural Danish sounds with every sentence.",
      },
      {
        question: "Is this free?",
        answer:
          "Yes. Lingvo is completely free with no registration. Start practicing Danish sentences immediately.",
      },
    ],
    examples: [
      { target: "Kan du fortælle mig, hvor den nærmeste station er?", native: "Can you tell me where the nearest station is?" },
      { target: "Jeg har arbejdet her i fem år.", native: "I have worked here for five years." },
      { target: "Hvis det ikke regner, tager vi til stranden.", native: "If it doesn't rain, we'll go to the beach." },
      { target: "Hun bad mig om at hjælpe med opgaven.", native: "She asked me to help with the task." },
    ],
  },

  "greek-english": {
    title: "Practice Greek with AI-Powered Sentence Exercises",
    description:
      "Learn Modern Greek with Lingvo's AI-generated practice sentences. Practice reading Greek script at your CEFR level with English translations and grammar hints.",
    faq: [
      {
        question: "How does Lingvo help me learn Greek?",
        answer:
          "Lingvo generates 10 unique Modern Greek sentences per session, matched to your CEFR level. Each includes an English translation and grammar hints.",
      },
      {
        question: "Does Lingvo use Modern or Ancient Greek?",
        answer:
          "Lingvo generates sentences in Modern Greek (Demotic), which is the standard spoken and written language in Greece today.",
      },
      {
        question: "Can I practice reading the Greek alphabet?",
        answer:
          "Yes. All sentences are written in the Greek alphabet, helping you build reading fluency alongside grammar and vocabulary.",
      },
      {
        question: "Can I hear Greek pronunciation?",
        answer:
          "Yes. Use the speaker icon to hear each sentence spoken with Modern Greek pronunciation.",
      },
      {
        question: "What grammar is covered?",
        answer:
          "From basic verb conjugations and articles at A1 to subjunctive mood, participles, and complex syntax at advanced levels.",
      },
    ],
    examples: [
      { target: "Μπορείτε να μου πείτε πού είναι το μουσείο;", native: "Can you tell me where the museum is?" },
      { target: "Ζω στην Αθήνα εδώ και τρία χρόνια.", native: "I have been living in Athens for three years." },
      { target: "Αν είχα περισσότερο χρόνο, θα ταξίδευα πιο συχνά.", native: "If I had more time, I would travel more often." },
      { target: "Με ρώτησε αν μπορώ να τον βοηθήσω.", native: "He asked me if I could help him." },
    ],
  },

  "hebrew-english": {
    title: "Practice Hebrew with AI-Powered Sentence Exercises",
    description:
      "Learn Modern Hebrew with Lingvo's AI-generated practice sentences. Practice reading Hebrew script at your CEFR level with English translations, right-to-left text support, and pronunciation.",
    faq: [
      {
        question: "How does Lingvo help me learn Hebrew?",
        answer:
          "Lingvo generates 10 unique Hebrew sentences per session at your CEFR level. Each includes English translation and grammar hints covering root patterns and verb conjugations.",
      },
      {
        question: "Does the interface support right-to-left text?",
        answer:
          "Yes. Hebrew sentences are displayed with proper right-to-left direction for natural readability.",
      },
      {
        question: "Does Lingvo use Modern or Biblical Hebrew?",
        answer:
          "Lingvo generates Modern Hebrew (Ivrit) sentences, the living language spoken in Israel today.",
      },
      {
        question: "Can I hear Hebrew pronunciation?",
        answer:
          "Yes. Click the speaker icon to hear each sentence spoken with Modern Hebrew pronunciation.",
      },
      {
        question: "What grammar points are covered?",
        answer:
          "From basic present tense and common binyanim at A1 to complex verb patterns, conditionals, and formal register at advanced levels.",
      },
    ],
    examples: [
      { target: "אתה יכול להגיד לי איפה התחנה הקרובה?", native: "Can you tell me where the nearest station is?" },
      { target: "אני גר בתל אביב כבר חמש שנים.", native: "I have been living in Tel Aviv for five years." },
      { target: "אם הייתי יודע, הייתי אומר לך מראש.", native: "If I had known, I would have told you in advance." },
      { target: "היא ביקשה ממני לעזור לה בפרויקט.", native: "She asked me to help her with the project." },
    ],
  },

  "hindi-english": {
    title: "Practice Hindi with AI-Powered Sentence Exercises",
    description:
      "Learn Hindi with Lingvo's AI-generated practice sentences. Practice reading Devanagari script at your CEFR level with English translations, grammar hints, and pronunciation.",
    faq: [
      {
        question: "How does Lingvo help me learn Hindi?",
        answer:
          "Lingvo generates 10 unique Hindi sentences per session using Devanagari script, tailored to your CEFR level with English translations and grammar hints.",
      },
      {
        question: "Does Lingvo use Devanagari script?",
        answer:
          "Yes. All Hindi sentences are written in Devanagari script, helping you build reading fluency alongside grammar and vocabulary.",
      },
      {
        question: "Can I hear Hindi pronunciation?",
        answer:
          "Yes. Click the speaker icon to hear each sentence with Hindi pronunciation, including aspirated consonants and retroflex sounds.",
      },
      {
        question: "Is Hindi different from Urdu?",
        answer:
          "Hindi and Urdu share core grammar and spoken vocabulary. Lingvo uses Hindi in Devanagari script with standard vocabulary.",
      },
      {
        question: "What level should I start with?",
        answer:
          "Start with A1 for basic postpositions, simple verbs, and everyday vocabulary. Progress through levels for more complex grammar.",
      },
    ],
    examples: [
      { target: "क्या आप मुझे नज़दीकी अस्पताल का रास्ता बता सकते हैं?", native: "Can you tell me the way to the nearest hospital?" },
      { target: "मैं इस शहर में पाँच साल से रह रहा हूँ।", native: "I have been living in this city for five years." },
      { target: "अगर कल बारिश नहीं हुई तो हम पार्क जाएँगे।", native: "If it doesn't rain tomorrow, we will go to the park." },
      { target: "उसने मुझसे प्रोजेक्ट में मदद करने को कहा।", native: "He asked me to help with the project." },
    ],
  },

  "persian-english": {
    title: "Practice Persian with AI-Powered Sentence Exercises",
    description:
      "Learn Persian (Farsi) with Lingvo's AI-generated practice sentences. Practice reading Persian script at your CEFR level with English translations and right-to-left text support.",
    faq: [
      {
        question: "How does Lingvo help me learn Persian?",
        answer:
          "Lingvo generates 10 unique Persian sentences per session at your CEFR level. Each includes English translation and grammar hints covering verb conjugation and ezafe constructions.",
      },
      {
        question: "Does the interface support right-to-left text?",
        answer:
          "Yes. Persian sentences are displayed with proper right-to-left direction for natural readability of the Persian script.",
      },
      {
        question: "Is this Modern Persian or Classical?",
        answer:
          "Lingvo generates Modern Persian (Farsi) sentences used in everyday Iran, making it practical for real-world communication.",
      },
      {
        question: "Can I hear Persian pronunciation?",
        answer:
          "Yes. Use the speaker icon to hear each sentence spoken with Persian pronunciation.",
      },
      {
        question: "What grammar is covered?",
        answer:
          "From basic subject-object-verb order and present tense at A1 to compound verbs, subjunctive mood, and formal register at advanced levels.",
      },
    ],
    examples: [
      { target: "می‌توانید به من بگویید نزدیک‌ترین ایستگاه مترو کجاست؟", native: "Can you tell me where the nearest metro station is?" },
      { target: "من سه سال است که در این شرکت کار می‌کنم.", native: "I have been working at this company for three years." },
      { target: "اگر فردا هوا خوب باشد، به پارک می‌رویم.", native: "If the weather is good tomorrow, we will go to the park." },
      { target: "او از من خواست که در پروژه کمکش کنم.", native: "He asked me to help him with the project." },
    ],
  },

  "romanian-english": {
    title: "Practice Romanian with AI-Powered Sentence Exercises",
    description:
      "Learn Romanian with Lingvo's AI-generated practice sentences. Practice natural Romanian at your CEFR level with English translations, grammar hints, and pronunciation support.",
    faq: [
      {
        question: "How does Lingvo help me learn Romanian?",
        answer:
          "Lingvo generates 10 unique Romanian sentences per session matched to your CEFR level. Each includes English translation and grammar hints.",
      },
      {
        question: "Is Romanian similar to other Romance languages?",
        answer:
          "Yes. Romanian shares vocabulary and grammar with Italian, French, Spanish, and Portuguese. If you know another Romance language, Romanian will feel familiar.",
      },
      {
        question: "What grammar structures are covered?",
        answer:
          "From basic verb conjugations and definite articles at A1 to subjunctive mood, conditional structures, and complex clauses at advanced levels.",
      },
      {
        question: "Can I hear Romanian pronunciation?",
        answer:
          "Yes. Click the speaker icon to hear each sentence with Romanian pronunciation.",
      },
      {
        question: "Is this free?",
        answer:
          "Yes. Lingvo is completely free with no registration required. Start practicing Romanian immediately.",
      },
    ],
    examples: [
      { target: "Puteți să-mi spuneți unde este cea mai apropiată farmacie?", native: "Can you tell me where the nearest pharmacy is?" },
      { target: "Locuiesc în București de cinci ani.", native: "I have been living in Bucharest for five years." },
      { target: "Dacă ar fi mai cald, am merge la plajă.", native: "If it were warmer, we would go to the beach." },
      { target: "M-a rugat să o ajut cu traducerea.", native: "She asked me to help her with the translation." },
    ],
  },

  "ukrainian-english": {
    title: "Practice Ukrainian with AI-Powered Sentence Exercises",
    description:
      "Learn Ukrainian with Lingvo's AI-generated practice sentences. Practice Cyrillic script and Ukrainian grammar at your CEFR level with English translations.",
    faq: [
      {
        question: "How does Lingvo help me learn Ukrainian?",
        answer:
          "Lingvo generates 10 unique Ukrainian sentences per session at your CEFR level. Each includes English translation and grammar hints covering cases, verb aspects, and word order.",
      },
      {
        question: "Does Lingvo use Ukrainian or Russian?",
        answer:
          "Lingvo generates standard Ukrainian sentences using the Ukrainian Cyrillic alphabet, distinct from Russian.",
      },
      {
        question: "Can I practice reading Cyrillic?",
        answer:
          "Yes. All sentences are in Ukrainian Cyrillic script with pronunciation via the speaker icon.",
      },
      {
        question: "What grammar is covered?",
        answer:
          "From basic verb conjugations and common cases at A1 to verb aspects, participles, and complex syntax at advanced levels.",
      },
      {
        question: "Can I hear Ukrainian pronunciation?",
        answer:
          "Yes. Use the speaker icon to hear each sentence spoken with Ukrainian pronunciation.",
      },
    ],
    examples: [
      { target: "Чи можете ви підказати, де найближча зупинка?", native: "Can you tell me where the nearest stop is?" },
      { target: "Я працюю в цій компанії вже чотири роки.", native: "I have been working at this company for four years." },
      { target: "Якби в мене було більше часу, я б подорожував частіше.", native: "If I had more time, I would travel more often." },
      { target: "Вона попросила мене допомогти їй з проєктом.", native: "She asked me to help her with the project." },
    ],
  },

  "czech-english": {
    title: "Practice Czech with AI-Powered Sentence Exercises",
    description:
      "Learn Czech with Lingvo's AI-generated practice sentences. Practice Czech grammar and vocabulary at your CEFR level with English translations and pronunciation support.",
    faq: [
      {
        question: "How does Lingvo help me learn Czech?",
        answer:
          "Lingvo generates 10 unique Czech sentences per session tailored to your CEFR level. Each comes with English translation and grammar hints.",
      },
      {
        question: "Does Lingvo cover Czech cases?",
        answer:
          "Yes. Sentences include all seven Czech cases appropriate to your level, introduced gradually from basic nominative and accusative at A1.",
      },
      {
        question: "Can I hear Czech pronunciation?",
        answer:
          "Yes. Click the speaker icon to hear each sentence with Czech pronunciation, including the ř sound and long vowels.",
      },
      {
        question: "What makes Czech challenging?",
        answer:
          "Czech has seven cases, verb aspects, and complex consonant clusters. Lingvo introduces these gradually through natural sentences at each level.",
      },
      {
        question: "Is this free?",
        answer:
          "Yes. Lingvo is completely free with no registration required. Start practicing Czech immediately.",
      },
    ],
    examples: [
      { target: "Můžete mi říct, kde je nejbližší lékárna?", native: "Can you tell me where the nearest pharmacy is?" },
      { target: "Pracuji v této firmě už tři roky.", native: "I have been working at this company for three years." },
      { target: "Kdybych měl více času, cestoval bych častěji.", native: "If I had more time, I would travel more often." },
      { target: "Požádala mě, abych jí pomohl s úkolem.", native: "She asked me to help her with the task." },
    ],
  },

  "hungarian-english": {
    title: "Practice Hungarian with AI-Powered Sentence Exercises",
    description:
      "Learn Hungarian with Lingvo's AI-generated practice sentences. Practice this unique language at your CEFR level with English translations, grammar hints, and pronunciation.",
    faq: [
      {
        question: "How does Lingvo help me learn Hungarian?",
        answer:
          "Lingvo generates 10 unique Hungarian sentences per session at your CEFR level. Each includes English translation and grammar hints covering vowel harmony, cases, and verb conjugation.",
      },
      {
        question: "Is Hungarian very different from other European languages?",
        answer:
          "Yes. Hungarian is a Finno-Ugric language with unique grammar including vowel harmony, extensive case system, and agglutinative word formation. Lingvo introduces these step by step.",
      },
      {
        question: "What grammar points are covered?",
        answer:
          "From basic word order and present tense at A1 to definite/indefinite conjugation, vowel harmony, and complex suffixes at advanced levels.",
      },
      {
        question: "Can I hear Hungarian pronunciation?",
        answer:
          "Yes. Use the speaker icon to hear each sentence with Hungarian pronunciation, including long vowels and the unique 'gy', 'ny', 'sz' sounds.",
      },
      {
        question: "Is Hungarian hard to learn?",
        answer:
          "Hungarian has complex grammar, but Lingvo breaks it down into manageable steps through natural, level-appropriate sentences with clear explanations.",
      },
    ],
    examples: [
      { target: "Meg tudná mondani, hol van a legközelebbi megálló?", native: "Could you tell me where the nearest stop is?" },
      { target: "Három éve dolgozom ennél a cégnél.", native: "I have been working at this company for three years." },
      { target: "Ha szép lenne az idő, elmennénk kirándulni.", native: "If the weather were nice, we would go on an excursion." },
      { target: "Megkért, hogy segítsek neki a projektben.", native: "He asked me to help him with the project." },
    ],
  },
};

export function getPracticeContent(pairSlug: string): PracticePageContent | null {
  return PRACTICE_CONTENT[pairSlug] ?? null;
}
