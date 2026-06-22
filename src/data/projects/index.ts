import type { Project } from "../../types/project"

import { gemenyApp } from "./gemenyApp"
import { gemenyAuth } from "./gemenyAuth"
import { portfolio } from "./portfolio"
import { eQonnect } from "./eQonnect"
import { minilib } from "./minilib"


export const projectsList: Project[] = [
    minilib,
    eQonnect,
    gemenyApp,
    gemenyAuth,
    portfolio,

]