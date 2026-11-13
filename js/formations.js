/* ==========================================================================
   formations.js — Données des formations + fonctions de rendu partagées.
   ⚙️  Pour AJOUTER / MODIFIER / SUPPRIMER une formation, éditez uniquement
       le tableau FORMATIONS ci-dessous. Chaque formation est indépendante.
   ========================================================================== */

const FORMATIONS = [
  {
    id: 1,
    title: "Développement Web",
    category: "Informatique",
    duration: "3 mois",
    level: "Débutant",
    mode: "Présentiel",
    schedule: "Soir / Weekend",
    seats: "15 places",
    price: "[PRIX]",
    startDate: "[DATE]",
    status: "open", // open | soon | closed
    statusLabel: "Inscriptions ouvertes",
    location: "Lomé",
    certification: "Certificat de fin de formation délivré par le centre",
    popular: true,
    description: "Apprenez à concevoir et développer des sites et applications web modernes, du HTML/CSS jusqu'aux bases de données, à travers une pédagogie pratique et orientée projet.",
    modules: [
      "Introduction au développement web",
      "HTML & CSS",
      "JavaScript",
      "Bases de données",
      "Projet pratique"
    ],
    prerequisites: "Aucun prérequis technique. Une aisance de base avec l'ordinateur est recommandée.",
    outcomes: "Développeur web junior, freelance, poursuite vers des formations avancées en programmation.",
    image: "https://images.unsplash.com/photo-1643199187247-b3b6009bf0bb?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    title: "Gestion & Comptabilité",
    category: "Gestion",
    duration: "4 mois",
    level: "Débutant à intermédiaire",
    mode: "Présentiel",
    schedule: "Jour",
    seats: "20 places",
    price: "[PRIX]",
    startDate: "[DATE]",
    status: "open",
    statusLabel: "Inscriptions ouvertes",
    location: "Lomé",
    certification: "Certificat de fin de formation délivré par le centre",
    popular: true,
    description: "Maîtrisez les fondamentaux de la gestion d'entreprise, de la comptabilité générale et des outils financiers indispensables à toute activité professionnelle.",
    modules: [
      "Principes de gestion d'entreprise",
      "Comptabilité générale",
      "Gestion budgétaire",
      "Outils bureautiques de gestion",
      "Étude de cas pratique"
    ],
    prerequisites: "Niveau BEPC ou équivalent recommandé.",
    outcomes: "Assistant comptable, gestionnaire administratif, poursuite d'études en finance.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    title: "Marketing Digital",
    category: "Marketing",
    duration: "2 mois",
    level: "Débutant",
    mode: "Présentiel",
    schedule: "Soir / Weekend",
    seats: "18 places",
    price: "[PRIX]",
    startDate: "[DATE]",
    status: "soon",
    statusLabel: "Bientôt complet",
    location: "Lomé",
    certification: "Certificat de fin de formation délivré par le centre",
    popular: false,
    description: "Développez une stratégie de communication digitale efficace : réseaux sociaux, contenu, publicité en ligne et outils d'analyse pour faire grandir une activité.",
    modules: [
      "Fondamentaux du marketing digital",
      "Réseaux sociaux et création de contenu",
      "Publicité en ligne",
      "Outils d'analyse et de suivi",
      "Projet de campagne"
    ],
    prerequisites: "Aucun prérequis particulier.",
    outcomes: "Chargé de communication digitale, community manager, entrepreneur.",
    image: "https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    title: "Anglais Professionnel",
    category: "Langues",
    duration: "3 mois",
    level: "Tous niveaux",
    mode: "Présentiel",
    schedule: "Soir",
    seats: "16 places",
    price: "[PRIX]",
    startDate: "[DATE]",
    status: "open",
    statusLabel: "Inscriptions ouvertes",
    location: "Lomé",
    certification: "Attestation de niveau délivrée par le centre",
    popular: false,
    description: "Renforcez votre anglais dans un cadre professionnel : communication orale, rédaction, vocabulaire des affaires, avec une évaluation de niveau à l'entrée.",
    modules: [
      "Évaluation et mise à niveau",
      "Communication orale",
      "Anglais des affaires",
      "Rédaction professionnelle",
      "Mise en situation"
    ],
    prerequisites: "Test de positionnement à l'inscription, aucun niveau minimum requis.",
    outcomes: "Communication professionnelle à l'international, opportunités d'emploi élargies.",
    image: "https://images.unsplash.com/photo-1512238972088-8acb84db0771?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    title: "Entrepreneuriat & Création d'Entreprise",
    category: "Entrepreneuriat",
    duration: "2 mois",
    level: "Tous niveaux",
    mode: "Présentiel",
    schedule: "Weekend",
    seats: "20 places",
    price: "[PRIX]",
    startDate: "[DATE]",
    status: "open",
    statusLabel: "Inscriptions ouvertes",
    location: "Lomé",
    certification: "Certificat de fin de formation délivré par le centre",
    popular: false,
    description: "Passez de l'idée au plan d'action : étude de marché, modèle économique, gestion de projet et démarches pour lancer et structurer votre propre activité.",
    modules: [
      "De l'idée au projet",
      "Étude de marché",
      "Modèle économique et financement",
      "Gestion de projet",
      "Présentation du projet final"
    ],
    prerequisites: "Avoir une idée de projet ou un intérêt pour l'entrepreneuriat.",
    outcomes: "Création d'entreprise, gestion de micro-projet, développement d'activité indépendante.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    title: "Bureautique & Outils Professionnels",
    category: "Professionnel",
    duration: "6 semaines",
    level: "Débutant",
    mode: "Présentiel",
    schedule: "Jour",
    seats: "22 places",
    price: "[PRIX]",
    startDate: "[DATE]",
    status: "open",
    statusLabel: "Inscriptions ouvertes",
    location: "Lomé",
    certification: "Attestation de compétences délivrée par le centre",
    popular: true,
    description: "Formation courte et pratique aux outils bureautiques indispensables (traitement de texte, tableur, présentation) pour être immédiatement opérationnel en entreprise.",
    modules: [
      "Prise en main de l'ordinateur",
      "Traitement de texte",
      "Tableur et calculs",
      "Présentation professionnelle",
      "Mise en pratique administrative"
    ],
    prerequisites: "Aucun prérequis, formation ouverte aux débutants complets.",
    outcomes: "Poste administratif, secrétariat, assistanat de direction.",
    image: "https://images.unsplash.com/photo-1643199121319-b3b5695e4acb?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    title: "Comptabilité Avancée & Fiscalité",
    category: "Gestion",
    duration: "5 mois",
    level: "Intermédiaire",
    mode: "Présentiel",
    schedule: "Soir",
    seats: "15 places",
    price: "[PRIX]",
    startDate: "[DATE]",
    status: "closed",
    statusLabel: "Session complète",
    location: "Lomé",
    certification: "Certificat de fin de formation délivré par le centre",
    popular: false,
    description: "Formation approfondie destinée à ceux ayant déjà des bases en comptabilité, couvrant la fiscalité, les états financiers et les logiciels comptables professionnels.",
    modules: [
      "Rappels de comptabilité générale",
      "Fiscalité des entreprises",
      "États financiers",
      "Logiciels comptables",
      "Cas pratiques avancés"
    ],
    prerequisites: "Formation en Gestion & Comptabilité ou expérience équivalente requise.",
    outcomes: "Comptable, contrôleur de gestion junior, cabinet d'expertise.",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    title: "Community Management",
    category: "Marketing",
    duration: "6 semaines",
    level: "Débutant",
    mode: "Présentiel",
    schedule: "Weekend",
    seats: "18 places",
    price: "[PRIX]",
    startDate: "[DATE]",
    status: "open",
    statusLabel: "Inscriptions ouvertes",
    location: "Lomé",
    certification: "Attestation de compétences délivrée par le centre",
    popular: false,
    description: "Apprenez à gérer et animer les réseaux sociaux d'une marque ou d'une entreprise : création de contenu, planification et relation avec la communauté en ligne.",
    modules: [
      "Rôle du community manager",
      "Création de contenu visuel",
      "Planification éditoriale",
      "Animation de communauté",
      "Reporting et statistiques"
    ],
    prerequisites: "Aucun prérequis, un smartphone ou ordinateur personnel est recommandé.",
    outcomes: "Community manager, assistant communication, activité freelance.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
  }
];

