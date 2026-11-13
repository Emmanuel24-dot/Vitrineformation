/* ==========================================================================
   main.js — Comportements communs à toutes les pages.
   ⚙️  Coordonnées du centre : modifiez uniquement CENTER_CONFIG ci-dessous.
   ========================================================================== */

const CENTER_CONFIG = {
  name: "[NOM DU CENTRE]",
  slogan: "Votre avenir commence par une bonne formation.",
  phone: "+228 XX XX XX XX",
  phoneHref: "tel:+228XXXXXXXX",
  whatsappNumber: "228XXXXXXXX",             // [NUMÉRO WHATSAPP] sans le "+"
  whatsappDefaultMessage: "Bonjour, je souhaite avoir des informations sur vos formations.",
  email: "[EMAIL]",
  address: "[ADRESSE], Lomé, Togo",
  hours: [
    { day: "Lundi – Vendredi", time: "08:00 – 18:00" },
    { day: "Samedi", time: "08:00 – 14:00" }
  ],
  socials: { facebook: "#", instagram: "#", linkedin: "#", tiktok: "#" },
  mapsEmbedUrl: "https://www.google.com/maps?q=6.1319,1.2228&z=15&output=embed"
};

document.addEventListener("DOMContentLoaded", () => {
  populateConfig();
  initNavbar();
  initMobileMenuClose();
  initRevealOnScroll();
  initCounters();
  initLightbox();
  initWhatsappLinks();
  initFooterYear();
});

/* --------------------------------------- Injecte les infos du config - */
function populateConfig(){
  document.querySelectorAll("[data-center-name]").forEach(el => el.textContent = CENTER_CONFIG.name);
  document.querySelectorAll("[data-center-slogan]").forEach(el => el.textContent = CENTER_CONFIG.slogan);
  document.querySelectorAll("[data-center-phone]").forEach(el => el.textContent = CENTER_CONFIG.phone);
  document.querySelectorAll("[data-center-phone-href]").forEach(el => el.setAttribute("href", CENTER_CONFIG.phoneHref));
  document.querySelectorAll("[data-center-email]").forEach(el => el.textContent = CENTER_CONFIG.email);
  document.querySelectorAll("[data-center-email-href]").forEach(el => el.setAttribute("href", "mailto:" + CENTER_CONFIG.email));
  document.querySelectorAll("[data-center-address]").forEach(el => el.textContent = CENTER_CONFIG.address);
  document.querySelectorAll("[data-maps-src]").forEach(el => el.setAttribute("src", CENTER_CONFIG.mapsEmbedUrl));

  const hoursList = document.querySelector("[data-center-hours]");
  if (hoursList){
    hoursList.innerHTML = CENTER_CONFIG.hours.map(h =>
      `<li class="d-flex justify-content-between border-bottom py-2"><span>${h.day}</span><strong>${h.time}</strong></li>`
    ).join("");
  }
  const hoursShort = document.querySelector("[data-center-hours-short]");
  if (hoursShort && CENTER_CONFIG.hours[0]) hoursShort.innerHTML = `${CENTER_CONFIG.hours[0].day}<br>${CENTER_CONFIG.hours[0].time}`;

  document.querySelectorAll("[data-social-facebook]").forEach(el => el.setAttribute("href", CENTER_CONFIG.socials.facebook));
  document.querySelectorAll("[data-social-instagram]").forEach(el => el.setAttribute("href", CENTER_CONFIG.socials.instagram));
  document.querySelectorAll("[data-social-linkedin]").forEach(el => el.setAttribute("href", CENTER_CONFIG.socials.linkedin));
  document.querySelectorAll("[data-social-tiktok]").forEach(el => el.setAttribute("href", CENTER_CONFIG.socials.tiktok));
}

/* --------------------------------------------------- Liens WhatsApp -- */
function buildWhatsappLink(message){
  return `https://wa.me/${CENTER_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
function initWhatsappLinks(){
  document.querySelectorAll("[data-whatsapp-default]").forEach(el => {
    el.setAttribute("href", buildWhatsappLink(CENTER_CONFIG.whatsappDefaultMessage));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

/* ------------------------------------------------------- Navbar ------ */
function initNavbar(){
  const nav = document.getElementById("mainNavbar");
  if (!nav) return;
  const toggle = () => nav.classList.toggle("is-scrolled", window.scrollY > 30);
  toggle();
  window.addEventListener("scroll", toggle, { passive:true });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-main .nav-link[href*='#']");
  if (sections.length){
    const spy = () => {
      let current = "";
      sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 140) current = sec.getAttribute("id"); });
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href").endsWith("#" + current)));
    };
    window.addEventListener("scroll", spy, { passive:true });
    spy();
  }
}

function initMobileMenuClose(){
  const navCollapse = document.getElementById("navbarContent");
  if (!navCollapse) return;
  navCollapse.querySelectorAll("a.nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navCollapse.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
    });
  });
}

/* ------------------------------------------------- Reveal on scroll -- */
function initRevealOnScroll(){
  const items = document.querySelectorAll(".reveal:not(.in)");
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting){ entry.target.classList.add("in"); io.unobserve(entry.target); } });
  }, { threshold:0.12 });
  items.forEach(el => io.observe(el));
}
window.initRevealOnScroll = initRevealOnScroll;

/* -------------------------------------------------- Compteurs animés - */
function initCounters(){
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;
  const animate = (el) => {
    const raw = el.getAttribute("data-counter");
    if (isNaN(parseFloat(raw))){ el.textContent = raw; return; }
    const target = parseFloat(raw);
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1500;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString("fr-FR") + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString("fr-FR") + suffix;
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting){ animate(entry.target); io.unobserve(entry.target); } });
  }, { threshold:0.5 });
  counters.forEach(el => io.observe(el));
}

/* --------------------------------------------------------- Lightbox -- */
function initLightbox(){
  const overlay = document.getElementById("lightboxOverlay");
  const img = document.getElementById("lightboxImage");
  if (!overlay || !img) return;
  document.querySelectorAll(".gallery-item img").forEach(thumb => {
    thumb.addEventListener("click", () => {
      img.setAttribute("src", thumb.getAttribute("src"));
      img.setAttribute("alt", thumb.getAttribute("alt") || "");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });
  const closeBox = () => { overlay.classList.remove("active"); document.body.style.overflow = ""; };
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeBox(); });
  document.getElementById("lightboxClose")?.addEventListener("click", closeBox);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeBox(); });
}

function initFooterYear(){
  const el = document.getElementById("footerYear");
  if (el) el.textContent = new Date().getFullYear();
}
