// js/leistungen.js - Alle Leistungen + Rendering

const services = [
  {
    id: 'heizungen',
    title: 'Heizungen',
    shortDesc: 'Ob Gas, Öl, Pellet, Wärmepumpe oder Fern- & Nahwärme – Installation, Wartung und Reparatur.',
    longDesc: 'Wir planen und installieren Ihr Heizsystem zukunftssicher – von klassischer Gas- und Ölheizung bis zur modernen Wärmepumpe und Pelletanlage. Inklusive hydraulischem Abgleich, Förderung (BAFA/KfW) und regelmäßiger Wartung.',
    includes: [
      'Vor-Ort Check & Beratung', 
      'Alle gängigen Heizsysteme', 
      'Förderantrag BAFA/KfW', 
      'Wartung & Störungsdienst', 
      'Notdienst 24/7'
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    colorClass: 'bg-yellow'
  },
  {
    id: 'klima',
    title: 'Klima & Lüftung',
    shortDesc: 'Effiziente Klimaanlagen & Lüftung für perfektes Raumklima, leise & sparsam.',
    longDesc: 'Split- und Multisplit-Klimaanlagen für Büro, Schlafzimmer oder Serverraum. Leise, inverter-geregelt, kühlen und heizen. Auf Wunsch mit Lüftung und Wärmerückgewinnung.',
    includes: [
      'Single- & Multi-Split', 
      'Leise Inverter-Technik', 
      'Kühlen & Heizen', 
      'Wartung & Reinigung', 
      'Lüftung mit WRG'
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
    colorClass: 'bg-blue'
  },
  {
    id: 'sanitaer',
    title: 'Sanitär',
    shortDesc: 'Moderne Bäder, Küche & Haustechnik – Neubau & Sanierung.',
    longDesc: 'Komplettbad aus einer Hand: Planung, Installation, Endmontage. Wasserleitungen, Abfluss, Armaturen, barrierefreie Lösungen.',
    includes: [
      'Badplanung & 3D', 
      'Neubau & Sanierung', 
      'Armaturen & Keramik', 
      'Wasser- & Abwasser', 
      'Barrierefreie Bäder'
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.5c-1.5-1.26-2-2.86-2-4.5a6 6 0 0 1 12 0c0 1.64-.5 3.24-2 4.5-1.5 1.26-3.24 2.5-5 2.5s-3.5-1.24-5-2.5z"/><path d="M5 21c1.5 1.26 3 2 5 2s3.5-.74 5-2"/></svg>`,
    colorClass: 'bg-purple'
  },
  {
    id: 'bautrocknung',
    title: 'Bautrocknung',
    shortDesc: 'Schnelle Hilfe nach Wasserschaden – bevor aus Feuchtigkeit ein Problem wird.',
    longDesc: 'Ob Rohrbruch, Starkregen oder Estrich-Trocknung nach dem Einbau: Wir rücken mit professionellem Equipment an – Kondens- & Adsorptionstrockner, Turbinen und Dämmschichttrocknung für Wände und Böden. Bei hartnäckigem Geruch setzen wir bei Bedarf zusätzlich ein Ozongerät ein. Jede Trocknung wird gemessen und dokumentiert – für eine reibungslose Abrechnung mit Ihrer Versicherung.',
    includes: [
      'Feuchtemessung & Protokoll',
      'Kondens- & Adsorptionstrockner',
      'Dämmschichttrocknung',
      'Versicherungs-Doku',
      'Endmessung'
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    colorClass: 'bg-gray'
  },
  {
    id: 'leckortung',
    title: 'Leckortung',
    shortDesc: 'Mit Messtechnik finden wir Leckagen präzise – ohne Aufreißen.',
    longDesc: 'Thermografie, Tracer-Gas, akustische Ortung und Feuchtemessung. Wir öffnen nur dort, wo es nötig ist – spart Zeit und Kosten. Ideal mit unserem 24h Notdienst.',
    includes: [
      'Thermografie & Tracer-Gas', 
      'Akustische Ortung', 
      'Zerstörungsarme Suche', 
      'Sofortmaßnahmen', 
      'Bericht für Versicherung'
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    colorClass: 'bg-green'
  },
  {
    id: 'schimmel',
    title: 'Schimmelbeseitigung',
    shortDesc: 'Fachgerechte Entfernung, Ozonbehandlung & Vorbeugung für gesundes Wohnen.',
    longDesc: 'Mehr als nur überstreichen: Fachgerechte Entfernung, Ursachenanalyse (Wärmebrücke, Lüftung, Leckage) und abschließende Ozonbehandlung, die Sporen und Gerüche zuverlässig beseitigt – gefolgt von einem individuellen Präventionsplan.',
    includes: [
      'Ursachenanalyse', 
      'Fachgerechte Entfernung', 
      'Ozonbehandlung (Sporen & Geruch)', 
      'Präventionsberatung'
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`,
    colorClass: 'bg-red'
  }
];

// Rendert die 6 Cards
function renderLeistungen() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  grid.innerHTML = '';

  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-icon ${service.colorClass}">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.shortDesc}</p>
      <button onclick="openModal('${service.id}')" style="margin-top:16px;font-weight:600;font-size:13px;">Details →</button>
    `;
    grid.appendChild(card);
  });
}

// Start wenn DOM bereit
document.addEventListener('DOMContentLoaded', renderLeistungen);
