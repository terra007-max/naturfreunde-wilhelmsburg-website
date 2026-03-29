import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-green-800 pt-28 pb-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-3xl font-extrabold">Impressum</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 prose prose-green">
        <h2>Angaben gemäß § 5 ECG</h2>
        <p>
          <strong>{SITE.fullName}</strong><br />
          {SITE.address.street}<br />
          {SITE.address.zip} {SITE.address.city}<br />
          {SITE.address.country}
        </p>
        <p>
          <strong>E-Mail:</strong>{" "}
          <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
        </p>
        <h2>Vereinsregister</h2>
        <p>Verein gemäß Vereinsgesetz 2002, registriert beim Magistrat/Bezirksverwaltungsbehörde Niederösterreich.</p>
        <h2>Haftungsausschluss</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
          externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
          verantwortlich.
        </p>
      </div>
    </div>
  );
}
