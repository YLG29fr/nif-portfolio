// projet eQonnect.ts

import { skillsList } from "../skills/index.ts";
import { images } from "../../assets/img/projects/eqonnect/index.ts";

const linkedSkills = skillsList.filter(skill =>
    ["HTML", "TypeScript", "CSS", "GitHub"].includes(skill.name)
);

const otherSkills = skillsList.filter(skill =>
    [ "VSCode", "LogiCoder"].includes(skill.name)
);

const allLinkedSkills = [...linkedSkills,... otherSkills]

export const eQonnect = {

    name: "eQonnect",
    localesName: "eQonnect",
    icon: images[0],
    images: images,
    tags: ["Fullstack"],
    cardLinkedSkills: linkedSkills,
    allLinkedSkills: allLinkedSkills,
    link: "/portfolio/eQonnect",
    presentation : "", //  /projet/eQonnect
}

export const eQonnect_EN = {
    TITLE: "eQonnect",
    CARD_DESCRIPTION : "A digital visit card to share your social medias through QR codes",
}

export const eQonnect_FR = {
    TITLE: "eQonnect",
    CARD_DESCRIPTION : "Une carte de visite numérique pour partager vos medias sociaux via des codes QR",
}