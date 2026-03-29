import type { Metadata } from "next";
import Link from "next/link";
import { Mountain, ArrowRight, Package, Info } from "lucide-react";
import { SKI_PROGRAM, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Schitourenprogramm 2025/2026",
  description: "Das Schitourenprogramm 2025/2026 der Naturfreunde Wilhelmsburg – von leichten Einsteigertouren bis zu 3000m-Touren im Ötztal.",
};

const DIFFICULTY_COLORS: Record<string, string> = {
  Theorie: "bg-gray-100 text-gray-700",
  Leicht: "bg-green-100 text-green-700",
  Mittel: "bg-blue-100 text-blue-700",
  Schwer: "bg-red-100 text-red-700",
};

export default function SchitourenprogrammPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
            <Mountain className="w-4 h-4" />
            Saison 2025/2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Schitourenprogramm</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Von leichten Einsteigertouren bis zum Ötztal auf 3.000m – geführt von staatlich geprüften Tourenleitern.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Rental info */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-10 flex items-start gap-4">
          <Package className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Skiverleih für Mitglieder</h3>
            <p className="text-sm text-gray-600">
              Wir verleihen Tourenski mit Bindung und Fellen – <strong>€5 für Mitglieder</strong>,
              €10 für Nicht-Mitglieder (Wartungsgebühr). Ansprechpartner: Michael Trillsam (0676 8283157).
            </p>
          </div>
        </div>

        {/* Program list */}
        <div className="space-y-3">
          {SKI_PROGRAM.map((tour, i) => {
            const date = new Date(tour.date);
            const isPast = date < new Date();
            return (
              <div
                key={tour.title}
                className={`flex items-center gap-4 rounded-2xl border p-4 transition-colors ${
                  isPast ? "border-gray-100 bg-gray-50 opacity-60" : "border-gray-100 hover:border-blue-200 hover:bg-blue-50"
                }`}
              >
                {/* Number */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  isPast ? "bg-gray-200 text-gray-500" : "bg-blue-100 text-blue-700"
                }`}>
                  {i + 1}
                </div>

                {/* Date */}
                <div className="flex-shrink-0 text-center w-14">
                  <div className="text-xs text-gray-400 uppercase">
                    {date.toLocaleDateString("de-AT", { month: "short" })}
                  </div>
                  <div className="font-extrabold text-gray-800 text-lg leading-none">
                    {date.getDate().toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-400">{date.getFullYear()}</div>
                </div>

                {/* Title + leader */}
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 text-sm">{tour.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">Leitung: {tour.leader}</div>
                </div>

                {/* Difficulty */}
                <div className={`flex-shrink-0 text-xs px-2.5 py-1 rounded-full font-medium ${DIFFICULTY_COLORS[tour.difficulty]}`}>
                  {tour.difficulty}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact */}
        <div className="mt-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 text-white text-center">
          <Mountain className="w-10 h-10 mx-auto mb-3 opacity-80" />
          <h2 className="text-xl font-extrabold mb-2">Mitfahren oder Fragen?</h2>
          <p className="text-blue-200 text-sm mb-5 max-w-sm mx-auto">
            Anmeldung und Infos zu allen Touren über Obmann Andreas Stubhan.
            Alle Teilnehmer müssen Vereinsmitglieder sein.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+436768253620"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-800 font-bold rounded-xl hover:bg-blue-50 transition-all text-sm"
            >
              0676 82536200 (Andreas Stubhan)
            </a>
            <a
              href={`mailto:${SITE.contact.email}?subject=Anmeldung Schitour`}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl transition-all text-sm"
            >
              Per E-Mail anmelden <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-blue-300">
            <Info className="w-3 h-3" />
            Noch kein Mitglied? <Link href="/mitglied-werden" className="underline hover:text-white">Jetzt beitreten</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
