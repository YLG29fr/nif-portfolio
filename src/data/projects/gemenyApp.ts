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

    DESCRIPTION: "Web interface for the online trial of the Gemeny application (to generate anonymized data - data obfuscation).",
    CONTEXT : "Internship project at Gemeny Software for 10 weeks. End of training DWWM (Web Development and Mobile Web) at AFPA, Brest.",
    TEXT_1 : "",
}

export const gemenyApp_FR = {
    TITLE : "Gemeny_Web",
    CARD_DESCRIPTION: "Interface web pour l'essai en ligne de l'application Gemeny (obfuscation de données).",

    DESCRIPTION: "Interface web pour l'essai en ligne de l'application Gemeny (pour générer des données anonymisées - obfuscation de données).",
    CONTEXT: "Projet de stage chez Gemeny Software pendant 10 semaines. Fin de formation DWWM (Développement Web et web Mobile) à l'AFPA, Brest.",
    TEXT_1 : "Ce projet visait à permettre l'essai en ligne de la solution Gemeny, permettant de générer des données anonymisées via l'obfuscation de données avec des règles personnalisées.",
};