/* ---------------------------------------------------- Helpers publics - */
function getFormationById(id){
  return FORMATIONS.find(f => f.id === Number(id));
}

function statusIcon(status){
  return status === "open" ? "open" : status === "soon" ? "soon" : "closed";
}

/* Génère le HTML d'une carte formation */
function formationCardHTML(f){
  const cls = statusIcon(f.status);
  return `
  <div class="col-md-6 col-lg-4 formation-col reveal" data-category="${f.category}" data-title="${f.title.toLowerCase()}">
    <div class="formation-card">
      <div class="img-wrap">
        <img src="${f.image}" alt="Formation ${f.title} - ${f.category}" loading="lazy">
        ${f.popular ? '<span class="badge-tag">Populaire</span>' : ''}
        <span class="badge-status ${cls}">${f.statusLabel}</span>
      </div>
      <div class="body">
        <div class="cat">${f.category}</div>
        <h5>${f.title}</h5>
        <div class="formation-specs">
          <span><i class="bi bi-clock-fill"></i> ${f.duration}</span>
          <span><i class="bi bi-bar-chart-fill"></i> ${f.level}</span>
          <span><i class="bi bi-easel-fill"></i> ${f.mode}</span>
        </div>
        <div class="cta-row">
          <button class="btn btn-outline-navy btn-sm-pill" onclick="openFormationModal(${f.id})">Voir la formation</button>
          <a href="inscription.html?id=${f.id}" class="btn btn-gold btn-sm-pill text-center">S'inscrire</a>
        </div>
      </div>
    </div>
  </div>`;
}

