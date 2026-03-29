"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, Users, Euro, ArrowLeft, ChevronRight, Bus, Info } from "lucide-react";
import { type Event, type ActivitySection, SITE } from "@/lib/data";
import { formatDate, categoryColor } from "@/lib/utils";
import EventRegistrationModal from "@/components/EventRegistrationModal";
import SectionIcon from "@/components/SectionIcon";

type Props = {
  event: Event;
  section: ActivitySection | undefined;
  related: Event[];
};

export default function EventDetailClient({ event, section, related }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const soldOut = event.spotsLeft === 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-br ${section?.color ?? "from-green-800 to-green-700"} pt-28 pb-12 px-4 sm:px-6 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <SectionIcon id={event.section} className="w-96 h-96 absolute -right-20 -bottom-20" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <Link href="/veranstaltungen"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Alle Veranstaltungen
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${categoryColor(event.category)}`}>
              {event.category}
            </span>
            {soldOut && <span className="text-xs px-2.5 py-1 rounded-full bg-red-100 text-red-700 font-medium">Ausgebucht</span>}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">{event.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(event.date)}{event.endDate && event.endDate !== event.date ? ` – ${formatDate(event.endDate)}` : ""}
            </span>
            {event.time && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {event.time}{event.endTime ? ` – ${event.endTime}` : ""} Uhr
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {event.location}
            </span>
            {event.price !== undefined && (
              <span className="flex items-center gap-1.5">
                <Euro className="w-4 h-4" />
                {event.price === 0 ? "Kostenlos" : `${event.price} €`}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="font-bold text-gray-900 text-lg mb-3">Über diese Veranstaltung</h2>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </div>

            {/* Spots bar */}
            {event.spotsTotal && event.spotsLeft !== undefined && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-600" />
                    Verfügbare Plätze
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {event.spotsLeft} / {event.spotsTotal}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${((event.spotsTotal - event.spotsLeft) / event.spotsTotal) >= 0.8 ? "bg-amber-500" : "bg-green-500"}`}
                    style={{ width: `${((event.spotsTotal - event.spotsLeft) / event.spotsTotal) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Section info */}
            {section && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`p-2 rounded-xl bg-gradient-to-br ${section.color} text-white/90`}>
                    <SectionIcon id={section.id} className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="font-bold text-gray-900">{section.title}</div>
                    <div className="text-xs text-gray-500">Veranstaltende Sektion</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{section.description}</p>
                <Link href={`/sektionen#${section.id}`}
                  className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-sm font-medium mt-3 transition-colors">
                  Mehr zur Sektion <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* CTA */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              {event.registrationRequired ? (
                <>
                  <button
                    onClick={() => !soldOut && setModalOpen(true)}
                    disabled={soldOut}
                    className={`w-full py-3 rounded-xl font-bold text-sm transition-colors mb-3 ${
                      soldOut
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700 text-white shadow-sm"
                    }`}>
                    {soldOut ? "Ausgebucht" : "Jetzt anmelden"}
                  </button>
                  <p className="text-xs text-gray-400 text-center">Anmeldung per E-Mail</p>
                </>
              ) : (
                <div className="flex items-start gap-2 text-sm text-gray-500">
                  <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  Keine Anmeldung erforderlich – einfach vorbeikommen!
                </div>
              )}
            </div>

            {/* Bus booking */}
            <Link href="/vereinsbus"
              className="flex items-center gap-3 bg-green-50 hover:bg-green-100 border border-green-100 rounded-2xl p-4 transition-colors group">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bus className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm group-hover:text-green-700 transition-colors">Mit Bus „Anton" fahren</div>
                <div className="text-xs text-gray-500">Sitzplatz reservieren</div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 ml-auto transition-colors" />
            </Link>

            {/* Contact */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm text-sm">
              <div className="font-bold text-gray-900 mb-2">Fragen?</div>
              <a href={`mailto:${event.contact ?? SITE.contact.email}`}
                className="text-green-600 hover:text-green-700 transition-colors break-all">
                {event.contact ?? SITE.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Related events */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-extrabold text-gray-900 text-xl mb-4">Weitere Veranstaltungen dieser Sektion</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((ev) => (
                <Link key={ev.id} href={`/veranstaltungen/${ev.id}`}
                  className="bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm p-4 transition-all group">
                  <div className="text-xs text-gray-400 mb-1">{formatDate(ev.date)}</div>
                  <div className="font-bold text-gray-900 text-sm group-hover:text-green-700 transition-colors">{ev.title}</div>
                  <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />{ev.location.split(",")[0]}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {modalOpen && <EventRegistrationModal event={event} onClose={() => setModalOpen(false)} />}
    </div>
  );
}
