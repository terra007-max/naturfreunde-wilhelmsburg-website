// ─── Site Data ────────────────────────────────────────────────────────────────
// Content sourced from https://naturfreunde-wilhelmsburg.at/

export const SITE = {
  name: "Naturfreunde Wilhelmsburg",
  fullName: "Naturfreunde Österreich, Ortsgruppe Wilhelmsburg-Göblasbruck",
  tagline: "Natur erleben. Gemeinschaft leben.",
  description:
    "Eine der stärksten Ortsgruppen Niederösterreichs mit über 1.400 Mitgliedern – für Wandern, Skitouren, MTB, Laufen, Klettern und mehr.",
  motto: "BERG FREI",
  memberCount: 1400,
  founded: 1906,
  zvr: "707468566",
  clubhouse: "HUGO",
  bus: "Anton",
  address: {
    street: "Stadtpark 3",
    zip: "3150",
    city: "Wilhelmsburg",
    country: "Österreich",
    region: "Niederösterreich",
  },
  contact: {
    email: "bergfrei@naturfreunde-wilhelmsburg.at",
    phone: "+43 676 82536200",
  },
  bank: {
    name: "Raiffeisenbank Traisen-Gölsental, Wilhelmsburg",
    iban: "AT82 3244 7001 0071 6613",
    bic: "RLNWATWWLFD",
  },
  social: {
    facebook: "https://www.facebook.com/naturfreunde.wilhelmsburg",
  },
  links: {
    gallery: "https://piwigo.naturfreunde-wilhelmsburg.at",
    flickr: "https://flickr.naturfreunde-wilhelmsburg.at",
    memberPortal: "https://mitgliedschaft.naturfreunde.at",
    memberDB: "https://sonnline.naturfreunde.at",
    busBooking: "https://xoyondo.com",
    cloudStorage: "https://nextcloud.naturfreunde-wilhelmsburg.at",
    routePortal: "https://tourenportal.at",
  },
};

// ─── Board ────────────────────────────────────────────────────────────────────
export type BoardMember = {
  role: string;
  name: string;
  phone?: string;
  email?: string;
};

export const BOARD: BoardMember[] = [
  {
    role: "Obmann",
    name: "Andreas Stubhan",
    phone: "0676 82536200",
    email: "andreas.stubhan@naturfreunde-wilhelmsburg.at",
  },
  {
    role: "Obfrau-Stellvertreterin",
    name: "Heidelinde Putz",
    phone: "0664 88266232",
    email: "putz.h@a1.net",
  },
  {
    role: "Obmann-Stellvertreter",
    name: "Günther Dörflinger",
    phone: "0676 3523357",
    email: "guenther.doerflinger@kwi.at",
  },
  {
    role: "Obmann-Stellvertreter",
    name: "Christian Gaiswinkler",
    phone: "0664 5115235",
    email: "christiangaiswinkler@gmx.at",
  },
  {
    role: "Schriftführerin",
    name: "Mirjam Baumann",
    phone: "0676 7806087",
    email: "mirjam_baumann@hotmail.com",
  },
  {
    role: "Schriftführer-Stellvertreter",
    name: "Martin Gabath",
    phone: "0650 6403203",
    email: "m.gabath@aon.at",
  },
  {
    role: "Kassiererin",
    name: "Andrea Höfler",
    phone: "0676 9202124",
    email: "andreajohanna1963@gmail.com",
  },
  {
    role: "Kassier-Stellvertreterin",
    name: "Regina Raith",
    phone: "0664 4237696",
    email: "raith@stulik.at",
  },
  {
    role: "Jugendleiterin",
    name: "Christina Schleifer",
  },
  {
    role: "Rechnungsprüfer",
    name: "Mathias Reischer",
  },
  {
    role: "Ehrenvorsitzender",
    name: "Rudolf Lurger",
  },
];

// ─── Sections ─────────────────────────────────────────────────────────────────
export type ActivitySection = {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  highlights: string[];
  schedule?: string;
  contacts?: { name: string; phone?: string; email?: string }[];
};

