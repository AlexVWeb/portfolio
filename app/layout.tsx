import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeSwitchIcon from "@/components/ThemeSwitchIcon";
import ThemeTransition from "@/components/ThemeTransition";
import { LanguageProvider } from "@/components/contexts/LanguageContext";
import LanguageSwitch from "@/components/LanguageSwitch";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://alexvweb.com"),
  title: {
    default: "AlexVWeb - Développeur React / FullStack | Créateur de sites web",
    template: "%s | AlexVWeb",
  },
  description: "Développeur React et FullStack spécialisé dans la création d'applications web modernes et performantes. Découvrez mes projets et contactez-moi pour vos besoins en développement web.",
  keywords: [
    "développeur web",
    "développeur React",
    "développeur FullStack",
    "créateur de sites web",
    "Next.js",
    "TypeScript",
    "développement web",
    "portfolio",
    "AlexVWeb",
    "Alexandre Valet",
    "applications web",
    "React Developer",
    "FullStack Developer",
  ],
  authors: [{ name: "Alexandre Valet", url: "https://alexvweb.com" }],
  creator: "Alexandre Valet",
  publisher: "AlexVWeb",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: "AlexVWeb",
    title: "AlexVWeb - Développeur React / FullStack | Créateur de sites web",
    description: "Développeur React et FullStack spécialisé dans la création d'applications web modernes et performantes. Découvrez mes projets et contactez-moi pour vos besoins en développement web.",
    images: [
      {
        url: "/logo_alexvweb.png",
        width: 1200,
        height: 630,
        alt: "AlexVWeb - Créateur de sites web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlexVWeb - Développeur React / FullStack | Créateur de sites web",
    description: "Développeur React et FullStack spécialisé dans la création d'applications web modernes et performantes.",
    images: ["/logo_alexvweb.png"],
    creator: "@alexvweb",
  },
  icons: {
    icon: [
      { url: "/logo_alexvweb.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
      { url: "/logo_alexvweb.png", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
      "en-US": "/",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
              <LanguageSwitch />
              <ThemeSwitchIcon />
            </div>
            <ThemeTransition>
              {children}
            </ThemeTransition>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
