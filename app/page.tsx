import Link from "next/link";
import {
  Mountain, Users, Calendar, ArrowRight, MapPin,
  ChevronRight, Star, CheckCircle2, Zap
} from "lucide-react";
import { SITE, SECTIONS, NEWS, EVENTS } from "@/lib/data";
import { formatDateShort, formatMonth, formatDay, categoryColor } from "@/lib/utils";

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path fill="white" d="M0,320 L0,200 L120,140 L240,180 L360,80 L480,120 L600,40 L720,100 L840,20 L960,80 L1080,30 L1200,90 L1320,50 L1440,110 L1440,320 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-32">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fadeInUp">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          Eine der stärksten Ortsgruppen Niederösterreichs
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fadeInUp delay-100">
          Natur erleben.
          <br />
          <span className="text-green-300">Gemeinschaft</span> leben.
        </h1>

        <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto mb-8 leading-relaxed animate-fadeInUp delay-200">
          Über {SITE.memberCount.toLocaleString("de-AT")} Mitglieder. 8 Sektionen.
          Unzählige Abenteuer – von Skitouren auf 3.000m bis zum Lauftreff im Traisental.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fadeInUp delay-300">
          <Link
            href="/mitglied-werden"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-green-800 font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Zap className="w-4 h-4" />
            Jetzt Mitglied werden
          </Link>
          <Link
            href="/veranstaltungen"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl transition-all"
          >
            <Calendar className="w-4 h-4" />
            Alle Veranstaltungen
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fadeInUp delay-400">
          {[
            { value: "1.400+", label: "Mitglieder" },
            { value: "8", label: "Sektionen" },
            { value: "100+", label: "Touren/Jahr" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-xs text-green-300 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-5 h-8 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}

// ─── Upcoming Events strip ─────────────────────────────────────────────────────
function UpcomingEvents() {
  const upcoming = EVENTS.slice(0, 4);
  return (
    <section className="py-12 bg-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            <Calendar className="w-5 h-5 text-green-300" />
            Nächste Veranstaltungen
          </h2>
          <Link href="/veranstaltungen" className="text-green-200 hover:text-white text-sm flex items-center gap-1 transition-colors">
            Alle anzeigen <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {upcoming.map((event) => (
            <Link
              key={event.id}
              href={`/veranstaltungen#${event.id}`}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-3 transition-colors group"
            >
              <div className="flex-shrink-0 w-12 text-center">
                <div className="text-xs text-green-300 uppercase">{formatMonth(event.date)}</div>
                <div className="text-2xl font-extrabold text-white leading-none">{formatDay(event.date)}</div>
              </div>
              <div className="min-w-0">
                <div className="text-white font-medium text-sm leading-tight truncate group-hover:text-green-100">
                  {event.title}
                </div>
                <div className="text-green-300 text-xs mt-0.5 flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 flex-shrink-0" />
                  <span className="truncate">{event.location.split(",")[0]}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Activities grid ───────────────────────────────────────────────────────────
function Activities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Sektionen
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Für jeden das Richtige
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Acht aktive Sektionen bieten das ganze Jahr über ein vielfältiges Programm – vom Anfänger bis zum Profi.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SECTIONS.map((section, i) => (
            <Link
              key={section.id}
              href={`/sektionen#${section.id}`}
              className={`group relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br ${section.color} text-white hover:scale-[1.03] transition-transform cursor-pointer shadow-sm hover:shadow-md animate-fadeInUp`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="text-3xl mb-2">{section.icon}</div>
              <h3 className="font-bold text-sm leading-tight">{section.title}</h3>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-4 h-4" />
              </div>
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/sektionen"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors shadow-sm"
          >
            Alle Sektionen entdecken <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── News ──────────────────────────────────────────────────────────────────────
function News() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Aktuelles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Was bei uns los ist</h2>
          </div>
          <Link href="/aktuelles" className="hidden sm:flex items-center gap-1 text-green-600 hover:text-green-800 font-medium transition-colors">
            Alle Beiträge <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS.map((item, i) => {
            const matchedSection = SECTIONS.find(s =>
              s.title.toLowerCase().includes(item.category.toLowerCase().split(" ")[0])
            );
            return (
              <article
                key={item.id}
                className="group bg-gray-50 hover:bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-green-200 hover:shadow-md transition-all animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`h-36 bg-gradient-to-br ${matchedSection?.color ?? "from-green-500 to-green-700"} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-30">
                    {matchedSection?.icon ?? "🌿"}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400">{formatDateShort(item.date)}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-green-700 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{item.excerpt}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Membership CTA ────────────────────────────────────────────────────────────
function MemberCTA() {
  const perks = [
    "Alle Sektionen & Touren",
    "Ermäßigte Hüttennächtigungen",
    "Vereinsbus zu Touren",
    "Versicherungsschutz",
    "Mitgliederportal & Galerie",
    "Ab nur 12 €/Jahr für Kinder",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-800 to-green-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <Users className="w-3.5 h-3.5 text-green-300" />
          {SITE.memberCount.toLocaleString("de-AT")}+ Mitglieder
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
          Werde Teil der Gemeinschaft
        </h2>
        <p className="text-green-200 text-lg mb-8 max-w-2xl mx-auto">
          Von der ersten Wanderung bis zur Hochalpintour – bei uns findest du Gleichgesinnte,
          geführte Touren und unvergessliche Erlebnisse.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto mb-10">
          {perks.map((perk) => (
            <div key={perk} className="flex items-center gap-2 text-sm text-green-100">
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
              {perk}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/mitglied-werden"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-green-800 font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg hover:-translate-y-0.5"
          >
            <Zap className="w-4 h-4" />
            Jetzt Mitglied werden
          </Link>
          <Link
            href="/ueber-uns"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl transition-all"
          >
            Mehr über uns
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <Activities />
      <News />
      <MemberCTA />
    </>
  );
}
