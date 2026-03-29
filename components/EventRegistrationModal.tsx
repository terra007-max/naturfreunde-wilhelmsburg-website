"use client";

import { useState } from "react";
import { X, Calendar, MapPin, Users, Euro, Send, CheckCircle2 } from "lucide-react";
import { type Event, SITE } from "@/lib/data";
import { formatDate, categoryColor, spotsPercent } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Props = { event: Event; onClose: () => void };

export default function EventRegistrationModal({ event, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const pct = event.spotsTotal && event.spotsLeft !== undefined
    ? spotsPercent(event.spotsLeft, event.spotsTotal) : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contact = event.contact ?? SITE.contact.email;
    const subject = encodeURIComponent(`Anmeldung: ${event.title}`);
    const body = encodeURIComponent(
      `Hallo,\n\nich möchte mich für folgende Veranstaltung anmelden:\n\n` +
      `Veranstaltung: ${event.title}\n` +
      `Datum: ${formatDate(event.date)}${event.time ? ` um ${event.time} Uhr` : ""}\n` +
      `Ort: ${event.location}\n\n` +
      `Name: ${name}\n` +
      `E-Mail: ${email}\n` +
      `Telefon: ${phone || "–"}\n\n` +
      `Mit freundlichen Grüßen\n${name}`
    );
    window.location.href = `mailto:${contact}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl animate-fadeInUp max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors z-10">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">Fast geschafft!</h3>
            <p className="text-gray-500 text-sm mb-6">
              Dein E-Mail-Programm öffnet sich mit der vorbereiteten Anmeldung.
              Sende die E-Mail ab, um die Anmeldung abzuschließen.
            </p>
            <button onClick={onClose}
              className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors text-sm">
              Schließen
            </button>
          </div>
        ) : (
          <>
            {/* Event info header */}
            <div className="p-6 border-b border-gray-100">
              <div className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium mb-3 ${categoryColor(event.category)}`}>
                {event.category}
              </div>
              <h2 className="text-xl font-extrabold text-gray-900 mb-3">{event.title}</h2>
              <div className="space-y-1.5 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-green-600 flex-shrink-0" />
                  {formatDate(event.date)}{event.time ? ` · ${event.time} Uhr` : ""}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                  {event.location}
                </div>
                {event.spotsTotal && event.spotsLeft !== undefined && (
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {event.spotsLeft} von {event.spotsTotal} Plätzen frei
                  </div>
                )}
                {event.price !== undefined && (
                  <div className="flex items-center gap-2">
                    <Euro className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {event.price === 0 ? "Kostenlos" : `${event.price} €`}
                  </div>
                )}
              </div>
              {pct !== null && (
                <div className="mt-3">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full", pct >= 80 ? "bg-amber-500" : "bg-green-500")}
                      style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">
                Anmeldedaten
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input required value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Vorname Nachname"
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.at"
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                  placeholder="+43 ..."
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
              </div>

              <button type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-sm text-sm mt-2">
                <Send className="w-4 h-4" />
                Anmeldung absenden
              </button>

              <p className="text-xs text-gray-400 text-center">
                Dein E-Mail-Programm öffnet sich mit den vorausgefüllten Daten.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
