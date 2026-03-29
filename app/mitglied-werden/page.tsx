import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Users, Shield, Map, Bus, Camera, BookOpen } from "lucide-react";
import { SITE, MEMBERSHIP_FEES, MEMBERSHIP_BENEFITS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mitglied werden",
  description: "Werde Mitglied bei den Naturfreunden Wilhelmsburg. Alle Infos zu Mitgliedsbeiträgen, Vorteilen und Anmeldung.",
};

const BENEFIT_ICONS = [Map, Shield, BookOpen, Shield, Bus, Camera, Map, Users];

const STEPS = [
  {
    number: "01",
    title: "Formular ausfüllen",
    description: "Fülle das Aufnahmeformular mit deinen Daten aus – dauert nur 2 Minuten.",
  },
  {
    number: "02",
    title: "Mitgliedsbeitrag bezahlen",
    description: "Bezahle den Jahresbeitrag per Überweisung oder im Vereinsbüro.",
  },
  {
    number: "03",
    title: "Mitgliedsausweis erhalten",
    description: "Du erhältst deinen Mitgliedsausweis – und kannst sofort alle Vorteile nutzen.",
  },
];

export default function MitgliedWerdenPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-800 to-green-700 pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
            <Users className="w-4 h-4" />
            {SITE.memberCount.toLocaleString("de-AT")}+ Mitglieder
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Mitglied werden</h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            Werde Teil einer der aktivsten Naturfreunde-Ortsgruppen Niederösterreichs.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {/* Benefits */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Vorteile
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Was du als Mitglied bekommst</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MEMBERSHIP_BENEFITS.map((benefit, i) => {
              const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
              return (
                <div key={benefit} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 hover:bg-green-50 transition-colors">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-green-700" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Beiträge
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Jahresbeiträge 2026</h2>
            <p className="text-gray-500 mt-2">Faire Preise für alle Altersgruppen</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MEMBERSHIP_FEES.map((fee, i) => (
              <div
                key={fee.type}
                className={`relative rounded-2xl border-2 p-6 transition-all ${
                  i === 3
                    ? "border-green-500 bg-green-50 shadow-md"
                    : "border-gray-100 bg-white hover:border-green-200"
                }`}
              >
                {i === 3 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Beliebt
                    </span>
                  </div>
                )}
                <div className="text-3xl font-extrabold text-gray-900 mb-1">
                  {fee.price} €
                  <span className="text-sm font-normal text-gray-400"> /Jahr</span>
                </div>
                <div className="font-bold text-gray-800 mb-1">{fee.type}</div>
                <div className="text-sm text-gray-500">{fee.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              So geht&apos;s
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">In 3 Schritten Mitglied</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto mb-4 shadow-md">
                  {step.number}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Form area */}
        <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Bereit loszulegen?</h2>
          <p className="text-green-200 mb-6 max-w-md mx-auto">
            Schreib uns eine E-Mail mit deinem Namen und gewünschter Mitgliedschaftsart –
            wir melden uns innerhalb von 24 Stunden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${SITE.contact.email}?subject=Mitgliedsantrag&body=Hallo,%0A%0Aich möchte Mitglied bei den Naturfreunden Wilhelmsburg werden.%0A%0AName:%0AMitgliedschaftsart:%0A%0AMit freundlichen Grüßen`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-green-800 font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Jetzt per E-Mail anmelden <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-green-300 text-xs mt-4">
            Oder direkt im Vereinsbüro: {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
          </p>
        </div>
      </div>
    </div>
  );
}
