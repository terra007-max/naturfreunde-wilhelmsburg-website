import type { Metadata } from "next";
import Link from "next/link";
import { Users, Shield, Map, Bus, Camera, BookOpen, ExternalLink, ArrowRight, CheckCircle2, Info } from "lucide-react";
import { SITE, MEMBERSHIP_BENEFITS, MEMBERSHIP_FEES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mitglied werden",
  description: "Werde Mitglied bei den Naturfreunden Wilhelmsburg-Göblasbruck. Die Anmeldung erfolgt über das offizielle Portal der Naturfreunde Österreich.",
};

const BENEFIT_ICONS = [Map, Shield, BookOpen, Shield, Bus, Camera, Map, Users];

export default function MitgliedWerdenPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-800 to-green-700 pt-28 pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <Users className="w-4 h-4" />
            {SITE.memberCount.toLocaleString("de-AT")}+ Mitglieder
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
            Werde Teil der<br />
            <span className="text-green-300">Naturfreunde</span>
          </h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto mb-10">
            Als Ortsgruppe der Naturfreunde Österreich erfolgt die Mitgliedschaft
            über das offizielle Portal – einfach, schnell und sicher.
          </p>

          {/* Main CTA */}
          <a
            href="https://mitgliedschaft.naturfreunde.at/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-800 font-extrabold text-lg rounded-2xl hover:bg-green-50 transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:translate-y-0"
          >
            <Users className="w-5 h-5" />
            Jetzt Mitglied werden
            <ExternalLink className="w-4 h-4 opacity-60" />
          </a>

          <p className="text-green-300 text-sm mt-4 flex items-center justify-center gap-1.5">
            <ExternalLink className="w-3.5 h-3.5" />
            mitgliedschaft.naturfreunde.at – offizielles Portal der Naturfreunde Österreich
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-green-50 border-b border-green-100 py-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-green-700 font-semibold text-sm mb-6">
            <Info className="w-4 h-4" />
            So funktioniert die Anmeldung
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { n: "1", title: "Portal öffnen", desc: "Klicke auf \"Jetzt Mitglied werden\" – du wirst zum offiziellen Portal der Naturfreunde Österreich weitergeleitet." },
              { n: "2", title: "Ortsgruppe wählen", desc: "Wähle die Ortsgruppe \"Wilhelmsburg-Göblasbruck\" und deine Mitgliedschaftsart." },
              { n: "3", title: "Fertig!", desc: "Nach der Anmeldung erhältst du deinen Ausweis und kannst sofort alle Vorteile nutzen." },
            ].map((step) => (
              <div key={step.n} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {step.n}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-0.5">{step.title}</div>
                  <div className="text-gray-600 text-xs leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
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

        {/* Pricing overview (read-only, just info) */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Beiträge
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Jahresbeiträge 2026</h2>
            <p className="text-gray-500 mt-2">Faire Preise für alle Altersgruppen</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {MEMBERSHIP_FEES.map((fee) => (
              <div
                key={fee.type}
                className="bg-gray-50 hover:bg-green-50 rounded-2xl p-4 text-center transition-colors border border-gray-100"
              >
                <div className="text-2xl font-extrabold text-gray-900">{fee.price} €</div>
                <div className="text-xs text-gray-400 mb-2">/Jahr</div>
                <div className="font-bold text-gray-800 text-sm">{fee.type}</div>
                <div className="text-xs text-gray-500 mt-1 leading-tight">{fee.description}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
            <Info className="w-3 h-3" />
            Die genaue Beitragsauswahl erfolgt im offiziellen Anmeldeportal.
          </p>
        </div>

        {/* Final CTA banner */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-br from-green-700 to-green-900 p-8 sm:p-12 text-white text-center">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative z-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-lg mx-auto">
                {[
                  { value: "1.400+", label: "Mitglieder" },
                  { value: "8", label: "Sektionen" },
                  { value: "120+", label: "Jahre aktiv" },
                  { value: "100+", label: "Touren/Jahr" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-extrabold text-white">{s.value}</div>
                    <div className="text-xs text-green-300">{s.label}</div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Bereit loszulegen?</h2>
              <p className="text-green-200 mb-8 max-w-md mx-auto">
                Die Anmeldung dauert nur wenige Minuten. Du wirst sicher zum
                offiziellen Portal der Naturfreunde Österreich weitergeleitet.
              </p>

              <a
                href="https://mitgliedschaft.naturfreunde.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-800 font-extrabold text-base rounded-2xl hover:bg-green-50 transition-all shadow-xl hover:-translate-y-0.5"
              >
                Zum Anmeldeportal
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-green-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Sicheres Portal
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Naturfreunde Österreich
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Sofort aktiv
                </span>
              </div>

              <p className="text-green-400 text-xs mt-6">
                Fragen? <a href={`mailto:${SITE.contact.email}`} className="underline hover:text-white transition-colors">{SITE.contact.email}</a>
                {" · "}
                <a href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`} className="underline hover:text-white transition-colors">{SITE.contact.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
