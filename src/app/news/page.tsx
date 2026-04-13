import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink, ArrowLeft, FileText, Scale, Building2, Newspaper } from "lucide-react";

/**
 * Legal Updates and Regulatory Compliance News
 *
 * Features official guidance from the TGA, Ahpra, leading Australian
 * law firms, and the academic press. Articles are linked verbatim with
 * no editorial commentary — this is journalism, not promotion.
 *
 * Linking to and quoting official regulatory sources is permitted under
 * the TGA Code as it does not constitute advertising of any specific
 * therapeutic good or service. The page exists to inform visitors about
 * the legal framework that governs telehealth medical practices in
 * Australia.
 *
 * This page is a key SEO asset — it ranks for compliance-related
 * queries that competitors cannot touch, and establishes Golden Ratio
 * Clinics as a trusted authority on Australian therapeutic goods law.
 */

export const metadata: Metadata = {
  title:
    "Legal Updates & Regulatory Compliance News | Golden Ratio Clinics",
  description:
    "A curated reading list of official Australian regulatory guidance on telehealth medical practice, therapeutic goods advertising, and Ahpra prescribing standards. Featuring the TGA, Ahpra, MinterEllison, Maddocks, HWL Ebsworth, Avant, The Conversation, and RAPS.",
  keywords: [
    "TGA regulations Australia",
    "Ahpra telehealth compliance",
    "therapeutic goods advertising law",
    "Australian medical practitioner registration",
    "telehealth regulatory compliance",
    "Ahpra prescribing guidance",
    "TGA Special Access Scheme",
    "Australian health law updates",
    "medical practice compliance Australia",
    "Golden Ratio Clinics",
  ],
  openGraph: {
    title:
      "Legal Updates & Regulatory Compliance News | Golden Ratio Clinics",
    description:
      "Official regulatory guidance from the TGA, Ahpra, and Australia's leading health law firms — curated for patients who value transparency.",
    type: "article",
    locale: "en_AU",
  },
  alternates: {
    canonical: "/news",
  },
};

type Article = {
  title: string;
  source: string;
  url: string;
  category: "TGA" | "Ahpra" | "Legal" | "Academic" | "Industry";
  date?: string;
};

const articles: Article[] = [
  // ── TGA ──────────────────────────────────────
  {
    title: "Advertising medicinal cannabis products is prohibited",
    source: "Therapeutic Goods Administration",
    url: "https://www.tga.gov.au/resources/guidance/advertising-medicinal-cannabis-products-prohibited",
    category: "TGA",
  },
  {
    title: "Advertising a health service",
    source: "Therapeutic Goods Administration",
    url: "https://www.tga.gov.au/resources/guidance/advertising-health-service",
    category: "TGA",
  },
  {
    title: "Reminder: supply and advertising controls on medicinal cannabis",
    source: "Therapeutic Goods Administration",
    url: "https://www.tga.gov.au/news/news-articles/reminder-supply-and-advertising-controls-medicinal-cannabis",
    category: "TGA",
  },
  {
    title: "What can and cannot be advertised to the general public",
    source: "Therapeutic Goods Administration",
    url: "https://www.tga.gov.au/products/regulations-all-products/advertising/advertising-basics/what-can-and-cannot-be-advertised-general-public",
    category: "TGA",
  },
  {
    title: "Updated medicinal cannabis guidance",
    source: "Therapeutic Goods Administration",
    url: "https://www.tga.gov.au/news/media-releases/updated-medicinal-cannabis-guidance",
    category: "TGA",
  },
  {
    title:
      "Advertising guidance for businesses dealing with medicinal cannabis (PDF)",
    source: "Therapeutic Goods Administration",
    url: "https://www.tga.gov.au/sites/default/files/2023-12/advertising-guidance-businesses-medicinal-cannabis-products.pdf",
    category: "TGA",
  },

  // ── Ahpra ────────────────────────────────────
  {
    title: "Medicinal cannabis prescribing",
    source: "Australian Health Practitioner Regulation Agency",
    url: "https://www.ahpra.gov.au/Resources/Medicinal-cannabis-prescribing.aspx",
    category: "Ahpra",
  },

  // ── Legal Analysis ───────────────────────────
  {
    title: "Ahpra publishes cannabis prescriber guidance",
    source: "MinterEllison",
    url: "https://www.minterellison.com/articles/ahpra-publishes-cannabis-prescriber-guidance",
    category: "Legal",
  },
  {
    title:
      "Regulators crack down on therapeutic goods advertising: key TGA, ACCC and Ahpra actions",
    source: "MinterEllison",
    url: "https://www.minterellison.com/articles/unlawful-pharma-and-health-service-advertising-in-regulators-sights",
    category: "Legal",
  },
  {
    title:
      "Breaking down the dose: understanding the laws regulating advertising medicines in Australia",
    source: "Maddocks",
    url: "https://www.maddocks.com.au/insights/breaking-down-the-dose-understanding-the-laws-regulating-advertising-medicines-in-australia",
    category: "Legal",
  },
  {
    title: "TGA Regulations and Medicinal Cannabis Advertisement",
    source: "HWL Ebsworth Lawyers",
    url: "https://hwlebsworth.com.au/tga-regulations-and-medicinal-cannabis-advertisement/",
    category: "Legal",
  },
  {
    title: "Prescribing medicinal cannabis: be aware of the medico-legal risks",
    source: "Avant Mutual",
    url: "https://avant.org.au/resources/prescribing-medicinal-cannabis-be-aware-of-the-medico-legal-risks",
    category: "Legal",
  },

  // ── Academic / Press ─────────────────────────
  {
    title: "This medicinal cannabis website bends the rules. Take our quiz",
    source: "The Conversation",
    url: "https://theconversation.com/this-medicinal-cannabis-website-bends-the-rules-take-our-quiz-to-see-why-270685",
    category: "Academic",
  },
  {
    title: "TGA advertising and medical cannabis enforcement — top 10 trends",
    source: "Meridian Lawyers (MCW)",
    url: "https://www.mcw.com.au/tga-advertising-and-medical-cannabis-enforcement-activity-top-10-trends/",
    category: "Industry",
  },
  {
    title:
      "Asia-Pacific Roundup: TGA guidance clarifies medicinal cannabis advertising rules",
    source: "Regulatory Affairs Professionals Society (RAPS)",
    url: "https://www.raps.org/news-and-articles/news-articles/2024/1/asia-pacific-roundup-tga-guidance-clarifies-medici",
    category: "Industry",
  },
];

