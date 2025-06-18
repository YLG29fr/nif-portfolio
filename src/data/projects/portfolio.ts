// projet portfolio.ts

import { images } from '../../assets/img/projects/portfolio/index.ts';

import { skillsList } from '../skills/index.ts';

const linkedSkills = skillsList.filter(skill =>
    ["Vue", "TypeScript", "CSS", "GitHub", "Figma"].includes(skill.name)
);

export const portfolio = {

    name: "Portfolio",
    icon: images[0],
    images: images,
    tags:["Frontend"],
    linkedSkills: linkedSkills, 
    link : "http://www.localhost:5173/"
}

export const portfolio_EN = {
    title : "Portfolio",
    cardDescription : "Personal website to display my projects and personal information.",

    description : "Personal website to display my projects and personal information.",
    context : "Personal portfolio.",
}

export const portfolio_FR = {
    title : "Portfolio",
    cardDescription : "Site web personnel pour afficher mes projets et mes informations personnelles.",

    description : "Site web personnel pour afficher mes projets et mes informations personnelles.",
    context : "Portfolio personnel.",
}