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
 * @property {string} description
 * @property {string[]} tags
 * @property {Skill[]} linkedSkills
 * @property {string} context
 * @property {string} link
 */
export interface Project {
    name: string;
    icon: string;
    images: string[];
    description: string;
    tags: string[];
    linkedSkills: Skill[];
    context: string;
    link: string;
}