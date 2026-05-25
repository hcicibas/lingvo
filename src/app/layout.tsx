import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { SITE_URL, SITE_NAME } from "@/constants/seo";
import "./globals.css";

const GA_ID = "G-62TYPFXDKK";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lingvo - AI Language Practice | Learn Any Language",
    template: "%s | Lingvo",
  },
  description:
    "Practice sentences in 25+ languages with AI. Free CEFR-based exercises for A1 to C2 learners.",
  keywords: [
    "language learning",
    "sentence practice",
    "CEFR",
    "AI language teacher",
    "learn english",
    "learn spanish",
    "learn french",
    "learn german",
    "learn japanese",
    "learn korean",
    "learn italian",
    "learn portuguese",
    "learn chinese",
    "learn arabic",
    "learn turkish",
    "language exercises",
    "AI tutor",
    "online language practice",
    "free language learning",
    "CEFR levels A1 A2 B1 B2 C1 C2",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Lingvo - AI Language Practice | Learn Any Language",
    description:
      "Practice sentences in 25+ languages with AI. Free CEFR-based exercises for A1 to C2 learners.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Lingvo - AI-Powered Language Practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lingvo - AI Language Practice | Learn Any Language",
    description:
      "Practice sentences in 25+ languages with AI. Free CEFR-based exercises for A1 to C2 learners.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