export const SECTIONS: ActivitySection[] = [
  {
    id: "skitouren",
    title: "Skitouren",
    icon: "⛷️",
    color: "from-blue-500 to-blue-700",
    description:
      "Hochalpine Skitouren bis auf über 3.000 m Seehöhe – von leichten Einsteigertouren bis zu mehrtägigen Hochtourenwochen ins Ötztal und die Hohen Tauern.",
    highlights: ["Ötztal bis 3.000m", "Hohe Tauern", "Sicherheitskurse", "Skiverleih ab €5/Tag"],
    contacts: [
      { name: "Andreas Stubhan", phone: "0676 82536200", email: "andreas.stubhan@naturfreunde-wilhelmsburg.at" },
      { name: "Martin Mandl", phone: "0664 6117164" },
    ],
  },
  {
    id: "wintersport",
    title: "Wintersport & Kinderskikurs",
    icon: "🏔️",
    color: "from-sky-400 to-sky-600",
    description:
      "Jährlicher Kinderskikurs in Annaberg – professionell betreut von staatlich geprüften Skilehrern für Anfänger bis Fortgeschrittene.",
    highlights: ["Annaberg", "Staatl. geprüfte Lehrer", "Anfänger bis Fortg.", "Familienprogramm"],
    contacts: [
      { name: "Stefan Baumann (Leitung)", phone: "0664 6150397", email: "wispoteam@naturfreunde-wilhelmsburg.at" },
    ],
  },
  {
    id: "wandern",
    title: "Wanderungen",
    icon: "🥾",
    color: "from-green-500 to-green-700",
    description:
      "Geführte Tages- und Mehrtageswanderungen. 5 eigene markierte Wanderwege rund um Wilhelmsburg, Frühjahrswanderungen und Mehrtagestouren ins Zillertal.",
    highlights: ["5 eigene Wanderwege", "Zillertal-Woche", "Geführte Touren", "Via Ferrata"],
    contacts: [
      { name: "Franz Schoisengeyer-Edlinger", phone: "0664 66314412", email: "franz.schoisengeyer@aon.at" },
      { name: "Michaela Karl", phone: "0664 75054455" },
    ],
  },
  {
    id: "mtb",
    title: "Mountainbike & MTB 4 Kids",
    icon: "🚵",
    color: "from-orange-500 to-orange-700",
    description:
      "MTB Stammtisch jeden Mittwoch ab April im HUGO – 3 Leistungsniveaus, 25–40 km. Eigenes Jugendprogramm 'MTB 4 Kids' mit jährlichem Camp.",
    highlights: ["Jeden Mittwoch ab April", "25–40 km Touren", "MTB 4 Kids Camp", "Singletrails"],
    schedule: "Jeden Mittwoch, April–September, 17:00 Uhr, HUGO (Stadtpark 3)",
    contacts: [
      { name: "Alexander Trescher (MTB 4 Kids)", phone: "0699 13336270", email: "alex-trescher@gmx.at" },
    ],
  },
  {
    id: "radtouren",
    title: "Radtouren",
    icon: "🚴",
    color: "from-yellow-500 to-yellow-700",
    description:
      "Gemütliche Radtouren auf asphaltierten Wegen durch Niederösterreich und das Burgenland – für Familien und Genussradler.",
    highlights: ["Genussstempo", "Niederösterreich & Burgenland", "Grenzlandtour", "Familienfreundlich"],
    contacts: [
      { name: "Christa Almesberger", phone: "0676 70067388", email: "christa.almesberger@gmx.at" },
      { name: "Anton Karner", phone: "0664 73574080" },
    ],
  },
  {
    id: "laufsport",
    title: "Laufsport & Lauftreff",
    icon: "🏃",
    color: "from-red-500 to-red-700",
    description:
      "Wöchentlicher Lauftreff jeden Dienstag im HUGO – Kinder- und Erwachsenenprogramm, Vorbereitung auf den jährlichen Stadtlauf.",
    highlights: ["Jeden Dienstag 18:00 Uhr", "Laufkids", "Stadtlauf-Vorbereitung", "Alle Tempos"],
    schedule: "Jeden Dienstag, 18:00–20:00 Uhr, HUGO (Stadtpark 3)",
  },
  {
    id: "klettern",
    title: "Climbing 4 Kids",
    icon: "🧗",
    color: "from-purple-500 to-purple-700",
    description:
      "Klettern für Kinder und Jugendliche – sicher, spielerisch und mit erfahrenen Betreuern. Klettersteigtage in Tirol.",
    highlights: ["Klettersteig Tirol", "Jugendprogramm", "Sicherheitsschulung", "Naturklettern"],
  },
  {
    id: "nordic-walking",
    title: "Nordic Walking",
    icon: "🚶",
    color: "from-teal-500 to-teal-700",
    description:
      "Regelmäßige Nordic Walking Gruppen für alle Fitnessstufen rund um Wilhelmsburg – Teil der Wandersektion.",
    highlights: ["Anfängerfreundlich", "Alle Altersgruppen", "Stocktechnik", "Natur & Bewegung"],
  },
];

