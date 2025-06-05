// projet gemenyApp.ts
import type { Project } from '../../types/project.ts';

import { images } from '../../assets/img/projects/gemenyApp/index.ts';

import { skillsList } from '../skills/index.ts';

const linkedSkills = skillsList.filter(skill =>
    ["React", "TypeScript", "CSS", "GitLab", "Figma" ].includes(skill.name)
);

export const gemenyApp: Project = {

    name: "GemenyApp",
    icon: images[0],
    images: images,
    tags:["Frontend"],
    linkedSkills: linkedSkills, 
    link : "https://gemeny.io/"
}

export const gemenyApp_EN = {
    title : "Gemeny_Web",
    description : "Web interface for the online trial of the Gemeny application (data obfuscation).",
    context : "Internship project at Gemeny Software for 10 weeks. End of training DWWM (Web Development and Mobile Web) at Gemeny Software.",
    
}

export const gemenyApp_FR = {
    title : "Gemeny_Web",
    description: "Interface web pour l'essai en ligne de l'application Gemeny (obfuscation de données).",
    context: "Projet de stage chez Gemeny Software pendant 10 semaines. Fin de formation DWWM chez Gemeny Software."
};