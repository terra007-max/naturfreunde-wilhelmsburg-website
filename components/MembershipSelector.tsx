"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MEMBERSHIP_FEES, SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function MembershipSelector() {
  const [selected, setSelected] = useState<number | null>(null);

  const selectedFee = selected !== null ? MEMBERSHIP_FEES[selected] : null;

  const emailBody = selectedFee
    ? `Hallo,%0A%0Aich möchte Mitglied bei den Naturfreunden Wilhelmsburg werden.%0A%0AMitgliedschaftsart: ${selectedFee.type} (${selectedFee.price} €/Jahr)%0AName:%0AGeburtsdatum:%0AAdresse:%0A%0AMit freundlichen Grüßen`
    : `Hallo,%0A%0Aich möchte Mitglied bei den Naturfreunden Wilhelmsburg werden.%0A%0AMitgliedschaftsart:%0AName:%0AGeburtsdatum:%0AAdresse:%0A%0AMit freundlichen Grüßen`;

  const emailSubject = selectedFee
    ? `Mitgliedsantrag: ${selectedFee.type}`
    : `Mitgliedsantrag`;

  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          Beiträge
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900">Jahresbeiträge 2026</h2>
        <p className="text-gray-500 mt-2">Wähle deine Mitgliedschaftsart</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {MEMBERSHIP_FEES.map((fee, i) => {
          const isSelected = selected === i;
          const isPopular = i === 3;

          return (
            <button
              key={fee.type}
              onClick={() => setSelected(i)}
              className={cn(
                "relative rounded-2xl border-2 p-6 text-left transition-all cursor-pointer group",
                isSelected
                  ? "border-green-500 bg-green-50 shadow-lg scale-[1.02]"
                  : isPopular
                  ? "border-green-200 bg-white hover:border-green-400 hover:shadow-md"
                  : "border-gray-100 bg-white hover:border-green-300 hover:shadow-md"
              )}
            >
              {isPopular && !isSelected && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Beliebt
                  </span>
                </div>
              )}
              {isSelected && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Ausgewählt
                  </span>
                </div>
              )}

              <div className={cn(
                "text-3xl font-extrabold mb-1 transition-colors",
                isSelected ? "text-green-700" : "text-gray-900"
              )}>
                {fee.price} €
                <span className="text-sm font-normal text-gray-400"> /Jahr</span>
              </div>
              <div className="font-bold text-gray-800 mb-1">{fee.type}</div>
              <div className="text-sm text-gray-500">{fee.description}</div>

              {/* Selection indicator */}
              <div className={cn(
                "absolute top-4 right-4 w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center",
                isSelected
                  ? "border-green-500 bg-green-500"
                  : "border-gray-300 group-hover:border-green-400"
              )}>
                {isSelected && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* CTA — updates based on selection */}
      <div className={cn(
        "rounded-3xl p-8 sm:p-12 text-white text-center transition-all",
        selectedFee ? "bg-gradient-to-br from-green-700 to-green-800" : "bg-gradient-to-br from-gray-600 to-gray-700"
      )}>
        {selectedFee ? (
          <>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
              <CheckCircle2 className="w-4 h-4 text-green-300" />
              {selectedFee.type} – {selectedFee.price} €/Jahr
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Bereit loszulegen?</h2>
            <p className="text-green-200 mb-6 max-w-md mx-auto">
              Klicke auf &quot;Jetzt anmelden&quot; – deine gewählte Mitgliedschaftsart
              ({selectedFee.type}) ist bereits vorausgefüllt.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Mitgliedschaft wählen</h2>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Wähle oben eine Mitgliedschaftsart aus, um dich anzumelden.
            </p>
          </>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`mailto:${SITE.contact.email}?subject=${emailSubject}&body=${emailBody}`}
            className={cn(
              "inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl transition-all shadow-lg",
              selectedFee
                ? "bg-white text-green-800 hover:bg-green-50 hover:-translate-y-0.5"
                : "bg-white/20 text-white/60 cursor-not-allowed pointer-events-none"
            )}
            aria-disabled={!selectedFee}
          >
            Jetzt anmelden <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-green-300 text-xs mt-4">
          Oder direkt im Vereinsbüro: {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
        </p>
      </div>
    </div>
  );
}
