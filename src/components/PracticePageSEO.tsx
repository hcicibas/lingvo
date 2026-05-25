import { PracticePageContent } from "@/constants/practiceContent";
import { Language } from "@/constants/languages";

interface PracticePageSEOProps {
  content: PracticePageContent;
  target: Language;
  native: Language;
}

export default function PracticePageSEO({
  content,
  target,
  native,
}: PracticePageSEOProps) {
  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* Description */}
      <section className="py-12 border-b border-border">
        <p className="text-muted text-base sm:text-lg leading-relaxed text-center">
          {content.description}
        </p>
      </section>

      {/* Example Sentences */}
      <section className="py-16 border-b border-border">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">
          {target.flag} {target.name} → {native.flag} {native.name}
        </h2>
        <div className="space-y-4">
          {content.examples.map((ex, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-4 sm:p-5"
            >
              <p
                className="text-white font-medium mb-2 text-base sm:text-lg"
                dir={target.rtl ? "rtl" : "ltr"}
              >
                {ex.target}
              </p>
              <p
                className="text-muted text-sm sm:text-base"
                dir={native.rtl ? "rtl" : "ltr"}
              >
                {ex.native}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">
          FAQ
        </h2>
        <div className="space-y-6">
          {content.faq.map((item, i) => (
            <details
              key={i}
              className="group bg-card rounded-xl border border-border overflow-hidden"
            >
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none text-white font-medium text-sm sm:text-base hover:bg-card-hover transition-colors">
                <span className="pr-4">{item.question}</span>
                <svg
                  className="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-muted text-sm leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
