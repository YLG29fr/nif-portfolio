// projet gemenyApp.ts

import { images } from '../../assets/img/projects/gemenyApp/index.ts';

import { skillsList } from '../skills/index.ts';

const linkedSkills = skillsList.filter(skill =>
    ["React", "TypeScript", "GitLab", "Figma"].includes(skill.name)
);

const otherSkills = skillsList.filter(skill =>
    ["HTML", "CSS", "VSCode"].includes(skill.name)
);

const allLinkedSkills = [...linkedSkills,... otherSkills]

export const gemenyApp = {

    name: "Gemeny-App",
    localesName: "gemenyApp", 
    icon: images[0],
    images: images,
    tags: ["Frontend"],
    cardLinkedSkills: linkedSkills,
    allLinkedSkills: allLinkedSkills,
    link : "https://gemeny.io/",
    presentation : "/projet/gemeny-app",
    textsCount: 1,

}

export const gemenyApp_EN = {
    TITLE : "Gemeny_Web",
    CARD_DESCRIPTION : "Web interface for the online trial of the Gemeny application (data obfuscation).",


    DESCRIPTION: "Development of a web demonstration interface for a software product by Gemeny Software.",

    COMPANY_NAME: "Gemeny Software",
    COMPANY_DESCRIPTION: "Gemeny Software is an innovative French company founded in 2023, specializing in cybersecurity. It develops a software solution for data obfuscation, allowing sensitive and technical datasets to be effectively protected while preserving their original structure.",

    PRODUCT_TITLE: "The Gemeny Product",
    PRODUCT_DESCRIPTION: "The Gemeny product is a software solution that applies obfuscation rules to incoming data, modifying their content without altering their structure. The goal is to secure sensitive information while ensuring its usability for testing or demonstrations. Users can configure their own rules, and the system then applies these transformations transparently.",

    INTERNSHIP_TITLE: "Internship Project Context at Gemeny Software",
    INTERNSHIP_DESCRIPTION: "As part of my internship at Gemeny Software, the main objective was to develop a web interface allowing any user to test the Gemeny product online, easily and without installation. This interface was designed to support commercial demonstrations of the product to the public and potential clients.",

    OBJECTIVES: "Objectives and Challenges",
    OBJECTIVE_1: "Allow users to easily test the Gemeny product online, without installation.",
    OBJECTIVE_2: "Enable quick onboarding through an intuitive interface.",
    OBJECTIVE_3: "Respect the company's graphic charter and ensure consistency with the existing application.",
    OBJECTIVE_4: "Enhance the user experience with a mobile-first approach and Figma-designed mockups.",
    OBJECTIVE_5: "Deliver a stable and functional version for an official presentation at the SOFINS exhibition.",

    ENVIRONMENT_TITLE: "Technical Environment",
    ENVIRONMENT_DESCRIPTION: "The project was developed using React, TypeScript, GitLab, and Figma.",

    DESIGN_TITLE: "Mockup and Design",
    DESIGN_DESCRIPTION: "The interface was designed in accordance with Gemeny’s graphic charter and to ensure consistency with the existing application. Desktop and mobile mockups were created in Figma, with special attention paid to UX/UI and accessibility. A mobile-first approach guided the component design.",

    ORGANISATION_TITLE: "Work Organization",
    ORGANISATION_DESCRIPTION: "Development followed an Agile methodology, with task tracking via a GitLab Kanban board, daily meetings, and rigorous Git branch management. Each feature was developed on a dedicated branch before integration.",

    STRUCTURE_TITLE: "Project Structure",
    STRUCTURE_DESCRIPTION: "The Gemeny_Web project structure separates components by theme and usage, with explicit and best-practice-compliant naming. This organization facilitates code maintainability and scalability.",

    REALISATION_TITLE: "Interface Implementation",
    REALISATION_DESCRIPTION: "The interface includes accessible and client-side validated forms, dynamic components for editing obfuscation rules, and API calls integrated via dedicated services. Error messages are customized to improve robustness and user experience.",

    DEPLOYMENT_TITLE: "Deployment",
    DEPLOYMENT_DESCRIPTION: "The application was regularly deployed on Surge.sh for testing and demonstrations. The web interface is integrated into the company’s website via an iframe for a seamless experience.",

}

