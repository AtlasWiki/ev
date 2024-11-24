
function calculateAWvsSolo() {
    const awPercent = parseFloat(document.getElementById('awPercent').value);
    const soloPercent = parseFloat(document.getElementById('soloPercent').value);

    if (isNaN(awPercent) || isNaN(soloPercent)) {
        document.getElementById('aw-solo-result').innerText = "Please enter valid percentages.";
        return;
    }

    const formula = ((1 + awPercent / 100) * (1 + soloPercent / 100) - 1) * 100;
    document.getElementById('aw-solo-result').innerText = `Result: ${formula.toFixed(2)}%`;
}

function calculateProfit() {
    const apPercent = parseFloat(document.getElementById('apPercent').value);
    const remoteMultiplier = parseFloat(document.getElementById('remoteMultiplier').value);
    const pet = document.getElementById('petSelect').value;
    const perfect = document.getElementById('perfect').value.toLowerCase();
    const divinity = document.getElementById('divinity').value.toLowerCase();

    if (isNaN(apPercent) || isNaN(remoteMultiplier) || !petBonuses[pet]) {
        document.getElementById('profit-result').innerText = "Please enter valid values.";
        return;
    }

    const petBonus = petBonuses[pet];
    const perfectMultiplier = perfect === 'yes' ? 6 : 1;
    const divinityMultiplier = divinity === 'yes' ? 25 : 1;

    const formula = (apPercent / 100) * (petBonus / 100) * perfectMultiplier * divinityMultiplier * remoteMultiplier;
    document.getElementById('profit-result').innerText = `Profit Multiplier: ${formula.toFixed(2)}x`;
}

function calculateClubGoal(){
    const clubGoal = Number(document.getElementById("club-goal").value);
    const goalResult = document.getElementById("goal-result");

    if (isNaN(clubGoal) || clubGoal < 1 || clubGoal > 50) {
        goalResult.classList.replace("text-green-400", "text-red-400")
        goalResult.innerText = "Invalid level. Valid level range is 1-50"
    } else {
        goalResult.classList.replace("text-red-400", "text-green-400")
        const level = clubLvlsArray.find( ([lvl]) => lvl === "lvl"+clubGoal )
        goalResult.innerHTML = `
        
        <p>XP required for level up: <span class='text-white'>${level[1].xp}</span></p> 
        <p>Total XP needed: <span class='text-white'>${level[1].totalXP}</span></p>
        <p>Average XP per player: <span class='text-white'>${level[1].totalXP / 10}</span></p>
        <p>Reward: <span class='text-white'>${level[1].reward}</span></p>
        
        `
    }
}