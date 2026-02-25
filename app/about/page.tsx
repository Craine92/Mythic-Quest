import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Mission, Werte und Recruitment-Fokus der WoW TBC Anniversary Gilde Mythic Quest.",
};

const values = [
  {
    title: "Disziplin",
    description:
      "Pünktlichkeit, Verbindlichkeit und aktive Vorbereitung schaffen eine stabile Raid-Kultur.",
    badge: "Mission",
  },
  {
    title: "Teamplay",
    description:
      "Wir priorisieren Zusammenarbeit vor Ego-Play. Leistung entsteht bei uns als Gruppe.",
    badge: "Values",
  },
  {
    title: "Entwicklung",
    description:
      "Konstruktives Feedback und saubere Analyse sind fester Bestandteil unserer Progress-Mentalität.",
    badge: "Progress",
  },
];

const recruiting = [
  "Zuverlässige Spieler mit klarer Kommunikation",
  "Teamorientierte Klassen- und Rollenwahl",
  "Bereitschaft für Vorbereitung, Consumables und Taktikabsprachen",
  "Respektvoller Umgang und konstante Lernbereitschaft",
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <SectionHeader
        eyebrow="Über Mythic Quest"
        title="Professionelle Gildenkultur mit klarer PvE-Ausrichtung"
        description="Wir verbinden strukturierte Vorbereitung mit einer ruhigen, leistungsorientierten Atmosphäre."
      />

      <section className="grid gap-4 md:grid-cols-3">
        {values.map((value) => (
          <Card key={value.title} {...value} />
        ))}
      </section>

      <section className="rounded-xl border border-[#D6A64A]/30 bg-[#0B1020]/75 p-6">
        <SectionHeader
          eyebrow="Recruitment"
          title="Was wir suchen"
          description="Wir suchen Spieler, die Verantwortung übernehmen und langfristig mit der Gilde wachsen wollen."
        />
        <ul className="mt-6 grid gap-3 text-sm text-[#AAB4D6] sm:text-base">
          {recruiting.map((item) => (
            <li
              key={item}
              className="rounded-md border border-[#39B6FF]/20 bg-[#070A12]/65 px-4 py-3"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
