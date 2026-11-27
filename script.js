const translations = {
  es: {
    meta_title: "Marcos Gutiérrez de los Reyes · Cloud y DevSecOps",
    meta_description: "Portfolio de Marcos Gutiérrez de los Reyes: estudiante de ASIR con especialización en ciberseguridad, orientado a cloud en AWS y DevSecOps",
    lang_label: "Idioma",
    top_label: "Volver arriba",

    nav_projects: "Proyectos",
    nav_experience: "Experiencia",
    nav_education: "Formación",
    nav_certifications: "Certificaciones y cursos",
    skip_link: "Saltar al contenido",
    nav_skills: "Habilidades",
    nav_contact: "Contacto",

    hero_title: "Construyo infraestructura y aprendo a hacerla segura desde el principio",
    hero_lead: "Estudiante de ASIR con especialización en ciberseguridad, orientándome hacia cloud en AWS y DevSecOps: infraestructura segura, automatización y seguridad integrada en CI/CD",
    rm_link: "Ver en GitHub",
    rm_done: "Hecho",
    rm_now: "En curso",
    rm_next: "Siguiente",
    st1: "Linux y scripting",
    st2: "Contenedores",
    st3: "Bastionado",
    st4: "Análisis de seguridad",
    st5: "Controles en CI/CD",
    st6: "IaC en la nube",

    projects_title: "Proyectos",
    projects_intro: "Laboratorios y entornos de práctica que he montado yo mismo",
    p1_title: "Laboratorio DevSecOps — Ubuntu Server",
    p1_desc: "Laboratorio práctico que aplica seguridad en cada capa, documentado paso a paso. Hasta ahora: scripts de monitorización en Bash y Python, una API en Flask contenerizada y un servidor Ubuntu bastionado (SSH solo con clave, ufw, fail2ban, actualizaciones de seguridad automáticas, Lynis 58 → 68). Lo siguiente: pruebas de seguridad de la aplicación, imágenes de contenedor seguras, controles de seguridad en CI/CD con GitHub Actions y Terraform en AWS",
    p2_title: "Laboratorio de control de acceso en PostgreSQL",
    p2_desc: "Despliegue de PostgreSQL con Docker y configuración de bases de datos, usuarios, roles, vistas y permisos de acceso granulares. Implementación de restricciones de privilegios y procedimientos de copia de seguridad y restauración",

    exp_title: "Experiencia laboral",
    exp1_title: "Trainee de cloud y seguridad · Accenture",
    exp1_when: "04/2026 - 05/2026 · Madrid, España",
    exp1_desc: "Experiencia de formación profesional con cursos y aprendizaje práctico en computación en la nube, criptografía y fundamentos de seguridad, como base para infraestructura segura y automatización",
    exp1_b1: "Formación completada en ciberseguridad general",
    exp1_b2: "Ampliación de conocimientos mediante cursos técnicos y ejercicios prácticos",
    exp2_title: "Dependiente · JD Sports",
    exp2_when: "06/2025 - actualidad · Madrid, España",
    exp2_desc: "Atención al cliente, apoyo en ventas y operaciones diarias de tienda en un entorno comercial de ritmo rápido",

    edu_title: "Formación",
    edu1_title: "Formación en ciberseguridad · Accenture",
    edu1_when: "2026 – actualidad",
    edu1_desc: "Desarrollo de habilidades prácticas mediante formación en AWS, criptografía y fundamentos de seguridad. Apoyándome en mi base de sistemas y redes para avanzar hacia cloud y DevSecOps: infraestructura segura, automatización y seguridad integrada en CI/CD",
    edu2_title: "CFGS Administración de Sistemas Informáticos en Red (ASIR)",
    edu2_when: "2025 - actualidad · XTART FP",
    edu2_desc: "Formación práctica en sistemas operativos, redes, administración de sistemas, bases de datos y ciberseguridad, con gran énfasis en laboratorios prácticos y gestión de infraestructuras",

    cert_title: "Certificaciones y cursos",

    skills_title: "Habilidades",
    sk1_t: "Sistemas",
    sk2_t: "Redes",
    sk3_t: "Seguridad",
    sk3_d: "Bastionado, análisis de vulnerabilidades, Nmap, Wireshark, logs",
    sk4_t: "Scripting",
    sk5_t: "Idiomas",
    sk5_d: "Inglés B2, alemán A1, español nativo",
    sk6_t: "Cloud y DevSecOps",
    sk7_t: "Aprendiendo ahora",
    hero_avail: "Abierto a oportunidades en cloud y DevSecOps",

    contact_title: "Contacto",
    contact_text: "Si buscas a alguien con ganas de aprender y de trabajar, escríbeme",
    contact_cv: "Descargar CV"
  },

  de: {
    meta_title: "Marcos Gutiérrez de los Reyes · Cloud & DevSecOps",
    meta_description: "Portfolio von Marcos Gutiérrez de los Reyes: ASIR-Student mit Spezialisierung in Cybersicherheit und Fokus auf AWS-Cloud und DevSecOps",
    lang_label: "Sprache",
    top_label: "Nach oben",

    nav_projects: "Projekte",
    nav_experience: "Erfahrung",
    nav_education: "Ausbildung",
    nav_certifications: "Zertifizierungen & Kurse",
    skip_link: "Zum Inhalt springen",
    nav_skills: "Fähigkeiten",
    nav_contact: "Kontakt",

    hero_title: "Ich baue Infrastruktur und lerne, sie von Anfang an abzusichern",
    hero_lead: "ASIR-Student mit Spezialisierung in Cybersicherheit, auf dem Weg in AWS-Cloud und DevSecOps: sichere Infrastruktur, Automatisierung und Sicherheit in CI/CD",
    rm_link: "Auf GitHub ansehen",
    rm_done: "Erledigt",
    rm_now: "In Arbeit",
    rm_next: "Als Nächstes",
    st1: "Linux & Skripting",
    st2: "Container",
    st3: "Härtung",
    st4: "Sicherheits-Scans",
    st5: "CI/CD-Gates",
    st6: "Cloud-IaC",

    projects_title: "Projekte",
    projects_intro: "Übungslabore und Umgebungen, die ich selbst aufgebaut habe",
    p1_title: "DevSecOps-Labor — Ubuntu Server",
    p1_desc: "Praxislabor, das Sicherheit auf jeder Ebene umsetzt, Schritt für Schritt dokumentiert. Bisher: Monitoring-Skripte in Bash und Python, eine containerisierte Flask-API und ein gehärteter Ubuntu-Server (SSH nur mit Schlüssel, ufw, fail2ban, automatische Sicherheitsupdates, Lynis 58 → 68). Als Nächstes: Sicherheitstests der Anwendung, sichere Container-Images, Sicherheitsprüfungen in CI/CD mit GitHub Actions und Terraform auf AWS",
    p2_title: "PostgreSQL-Zugriffskontroll-Labor",
    p2_desc: "Bereitstellung von PostgreSQL mit Docker und Konfiguration von Datenbanken, Benutzern, Rollen, Views und feingranularen Zugriffsrechten. Umsetzung von Rechtebeschränkungen sowie Backup- und Wiederherstellungsverfahren",

    exp_title: "Berufserfahrung",
    exp1_title: "Trainee Cloud & Sicherheit · Accenture",
    exp1_when: "04/2026 - 05/2026 · Madrid, Spanien",
    exp1_desc: "Berufliche Weiterbildung mit Kursen und praktischem Lernen in Cloud Computing, Kryptografie und Sicherheitsgrundlagen, als Basis für sichere Infrastruktur und Automatisierung",
    exp1_b1: "Allgemeine Schulung in Cybersicherheit abgeschlossen",
    exp1_b2: "Wissen durch technische Kurse und praktische Übungen aufgebaut",
    exp2_title: "Verkaufsmitarbeiter · JD Sports",
    exp2_when: "06/2025 - heute · Madrid, Spanien",
    exp2_desc: "Kundenservice, Verkaufsunterstützung und tägliche Filialabläufe in einem schnelllebigen Einzelhandelsumfeld",

    edu_title: "Ausbildung",
    edu1_title: "Schulung in Cybersicherheit · Accenture",
    edu1_when: "2026 – heute",
    edu1_desc: "Aufbau praktischer Kenntnisse durch praxisnahe Schulungen in AWS, Kryptografie und Sicherheitsgrundlagen. Auf meinem Wissen über Systeme und Netzwerke aufbauend arbeite ich auf Cloud und DevSecOps hin: sichere Infrastruktur, Automatisierung und Sicherheit in CI/CD",
    edu2_title: "Höhere Berufsausbildung (CFGS) in Netzwerk-IT-Systemadministration (ASIR)",
    edu2_when: "2025 - heute · XTART FP",
    edu2_desc: "Praxisnahe Ausbildung in Betriebssystemen, Netzwerken, Systemadministration, Datenbanken und Cybersicherheit, mit starkem Fokus auf praktische Labore und Infrastrukturverwaltung",

    cert_title: "Zertifizierungen & Kurse",

    skills_title: "Fähigkeiten",
    sk1_t: "Systeme",
    sk2_t: "Netzwerke",
    sk3_t: "Sicherheit",
    sk3_d: "Härtung, Schwachstellenanalyse, Nmap, Wireshark, Logs",
    sk4_t: "Scripting",
    sk5_t: "Sprachen",
    sk5_d: "Englisch B2, Deutsch A1, Spanisch (Muttersprache)",
    sk6_t: "Cloud & DevSecOps",
    sk7_t: "Lerne gerade",
    hero_avail: "Offen für Möglichkeiten in Cloud & DevSecOps",

    contact_title: "Kontakt",
    contact_text: "Wenn du jemanden suchst, der gern lernt und arbeitet, schreib mir",
    contact_cv: "Lebenslauf herunterladen"
  }
};

