// projet gemenyAuth.ts

import { images } from "../../assets/img/projects/gemenyAuth/index.ts";

import { skillsList } from '../skills/index.ts';

const linkedSkills = skillsList.filter(skill =>
    ["Java", "SpringBoot", "MariaDB", "SQL"].includes(skill.name)
);

const otherSkills = skillsList.filter(skill =>
    ["IntelliJ" ].includes(skill.name)
);

const allLinkedSkills = [...linkedSkills,... otherSkills]

export const gemenyAuth = {

    name: "Gemeny-Auth",
    localesName: "gemenyAuth",
    icon: images[2],
    images: images,
    tags: ["Fullstack"],
    cardLinkedSkills: linkedSkills,
    allLinkedSkills: allLinkedSkills,
    link: undefined,
    presentation : "/projet/gemenyAuth",
    textsCount: 0,
    
};

export const gemenyAuth_EN = {
    TITLE : "Gemeny_Auth",
    CARD_DESCRIPTION : "API for online authentication in the Gemeny application (data obfuscation).",

    DESCRIPTION : "API for online authentication in the Gemeny application (data obfuscation).",
    CONTEXT : "",
    
}

export const gemenyAuth_FR = {
    TITLE : "Gemeny_Auth",
    CARD_DESCRIPTION : "API pour l'authentification en ligne de l'application Gemeny (offuscation de données).",

    DESCRIPTION : "API pour l'authentification en ligne de l'application Gemeny (offuscation de données).",
    CONTEXT : "",
}