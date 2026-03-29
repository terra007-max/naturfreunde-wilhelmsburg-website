import type { Metadata } from "next";
import { CheckCircle2, Users, Shield, Map, Bus, Camera, BookOpen } from "lucide-react";
import { SITE, MEMBERSHIP_BENEFITS } from "@/lib/data";
import MembershipSelector from "@/components/MembershipSelector";

export const metadata: Metadata = {
  title: "Mitglied werden",
  description: "Werde Mitglied bei den Naturfreunden Wilhelmsburg. Alle Infos zu Mitgliedsbeiträgen, Vorteilen und Anmeldung.",
};

const BENEFIT_ICONS = [Map, Shield, BookOpen, Shield, Bus, Camera, Map, Users];

const STEPS = [
  {
    number: "01",
    title: "Mitgliedschaft wählen",
    description: "Wähle deine Mitgliedschaftsart – Erwachsene, Familie, Kinder oder Senior:innen.",
  },
  {
    number: "02",
    title: "E-Mail senden",
    description: "Klicke auf 'Jetzt anmelden' – deine Auswahl ist bereits vorausgefüllt.",
  },
  {
    number: "03",
    title: "Mitgliedsausweis erhalten",
    description: "Wir melden uns innerhalb von 24 Stunden und du kannst sofort alle Vorteile nutzen.",
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

        {/* Interactive pricing selector */}
        <MembershipSelector />

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
      </div>
    </div>
  );
}
