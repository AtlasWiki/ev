import { regex_patterns } from "./constants";

export function calculateAWvsSolo() {
    const awPercent = parseFloat(document.getElementById('awPercent').value);
    const soloPercent = parseFloat(document.getElementById('soloPercent').value);

    if (isNaN(awPercent) || isNaN(soloPercent)) {
        document.getElementById('aw-solo-result').innerText = "Please enter valid percentages.";
        return;
    }

    const formula = ((1 + awPercent / 100) * (1 + soloPercent / 100) - 1) * 100;
    document.getElementById('aw-solo-result').innerText = `Result: ${formula.toFixed(2)}%`;
}

export function calculateProfit() {
    const apPercent = parseFloat(document.getElementById('apPercent').value);
    const remoteMultiplier = parseFloat(document.getElementById('remoteMultiplier').value);
    const pet = document.getElementById('petSelect').value;
    const perfect = document.getElementById('perfect').value.toLowerCase();
    const divinity = document.getElementById('divinity').value.toLowerCase();
    const two = document.getElementById('2x').value.toLowerCase();

    if (isNaN(apPercent) || isNaN(remoteMultiplier) || !petBonuses[pet]) {
        document.getElementById('profit-result').innerText = "Please enter valid values.";
        return;
    }

    const petBonus = petBonuses[pet];
    const perfectMultiplier = perfect === 'yes' ? 6 : 1;
    const divinityMultiplier = divinity === 'yes' ? 25 : 1;
    const twoMultiplier = two === 'yes' ? 2 : 1;

    const formula = (apPercent / 100) * (petBonus / 100) * perfectMultiplier * divinityMultiplier * remoteMultiplier * twoMultiplier;
    document.getElementById('profit-result').innerText = `Profit Multiplier: ${formula.toFixed(2)}x`;
}

