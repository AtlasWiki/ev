import { 
    regex_patterns, 
    petProfitBonuses, 
    petPerfectDishBonuses, 
    petDivineDishBonuses,
    // cityArray,
    // gemsPerLoop,
    unitLetters,
} from "./constants";

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
    const pet1 = document.getElementById('petSelect1').value;
    const pet2 = document.getElementById('petSelect2').value;
    const dish = document.getElementById('dish').value.toLowerCase();
    const doubleFood = document.getElementById('double_food').value.toLowerCase();
    const two = document.getElementById('2x').value.toLowerCase();
   

    if (isNaN(apPercent) || isNaN(remoteMultiplier) || !petProfitBonuses[pet1] || !petProfitBonuses[pet2]) {
        document.getElementById('profit-result').innerText = "Please enter valid values.";
        return;
    }

    const petBonus1 = petProfitBonuses[pet1]
    const petBonus2 = petProfitBonuses[pet2]
    const usePetBonus = petBonus1  > petBonus2 ? petBonus1 : petBonus2

    const doubledFoodMultiplier = doubleFood === 'yes' ? 2 : 1;
    // const petBonus = petProfitBonuses[pet];
    const perfectMultiplier = dish === 'perfect' ? 6 : 1;
    const divinityMultiplier = dish === 'divine' ? 26 : 1;
    const doubledMultiplier = two === 'yes' ? 2 : 1;
    
    let perfectMultiplierExtender = 1;
    let divineMultiplierExtender= 1;

    // determine to extend the perfect multiplier based on some pets
    if (dish === 'perfect') {
        const perfectPet1 = petPerfectDishBonuses[pet1] || false;
        const perfectPet2 = petPerfectDishBonuses[pet2] || false;
        if (perfectPet1 && perfectPet2) {
            perfectMultiplierExtender = (perfectPet1 / 100) + (perfectPet2 / 100);
        } else if (perfectPet1){
            perfectMultiplierExtender = perfectPet1 / 100;
        } else if (perfectPet2){
            perfectMultiplierExtender = perfectPet2 / 100;
        }
    }

    // determine to extend the divine multiplier based on some pets
    if (dish === 'divine') {
        const divinePet1 = petDivineDishBonuses[pet1] || false;
        const divinePet2 = petDivineDishBonuses[pet2] || false;
        if (divinePet1 && divinePet2) {
            divineMultiplierExtender = (divinePet1 / 100) + (divinePet2 / 100) + 1;
        } else if (divinePet1){
            divineMultiplierExtender = (divinePet1 / 100) + 1;
        } else if (divinePet2){
            divineMultiplierExtender = (divinePet2 / 100) + 1;
        }
    }
    
    // determine profit multiplier of workers
    let fivePecentPerWorker = 1;
    if (pet1 === 'vroomba' && pet2 === 'vroomba'){
        fivePecentPerWorker = ( (apPercent * (0.05 + 0.05) ) / 100) + 1;
    } else if (pet1 === 'vroomba' || pet2 === 'vroomba'){
        fivePecentPerWorker = ((apPercent * 0.05) / 100) + 1;
    }

    // const fivePecentPerWorker = pet1 === 'vroomba' ? ((apPercent * 0.05) / 100) + 1 : 1;
    const formula = ( ((( (apPercent / 100) * (usePetBonus / 100) * (perfectMultiplier * perfectMultiplierExtender) * (divinityMultiplier * divineMultiplierExtender) ) * fivePecentPerWorker) * remoteMultiplier) * doubledFoodMultiplier) * doubledMultiplier;
    const wholeNum = Math.ceil(formula).toString();
    const places = wholeNum.length - 2;

    const roundedFormula = function placement(number, zeroes) {
        const tens = 10**zeroes;
        return Math.round(number / tens) * tens
    }

    const result = roundedFormula(formula, places)

    const exponent = wholeNum.length - 1;
    const notation = (formula / (10**exponent))
    const notationString = notation.toString()[0]
    const base = exponent === 0 && notationString === "0" ? 1 : 0;
    const roundedNotation = Number((Number(notation.toFixed(2)) + base).toFixed(2))
    const dishPrice = document.getElementById("dishPrice") === null ? 90 : document.getElementById("dishPrice").value
    const startingLetterAmt = 0;
    const initialLetter = Object.entries(unitLetters)[startingLetterAmt][1];

    // const finalLetterAmt = (startingLetterAmt + 1) * formula;
    // let exponentPerRound = 0;

    const letterRound =  Math.floor(exponent / 3);
    const letterAmtPerRound = 10**Math.round(exponent % 3);
  
    const finalLetter = Object.entries(unitLetters)[letterRound][1];

    // console.log(letterRound)
    // console.log(finalLetterAmt)
    // console.log(finalLetter)
    document.getElementById('profit-result').innerHTML = `
    <div class="text-white font-normal mb-1">Rounded Profit: <span class="text-green-400 mb-2">${result}x</span></div>
    <div class="text-white font-normal mb-1">Exact Profit: <span class="text-green-400">${formula}x</span></div>
    <div class="text-white font-normal mb-1">Profit %: <span class="text-green-400">${formula * 100}%</span></div>
    
    <div class="text-white font-normal mb-1">Scientific Notation:
        <span class="text-green-400">
            ${roundedNotation} * 10<sup class="text-xs text-white" style="font-size: 0.7em; position: relative; top: -0.5em;">${exponent}</sup>
        </span>
    </div>

    <div class="text-white font-normal mb-1">Dish Calculation: 
        <span class="text-green-400">$<input class="inline px-1 md:w-40" id="dishPrice" type="number" value=${dishPrice} onchange="calculateProfit()"> * (${roundedNotation} * 10<sup class="text-xs" style="font-size: 0.7em; position: relative; top: -0.5em;">${exponent}</sup>)</span>
         = 
        <span class="text-white">$${(Math.round((Number(dishPrice)*((roundedNotation)*10**exponent)) * 100)) / 100}</span>
    </div>

    <div class="text-white font-normal mb-1">Dish Calculation by Unit Letters:
        <span class="text-green-400">
            ${startingLetterAmt + 1}${initialLetter} -> ${letterAmtPerRound}${finalLetter}
        </span>
    </div>

    <div class="text-white font-normal mb-1">Moved Places/Zeroes:
        <span class="text-green-400">
            ${exponent}
        </span>
    </div>
`;

}
// // const divineDishMultplierByRedPanda = pet === 'red_panda' ? ;
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

