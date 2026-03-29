import type { Metadata } from "next";
import { SITE } from "@/lib/data";

export const metadata: Metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-green-800 pt-28 pb-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-3xl font-extrabold">Datenschutzerklärung</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 prose prose-green">
        <h2>Verantwortlicher</h2>
        <p>
          {SITE.fullName}<br />
          {SITE.address.street}, {SITE.address.zip} {SITE.address.city}<br />
          E-Mail: <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
        </p>
        <h2>Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p>
          Wir erheben personenbezogene Daten nur im Rahmen der gesetzlichen Bestimmungen (DSGVO, DSG 2018).
          Daten werden ausschließlich für die Mitgliederverwaltung und Veranstaltungsorganisation verwendet.
        </p>
        <h2>Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung
          sowie das Recht auf Datenübertragbarkeit. Wenden Sie sich hierfür an:{" "}
          <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
        </p>
        <h2>Cookies</h2>
        <p>
          Diese Website verwendet ausschließlich technisch notwendige Cookies. Es werden keine
          Tracking- oder Marketing-Cookies eingesetzt.
        </p>
      </div>
    </div>
  );
}
