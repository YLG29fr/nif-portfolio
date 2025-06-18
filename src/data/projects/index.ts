import type { Project } from "../../types/project"

import { gemenyApp } from "./gemenyApp"
import { gemenyAuth } from "./gemenyAuth"
import { portfolio } from "./portfolio"


export const projectsList: Project[] = [
    gemenyApp,
    gemenyAuth,
    portfolio,

]