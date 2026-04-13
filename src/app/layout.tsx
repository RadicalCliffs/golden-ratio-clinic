import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body-text",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldenratio.clinic"),
  title: "Golden Ratio Clinics — Australian-Registered Telehealth Practitioners",
  description:
    "Telehealth consultations with Australian-registered medical practitioners. Confidential, professional care delivered around your time. Book a free pre-screening call with our registered nurses.",
  keywords: [
    "telehealth Australia",
    "Australian medical practitioners",
    "Ahpra registered doctors",
    "telehealth consultation",
    "registered nurse consultation",
    "confidential medical service",
    "Australia-wide telehealth",
    "Greenleaf Global",
    "Golden Ratio Clinics",
  ],
  openGraph: {
    title:
      "Golden Ratio Clinics — Australian-Registered Telehealth Practitioners",
    description:
      "Telehealth consultations with Australian-registered medical practitioners. Confidential, professional, and designed around your time.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${display.variable} ${body.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
