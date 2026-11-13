/* ==========================================================================
   inscription.js — Logique du formulaire d'inscription en 4 étapes.
   Dépend de formations.js (FORMATIONS, getFormationById) et de
   main.js (CENTER_CONFIG, buildWhatsappLink).
   ========================================================================== */

let selectedFormationId = null;
let currentStep = 1;

document.addEventListener("DOMContentLoaded", () => {
  const wizard = document.getElementById("inscriptionWizard");
  if (!wizard) return;

  renderFormationPickList();
  preselectFromQueryString();
  bindStepNavigation();
  bindSubmit();
});

/* --------------------------------------------------- Étape 1 : choix - */
function renderFormationPickList(){
  const wrap = document.getElementById("formationPickList");
  if (!wrap) return;
  wrap.innerHTML = FORMATIONS.map(f => `
    <div class="insc-formation-pick" data-id="${f.id}" onclick="selectFormation(${f.id})">
      <img src="${f.image}" alt="${f.title}">
      <div class="flex-grow-1">
        <div class="fw-bold">${f.title}</div>
        <div class="small text-secondary">${f.category} · ${f.duration} · ${f.level}</div>
      </div>
      <i class="bi bi-check-circle-fill text-gold fs-5 d-none check-icon"></i>
    </div>
  `).join("");
}

function selectFormation(id){
  selectedFormationId = id;
  document.querySelectorAll(".insc-formation-pick").forEach(el => {
    const match = Number(el.getAttribute("data-id")) === id;
    el.classList.toggle("selected", match);
    el.querySelector(".check-icon")?.classList.toggle("d-none", !match);
  });
  document.getElementById("formationSelectError")?.classList.add("d-none");
}
window.selectFormation = selectFormation;

function preselectFromQueryString(){
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (id && getFormationById(id)) selectFormation(Number(id));
}

/* --------------------------------------------------- Navigation étapes */
function bindStepNavigation(){
  document.querySelectorAll("[data-next-step]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!validateStep(currentStep)) return;
      if (currentStep === 3) buildConfirmationSummary();
      goToStep(currentStep + 1);
    });
  });
  document.querySelectorAll("[data-prev-step]").forEach(btn => {
    btn.addEventListener("click", () => goToStep(currentStep - 1));
  });
}

function goToStep(step){
  if (step < 1 || step > 4) return;
  currentStep = step;
  document.querySelectorAll(".insc-panel").forEach(p => p.classList.toggle("active", Number(p.getAttribute("data-step")) === step));
  document.querySelectorAll(".insc-step").forEach(s => {
    const n = Number(s.getAttribute("data-step"));
    s.classList.toggle("active", n === step);
    s.classList.toggle("done", n < step);
  });
  const progressBar = document.getElementById("inscProgressBar");
  if (progressBar) progressBar.style.width = (step / 4 * 100) + "%";
  window.scrollTo({ top: document.getElementById("inscriptionWizard").offsetTop - 120, behavior:"smooth" });
}

function validateStep(step){
  if (step === 1){
    if (!selectedFormationId){
      document.getElementById("formationSelectError")?.classList.remove("d-none");
      return false;
    }
    return true;
  }
  if (step === 2){
    const fields = ["iName","iBirthdate","iPhone","iAddress"];
    let ok = true;
    fields.forEach(id => {
      const el = document.getElementById(id);
      el.classList.remove("is-invalid");
      if (!el.value.trim()){ el.classList.add("is-invalid"); ok = false; }
    });
    const email = document.getElementById("iEmail");
    email.classList.remove("is-invalid");
    if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){ email.classList.add("is-invalid"); ok = false; }
    return ok;
  }
  if (step === 3){
    const level = document.getElementById("iLevel");
    level.classList.remove("is-invalid");
    if (!level.value){ level.classList.add("is-invalid"); return false; }
    return true;
  }
  return true;
}

/* --------------------------------------------------- Résumé étape 4 -- */
function buildConfirmationSummary(){
  const f = getFormationById(selectedFormationId);
  const wrap = document.getElementById("confirmationSummary");
  if (!wrap || !f) return;
  wrap.innerHTML = `
    <div class="row-line"><span>Formation</span><strong>${f.title}</strong></div>
    <div class="row-line"><span>Durée</span><strong>${f.duration}</strong></div>
    <div class="row-line"><span>Nom</span><strong>${document.getElementById("iName").value}</strong></div>
    <div class="row-line"><span>Téléphone</span><strong>${document.getElementById("iPhone").value}</strong></div>
    <div class="row-line"><span>Niveau d'étude</span><strong>${document.getElementById("iLevel").value || "—"}</strong></div>
  `;
}

/* --------------------------------------------------- Envoi / WhatsApp */
function bindSubmit(){
  const confirmBtn = document.getElementById("inscSubmitBtn");
  if (!confirmBtn) return;

  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const f = getFormationById(selectedFormationId);
    const name = document.getElementById("iName").value.trim();
    const phone = document.getElementById("iPhone").value.trim();
    const whatsapp = document.getElementById("iWhatsapp").value.trim() || phone;
    const email = document.getElementById("iEmail").value.trim();
    const address = document.getElementById("iAddress").value.trim();
    const level = document.getElementById("iLevel").value;
    const profession = document.getElementById("iProfession").value.trim();
    const experience = document.getElementById("iExperience").value.trim();
    const message = document.getElementById("iMessage").value.trim();

    document.getElementById("confirmBanner")?.classList.add("show");
    window.scrollTo({ top: 0, behavior:"smooth" });

    const waText =
`Bonjour, je souhaite m'inscrire à la formation ${f.title}.
Nom complet : ${name}
Téléphone : ${phone}
WhatsApp : ${whatsapp}
${email ? "Email : " + email + "\n" : ""}Adresse : ${address}
Niveau d'étude : ${level}
${profession ? "Profession : " + profession + "\n" : ""}${experience ? "Expérience : " + experience + "\n" : ""}${message ? "Message : " + message + "\n" : ""}Merci de confirmer ma place pour la prochaine session.`;

    setTimeout(() => {
      window.open(`https://wa.me/${CENTER_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`, "_blank", "noopener");
    }, 400);
  });
}
