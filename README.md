# Mythic Quest Website

Professionelle Next.js Website (App Router) fuer die World of Warcraft TBC Anniversary Gilde **Mythic Quest**.

## Setup

1. Dependencies installieren:
```bash
npm install
```
2. Development-Server starten:
```bash
npm run dev
```
3. Build pruefen:
```bash
npm run build
```

## Wichtiger Hinweis zum Logo

Lege die Guild-Logo-Datei hier ab:

- `public/logo-mythic-quest.png`

Die Seite nutzt dieses Logo in Header, Hero, Watermark und OpenGraph-Metadata.

## Projektstruktur

- `app/layout.tsx`: Globales Layout, Header/Footer, globale Metadata.
- `app/page.tsx`: Home mit Hero, Features, Raid Schedule, News.
- `app/about/page.tsx`: Mission, Values, Recruiting-Fokus.
- `app/raid/page.tsx`: Raidzeiten, Roster-Tabelle, Requirements.
- `app/heroics/page.tsx`: HC-Fokus, Dungeon-Cards, Weekly Goals.
- `app/apply/page.tsx`: Bewerbungsseite.
- `app/apply/apply-form.tsx`: Clientseitiges Formular mit Validierung und Success-Message.
- `components/layout/*`: Navigation + Footer.
- `components/ui/*`: Wiederverwendbare UI-Bausteine (Button, Card, Section Header, Schedule Panel, Form Controls).
- `app/globals.css`: Branding-Farben, Typografie, Arcane-Glow/Watermark-Styles.

## Platzhalter-Links

- Discord: `https://discord.gg/cmsRn2Ga`
- Bewerbung: Route `/apply`
