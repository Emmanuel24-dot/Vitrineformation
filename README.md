# Site vitrine — Centre de formation professionnelle (Lomé, Togo)

Site statique en **HTML5 / CSS3 / Bootstrap 5 / JavaScript vanilla**, sans dépendance de build.

## Structure

```text
centre-formation/
├── index.html               Accueil (hero, recherche, formations, sessions, à propos, tarifs, formateurs, avis, FAQ)
├── formations.html           Liste complète des formations avec filtres + recherche texte
├── formation-details.html    Fiche détaillée d'une formation (?id=1, ?id=2, ...)
├── inscription.html          Formulaire d'inscription en 4 étapes + résumé + WhatsApp
├── a-propos.html             Histoire, mission, vision, valeurs, chiffres clés
├── formateurs.html           Grille complète des formateurs
├── actualites.html           Événements du centre (portes ouvertes, ateliers, cérémonies)
├── contact.html               Formulaire de contact validé + carte
├── css/
│   └── style.css              Feuille de style unique (design tokens, composants, responsive)
├── js/
│   ├── main.js                 Config centre (CENTER_CONFIG), navbar, compteurs, lightbox
│   ├── formations.js           Données des formations (FORMATIONS) + rendu + filtres + modal détails
│   ├── inscription.js          Logique du tunnel d'inscription en 4 étapes
│   └── contact.js              Validation du formulaire de contact
├── images/                     Dossier prévu pour vos propres photos
└── README.md
```

## Personnalisation rapide

### 1. Coordonnées du centre
Tout se passe dans `js/main.js`, dans l'objet `CENTER_CONFIG` :

```js
const CENTER_CONFIG = {
  name: "[NOM DU CENTRE]",
  phone: "+228 XX XX XX XX",
  whatsappNumber: "228XXXXXXXX",   // [NUMÉRO WHATSAPP] sans le "+"
  email: "[EMAIL]",
  address: "[ADRESSE], Lomé, Togo",
  mapsEmbedUrl: "...",
  ...
};
```
Ces valeurs se répercutent automatiquement sur toutes les pages (navbar, footer, section localisation, liens WhatsApp).

### 2. Formations
Tout se passe dans `js/formations.js`, dans le tableau `FORMATIONS`. Chaque formation est un objet indépendant (id, title, category, duration, level, mode, price, startDate, status, modules, prerequisites, outcomes, image...). Pour ajouter une formation, copiez un bloc existant et changez l'`id`.

Le statut (`status`) contrôle le badge affiché : `"open"` (Inscriptions ouvertes), `"soon"` (Bientôt complet), `"closed"` (Session complète).

### 3. Formateurs
Directement dans `formateurs.html` (grille complète) et `index.html` (aperçu de 4 formateurs) — nom, fonction, spécialité, années d'expérience et photo sont à modifier dans chaque carte `.teacher-card`.

### 4. Remplacer les images
Les images utilisées proviennent d'Unsplash (libres de droits) et servent de démonstration réaliste. Déposez vos photos dans `images/hero/`, `images/formations/`, `images/formateurs/`, `images/galerie/`, `images/evenements/`, `images/partenaires/`, puis remplacez les URL correspondantes dans les fichiers HTML et dans `js/formations.js`.

### 5. Google Maps
Remplacez `mapsEmbedUrl` dans `CENTER_CONFIG` par le lien d'intégration (`https://www.google.com/maps?q=LAT,LNG&z=15&output=embed`) correspondant à la vraie adresse du centre.

## Fonctionnalités clés

- **Recherche de formation** en hero + **filtres par catégorie et recherche texte** sur `formations.html`, avec compteur de résultats mis à jour en direct.
- **Modal détails formation** (accueil et page formations) + **page dédiée** `formation-details.html?id=X` avec programme, prérequis et débouchés.
- **Tunnel d'inscription en 4 étapes** (formation → informations → profil → confirmation) avec barre de progression et résumé automatique.
- **Génération automatique du message WhatsApp** d'inscription et de contact formation-spécifique.
- **Bouton WhatsApp flottant** permanent avec message par défaut configurable.
- **Formulaire de contact** avec validation JavaScript et messages d'erreur explicites.
- **Compteurs animés, apparitions au scroll, hover cartes, carousels** (témoignages, partenaires) — respectent `prefers-reduced-motion`.
- **Entièrement responsive** de 375px à 1920px, menu hamburger sur mobile.

## Prérequis techniques

Aucun serveur ni build nécessaire : ouvrez `index.html` dans un navigateur, ou déployez le dossier tel quel sur n'importe quel hébergement statique.
