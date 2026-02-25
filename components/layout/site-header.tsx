"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LOGO_PATH } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Über uns" },
  { href: "/raid", label: "Raidplan" },
  { href: "/heroics", label: "HC Instanzen" },
  { href: "/apply", label: "Bewerbung" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (href: string) =>
    `rounded-md px-3 py-2 text-sm font-semibold transition ${
      pathname === href
        ? "text-[#39B6FF]"
        : "text-[#EAF0FF] hover:text-[#39B6FF] focus-visible:text-[#39B6FF]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#39B6FF]/20 bg-[#070A12]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-3">
          <div className="relative overflow-hidden rounded-full border border-[#39B6FF]/45 bg-[#0B1020] p-1.5 shadow-[0_0_20px_rgba(31,124,255,0.4)]">
            <Image
              src={LOGO_PATH}
              alt="Mythic Quest Logo"
              width={34}
              height={34}
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-title text-lg text-[#EAF0FF]">Mythic Quest</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#AAB4D6]">
              TBC Anniversary
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Menü öffnen"
          className="rounded-md border border-[#39B6FF]/35 px-3 py-2 text-sm font-semibold text-[#EAF0FF] transition hover:border-[#39B6FF] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menü
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-[#39B6FF]/20 bg-[#070A12]/98 px-4 py-3 md:hidden"
          aria-label="Mobile Navigation"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${linkClass(item.href)} block`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
