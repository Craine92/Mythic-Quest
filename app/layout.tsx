import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mythic-quest.example"),
  title: {
    default: "Mythic Quest | TBC Anniversary Gilde",
    template: "%s | Mythic Quest",
  },
  description:
    "Mythic Quest ist eine professionelle World of Warcraft TBC Anniversary Gilde mit Fokus auf HC Instanzen, Teamplay und strukturierten Raid-Progress.",
  openGraph: {
    title: "Mythic Quest | TBC Anniversary Gilde",
    description:
      "Raid-ready Community mit Fokus auf Heroics und Progress. Raidzeiten: Sonntag 18:30-21:30.",
    url: "https://mythic-quest.example",
    siteName: "Mythic Quest",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/logo-mythic-quest.png",
        width: 1024,
        height: 1024,
        alt: "Mythic Quest Guild Crest",
      },
    ],
  },
  icons: {
    icon: "/logo-mythic-quest.png",
    shortcut: "/logo-mythic-quest.png",
    apple: "/logo-mythic-quest.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="font-body antialiased">
        <div className="relative min-h-screen overflow-hidden bg-[#070A12] text-[#EAF0FF]">
          <div aria-hidden className="mq-bg-glow" />
          <div aria-hidden className="mq-bg-watermark" />
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
