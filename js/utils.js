// ex: [1, { xp: 0, totalXP: 0, reward: ''} ]
const clubLvlsArray = Object.entries(clubLvls);
const sectionItems = Object.entries(sections)
const descriptionItems = Object.entries(descriptions)

function clearValue(id) {
    const ids = Array.isArray(id) ? id : [id]; // Convert to array if it's a single value
    
    ids.forEach((id) => {
        let element = document.getElementById(id);
        if (element) {
            element.innerHTML = "";
            element.value = "";
        }
    });
}