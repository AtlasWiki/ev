// ex: [1, { xp: 0, totalXP: 0, reward: ''} ]
import { clubLvls, sections, descriptions } from './constants.js';

export const clubLvlsArray = Object.entries(clubLvls);
export const sectionItems = Object.entries(sections)
export const descriptionItems = Object.entries(descriptions)

export function clearValue(id) {
    const ids = Array.isArray(id) ? id : [id]; // Convert to array if it's a single value
    
    ids.forEach((id) => {
        let element = document.getElementById(id);
        if (element) {
            element.innerHTML = "";
            element.value = "";
        }
    });
}