export function levelSearch() {
    const clubGoal = Number(document.getElementById("level-search").value);
    const goalResult = document.getElementById("level-result");

    if (clubGoal === 0){
        goalResult.innerText = ""
        return
    }

    if (clubGoal < 1 || clubGoal > 50) {
        goalResult.classList.replace("text-[#00b3b3]", "text-red-400");
        goalResult.innerText = "Invalid level. Valid level range is 1-50";
        return;
    }

    goalResult.classList.replace("text-red-400", "text-[#00b3b3]");

    const mainLvl = clubLvlsArray.find(([lvl]) => lvl === `lvl${clubGoal}`);

    // Call the reusable export function to calculate rewards
    const {
        totalGems,
        totalPetfood,
        smallBoxes,
        bigBoxes,
        clubBoxes,
        epicEggs,
        totalMultiplier
    } = calculateRewards(clubLvlsArray, clubGoal, true);

    // Format numbers with k suffix if >= 1000
    const formatNumber = (num) => {
        return num >= 1000 ? (num / 1000).toFixed(2) + 'k' : num;
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
        <p>All Rewards Met: </p>
        <ul class="md:w-1/3 list-disc pl-6 mt-2 mb-4 grid grid-cols-2 md:grid-cols-3">
            ${rewardsList}
        </ul>
    `;
}

export function calculateRewards(array, clubGoal, rangeConditional) {
    let totalGems = 0;
    let totalPetfood = 0;
    let smallBoxes = 0;
    let bigBoxes = 0;
    let clubBoxes = 0;
    let epicEggs = 0;
    let totalMultiplier = 0;

    // Get all previous levels
    const prevLvls = array
        .filter(([lvl]) => {
            const currentLvlNum = parseInt(lvl.replace('lvl', ''));
            // include 
            if (rangeConditional){
                return currentLvlNum < clubGoal + 1;
            } else {
                return currentLvlNum
            }
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
            const gemsMatch = reward.match(regex_patterns.gems);
            if (gemsMatch) {
                let gemAmount = gemsMatch[1];
                if (gemAmount.endsWith('k')) {
                    gemAmount = parseFloat(gemAmount) * 1000;
                }
                totalGems += parseFloat(gemAmount);
                return;
            }

            // Handle petfood
            const petfoodMatch = reward.match(regex_patterns.petFood);
            if (petfoodMatch) {
                let amount = petfoodMatch[1];
                if (amount.endsWith('k')) {
                    amount = parseFloat(amount) * 1000;
                }
                totalPetfood += parseFloat(amount);
                return;
            }

            // Handle boxes and eggs
            const quantityMatch = reward.match(regex_patterns.other);

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

    return {
        totalGems,
        totalPetfood,
        smallBoxes,
        bigBoxes,
        clubBoxes,
        epicEggs,
        totalMultiplier
    };
}

export function calculateXPTotal() {
    let currentLvlInput = Number(document.getElementById('current-level').value);
    const targetLvlInput = Number(document.getElementById('target-level').value);
    const currentLvlErrorMSG = document.getElementById("current-level-error");
    const targetLvlErrorMSG = document.getElementById("target-level-error");

    if (currentLvlInput < 1 | currentLvlInput > 50){
        currentLvlErrorMSG.innerText = "Level must be from 1-50"
    }
    if (targetLvlInput < 1 | targetLvlInput > 50){
        targetLvlErrorMSG.innerText = "Level must be from 1-50"
    }
    // const currentLvlXPInput = Number(document.getElementById('current-level-xp').value);
    const totalXPMSG = document.getElementById('totalXP')
    let currentLvl = clubLvlsArray.find(([lvl]) => lvl === `lvl${currentLvlInput + 1}`);

    // let currentLvlXP = currentLvl[1].xp - currentLvlXPInput;
    let currentLvlXP = currentLvl[1].xp;
    const currentXPTotal = currentLvl[1].totalXP;
    const currentXPMin = currentXPTotal - currentLvlXP
    let currentXPMax = currentXPTotal - 1

    // while (currentLvlXP <= 0) {
    //     // console.log(`Leveled up!`);
    //     currentLvlInput++; 
    
    //     // Find the new level in the array
    //     const newLevel = clubLvlsArray.find(([lvl]) => lvl === `lvl${currentLvlInput}`);
    //     if (!newLevel) {
    //         console.log(`Maximum level reached!`);
    //         break;
    //     }
    
    //     // Update current level and XP
    //     currentLvl = newLevel;
    //     console.log(`New level: ${currentLvl[0]}`);
        
    //     // Update XP needed for the next level
    //     currentLvlXP = currentLvl[1].xp - Math.abs(currentLvlXP);
    // }
    console.log("Final XP for current level:", currentLvlXP);
    
    // all levels above current level up to target level
    // ex: your current level = 1, your target level = 5
    // Output: [2,3,4,5]
    const rangeLvl = clubLvlsArray
    .filter(([lvl]) => {
        const lvlNum = parseInt(lvl.replace('lvl', ''));
        return lvlNum > currentLvlInput && lvlNum <= targetLvlInput;
    });

    let rangeLvlXP = rangeLvl.map(([level, data]) => data.xp);

    

    const {
        totalGems,
        totalPetfood,
        smallBoxes,
        bigBoxes,
        clubBoxes,
        epicEggs,
        totalMultiplier
    } = calculateRewards(rangeLvl, targetLvlInput, false);

     // Format numbers with k suffix if >= 1000
     const formatNumber = (num) => {
        return num >= 1000 ? (num / 1000).toFixed(2) + 'k' : num;
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

      const xpToTarget = rangeLvlXP.reduce((total, xp) => total + xp, 0);

    totalXPMSG.innerHTML = `
        <p>Your Club's Total XP</p> 
        <p class="mb-5"><span class='text-white font-light'>${currentXPMin} - ${currentXPMax}</span></p>
        <p>Average XP Per Person Contributed</p> 
        <p class="mb-5"><span class='text-white font-light'>${currentXPMin / 10} - ${currentXPMax / 10}</span></p>
        <p>XP required <span class="text-white">(Level ${currentLvlInput} -> ${targetLvlInput})</span></p>
        <p class="mb-5"><span class='text-white font-light'>${xpToTarget}</span></p>
        <p>Average XP Per Person Required <span class="text-white">(Level ${currentLvlInput} -> ${targetLvlInput})</span></p>
        <p class="mb-5"><span class='text-white font-light'>${xpToTarget / 10}</span></p>
        <p>Rewards Gained <span class="text-white">(Level ${currentLvlInput} -> ${targetLvlInput})</span></p> 
        <p class="mb-1"><span class='text-white font-light'>${rewardsList}</span></p>
    `
}