export const gemenyApp_FR = {
    TITLE : "Gemeny_Web",
    CARD_DESCRIPTION: "Interface web pour l'essai en ligne de l'application Gemeny (obfuscation de données).",


    DESCRIPTION: "Développement d’une interface web de démonstration d'un produit logiciel pour Gemeny Software.",

    COMPANY_NAME: "Gemeny Software",
    COMPANY_DESCRIPTION: "Gemeny Software est une entreprise française innovante fondée en 2023 et spécialisée dans la cybersécurité. Elle développe une solution logicielle d’obfuscation de données, permettant de protéger efficacement les jeux de données techniques et sensibles tout en conservant leur structure originale.",

    PRODUCT_TITLE : "Le produit Gemeny",
    PRODUCT_DESCRIPTION : "Le produit Gemeny est une solution logicielle permettant d’appliquer des règles d’obfuscation sur des données entrantes, en modifiant leur contenu sans altérer leur structure. L’objectif est de sécuriser les informations sensibles tout en garantissant leur utilisabilité pour des tests ou des démonstrations. L’utilisateur peut configurer ses propres règles, et le système applique ensuite ces transformations de façon transparente.",

    INTERNSHIP_TITLE : "Contexte du projet de stage",
    INTERNSHIP_DESCRIPTION : "Dans le cadre de mon stage chez Gemeny Software, l’objectif principal était de développer une interface web permettant à tout utilisateur de tester le produit Gemeny en ligne, facilement et sans installation. Cette interface devait servir de support à la démonstration commerciale du produit auprès du public et de potentiels clients.",

    OBJECTIVES : "Objectifs et enjeux",
    OBJECTIVE_1 : "Permettre aux utilisateurs de tester facilement et sans installation le produit Gemeny en ligne.",
    OBJECTIVE_2 : "Permettre la prise en main rapide du produit via une interface intuitive.",
    OBJECTIVE_3 : "Respecter la charte graphique de l’entreprise et assurer la cohérence avec l’application existante.",
    OBJECTIVE_4 : "Améliorer l’expérience utilisateur grâce à une approche mobile-first et des maquettes réalisées sur Figma.",
    OBJECTIVE_5 : "Livrer une version stable et fonctionnelle pour une présentation officielle lors du salon SOFINS.",
    
    ENVIRONMENT_TITLE : "Conception et environnement technique",
    ENVIRONMENT_DESCRIPTION : "Le projet a été entwickelt avec React, TypeScript, GitLab et Figma.",

    DESIGN_TITLE: "Maquettage et design",
    DESIGN_DESCRIPTION: "L’interface a été conçue en respectant la charte graphique de Gemeny et en assurant la cohérence avec l’application existante. Les maquettes desktop et mobile ont été réalisées sur Figma, avec une attention particulière portée à l’UX/UI et à l’accessibilité. L’approche mobile-first a guidé la conception des composants.",

    ORGANISATION_TITLE: "Organisation du travail",
    ORGANISATION_DESCRIPTION: "Le développement s’est appuyé sur une méthode Agile, avec un suivi des tâches via un tableau Kanban GitLab, des daily meetings, et une gestion rigoureuse des branches Git. Chaque fonctionnalité étant développée sur une branche dédiée avant intégration.",

    STRUCTURE_TITLE: "Structure du projet",
    STRUCTURE_DESCRIPTION: "L’arborescence du projet Gemeny_Web sépare les composants par thématique et usage, avec un nommage explicite et conforme aux bonnes pratiques. L’organisation facilite la maintenabilité et l’évolutivité du code.",

    REALISATION_TITLE: "Réalisation de l’interface",
    REALISATION_DESCRIPTION: "L’interface comprend des formulaires accessibles et validés côté client, des composants dynamiques pour l’édition des règles d’obfuscation, et l’intégration des appels API via des services dédiés. Les messages d’erreur sont personnalisés pour améliorer la robustesse et l’expérience utilisateur.",

    DEPLOYMENT_TITLE: "Déploiement",
    DEPLOYMENT_DESCRIPTION: "L’application a été déployée régulièrement sur Surge.sh pour permettre des tests et des démonstrations. L’interface web est intégrée sur le site de l’entreprise via une iframe pour une expérience fluide.",

    DWWM_TITLE : "Soutenance du titre DWWM",
    DWWM_DESCRIPTION : "Ce projet a servi de support principal à ma soutenance pour l'obtention du titre Développeur Web et Web Mobile (DWWM).Vous pouvez consulter les documents de présentation ci-dessous :",

    DWWM_LINK_1 : "PDF 1 – Rapport de projet",
    DWWM_LINK_2 : "PDF 2 – Support de présentation - powerpoint",
};