import type { Metadata } from "next";
import { ApplyForm } from "./apply-form";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Kontakt & Bewerbung",
  description:
    "Bewerbe dich bei Mythic Quest für TBC Anniversary Heroics und Progress-Raids.",
};

export default function ApplyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <SectionHeader
        eyebrow="Kontakt"
        title="Bewerbung bei Mythic Quest"
        description="Wir suchen verlässliche Spieler mit Teamfokus und sauberer Vorbereitung für Heroics und Raid-Progress."
      />
      <ApplyForm />
    </div>
  );
}
