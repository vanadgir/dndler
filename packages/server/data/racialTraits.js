const racialTraits = {
    "Darkvision": {
        "description": "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
    },
    "Dwarven Resilience": {
        "description": "You have advantage on saving throws against poison, and you have resistance against poison damage."
    },
    "Dwarven Combat Training": {
        "description": "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."
    },
    "Stonecunning": {
        "description": "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
    },
    "Dwarven Toughness": {
        "description": "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
    },
    "Keen Senses": {
        "description": "You have proficiency in the Perception skill."
    },
    "Trance": {
        "description": "Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is \"trance.\" While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep."
    },
    "Fey Ancestry": {
        "description": "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
    },
    "Elf Weapon Training": {
        "description": "You have proficiency with the longsword, shortsword, shortbow, and longbow."
    },
    "Cantrip": {
        "description": "You know one cantrip of your choice from the Wizard spell list. Intelligence is your spellcasting ability for it." //,
        // "spells": {
        //     "Cantrip": ["Wizard Choice"]
        // }
    },
    "Halfling Luck": {
        "description": "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die. You must use the new result, even if it is a 1."
    },
    "Brave": {
        "description": "You have advantage on saving throws against being frightened."
    },
    "Nimble": {
        "description": "You can move through the space of any creature that is of a size larger than yours."
    },
    "Naturally Stealthy": {
        "description": "You can attempt to hide even when you are only obscured by a creature that is at least one size larger than you."
    },
    "Draconic Ancestry": {
        "pickOne": [
            ["Black (Acid)", "Breath Weapon: 5' x 30' line", "DEX Save"].join("\n"),
            ["Blue (Lightning)", "Breath Weapon: 5' x 30' line", "DEX Save"].join("\n"),
            ["Brass (Fire)", "Breath Weapon: 5' x 30' line", "DEX Save"].join("\n"),
            ["Bronze (Lightning)", "Breath Weapon: 5' x 30' line", "DEX Save"].join("\n"),
            ["Copper (Fire)", "Breath Weapon: 5' x 30' line", "DEX Save"].join("\n"),
            ["Gold (Fire)", "Breath Weapon: 15' cone", "DEX Save"].join("\n"),
            ["Green (Poison)", "Breath Weapon: 15' cone", "CON Save"].join("\n"),
            ["Red (Fire)", "Breath Weapon: 15' cone", "DEX Save"].join("\n"),
            ["Silver (Cold)", "Breath Weapon: 15' cone", "CON Save"].join("\n"),
            ["White (Cold)", "Breath Weapon: 15' cone", "CON Save"].join("\n")
        ]
    },
    "Breath Weapon": {
        "description": "You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your Ancestry. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. After using your breath weapon, you cannot use it again until you complete a short or long rest."
    },
    "Draconic Resistance": {
        "description": "You have resistance to the damage type associated with your Ancestry."
    },
    "Gnome Cunning": {
        "description": "You have advantage on all Intelligence, Wisdom, and Charisma saves against magic."
    },
    "Artificer's Lore": {
        "description": "Whenever you make an Intelligence (History) check related to magical, alchemical, or technological items, you can add twice your proficiency bonus instead of any other proficiency bonus that may apply."
    },
    "Tinker": {
        "description": "You have proficiency with artisan tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose Clockwork Toy, Fire Starter, Music Box, or discuss with your game master."
    },
    "Menacing": {
        "description": "You gain proficiency in the Intimidation skill."
    },
    "Relentless Endurance": {
        "description": "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."
    },
    "Savage Attacks": {
        "description": "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
    },
    "Hellish Resistance": {
        "description": "You have resistance to fire damage."
    },
    "Infernal Legacy": {
        "levelReq": {
            "3": "Once you reach 3rd level, you can cast the Hellish Rebuke spell once as a 2nd-level spell.",
            "5": "Once you reach 5th level, you can also cast the Darkness spell once.",
            "description": "You know the Thaumaturgy cantrip. You must finish a long rest to cast these spells again with this trait. Charisma is your spellcasting ability for these spells."
        },
        "spells": {
            "Cantrip": ["Thaumaturgy"]
        }
    }
}

export default racialTraits;