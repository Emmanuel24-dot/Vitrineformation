/* ==========================================================================
   contact.js — Validation du formulaire de contact.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const banner = document.getElementById("contactConfirm");

  const showError = (input, message) => {
    input.classList.add("is-invalid");
    const msg = input.parentElement.querySelector(".invalid-msg");
    if (msg){ msg.textContent = message; msg.classList.add("show"); }
  };
  const clearError = (input) => {
    input.classList.remove("is-invalid");
    const msg = input.parentElement.querySelector(".invalid-msg");
    if (msg) msg.classList.remove("show");
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("was-validated-custom");
    let valid = true;

    const name = document.getElementById("cName");
    const phone = document.getElementById("cPhone");
    const email = document.getElementById("cEmail");
    const formation = document.getElementById("cFormation");
    const message = document.getElementById("cMessage");

    [name, phone, email, formation, message].forEach(clearError);

    if (!name.value.trim()){ showError(name, "Veuillez saisir votre nom."); valid = false; }
    if (!phone.value.trim()){ showError(phone, "Veuillez saisir votre numéro de téléphone."); valid = false; }
    else if (!/^[0-9+ ]{8,}$/.test(phone.value.trim())){ showError(phone, "Veuillez saisir un numéro de téléphone valide."); valid = false; }
    if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){ showError(email, "Veuillez saisir un email valide."); valid = false; }
    if (!message.value.trim()){ showError(message, "Veuillez saisir votre message."); valid = false; }

    if (!valid) return;

    banner.classList.add("show");
    banner.scrollIntoView({ behavior:"smooth", block:"center" });
    form.reset();
    form.classList.remove("was-validated-custom");
    setTimeout(() => banner.classList.remove("show"), 8000);
  });
});
