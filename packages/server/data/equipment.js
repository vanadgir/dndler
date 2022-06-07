const equipment = {
    "Weapons": {
        "Simple Melee": {
            "Club": {
                "Cost": "1 Sp",
                "Damage Formula": "1D4",
                "Damage Type": "Bludgeoning",
                "Weight": 2.0,
                "Properties": [
                    "Light"
                ]
            },
            "Dagger": {
                "Cost": "2 Gp",
                "Damage Formula": "1D4",
                "Damage Type": "Piercing",
                "Weight": 1.0,
                "Properties": [
                    "Finesse",
                    "Light",
                    "Thrown (20/60)"
                ]
            },
            "Greatclub": {
                "Cost": "2 Sp",
                "Damage Formula": "1D8",
                "Damage Type": "Bludgeoning",
                "Weight": 10.0,
                "Properties": [
                    "Two-Handed"
                ]
            },
            "Handaxe": {
                "Cost": "5 Gp",
                "Damage Formula": "1D6",
                "Damage Type": "Slashing",
                "Weight": 2.0,
                "Properties": [
                    "Light",
                    "Thrown (20/60)"
                ]
            },
            "Javelin": {
                "Cost": "5 Sp",
                "Damage Formula": "1D6",
                "Damage Type": "Piercing",
                "Weight": 2.0,
                "Properties": [
                    "Thrown (30/120)"
                ]
            },
            "Light Hammer": {
                "Cost": "2 Gp",
                "Damage Formula": "1D4",
                "Damage Type": "Bludgeoning",
                "Weight": 2.0,
                "Properties": [
                    "Light",
                    "Thrown (20/60)"
                ]
            },
            "Mace": {
                "Cost": "5 Gp",
                "Damage Formula": "1D6",
                "Damage Type": "Bludgeoning",
                "Weight": 4.0,
                "Properties": [
                    ""
                ]
            },
            "Quarterstaff": {
                "Cost": "2 Sp",
                "Damage Formula": "1D6",
                "Damage Type": "Bludgeoning",
                "Weight": 4.0,
                "Properties": [
                    "Versatile (1D8)"
                ]
            },
            "Sickle": {
                "Cost": "1 Gp",
                "Damage Formula": "1D4",
                "Damage Type": "Slashing",
                "Weight": 2.0,
                "Properties": [
                    "Light"
                ]
            },
            "Spear": {
                "Cost": "1 Gp",
                "Damage Formula": "1D6",
                "Damage Type": "Piercing",
                "Weight": 3.0,
                "Properties": [
                    "Thrown (20/60)",
                    "Versatile (1D8)"
                ]
            }
        },
        "Simple Ranged": {
            "Light Crossbow": {
                "Cost": "25 Gp",
                "Damage Formula": "1D8",
                "Damage Type": "Piercing",
                "Weight": 5.0,
                "Properties": [
                    "Ammunition",
                    "Range (80/320)",
                    "Loading",
                    "Two-Handed"
                ]
            },
            "Dart": {
                "Cost": "5 Cp",
                "Damage Formula": "1D4",
                "Damage Type": "Piercing",
                "Weight": 0.25,
                "Properties": [
                    "Finesse",
                    "Thrown (20/60)"
                ]
            },
            "Shortbow": {
                "Cost": "25 Gp",
                "Damage Formula": "1D6",
                "Damage Type": "Piercing",
                "Weight": 2.0,
                "Properties": [
                    "Ammunition",
                    "Range (80/320)",
                    "Two-Handed"
                ]
            },
            "Sling": {
                "Cost": "1 Sp",
                "Damage Formula": "1D4",
                "Damage Type": "Piercing",
                "Weight": 0.0,
                "Properties": [
                    "Ammunition",
                    "Range (30/120)"
                ]
            }
        },
        "Martial Melee": {
            "Battleaxe": {
                "Cost": "10 Gp",
                "Damage Formula": "1D8",
                "Damage Type": "Slashing",
                "Weight": 4.0,
                "Properties": [
                    "Versatile (1D10)"
                ]
            },
            "Flail": {
                "Cost": "10 Gp",
                "Damage Formula": "1D8",
                "Damage Type": "Bludgeoning",
                "Weight": 2.0,
                "Properties": [
                    ""
                ]
            },
            "Glaive": {
                "Cost": "20 Gp",
                "Damage Formula": "1D10",
                "Damage Type": "Slashing",
                "Weight": 6.0,
                "Properties": [
                    "Heavy",
                    "Reach",
                    "Two-Handed"
                ]
            },
            "Greataxe": {
                "Cost": "30 Gp",
                "Damage Formula": "1D12",
                "Damage Type": "Slashing",
                "Weight": 7.0,
                "Properties": [
                    "Heavy",
                    "Two-Handed"
                ]
            },
            "Greatsword": {
                "Cost": "50 Gp",
                "Damage Formula": "2D6",
                "Damage Type": "Slashing",
                "Weight": 6.0,
                "Properties": [
                    "Heavy",
                    "Two-Handed"
                ]
            },
            "Halberd": {
                "Cost": "20 Gp",
                "Damage Formula": "1D10",
                "Damage Type": "Slashing",
                "Weight": 6.0,
                "Properties": [
                    "Heavy",
                    "Reach",
                    "Two-Handed"
                ]
            },
            "Lance": {
                "Cost": "10 Gp",
                "Damage Formula": "1D12",
                "Damage Type": "Piercing",
                "Weight": 6.0,
                "Properties": [
                    "Reach",
                    "Special"
                ]
            },
            "Longsword": {
                "Cost": "15 Gp",
                "Damage Formula": "1D8",
                "Damage Type": "Slashing",
                "Weight": 3.0,
                "Properties": [
                    "Versatile (1D10)"
                ]
            },
            "Maul": {
                "Cost": "10 Gp",
                "Damage Formula": "2D6",
                "Damage Type": "Bludgeoning",
                "Weight": 10.0,
                "Properties": [
                    "Heavy",
                    "Two-Handed"
                ]
            },
            "Morningstar": {
                "Cost": "15 Gp",
                "Damage Formula": "1D8",
                "Damage Type": "Piercing",
                "Weight": 4.0,
                "Properties": [
                    ""
                ]
            },
            "Pike": {
                "Cost": "5 Gp",
                "Damage Formula": "1D10",
                "Damage Type": "Piercing",
                "Weight": 18.0,
                "Properties": [
                    "Heavy",
                    "Reach",
                    "Two-Handed"
                ]
            },
            "Rapier": {
                "Cost": "25 Gp",
                "Damage Formula": "1D8",
                "Damage Type": "Piercing",
                "Weight": 2.0,
                "Properties": [
                    "Finesse"
                ]
            },
            "Scimitar": {
                "Cost": "25 Gp",
                "Damage Formula": "1D6",
                "Damage Type": "Slashing",
                "Weight": 3.0,
                "Properties": [
                    "Finesse",
                    "Light"
                ]
            },
            "Shortsword": {
                "Cost": "10 Gp",
                "Damage Formula": "1D6",
                "Damage Type": "Piercing",
                "Weight": 2.0,
                "Properties": [
                    "Finesse",
                    "Light"
                ]
            },
            "Trident": {
                "Cost": "5 Gp",
                "Damage Formula": "1D6",
                "Damage Type": "Piercing",
                "Weight": 4.0,
                "Properties": [
                    "Thrown (20/60)",
                    "Versatile (1D8)"
                ]
            },
            "War Pick": {
                "Cost": "5 Gp",
                "Damage Formula": "1D8",
                "Damage Type": "Piercing",
                "Weight": 2.0,
                "Properties": [
                    ""
                ]
            },
            "Warhammer": {
                "Cost": "15 Gp",
                "Damage Formula": "1D8",
                "Damage Type": "Bludgeoning",
                "Weight": 2.0,
                "Properties": [
                    "Versatile (1D10)"
                ]
            },
            "Whip": {
                "Cost": "2 Gp",
                "Damage Formula": "1D4",
                "Damage Type": "Slashing",
                "Weight": 3.0,
                "Properties": [
                    "Finesse",
                    "Reach"
                ]
            }
        },
        "Martial Ranged": {
            "Blowgun": {
                "Cost": "10 Gp",
                "Damage Formula": "1",
                "Damage Type": "Piercing",
                "Weight": 1.0,
                "Properties": [
                    "Ammunition",
                    "Range (25/100)",
                    "Loading"
                ]
            },
            "Hand Crossbow": {
                "Cost": "75 Gp",
                "Damage Formula": "1D6",
                "Damage Type": "Piercing",
                "Weight": 3.0,
                "Properties": [
                    "Ammunition",
                    "Range (30/120)",
                    "Light",
                    "Loading"
                ]
            },
            "Heavy Crossbow": {
                "Cost": "50 Gp",
                "Damage Formula": "1D10",
                "Damage Type": "Piercing",
                "Weight": 18.0,
                "Properties": [
                    "Ammunition",
                    "Range (100/400)",
                    "Heavy",
                    "Loading",
                    "Two-Handed"
                ]
            },
            "Longbow": {
                "Cost": "50 Gp",
                "Damage Formula": "1D8",
                "Damage Type": "Piercing",
                "Weight": 2.0,
                "Properties": [
                    "Ammunition",
                    "Range (150/600)",
                    "Heavy",
                    "Two-Handed"
                ]
            },
            "Net": {
                "Cost": "1 Gp",
                "Damage Formula": "",
                "Damage Type": "",
                "Weight": 3.0,
                "Properties": [
                    "Special",
                    "Thrown (5/15)"
                ]
            }
        }
    },
    "Armor": {
        "Light": {
            "Padded Armor": {
                "ArmorClass": 11,
                "addDEX": true,
                "DEXmax2": false,
                "StrengthReq": 0,
                "StealthDisadvantage": true,
                "Weight": 8,
                "Cost": "5 Gp"
            },
            "Leather Armor": {
                "ArmorClass": 11,
                "addDEX": true,
                "DEXmax2": false,
                "StrengthReq": 0,
                "StealthDisadvantage": false,
                "Weight": 10,
                "Cost": "10 Gp"
            },
            "Studded Leather Armor": {
                "ArmorClass": 12,
                "addDEX": true,
                "DEXmax2": false,
                "StrengthReq": 0,
                "StealthDisadvantage": false,
                "Weight": 13,
                "Cost": "45 Gp"
            }
        },
        "Medium": {
            "Hide": {
                "ArmorClass": 12,
                "addDEX": true,
                "DEXmax2": true,
                "StrengthReq": 0,
                "StealthDisadvantage": false,
                "Weight": 12,
                "Cost": "10 Gp"
            },
            "Chain Shirt": {
                "ArmorClass": 13,
                "addDEX": true,
                "DEXmax2": true,
                "StrengthReq": 0,
                "StealthDisadvantage": false,
                "Weight": 20,
                "Cost": "50 Gp"
            },
            "Scale Mail": {
                "ArmorClass": 14,
                "addDEX": true,
                "DEXmax2": true,
                "StrengthReq": "",
                "StealthDisadvantage": true,
                "Weight": 45,
                "Cost": "50 Gp"
            },
            "Spiked Armor": {
                "ArmorClass": 14,
                "addDEX": true,
                "DEXmax2": true,
                "StrengthReq": 0,
                "StealthDisadvantage": true,
                "Weight": 45,
                "Cost": "75 Gp"
            },
            "Breastplate": {
                "ArmorClass": 14,
                "addDEX": true,
                "DEXmax2": true,
                "StrengthReq": 0,
                "StealthDisadvantage": false,
                "Weight": 20,
                "Cost": "400 Gp"
            },
            "Halfplate": {
                "ArmorClass": 15,
                "addDEX": true,
                "DEXmax2": true,
                "StrengthReq": 0,
                "StealthDisadvantage": true,
                "Weight": 40,
                "Cost": "750 Gp"
            }
        },
        "Heavy": {
            "Ring Mail": {
                "ArmorClass": 14,
                "addDEX": false,
                "DEXmax2": false,
                "StrengthReq": 0,
                "StealthDisadvantage": true,
                "Weight": 40,
                "Cost": "30 Gp"
            },
            "Chain Mail": {
                "ArmorClass": 16,
                "addDEX": false,
                "DEXmax2": false,
                "StrengthReq": 13,
                "StealthDisadvantage": true,
                "Weight": 55,
                "Cost": "75 Gp"
            },
            "Splint": {
                "ArmorClass": 17,
                "addDEX": false,
                "DEXmax2": false,
                "StrengthReq": 15,
                "StealthDisadvantage": true,
                "Weight": 60,
                "Cost": "200 Gp"
            },
            "Plate": {
                "ArmorClass": 18,
                "addDEX": false,
                "DEXmax2": false,
                "StrengthReq": 15,
                "StealthDisadvantage": true,
                "Weight": 65,
                "Cost": "1500 Gp"
            }
        },
        "Shield": {
            "Shield": {
                "ArmorClass": 2,
                "addDEX": false,
                "DEXmax2": false,
                "StrengthReq": 0,
                "StealthDisadvantage": false,
                "Weight": 6,
                "Cost": "10 Gp"
            }
        }
    },
    "Adventurer's Packs": {
        "Burglar's Pack": [
            "Backpack",
            "Ball bearing (1000)",
            "10 ft. String",
            "Bell",
            "Candle (5)",
            "Crowbar",
            "Hammer",
            "Piton (10)",
            "Hooded Lantern",
            "Flask of Oil (2)",
            "Ration (5)",
            "Tinderbox",
            "Waterskin",
            "50 ft. Hempen Rope"
        ],
        "Diplomat's Pack": [
            "Chest",
            "Map/Scroll Case (2)",
            "Set of Fine Clothes",
            "Bottle of Ink",
            "Ink Pen",
            "Lamp",
            "Flasks of Oil (2)",
            "Sheet of Paper (5)",
            "Vial of Perfume",
            "Sealing Wax",
            "Soap"
        ],
        "Dungeoneer's Pack": [
            "Backpack",
            "Crowbar",
            "Hammer",
            "Piton (10)",
            "Torch (10)",
            "Tinderbox",
            "Ration (10)",
            "Waterskin",
            "50 ft. Hempen Rope"
        ],
        "Entertainer's Pack": [
            "Backpack",
            "Bedroll",
            "Costume (2)",
            "Candle (5)",
            "Ration (5)",
            "Waterskin",
            "Disguise Kit"
        ],
        "Explorer's Pack": [
            "Backpack",
            "Bedroll",
            "Mess Kit",
            "Tinderbox",
            "Torch (10)",
            "Rations (10)",
            "Waterskin",
            "50 ft. Hempen Rope"
        ],
        "Priest's Pack": [
            "Backpack",
            "Blanket",
            "Candle (10)",
            "Tinderbox",
            "Alms Box",
            "Block of Incense (2)",
            "Censer",
            "Vestments",
            "Ration (2)",
            "Waterskin"
        ],
        "Scholar's Pack": [
            "Backpack",
            "Book of Lore",
            "Bottle of Ink",
            "Ink Pen",
            "Sheet of Parchment (10)",
            "Little Bag of Sand",
            "Small Knife"
        ]
    }
}

export default equipment;