import type { Project } from "../../../types/project";

import { skillsList } from '../../skills/index.ts';

const linkedSkills = skillsList.filter(skill =>
    ["Java", "SpringBoot", "MariaDB"].includes(skill.name)
);

export const gemenyAuth: Project = {
    name: "Gemeny_Auth",
    icon: "",
    images: [],
    description: "API pour l'authentification en ligne de l'application Gemeny (offuscation de données).",
    tags: [],
    linkedSkills: linkedSkills,
    context: "",
    link: "",
};