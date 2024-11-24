const tableBody1 = document.getElementById("table-body-1");
const tableBody2 = document.getElementById("table-body-2");

const clubLvlsArray = Object.entries(clubLvls); // Convert clubLvls object to array

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