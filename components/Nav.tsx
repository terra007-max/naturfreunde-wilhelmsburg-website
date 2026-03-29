"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Über uns", href: "/ueber-uns" },
  {
    label: "Sektionen",
    href: "/sektionen",
    children: [
      { label: "Skitouren", href: "/sektionen#skitouren" },
      { label: "Wanderungen", href: "/sektionen#wandern" },
      { label: "Mountainbike", href: "/sektionen#mtb" },
      { label: "Radtouren", href: "/sektionen#radtouren" },
      { label: "Laufsport", href: "/sektionen#laufsport" },
      { label: "Klettern", href: "/sektionen#klettern" },
      { label: "Nordic Walking", href: "/sektionen#nordic-walking" },
    ],
  },
  { label: "Veranstaltungen", href: "/veranstaltungen" },
  { label: "Schitourenprogramm", href: "/schitourenprogramm" },
  { label: "Stadtlauf", href: "/stadtlauf" },
  { label: "Mitglied werden", href: "/mitglied-werden" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Naturfreunde Wilhelmsburg"
              width={162}
              height={42}
              className={cn(
                "h-9 w-auto transition-all",
                scrolled ? "[filter:invert(27%)_sepia(60%)_saturate(500%)_hue-rotate(95deg)_brightness(70%)]" : "brightness-0 invert"
              )}
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                {link.children ? (
                  <div
                    onMouseEnter={() => setDropdown(link.href)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        scrolled
                          ? "text-gray-700 hover:text-green-700 hover:bg-green-50"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {dropdown === link.href && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-1 animate-fadeIn">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      scrolled
                        ? "text-gray-700 hover:text-green-700 hover:bg-green-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Burger */}
          <div className="flex items-center gap-2">
            <Link
              href="/mitglied-werden"
              className="hidden lg:inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
            >
              Jetzt Mitglied werden
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-gray-800 font-medium hover:text-green-700 hover:bg-green-50 transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-0.5">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/mitglied-werden"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                Jetzt Mitglied werden
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