function renderFormations(containerId, list){
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = list.length ? list.map(formationCardHTML).join("") :
    `<div class="col-12 text-center py-5"><i class="bi bi-search display-4 text-gold mb-3 d-block"></i><p class="mb-0">Aucune formation ne correspond à votre recherche.</p></div>`;
  if (window.initRevealOnScroll) window.initRevealOnScroll();
  const countEl = document.getElementById("resultsCount");
  if (countEl) countEl.innerHTML = `<strong>${list.length}</strong> formation${list.length > 1 ? "s" : ""} disponible${list.length > 1 ? "s" : ""}`;
}

/* Filtrage catégorie + recherche texte combinés */
function initFormationFilters(containerId){
  const buttons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("formationSearchInput");
  let activeCategory = "Toutes";

  const applyFilters = () => {
    const term = (searchInput?.value || "").toLowerCase().trim();
    let filtered = activeCategory === "Toutes" ? FORMATIONS : FORMATIONS.filter(f => f.category === activeCategory);
    if (term) filtered = filtered.filter(f => f.title.toLowerCase().includes(term) || f.category.toLowerCase().includes(term));
    renderFormations(containerId, filtered);
  };

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-filter");
      applyFilters();
    });
  });
  searchInput?.addEventListener("input", applyFilters);
}

/* ------------------------------------------------------- Modal détails */
function openFormationModal(id){
  const f = getFormationById(id);
  if (!f) return;
  const modalEl = document.getElementById("formationModal");
  if (!modalEl) { window.location.href = `inscription.html?id=${id}`; return; }

  document.getElementById("fmTitle").textContent = f.title;
  document.getElementById("fmCategory").textContent = f.category;
  document.getElementById("fmImage").setAttribute("src", f.image);
  document.getElementById("fmDesc").textContent = f.description;
  document.getElementById("fmDuration").textContent = f.duration;
  document.getElementById("fmLevel").textContent = f.level;
  document.getElementById("fmMode").textContent = f.mode;
  document.getElementById("fmSchedule").textContent = f.schedule;
  document.getElementById("fmSeats").textContent = f.seats;
  document.getElementById("fmStartDate").textContent = "Début : " + f.startDate;
  document.getElementById("fmCertification").textContent = f.certification;
  document.getElementById("fmPrerequisites").textContent = f.prerequisites;
  document.getElementById("fmOutcomes").textContent = f.outcomes;
  document.getElementById("fmModules").innerHTML = f.modules.map((m,i) =>
    `<div class="fd-module"><div class="num">${i+1}</div><div>${m}</div></div>`
  ).join("");
  document.getElementById("fmInscrireBtn").setAttribute("href", `inscription.html?id=${f.id}`);

  const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
  bsModal.show();
}
