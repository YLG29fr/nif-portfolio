// projet gemenyAuth.ts

import { images } from "../../assets/img/projects/gemenyAuth/index.ts";

import { skillsList } from '../skills/index.ts';

const linkedSkills = skillsList.filter(skill =>
    ["Java", "SpringBoot", "MariaDB"].includes(skill.name)
);

const otherSkills = skillsList.filter(skill =>
    !["HTML", "CSS", "Bulma", "VSCode" ].includes(skill.name)
);

const allLinkedSkills = [...linkedSkills,... otherSkills]

export const gemenyAuth = {

    name: "GemenyAuth",
    icon: images[2],
    images: images,
    tags: ["Fullstack"],
    cardLinkedSkills: linkedSkills,
    allLinkedSkills: allLinkedSkills,
    link: "",
};

export const gemenyAuth_EN = {
    title : "Gemeny_Auth",
    cardDescription : "API for online authentication in the Gemeny application (data obfuscation).",

    description : "API for online authentication in the Gemeny application (data obfuscation).",
    context : "",
    
}

export const gemenyAuth_FR = {
    title : "Gemeny_Auth",
    cardDescription : "API pour l'authentification en ligne de l'application Gemeny (offuscation de données).",

    description : "API pour l'authentification en ligne de l'application Gemeny (offuscation de données).",
    context : "",
}