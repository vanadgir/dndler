const races = {
    "Hill Dwarf": {
        "Bonuses": [0, 0, 2, 0, 1, 0],
        "Size": "Medium",
        "Speed": {"Walk": 25},
        "Proficiencies": {
            "Weapons": [
                "Battleaxe",
                "Handaxe",
                "Light Hammer",
                "Warhammer"
            ],
            "Tools": [
                ["Smith's Tools", "Brewer's Supplies", "Mason's Tools"]
            ],
            "Languages": ["Common", "Dwarvish"]
        },
        "Features": [
            "Darkvision",
            "Dwarven Resilience",
            "Dwarven Combat Training",
            "Stonecunning",
            "Dwarven Toughness"
        ]
    },
    "High Elf": {
        "Bonuses": [0, 2, 0, 1, 0, 0],
        "Size": "Medium",
        "Speed": {"Walk": 30},
        "Proficiencies": {
            "Weapons": [
                "Longsword",
                "Shortsword",
                "Shortbow",
                "Longbow"
            ],
            "Languages": [
                "Common",
                "Elvish",
                "CHOICE"
            ],
            "Skills": {
                "Choices": ["Perception"],
                "numChoices": 1
            }
        },
        "Features": [
            "Darkvision",
            "Fey Ancestry",
            "Trance",
            "Keen Senses",
            "Cantrip",
            "Elf Weapon Training"
        ]
    },
    "Lightfoot Halfling": {
        "Bonuses": [0, 2, 0, 0, 0, 1],
        "Size": "Small",
        "Speed": {"Walk": 25},
        "Proficiencies": {
            "Languages": ["Common", "Halfling"]
        },
        "Features": [
            "Halfling Luck",
            "Brave",
            "Nimble",
            "Naturally Stealthy"
        ]
    },
    "Human": {
        "Bonuses": [1, 1, 1, 1, 1, 1],
        "Size": "Medium",
        "Speed": {"Walk": 30},
        "Proficiencies": {
            "Languages": [
                "Common",
                "CHOICE"
            ]
        },
        "Features": []
    },
    "Dragonborn": {
        "Bonuses": [2, 0, 0, 0, 0, 1],
        "Size": "Medium",
        "Speed": {"Walk": 30},
        "Proficiencies": {
            "Languages": ["Common", "Draconic"]
        },
        "Features": [
            "Draconic Ancestry",
            "Breath Weapon",
            "Draconic Resistance"
        ]
    },
    "Rock Gnome": {
        "Bonuses": [0, 0, 1, 2, 0, 0],
        "Size": "Small",
        "Speed": {"Walk": 25},
        "Proficiencies": {
            "Tools": [
                "Tinker's Tools"
            ],
            "Languages": [
                "Common",
                "Gnomish"
            ]
        },
        "Features": [
            "Darkvision",
            "Gnome Cunning",
            "Artificer's Lore",
            "Tinker"
        ]
    },
    "Half-Elf": {
        "Bonuses": [0, 0, 0, 0, 0, 2],
        "Size": "Medium",
        "Speed": {"Walk": 30},
        "Proficiencies": {
            "Languages": [
                "Common",
                "Elvish",
                "CHOICE"
            ],
            "Skills": {
                "Choices": ["Acrobatics", "Animal", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Religion", "Sleight", "Stealth", "Survival"],
                "numChoices": 2
            }
        },
        "Features": [
            "Darkvision",
            "Fey Ancestry"
        ]
    },
    "Half-Orc": {
        "Bonuses": [2, 0, 1, 0, 0, 0],
        "Size": "Medium",
        "Speed": {"Walk": 30},
        "Proficiencies": {
            "Languages": ["Common", "Orc"],
            "Skills": {
                "Choices": ["Intimidation"],
                "numChoices": 1
            }
        },
        "Features": [
            "Darkvision",
            "Menacing",
            "Relentless Endurance",
            "Savage Attacks"
        ]
    },
    "Tiefling": {
        "Bonuses": [0, 0, 0, 1, 0, 2],
        "Size": "Medium",
        "Speed": {"Walk": 30},
        "Proficiencies": {
            "Languages": [
                "Common",
                "Infernal"
            ]
        },
        "Features": [
            "Darkvision",
            "Hellish Resistance",
            "Infernal Legacy"
        ]
    }
};

export default races;