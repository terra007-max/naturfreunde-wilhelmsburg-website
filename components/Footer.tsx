import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-3">
              <Image
                src="/logo-ortsgruppe.png"
                alt="Naturfreunde Wilhelmsburg-Göblasbruck"
                width={280}
                height={85}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-4">
              {SITE.tagline}
            </p>
            <p className="text-green-300 text-xs">
              Ortsgruppe Wilhelmsburg-Göblasbruck<br />
              Gegründet {SITE.founded}
            </p>
          </div>

          {/* Sektionen */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Sektionen</h3>
            <ul className="space-y-2 text-sm">
              {["Skitouren", "Wanderungen", "Mountainbike", "Laufsport", "Klettern", "Nordic Walking", "Radtouren"].map((s) => (
                <li key={s}>
                  <Link href={`/sektionen#${s.toLowerCase().replace(" ", "-")}`} className="text-green-200 hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/veranstaltungen" className="text-green-200 hover:text-white transition-colors">Veranstaltungen</Link>
              </li>
              <li>
                <Link href="/stadtlauf" className="text-green-200 hover:text-white transition-colors">Stadtlauf</Link>
              </li>
              <li>
                <Link href="/mitglied-werden" className="text-green-200 hover:text-white transition-colors">Mitglied werden</Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-green-200 hover:text-white transition-colors">Über uns</Link>
              </li>
              <li>
                <a href={SITE.links.gallery} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-200 hover:text-white transition-colors">
                  Fotogalerie <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={SITE.links.routePortal} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-200 hover:text-white transition-colors">
                  Tourenportal <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-green-200">
                  {SITE.address.street}<br />
                  {SITE.address.zip} {SITE.address.city}<br />
                  {SITE.address.country}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`} className="text-green-200 hover:text-white transition-colors">
                  {SITE.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href={`mailto:${SITE.contact.email}`} className="text-green-200 hover:text-white transition-colors break-all">
                  {SITE.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-green-400">
          <span>© {year} Naturfreunde Wilhelmsburg-Göblasbruck. Alle Rechte vorbehalten.</span>
          <div className="flex items-center gap-4">
            <Link href="/datenschutz" className="hover:text-green-200 transition-colors">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-green-200 transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
