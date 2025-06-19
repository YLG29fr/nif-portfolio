import type { Skill } from "./skill";

export interface Project {
    name: string;
    localesName: string;
    icon: string;
    images: string[];
    tags: string[];
    cardLinkedSkills: Skill[];
    link?: string;
    allLinkedSkills: Skill[];

    textsCount: number


}