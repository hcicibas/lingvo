import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SUPPORTED_LANGUAGES } from "@/constants/languages";
import { SITE_URL, SITE_NAME, TOP_LANGUAGE_PAIRS } from "@/constants/seo";
import { getPracticeContent } from "@/constants/practiceContent";
import PracticePageSEO from "@/components/PracticePageSEO";
import PracticeClient from "./PracticeClient";

function findLanguage(slug: string) {
  return SUPPORTED_LANGUAGES.find(
    (l) => l.name.toLowerCase().replace(/\s*\(.*\)/, "") === slug
  );
}

function parsePair(pair: string) {
  const parts = pair.split("-");
  const dashIndex = parts.indexOf("");
  if (dashIndex !== -1) return null;

  for (let i = 1; i < parts.length; i++) {
    const targetSlug = parts.slice(0, i).join("-");
    const nativeSlug = parts.slice(i).join("-");
    const target = findLanguage(targetSlug);
    const native = findLanguage(nativeSlug);
    if (target && native && target.code !== native.code) {
      return { target, native };
    }
  }
  return null;
}

export function generateStaticParams() {
  return TOP_LANGUAGE_PAIRS.map((p) => ({
    pair: `${p.target}-${p.native}`,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pair: string }>;
}): Promise<Metadata> {
  const { pair } = await params;
  const parsed = parsePair(pair);
  if (!parsed) return {};

  const { target, native } = parsed;
  const content = getPracticeContent(pair);
  const title = content?.title ?? `Practice ${target.name} with ${native.name} Translations`;
  const description = content?.description ?? `Learn ${target.name} with AI-generated sentences and ${native.name} translations. CEFR-based exercises from A1 beginner to C2 mastery.`;
  const url = `${SITE_URL}/practice/${pair}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `Practice ${target.name} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ pair: string }>;
}) {
  const { pair } = await params;
  const parsed = parsePair(pair);
  if (!parsed) notFound();

  const { target, native } = parsed;
  const content = getPracticeContent(pair);

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: content?.title ?? `${target.name} Practice with ${native.name} Translations`,
    description: content?.description ?? `AI-generated ${target.name} sentence practice for ${native.name} speakers. CEFR levels A1 to C2.`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: target.code,
    availableLanguage: [target.code, native.code],
  };

  const faqJsonLd = content
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: content.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <PracticeClient
        targetCode={target.code}
        nativeCode={native.code}
        localizedTitle={content?.title}
        seoContent={
          content ? (
            <PracticePageSEO
              content={content}
              target={target}
              native={native}
            />
          ) : undefined
        }
      />
    </>
  );
}
