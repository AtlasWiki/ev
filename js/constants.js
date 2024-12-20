// pet multiplier percentages that affect profits times by 100 (divided by 100 later in the formula)
export const petProfitBonuses = {
    panda: 1100,
    turtle: 800,
    red_panda: 1700,
    pony: 800,
    penguin: 800,
    dark_horse: 100,
    tortoise: 100,
    mole: 1600,
    vroomba: 100,
    baby_kraker: 1600,
    none: 100,
};

// pet multiplier percentages that affect dishes like perfect and divinity
export const petPerfectDishBonuses = {
    tortoise: 600,
    dark_horse: 600
}

export const petDivineDishBonuses = {
    baby_kraker: 40,
    red_panda: 20,
}

// Tab names and IDs
export const tabs = {
    "AWvSolo": "aw-vs-solo",
    "Profit": "profit-calculator",
    "Boxes": "boxes",
    "ClubRewards": "club-rewards",
    "Changelog": "changelog",
    "Blueprint": "blueprint",
    "Cities": "Cities",
} 

// Section tag names and IDs
export const sections = {
    "xpTable": "xpTable",
    "club": "club-desc",
    "awvsolo": "awvsolo-desc",
    "profit": "profit-desc",
    "clubGoal": "clubGoal",
    "cities": "cities-desc",
    "citiesLifetime": "citiesLifetime"
}

// SectionPlaceholders. tag names and IDs. used for matching with the placeholder divs
export const sectionPlaceholder = {
    "club": "clubSection",
    "profit" : "profitSection",
    "awvsolo": "awvsoloSection",
    "cities": "citiesSection"
}

