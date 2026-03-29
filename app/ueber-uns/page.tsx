import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Mail, MapPin, Phone } from "lucide-react";
import { SITE, BOARD } from "@/lib/data";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Erfahre mehr über die Naturfreunde Wilhelmsburg-Göblasbruck – Geschichte, Vorstand und unsere Vision.",
};

const VALUES = [
  { icon: "🌿", title: "Naturverbundenheit", desc: "Wir erleben und schützen die Natur – bei jeder Tour, jedem Einsatz." },
  { icon: "🤝", title: "Gemeinschaft", desc: "Über 1.400 Mitglieder, die füreinander da sind – in der Natur und darüber hinaus." },
  { icon: "🧗", title: "Abenteuer", desc: "Von der ersten Wanderung bis zur Hochalpintour – wir begleiten jeden Schritt." },
  { icon: "♻️", title: "Nachhaltigkeit", desc: "Regelmäßige Umwelteinsätze und verantwortungsvoller Umgang mit der Natur." },
];

export default function UeberUnsPage() {
  const age = new Date().getFullYear() - SITE.founded;

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-green-800 to-green-700 pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Über uns</h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            Seit {SITE.founded} aktiv – über {age} Jahre für Natur, Sport und Gemeinschaft in Wilhelmsburg.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Geschichte
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Seit {SITE.founded} für die Natur
            </h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>
                Gegründet am 3. März {SITE.founded} als Wander- und Touristenverein, sind die{" "}
                <strong>{SITE.fullName}</strong> heute eine der aktivsten und mitgliederstärksten
                Ortsgruppen in Niederösterreich – mit über{" "}
                <strong>{SITE.memberCount.toLocaleString("de-AT")} Mitgliedern</strong> und rund{" "}
                <strong>70 ehrenamtlichen Funktionären</strong>.
              </p>
              <p>
                Was als kleine Wandergruppe begann, ist heute eine vielseitige Sportgemeinschaft
                mit 8 aktiven Sektionen – vom Kinderskikurs in Annaberg bis zum hochalpinen
                Skitourenprogramm im Ötztal.
              </p>
              <p>
                Unser Vereinshaus <strong>"{SITE.clubhouse}"</strong> im Stadtpark Wilhelmsburg,
                2011–2012 in Eigenregie errichtet, ist zentraler Treffpunkt für alle Mitglieder.
                Der Vereinsbus <strong>"{SITE.bus}"</strong> bringt uns sicher zu Touren und
                Veranstaltungen.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-8 text-white">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: `${SITE.memberCount}+`, label: "Mitglieder" },
                { value: "8", label: "Sektionen" },
                { value: `${age}+`, label: "Jahre aktiv" },
                { value: "70+", label: "Ehrenamtliche" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs text-green-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-green-600 text-center">
              <div className="text-2xl font-extrabold text-white tracking-wider">{SITE.motto}</div>
              <div className="text-xs text-green-300 mt-1">Unser Vereinsmotto</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Unsere Werte
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Wofür wir stehen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map((v) => (
              <div key={v.title} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 hover:bg-green-50 transition-colors">
                <div className="text-3xl flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                  <p className="text-sm text-gray-600">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Vorstand
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Unser Vorstand</h2>
            <p className="text-gray-500 mt-2 text-sm">~70 ehrenamtliche Funktionäre halten den Verein am Laufen</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BOARD.map((member) => (
              <div key={`${member.role}-${member.name}`} className="bg-gray-50 rounded-2xl p-4">
                <div className="text-xs text-green-700 font-semibold uppercase tracking-wide mb-1">{member.role}</div>
                <div className="font-bold text-gray-900">{member.name}</div>
                {(member.phone || member.email) && (
                  <div className="mt-1.5 space-y-0.5">
                    {member.phone && (
                      <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-700 transition-colors">
                        <Phone className="w-3 h-3" /> {member.phone}
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-700 transition-colors truncate">
                        <Mail className="w-3 h-3 flex-shrink-0" /> {member.email}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Legal / ZVR */}
        <div className="bg-gray-50 rounded-2xl p-6 text-sm text-gray-600 space-y-1">
          <h3 className="font-bold text-gray-900 mb-2">Vereinsdaten</h3>
          <p><strong>ZVR-Zahl:</strong> {SITE.zvr}</p>
          <p><strong>Aufsichtsbehörde:</strong> Bezirkshauptmannschaft St. Pölten</p>
          <p><strong>Vereinssitz:</strong> {SITE.address.street}, {SITE.address.zip} {SITE.address.city}</p>
          <p><strong>Bankverbindung:</strong> {SITE.bank.name}</p>
          <p><strong>IBAN:</strong> {SITE.bank.iban} | <strong>BIC:</strong> {SITE.bank.bic}</p>
        </div>

        {/* Map */}
        <MapEmbed />

        {/* Contact CTA */}
        <div className="bg-green-50 rounded-3xl p-8 text-center">
          <Heart className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Kontakt aufnehmen</h2>
          <div className="space-y-2 text-sm text-gray-600 mb-6">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-green-600" />
              {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-green-600" />
              <a href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`} className="text-green-700 hover:text-green-800">
                {SITE.contact.phone}
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-green-600" />
              <a href={`mailto:${SITE.contact.email}`} className="text-green-700 hover:text-green-800">
                {SITE.contact.email}
              </a>
            </div>
          </div>
          <Link
            href="/mitglied-werden"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
          >
            Jetzt Mitglied werden <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
