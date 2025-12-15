## Portfolio personnel – Alexandre Valet

Ce dépôt contient le code de mon **portfolio personnel**. Il présente mon profil de **développeur React / FullStack**, mes projets récents et un moyen simple de me contacter.

Le site est construit avec **Next.js (App Router)** et met en avant une expérience moderne : thème clair/sombre, animations, internationalisation (FR/EN) et composants UI personnalisés.

---

## Présentation du projet

- **Objectif** : proposer une vitrine claire et moderne de mon travail de développeur (projets, stack technique, contact).
- **Public visé** : recruteurs, clients potentiels, collaborateurs techniques et toute personne intéressée par mes projets.
- **Pages / sections principales** :
  - `Hero` : introduction (salutation, rôle, courte description).
  - `Projects` : mise en avant de projets clés avec stack et liens de démo.
  - `Contact` : formulaire de contact simple pour m’envoyer un message.

L’entrée principale se trouve dans `app/page.tsx`, qui compose ces sections.

---

## Fonctionnalités

- **Internationalisation (FR/EN)** :
  - Basée sur un contexte de langue (`LanguageProvider`) et un composant `LanguageSwitch`.
  - Textes gérés dans `lib/translations.ts`.
  - Hero, Projets et Contact s’adaptent dynamiquement à la langue sélectionnée.

- **Thème clair / sombre** :
  - Géré via `ThemeProvider` (`next-themes`) et le composant `ThemeSwitchIcon`.
  - Transition fluide entre les thèmes avec `ThemeTransition`.

- **Section Hero animée** :
  - Utilise des composants UI (`BlurFade`, `DotPattern`, carrousel de logos avec `InfiniteImageCarousel`) pour un rendu dynamique.
  - Affiche mon rôle et une courte description de mon activité.

- **Section Projets** :
  - Données des projets centralisées dans `lib/projects-data.tsx` (titre, lien, miniatures, stack technique).
  - Utilisation d’un `CarouselParallax` pour mettre en avant les projets.
  - Détail des stacks techniques projet par projet (`React`, `Next.js`, `Tailwind`, `TypeScript`, `Node.js`, `PostgreSQL`, `Mapbox`, `Symfony`, `PHP`, `MySQL`, `Docker`, etc.).
  - Ouverture d’un `Dialog` détaillé pour chaque projet avec description, stack et lien externe.

- **Section Contact** :
  - Formulaire stylé avec composants UI (`MagicCard`, `Input`, `Textarea`, `Button`, `Label`).
  - Textes dynamiques via le contexte de langue.

- **UI & animations** :
  - Composants UI personnalisés (inspirés notamment de shadcn/ui) dans `components/ui/`.
  - Utilisation de bibliothèques d’animation (GSAP, Framer Motion).

---

## Stack technique

- **Framework** : Next.js `16` (App Router)
- **Langage** : React `19`, TypeScript
- **Styling / UI** :
  - `tailwindcss` v4
  - Composants UI personnalisés (shadcn/ui, cartes, carrousels, dialog, etc.)
- **Thème & accessibilité** :
  - `next-themes` pour le dark mode
- **Icônes & visuels** :
  - `react-icons` pour les logos technos
  - Images de projets dans `public/projects/`
- **Animations** :
  - `gsap`, `@gsap/react`, `framer-motion`, `motion`

Voir `package.json` pour la liste complète des dépendances.

---

## Prise en main du projet

### Prérequis

- Node.js (version récente recommandée, compatible avec Next.js 16)
- Un gestionnaire de paquets (npm, pnpm ou yarn)

### Installation

Cloner le dépôt puis installer les dépendances :

```bash
git clone <url-du-repo>
cd personal-portfolio
npm install
```

> Tu peux remplacer `npm` par `pnpm` ou `yarn` selon tes préférences.

### Lancer le serveur de développement

```bash
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

---

## Structure du projet

Aperçu simplifié des dossiers principaux :

- `app/`
  - `layout.tsx` : layout global avec `ThemeProvider`, `LanguageProvider`, switch de langue et de thème.
  - `page.tsx` : page d’accueil composant les sections `Hero`, `Projects`, `Contact`.
- `components/`
  - `Hero.tsx` : section d’intro avec textes traduits et carrousel de logos technos.
  - `Projects.tsx` : liste des projets, carrousel et modale de détails.
  - `Contact.tsx` : formulaire de contact.
  - `contexts/LanguageContext.tsx` : gestion de la langue et fonction de traduction `t`.
  - `theme-provider.tsx`, `ThemeSwitchIcon.tsx`, `ThemeTransition.tsx`, `LanguageSwitch.tsx` : gestion du thème et du multi-langue.
  - `ui/` : composants d’interface réutilisables (boutons, cartes, carrousels, patterns, etc.).
- `lib/`
  - `translations.ts` : dictionnaire de traductions FR/EN.
  - `projects-data.tsx` : données des projets (titre, description, lien, stack).
  - `utils.ts` : helpers utilitaires.
- `public/`
  - `projects/` : miniatures des projets.
  - Autres assets SVG.

---

## Déploiement

Le projet est pensé pour être déployé facilement sur une plateforme compatible Next.js, par exemple **Vercel**.

En général :

1. Connecter le dépôt Git à Vercel (ou autre plateforme).
2. Laisser la plateforme détecter automatiquement le framework **Next.js**.
3. Utiliser la commande de build par défaut :

```bash
npm run build
```

4. Démarrer en production avec :

```bash
npm start
```

Selon la plateforme choisie, la configuration peut varier légèrement.

---

## Auteur

- **Alexandre Valet** – Développeur React / FullStack  
- Projets présentés : `RescueLog`, `GéoPatrimoines`, `RescueLearn` et autres expérimentations web.

N’hésite pas à ouvrir une issue ou une discussion si tu souhaites échanger à propos du code ou des projets présentés.