// ─── News ─────────────────────────────────────────────────────────────────────
export type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
};

export const NEWS: NewsItem[] = [
  {
    id: "oeztaal-2026",
    title: "Skihochwoche ins Ötztal – Erfolg auf 3.000m",
    date: "2026-03-08",
    category: "Skitouren",
    excerpt:
      "Unsere Skitourensektion absolvierte erfolgreich die 3000er-Schitouren-Tage im Ötztal (5.–8. März). Traumhafte Bedingungen und unvergessliche Gipfelerlebnisse!",
  },
  {
    id: "raeumungsaktion-2026",
    title: "Frühjahrsputz entlang der Traisen",
    date: "2026-03-21",
    category: "Umwelt",
    excerpt:
      "Über 30 freiwillige Mitglieder säuberten die Traisen-Ufer bei unserer Frühjahrs-Räumungsaktion. Gemeinsam für eine saubere Natur!",
  },
  {
    id: "faschingsumzug-2026",
    title: "Naturfreunde beim Faschingsumzug Wilhelmsburg",
    date: "2026-02-14",
    category: "Gemeinschaft",
    excerpt:
      "Mit Kostümen und guter Laune nahmen wir am Faschingsumzug der Stadtgemeinde Wilhelmsburg teil – ein tolles Erlebnis für alle!",
  },
  {
    id: "neujahrswanderung-2026",
    title: "Tradition: Neujahrswanderung ins neue Jahr",
    date: "2026-01-04",
    category: "Wandern",
    excerpt:
      "Auch dieses Jahr starteten wir gut gelaunt mit der beliebten Neujahrswanderung durch das Traisental – für einen aktiven Start in 2026.",
  },
];

// ─── Events ───────────────────────────────────────────────────────────────────
export type Event = {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  time?: string;
  endTime?: string;
  location: string;
  category: string;
  section: string;
  description: string;
  spotsTotal?: number;
  spotsLeft?: number;
  price?: number;
  contact?: string;
  registrationRequired: boolean;
};

