/*
  Language switcher.
  English is the default and lives in index.html (it is read from there on load).
  Spanish and German texts live here. If you edit a text in the HTML,
  edit its Spanish and German version below too (same key).
*/

const translations = {
  es: {
    meta_title: "Marcos Gutiérrez de los Reyes · ASIR y ciberseguridad",
    meta_description: "Portfolio de Marcos Gutiérrez de los Reyes: técnico en administración de sistemas informáticos en red con especialización en ciberseguridad.",
    terminal_label: "Terminal con un resumen del perfil",

    nav_projects: "Proyectos",
    nav_experience: "Experiencia",
    nav_education: "Formación",
    nav_certifications: "Certificaciones",
    nav_skills: "Habilidades",
    nav_contact: "Contacto",

    hero_title: "Administro sistemas y aprendo a defenderlos.",
    hero_lead: "Estudiante de ASIR, ahora especializándome en ciberseguridad en Accenture.",
    term_line1: "ASIR · Administración de Sistemas Informáticos en Red",
    term_line2: "Especialización en ciberseguridad · Accenture",
    term_status: "Adquiriendo conocimientos y experiencia.",

    projects_title: "Proyectos",
    projects_intro: "Laboratorios y entornos de práctica que he montado yo mismo.",
    p1_title: "Laboratorio VPN con Docker — WireGuard",
    p1_desc: "Creación de un entorno VPN funcional con Docker y WireGuard: configuración de servidor y cliente VPN, aislamiento de red, claves criptográficas y pruebas de conectividad.",
    p2_title: "Laboratorio de control de acceso en PostgreSQL",
    p2_desc: "Despliegue de PostgreSQL con Docker y configuración de bases de datos, usuarios, roles, vistas y permisos de acceso granulares. Implementación de restricciones de privilegios y procedimientos de copia de seguridad y restauración.",
    coming_soon: "Próximamente...",

    exp_title: "Experiencia laboral",
    exp1_title: "Trainee de ciberseguridad · Accenture",
    exp1_when: "04/2026 - 05/2026 · Madrid, España",
    exp1_desc: "Experiencia de formación profesional centrada en ciberseguridad, con cursos y aprendizaje práctico en computación en la nube, criptografía y fundamentos de seguridad.",
    exp1_b1: "Formación completada en AWS, criptografía y fundamentos de ciberseguridad",
    exp1_b2: "Ampliación de conocimientos mediante cursos técnicos y ejercicios centrados en seguridad.",
    exp2_title: "Dependiente · JD Sports",
    exp2_when: "06/2025 - actualidad · Madrid, España",
    exp2_desc: "Atención al cliente, apoyo en ventas y operaciones diarias de tienda en un entorno comercial de ritmo rápido.",

    edu_title: "Formación",
    edu1_title: "Especialización en ciberseguridad · Accenture",
    edu1_when: "2026 – actualidad",
    edu1_desc: "Desarrollo de habilidades prácticas de ciberseguridad mediante formación en AWS, criptografía y fundamentos de seguridad. Apoyándome en mi base de sistemas y redes para entender cómo identificar, analizar y mitigar riesgos de seguridad.",
    edu2_title: "CFGS Administración de Sistemas Informáticos en Red (ASIR)",
    edu2_when: "2025 - actualidad · XTART FP",
    edu2_desc: "Formación práctica en sistemas operativos, redes, administración de sistemas, bases de datos y ciberseguridad, con gran énfasis en laboratorios prácticos y gestión de infraestructuras.",

    cert_title: "Certificaciones",

    skills_title: "Habilidades",
    sk1_t: "Sistemas",
    sk2_t: "Redes",
    sk3_t: "Seguridad",
    sk3_d: "Bastionado, análisis de vulnerabilidades, Nmap, Wireshark, logs",
    sk4_t: "Scripting",
    sk5_t: "Idiomas",
    sk5_d: "Inglés B2, alemán A1, español nativo",

    contact_title: "Contacto",
    contact_text: "Si buscas a alguien con ganas de aprender y de trabajar, escríbeme.",
    contact_cv: "Descargar CV"
  },

  de: {
    meta_title: "Marcos Gutiérrez de los Reyes · ASIR und Cybersicherheit",
    meta_description: "Portfolio von Marcos Gutiérrez de los Reyes: Techniker für Netzwerk-Systemadministration mit Spezialisierung auf Cybersicherheit.",
    terminal_label: "Terminal mit einer Profilzusammenfassung",

    nav_projects: "Projekte",
    nav_experience: "Erfahrung",
    nav_education: "Ausbildung",
    nav_certifications: "Zertifizierungen",
    nav_skills: "Fähigkeiten",
    nav_contact: "Kontakt",

    hero_title: "Ich verwalte Systeme und lerne, sie zu verteidigen.",
    hero_lead: "ASIR-Student, aktuell mit Spezialisierung auf Cybersicherheit bei Accenture.",
    term_line1: "ASIR · Netzwerk-IT-Systemadministration",
    term_line2: "Spezialisierung auf Cybersicherheit · Accenture",
    term_status: "Ich sammle Wissen und Erfahrung.",

    projects_title: "Projekte",
    projects_intro: "Übungslabore und Umgebungen, die ich selbst aufgebaut habe.",
    p1_title: "Docker-VPN-Labor — WireGuard",
    p1_desc: "Aufbau einer funktionsfähigen VPN-Umgebung mit Docker und WireGuard: Konfiguration von VPN-Server und -Client, Netzwerkisolierung, kryptografische Schlüssel und Konnektivitätstests.",
    p2_title: "PostgreSQL-Zugriffskontroll-Labor",
    p2_desc: "Bereitstellung von PostgreSQL mit Docker und Konfiguration von Datenbanken, Benutzern, Rollen, Views und feingranularen Zugriffsrechten. Umsetzung von Rechtebeschränkungen sowie Backup- und Wiederherstellungsverfahren.",
    coming_soon: "Demnächst...",

    exp_title: "Berufserfahrung",
    exp1_title: "Trainee Cybersicherheit · Accenture",
    exp1_when: "04/2026 - 05/2026 · Madrid, Spanien",
    exp1_desc: "Berufliche Weiterbildung mit Schwerpunkt Cybersicherheit, mit Kursen und praktischem Lernen in Cloud Computing, Kryptografie und Sicherheitsgrundlagen.",
    exp1_b1: "Schulung in AWS, Kryptografie und Grundlagen der Cybersicherheit abgeschlossen",
    exp1_b2: "Wissen durch technische Kurse und sicherheitsorientierte Übungen aufgebaut.",
    exp2_title: "Verkaufsmitarbeiter · JD Sports",
    exp2_when: "06/2025 - heute · Madrid, Spanien",
    exp2_desc: "Kundenservice, Verkaufsunterstützung und tägliche Filialabläufe in einem schnelllebigen Einzelhandelsumfeld.",

    edu_title: "Ausbildung",
    edu1_title: "Spezialisierung auf Cybersicherheit · Accenture",
    edu1_when: "2026 – heute",
    edu1_desc: "Aufbau praktischer Cybersicherheitskenntnisse durch praxisnahe Schulungen in AWS, Kryptografie und Sicherheitsgrundlagen. Auf meinem Wissen über Systeme und Netzwerke aufbauend lerne ich, Sicherheitsrisiken zu erkennen, zu analysieren und zu mindern.",
    edu2_title: "Höhere Berufsausbildung (CFGS) in Netzwerk-IT-Systemadministration (ASIR)",
    edu2_when: "2025 - heute · XTART FP",
    edu2_desc: "Praxisnahe Ausbildung in Betriebssystemen, Netzwerken, Systemadministration, Datenbanken und Cybersicherheit, mit starkem Fokus auf praktische Labore und Infrastrukturverwaltung.",

    cert_title: "Zertifizierungen",

    skills_title: "Fähigkeiten",
    sk1_t: "Systeme",
    sk2_t: "Netzwerke",
    sk3_t: "Sicherheit",
    sk3_d: "Härtung, Schwachstellenanalyse, Nmap, Wireshark, Logs",
    sk4_t: "Scripting",
    sk5_t: "Sprachen",
    sk5_d: "Englisch B2, Deutsch A1, Muttersprache Spanisch",

    contact_title: "Kontakt",
    contact_text: "Wenn du jemanden suchst, der gern lernt und arbeitet, schreib mir.",
    contact_cv: "Lebenslauf herunterladen"
  }
};

