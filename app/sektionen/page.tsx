import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mountain, Snowflake, Compass, Bike, Route, Activity, ArrowUpToLine, Footprints } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SECTION_ICONS: Record<string, LucideIcon> = {
  skitouren: Mountain,
  wintersport: Snowflake,
  wandern: Compass,
  mtb: Bike,
  radtouren: Route,
  laufsport: Activity,
  klettern: ArrowUpToLine,
  "nordic-walking": Footprints,
};
import { SECTIONS, EVENTS, SITE } from "@/lib/data";
import { formatDateShort, categoryColor } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sektionen",
  description: "Alle Sektionen der Naturfreunde Wilhelmsburg: Skitouren, Wandern, MTB, Laufsport, Klettern, Nordic Walking und mehr.",
};

export default function SektionenPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-800 to-green-700 pt-28 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Unsere Sektionen</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            8 aktive Sektionen – vom Einstieg bis zum Profi, für die ganze Familie, das ganze Jahr.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {SECTIONS.map((section, i) => {
          const sectionEvents = EVENTS.filter((e) => e.section === section.id).slice(0, 3);
          const isEven = i % 2 === 0;

          return (
            <div
              key={section.id}
              id={section.id}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
            >
              {/* Visual */}
              <div className="w-full lg:w-2/5 flex-shrink-0">
                <div className={`relative rounded-3xl bg-gradient-to-br ${section.color} aspect-video flex items-center justify-center overflow-hidden shadow-lg`}>
                  {(() => { const Icon = SECTION_ICONS[section.id]; return Icon ? <Icon className="w-24 h-24 opacity-80" /> : null; })()}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl px-3 py-2">
                      <div className="text-white font-bold text-sm">{section.title}</div>
                    </div>
                  </div>
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 flex items-center gap-3">
                  {(() => { const Icon = SECTION_ICONS[section.id]; return Icon ? <Icon className="w-7 h-7 text-green-600 flex-shrink-0" /> : null; })()}
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">{section.description}</p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {section.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Upcoming events for this section */}
                {sectionEvents.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                      Nächste Termine
                    </h3>
                    <div className="space-y-2">
                      {sectionEvents.map((event) => (
                        <Link
                          key={event.id}
                          href={`/veranstaltungen#${event.id}`}
                          className="flex items-center justify-between bg-gray-50 hover:bg-green-50 rounded-xl px-3 py-2.5 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColor(event.category)}`}>
                              {formatDateShort(event.date)}
                            </span>
                            <span className="text-sm font-medium text-gray-800 group-hover:text-green-700 transition-colors">
                              {event.title}
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {sectionEvents.length === 0 && (
                  <div className="text-sm text-gray-400 italic">Derzeit keine anstehenden Termine.</div>
                )}

                <div className="mt-4">
                  <a
                    href={`mailto:${SITE.contact.email}?subject=Interesse: Sektion ${section.title}`}
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${section.color} text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-sm`}
                  >
                    Mehr erfahren / Anmelden <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="bg-green-50 border-t border-green-100 py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Noch nicht Mitglied?</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Werde jetzt Mitglied und nutze alle Sektionen und Touren der Naturfreunde Wilhelmsburg.
        </p>
        <Link
          href="/mitglied-werden"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-sm"
        >
          Mitglied werden <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
