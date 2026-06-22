// projet portfolio.ts

import { images } from '../../assets/img/projects/portfolio/index.ts';

import { skillsList } from '../skills/index.ts';

const linkedSkills = skillsList.filter(skill =>
    ["Vue", "TypeScript", "CSS", "GitHub"].includes(skill.name)
);

const otherSkills = skillsList.filter(skill =>
    ["HTML",, "JavaScript", "Bulma", "VSCode", "Figma"].includes(skill.name)
);

const allLinkedSkills = [...linkedSkills,... otherSkills]

export const portfolio = {

    name: "Portfolio",
    localesName: "portfolio",
    icon: images[0],
    images: images,
    tags: ["Frontend"],
    cardLinkedSkills: linkedSkills, 
    allLinkedSkills: allLinkedSkills,
    link: "/portfolio/404",
    presentation : "/projet/portfolio",
    
}

export const portfolio_EN = {
    TITLE : "Portfolio",
    CARD_DESCRIPTION : "Personal website to showcase my projects and personal information.",

    CONTEXT : "Personal portfolio.",

    DESCRIPTION: "Development of an interactive portfolio as a Single Page Application, built with Vue 3, TypeScript, Vite, and Bulma. Dynamic presentation of projects, résumé, and skills, with special attention to user experience, responsive design, and SEO.",

    GOAL_TITLE: "Project Goal",
    GOAL_DESCRIPTION: "Create a junior web developer portfolio that is accessible, fast, easy to maintain, and highlights both technical skills (UI design, animation, routing) and content (projects, downloads, career path).",

    MAIN_FEATURES_TITLE: "Main Features",
    MAIN_FEATURES_LIST: [
        "Smooth SPA navigation using Vue Router and scroll management.",
        "Project pages with separators, animations, and dark mode.",
        "Custom UI components: skills, downloads, modals, color themes.",
        "Responsive layout with Bulma (breakpoints, grid, menus, buttons).",
        "Easy updates via structured TypeScript data files.",
        "Lighthouse optimization: SEO, performance, accessibility.",
        "Custom pages for errors, legal notices, etc.",
    ],

    ORGANISATION_TITLE: "Code Organization",
    ORGANISATION_DESCRIPTION: "Components are organized by domain (layout, UI, page sections). Assets (images, PDFs) are stored in `/assets`. Project data is centralized in `/data/projects/`. Routing is handled in `/pages`, each route matching a section or detailed project.",

    ENVIRONMENT_TITLE: "Technical Environment",
    ENVIRONMENT_DESCRIPTION: "Vue 3 with `<script setup>` TS, Vite for bundling, Bulma CSS for styling, i18next for localization, GitHub and GitHub Pages for hosting and continuous deployment.",

    UX_TITLE: "Design & User Experience",
    UX_DESCRIPTION: "Mobile-first mockups, animated transitions, customizable colors, native dark/light mode, interactive components, download areas, zoom effect, scroll-to-top, visual action feedback. Inspired by best modern UI practices.",

    MAINTAIN_TITLE: "Documentation & Maintainability",
    MAINTAIN_DESCRIPTION: "Code documented via comments and README, clear folder structure, consistent naming conventions. Designed for easy extension (adding new projects, updating assets/data, translations) without a full redesign.",

    SEO_TITLE: "SEO and Accessibility",
    SEO_DESCRIPTION: "Optimized metadata, accessible semantic markup, dynamic page titles, alt text for all images, standards-compliant for good search ranking and increased accessibility.",

    DOWNLOADS_TITLE: "Downloads & Resources",
    DOWNLOADS_DESCRIPTION: "Dedicated section to download the résumé, PDF documents from presentations, or links to GitHub and professional networks.",

    DEPLOY_TITLE: "Deployment & Hosting",
    DEPLOY_DESCRIPTION: "The project is deployed via GitHub Pages, with Vite configuration for relative paths and custom 404 pages. CI/CD managed via GitHub Actions.",
};


export const portfolio_FR = {
    TITLE : "Portfolio",
    CARD_DESCRIPTION : "Site web personnel pour afficher mes projets et mes informations personnelles.",

    CONTEXT : "Portfolio personnel.",

  DESCRIPTION: "Développement d’un portfolio interactif en Single Page Application, réalisé avec Vue 3, TypeScript, Vite et Bulma. Présentation dynamique de projets, CV et compétences, avec une attention particulière portée à l’expérience utilisateur, au responsive design et au SEO.",

  GOAL_TITLE: "Objectif du projet",
  GOAL_DESCRIPTION: "Créer un portfolio de développeur web junior, accessible, rapide, facile à maintenir, et valorisant aussi bien la technique (UI graphique, animation, routing) que les contenus (projets, téléchargements, parcours).",

  MAIN_FEATURES_TITLE: "Fonctionnalités principales",
  MAIN_FEATURES_LIST: [
    "Navigation SPA fluide via Vue Router et gestion du scroll.",
    "Pages projets consultables, avec séparateurs, animations, et dark mode.",
    "Composants UI custom: skills, downloads, modaux, thèmes colorés.",
    "Responsive avec Bulma (Breakpoints, grille, menus, boutons).",
    "Mises à jour faciles via fichiers de données TypeScript structurés.",
    "Optimisation Lighthouse : SEO, performance, accessibilité.",
    "Pages personnalisées pour les erreurs, mentions légales, etc.",
  ],

  ORGANISATION_TITLE: "Organisation du code",
  ORGANISATION_DESCRIPTION: "Les composants sont organisés par domaine (layout, UI, sections de page). Les assets (images, PDF) sont stockés dans `/assets`. Les données de projets sont centralisées dans `/data/projects/`. Routing par `/pages`, chaque route correspondant à une section ou un projet détaillé.",

  ENVIRONMENT_TITLE: "Environnement technique",
  ENVIRONMENT_DESCRIPTION: "Vue 3 avec `<script setup>` TS, Vite pour le bundling, Bulma CSS pour les styles, i18next pour les localisations, GitHub et GitHub Pages pour l’hébergement et le déploiement continu.",

  UX_TITLE: "Design & expérience utilisateur",
  UX_DESCRIPTION: "Maquettage mobile-first, transitions animées, couleurs personnalisables, dark/light mode natif, composants interactifs, zones de téléchargement, effet de zoom, scroll-to-top, feedback visuel sur actions. Inspiré par les meilleures pratiques UI modernes.",

  MAINTAIN_TITLE: "Documentation & maintenabilité",
  MAINTAIN_DESCRIPTION: "Documentation du code via commentaires et README, structure claire des dossiers, conventions de nommage homogènes. Le projet est pensé pour être enrichi de nouveaux projets sans refonte globale (ajout de fiches, modification des assets/données, traduction).",

  SEO_TITLE: "SEO et accessibilité",
  SEO_DESCRIPTION: "Métadonnées optimisées, balisage sémantique accessible, gestion dynamique des titres de page, alternative texte pour toutes les images, conformité aux standards pour un bon référencement et une accessibilité accrue.",

  DOWNLOADS_TITLE: "Téléchargements et ressources",
  DOWNLOADS_DESCRIPTION: "Section dédiée pour télécharger le CV, les documents PDF de soutenance ou les liens vers GitHub et réseaux pro.",

  DEPLOY_TITLE: "Déploiement & hébergement",
  DEPLOY_DESCRIPTION: "Le projet est déployé via GitHub Pages, avec configuration Vite pour les chemins relatifs et les pages 404 personnalisées. CI/CD assuré via GitHub Actions.",
};
