import { SITE_URL, SITE_NAME, FAQ_ITEMS } from "@/constants/seo";
import { SUPPORTED_LANGUAGES } from "@/constants/languages";
import HomeClient from "@/components/HomeClient";

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Practice sentences in 25+ languages with AI. Free CEFR-based exercises for A1 to C2 learners.",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "AI-generated practice sentences",
    "25+ supported languages",
    "CEFR levels A1 through C2",
    "Native language translations",
    "Text-to-speech pronunciation",
    "Grammar hints",
  ],
  inLanguage: SUPPORTED_LANGUAGES.map((l) => l.code),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
