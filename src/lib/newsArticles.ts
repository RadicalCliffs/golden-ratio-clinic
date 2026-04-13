/**
 * Shared news article data
 *
 * Used by both the full /news page and the inline news sections
 * on each variation's homepage. Single source of truth so we only
 * have to maintain the list in one place.
 */

export type NewsCategory = "TGA" | "Ahpra" | "Legal" | "Academic" | "Industry";

export type NewsArticle = {
  title: string;
  source: string;
  url: string;
  category: NewsCategory;
  excerpt?: string;
  featured?: boolean;
};

export const NEWS_ARTICLES: NewsArticle[] = [
  // ── Featured (shown on variation homepages) ──────────────────
  {
    title: "Advertising medicinal cannabis products is prohibited",
    source: "Therapeutic Goods Administration",
    url: "https://www.tga.gov.au/resources/guidance/advertising-medicinal-cannabis-products-prohibited",
    category: "TGA",
    excerpt:
      "Official TGA guidance on prohibited advertising of prescription-only medicines, including the reasonable-consumer test and examples of indirect promotion.",
    featured: true,
  },
  {
    title: "Medicinal cannabis prescribing guidance",
    source: "Australian Health Practitioner Regulation Agency",
    url: "https://www.ahpra.gov.au/Resources/Medicinal-cannabis-prescribing.aspx",
    category: "Ahpra",
    excerpt:
      "Ahpra guidance for prescribers outlining obligations around patient assessment, advertising, and clinical decision-making.",
    featured: true,
  },
  {
    title: "Advertising a health service — what you can and can't do",
    source: "Therapeutic Goods Administration",
    url: "https://www.tga.gov.au/resources/guidance/advertising-health-service",
    category: "TGA",
    excerpt:
      "Rules and boundaries for promoting a medical health service without inadvertently advertising specific therapeutic goods.",
    featured: true,
  },

  // ── Regulators ──────────────────────────────────────────────
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

  // ── Legal Analysis ──────────────────────────────────────────
  {
    title: "Ahpra publishes cannabis prescriber guidance",
    source: "MinterEllison",
    url: "https://www.minterellison.com/articles/ahpra-publishes-cannabis-prescriber-guidance",
    category: "Legal",
  },
  {
    title:
      "Regulators crack down on therapeutic goods advertising: TGA, ACCC and Ahpra actions",
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
    title:
      "Prescribing medicinal cannabis: be aware of the medico-legal risks",
    source: "Avant Mutual",
    url: "https://avant.org.au/resources/prescribing-medicinal-cannabis-be-aware-of-the-medico-legal-risks",
    category: "Legal",
  },

  // ── Academic / Press ────────────────────────────────────────
  {
    title: "This medicinal cannabis website bends the rules. Take our quiz",
    source: "The Conversation",
    url: "https://theconversation.com/this-medicinal-cannabis-website-bends-the-rules-take-our-quiz-to-see-why-270685",
    category: "Academic",
  },
  {
    title:
      "TGA advertising and medical cannabis enforcement — top 10 trends",
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

/** Just the featured ones for inline sections on variation homepages. */
export const FEATURED_ARTICLES = NEWS_ARTICLES.filter((a) => a.featured);
