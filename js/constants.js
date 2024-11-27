// need more pets
export const petBonuses = {
    panda: 1100,
    turtle: 800,
    red_panda: 1700, // need to add 20% divinity
    pony: 800,
    penguin: 800,
};

// Tab names and IDs
export const tabs = {
    "AWvSolo": "aw-vs-solo",
    "Profit": "profit-calculator",
    "Boxes": "boxes",
    "ClubRewards": "club-rewards",
    "Changelog": "changelog"
} 

// Section tag names and IDs
export const sections = {
    "xpTable": "xpTable",
    "club": "club-desc",
    "awvsolo": "awvsolo-desc",
    "profit": "profit-desc",
    "clubGoal": "clubGoal",
}

// SectionPlaceholders. tag names and IDs. used for matching with the placeholder divs
export const sectionPlaceholder = {
    "club": "clubSection",
    "profit" : "profitSection",
    "awvsolo": "awvsoloSection"
}

// IDs (belongs to section ids) and text
export const descriptions = {
    "profit-desc": `This is a calculator for calculating how much profit multiplier you would get in each dish.
                    For example, a worker selling a $90 dish would profit $720k if the multipliers times the dish by 8000x.
                    Keep in mind this calculator is not completely accurate and it can be a little off (further research is needed).
                    However, it gives an idea of your possible profit multiplier. 
                    For club multipliers, please put that as your remote to include it in a more accurate measurement.`,

    "awvsolo-desc":`This is a calculator for calculating percentages from all workers and solo workers.
                    When combining all workers and solo workers, the percentages are multiplicative rather than addictive.
                    This research can be found in this 
                    <a class="text-blue-400 underline hover:no-underline" href="https://www.reddit.com/r/eatventureofficial/comments/14kq5xa/demonstration_that_personal_and_all_worker/">reddit post</a>.
                    Be sure to join the discord community for more guides, theories, and proven research.`,
    
    "club-desc": `This is a lookup tool where you figure out how much exp you need for each level as a club or average per person, 
                or even calculate the amount of rewards gained. 
                The reward calculator may be subject to change as the game goes on.
                A Club XP rewards and a reference chart is provided. The data and formulas were taken from:
                <a class="text-blue-400 underline hover:no-underline" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSV4ou9YZ1NgCYkT4Tr__sq6PHN6YsPyQuUh-Pryw98hQiEkCwcbUhoPXAB2pPGynuBIAjcyc7A86zv/pubhtml#">Eatventure's handbook</a>
                made by <span class="text-[#00b3b3]">fallen_spectre</span> and <span class="text-[#00b3b3]">BladedCross</span>. The calculations can be seen from <a class="text-blue-400 underline hover:no-underline" href="https://docs.google.com/spreadsheets/d/1b79jTHCbbLnLLWFgrCdxYWqDgt2msgrFqUMaBR3XSYo/edit?gid=607690110#gid=607690110"> EV Multipurpose Calculator</a>`,

    
                
};

export const clubLvls = {
    lvl1: { xp: 0, totalXP: 0, reward: "N/A" },
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

export let totalGems = 0;
export let totalPetfood = 0;
export let smallBoxes = 0;
export let bigBoxes = 0;
export let clubBoxes = 0;
export let epicEggs = 0;
export let totalMultiplier = 0;

export const regex_patterns = {
    gems: /(\d+(?:\.\d+)?k?)\s*Gems/i,
    petFood: /(\d+(?:\.\d+)?k?)\s*Petfood/i,
    other: /(\d+)?\s*(Small|Big|Club)\s*Boxes|(\d+)?\s*Epic\s*Egg/i,
}
