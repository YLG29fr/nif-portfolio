// projet portfolio.ts

import { images } from '../../assets/img/projects/portfolio/index.ts';

import { skillsList } from '../skills/index.ts';

const linkedSkills = skillsList.filter(skill =>
    ["Vue", "TypeScript", "CSS", "GitHub", "Figma"].includes(skill.name)
);

const otherSkills = skillsList.filter(skill =>
    ["HTML", "Bulma", "VSCode" ].includes(skill.name)
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
    link : undefined,
    presentation : "/projet/portfolio/view",
    textsCount: 0,
}

export const portfolio_EN = {
    TITLE : "Portfolio",
    CARD_DESCRIPTION : "Personal website to display my projects and personal information.",

    DESCRIPTION : "Personal website to display my projects and personal information.",
    CONTEXT : "Personal portfolio.",
}

export const portfolio_FR = {
    TITLE : "Portfolio",
    CARD_DESCRIPTION : "Site web personnel pour afficher mes projets et mes informations personnelles.",

    DESCRIPTION : "Site web personnel pour afficher mes projets et mes informations personnelles.",
    CONTEXT : "Portfolio personnel.",
}