const classTraits = {
    // Barbarian
    "Rage": {
        "description": [
            "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.",
            "\n While raging, you gain the following benefits if you aren't wearing heavy armor:",
            "\n • You have advantage on Strength checks and Strength saving throws.",
            "\n • When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.",
            "\n • You have resistance to bludgeoning, piercing, and slashing damage.",
            "\n If you are able to cast spells, you can't cast them or concentrate on them while raging.",
            "\n Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.",
            "\n Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
        ]
    },
    "Unarmored Defense (Barbarian)": {
        "description": "While you are not wearing any armor, your armor class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
    },
    "Danger Sense": {
        "description": "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated."
    },
    "Reckless Attack": {
        "description": "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
    },
    "Primal Path": {
        "pickOne": [
            "Berserker",
            "Totem Warrior"
        ]
    },
    "Path Feature": {
        "description": [""]
    },
    "Fast Movement": {
        "description": "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor."
    },
    "Feral Instinct": {
        "description": [
            "By 7th level, your instincts are so honed that you have advantage on initiative rolls.",
            "\n Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
        ]
    },
    "Brutal Critical": {
        "description": [
            "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.",
            "\n This increases to two additional dice at 13th level and three additional dice at 17th level."
        ]
    },
    "Relentless Rage": {
        "description": [
            "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.",
            "\n Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
        ]
    },
    "Persistent Rage": {
        "description": "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
    },
    "Indomitable Might": {
        "description": "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
    },
    "Primal Champion": {
        "description": "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
    },
    // Bard
    "Bardic Inspiration": {
        "description": ""
    },
    "Jack of All Trades": {
        "description": "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus."
    },
    "Song of Rest": {
        "description": [
            "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.",
            "\n The extra Hit Points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
        ]
    },
    "Bard College": {
        "pickOne": [
            "Lore",
            "Valor"
        ]
    },
    "Bard College Feature": {
        "description": [""]
    },
    "Expertise (Bard)": {
        "description": [
            "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
            "\n At 10th level, you can choose another two skill proficiencies to gain this benefit."
        ]
    },
    "Font of Inspiration": {
        "description": "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest."
    },
    "Countercharm": {
        "description": "At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required)."
    },
    "Magical Secrets": {
        "description": [
            "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
            "\n The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.",
            "\n You learn two additional spells from any classes at 14th level and again at 18th level."
        ]
    },
    "Superior Inspiration": {
        "description": "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
    },
    // Cleric
    "Divine Domain": {
        "pickOne": [
            "Life"
        ],
        "description": [
            "\n \n Each domain has a list of spells-its domain spells that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
            "\n If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
        ]
    },
    "Divine Domain Feature": {
        "description": [""]
    },
    "Channel Divinity": {
        "description": [
            "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.",
            "\n When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.",
            "\n Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.",
            "\n Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.",
            "\n \n Channel Divinity: Turn Undead",
            "\n As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
            "\n A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
        ]
    },
    "Destroy Undead": {
        "description": "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Cleric table above."
    },
    "Divine Intervention": {
        "description": [
            "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.",
            "\n Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.",
            "\n At 20th level, your call for intervention succeeds automatically, no roll required."
        ]
    },
    "Divine Intervention Improvement": {
        "description": [""]
    },
    // Druid
    "Druidic": {
        "description": "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
    },
    "Druid Circle": {
        "pickOne": [
            "Circle of the Land",
            "Circle of the Moon"
        ]
    },
    "Druid Circle Feature": {
        "description": [""]
    },
    "Wild Shape": {
        "description": [
            "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
            "\n Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
            "\n You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
            "\n While you are transformed, the following rules apply:",
            "\n • Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
            "\n • When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form, For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
            "\n • You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as Call Lightning, that you've already cast.",
            "\n • You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
            "\n • You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
        ]
    },
    "Wild Shape Improvement": {
        "description": [""]
    },
    "Timeless Body": {
        "description": "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."
    },
    "Beast Spells": {
        "description": "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components."
    },
    "Archdruid": {
        "description": [
            "At 20th level, you can use your Wild Shape an unlimited number of times.",
            "\n Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape."
        ]
    },
    // Fighter
    "Fighting Style (Fighter)": {
        "pickOne": [
            ["Archery", "\n You gain a +2 bonus to attack rolls you make with ranged weapons."],
            ["Defense", "\n While you are wearing armor, you gain a +1 bonus to AC."],
            ["Dueling", "\n When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."],
            ["Great Weapon Fighting", "\n When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit."],
            ["Protection", "\n When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."]
            ["Two-Weapon Fighting", "\n When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."],
        ]
    },
    "Second Wind": {
        "description": [
            "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.",
            "\n Once you use this feature, you must finish a short or long rest before you can use it again."
        ]
    },
    "Action Surge": {
        "description": [
            "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.",
            "\n Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
        ]
    },
    "Martial Archetype": {
        "pickOne": [
            "Battle Master",
            "Champion",
            "Eldritch Knight"
        ]
    },
    "Martial Archetype Feature": {
        "description": [""]
    },
    "Indomitable": {
        "description": [
            "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.",
            "\n You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
        ]
    },
    // Monk
    "Unarmored Defense (Monk)": {
        "description": "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
    },
    "Martial Arts": {
        "description": [
            "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.",
            "\n You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:",
            "\n • You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.",
            "\n • You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.",
            "\n • When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.",
            "\n Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama)."
        ]
    },
    "Ki": {
        "description": [
            "Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.",
            "\n You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.",
            "\n When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.",
            "\n Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:",
            "\n \n Ki save DC = 8 + your proficiency bonus + your Wisdom modifier",
            "\n • Flurry of Blows. Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.",
            "\n • Patient Defense. You can spend 1 ki point to take the Dodge action as a bonus action on your turn.",
            "\n • Step of the Wind. You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
        ]
    },
    "Unarmored Movement": {
        "description": [
            "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels.",
            "At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
        ]
    },
    "Unarmored Movement Improvement": {
        "description": [""]
    },
    "Monastic Tradition": {
        "pickOne": [
            "Way of Four Elements",
            "Way of the Open Hand",
            "Way of Shadow"
        ]
    },
    "Monastic Tradition Feature": {
        "description": [""]
    },
    "Deflect Missiles": {
        "description": [
            "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.",
            "\n If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with a range of 20/60 using the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack."
        ]
    },
    "Slow Fall": {
        "description": "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
    },
    "Stunning Strike": {
        "description": [
            "Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of next turn."
        ]
    },
    "Ki-Empowered Strikes": {
        "description": "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
    },
    "Evasion": {
        "description": "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
    },
    "Stillness of Mind": {
        "description": "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened."
    },
    "Purity of Body": {
        "description": "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison."
    },
    "Tongue of the Sun and Moon": {
        "description": "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
    },
    "Diamond Soul": {
        "description": [
            "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.",
            "\n Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
        ]
    },
    "Timeless Body": {
        "description": "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water."
    },
    "Empty Body": {
        "description": [
            "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.",
            "\n Additionally, you can spend 8 ki points to cast the Astral Projection spell, without needing material components. When you do so, you can't take any other creatures with you."
        ]
    },
    "Perfect Self": {
        "description": "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
    },
    // Paladin
    "Divine Sense": {
        "description": [
            "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.",
            "You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
        ]
    },
    "Lay on Hands": {
        "description": [
            "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.",
            "As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.",
            "Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.",
            "This feature has no effect on undead and constructs."
        ]
    },
    "Fighting Style (Paladin)": {
        "pickOne": [
            ["Defense", "\n While you are wearing armor, you gain a +1 bonus to AC."],
            ["Dueling", "\n When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."],
            ["Great Weapon Fighting", "\n When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit."],
            ["Protection", "\n When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."],
        ]
    },
    "Divine Smite": {
        "description": "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8."
    },
    "Divine Health": {
        "description": "By 3rd level, the divine magic flowing through you makes you immune to disease."
    },
    "Sacred Oath": {
        "pickOne": [
            "Oath of Devotion"
        ],
        "description": [
            "\n \n Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day.",
            "\n If you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you."
        ]
    },
    "Sacred Oath Feature": {
        "description": [""]
    },
    "Aura of Protection": {
        "description": [
            "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.",
            "\n At 18th level, the range of this aura increases to 30 feet."
        ]
    },
    "Aura of Courage": {
        "description": [
            "Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.",
            "\n At 18th level, the range of this aura increases to 30 feet."
        ]
    },
    "Aura Improvements": {
        "description": [""]
    },
    "Improved Divine Smite": {
        "description": "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage."
    },
    "Cleansing Touch": {
        "description": [
            "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.",
            "\n You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
        ]
    },
    // Ranger
    "Favored Enemy": {
        "description": [
            "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy."
        ]
    },
    "Natural Explorer": {
        "pickOne": [
            "Arctic",
            "Coast",
            "Desert",
            "Forest",
            "Grassland",
            "Mountain",
            "Swamp"
        ],
        "description": [
            "\n You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.",
            "\n While traveling for an hour or more in your favored terrain, you gain the following benefits:",
            "\n • Difficult terrain doesn't slow your group's travel.",
            "\n • Your group can't become lost except by magical means.",
            "\n • Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
            "\n • If you are traveling alone, you can move stealthily at a normal pace.",
            "\n • When you forage, you find twice as much food as you normally would.",
            "\n • While tracking other creatures, you also learn their exact numbers, their sizes, and how long ago they passed through the area.",
            "\n \n You choose additional favored terrain types at 6th and 10th level."
        ]
    },
    "Primeval Awareness": {
        "description": [
            "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within 6 miles if you are in your favored terrain): abberations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number."
        ]
    },
    "Fighting Style (Ranger)": {
        "pickOne": [
            ["Archery", "\n You gain a +2 bonus to attack rolls you make with ranged weapons."],
            ["Defense", "\n While you are wearing armor, you gain a +1 bonus to AC."],
            ["Dueling", "\n When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."],
            ["Two-Weapon Fighting", "\n When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."]
        ]
    },
    "Ranger Archetype": {
        "pickOne": [
            "Hunter",
            "Beast Master"
        ]
    },
    "Ranger Archetype Feature": {
        "description": [""]
    },
    "Land's Stride": {
        "description": [
            "Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
            "\n In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the Entangle spell."
        ]
    },
    "Hide in Plain Sight": {
        "description": [
            "Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occuring materials with which to create your camouflage.",
            "\n Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or reaction, you must camouflage yourself again to gain this benefit."
        ]
    },
    "Vanish": {
        "description": [
            "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail."
        ]
    },
    "Feral Senses": {
        "description": [
            "At 18th level, you gain prenatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it.",
            "\n You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened."
        ]
    },
    "Foe Slayer": {
        "description": [
            "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
        ]
    },
    // Rogue
    "Expertise (Rogue)": {
        "description": [
            "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is double for any ability check you make that uses either of the chosen proficiencies.",
            "\n At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit."
        ]
    },
    "Sneak Attack": {
        "description": [
            "Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.",
            "\n You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.",
            "\n The amount of extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
        ]
    },
    "Thieves' Cant": {
        "description": [
            "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.",
            "\n In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
        ]
    },
    "Cunning Action": {
        "description": [
            "Starting at 2nd level, your quick thinking and agility allows you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
        ]
    },
    "Roguish Archetype": {
        "pickOne": [
            "Thief",
            "Assassin",
            "Arcane Trickster"
        ]
    },
    "Roguish Archetype Feature": {
        "description": [""]
    },
    "Uncanny Dodge": {
        "description": [
            "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
        ]
    },
    "Evasion": {
        "description": [
            "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an Ice Storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to only take half damage, you instead take no damage if you succeed  on the saving throw, and only half damage if you fail."
        ]
    },
    "Reliable Talent": {
        "description": [
            "By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10."
        ]
    },
    "Blindsense": {
        "description": [
            "Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you."
        ]
    },
    "Slippery Mind": {
        "description": [
            "By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws."
        ]
    },
    "Elusive": {
        "description": [
            "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated."
        ]
    },
    "Stroke of Luck": {
        "description": [
            "At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.",
            "\n Once you use this feature, you can't use it again until you finish a short or long rest."
        ]
    },
    // Sorcerer
    "Sorcerous Origin": {
        "pickOne": [
            "Draconic Bloodline",
            "Wild Magic"
        ]
    },
    "Sorcerous Origin Feature": {
        "description": [""]
    },
    "Font of Magic": {
        "description": [
            "At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.",
            "\n \n Sorcery Points",
            "\n You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.",
            "\n \n Flexible Casting",
            "\n You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.",
            "\n \n Creating Spell Slots",
            "\n You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. Any spell slot you create with this feature vanishes when you finish a long rest.",
            "\n \n Converting a Spell Slot to Sorcery Points",
            "\n As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level."
        ]
    },
    "Metamagic": {
        "description": [
            "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th level and 17th level.",
            "\n You can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
        ]
    },
    // Warlock
    "Otherworldly Patron": {
        "pickOne": [
            "The Archfey",
            "The Fiend",
            "The Great Old One"
        ]
    },
    "Otherworldly Patron Feature": {
        "description": [""]
    },
    "Pact Magic": {
        "description": [
            "Your arcane research and the magic bestowed on you by your patreon have given you facility with spells."
        ]
    },
    "Eldritch Invocations": {
        "description": [
            ""
        ]
    },
    "Pact Boon": {
        "pickOne": [
            [
                "Pact of the Chain",
                "\n You learn the Find Familiar spell and can cast it as a ritual. The spell doesn't count against your number of spells known.",
                "\n When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.",
                "\n Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own with its reaction."
            ],
            [
                "Pact of the Blade",
                "\n You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
                "\n Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.",
                "\n You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks."
            ],
            [
                "Pact of the Tome",
                "\n Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list (the three needn't be from the same list). While the book is on your person, you can cast those cantrips at will. They don't count against your number of cantrips known. If they don't appear on the warlock spell list, they are nonetheless warlock spells for you.",
                "\n If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die."
            ]
        ],
        "desription": [
            "At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service."
        ]
    },
    "Mystic Arcanum": {
        "description": [
            "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.",
            "\n You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
            "\n At higher levels, you gain more warlock spells of your choice that can be ccast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
        ]
    },
    "Eldritch Master": {
        "description": [
            "At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again."
        ]
    },
    // Wizard
    "Arcane Recovery": {
        "description": [
            "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.",
            "\n For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell or two 1st-level spell slots."
        ]
    },
    "Arcane Tradition": {
        "pickOne": [
            "Abjuration",
            "Conjuration",
            "Divination",
            "Enchantment",
            "Evocation",
            "Illusion",
            "Necromancy",
            "Transmutation"
        ]
    },
    "Arcane Tradition Feature": {
        "description": [""]
    },
    "Spell Mastery": {
        "description": [
            "At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either at a higher level, you must expend a spell slot as normal.",
            "\n By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels."
        ]
    },
    "Signature Spells": {
        "description": [
            "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.",
            "\n If you want to cast either spell at a higher level, you must expend a spell slot as normal."
        ]
    },
    "Spellcasting": {
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Bard": {
            "spellStat": "CHA",
            "ritual": true
        },
        "Cleric": {
            "spellStat": "WIS",
            "ritual": false
        },
        "Druid": {
            "spellStat": "WIS",
            "ritual": true
        },
        "Paladin": {
            "spellStat": "CHA",
            "ritual": false
        },
        "Ranger": {
            "spellStat": "WIS",
            "ritual": "false"
        }
    },
    "Extra Attack": {
        "description": ""
    },
    "ASI": {
        "pickOne": [
            "+2 one Ability Score",
            "+1 two Ability Scores",
            "Feat Choice"
        ]
    }
}

export default classTraits;