(function () {
  const elements = document.querySelectorAll("[data-i18n]");
  const buttons = document.querySelectorAll(".lang button");
  const metaDescription = document.querySelector('meta[name="description"]');
  const terminal = document.querySelector(".terminal");

  // Read the English texts from the HTML so there is a single source of truth.
  const en = {
    meta_title: document.title,
    meta_description: metaDescription.getAttribute("content"),
    terminal_label: terminal.getAttribute("aria-label")
  };
  elements.forEach(function (el) {
    en[el.dataset.i18n] = el.textContent;
  });
  translations.en = en;

  function setLanguage(lang) {
    const dict = translations[lang] || translations.en;

    elements.forEach(function (el) {
      const text = dict[el.dataset.i18n];
      if (text !== undefined) el.textContent = text;
    });

    document.documentElement.lang = lang;
    document.title = dict.meta_title;
    metaDescription.setAttribute("content", dict.meta_description);
    terminal.setAttribute("aria-label", dict.terminal_label);

    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });

    try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable */ }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () { setLanguage(btn.dataset.lang); });
  });

  // English by default; remember the visitor's last choice.
  let saved = "en";
  try { saved = localStorage.getItem("lang") || "en"; } catch (e) { /* ignore */ }
  if (saved !== "en" && translations[saved]) setLanguage(saved);
})();