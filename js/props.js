import { clubLvlsArray } from "./utils.js";
import { sections, sectionPlaceholder, descriptions } from './constants.js';
import { calculateRewards } from './calculations.js';

// console.log("Props module loaded");
// console.log("Imported clubLvlsArray:", clubLvlsArray);
// console.log("Imported sections:", sections);
// console.log("Imported sectionPlaceholder:", sectionPlaceholder);
// console.log("Imported descriptions:", descriptions);

export const tableBody1 = document.getElementById("table-body-1");
export const tableBody2 = document.getElementById("table-body-2");

// console.log(tableBody1)
// console.log(tableBody2)


export function test2(){
    alert('test');
}

export function filterEntries() {
    const selectElement = document.getElementById("clubRewards");
    const query = selectElement.value;
    const minRange = Number(document.getElementById('min-level-input').value);
    const maxRange = Number(document.getElementById('max-level-input').value);

    return clubLvlsArray.filter(([level, data]) => {
      let reward = data.reward;
      const formattedLvl = parseInt(level.match(/\d+/)[0]);
      const withinRange = formattedLvl >= minRange && formattedLvl <= maxRange;
      if (reward.includes(query) && withinRange){
        return true; 
      } else if (query === "All" && withinRange) {
        return true; 
      }
      return false;
    });
}

// export function to create table rows
export function createRow(level, data) {
    const row = document.createElement("tr");

    // Add columns
    const levelCell = `<td class="md:py-4 py-2 px-1">${level.replace('lvl', '')}</td>`;
    const xpCell = `<td class="md:py-4 py-2 px-1">${data.xp}</td>`;
    const totalXPCell = `<td class="md:py-4 py-2 px-1">${data.totalXP}</td>`;
    const rewardCell = `<td class="md:py-4 py-2 px-1">${data.reward}</td>`;

    // Combine into row
    row.innerHTML = levelCell + xpCell + totalXPCell + rewardCell;
    return row;
}

export function updateTables() {
    // Clear previous table content
    tableBody1.innerHTML = '';
    tableBody2.innerHTML = '';
  
    // Get the filtered entries
    const filteredEntries = filterEntries();
    
    const firstEntry = 1

    const minInputValue = document.getElementById("min-level-input");
    minInputValue.min = firstEntry

    const maxInputValue = document.getElementById("max-level-input");
    maxInputValue.min = firstEntry
   
    initialLevelRangeValueUpdate()
    // Split filtered entries into two halves
    const half = Math.ceil(filteredEntries.length / 2);
    const firstHalf = filteredEntries.slice(0, half);
    const secondHalf = filteredEntries.slice(half);
  
    // Populate table 1
    firstHalf.forEach(([level, data]) => {
      const row = createRow(level, data);
      tableBody1.appendChild(row);
    });
  
    // Populate table 2
    secondHalf.forEach(([level, data]) => {
      const row = createRow(level, data);
      tableBody2.appendChild(row);
    });
    displayTableResult()
  }
  
  // Initial population of tables on page load
  updateTables();

export function displayTableResult(){
    const entryResult = document.getElementById("club-entry-result");
    const {
        totalGems,
        totalPetfood,
        smallBoxes,
        bigBoxes,
        clubBoxes,
        epicEggs,
        totalMultiplier
    } = calculateRewards(filterEntries(), filterEntries(), false);

    const formatNumber = (num) => {
        return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;
    };

    // Build rewards array
    const rewardParts = [];
    
    if (smallBoxes) rewardParts.push(`${smallBoxes} Small Boxes`);
    if (bigBoxes) rewardParts.push(`${bigBoxes} Big Boxes`);
    if (clubBoxes) rewardParts.push(`${clubBoxes} Club Boxes`);
    if (epicEggs) rewardParts.push(`${epicEggs} Epic Egg${epicEggs > 1 ? 's' : ''}`);
    if (totalGems) rewardParts.push(`${formatNumber(totalGems)} Gems`);
    if (totalPetfood) rewardParts.push(`${formatNumber(totalPetfood)} Petfood`);
    if (totalMultiplier) rewardParts.push(`${totalMultiplier}x Total Multiplier`);

    // Create list items
    const rewardsList = rewardParts.length 
        ? rewardParts.map(reward => `<li class="text-white font-light mb-1">${reward}</li>`).join('')
        : '<li class="text-white font-light">None</li>';

    entryResult.innerHTML = ` 
        <p class="text-[#00b3b3] font-semibold">Total Rewards: </p>
        <ul class="md:w-1/3 list-disc pl-6 mt-2 mb-4 grid grid-cols-2 md:grid-cols-3">
            ${rewardsList}
        </ul>
    `;
}

export function updateLevelRangeValue(elementValueID, inputElement){
    const elementValue = document.getElementById(elementValueID);
    const inputValue = inputElement.value;
    elementValue.innerText = inputValue;
}

export function initialLevelRangeValueUpdate(){
    const minTextValue = document.getElementById("min-level-range");
    const maxTextValue = document.getElementById("max-level-range");
    const minInput = document.getElementById("min-level-input").value;
    const maxInput = document.getElementById("max-level-input").value;
    minTextValue.innerText = minInput;
    maxTextValue.innerText = maxInput;
}

export function createDescription(sectionname){
    const sectionID = sections[sectionname]
    const sectionPlacement = sectionPlaceholder[sectionname]
    const section = document.getElementById(sectionPlacement);
    const descriptionMSG = descriptions[sectionID]
    section.innerHTML = `
        <div>
            <button onclick="showCurrentSection('${sectionname}')" class="bg-[#3a3a3a] hover:bg-[#4b4b4b] transition-all duration-300 w-full p-2 md:p-5 font-semibold text-xl rounded-md flex items-center justify-between">
                <div class="flex justify-center items-center gap-2">
                    <svg id="${sectionname}ChevronIcon" class="rotate-180 w-6 h-6 transform transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span>Description</span>
                </div>
            </button>

            <section id="${sectionID}" class="mt-2 p-2 mb-5">
                <p class="leading-8 text-md md:w-3/4">
                    ${descriptionMSG}
                </p>
            </section>
        </div>
    `
}