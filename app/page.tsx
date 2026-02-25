import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchedulePanel } from "@/components/ui/schedule-panel";
import { SectionHeader } from "@/components/ui/section-header";
import { LOGO_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Mythic Quest: professionelle WoW TBC Anniversary Gilde mit HC Fokus und klarer Raidstruktur.",
};

const features = [
  {
    title: "Raidzeiten",
    description:
      "Fixer Sonntagstermin von 18:30 bis 21:30 mit verlässlicher Planung und klarer Vorbereitung.",
    badge: "Organisation",
  },
  {
    title: "HC Fokus",
    description:
      "Gezielte Heroic Dungeon Runs für Gear, Routinen und effiziente Vorbereitung auf Progress.",
    badge: "PvE",
  },
  {
    title: "Community",
    description:
      "Reifes Umfeld, klare Kommunikation und Hilfsbereitschaft über alle Erfahrungsstufen hinweg.",
    badge: "Teamplay",
  },
  {
    title: "Progress",
    description:
      "Raid-ready Mentalität mit analytischem Anspruch, sauberer Ausführung und stetiger Verbesserung.",
    badge: "Performance",
  },
];

const news = [
  {
    title: "Roster-Update",
    description: "Unsere HC-Kernzeiten werden erweitert. Neue Heiler-Slots sind offen.",
  },
  {
    title: "Karazhan Readiness",
    description:
      "Consumables, Enchants und Klassenabsprachen wurden aktualisiert. Details im Discord.",
  },
  {
    title: "Recruiting-Phase",
    description: "Zuverlässige Tanks und DPS mit Teamfokus werden priorisiert gesucht.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-18 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#D6A64A]">
            World of Warcraft · TBC Anniversary
          </p>
          <h1 className="font-title text-5xl leading-[1.04] text-[#EAF0FF] sm:text-6xl">
            Mythic Quest
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[#AAB4D6] sm:text-lg">
            Eine raid-orientierte Gilde mit klarem HC-Fokus, professioneller
            Vorbereitung und belastbarer Teamkultur. Unser Ziel: konstant
            performen, gemeinsam besser werden, Progress sauber aufbauen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="https://discord.gg/cmsRn2Ga" target="_blank">
              Join Discord
            </Button>
            <Button href="/apply" variant="secondary">
              Bewerben
            </Button>
          </div>
        </div>
        <div className="justify-self-center">
          <div className="relative rounded-2xl border border-[#39B6FF]/35 bg-[#0B1020]/70 p-4 shadow-[0_0_36px_rgba(31,124,255,0.35)]">
            <Image
              src={LOGO_PATH}
              alt="Guild Crest Mythic Quest"
              width={420}
              height={420}
              className="h-auto w-[min(80vw,330px)] rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Stärken"
          title="Raid-ready Struktur für nachhaltigen Progress"
          description="Klare Abläufe und hohe Verlässlichkeit sind der Kern unserer Gildenphilosophie."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <SchedulePanel
          day="Sonntag"
          time="18:30-21:30"
          note="Fokus auf HC Instanzen und gemeinsamer Raid-Progress in TBC Anniversary."
        />
        <div className="rounded-xl border border-[#39B6FF]/20 bg-[#0B1020]/70 p-6">
          <SectionHeader
            eyebrow="Raid Schedule"
            title="Verlässliche Prime-Time"
            description="Unsere Kernzeit ist fix gesetzt. Wer mit uns spielt, plant diese Zeit verbindlich ein."
          />
        </div>
      </section>

      <section className="space-y-6 pb-4">
        <SectionHeader
          eyebrow="Aktuelles"
          title="News aus der Gilde"
          description="Kurze Updates zu Roster, Progress und Organisation."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {news.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              badge="Update"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