(function () {
  const elements = document.querySelectorAll("[data-i18n]");
  const buttons = document.querySelectorAll(".lang button");
  const langGroup = document.querySelector(".lang");
  const metaDescription = document.querySelector('meta[name="description"]');
  const toTop = document.querySelector(".to-top");

  // El inglés se toma directamente del HTML, que es la versión original.
  const en = {
    meta_title: document.title,
    meta_description: metaDescription ? metaDescription.getAttribute("content") : "",
    lang_label: langGroup ? langGroup.getAttribute("aria-label") : "",
    top_label: toTop ? toTop.getAttribute("aria-label") : ""
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
    if (dict.meta_title) document.title = dict.meta_title;
    if (metaDescription && dict.meta_description) metaDescription.setAttribute("content", dict.meta_description);
    if (langGroup && dict.lang_label) langGroup.setAttribute("aria-label", dict.lang_label);
    if (toTop && dict.top_label) {
      toTop.setAttribute("aria-label", dict.top_label);
      toTop.setAttribute("title", dict.top_label);
    }

    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });

    try { localStorage.setItem("lang", lang); } catch (e) { /* almacenamiento no disponible */ }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () { setLanguage(btn.dataset.lang); });
  });

  // Aparición suave de las secciones al hacer scroll.
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduceMotion) {
    const sections = document.querySelectorAll("main section:not(.hero)");
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    sections.forEach(function (s) { s.classList.add("reveal"); io.observe(s); });
  }

  // Botón de volver arriba: aparece al bajar un poco.
  if (toTop) {
    toTop.hidden = false;
    const toggleTop = function () {
      const show = window.scrollY > 400;
      toTop.classList.toggle("visible", show);
      toTop.tabIndex = show ? 0 : -1;
      toTop.setAttribute("aria-hidden", String(!show));
    };
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const home = document.getElementById("home");
      if (home) home.focus({ preventScroll: true });
    });
    window.addEventListener("scroll", toggleTop, { passive: true });
    toggleTop();
  }

  // Idioma: el guardado por el usuario; si no hay, el del navegador; si no, inglés.
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* almacenamiento no disponible */ }
  if (!saved) {
    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    saved = translations[browser] ? browser : "en";
  }
  if (saved !== "en" && translations[saved]) setLanguage(saved);
})();