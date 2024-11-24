const petBonuses = {
    panda: 1000,
    turtle: 700,
    red_panda: 1600,
    pony: 700,
    penguin: 700
};

const tabs = {
    "AWvSolo": "aw-vs-solo",
    "Profit": "profit-calculator",
    "Boxes": "boxes",
    "ClubRewards": "club-rewards",
} 

const sections = {
    "xpTable": "",
    "clubDesc": "",
}

const clubLvls = {
    lvl1: { xp: "N/A", totalXP: 0, reward: "N/A" },
    lvl2: { xp: 150, totalXP: 150, reward: "2 Small Boxes" },
    lvl3: { xp: 200, totalXP: 350, reward: "1.05x Multiplier" },
    lvl4: { xp: 300, totalXP: 650, reward: "150 Gems" },
    lvl5: { xp: 450, totalXP: 1100, reward: "75 Petfood" },
    lvl6: { xp: 650, totalXP: 1750, reward: "1.1x Multiplier" },
    lvl7: { xp: 900, totalXP: 2650, reward: "12 Small Boxes" },
    lvl8: { xp: 1240, totalXP: 3890, reward: "600 Gems" },
    lvl9: { xp: 1570, totalXP: 5460, reward: "1.15x Multiplier" },
    lvl10: { xp: 1890, totalXP: 7350, reward: "2 Club Boxes" },
    lvl11: { xp: 2200, totalXP: 9550, reward: "350 Petfood" },
    lvl12: { xp: 2500, totalXP: 12050, reward: "6 Big Boxes" },
    lvl13: { xp: 2790, totalXP: 14840, reward: "1.2x Multiplier" },
    lvl14: { xp: 3070, totalXP: 17910, reward: "1.6k Gems" },
    lvl15: { xp: 3340, totalXP: 21250, reward: "500 Petfood" },
    lvl16: { xp: 3600, totalXP: 24850, reward: "1.25x Multiplier" },
    lvl17: { xp: 3850, totalXP: 28700, reward: "9 Big Boxes" },
    lvl18: { xp: 4090, totalXP: 32790, reward: "2.1k Gems" },
    lvl19: { xp: 4320, totalXP: 37110, reward: "1.3x Multiplier" },
    lvl20: { xp: 4540, totalXP: 41650, reward: "3 Club Boxes" },
    lvl21: { xp: 4750, totalXP: 46400, reward: "700 Petfood" },
    lvl22: { xp: 4950, totalXP: 51350, reward: "1 Epic Egg" },
    lvl23: { xp: 5140, totalXP: 56490, reward: "1.35x Multiplier" },
    lvl24: { xp: 5320, totalXP: 61810, reward: "2.5k Gems" },
    lvl25: { xp: 5490, totalXP: 67300, reward: "12 Big Boxes" },
    lvl26: { xp: 5650, totalXP: 72950, reward: "1.4x Multiplier" },
    lvl27: { xp: 5800, totalXP: 78750, reward: "800 Petfood" },
    lvl28: { xp: 5940, totalXP: 84690, reward: "2.75k Gems" },
    lvl29: { xp: 6070, totalXP: 90760, reward: "1.45x Multiplier" },
    lvl30: { xp: 6190, totalXP: 96950, reward: "4 Club Boxes" },
    lvl31: { xp: 6300, totalXP: 103250, reward: "900 Petfood" },
    lvl32: { xp: 6400, totalXP: 109650, reward: "3k Gems" },
    lvl33: { xp: 6500, totalXP: 116150, reward: "1.5x Multiplier" },
    lvl34: { xp: 6600, totalXP: 122750, reward: "15 Big Boxes" },
    lvl35: { xp: 6700, totalXP: 129450, reward: "2 Epic Eggs" },
    lvl36: { xp: 6800, totalXP: 136250, reward: "1.55x Multiplier" },
    lvl37: { xp: 6900, totalXP: 143150, reward: "3.25k Gems" },
    lvl38: { xp: 7000, totalXP: 150150, reward: "1000 Petfood" },
    lvl39: { xp: 7100, totalXP: 157250, reward: "1.6x Multiplier" },
    lvl40: { xp: 7200, totalXP: 164450, reward: "6 Club Boxes" },
    lvl41: { xp: 7300, totalXP: 171750, reward: "3.5k Gems" },
    lvl42: { xp: 7400, totalXP: 179150, reward: "1.7x Multiplier" },
    lvl43: { xp: 7500, totalXP: 186650, reward: "18 Big Boxes" },
    lvl44: { xp: 7600, totalXP: 194250, reward: "1150 Petfood" },
    lvl45: { xp: 7700, totalXP: 201950, reward: "1.8x Multiplier" },
    lvl46: { xp: 7800, totalXP: 209750, reward: "3.75k Gems" },
    lvl47: { xp: 7900, totalXP: 217650, reward: "20 Big Boxes" },
    lvl48: { xp: 8000, totalXP: 225650, reward: "2x Multiplier" },
    lvl49: { xp: 8100, totalXP: 233750, reward: "1250 Petfood" },
    lvl50: { xp: 8200, totalXP: 241950, reward: "8 Club Boxes" }
};

let totalGems = 0;
let totalPetfood = 0;
let smallBoxes = 0;
let bigBoxes = 0;
let clubBoxes = 0;
let epicEggs = 0;
let totalMultiplier = 0;