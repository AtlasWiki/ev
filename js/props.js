import { clubLvlsArray } from "./utils.js";
import { sections, sectionPlaceholder, descriptions, itemsMap} from './constants.js';
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

// export function createBlueprint(type) {
//     const blueprints = document.getElementById("blueprint-grid");
//     const blueprintType = type + "_items";
//     const items = window[blueprintType];


//     // Map over items and create HTML
//     const item_mapper = Object.entries(items).map(([item, data]) => {
//         // Map over ingredients
//         const ingredientsMapper = data.children.flatMap((ingredient) => {
//             const [[key, { type, quantity }]] = Object.entries(ingredient); // Destructure key, type, quantity
//             // const itemData = window[type]?.[key];

//             // Repeat the ingredient HTML based on its quantity
//             return Array.from({ length: quantity }, () => `
//                 <div class="relative flex flex-col items-center">
//                     <img src="${"./" + key + '.png'}" alt="${key}" class="rounded shadow-lg" draggable="false" loading="lazy">
//                 </div>
//             `);
//         });

//         // Return the full blueprint HTML
//         return `
//         <div class="flex flex-col items-center space-y-4">
//             <div class="relative flex flex-col items-center">
//                 <img src="${"./" + item + '.png'}" alt="${item}" class="rounded shadow-lg" draggable="false" loading="lazy">
//             </div>

//             <!-- Connector Line -->
//             <div class="w-0.5 h-10 bg-gray-400"></div>

//             <!-- Ingredients (Bottom Items) -->
//             <div class="grid grid-cols-3 gap-4">
//                 ${ingredientsMapper.join("")}
//             </div>
//         </div>`;
//     });

//     // Append the mapped blueprints to the DOM
//     blueprints.innerHTML = item_mapper.join("");
// }

let currentPage = 1; // Start on the first page
const itemsPerPage = 6; // Number of items to display per page

export function createBlueprint(type) {
    const blueprints = document.getElementById("blueprint-grid");
    const items = itemsMap[type]; // Access items based on the type passed
    console.log(items)

    // Get the entries of the items and slice them for the current page
    const itemEntries = Object.entries(items);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentItems = itemEntries.slice(startIdx, endIdx);

    // Map over items and create HTML
    const item_mapper = currentItems.map(([item, data]) => {
        // Map over ingredients
        const ingredientsMapper = data.children.flatMap((ingredient) => {
            const [[key, { type, quantity }]] = Object.entries(ingredient); // Destructure key, type, quantity

            // Repeat the ingredient HTML based on its quantity
            return Array.from({ length: quantity }, () => `
                <div class="relative flex flex-col items-center">
                    <img src="${"./images/" + key + '.png'}" alt="${key}" class="rounded shadow-lg" draggable="false">
                    <span class="absolute -top-3 bg-slate-500 text-white font-bold text-xs px-2 rounded-lg w-full">${key}</span>
                </div>
            `);
        });

        // Return the full blueprint HTML
        return `
        <div class="flex flex-col items-center space-y-4">
            <div class="relative flex flex-col items-center">
                <img src="${"./images/" + item + '.png'}" alt="${item}" class="rounded shadow-lg" draggable="false">
                <span class="absolute -top-3 bg-slate-500 font-bold text-xs px-2 rounded-lg w-full">${item}</span>
            </div>

            <!-- Connector Line -->
            <div class="w-0.5 h-10 bg-gray-400"></div>

            <!-- Ingredients (Bottom Items) -->
            <div class="grid grid-cols-3 gap-4">
                ${ingredientsMapper.join("")}
            </div>
        </div>`;
    });

    // Append the mapped blueprints to the DOM
    blueprints.innerHTML = item_mapper.join("");

    // Add pagination buttons for this type
    const totalPages = Math.ceil(itemEntries.length / itemsPerPage);
    createPagination(type, totalPages); // Pass type here
}

// Function to create the pagination buttons (previous and next)
export function createPagination(type, totalPages) {
    const paginationContainer = document.getElementById("pagination-container");
    paginationContainer.innerHTML = ""; // Clear previous pagination

    // Create Previous button
    const prevButton = document.createElement("button");
    prevButton.innerHTML = `<div class="flex justify-center item-center text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff8f8" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"/></svg></div>`;
    prevButton.classList.add(
        "px-4", 
        "py-2", 
        "border", 
        "border-gray-300", 
        "hover:opacity-80", 
        "rounded", 
        "focus:outline-none", 
        "focus:ring-2", 
        "focus:ring-blue-500"
    );
    prevButton.disabled = currentPage === 1; // Disable if on first page
    prevButton.addEventListener("click", (event) => {
        event.preventDefault()
        if (currentPage > 1) {
            currentPage--;
            createBlueprint(type); // Refresh blueprint content with current type
        }
    });
    if (currentPage != 1) {
        paginationContainer.appendChild(prevButton);
    }

    // Create page number button (always display current page)
    const pageButton = document.createElement("button");
    pageButton.textContent = currentPage;
    pageButton.classList.add(
        "px-4", 
        "py-2", 
        "border", 
        "border-gray-300", 
        "hover:opacity-80", 
        "rounded", 
        "focus:outline-none", 
        "focus:ring-2", 
        "focus:ring-blue-500"
    );
    paginationContainer.appendChild(pageButton);

    // Create Next button
    const nextButton = document.createElement("button");
    nextButton.innerHTML = `<div class="flex justify-center item-center text-center"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#fff8f8" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/></svg></div>`;
    nextButton.classList.add(
        "px-4", 
        "py-2", 
        "border", 
        "border-gray-300", 
        "hover:opacity-80", 
        "rounded", 
        "focus:outline-none", 
        "focus:ring-2", 
        "focus:ring-black"
    );
    nextButton.disabled = currentPage === totalPages; // Disable if on last page
    nextButton.addEventListener("click", (event) => {
        event.preventDefault()
        if (currentPage < totalPages) {
            currentPage++;
            createBlueprint(type); // Refresh blueprint content with current type
        }
    });
    if (currentPage < totalPages) {
        paginationContainer.appendChild(nextButton);
    }
}