export const EVENTS: Event[] = [
  {
    id: "lauftreff-apr-1",
    title: "Lauftreff",
    date: "2026-04-07",
    time: "18:00",
    endTime: "20:00",
    location: "HUGO – Stadtpark 3, 3150 Wilhelmsburg",
    category: "Laufsport",
    section: "laufsport",
    description: "Wöchentlicher Lauftreff – alle Tempos willkommen. Ca. 5–10 km durch Wilhelmsburg und Umgebung. Laufkids-Programm parallel.",
    registrationRequired: false,
  },
  {
    id: "ostereisuche-2026",
    title: "NF Ostereisuche",
    date: "2026-04-03",
    time: "15:00",
    endTime: "17:00",
    location: "Köpelberg Parkplatz, Kreisbachtal 11, Wilhelmsburg",
    category: "Gemeinschaft",
    section: "wandern",
    description: "Ostereiersuche für Kinder und Familien im Köpelberg-Gebiet – ein buntes Erlebnis für die ganze Familie!",
    registrationRequired: false,
  },
  {
    id: "mtb-stammtisch-apr",
    title: "MTB Stammtisch – Saisonstart",
    date: "2026-04-15",
    time: "17:00",
    endTime: "19:30",
    location: "HUGO – Stadtpark 3, 3150 Wilhelmsburg",
    category: "Mountainbike",
    section: "mtb",
    description: "Erster MTB Stammtisch der Saison 2026! Gemeinschaftsausfahrt in 2–3 Leistungsgruppen, 25–40 km, 350–1.000 Höhenmeter.",
    registrationRequired: false,
  },
  {
    id: "fruehjahrs-wanderung-2026",
    title: "Frühjahrswanderung mit Ulli",
    date: "2026-04-25",
    time: "09:00",
    location: "Treffpunkt folgt",
    category: "Wandern",
    section: "wandern",
    description: "Geführte Frühjahrswanderung durch die erwachende Natur rund um Wilhelmsburg. Details zum Treffpunkt werden bekanntgegeben.",
    registrationRequired: true,
    contact: "bergfrei@naturfreunde-wilhelmsburg.at",
  },
  {
    id: "mtb4kids-mai",
    title: "MTB 4 Kids Ausfahrt",
    date: "2026-05-06",
    time: "17:00",
    endTime: "19:30",
    location: "HUGO – Stadtpark 3, 3150 Wilhelmsburg",
    category: "Mountainbike",
    section: "mtb",
    description: "Monatliche MTB-Ausfahrt für Kinder und Jugendliche – geführt, sicher und mit viel Spaß!",
    spotsTotal: 20,
    spotsLeft: 12,
    registrationRequired: true,
    contact: "alex-trescher@gmx.at",
  },
  {
    id: "klettersteig-tirol-2026",
    title: "Klettersteigtage in Tirol",
    date: "2026-06-02",
    endDate: "2026-06-06",
    location: "Tirol",
    category: "Klettern",
    section: "klettern",
    description: "Mehrtägige Klettersteigtage in Tirol – Via Ferrata für alle Schwierigkeitsstufen. Anmeldung erforderlich.",
    spotsTotal: 16,
    spotsLeft: 8,
    registrationRequired: true,
    contact: "bergfrei@naturfreunde-wilhelmsburg.at",
  },
  {
    id: "stadtlauf-2026",
    title: "18. Wilhelmsburger Stadtlauf",
    date: "2026-07-24",
    endDate: "2026-07-25",
    time: "ab 10:00",
    location: "Stadtplatz Wilhelmsburg",
    category: "Laufsport",
    section: "laufsport",
    description: "Der jährliche Stadtlauf – Strecken für alle: Fun Run, 10 km und Halbmarathon. Anmeldung unter stadtlauf.naturfreunde-wilhelmsburg.at",
    spotsTotal: 500,
    spotsLeft: 210,
    price: 12,
    registrationRequired: true,
  },
  {
    id: "bikedays-ruhpolding-2026",
    title: "Naturfreunde Bikedays | Ruhpolding Bayern",
    date: "2026-07-30",
    endDate: "2026-08-02",
    location: "Bikeregion Ruhpolding, Bayern",
    category: "Mountainbike",
    section: "mtb",
    description: "4 Tage MTB-Spaß in der Bikeregion Ruhpolding in Bayern – Trails, Singletrack und Gemeinschaft pur.",
    spotsTotal: 20,
    spotsLeft: 7,
    registrationRequired: true,
    contact: "alex-trescher@gmx.at",
  },
  {
    id: "wanderwoche-zillertal-2026",
    title: "Wanderwoche Zillertal",
    date: "2026-08-09",
    endDate: "2026-08-15",
    location: "Zillertal, Tirol",
    category: "Wandern",
    section: "wandern",
    description: "7-tägige geführte Wanderwoche im Zillertal – Hütten, Gipfel und Gemeinschaft. Anmeldung bei Franz Schoisengeyer.",
    spotsTotal: 18,
    spotsLeft: 5,
    registrationRequired: true,
    contact: "franz.schoisengeyer@aon.at",
  },
];

