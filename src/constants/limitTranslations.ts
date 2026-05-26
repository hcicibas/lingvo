export interface LimitModalText {
  title: string;
  message: string;
  comeBack: string;
  upgrade: string;
  comingSoon: string;
}

export const LIMIT_TRANSLATIONS: Record<string, LimitModalText> = {
  en: {
    title: "You've used your free practice for today",
    message:
      "Come back tomorrow for more free practice, or upgrade to Pro for unlimited access.",
    comeBack: "Come Back Tomorrow",
    upgrade: "Upgrade to Pro",
    comingSoon: "Pro is coming soon! We'll notify you when it's ready.",
  },
  tr: {
    title: "Bugünkü ücretsiz pratik hakkını kullandın",
    message:
      "Daha fazla ücretsiz pratik için yarın tekrar gel veya sınırsız erişim için Pro'ya yükselt.",
    comeBack: "Yarın Tekrar Gel",
    upgrade: "Pro'ya Yükselt",
    comingSoon: "Pro yakında geliyor! Hazır olduğunda seni bilgilendireceğiz.",
  },
  es: {
    title: "Has usado tu practica gratuita de hoy",
    message:
      "Vuelve mañana para más practica gratuita o actualiza a Pro para acceso ilimitado.",
    comeBack: "Volver Mañana",
    upgrade: "Actualizar a Pro",
    comingSoon: "¡Pro llegará pronto! Te avisaremos cuando esté listo.",
  },
  fr: {
    title: "Tu as utilisé ta pratique gratuite du jour",
    message:
      "Reviens demain pour plus de pratique gratuite ou passe à Pro pour un accès illimité.",
    comeBack: "Revenir Demain",
    upgrade: "Passer à Pro",
    comingSoon: "Pro arrive bientôt ! Nous te préviendrons quand ce sera prêt.",
  },
  de: {
    title: "Du hast deine kostenlose Übung für heute aufgebraucht",
    message:
      "Komm morgen für mehr kostenlose Übungen zurück oder upgrade auf Pro für unbegrenzten Zugang.",
    comeBack: "Morgen Wiederkommen",
    upgrade: "Auf Pro Upgraden",
    comingSoon: "Pro kommt bald! Wir benachrichtigen dich, wenn es soweit ist.",
  },
  it: {
    title: "Hai esaurito la pratica gratuita di oggi",
    message:
      "Torna domani per altra pratica gratuita o passa a Pro per accesso illimitato.",
    comeBack: "Torna Domani",
    upgrade: "Passa a Pro",
    comingSoon: "Pro arriva presto! Ti avviseremo quando sarà pronto.",
  },
  pt: {
    title: "Você usou sua prática gratuita de hoje",
    message:
      "Volte amanhã para mais prática gratuita ou atualize para Pro para acesso ilimitado.",
    comeBack: "Voltar Amanhã",
    upgrade: "Atualizar para Pro",
    comingSoon: "Pro em breve! Avisaremos quando estiver pronto.",
  },
  ru: {
    title: "Вы использовали бесплатную практику на сегодня",
    message:
      "Возвращайтесь завтра для бесплатной практики или перейдите на Pro для безлимитного доступа.",
    comeBack: "Вернуться Завтра",
    upgrade: "Перейти на Pro",
    comingSoon: "Pro скоро появится! Мы уведомим вас, когда будет готово.",
  },
  ar: {
    title: "لقد استخدمت تمرينك المجاني لهذا اليوم",
    message:
      "عد غداً لمزيد من التمارين المجانية أو قم بالترقية إلى Pro للوصول غير المحدود.",
    comeBack: "العودة غداً",
    upgrade: "الترقية إلى Pro",
    comingSoon: "Pro قادم قريباً! سنخبرك عندما يكون جاهزاً.",
  },
  zh: {
    title: "您今天的免费练习已用完",
    message: "明天回来继续免费练习，或升级到Pro获得无限访问。",
    comeBack: "明天再来",
    upgrade: "升级到Pro",
    comingSoon: "Pro即将推出！准备好后我们会通知您。",
  },
  ja: {
    title: "本日の無料練習を使い切りました",
    message:
      "明日また無料練習をしに来るか、Proにアップグレードして無制限アクセスを手に入れましょう。",
    comeBack: "明日また来る",
    upgrade: "Proにアップグレード",
    comingSoon: "Proは近日公開予定です！準備ができ次第お知らせします。",
  },
  ko: {
    title: "오늘의 무료 연습을 모두 사용했습니다",
    message:
      "내일 다시 와서 무료 연습을 하거나 Pro로 업그레이드하여 무제한 이용하세요.",
    comeBack: "내일 다시 오기",
    upgrade: "Pro로 업그레이드",
    comingSoon: "Pro가 곧 출시됩니다! 준비되면 알려드리겠습니다.",
  },
  nl: {
    title: "Je hebt je gratis oefening voor vandaag gebruikt",
    message:
      "Kom morgen terug voor meer gratis oefeningen of upgrade naar Pro voor onbeperkte toegang.",
    comeBack: "Morgen Terugkomen",
    upgrade: "Upgraden naar Pro",
    comingSoon: "Pro komt binnenkort! We laten het je weten wanneer het klaar is.",
  },
  pl: {
    title: "Wykorzystałeś darmową praktykę na dziś",
    message:
      "Wróć jutro po więcej darmowej praktyki lub przejdź na Pro, aby uzyskać nieograniczony dostęp.",
    comeBack: "Wrócić Jutro",
    upgrade: "Przejdź na Pro",
    comingSoon: "Pro wkrótce! Powiadomimy Cię, gdy będzie gotowe.",
  },
  sv: {
    title: "Du har använt din gratis övning för idag",
    message:
      "Kom tillbaka imorgon för mer gratis övning eller uppgradera till Pro för obegränsad åtkomst.",
    comeBack: "Kom Tillbaka Imorgon",
    upgrade: "Uppgradera till Pro",
    comingSoon: "Pro kommer snart! Vi meddelar dig när det är klart.",
  },
  no: {
    title: "Du har brukt opp din gratis øvelse for i dag",
    message:
      "Kom tilbake i morgen for mer gratis øvelse eller oppgrader til Pro for ubegrenset tilgang.",
    comeBack: "Kom Tilbake I Morgen",
    upgrade: "Oppgrader til Pro",
    comingSoon: "Pro kommer snart! Vi gir deg beskjed når det er klart.",
  },
  da: {
    title: "Du har brugt din gratis øvelse for i dag",
    message:
      "Kom igen i morgen for mere gratis øvelse eller opgrader til Pro for ubegrænset adgang.",
    comeBack: "Kom Igen I Morgen",
    upgrade: "Opgrader til Pro",
    comingSoon: "Pro kommer snart! Vi giver dig besked, når det er klar.",
  },
  el: {
    title: "Χρησιμοποίησες τη δωρεάν εξάσκησή σου για σήμερα",
    message:
      "Επίστρεψε αύριο για περισσότερη δωρεάν εξάσκηση ή αναβάθμισε σε Pro για απεριόριστη πρόσβαση.",
    comeBack: "Επιστροφή Αύριο",
    upgrade: "Αναβάθμιση σε Pro",
    comingSoon: "Το Pro έρχεται σύντομα! Θα σε ειδοποιήσουμε όταν είναι έτοιμο.",
  },
  he: {
    title: "השתמשת בתרגול החינמי שלך להיום",
    message:
      "חזור מחר לתרגול חינמי נוסף או שדרג ל-Pro לגישה ללא הגבלה.",
    comeBack: "לחזור מחר",
    upgrade: "שדרוג ל-Pro",
    comingSoon: "Pro בקרוב! נעדכן אותך כשיהיה מוכן.",
  },
  hi: {
    title: "आपने आज का मुफ्त अभ्यास उपयोग कर लिया है",
    message:
      "अधिक मुफ्त अभ्यास के लिए कल वापस आएं या असीमित पहुंच के लिए Pro में अपग्रेड करें।",
    comeBack: "कल वापस आएं",
    upgrade: "Pro में अपग्रेड करें",
    comingSoon: "Pro जल्द आ रहा है! तैयार होने पर हम आपको सूचित करेंगे।",
  },
  fa: {
    title: "تمرین رایگان امروز شما تمام شد",
    message:
      "فردا برای تمرین رایگان بیشتر برگردید یا برای دسترسی نامحدود به Pro ارتقا دهید.",
    comeBack: "فردا برگرد",
    upgrade: "ارتقا به Pro",
    comingSoon: "Pro به زودی می‌آید! وقتی آماده شد به شما اطلاع می‌دهیم.",
  },
  ro: {
    title: "Ai folosit practica gratuită de azi",
    message:
      "Revino mâine pentru mai multă practică gratuită sau fă upgrade la Pro pentru acces nelimitat.",
    comeBack: "Revin Mâine",
    upgrade: "Upgrade la Pro",
    comingSoon: "Pro vine curând! Te vom anunța când e gata.",
  },
  uk: {
    title: "Ви використали безкоштовну практику на сьогодні",
    message:
      "Поверніться завтра для безкоштовної практики або оновіть до Pro для необмеженого доступу.",
    comeBack: "Повернутися Завтра",
    upgrade: "Оновити до Pro",
    comingSoon: "Pro скоро з'явиться! Ми повідомимо вас, коли буде готово.",
  },
  cs: {
    title: "Využili jste svůj bezplatný trénink na dnes",
    message:
      "Vraťte se zítra pro další bezplatný trénink nebo upgradujte na Pro pro neomezený přístup.",
    comeBack: "Vrátit se Zítra",
    upgrade: "Upgradovat na Pro",
    comingSoon: "Pro přichází brzy! Dáme vám vědět, až bude připraveno.",
  },
  hu: {
    title: "Felhasználtad a mai ingyenes gyakorlásodat",
    message:
      "Gyere vissza holnap több ingyenes gyakorlásért vagy frissíts Pro-ra korlátlan hozzáférésért.",
    comeBack: "Visszajövök Holnap",
    upgrade: "Frissítés Pro-ra",
    comingSoon: "A Pro hamarosan érkezik! Értesítünk, ha elkészült.",
  },
};
