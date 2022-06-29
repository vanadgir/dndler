const equipment = {
    "Weapon": {
        "Simple Melee": {
            "Club": {
                "value": "1 Sp",
                "damage": "1D4",
                "damageType": "Bludgeoning",
                "weight": 2.0,
                "properties": [
                    "Light"
                ]
            },
            "Dagger": {
                "value": "2 Gp",
                "damage": "1D4",
                "damageType": "Piercing",
                "weight": 1.0,
                "properties": [
                    "Finesse",
                    "Light",
                    "Thrown (20/60)"
                ]
            },
            "Greatclub": {
                "value": "2 Sp",
                "damage": "1D8",
                "damageType": "Bludgeoning",
                "weight": 10.0,
                "properties": [
                    "Two-Handed"
                ]
            },
            "Handaxe": {
                "value": "5 Gp",
                "damage": "1D6",
                "damageType": "Slashing",
                "weight": 2.0,
                "properties": [
                    "Light",
                    "Thrown (20/60)"
                ]
            },
            "Javelin": {
                "value": "5 Sp",
                "damage": "1D6",
                "damageType": "Piercing",
                "weight": 2.0,
                "properties": [
                    "Thrown (30/120)"
                ]
            },
            "Light Hammer": {
                "value": "2 Gp",
                "damage": "1D4",
                "damageType": "Bludgeoning",
                "weight": 2.0,
                "properties": [
                    "Light",
                    "Thrown (20/60)"
                ]
            },
            "Mace": {
                "value": "5 Gp",
                "damage": "1D6",
                "damageType": "Bludgeoning",
                "weight": 4.0,
                "properties": [
                    ""
                ]
            },
            "Quarterstaff": {
                "value": "2 Sp",
                "damage": "1D6",
                "damageType": "Bludgeoning",
                "weight": 4.0,
                "properties": [
                    "Versatile (1D8)"
                ]
            },
            "Sickle": {
                "value": "1 Gp",
                "damage": "1D4",
                "damageType": "Slashing",
                "weight": 2.0,
                "properties": [
                    "Light"
                ]
            },
            "Spear": {
                "value": "1 Gp",
                "damage": "1D6",
                "damageType": "Piercing",
                "weight": 3.0,
                "properties": [
                    "Thrown (20/60)",
                    "Versatile (1D8)"
                ]
            }
        },
        "Simple Ranged": {
            "Light Crossbow": {
                "value": "25 Gp",
                "damage": "1D8",
                "damageType": "Piercing",
                "weight": 5.0,
                "properties": [
                    "Ammunition",
                    "Range (80/320)",
                    "Loading",
                    "Two-Handed"
                ]
            },
            "Dart": {
                "value": "5 Cp",
                "damage": "1D4",
                "damageType": "Piercing",
                "weight": 0.25,
                "properties": [
                    "Finesse",
                    "Thrown (20/60)"
                ]
            },
            "Shortbow": {
                "value": "25 Gp",
                "damage": "1D6",
                "damageType": "Piercing",
                "weight": 2.0,
                "properties": [
                    "Ammunition",
                    "Range (80/320)",
                    "Two-Handed"
                ]
            },
            "Sling": {
                "value": "1 Sp",
                "damage": "1D4",
                "damageType": "Piercing",
                "weight": 0.0,
                "properties": [
                    "Ammunition",
                    "Range (30/120)"
                ]
            }
        },
        "Martial Melee": {
            "Battleaxe": {
                "value": "10 Gp",
                "damage": "1D8",
                "damageType": "Slashing",
                "weight": 4.0,
                "properties": [
                    "Versatile (1D10)"
                ]
            },
            "Flail": {
                "value": "10 Gp",
                "damage": "1D8",
                "damageType": "Bludgeoning",
                "weight": 2.0,
                "properties": [
                    ""
                ]
            },
            "Glaive": {
                "value": "20 Gp",
                "damage": "1D10",
                "damageType": "Slashing",
                "weight": 6.0,
                "properties": [
                    "Heavy",
                    "Reach",
                    "Two-Handed"
                ]
            },
            "Greataxe": {
                "value": "30 Gp",
                "damage": "1D12",
                "damageType": "Slashing",
                "weight": 7.0,
                "properties": [
                    "Heavy",
                    "Two-Handed"
                ]
            },
            "Greatsword": {
                "value": "50 Gp",
                "damage": "2D6",
                "damageType": "Slashing",
                "weight": 6.0,
                "properties": [
                    "Heavy",
                    "Two-Handed"
                ]
            },
            "Halberd": {
                "value": "20 Gp",
                "damage": "1D10",
                "damageType": "Slashing",
                "weight": 6.0,
                "properties": [
                    "Heavy",
                    "Reach",
                    "Two-Handed"
                ]
            },
            "Lance": {
                "value": "10 Gp",
                "damage": "1D12",
                "damageType": "Piercing",
                "weight": 6.0,
                "properties": [
                    "Reach",
                    "Special"
                ]
            },
            "Longsword": {
                "value": "15 Gp",
                "damage": "1D8",
                "damageType": "Slashing",
                "weight": 3.0,
                "properties": [
                    "Versatile (1D10)"
                ]
            },
            "Maul": {
                "value": "10 Gp",
                "damage": "2D6",
                "damageType": "Bludgeoning",
                "weight": 10.0,
                "properties": [
                    "Heavy",
                    "Two-Handed"
                ]
            },
            "Morningstar": {
                "value": "15 Gp",
                "damage": "1D8",
                "damageType": "Piercing",
                "weight": 4.0,
                "properties": [
                    ""
                ]
            },
            "Pike": {
                "value": "5 Gp",
                "damage": "1D10",
                "damageType": "Piercing",
                "weight": 18.0,
                "properties": [
                    "Heavy",
                    "Reach",
                    "Two-Handed"
                ]
            },
            "Rapier": {
                "value": "25 Gp",
                "damage": "1D8",
                "damageType": "Piercing",
                "weight": 2.0,
                "properties": [
                    "Finesse"
                ]
            },
            "Scimitar": {
                "value": "25 Gp",
                "damage": "1D6",
                "damageType": "Slashing",
                "weight": 3.0,
                "properties": [
                    "Finesse",
                    "Light"
                ]
            },
            "Shortsword": {
                "value": "10 Gp",
                "damage": "1D6",
                "damageType": "Piercing",
                "weight": 2.0,
                "properties": [
                    "Finesse",
                    "Light"
                ]
            },
            "Trident": {
                "value": "5 Gp",
                "damage": "1D6",
                "damageType": "Piercing",
                "weight": 4.0,
                "properties": [
                    "Thrown (20/60)",
                    "Versatile (1D8)"
                ]
            },
            "War Pick": {
                "value": "5 Gp",
                "damage": "1D8",
                "damageType": "Piercing",
                "weight": 2.0,
                "properties": [
                    ""
                ]
            },
            "Warhammer": {
                "value": "15 Gp",
                "damage": "1D8",
                "damageType": "Bludgeoning",
                "weight": 2.0,
                "properties": [
                    "Versatile (1D10)"
                ]
            },
            "Whip": {
                "value": "2 Gp",
                "damage": "1D4",
                "damageType": "Slashing",
                "weight": 3.0,
                "properties": [
                    "Finesse",
                    "Reach"
                ]
            }
        },
        "Martial Ranged": {
            "Blowgun": {
                "value": "10 Gp",
                "damage": "1",
                "damageType": "Piercing",
                "weight": 1.0,
                "properties": [
                    "Ammunition",
                    "Range (25/100)",
                    "Loading"
                ]
            },
            "Hand Crossbow": {
                "value": "75 Gp",
                "damage": "1D6",
                "damageType": "Piercing",
                "weight": 3.0,
                "properties": [
                    "Ammunition",
                    "Range (30/120)",
                    "Light",
                    "Loading"
                ]
            },
            "Heavy Crossbow": {
                "value": "50 Gp",
                "damage": "1D10",
                "damageType": "Piercing",
                "weight": 18.0,
                "properties": [
                    "Ammunition",
                    "Range (100/400)",
                    "Heavy",
                    "Loading",
                    "Two-Handed"
                ]
            },
            "Longbow": {
                "value": "50 Gp",
                "damage": "1D8",
                "damageType": "Piercing",
                "weight": 2.0,
                "properties": [
                    "Ammunition",
                    "Range (150/600)",
                    "Heavy",
                    "Two-Handed"
                ]
            },
            "Net": {
                "value": "1 Gp",
                "damage": "",
                "damageType": "",
                "weight": 3.0,
                "properties": [
                    "Special",
                    "Thrown (5/15)"
                ]
            }
        }
    },
    "Armor": {
        "Light": {
            "Padded Armor": {
                "armorClass": 11,
                "addDEX": true,
                "DEXmax2": false,
                "strengthReq": 0,
                "stealthDisadvantage": true,
                "weight": 8,
                "value": "5 Gp"
            },
            "Leather Armor": {
                "armorClass": 11,
                "addDEX": true,
                "DEXmax2": false,
                "strengthReq": 0,
                "stealthDisadvantage": false,
                "weight": 10,
                "value": "10 Gp"
            },
            "Studded Leather Armor": {
                "armorClass": 12,
                "addDEX": true,
                "DEXmax2": false,
                "strengthReq": 0,
                "stealthDisadvantage": false,
                "weight": 13,
                "value": "45 Gp"
            }
        },
        "Medium": {
            "Hide": {
                "armorClass": 12,
                "addDEX": true,
                "DEXmax2": true,
                "strengthReq": 0,
                "stealthDisadvantage": false,
                "weight": 12,
                "value": "10 Gp"
            },
            "Chain Shirt": {
                "armorClass": 13,
                "addDEX": true,
                "DEXmax2": true,
                "strengthReq": 0,
                "stealthDisadvantage": false,
                "weight": 20,
                "value": "50 Gp"
            },
            "Scale Mail": {
                "armorClass": 14,
                "addDEX": true,
                "DEXmax2": true,
                "strengthReq": 0,
                "stealthDisadvantage": true,
                "weight": 45,
                "value": "50 Gp"
            },
            "Spiked Armor": {
                "armorClass": 14,
                "addDEX": true,
                "DEXmax2": true,
                "strengthReq": 0,
                "stealthDisadvantage": true,
                "weight": 45,
                "value": "75 Gp"
            },
            "Breastplate": {
                "armorClass": 14,
                "addDEX": true,
                "DEXmax2": true,
                "strengthReq": 0,
                "stealthDisadvantage": false,
                "weight": 20,
                "value": "400 Gp"
            },
            "Halfplate": {
                "armorClass": 15,
                "addDEX": true,
                "DEXmax2": true,
                "strengthReq": 0,
                "stealthDisadvantage": true,
                "weight": 40,
                "value": "750 Gp"
            }
        },
        "Heavy": {
            "Ring Mail": {
                "armorClass": 14,
                "addDEX": false,
                "DEXmax2": false,
                "strengthReq": 0,
                "stealthDisadvantage": true,
                "weight": 40,
                "value": "30 Gp"
            },
            "Chain Mail": {
                "armorClass": 16,
                "addDEX": false,
                "DEXmax2": false,
                "strengthReq": 13,
                "stealthDisadvantage": true,
                "weight": 55,
                "value": "75 Gp"
            },
            "Splint": {
                "armorClass": 17,
                "addDEX": false,
                "DEXmax2": false,
                "strengthReq": 15,
                "stealthDisadvantage": true,
                "weight": 60,
                "value": "200 Gp"
            },
            "Plate": {
                "armorClass": 18,
                "addDEX": false,
                "DEXmax2": false,
                "strengthReq": 15,
                "stealthDisadvantage": true,
                "weight": 65,
                "value": "1500 Gp"
            }
        },
        "Shield": {
            "Shield": {
                "armorClass": 2,
                "addDEX": false,
                "DEXmax2": false,
                "strengthReq": 0,
                "stealthDisadvantage": false,
                "weight": 6,
                "value": "10 Gp"
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
            "valueume (2)",
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