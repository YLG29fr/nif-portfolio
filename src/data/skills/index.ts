import { html } from "./frontend/html";
import { css } from "./frontend/css";
import { javascript } from "./frontend/javascript";
import { typescript } from "./frontend/typescript";
import { vue } from "./frontend/vue";
import { git } from "./other/git";
import { gitlab } from "./other/gitlab";
import { java } from "./backend/java";
import { intellij } from "./other/intellij";
import { springboot } from "./backend/springboot";
import { nodejs } from "./backend/nodejs";
import { react } from "./frontend/react";
import { figma } from "./other/figma";
import { sass } from "./frontend/sass";
import { vscode } from "./other/vscode";
import { docker } from "./other/docker";
import { github } from "./other/github";
import { mariadb } from "./backend/mariadb";
import { mongodb } from "./backend/mongodb";

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