// projet gemenyApp.ts

import { images } from '../../../assets/img/projects/gemenyApp/index.ts';

import { skillsList } from '../../skills/index.ts';

const linkedSkills = skillsList.filter (skill => skill.name.includes("React"));

export const gemenyApp = {
    name: "Gemeny_Web",
    icon: images[0],
    images: images,
    description: "Interface web pour l'essai en ligne de l'application Gemeny (offuscation de données).",
    tags:["Frontend"],
    linkedSkills: linkedSkills, 
    context: "Projet stage en entreprise de 10 semaines. Stage de fin de formation DWWM (Développement Web et Web Mobile) chez Gemeny Software.",
    link : "https://gemeny.io/"
}