export function calculateCityRewards() {
    const currCityLvlInput = Number(document.getElementById('current-city-level').value);
    const targetCityLvlInput = Number(document.getElementById('target-city-level').value);
    const currCityErrorMSG = document.getElementById('current-city-level-error');
    const targetCityErrorMSG = document.getElementById('target-city-level-error');
    const adder = document.getElementById('plus');
    const result = document.getElementById('city-goal-result');
    const currCityLvl = currCityLvlInput % 60 || 60; // Current city level
    const cityArray = Object.entries(cities);

    // Input validation
    if (currCityLvlInput < 0) {
        currCityErrorMSG.innerText = "Invalid level. Valid level range are positive numbers";
        return;
    }
    if (targetCityLvlInput < 0) {
        targetCityErrorMSG.innerText = "Invalid level. Valid level range are positive numbers";
        return;
    }

    if (!isNaN(targetCityLvlInput)) {
        adder.innerText = `(+${targetCityLvlInput})`;
    } else {
        console.error('Invalid input: not a number');
    }

    // Calculate the range of cities cyclically
    const citiesPassed = [];
    let currentIndex = currCityLvl - 1; // Convert to zero-based index

    for (let i = 0; i < targetCityLvlInput; i++) {
        const wrappedIndex = (currentIndex + i) % 60;
        citiesPassed.push(cityArray[wrappedIndex]);
    }

    const gemsAmt = citiesPassed.reduce((acc, [, { totalGems }]) => acc + totalGems, 0);
    const formula = gemsAmt;

    // Get the city names for the range
    const currCity = cities[currCityLvl].city;
    const targetCity = cities[((currCityLvl - 1 + targetCityLvlInput) % 60) + 1].city;

    // Update the result display
    result.innerHTML = `
        <div class="flex flex-col gap-3">
            <div>Your City: <div class="text-white font-normal">${currCity}(${currCityLvl})</div></div>
             <div>Your City Level: <div class="text-white font-normal">${currCityLvlInput}<span class="text-green-400">+${targetCityLvlInput} Cities</span></div></div>
            <div>
                City Range: <div class="text-white font-normal">${currCity}(${currCityLvl}) -> ${targetCity}(${((currCityLvl - 1 + targetCityLvlInput) % 60) + 1})</div>
            </div>
            <div>Gems Gained: <div class="text-white font-normal">${formula}</div></div>
        </div>
    `;
}


export function calculateTotalCityTotRewards() {
    const cityLifetimeLvlInput = Number(document.getElementById('cities-lifetime-input').value);
    const cityLifetimeLvl = cityLifetimeLvlInput % 60 || 60;
    const result = document.getElementById('cities-lifetime-result');
    const cityArray = Object.entries(cities);

    // Input validation
    if (cityLifetimeLvlInput === 0) {
        result.innerText = "";
        return;
    }

    if (cityLifetimeLvlInput < 0) {
        result.classList.replace("text-[#00b3b3]", "text-red-400");
        result.innerText = "Invalid level. Valid level range are positive numbers";
        return;
    } else {
        result.classList.replace("text-red-400", "text-[#00b3b3]");
    }

    let currentIndex = cityLifetimeLvl;

    // Calculate the range of cities cyclically, excluding the starting city
    const cityRange = [];
    for (let i = 1; i < cityLifetimeLvlInput; i++) { // Start from 1 to exclude the starting city
        const wrappedIndex = (currentIndex + i) % 60; // Wrap around after 60
        cityRange.push(cityArray[wrappedIndex]);
    }

    // Calculate gems gained in the selected range
    const gemsAmt = cityRange.reduce((acc, [, { totalGems }]) => acc + totalGems, 0);

    // Get the current city name
    const currentCity = cities[cityLifetimeLvl].city;

    // Update the result display
    result.innerHTML = `
      <div class="flex flex-col gap-3">
        <div>Your Current City: <div class="text-white font-normal">${currentCity}</div></div>
        <div>Gems Acquired (Excluding Current City): <div class="text-white font-normal">${gemsAmt}</div></div>
      </div>
    `;
}

