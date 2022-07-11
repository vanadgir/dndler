const classes = {
    "Barbarian": {
        "HitDice": "d12",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Shield"],
            "Weapons": ["Simple", "Martial"],
            "Tools": [],
            "Saving Throws": ["STR", "CON"],
            "Skills": {
                "Choices": ["Animal", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
                "numChoices": 2
            }
        },
        "Equipment": [
            "Explorer's Pack",
            "Javelin(4)",
            ["Greataxe", "Martial Melee"],
            ["Handaxe(2)", "Simple"]
        ],
        "Features": {
            1: ["Rage", "Unarmored Defense (Barbarian)"],
            2: ["Reckless Attack", "Danger Sense"],
            3: ["Primal Path"],
            4: ["ASI"],
            5: ["Extra Attack", "Fast Movement"],
            6: ["Path Feature"],
            7: ["Feral Instinct"],
            8: ["ASI"],
            9: ["Brutal Critical"],
            10: ["Path Feature"],
            11: ["Relentless Rage"],
            12: ["ASI"],
            13: ["Brutal Critical"],
            14: ["Path Feature"],
            15: ["Persistent Rage"],
            16: ["ASI"],
            17: ["Brutal Critical"],
            18: ["Indomitable Might"],
            19: ["ASI"],
            20: ["Primal Champion"]
        }
    },
    "Bard": {
        "HitDice": "d8",
        "Proficiencies": {
            "Armor": ["Light"],
            "Weapons": ["Simple", "Hand Crossbow", "Longsword", "Rapier", "Shortsword"],
            "Tools": ["Instrument Choice", "Instrument Choice", "Instrument Choice"],
            "Saving Throws": ["DEX", "CHA"],
            "Skills": {
                "Choices": ["Acrobatics", "Animal", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Religion", "Sleight", "Stealth", "Survival"],
                "numChoices": 3
            }
        },
        "Equipment": [
            "Leather Armor",
            "Dagger",
            ["Rapier", "Longsword", "Simple"],
            ["Diplomat's Pack", "Entertainer's Pack"],
            ["Lute", "Instrument Choice"]
        ],
        "Features": {
            1: ["Spellcasting", "Bardic Inspiration"],
            2: ["Jack of All Trades", "Song of Rest"],
            3: ["Bard College", "Expertise (Bard)"],
            4: ["ASI"],
            5: ["Bardic Inspiration", "Font of Inspiration"],
            6: ["Countercharm", "Bard College Feature"],
            7: [],
            8: ["ASI"],
            9: ["Song of Rest"],
            10: ["Bardic Inspiration", "Expertise (Bard)", "Magical Secrets"],
            11: [],
            12: ["ASI"],
            13: ["Song of Rest"],
            14: ["Magical Secrets", "Bard College Feature"],
            15: ["Bardic Inspiration"],
            16: ["ASI"],
            17: ["Song of Rest"],
            18: ["Magical Secrets"],
            19: ["ASI"],
            20: ["Superior Inspiration"]
        }
    },
    "Cleric": {
        "HitDice": "d8",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Shield"],
            "Weapons": ["Simple"],
            "Tools": [],
            "Saving Throws": ["WIS", "CHA"],
            "Skills": {
                "Choices": ["History", "Insight", "Medicine", "Persuasion", "Religion"],
                "numChoices": 2
            }
        },
        "Equipment": [
            "Shield",
            "Holy Symbol",
            ["Mace", "Warhammer"],
            ["Scale Mail", "Leather Armor", "Chain Mail"],
            [["Light Crossbow", "Bolt(20)"], "Simple"],
            ["Priest's Pack", "Explorer's Pack"]
        ],
        "Features": {
            1: ["Spellcasting", "Divine Domain"],
            2: ["Channel Divinity", "Divine Domain Feature"],
            3: [],
            4: ["ASI"],
            5: ["Destroy Undead"],
            6: ["Channel Divinity", "Divine Domain Feature"],
            7: [],
            8: ["ASI", "Destroy Undead", "Divine Domain Feature"],
            9: [],
            10: ["Divine Intervention"],
            11: ["Destroy Undead"],
            12: ["ASI"],
            13: [],
            14: ["Destroy Undead"],
            15: [],
            16: ["ASI"],
            17: ["Destroy Undead", "Divine Domain Feature"],
            18: ["Channel Divinity"],
            19: ["ASI"],
            20: ["Divine Intervention"]
        }
    },
    "Druid": {
        "HitDice": "d8",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Shield"],
            "Weapons": ["Club", "Dagger", "Dart", "Javelin", "Mace", "Quarterstaff", "Scimitar", "Sickle", "Sling", "Spear"],
            "Tools": ["Herbalism Kit"],
            "Saving Throws": ["INT", "WIS"],
            "Skills": {
                "Choices": ["Arcana", "Animal", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
                "numChoices": 2
            }
        },
        "Equipment": [
            "Leather Armor",
            "Explorer's Pack",
            "Druidic Focus",
            ["Shield", "Simple"],
            ["Scimitar", "Simple Melee"]
        ],
        "Features": {
            1: ["Druidic", "Spellcasting"],
            2: ["Wild Shape", "Druid Circle"],
            3: [],
            4: ["Wild Shape Improvement", "ASI"],
            5: [],
            6: ["Druid Circle Feature"],
            7: [],
            8: ["Wild Shape Improvement", "ASI"],
            9: [],
            10: ["Druid Circle Feature"],
            11: [],
            12: ["ASI"],
            13: [],
            14: ["Druid Circle Feature"],
            15: [],
            16: ["ASI"],
            17: [],
            18: ["Timeless Body", "Beast Spells"],
            19: ["ASI"],
            20: ["Archdruid"]
        }
    },
    "Fighter": {
        "HitDice": "d10",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Heavy", "Shield"],
            "Weapons": ["Simple", "Martial"],
            "Tools": [],
            "Saving Throws": ["STR", "CON"],
            "Skills": {
                "Choices": ["Acrobatics", "Animal", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
                "numChoices": 2
            }
        },
        "Equipment": [
            ["Chain Mail", ["Leather Armor", "Longbow", "Bolt(20)"]],
            [["Martial", "Shield"], ["Martial", "Martial"]],
            [["Light Crossbow", "Bolt(20)"], "Handaxe(2)"]
        ],
        "Features": {
            1: ["Fighting Style (Fighter)", "Second Wind"],
            2: ["Action Surge"],
            3: ["Martial Archetype"],
            4: ["ASI"],
            5: ["Extra Attack"],
            6: ["ASI"],
            7: ["Martial Archetype Feature"],
            8: ["ASI"],
            9: ["Indomitable"],
            10: ["Martial Archetype Feature"],
            11: ["Extra Attack"],
            12: ["ASI"],
            13: ["Indomitable"],
            14: ["ASI"],
            15: ["Martial Archetype Feature"],
            16: ["ASI"],
            17: ["Action Surge", "Indomitable"],
            18: ["Martial Archetype Feature"],
            19: ["ASI"],
            20: ["Extra Attack"]
        }
    },
    "Monk": {
        "HitDice": "d8",
        "Proficiencies": {
            "Armor": [],
            "Weapons": ["Simple", "Shortsword"],
            "Tools": [["Artisan Choice", "Instrument Choice"]],
            "Saving Throws": ["STR", "DEX"],
            "Skills": {
                "Choices": ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
                "numChoices": 2
            }
        },
        "Equipment": [
            "Dart(10)",
            ["Shortsword", "Simple"],
            ["Dungeoneer's Pack", "Explorer's Pack"]
        ],
        "Features": {
            1: ["Unarmored Defense (Monk)", "Martial Arts"],
            2: ["Ki", "Unarmored Movement"],
            3: ["Monastic Tradition", "Deflect Missiles"],
            4: ["ASI", "Slow Fall"],
            5: ["Extra Attack", "Stunning Strike"],
            6: ["Ki-Empowered Strikes", "Monastic Tradition Feature"],
            7: ["Evasion", "Stillness of Mind"],
            8: ["ASI"],
            9: ["Unarmored Movement"],
            10: ["Purity of Body"],
            11: ["Monastic Tradition Feature"],
            12: ["ASI"],
            13: ["Tongue of the Sun and Moon"],
            14: ["Diamond Soul"],
            15: ["Timeless Body"],
            16: ["ASI"],
            17: ["Monastic Tradition Feature"],
            18: ["Empty Body"],
            19: ["ASI"],
            20: ["Perfect Self"]
        }
    },
    "Paladin": {
        "HitDice": "d10",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Heavy", "Shield"],
            "Weapons": ["Simple", "Martial"],
            "Tools": [],
            "Saving Throws": ["WIS", "CHA"],
            "Skills": {
                "Choices": ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
                "numChoices": 2
            }
        },
        "Equipment": [
            "Chain Mail",
            "Holy Symbol",
            [["Martial", "Shield"], ["Martial", "Martial"]],
            ["Javelin(5)", "Simple"],
            ["Priest's Pack", "Explorer's Pack"]
        ],
        "Features": {
            1: ["Divine Sense", "Lay on Hands"],
            2: ["Fighting Style (Paladin)", "Spellcasting", "Divine Smite"],
            3: ["Divine Health", "Sacred Oath"],
            4: ["ASI"],
            5: ["Extra Attack"],
            6: ["Aura of Protection"],
            7: ["Sacred Oath Feature"],
            8: ["ASI"],
            9: [],
            10: ["Aura of Courage"],
            11: ["Improved Divine Smite"],
            12: ["ASI"],
            13: [],
            14: ["Cleansing Touch"],
            15: ["Sacred Oath Feature"],
            16: ["ASI"],
            17: [],
            18: ["Aura of Protection", "Aura of Courage"],
            19: ["ASI"],
            20: ["Sacred Oath Feature"]
        }
    },
    "Ranger": {
        "HitDice": "d10",
        "Proficiencies": {
            "Armor": ["Light", "Medium", "Shield"],
            "Weapons": ["Simple", "Martial"],
            "Tools": [],
            "Saving Throws": ["STR", "DEX"],
            "Skills": {
                "Choices": ["Animal", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
                "numChoices": 3
            }
        },
        "Equipment": [
            "Longbow",
            "Quiver",
            "Arrow(20)",
            ["Scale Mail", "Leather Armor"],
            ["Shortsword(2)", ["Simple", "Simple"]],
            ["Dungeoneer's Pack", "Explorer's Pack"]
        ],
        "Features": {
            1: ["Favored Enemy", "Natural Explorer"],
            2: ["Fighting Style (Ranger)", "Spellcasting"],
            3: ["Primeval Awareness", "Ranger Archetype"],
            4: ["ASI"],
            5: ["Extra Attack"],
            6: ["Favored Enemy", "Natural Explorer"],
            7: ["Ranger Archetype Feature"],
            8: ["ASI", "Land's Stride"],
            9: [],
            10: ["Natural Explorer", "Hide in Plain Sight"],
            11: ["Ranger Archetype Feature"],
            12: ["ASI"],
            13: [],
            14: ["Favored Enemy", "Vanish"],
            15: ["Ranger Archetype Feature"],
            16: ["ASI"],
            17: [],
            18: ["Feral Senses"],
            19: ["ASI"],
            20: ["Foe Slayer"]
        }
    },
    "Rogue": {
        "HitDice": "d10",
        "Proficiencies": {
            "Armor": ["Light"],
            "Weapons": ["Simple", "Hand Crossbow", "Longsword", "Rapier", "Shortsword"],
            "Tools": ["Thieves' Tools"],
            "Saving Throws": ["DEX", "INT"],
            "Skills": {
                "Choices": ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight", "Stealth"],
                "numChoices": 4
            }
        },
        "Equipment": [
            "Leather Armor",
            "Dagger(2)",
            "Thieves' Tools",
            ["Rapier", "Shortsword"],
            [["Shortbow", "Arrow(20)"], "Shortsword"],
            ["Burglar's Pack", "Dungeoneer's Pack", "Explorer's Pack"]
        ],
        "Features": {
            1: ["Expertise (Rogue)", "Sneak Attack", "Thieves' Cant"],
            2: ["Cunning Action"],
            3: ["Roguish Archetype"],
            4: ["ASI"],
            5: ["Uncanny Dodge"],
            6: ["Expertise (Rogue)"],
            7: ["Evasion"],
            8: ["ASI"],
            9: ["Roguish Archetype Feature"],
            10: ["ASI"],
            11: ["Reliable Talent"],
            12: ["ASI"],
            13: ["Roguish Archetype Feature"],
            14: ["Blindsense"],
            15: ["Slippery Mind"],
            16: ["ASI"],
            17: ["Roguish Archetype Feature"],
            18: ["Elusive"],
            19: ["ASI"],
            20: ["Stroke of Luck"]
        }
    },
    "Sorcerer": {
        "HitDice": "d6",
        "Proficiencies": {
            "Armor": [],
            "Weapons": ["Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow"],
            "Tools": [],
            "Saving Throws": ["CON", "CHA"],
            "Skills": {
                "Choices": ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
                "numChoices": 2
            }
        },
        "Equipment": [
            "Dagger(2)",
            [["Light Crossbow", "Bolt(20)"], "Simple"],
            ["Component Pouch", "Arcane Focus"],
            ["Dungeoneer's Pack", "Explorer's Pack"]
        ],
        "Features": {
            1: ["Spellcasting", "Sorcerous Origin"],
            2: ["Font of Magic"],
            3: ["Metamagic"],
            4: ["ASI"],
            5: [],
            6: ["Sorcerous Origin Feature"],
            7: [],
            8: ["ASI"],
            9: [],
            10: ["Metamagic"],
            11: [],
            12: ["ASI"],
            13: [],
            14: ["Sorcerous Origin Feature"],
            15: [],
            16: ["ASI"],
            17: ["Metamagic"],
            18: ["Sorcerous Origin Feature"],
            19: ["ASI"],
            20: ["Sorcerous Restoration"]
        }
    },
    "Warlock": {
        "HitDice": "d8",
        "Proficiencies": {
            "Armor": ["Light"],
            "Weapons": ["Simple"],
            "Tools": [],
            "Saving Throws": ["WIS", "CHA"],
            "Skills": {
                "Choices": ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
                "numChoices": 2
            }
        },
        "Equipment": [
            "Leather Armor",
            "Simple",
            [["Light Crossbow", "Bolt(20)"], "Simple"],
            ["Component Pouch", "Arcane Focus"],
            ["Scholar's Pack", "Dungeoneer's Pack"]
        ],
        "Features": {
            1: ["Otherworldly Patron", "Pact Magic"],
            2: ["Eldritch Invocations"],
            3: ["Pact Boon"],
            4: ["ASI"],
            5: [],
            6: ["Otherworldly Patron Feature"],
            7: [],
            8: ["ASI"],
            9: [],
            10: ["Otherworldly Patron Feature"],
            11: ["Mystic Arcanum"],
            12: ["ASI"],
            13: ["Mystic Arcanum"],
            14: ["Otherworldly Patron Feature"],
            15: ["Mystic Arcanum"],
            16: ["ASI"],
            17: ["Mystic Arcanum"],
            18: [],
            19: ["ASI"],
            20: ["Eldritch Master"]
        }
    },
    "Wizard": {
        "HitDice": "d6",
        "Proficiencies": {
            "Armor": [],
            "Weapons": ["Dagger", "Dart", "Sling", "Quarterstaff", "Light Crossbow"],
            "Tools": [],
            "Saving Throws": ["INT", "WIS"],
            "Skills": {
                "Choices": ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
                "numChoices": 2
            }
        },
        "Equipment": [
            "Spellbook",
            ["Quarterstaff", "Dagger"],
            ["Component Pouch", "Arcane Focus"],
            ["Scholar's Pack", "Explorer's Pack"]
        ],
        "Features": {
            1: ["Spellcasting", "Arcane Recovery"],
            2: ["Arcane Tradition"],
            3: [],
            4: ["ASI"],
            5: [],
            6: ["Arcane Tradition Feature"],
            7: [],
            8: ["ASI"],
            9: [],
            10: ["Arcane Tradition Feature"],
            11: [],
            12: ["ASI"],
            13: [],
            14: ["Arcane Tradition Feature"],
            15: [],
            16: ["ASI"],
            17: [],
            18: ["Spell Mastery"],
            19: ["ASI"],
            20: ["Signature Spells"]
        }
    }
}

export default classes;