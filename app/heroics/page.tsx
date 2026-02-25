import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "HC Instanzen",
  description:
    "Heroic Dungeon Fokus der Mythic Quest Gilde für Gear, Routinen und Teamkoordination.",
};

const dungeons = [
  {
    title: "The Shattered Halls (HC)",
    description:
      "Starker Benchmark für Tank-Stabilität, Cleave-Kontrolle und sauberes Interrupt-Management.",
    badge: "Hellfire Citadel",
  },
  {
    title: "Shadow Labyrinth (HC)",
    description:
      "Koordination bei Kontrollmechaniken und Fokuswechseln stärkt die Gesamt-Disziplin.",
    badge: "Auchindoun",
  },
  {
    title: "The Steamvault (HC)",
    description:
      "Effiziente Pull-Strukturen und Boss-Routinen für konstanten Dungeon-Flow.",
    badge: "Coilfang Reservoir",
  },
  {
    title: "The Arcatraz (HC)",
    description:
      "Anspruchsvolle Trash- und Bossphasen, ideal für Defensiv-Cooldown-Planung.",
    badge: "Tempest Keep",
  },
];

const goals = [
  "Mindestens 2 organisierte HC-Runs pro Kernmitglied",
  "Priorisierte Key-Farm für Recruits und Twinks",
  "Verbesserung von Pull-Speed ohne Qualitätsverlust",
];

export default function HeroicsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <SectionHeader
        eyebrow="Heroic Dungeons"
        title="HC Instanzen als Fundament für Raid-Performance"
        description="Unsere Heroic-Runs sind kein Nebenschauplatz, sondern Kernbaustein für Gear-Stand, Teamkoordination und Klassenroutine."
      />

      <section className="grid gap-4 md:grid-cols-2">
        {dungeons.map((dungeon) => (
          <Card key={dungeon.title} {...dungeon} />
        ))}
      </section>

      <section className="rounded-xl border border-[#D6A64A]/30 bg-[#0B1020]/74 p-6">
        <h3 className="font-title text-2xl text-[#EAF0FF]">Weekly Goals</h3>
        <ul className="mt-4 grid gap-3 text-sm text-[#AAB4D6] sm:text-base">
          {goals.map((goal) => (
            <li
              key={goal}
              className="rounded-md border border-[#39B6FF]/20 bg-[#070A12]/65 px-4 py-3"
            >
              {goal}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
