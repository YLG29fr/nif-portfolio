// projet gemenyAuth.ts
import type { Project } from "../../../types/project.ts";

import { images } from "../../../assets/img/projects/gemenyAuth/index.ts";

import { skillsList } from '../../skills/index.ts';

const linkedSkills = skillsList.filter(skill =>
    ["Java", "SpringBoot", "MariaDB","Figma"].includes(skill.name)
);

export const gemenyAuth: Project = {
    name: "Gemeny_Auth",
    icon: images[2],
    images: images,
    description: "API pour l'authentification en ligne de l'application Gemeny (offuscation de données).",
    tags: [],
    linkedSkills: linkedSkills,
    context: "",
    link: "",
};