// ─── Membership ───────────────────────────────────────────────────────────────
export const MEMBERSHIP_FEES = [
  { type: "Erwachsene", price: 42, description: "Vollmitgliedschaft ab 18 Jahren" },
  { type: "Jugendliche", price: 21, description: "14–17 Jahre" },
  { type: "Kinder", price: 12, description: "Bis 13 Jahre" },
  { type: "Familie", price: 75, description: "2 Erwachsene + Kinder im Haushalt" },
  { type: "Senior:innen", price: 30, description: "Ab 65 Jahren" },
];

export const MEMBERSHIP_BENEFITS = [
  "Ermäßigte Übernachtungen in 1.000+ Naturfreundehäusern weltweit",
  "Zugang zu allen 8 Sektionen & geführten Touren",
  "Sektionszeitschrift 'Naturfreund' (4× jährlich)",
  "Versicherungsschutz bei Vereinsveranstaltungen",
  "Vereinsbus 'Anton' zu Touren & Veranstaltungen",
  "Zugang zu 100+ Kletterhallen & -wänden österreichweit",
  "Skiverleih für Mitglieder ab €5/Tag",
  "Gemeinschaft von 153.000+ Naturfreunden österreichweit",
];

// ─── Trails ───────────────────────────────────────────────────────────────────
export type Trail = {
  name: string;
  marking: string;
  color: string;
};

export const TRAILS: Trail[] = [
  { name: "Wilhelmsburger Rundwanderweg", marking: "blau & gelb", color: "bg-blue-500" },
  { name: "Altenburgweg", marking: "Ginster gelb & signal weiß", color: "bg-yellow-500" },
  { name: "Galgenweg", marking: "Signal violett & weiß", color: "bg-purple-500" },
  { name: "Sagenhöhenweg", marking: "Türkis blau & weiß", color: "bg-teal-500" },
  { name: "Grubtalerweg", marking: "Gemeinde rosa & hellblau", color: "bg-pink-400" },
];

// ─── Ski Program 2025/2026 ────────────────────────────────────────────────────
export const SKI_PROGRAM = [
  { title: "Wetterkunde-Abend", date: "2025-11-24", difficulty: "Theorie", leader: "Mario Winkler" },
  { title: "Schitour zum Schnee", date: "2025-12-29", difficulty: "Leicht", leader: "Tourenleiterin" },
  { title: "Annaberg Schitour I", date: "2026-01-04", difficulty: "Leicht", leader: "Torenleiter:in" },
  { title: "Annaberg Schitour II", date: "2026-01-10", difficulty: "Leicht", leader: "Torenleiter:in" },
  { title: "Schitour auf Steirer Art", date: "2026-01-17", difficulty: "Mittel", leader: "Torenleiter:in" },
  { title: "Xeis Tour", date: "2026-01-23", difficulty: "Mittel", leader: "Torenleiter:in" },
  { title: "Voralpen Tour", date: "2026-02-07", difficulty: "Mittel", leader: "Torenleiter:in" },
  { title: "2000er Tage – Hohe Tauern", date: "2026-02-20", difficulty: "Mittel", leader: "Andreas Stubhan" },
  { title: "3000er Tage – Ötztal", date: "2026-03-05", difficulty: "Mittel", leader: "Andreas Stubhan" },
  { title: "Hochschwabgebiet Tour", date: "2026-03-28", difficulty: "Mittel", leader: "Torenleiter:in" },
];
