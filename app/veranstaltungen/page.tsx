import type { Metadata } from "next";
import { EVENTS } from "@/lib/data";
import EventsList from "@/components/EventsList";

export const metadata: Metadata = {
  title: "Veranstaltungen",
  description: "Alle Veranstaltungen, Touren und Kurse der Naturfreunde Wilhelmsburg – von Wanderungen bis zu Skitouren.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-800 to-green-700 pt-28 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
            📅 Programm 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Veranstaltungen</h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            Touren, Kurse und Events – für jedes Niveau und jede Saison.
          </p>
        </div>
      </div>
      <EventsList events={EVENTS} />
    </div>
  );
}
