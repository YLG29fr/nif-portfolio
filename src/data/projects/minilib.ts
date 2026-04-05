// projet minilib.ts

import type { Project } from "../../types/project"
import { skillsList } from "../skills/index.ts";
import { images } from "../../assets/img/projects/minilib/index.ts";

const linkedSkills = skillsList.filter(skill =>
    ["NodeJS", "TypeScript", "React", "PostgreSQL"].includes(skill.name)
);

const otherSkills = skillsList.filter(skill =>
    [ "VSCode", "LogiCoder"].includes(skill.name)
);

const allLinkedSkills = [...linkedSkills,... otherSkills]

export const minilib: Project = {

    name: "Minilib",
    localesName: "minilib",
    icon: images[0],
    images: images,
    tags: ["Fullstack"],
    cardLinkedSkills: linkedSkills,
    allLinkedSkills: allLinkedSkills,
    onlineLink: "https://github.com/Nif-dev/minilib-yoann-legoff"
}

export const minilib_EN = {
    TITLE : "Minilib",
    CARD_DESCRIPTION : "Fullstack web application for municipal library management, developed in advance of my Fullstack developer training (CDA) AFPA Brest.",
}

export const minilib_FR = {
    TITLE : "Minilib",
    CARD_DESCRIPTION : "Application web complète de gestion de bibliothèque municipale, développée en amont de ma formation Développeur Fullstack (CDA) AFPA Brest.",
}