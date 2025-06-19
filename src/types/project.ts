import type { Skill } from "./skill";

export interface Project {
    name: string;
    localesName: string;
    icon: string;
    images: string[];
    tags: string[];
    cardLinkedSkills: Skill[];
    allLinkedSkills: Skill[];
    
    link?: string;
    presentation?: string;
    textsCount: number


}