// IDs (belongs to section ids) and text
export const descriptions = {
    "profit-desc": `This is a calculator for calculating how much profit multiplier you would get in each dish.
                    For example, a worker selling a $90 dish would profit $720k if the multipliers times the dish by 8000x.
                    For club multipliers, please put that as your remote to include it in a more accurate measurement.`,

    "awvsolo-desc":`This is a calculator for calculating percentages from all workers and solo workers.
                    When combining all workers and solo workers, the percentages are multiplicative rather than additive.
                    This research can be found in this 
                    <a class="text-blue-400 underline hover:no-underline" href="https://www.reddit.com/r/eatventureofficial/comments/14kq5xa/demonstration_that_personal_and_all_worker/">reddit post</a>.
                    Be sure to join the discord community for more guides, theories, and proven research.`,
    
    "club-desc": `This is a lookup tool where you figure out how much exp you need for each level as a club or average per person, 
                or even calculate the amount of rewards gained. 
                The reward calculator may be subject to change as the game goes on.
                A Club XP rewards and a reference chart is provided. The data and formulas were taken from:
                <a class="text-blue-400 underline hover:no-underline" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSV4ou9YZ1NgCYkT4Tr__sq6PHN6YsPyQuUh-Pryw98hQiEkCwcbUhoPXAB2pPGynuBIAjcyc7A86zv/pubhtml#">Eatventure's handbook</a>
                made by <span class="text-[#00b3b3]">fallen_spectre</span> and <span class="text-[#00b3b3]">BladedCross</span>. The calculations can be seen from <a class="text-blue-400 underline hover:no-underline" href="https://docs.google.com/spreadsheets/d/1b79jTHCbbLnLLWFgrCdxYWqDgt2msgrFqUMaBR3XSYo/edit?gid=607690110#gid=607690110"> EV Multipurpose Calculator</a>`,

    "cities-desc": `This is a calculator for calculating statistics related to how gems and boxes associate with cities.
                    As of right now, there are only 60 different cities and they loop in cycles.
                    Cities may have different amount of stages, stations, gems, and boxes.
                    The Growth Calculator assumes you gained 0 gems at your current city level, so
                    if your city is San Francisco and your target city is New York, you would
                    gain only the total amount of gems <b>prior</b> New York (in this case San Francisco). 
                    `,
    
                
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

export const ultimate_items = {
    royal_crown: {
        children: [
            { elder_beard: { type: "legendary_items", quantity: 1 } },
            { mafia_hat: { type: "epic_items", quantity: 2 } },
            { white_hat: { type: "rare_items", quantity: 3 } }
        ],
    },
    royal_robe: {
        
        children: [
            { kimono_black_belt: { type: "legendary_items", quantity: 1 } },
            { robe: { type: "epic_items", quantity: 2 } },
            { tux: { type: "rare_items", quantity: 3 } }
        ],
    },
    royal_sceptre: {
        children: [
            { pepper_mill: { type: "legendary_items", quantity: 1 } },
            { mug: { type: "epic_items", quantity: 2 } },
            { scooper: { type: "rare_items", quantity: 3 } }
        ],
    },
    torch_helmet: {
        children: [
            { irish_hat: { type: "legendary_items", quantity: 1 } },
            { red_glasses: { type: "epic_items", quantity: 2 } },
            { fireman_hat: { type: "rare_items", quantity: 3 } }
        ],
    },
    tool_belt: {
        children: [
            { tank_top: { type: "legendary_items", quantity: 1 } },
            { black_sweater: { type: "epic_items", quantity: 2 } },
            { blue_hoodie: { type: "rare_items", quantity: 3 } }
        ],
    },
    pickaxe: {
        children: [
            { chopsticks: { type: "legendary_items", quantity: 1 } },
            { rolling_pin: { type: "epic_items", quantity: 2 } },
            { ketchup: { type: "rare_items", quantity: 3 } }
        ],
    },
    robot_head: {
        children: [
            { purple_cap: { type: "legendary_items", quantity: 1 } },
            { hood: { type: "epic_items", quantity: 2 } },
            { sushi_hat: { type: "rare_items", quantity: 3 } }
        ],
    },
    robot_suit: {
        children: [
            { italian_chef: { type: "legendary_items", quantity: 1 } },
            { purple_apron: { type: "epic_items", quantity: 2 } },
            { yellow_hoodie: { type: "rare_items", quantity: 3 } }
        ],
    },
    laser_gun: {
        children: [
            { mixer: { type: "legendary_items", quantity: 1 } },
            { whisk: { type: "epic_items", quantity: 2 } },
            { cheese_grater: { type: "rare_items", quantity: 3 } }
        ],
    },
    shark_head: {
        children: [
            { tall_black_hat: { type: "legendary_items", quantity: 1 } },
            { black_chefs_hat: { type: "epic_items", quantity: 2 } },
            { cool_cap: { type: "rare_items", quantity: 3 } }
        ],
    },
    shark_body: {
        children: [
            { black_apron: { type: "legendary_items", quantity: 1 } },
            { kimono_white_belt: { type: "epic_items", quantity: 2 } },
            { bowtie: { type: "rare_items", quantity: 3 } }
        ],
    },
    anchor: {
        children: [
            { cook_book: { type: "legendary_items", quantity: 1 } },
            { pizza_cutter: { type: "epic_items", quantity: 2 } },
            { pasta_spoon: { type: "rare_items", quantity: 3 } }
        ],
    },
    ring_of_evil: {
        children: [
            { snake_ring: { type: "legendary_items", quantity: 1 } },
            { wreath_ring: { type: "epic_items", quantity: 2 } },
            { silver_ring: { type: "rare_items", quantity: 3 } }
        ],
    },
    ring_of_love: {
        children: [
            { winged_ring: { type: "legendary_items", quantity: 1 } },
            { donut_ring: { type: "epic_items", quantity: 2 } },
            { candy_ring: { type: "rare_items", quantity: 3 } }
        ],
    },
    ring_of_nature: {
        children: [
            { bee_ring: { type: "legendary_items", quantity: 1 } },
            { bagel_ring: { type: "epic_items", quantity: 2 } },
            { onion_ring: { type: "rare_items", quantity: 3 } }
        ],
    },
    ring_of_seas: {
        children: [
            { lucky_ring: { type: "legendary_items", quantity: 1 } },
            { gold_ring: { type: "epic_items", quantity: 2 } },
            { plastic_ring: { type: "rare_items", quantity: 3 } }
        ],
    },
    anchor_necklace: {
        children: [
            { shark_tooth: { type: "legendary_items", quantity: 1 } },
            { pearls: { type: "epic_items", quantity: 2 } },
            { shellfish: { type: "rare_items", quantity: 3 } }
        ],
    },
    nazar: {
        children: [
            { beads: { type: "legendary_items", quantity: 1 } },
            { diamond_chain: { type: "epic_items", quantity: 2 } },
            { leather: { type: "rare_items", quantity: 3 } }
        ],
    },
    pirate_skull: {
        children: [
            { compass: { type: "legendary_items", quantity: 1 } },
            { gold_chain: { type: "epic_items", quantity: 2 } },
            { bandana: { type: "rare_items", quantity: 3 } }
        ],
    },
    treasure_key: {
        children: [
            { sausages: { type: "legendary_items", quantity: 1 } },
            { dog_collar: { type: "epic_items", quantity: 2 } },
            { salt_shaker: { type: "rare_items", quantity: 3 } }
        ],
    },
};

export const legendary_items = {
    elder_beard: {
        children: [
            { mafia_hat: { type: "epic_items", quantity: 2 } },
            { white_hat: { type: "rare_items", quantity: 3 } }
        ],
    },
    kimono_black_belt: {
        children: [
            { kimono_white_belt: { type: "epic_items", quantity: 2 } },
            { bowtie: { type: "rare_items", quantity: 3 } }
        ],
    },
    pepper_mill: {
        children: [
            { rolling_pin: { type: "epic_items", quantity: 2 } },
            { broom: { type: "rare_items", quantity: 3 } }
        ],
    },
    irish_hat: {
        children: [
            { red_glasses: { type: "epic_items", quantity: 2 } },
            { fireman_hat: { type: "rare_items", quantity: 3 } }
        ],
    },
    tank_top: {
        children: [
            { black_sweater: { type: "epic_items", quantity: 2 } },
            { blue_hoodie: { type: "rare_items", quantity: 3 } }
        ]
    },
    chopsticks: {
        children: [
            { pizza_cutter: { type: "epic_items", quantity: 2 } },
            { ketchup: { type: "rare_items", quantity: 3 } }
        ]
    },
    purple_cap: {
        children: [
            { hood: { type: "epic_items", quantity: 2 } },
            { cool_cap: { type: "rare_items", quantity: 3 } }
        ]
    },
    italian_chef: {
        children: [
            { robe: { type: "epic_items", quantity: 2 } },
            { apron: { type: "rare_items", quantity: 3 } }
        ]
    },
    mixer: {
        children: [
            { whisk: { type: "epic_items", quantity: 2 } },
            { cheese_grater: { type: "rare_items", quantity: 3 } }
        ]
    },
    tall_black_hat: {
        children: [
            { black_chefs_hat: { type: "epic_items", quantity: 2 } },
            { cone: { type: "rare_items", quantity: 3 } }
        ]
    },
    black_apron: {
        children: [
            { purple_apron: { type: "epic_items", quantity: 2 } },
            { tux: { type: "rare_items", quantity: 3 } }
        ]
    },
    cook_book: {
        children: [
            { mug: { type: "epic_items", quantity: 2 } },
            { pasta_spoon: { type: "rare_items", quantity: 3 } }
        ]
    },
    bee_ring: {
        children: [
            { bagel_ring: { type: "epic_items", quantity: 2 } },
            { onion_ring: { type: "rare_items", quantity: 3 } }
        ]
    },
    lucky_ring: {
        children: [
            { gold_ring: { type: "epic_items", quantity: 2 } },
            { plastic_ring: { type: "rare_items", quantity: 3 } }
        ]
    },
    snake_ring: {
        children: [
            { wreath_ring: { type: "epic_items", quantity: 2 } },
            { silver_ring: { type: "rare_items", quantity: 3 } }
        ]
    },
    winged_ring: {
        children: [
            { donut_ring: { type: "epic_items", quantity: 2 } },
            { candy_ring: { type: "rare_items", quantity: 3 } }
        ]
    },
    beads: {
        children: [
            { diamond_chain: { type: "epic_items", quantity: 2 } },
            { leather: { type: "rare_items", quantity: 3 } }
        ]
    },
    compass: {
        children: [
            { gold_chain: { type: "epic_items", quantity: 2 } },
            { bandana: { type: "rare_items", quantity: 3 } }
        ]
    },
    sausages: {
        children: [
            { dog_collar: { type: "epic_items", quantity: 2 } },
            { salt_shaker: { type: "rare_items", quantity: 3 } }
        ]
    },
    shark_tooth: {
        children: [
            { pearls: { type: "epic_items", quantity: 2 } },
            { shellfish: { type: "rare_items", quantity: 3 } }
        ]
    },
};

export const mythic_items = {
    chefs_helmet: {
        children: [
            { robot_head: { type: "ultimate_items", quantity: 1 } },
            { royal_crown: { type: "ultimate_items", quantity: 1 } },
            { shark_head: { type: "ultimate_items", quantity: 1 } },
            { torch_helmet: { type: "ultimate_items", quantity: 1 } },
        ]
    },
    armoured_apron: {
        children: [
            { robot_suit: { type: "ultimate_items", quantity: 1 } },
            { royal_robe: { type: "ultimate_items", quantity: 1 } },
            { shark_body: { type: "ultimate_items", quantity: 1 } },
            { tool_belt: { type: "ultimate_items", quantity: 1 } },
        ]
    },
    warriors_cleaver: {
        children: [
            { laser_gun: { type: "ultimate_items", quantity: 1 } },
            { royal_sceptre: { type: "ultimate_items", quantity: 1 } },
            { anchor: { type: "ultimate_items", quantity: 1 } },
            { pickaxe: { type: "ultimate_items", quantity: 1 } },
        ]
    },
    warriors_tenderiser: {
        children: [
            { laser_gun: { type: "ultimate_items", quantity: 1 } },
            { royal_sceptre: { type: "ultimate_items", quantity: 1 } },
            { anchor: { type: "ultimate_items", quantity: 1 } },
            { pickaxe: { type: "ultimate_items", quantity: 1 } },
        ]
    },
    ring_of_thunder:{
        children: [
            { ring_of_evil: { type: "ultimate_items", quantity: 1 } },
            { ring_of_love: { type: "ultimate_items", quantity: 1 } },
            { ring_of_nature: { type: "ultimate_items", quantity: 1 } },
            { ring_of_seas: { type: "ultimate_items", quantity: 1 } },
        ]
    },
}

export const epic_items = {
    mafia_hat: {ingredients: [{}]},
    robe: {ingredients: [{}]},
    mug: {ingredients: [{}]},
    red_glasses: {ingredients: [{}]},
    black_sweater: {ingredients: [{}]},
    rolling_pin: {ingredients: [{}]},
    hood: {ingredients: [{}]},
    purple_apron: {ingredients: [{}]},
    whisk: {ingredients: [{}]},
    black_chefs_hat: {ingredients: [{}]},
    kimono_white_belt: {ingredients: [{}]},
    pizza_cutter: {ingredients: [{}]},
}

export const rare_items = {
    white_hat: {ingredients: [{}]},
    tux: {ingredients: [{}]},
    scooper: {ingredients: [{}]},
    fireman_hat: {ingredients: [{}]},
    blue_hoodie: {ingredients: [{}]},
    ketchup: {ingredients: [{}]},
    sushi_hat: {ingredients: [{}]},
    yellow_hoodie: {ingredients: [{}]},
    cheese_grater: {ingredients: [{}]},
    cool_cap: {ingredients: [{}]},
    bowtie: {ingredients: [{}]},
    pasta_spoon: {ingredients: [{}]},
    broom: {ingredients: [{}]},
}

export const itemsMap = {
    mythic: mythic_items,
    ultimate: ultimate_items,
    legendary: legendary_items,
    epic: epic_items,
    rare: rare_items,
};

export const itemBtns = {
    mythic: "mythicBtn",
    ultimate: "ultimateBtn",
    legendary: "legendaryBtn",
}

export const cities = {
    1: { city: "San Francisco", totalGems: 196 },
    2: { city: "New York", totalGems: 160 },
    3: { city: "Miami", totalGems: 172 },
    4: { city: "Paris", totalGems: 196 },
    5: { city: "London", totalGems: 190 },
    6: { city: "Tokyo", totalGems: 184 },
    7: { city: "Venice", totalGems: 178 },
    8: { city: "Beirut", totalGems: 190 },
    9: { city: "Berlin", totalGems: 184 },
    10: { city: "Oslo", totalGems: 202 },
    11: { city: "Rome", totalGems: 178 },
    12: { city: "Warsaw", totalGems: 184 },
    13: { city: "Johannesburg", totalGems: 178 },
    14: { city: "Stockholm", totalGems: 196 },
    15: { city: "Mexico City", totalGems: 172 },
    16: { city: "Portland", totalGems: 184 },
    17: { city: "Toronto", totalGems: 154 },
    18: { city: "Sydney", totalGems: 184 },
    19: { city: "Lyon", totalGems: 208 },
    20: { city: "Glasgow", totalGems: 178 },
    21: { city: "Beijing", totalGems: 178 },
    22: { city: "Bruges", totalGems: 172 },
    23: { city: "Istanbul", totalGems: 190 },
    24: { city: "Hamburg", totalGems: 184 },
    25: { city: "Zurich", totalGems: 202 },
    26: { city: "Milan", totalGems: 178 },
    27: { city: "Budapest", totalGems: 208 },
    28: { city: "Nairobi", totalGems: 172 },
    29: { city: "Helsinki", totalGems: 190 },
    30: { city: "Sao Paulo", totalGems: 172 },
    31: { city: "Seattle", totalGems: 196 },
    32: { city: "San Diego", totalGems: 160 },
    33: { city: "Santa Monica", totalGems: 172 },
    34: { city: "Brussels", totalGems: 196 },
    35: { city: "Luxembourg", totalGems: 190 },
    36: { city: "Hong Kong", totalGems: 184 },
    37: { city: "Treviso", totalGems: 178 },
    38: { city: "Marrakesh", totalGems: 190 },
    39: { city: "Cologne", totalGems: 184 },
    40: { city: "Tallinn", totalGems: 202 },
    41: { city: "Florence", totalGems: 178 },
    42: { city: "Prague", totalGems: 184 },
    43: { city: "Cape Town", totalGems: 178 },
    44: { city: "Copenhagen", totalGems: 196 },
    45: { city: "Lima", totalGems: 172 },
    46: { city: "Los Angeles", totalGems: 184 },
    47: { city: "Pittsburgh", totalGems: 154 },
    48: { city: "Nassau", totalGems: 184 },
    49: { city: "Madrid", totalGems: 208 },
    50: { city: "Amsterdam", totalGems: 178 },
    51: { city: "Seoul", totalGems: 178 },
    52: { city: "Birmingham", totalGems: 172 },
    53: { city: "Cairo", totalGems: 190 },
    54: { city: "Frankfurt", totalGems: 184 },
    55: { city: "Quebec", totalGems: 202 },
    56: { city: "Naples", totalGems: 178 },
    57: { city: "Zagreb", totalGems: 208 },
    58: { city: "Pretoria", totalGems: 172 },
    59: { city: "Gothenburg", totalGems: 190 },
    60: { city: "Santiago", totalGems: 172 }
};
  

export const unitLetters = {
    a: "aa",
    b: "ab",
    c: "ac",
    d: "ad",
    e: "ae",
    f: "af",
    g: "ag",
    h: "ah",
    i: "ai",
    j: "aj",
    k: "ak",
    l: "al",
    m: "am",
    n: "an",
    o: "ao",
    p: "ap",
    q: "aq",
    r: "ar",
    s: "as",
    t: "at",
    u: "au",
    v: "av",
    w: "aw",
    x: "ax",
    y: "ay",
    z: "az"
};