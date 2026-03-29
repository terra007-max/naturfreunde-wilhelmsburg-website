"use client";

import { useState } from "react";
import { Bus, CalendarDays, MapPin, Users, Send, CheckCircle2, Info, Phone, Mail } from "lucide-react";
import { EVENTS, SITE } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const upcomingEvents = EVENTS
  .filter((e) => new Date(e.date) >= new Date())
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  .slice(0, 12);

export default function VereinsbusSite() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [seats, setSeats] = useState("1");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const event = upcomingEvents.find((ev) => ev.id === selectedEvent);
    const subject = encodeURIComponent(`Vereinsbus Anton – Reservierung: ${event?.title ?? selectedEvent}`);
    const body = encodeURIComponent(
      `Hallo,\n\nich möchte einen Sitzplatz im Vereinsbus reservieren:\n\n` +
      `Veranstaltung: ${event?.title ?? selectedEvent}\n` +
      `Datum: ${event ? formatDate(event.date) : ""}\n` +
      `Ort: ${event?.location ?? ""}\n\n` +
      `Anzahl Plätze: ${seats}\n` +
      `Name: ${name}\n` +
      `E-Mail: ${email}\n` +
      `Telefon: ${phone || "–"}\n` +
      `${note ? `\nAnmerkung: ${note}\n` : ""}` +
      `\nMit freundlichen Grüßen\n${name}`
    );
    window.location.href = `mailto:${SITE.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-800 to-green-700 pt-28 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
            <Bus className="w-4 h-4" /> Vereinsbus
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Bus „Anton" buchen</h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            Unser Vereinsbus bringt dich bequem zu Touren und Veranstaltungen.
            Einfach Platz reservieren – wir kümmern uns um den Rest.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-2 text-green-700 font-bold mb-4">
                <Bus className="w-5 h-5" />
                Über den Bus
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Kostenlos für Vereinsmitglieder
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Abfahrt vom HUGO (Stadtpark 3)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Verfügbar für alle Sektionstouren
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Anmeldung erforderlich
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-green-700 font-bold mb-3">
                <Info className="w-4 h-4" />
                Direktkontakt
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <a href={`tel:${SITE.contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-green-700 transition-colors">
                  <Phone className="w-4 h-4 text-green-600" />
                  {SITE.contact.phone}
                </a>
                <a href={`mailto:${SITE.contact.email}`} className="flex items-center gap-2 hover:text-green-700 transition-colors">
                  <Mail className="w-4 h-4 text-green-600" />
                  {SITE.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {submitted ? (
                <div className="p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-2">Fast fertig!</h2>
                  <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
                    Dein E-Mail-Programm öffnet sich mit der vorbereiteten Reservierung.
                    Sende die E-Mail ab um die Buchung abzuschließen.
                  </p>
                  <button onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl text-sm transition-colors">
                    Neue Reservierung
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                  <h2 className="font-extrabold text-gray-900 text-lg">Platz reservieren</h2>

                  {/* Event selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Veranstaltung <span className="text-red-500">*</span>
                    </label>
                    <select required value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option value="">Veranstaltung wählen…</option>
                      {upcomingEvents.map((ev) => (
                        <option key={ev.id} value={ev.id}>
                          {formatDate(ev.date)} – {ev.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location preview */}
                  {selectedEvent && (() => {
                    const ev = upcomingEvents.find((e) => e.id === selectedEvent);
                    return ev ? (
                      <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                        <MapPin className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                        {ev.location}
                        <span className="ml-auto flex items-center gap-1">
                          <CalendarDays className="w-3.5 h-3.5" />
                          {ev.time ?? ""}
                        </span>
                      </div>
                    ) : null;
                  })()}

                  {/* Seats */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Anzahl Plätze <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-3">
                      {[1, 2, 3, 4].map((n) => (
                        <button key={n} type="button"
                          onClick={() => setSeats(String(n))}
                          className={`w-10 h-10 rounded-xl border font-semibold text-sm transition-colors ${
                            seats === String(n)
                              ? "bg-green-600 border-green-600 text-white"
                              : "border-gray-200 text-gray-700 hover:border-green-400"
                          }`}>
                          {n}
                        </button>
                      ))}
                      <span className="text-xs text-gray-400 flex items-center gap-1"><Users className="w-3.5 h-3.5" /> Person(en)</span>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input required value={name} onChange={(e) => setName(e.target.value)}
                      placeholder="Vorname Nachname"
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
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
                        placeholder="+43 …"
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" />
                    </div>
                  </div>

                  {/* Note */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Anmerkung <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea value={note} onChange={(e) => setNote(e.target.value)}
                      rows={2} placeholder="z.B. Abholpunkt, besondere Anforderungen…"
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none" />
                  </div>

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-sm text-sm">
                    <Send className="w-4 h-4" />
                    Reservierung absenden
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Dein E-Mail-Programm öffnet sich mit den vorausgefüllten Daten.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
