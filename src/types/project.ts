import type { Skill } from "./skill";

/**
 * Interface-type de projet
 *
 * @export
 * @interface Project
 * @typedef {Project}
 * @property {string} name
 * @property {string} icon
 * @property {string[]} images
 * @property {string[]} tags
 * @property {Skill[]} cardLinkedSkills
 * @property {string} cardDescription
 * @property Optional {string}  link 
 * @property {Skill[]} allLinkedSkills
 * @property {string} description
 * @property {string} context
 */
export interface Project {
    name: string;
    icon: string;
    images: string[];
    tags: string[];
    cardLinkedSkills: Skill[];
    cardDescription: string;
    link?: string;
    allLinkedSkills: Skill[];
    description: string;
    context: string;

}