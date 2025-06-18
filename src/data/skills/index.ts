import type { Skill } from "../../types/skill";

import { html } from "./frontend/html";
import { css } from "./frontend/css";
import { sass } from "./frontend/sass";
import { javascript } from "./frontend/javascript";
import { typescript } from "./frontend/typescript";
import { vue } from "./frontend/vue";
import { react } from "./frontend/react";
import { bulma } from "./frontend/bulma";

import { nodejs } from "./backend/nodejs";
import { java } from "./backend/java";
import { springboot } from "./backend/springboot";
import { mariadb } from "./backend/mariadb";
import { mongodb } from "./backend/mongodb";

import { git } from "./other/git";
import { gitlab } from "./other/gitlab";
import { github } from "./other/github";
import { figma } from "./other/figma";
import { intellij } from "./other/intellij";
import { vscode } from "./other/vscode";
import { docker } from "./other/docker";

export const skillsList: Skill[] = [
    html, css, sass, bulma,
    javascript, typescript,
    vue, react, 
    git, gitlab, github,
    java,springboot, nodejs,
    mariadb, mongodb,
    intellij, vscode,
    docker,  figma,
]
export const skillsListByType = {
    frontend: skillsList.filter(skill => skill.type === "frontend"),
    backend: skillsList.filter(skill => skill.type === "backend"),
    database: skillsList.filter(skill => skill.type === "database"),
    other: skillsList.filter(skill => skill.type === "other")
}