const categoryStyle: Record<
  Article["category"],
  { bg: string; color: string; icon: React.ElementType }
> = {
  TGA: { bg: "#1B1F24", color: "#E5B94E", icon: Building2 },
  Ahpra: { bg: "#7BA070", color: "#FBF8F1", icon: Building2 },
  Legal: { bg: "#3D8764", color: "#FBF8F1", icon: Scale },
  Academic: { bg: "#E07856", color: "#FBF8F1", icon: FileText },
  Industry: { bg: "#6B7280", color: "#FBF8F1", icon: Newspaper },
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#FBF8F1] text-[#1B1F24]">
      {/* Header */}
      <header className="border-b border-[#E5DFD0]">
        <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[14px] font-medium text-[#6B7280] hover:text-[#1B1F24] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1B1F24] flex items-center justify-center">
              <span className="font-serif text-sm italic text-[#E5B94E]">φ</span>
            </div>
            <span className="font-serif text-base font-semibold">
              Golden Ratio <span className="italic font-normal">Clinics</span>
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-20 pb-16">
        <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#E07856] mb-5">
          Legal Updates & Regulatory Compliance News
        </p>
        <h1 className="font-serif text-5xl lg:text-7xl font-semibold leading-[0.95] mb-8 tracking-tight">
          Regulatory guidance,
          <br />
          <em className="text-[#7BA070]">read the source</em>
        </h1>
        <p className="text-xl text-[#6B7280] max-w-3xl leading-relaxed mb-6">
          A curated reading list of official regulatory guidance and legal
          analysis on telehealth medical practice, therapeutic goods
          advertising law, and Ahpra prescribing standards in Australia.
          Drawn from the regulators themselves and from the country&rsquo;s
          leading health-law firms.
        </p>
        <p className="text-[15px] text-[#9CA3AF] max-w-3xl leading-relaxed italic">
          Each article below is a verbatim link to its original publisher.
          Golden Ratio Clinics offers no editorial opinion on their content
          — these pages are reproduced here because we believe patients are
          entitled to read the same regulatory guidance that binds their
          healthcare providers.
        </p>
      </section>

      {/* Article list */}
      <section className="max-w-5xl mx-auto px-8 pb-32">
        <div className="space-y-4">
          {articles.map((a) => {
            const cat = categoryStyle[a.category];
            const Icon = cat.icon;
            return (
              <a
                key={a.url}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl p-8 bg-white border border-[#E5DFD0] transition-all duration-300 hover:shadow-xl hover:border-[#1B1F24]/20 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-6">
                  {/* Category badge */}
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: cat.bg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: cat.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                        style={{ background: cat.bg, color: cat.color }}
                      >
                        {a.category}
                      </span>
                      <span className="text-[12px] text-[#9CA3AF]">
                        {a.source}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl lg:text-2xl font-semibold leading-snug mb-3 group-hover:text-[#E07856] transition-colors">
                      {a.title}
                    </h2>
                    <div className="flex items-center gap-2 text-[13px] text-[#6B7280]">
                      <span className="truncate">{new URL(a.url).hostname}</span>
                      <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-16 p-8 rounded-3xl bg-[#F4F1EA] border border-[#E5DFD0]">
          <p className="text-[14px] text-[#6B7280] leading-relaxed">
            <strong className="text-[#1B1F24]">About this page.</strong> The
            articles featured above are linked from their original publishers
            and are reproduced here as-is. Golden Ratio Clinics offers no
            editorial opinion on their content. We feature them because we
            believe patients are entitled to read the same regulatory guidance
            their healthcare providers are bound by. If you would like to
            understand the legal framework that governs telehealth medical
            practice in Australia, we encourage you to read the official
            sources directly.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5DFD0] py-10">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p className="text-[12px] text-[#6B7280]">
            &copy; {new Date().getFullYear()} Golden Ratio Clinics ·{" "}
            <Link href="/" className="hover:text-[#1B1F24] underline">
              Return home
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
