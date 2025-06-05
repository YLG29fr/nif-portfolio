// projet gemenyAuth.ts
import type { Project } from "../../types/project.ts";

import { images } from "../../assets/img/projects/gemenyAuth/index.ts";

import { skillsList } from '../skills/index.ts';

const linkedSkills = skillsList.filter(skill =>
    ["Java", "SpringBoot", "MariaDB"].includes(skill.name)
);

export const gemenyAuth: Project = {
    name: "GemenyAuth",
    icon: images[2],
    images: images,
    tags: [],
    linkedSkills: linkedSkills,
    link: "",
};

export const gemenyAuth_EN = {
    title : "Gemeny_Auth",
    description : "API for online authentication in the Gemeny application (data obfuscation).",
    context : "",
    
}

export const gemenyAuth_FR = {
    title : "Gemeny_Auth",
    description : "API pour l'authentification en ligne de l'application Gemeny (offuscation de données).",
    context : "",
}