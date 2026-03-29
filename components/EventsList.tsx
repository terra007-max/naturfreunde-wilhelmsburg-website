"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, Users, Euro, ChevronRight, Info, Mountain, Snowflake, Compass, Bike, Route, Activity, ArrowUpToLine, Footprints, PartyPopper } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { type Event, SECTIONS, SITE } from "@/lib/data";
import { formatDate, categoryColor, spotsPercent } from "@/lib/utils";
import { cn } from "@/lib/utils";
import EventRegistrationModal from "@/components/EventRegistrationModal";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Laufsport: Activity,
  Wandern: Compass,
  Mountainbike: Bike,
  Skitouren: Mountain,
  Wintersport: Snowflake,
  Klettern: ArrowUpToLine,
  "Nordic Walking": Footprints,
  Radtouren: Route,
  Gemeinschaft: PartyPopper,
};

export default function EventsList({ events }: { events: Event[] }) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filter, setFilter] = useState<string>("Alle");

  const sorted = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const categories = ["Alle", ...Array.from(new Set(sorted.map((e) => e.category)))];
  const filtered = filter === "Alle" ? sorted : sorted.filter((e) => e.category === filter);

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-full transition-colors font-medium",
                filter === cat
                  ? "bg-green-600 text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-green-400 hover:text-green-700"
              )}>
              {cat !== "Alle" && (() => { const Icon = CATEGORY_ICONS[cat]; return Icon ? <Icon className="w-3.5 h-3.5" /> : null; })()}
              {cat}
            </button>
          ))}
        </div>

        {/* Events list */}
        <div className="space-y-4">
          {filtered.map((event) => {
            const section = SECTIONS.find((s) => s.id === event.section);
            const pct = event.spotsTotal && event.spotsLeft !== undefined
              ? spotsPercent(event.spotsLeft, event.spotsTotal) : null;
            const soldOut = event.spotsLeft === 0;
            const almostFull = pct !== null && pct >= 80 && !soldOut;
            const isMultiDay = event.endDate && event.endDate !== event.date;

            return (
              <div key={event.id} id={event.id}
                className="bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all overflow-hidden">
                <div className="flex">
                  {/* Date column */}
                  <div className={`flex-shrink-0 w-20 bg-gradient-to-b ${section?.color ?? "from-green-500 to-green-700"} flex flex-col items-center justify-center text-white p-3`}>
                    <span className="text-xs uppercase opacity-80">
                      {new Date(event.date).toLocaleDateString("de-AT", { month: "short" })}
                    </span>
                    <span className="text-3xl font-extrabold leading-none">
                      {new Date(event.date).getDate().toString().padStart(2, "0")}
                    </span>
                    {isMultiDay && (
                      <span className="text-xs opacity-80 mt-0.5">mehrtägig</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 sm:p-5 min-w-0">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColor(event.category)}`}>
                        {event.category}
                      </span>
                      {almostFull && <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium">Fast ausgebucht</span>}
                      {soldOut && <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-medium">Ausgebucht</span>}
                    </div>
                    <h2 className="text-gray-900 font-bold text-base sm:text-lg mb-1">{event.title}</h2>
                    <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">{event.description}</p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {formatDate(event.date)}{event.time ? ` · ${event.time}` : ""}
                        {isMultiDay ? ` – ${formatDate(event.endDate!)}` : ""}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                      {event.spotsTotal && event.spotsLeft !== undefined && (
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {event.spotsLeft} / {event.spotsTotal} Plätze frei
                        </span>
                      )}
                      {event.price !== undefined && (
                        <span className="flex items-center gap-1">
                          <Euro className="w-3.5 h-3.5" />
                          {event.price === 0 ? "Kostenlos" : `${event.price} €`}
                        </span>
                      )}
                    </div>

                    {pct !== null && (
                      <div className="mt-3 max-w-xs">
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full", pct >= 80 ? "bg-amber-500" : "bg-green-500")}
                            style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0 flex items-center pr-4 sm:pr-5">
                    {event.registrationRequired ? (
                      <button
                        onClick={() => !soldOut && setSelectedEvent(event)}
                        disabled={soldOut}
                        className={cn(
                          "inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                          soldOut
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700 text-white"
                        )}>
                        {soldOut ? "Ausgebucht" : "Anmelden"}
                        {!soldOut && <ChevronRight className="w-3.5 h-3.5" />}
                      </button>
                    ) : (
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Info className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Keine Anmeldung</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            Keine Veranstaltungen in dieser Kategorie.
          </div>
        )}

        {/* Contact */}
        <div className="mt-12 bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
          <h3 className="font-bold text-gray-900 mb-2">Fragen zu Veranstaltungen?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Wende dich direkt an uns – wir helfen gerne bei der Anmeldung.
          </p>
          <a href={`mailto:${SITE.contact.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors text-sm">
            {SITE.contact.email}
          </a>
        </div>
      </div>

      {/* Registration Modal */}
      {selectedEvent && (
        <EventRegistrationModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </>
  );
}
