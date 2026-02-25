import type { Metadata } from "next";
import { SchedulePanel } from "@/components/ui/schedule-panel";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Raidplan",
  description:
    "Raidzeiten, Setup und Anforderungen der Mythic Quest TBC Anniversary Gilde.",
};

const roster = [
  { role: "Tank", wowClass: "Protection Paladin", player: "Aegor" },
  { role: "Tank", wowClass: "Feral Druid", player: "Thornhide" },
  { role: "Healer", wowClass: "Holy Priest", player: "Lumira" },
  { role: "Healer", wowClass: "Restoration Shaman", player: "Stormleaf" },
  { role: "DPS", wowClass: "Destruction Warlock", player: "Voidmark" },
  { role: "DPS", wowClass: "Combat Rogue", player: "Nightstep" },
];

const requirements = [
  "Pünktlicher Invite und Bereitschaft vor Raidstart",
  "Consumables und Enchants auf aktuellem Stand",
  "Klassenkenntnis und proaktive Kommunikation",
  "Logs sind optional, aber für Analyse erwünscht",
];

export default function RaidPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <SectionHeader
        eyebrow="Raidplan"
        title="Strukturierter Ablauf für konstanten Progress"
        description="Unsere Raids setzen auf klare Rollenverteilung, solide Vorbereitung und ruhige Kommunikation."
      />

      <SchedulePanel
        day="Sonntag"
        time="18:30-21:30"
        note="Invite ab 18:15. Pull um 18:30."
      />

      <section className="overflow-hidden rounded-xl border border-[#39B6FF]/25 bg-[#0B1020]/72">
        <div className="border-b border-[#39B6FF]/20 px-6 py-4">
          <h3 className="font-title text-2xl text-[#EAF0FF]">Roster / Setup</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-[#070A12]/80 text-xs uppercase tracking-[0.16em] text-[#D6A64A]">
              <tr>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Class</th>
                <th className="px-6 py-3">Player</th>
              </tr>
            </thead>
            <tbody>
              {roster.map((row) => (
                <tr
                  key={`${row.role}-${row.player}`}
                  className="border-t border-[#39B6FF]/15 text-sm text-[#AAB4D6]"
                >
                  <td className="px-6 py-4">{row.role}</td>
                  <td className="px-6 py-4">{row.wowClass}</td>
                  <td className="px-6 py-4 text-[#EAF0FF]">{row.player}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-[#D6A64A]/30 bg-[#0B1020]/74 p-6">
        <h3 className="font-title text-2xl text-[#EAF0FF]">Requirements</h3>
        <ul className="mt-4 grid gap-3 text-sm text-[#AAB4D6] sm:text-base">
          {requirements.map((item) => (
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
