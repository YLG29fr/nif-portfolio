import { html } from "./frontend/html";
import { css } from "./frontend/css";
import { sass } from "./frontend/sass";
import { javascript } from "./frontend/javascript";
import { typescript } from "./frontend/typescript";
import { vue } from "./frontend/vue";
import { react } from "./frontend/react";

import { nodejs } from "./backend/nodejs";
import { java } from "./backend/java";
import { springboot } from "./backend/springboot";
import { mariadb } from "./backend/mariadb";
import { mongodb } from "./backend/mongodb";

import { figma } from "./other/figma";
import { intellij } from "./other/intellij";
import { vscode } from "./other/vscode";
import { git } from "./other/git";
import { gitlab } from "./other/gitlab";
import { github } from "./other/github";
import { docker } from "./other/docker";

export const skillsList = [
    html, css, javascript, typescript, vue,
    react, git, gitlab, java, intellij,
    springboot, nodejs, figma, sass, vscode,
    docker, github, mariadb, mongodb, 
]
export const skillsListByType = {
    frontend: skillsList.filter(skill => skill.type === "frontend"),
    backend: skillsList.filter(skill => skill.type === "backend"),
    other: skillsList.filter(skill => skill.type === "other")
}