import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Trophy, Clock, ArrowRight, Flag } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "18. Wilhelmsburger Stadtlauf 2026",
  description: "Der 18. Wilhelmsburger Stadtlauf 2026 – 24./25. Juli am Stadtplatz Wilhelmsburg. Fun Run, 10 km und Halbmarathon.",
};

const DISTANCES = [
  { name: "Fun Run", distance: "5 km", time: "offen", level: "Alle – Familien & Kinder", color: "from-green-400 to-green-600", icon: "😊" },
  { name: "Hauptlauf", distance: "10 km", time: "ca. 50–70 min", level: "Freizeitläufer", color: "from-blue-500 to-blue-700", icon: "🏃" },
  { name: "Halbmarathon", distance: "21,1 km", time: "ca. 1:40–2:30h", level: "Erfahrene Läufer", color: "from-purple-500 to-purple-700", icon: "🏅" },
];

export default function StadtlaufPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-700 via-red-600 to-orange-500 pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
            <Flag className="w-4 h-4" />
            18. Auflage – 24./25. Juli 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Wilhelmsburger Stadtlauf 2026</h1>
          <p className="text-red-100 text-lg max-w-xl mx-auto">
            Der jährliche Volkslauf durch Wilhelmsburg – für Familien, Freizeitläufer und ambitionierte Athleten.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Key info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Calendar, label: "Datum", value: "24.–25. Juli 2026", sub: "Freitag & Samstag" },
            { icon: Clock, label: "Start", value: "ab 10:00 Uhr", sub: "Freitag Abend & Samstag" },
            { icon: MapPin, label: "Ort", value: "Stadtplatz", sub: "Wilhelmsburg" },
          ].map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="bg-gray-50 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{label}</div>
              <div className="font-extrabold text-gray-900 text-lg">{value}</div>
              <div className="text-xs text-gray-500">{sub}</div>
            </div>
          ))}
        </div>

        {/* Distances */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Strecken</h2>
            <p className="text-gray-500 mt-2">Für jeden das richtige Rennen</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {DISTANCES.map((d) => (
              <div
                key={d.name}
                className={`relative rounded-3xl bg-gradient-to-br ${d.color} text-white p-6 shadow-lg`}
              >
                <div className="text-4xl mb-3">{d.icon}</div>
                <div className="text-3xl font-extrabold mb-1">{d.distance}</div>
                <div className="font-bold text-lg mb-3">{d.name}</div>
                <div className="space-y-1.5 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" /> {d.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-3.5 h-3.5 flex-shrink-0" /> {d.level}
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Lauftreff note */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-5 flex items-start gap-4">
          <div className="text-3xl flex-shrink-0">🏃</div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Vorbereitung beim Lauftreff</h3>
            <p className="text-sm text-gray-600">
              Bereite dich mit unserem wöchentlichen Lauftreff (jeden Dienstag 18:00–20:00 Uhr im HUGO) optimal auf den Stadtlauf vor.
              Alle Tempos willkommen – vom Einsteiger bis zum Marathonläufer.
            </p>
            <Link href="/sektionen#laufsport" className="text-red-600 hover:text-red-800 text-sm font-medium mt-2 inline-flex items-center gap-1">
              Zum Lauftreff <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Register CTA */}
        <div className="bg-gradient-to-br from-red-600 to-orange-500 rounded-3xl p-8 text-white text-center">
          <Trophy className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-extrabold mb-2">Jetzt anmelden!</h2>
          <p className="text-red-100 mb-6 max-w-md mx-auto">
            Anmeldung über das offizielle Stadtlauf-Portal. Frühbucherrabatt verfügbar.
            Teilnahme inkl. Urkunde, Verpflegung und Finisher-Shirt.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://stadtlauf.naturfreunde-wilhelmsburg.at"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-red-700 font-bold rounded-xl hover:bg-red-50 transition-all shadow-lg"
            >
              Zur offiziellen Anmeldung <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE.contact.email}?subject=Frage Stadtlauf 2026`}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl transition-all"
            >
              Fragen? Schreib uns
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
