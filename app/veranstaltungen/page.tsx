import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Clock, Users, Euro, ChevronRight, Info } from "lucide-react";
import { EVENTS, SECTIONS } from "@/lib/data";
import { formatDate, categoryColor, spotsPercent } from "@/lib/utils";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Veranstaltungen",
  description: "Alle Veranstaltungen, Touren und Kurse der Naturfreunde Wilhelmsburg – von Wanderungen bis zu Skitouren.",
};

const CATEGORY_ICONS: Record<string, string> = {
  Laufsport: "🏃",
  Wandern: "🥾",
  Mountainbike: "🚵",
  Skitouren: "⛷️",
  Wintersport: "🏔️",
  Klettern: "🧗",
  "Nordic Walking": "🚶",
  Radtouren: "🚴",
};

export default function EventsPage() {
  const categories = Array.from(new Set(EVENTS.map((e) => e.category)));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-800 to-green-700 pt-28 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
            <Calendar className="w-4 h-4" />
            Programm 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Veranstaltungen</h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            Touren, Kurse und Events – für jedes Niveau und jede Saison.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Category filter (decorative in PoC) */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button className="px-4 py-1.5 bg-green-600 text-white text-sm font-semibold rounded-full">
            Alle
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-1.5 bg-white border border-gray-200 text-gray-700 text-sm rounded-full hover:border-green-400 hover:text-green-700 transition-colors"
            >
              {CATEGORY_ICONS[cat] ?? "📅"} {cat}
            </button>
          ))}
        </div>

        {/* Events list */}
        <div className="space-y-4">
          {EVENTS.map((event) => {
            const section = SECTIONS.find((s) => s.id === event.section);
            const pct = event.spotsTotal && event.spotsLeft !== undefined
              ? spotsPercent(event.spotsLeft, event.spotsTotal)
              : null;
            const soldOut = event.spotsLeft === 0;
            const almostFull = pct !== null && pct >= 80 && !soldOut;

            return (
              <div
                key={event.id}
                id={event.id}
                className="bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all overflow-hidden"
              >
                <div className="flex">
                  {/* Date column */}
                  <div className={`flex-shrink-0 w-20 bg-gradient-to-b ${section?.color ?? "from-green-500 to-green-700"} flex flex-col items-center justify-center text-white p-3`}>
                    <span className="text-xs uppercase opacity-80">
                      {new Date(event.date).toLocaleDateString("de-AT", { month: "short" })}
                    </span>
                    <span className="text-3xl font-extrabold leading-none">
                      {new Date(event.date).getDate().toString().padStart(2, "0")}
                    </span>
                    <span className="text-xs opacity-80">
                      {new Date(event.date).getFullYear()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 sm:p-5">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColor(event.category)}`}>
                        {event.category}
                      </span>
                      {almostFull && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium">
                          Fast ausgebucht
                        </span>
                      )}
                      {soldOut && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-medium">
                          Ausgebucht
                        </span>
                      )}
                    </div>

                    <h2 className="text-gray-900 font-bold text-base sm:text-lg mb-1">{event.title}</h2>
                    <p className="text-gray-500 text-sm mb-3 leading-relaxed">{event.description}</p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {formatDate(event.date)}{event.time ? ` um ${event.time} Uhr` : ""}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                      {event.spotsTotal && event.spotsLeft !== undefined && (
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {event.spotsLeft} von {event.spotsTotal} Plätze frei
                        </span>
                      )}
                      {event.price !== undefined && (
                        <span className="flex items-center gap-1">
                          <Euro className="w-3.5 h-3.5" />
                          {event.price === 0 ? "Kostenlos" : `${event.price} €`}
                        </span>
                      )}
                    </div>

                    {/* Spots bar */}
                    {pct !== null && (
                      <div className="mt-3 max-w-xs">
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${pct >= 80 ? "bg-amber-500" : "bg-green-500"}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0 flex items-center pr-4 sm:pr-5">
                    {event.registrationRequired ? (
                      <a
                        href={`mailto:${event.contact ?? SITE.contact.email}?subject=Anmeldung: ${event.title}`}
                        className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                          soldOut
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700 text-white"
                        }`}
                      >
                        {soldOut ? "Ausgebucht" : "Anmelden"}
                        {!soldOut && <ChevronRight className="w-3.5 h-3.5" />}
                      </a>
                    ) : (
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Info className="w-3.5 h-3.5" />
                        Keine Anmeldung nötig
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact */}
        <div className="mt-12 bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
          <h3 className="font-bold text-gray-900 mb-2">Fragen zu Veranstaltungen?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Wende dich direkt an uns – wir helfen gerne bei der Anmeldung oder beantworten offene Fragen.
          </p>
          <a
            href={`mailto:${SITE.contact.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            {SITE.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}
