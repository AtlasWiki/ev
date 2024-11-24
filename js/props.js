const tableBody1 = document.getElementById("table-body-1");
const tableBody2 = document.getElementById("table-body-2");

// Split the rows into two halves (25 each for two tables)
const half = Math.ceil(clubLvlsArray.length / 2);
const firstHalf = clubLvlsArray.slice(0, half);
const secondHalf = clubLvlsArray.slice(half);

// Function to create table rows
function createRow(level, data) {
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

function createDescription(sectionname){
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