
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

function calculateClubGoal() {
    const clubGoal = Number(document.getElementById("club-goal").value);
    const goalResult = document.getElementById("goal-result");

    if (isNaN(clubGoal) || clubGoal < 1 || clubGoal > 50) {
        goalResult.classList.replace("text-[#00b3b3]", "text-red-400");
        goalResult.innerText = "Invalid level. Valid level range is 1-50";
        return;
    }

    goalResult.classList.replace("text-red-400", "text-[#00b3b3]");
    
    const mainLvl = clubLvlsArray.find(([lvl]) => lvl === `lvl${clubGoal}`);

    let totalGems = 0;
    let totalPetfood = 0;
    let smallBoxes = 0;
    let bigBoxes = 0;
    let clubBoxes = 0;
    let epicEggs = 0;
    let totalMultiplier = 0;

    // Get all previous levels
    const prevLvls = clubLvlsArray
        .filter(([lvl]) => {
            const currentLvlNum = parseInt(lvl.replace('lvl', ''));
            return currentLvlNum < clubGoal;
        })
        .map(level => level[1]);
    
    prevLvls.forEach(level => {
        if (!level.reward) return;
        
        const rewards = level.reward.split(',').map(r => r.trim());
        
        rewards.forEach(reward => {
            // Handle multipliers
            if (reward.includes("x Multiplier")) {
                const multiplierPart = reward.split("x Multiplier")[0].trim(); 
                const multiplierValue = parseFloat(multiplierPart);
                if (!isNaN(multiplierValue)) {
                    totalMultiplier =+ multiplierValue;
                }
            }

            // Handle gems
            const gemsMatch = reward.match(/(\d+(?:\.\d+)?k?)\s*Gems/i);
            if (gemsMatch) {
                let gemAmount = gemsMatch[1];
                if (gemAmount.endsWith('k')) {
                    gemAmount = parseFloat(gemAmount) * 1000;
                }
                totalGems += parseFloat(gemAmount);
                return;
            }

            // Handle petfood
            const petfoodMatch = reward.match(/(\d+(?:\.\d+)?k?)\s*Petfood/i);
            if (petfoodMatch) {
                let amount = petfoodMatch[1];
                if (amount.endsWith('k')) {
                    amount = parseFloat(amount) * 1000;
                }
                totalPetfood += parseFloat(amount);
                return;
            }

            // Handle boxes and eggs
            const quantityMatch = reward.match(/(\d+)?\s*(Small|Big|Club)\s*Boxes|(\d+)?\s*Epic\s*Egg/i);

            if (quantityMatch) {
                // Default quantity to 1 if no number is found
                let quantity = quantityMatch[1] 
                    ? parseInt(quantityMatch[1]) 
                    : (quantityMatch[3] ? parseInt(quantityMatch[3]) : 1);

                if (/Small\s*Box/i.test(reward)) {
                    smallBoxes += quantity;
                } else if (/Big\s*Box/i.test(reward)) {
                    bigBoxes += quantity;
                } else if (/Club\s*Box/i.test(reward)) {
                    clubBoxes += quantity;
                } else if (/Epic\s*Egg/i.test(reward)) {
                    epicEggs += quantity; // Accumulate the quantity
                }
            }
        });
    });

    // Format numbers with k suffix if >= 1000
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

    goalResult.innerHTML = `
        <p>XP required for level up: </p> 
        <p class="mb-4"><span class='text-white font-light'>${mainLvl[1].xp}</span></p>
        <p>Total XP needed:</p>
        <p class="mb-4"><span class='text-white font-light'>${mainLvl[1].totalXP}</span></p>
        <p>Average XP per player:</p>
        <p class="mb-4"><span class='text-white font-light'>${mainLvl[1].totalXP / 10}</span></p>
        <p>Current Level Reward:</p>
        <p class="mb-4"><span class='text-white font-light'>${mainLvl[1].reward}</span></p>
        <p>All Previous Rewards: </p>
        <ul class="md:w-1/3 list-disc pl-6 mt-2 mb-4 grid grid-cols-2 md:grid-cols-3">
            ${rewardsList}
        </ul>
    `;
}