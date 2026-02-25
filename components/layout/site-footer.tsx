import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "Über uns" },
  { href: "/raid", label: "Raidplan" },
  { href: "/heroics", label: "HC Instanzen" },
  { href: "/apply", label: "Bewerben" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#39B6FF]/20 bg-[#070A12]/95">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="font-title text-lg text-[#EAF0FF]">Mythic Quest</p>
          <p className="mt-2 text-sm text-[#AAB4D6]">
            Professionelle TBC Anniversary Guild mit Fokus auf Heroics, Teamplay
            und nachhaltigem Progress.
          </p>
        </div>
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap items-center gap-4">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#AAB4D6] transition hover:text-[#39B6FF]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-[#39B6FF]/15 py-3 text-center text-xs text-[#7F8AB2]">
        © {new Date().getFullYear()} Mythic Quest · Sonntag 18:30-21:30 Raidzeit
      </div>
    </footer>
  );
}
