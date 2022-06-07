const spells = {
    "Cantrip": {
        "Acid Splash": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 Feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Chill Touch": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "120 Feet",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Dancing Lights": {
            "Classes": [

                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 Feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Druidcraft": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 Feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Eldritch Blast": {
            "Classes": [
                "Warlock"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 Feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Fire Bolt": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 Feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Guidance": {
            "Classes": [

                "Cleric",
                "Druid"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Light": {
            "Classes": [

                "Bard",
                "Cleric",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, M"
        },
        "Mage Hand": {
            "Classes": [

                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "30 Feet",
            "Duration": "1 minute",
            "Components": "V, S"
        },
        "Mending": {
            "Classes": [

                "Bard",
                "Cleric",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Message": {
            "Classes": [

                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "1 round",
            "Components": "V, S, M"
        },
        "Minor Illusion": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "1 minute",
            "Components": "S, M"
        },
        "Poison Spray": {
            "Classes": [

                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Prestidigitation": {
            "Classes": [

                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "Up to 1 hour",
            "Components": "V, S"
        },
        "Produce Flame": {
            "Classes": [
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "10 minutes",
            "Components": "V, S"
        },
        "Ray of Frost": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Resistance": {
            "Classes": [

                "Cleric",
                "Druid"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Sacred Flame": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Shillelagh": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Touch",
            "Duration": "1 minute",
            "Components": "V, S, M"
        },
        "Shocking Grasp": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Spare the Dying": {
            "Classes": [

                "Cleric"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Thaumaturgy": {
            "Classes": [
                "Cleric"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Up to 1 minute",
            "Components": "V"
        },
        "True Strike": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 round",
            "Components": "S"
        },
        "Vicious Mockery": {
            "Classes": [
                "Bard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V"
        }
    },
    "1st": {
        "Alarm": {
            "Classes": [

                "Ranger",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action (R)",
            "Range": "30 feet",
            "Duration": "8 Hours",
            "Components": "V, S, M"
        },
        "Animal Friendship": {
            "Classes": [
                "Bard",
                "Druid",
                "Ranger"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Bane": {
            "Classes": [
                "Bard",
                "Cleric"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Bless": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Burning Hands": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (15-foot cone)",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Charm Person": {
            "Classes": [
                "Bard",
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "1 Hour",
            "Components": "V, S"
        },
        "Color Spray": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self (15-foot cone)",
            "Duration": "1 round",
            "Components": "V, S, M"
        },
        "Command": {
            "Classes": [
                "Bard",
                "Cleric",
                "Paladin"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 round",
            "Components": "V"
        },
        "Comprehend Languages": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "Self",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Create or Destroy Water": {
            "Classes": [
                "Cleric",
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Cure Wounds": {
            "Classes": [

                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Detect Evil and Good": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Detect Magic": {
            "Classes": [

                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Detect Poison and Disease": {
            "Classes": [
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Disguise Self": {
            "Classes": [

                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 hour",
            "Components": "V, S"
        },
        "Divine Favor": {
            "Classes": [
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Entangle": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Expeditious Retreat": {
            "Classes": [

                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Faerie Fire": {
            "Classes": [

                "Bard",
                "Druid"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "False Life": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Feather Fall": {
            "Classes": [

                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Reaction",
            "Range": "60 feet",
            "Duration": "1 minute",
            "Components": "V, M"
        },
        "Find Familiar": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Hour (R)",
            "Range": "10 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Floating Disk": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action (R)",
            "Range": "30 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Fog Cloud": {
            "Classes": [
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Goodberry": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Grease": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 minute",
            "Components": "V, S, M"
        },
        "Guiding Bolt": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Healing Word": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V"
        },
        "Hellish Rebuke": {
            "Classes": [
                "Warlock"
            ],
            "School": "Evocation",
            "Casting Time": "1 Reaction",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Heroism": {
            "Classes": [
                "Bard",
                "Paladin"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Hideous Laughter": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Hunter's Mark": {
            "Classes": [
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Bonus Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V"
        },
        "Identify": {
            "Classes": [

                "Bard",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute (R)",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Illusory Script": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "10 days",
            "Components": "S, M"
        },
        "Inflict Wounds": {
            "Classes": [
                "Cleric"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Jump": {
            "Classes": [

                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 minute",
            "Components": "V, S, M"
        },
        "Longstrider": {
            "Classes": [

                "Bard",
                "Druid",
                "Ranger",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Mage Armor": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Magic Missile": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Protection from Evil and Good": {
            "Classes": [
                "Cleric",
                "Druid",
                "Paladin",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Purify Food and Drink": {
            "Classes": [

                "Cleric",
                "Druid",
                "Paladin"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action (R)",
            "Range": "10 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Sanctuary": {
            "Classes": [

                "Cleric"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "30 feet",
            "Duration": "1 minute",
            "Components": "V, S, M"
        },
        "Shield": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Reaction",
            "Range": "Self",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Shield of Faith": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Silent Image": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Sleep": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "1 minute",
            "Components": "V, S, M"
        },
        "Speak with Animals": {
            "Classes": [
                "Bard",
                "Druid",
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "Self",
            "Duration": "10 minutes",
            "Components": "V, S"
        },
        "Thunderwave": {
            "Classes": [
                "Bard",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (15-foot cube)",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Unseen Servant": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action (R)",
            "Range": "60 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        }
    },
    "2nd": {
        "Acid Arrow": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "90 Feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Aid": {
            "Classes": [

                "Bard",
                "Cleric",
                "Paladin",
                "Ranger"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "30 Feet",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Alter Self": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Animal Messenger": {
            "Classes": [
                "Bard",
                "Druid",
                "Ranger"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action (R)",
            "Range": "30 Feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Arcane Lock": {
            "Classes": [

                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Arcanist's Magic Aura": {
            "Classes": [
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "24 Hours",
            "Components": "V, S, M"
        },
        "Augury": {
            "Classes": [
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute (R)",
            "Range": "Self",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Barkskin": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Blindness/Deafness": {
            "Classes": [
                "Bard",
                "Cleric",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "30 Feet",
            "Duration": "1 minute",
            "Components": "V"
        },
        "Blur": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Branding Smite": {
            "Classes": [
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Calm Emotions": {
            "Classes": [
                "Bard",
                "Cleric"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Continual Flame": {
            "Classes": [

                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Darkness": {
            "Classes": [
                "Ranger",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, M"
        },
        "Darkvision": {
            "Classes": [

                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Detect Thoughts": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Enhance Ability": {
            "Classes": [

                "Bard",
                "Cleric",
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Enlarge/Reduce": {
            "Classes": [

                "Bard",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Enthrall": {
            "Classes": [
                "Bard",
                "Warlock"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 minute",
            "Components": "V, S"
        },
        "Find Steed": {
            "Classes": [
                "Paladin"
            ],
            "School": "Conjuration",
            "Casting Time": "10 Minutes",
            "Range": "30 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Find Traps": {
            "Classes": [
                "Cleric",
                "Druid",
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Flame Blade": {
            "Classes": [
                "Druid"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Heat Metal": {
            "Classes": [

                "Bard",
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Invisibility": {
            "Classes": [

                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Lesser Restoration": {
            "Classes": [

                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Levitate": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Magic Mouth": {
            "Classes": [

                "Bard",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Minute (R)",
            "Range": "30 feet",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Magic Weapon": {
            "Classes": [

                "Paladin",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Bonus Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Protection from Poison": {
            "Classes": [

                "Cleric",
                "Druid",
                "Paladin",
                "Ranger"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S"
        },
        "Rope Trick": {
            "Classes": [

                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "See Invisibility": {
            "Classes": [

                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Spider Climb": {
            "Classes": [

                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Web": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Hold Person": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Knock": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V"
        },
        "Locate Animals or Plants": {
            "Classes": [
                "Bard",
                "Druid",
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "Self",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Locate Object": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Mirror Image": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 minute",
            "Components": "V, S"
        },
        "Shatter": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Silence": {
            "Classes": [
                "Bard",
                "Cleric",
                "Ranger"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action (R)",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Suggestion": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 8 hours",
            "Components": "V, M"
        },
        "Zone of Truth": {
            "Classes": [
                "Bard",
                "Cleric",
                "Paladin"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "10 minutes",
            "Components": "V, S"
        },
        "Gentle Repose": {
            "Classes": [
                "Cleric",
                "Paladin",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action (R)",
            "Range": "Touch",
            "Duration": "10 days",
            "Components": "V, S, M"
        },
        "Prayer of Healing": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Evocation",
            "Casting Time": "10 Minutes",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V"
        },
        "Spiritual Weapon": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "60 feet",
            "Duration": "1 minute",
            "Components": "V, S"
        },
        "Warding Bond": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Flame Blade": {
            "Classes": [
                "Druid",
                "Sorcerer"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Flaming Sphere": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Gust of Wind": {
            "Classes": [
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (60-foot line)",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Moonbeam": {
            "Classes": [
                "Druid"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Pass Without Trace": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Spike Growth": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Misty Step": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Bonus Action",
            "Range": "Self",
            "Duration": "Instant",
            "Components": "V"
        },
        "Scorching Ray": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Ray of Enfeeblement": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        }
    },
    "3rd": {
        "Blink": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 minute",
            "Components": "V, S"
        },
        "Conjure Animals": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Dispel Magic": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Fly": {
            "Classes": [

                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 10 minute",
            "Components": "V, S, M"
        },
        "Glyph of Warding": {
            "Classes": [

                "Bard",
                "Cleric",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Hour",
            "Range": "Touch",
            "Duration": "Until dispelled or triggered",
            "Components": "V, S, M"
        },
        "Haste": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Protection from Energy": {
            "Classes": [

                "Cleric",
                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Revivify": {
            "Classes": [

                "Cleric",
                "Druid",
                "Paladin",
                "Ranger"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Water Breathing": {
            "Classes": [

                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action (R)",
            "Range": "30 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Water Walk": {
            "Classes": [

                "Cleric",
                "Druid",
                "Ranger",
                "Sorcerer"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action (R)",
            "Range": "30 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Bestow Curse": {
            "Classes": [
                "Bard",
                "Cleric",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Clairvoyance": {
            "Classes": [
                "Bard",
                "Cleric",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "10 Minutes",
            "Range": "1 mile",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Call Lightning": {
            "Classes": [
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Create Food and Water": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Fear": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot cone)",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Hypnotic Pattern": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "S, M"
        },
        "Major Image": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Mass Healing Word": {
            "Classes": [
                "Bard",
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V"
        },
        "Nondetection": {
            "Classes": [
                "Bard",
                "Ranger",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Plant Growth": {
            "Classes": [
                "Bard",
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action or 8 Hours",
            "Range": "150 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Sending": {
            "Classes": [
                "Bard",
                "Cleric",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Unlimited",
            "Duration": "1 round",
            "Components": "V, S, M"
        },
        "Slow": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Speak with Dead": {
            "Classes": [
                "Bard",
                "Cleric",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "10 minutes",
            "Components": "V, S, M"
        },
        "Speak with Plants": {
            "Classes": [
                "Bard",
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self (30-foot radius)",
            "Duration": "10 minutes",
            "Components": "V, S"
        },
        "Sleet Storm": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Stinking Cloud": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Tongues": {
            "Classes": [
                "Bard",
                "Cleric",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, M"
        },
        "Animate Dead": {
            "Classes": [
                "Cleric",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Minute",
            "Range": "10 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Beacon of Hope": {
            "Classes": [
                "Cleric"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Daylight": {
            "Classes": [
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger",
                "Sorcerer"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 hour",
            "Components": "V, S"
        },
        "Magic Circle": {
            "Classes": [
                "Cleric",
                "Paladin",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Minute",
            "Range": "10 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Meld into Stone": {
            "Classes": [
                "Cleric",
                "Druid",
                "Ranger"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action (R)",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S"
        },
        "Remove Curse": {
            "Classes": [
                "Cleric",
                "Paladin",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Tiny Hut": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 minute (R)",
            "Range": "Self (10-foot-radius hemisphere",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Spirit Guardians": {
            "Classes": [
                "Cleric"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Self (15-foot radius)",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Wind Wall": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Counterspell": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Reaction",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "S"
        },
        "Fireball": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Gaseous Form": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Lightning Bolt": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (100-foot line)",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Vampiric Touch": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Phantom Steed": {
            "Classes": [
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action (R)",
            "Range": "30 feet",
            "Duration": "1 hour",
            "Components": "V, S"
        }
    },
    "4th": {
        "Arcane Eye": {
            "Classes": [

                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Fabricate": {
            "Classes": [

                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "10 Minutes",
            "Range": "120 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Freedom of Movement": {
            "Classes": [

                "Bard",
                "Cleric",
                "Druid",
                "Ranger"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Secret Chest": {
            "Classes": [

                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Faithful Hound": {
            "Classes": [

                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Private Sanctum": {
            "Classes": [

                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Resilient Sphere": {
            "Classes": [

                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Stone Shape": {
            "Classes": [

                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Stoneskin": {
            "Classes": [

                "Druid",
                "Ranger",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Compulsion": {
            "Classes": [
                "Bard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Confusion": {
            "Classes": [
                "Bard",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Dimension Door": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "500 feet",
            "Duration": "Instant",
            "Components": "V"
        },
        "Greater Invisibility": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Hallucinatory Terrain": {
            "Classes": [
                "Bard",
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "10 Minutes",
            "Range": "300 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Locate Creature": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Phantasmal Killer": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Polymorph": {
            "Classes": [
                "Bard",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Banishment": {
            "Classes": [
                "Cleric",
                "Paladin",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minutes",
            "Components": "V, S, M"
        },
        "Control Water": {
            "Classes": [
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "300 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Death Ward": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S"
        },
        "Divination": {
            "Classes": [
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "Self",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Guardian of Faith": {
            "Classes": [
                "Cleric"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "8 hours",
            "Components": "V"
        },
        "Blight": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Conjure Minor Elementals": {
            "Classes": [
                "Druid",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Minute",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Conjure Woodland Beings": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Dominate Beast": {
            "Classes": [
                "Druid",
                "Ranger",
                "Sorcerer"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Fire Shield": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "10 minutes",
            "Components": "V, S, M"
        },
        "Giant Insect": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Ice Storm": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "300 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Wall of Fire": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Black Tentacles": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        }
    },
    "5th": {
        "Animate Objects": {
            "Classes": [

                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Arcane Hand": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Creation": {
            "Classes": [

                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Special",
            "Components": "V, S, M"
        },
        "Greater Restoration": {
            "Classes": [

                "Bard",
                "Cleric",
                "Druid",
                "Ranger"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Wall of Stone": {
            "Classes": [

                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Awaken": {
            "Classes": [
                "Bard",
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "8 Hours",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Dominate Person": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Dream": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Minute",
            "Range": "Special",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Geas": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Minute",
            "Range": "60 feet",
            "Duration": "30 days",
            "Components": "V"
        },
        "Hold Monster": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Legend Lore": {
            "Classes": [
                "Bard",
                "Cleric",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "10 Minutes",
            "Range": "Self",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Mass Cure Wounds": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Mislead": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "S"
        },
        "Modify Memory": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Planar Binding": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Raise Dead": {
            "Classes": [
                "Bard",
                "Cleric",
                "Paladin"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Telepathic Bond": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action (R)",
            "Range": "30 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Scrying": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "10 Minutes",
            "Range": "Self",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Seeming": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "8 hours",
            "Components": "V, S"
        },
        "Teleportation Circle": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "1 round",
            "Components": "V, M"
        },
        "Commune": {
            "Classes": [
                "Cleric"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute (R)",
            "Range": "Self",
            "Duration": "1 minute",
            "Components": "V, S, M"
        },
        "Contagion": {
            "Classes": [
                "Cleric",
                "Druid"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "7 days",
            "Components": "V, S"
        },
        "Dispel Evil and Good": {
            "Classes": [
                "Cleric",
                "Paladin"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Flame Strike": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Hallow": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "24 Hours",
            "Range": "Touch",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Insect Plague": {
            "Classes": [
                "Cleric",
                "Druid",
                "Sorcerer"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "300 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Antilife Shell": {
            "Classes": [
                "Druid"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self (10-foot radius)",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Commune with Nature": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute (R)",
            "Range": "Self",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Cone of Cold": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (60-foot cone)",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Conjure Elemental": {
            "Classes": [
                "Druid",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Reincarnate": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Tree Stride": {
            "Classes": [
                "Druid",
                "Ranger"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Cloudkill": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Telekinesis": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Contact Other Plane": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute (R)",
            "Range": "Self",
            "Duration": "1 minute",
            "Components": "V"
        },
        "Passwall": {
            "Classes": [
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Wall of Force": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        }
    },
    "6th": {
        "Eyebite": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Find the Path": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute",
            "Range": "Self",
            "Duration": "Concentration, up to 1 day",
            "Components": "V, S, M"
        },
        "Guards and Wards": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "10 Minutes",
            "Range": "Touch",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Heroes' Feast": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "10 Minutes",
            "Range": "30 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Mass Suggestion": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "24 hours",
            "Components": "V, M"
        },
        "Irresistible Dance": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V"
        },
        "Programmed Illusion": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "True Seeing": {
            "Classes": [
                "Bard",
                "Cleric",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Blade Barrier": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        },
        "Create Undead": {
            "Classes": [
                "Cleric",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Minute",
            "Range": "10 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Forbiddance": {
            "Classes": [
                "Cleric"
            ],
            "School": "Abjuration",
            "Casting Time": "10 Minutes (R)",
            "Range": "Touch",
            "Duration": "1 day",
            "Components": "V, S, M"
        },
        "Harm": {
            "Classes": [
                "Cleric"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Heal": {
            "Classes": [
                "Cleric",
                "Druid"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Planar Ally": {
            "Classes": [
                "Cleric"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Sunbeam": {
            "Classes": [
                "Cleric",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (60-foot line)",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Word of Recall": {
            "Classes": [
                "Cleric"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "5 feet",
            "Duration": "Instant",
            "Components": "V"
        },
        "Conjure Fey": {
            "Classes": [
                "Druid",
                "Warlock"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Flesh to Stone": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Move Earth": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 2 hours",
            "Components": "V, S, M"
        },
        "Transport via Plants": {
            "Classes": [
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "1 round",
            "Components": "V, S"
        },
        "Wall of Thorns": {
            "Classes": [
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        },
        "Wind Walk": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Minute",
            "Range": "30 feet",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Chain Lightning": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Circle of Death": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Disintegrate": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Globe of Invulnerability": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self (10-foot radius)",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Freezing Sphere": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "300 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Contingency": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "10 Minutes",
            "Range": "Self",
            "Duration": "10 days",
            "Components": "V, S, M"
        },
        "Instant Summons": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Minute (R)",
            "Range": "Touch",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Magic Jar": {
            "Classes": [
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Minute",
            "Range": "Self",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Wall of Ice": {
            "Classes": [
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S, M"
        }
    },
    "7th": {
        "Arcane Sword": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Etherealness": {
            "Classes": [
                "Bard",
                "Cleric",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Up to 8 hours",
            "Components": "V, S"
        },
        "Forcecage": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "100 feet",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Mirage Arcane": {
            "Classes": [
                "Bard",
                "Druid",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "10 Minutes",
            "Range": "Sight",
            "Duration": "10 days",
            "Components": "V, S"
        },
        "Magnificent Mansion": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Minute",
            "Range": "300 feet",
            "Duration": "24 hours",
            "Components": "V, S, M"
        },
        "Prismatic Spray": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "Self (60-foot cone)",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Project Image": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "500 Miles",
            "Duration": "Concentration, up to 1 day",
            "Components": "V, S, M"
        },
        "Regenerate": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "1 hour",
            "Components": "V, S, M"
        },
        "Resurrection": {
            "Classes": [
                "Bard",
                "Cleric"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Hour",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Symbol": {
            "Classes": [
                "Bard",
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "Until dispelled or triggered",
            "Components": "V, S, M"
        },
        "Teleport": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "10 feet",
            "Duration": "Instant",
            "Components": "V"
        },
        "Conjure Celestial": {
            "Classes": [
                "Cleric"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Minute",
            "Range": "90 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Divine Word": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Bonus Action",
            "Range": "30 feet",
            "Duration": "Instant",
            "Components": "V"
        },
        "Fire Storm": {
            "Classes": [
                "Cleric",
                "Druid",
                "Sorcerer"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Plane Shift": {
            "Classes": [
                "Cleric",
                "Druid",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Reverse Gravity": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "100 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Delayed Blast Fireball": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Finger of Death": {
            "Classes": [
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Sequester": {
            "Classes": [
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Simulacrum": {
            "Classes": [
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "12 hours",
            "Range": "Touch",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        }
    },
    "8th": {
        "Antipathy/Sympathy": {
            "Classes": [
                "Bard",
                "Druid",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Hour",
            "Range": "60 feet",
            "Duration": "10 Days",
            "Components": "V, S, M"
        },
        "Dominate Monster": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S"
        },
        "Feeblemind": {
            "Classes": [
                "Bard",
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Glibness": {
            "Classes": [
                "Bard",
                "Warlock"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "1 hour",
            "Components": "V"
        },
        "Mind Blank": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Touch",
            "Duration": "24 hours",
            "Components": "V, S"
        },
        "Power Word Stun": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Antimagic Field": {
            "Classes": [
                "Cleric",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self (10-foot radius sphere)",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Control Weather": {
            "Classes": [
                "Cleric",
                "Druid",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "10 Minutes",
            "Range": "Self (5 mile radius)",
            "Duration": "Concentration, Up to 8 hours",
            "Components": "V, S, M"
        },
        "Earthquake": {
            "Classes": [
                "Cleric",
                "Druid",
                "Sorcerer"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "500 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Holy Aura": {
            "Classes": [
                "Cleric"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Sunburst": {
            "Classes": [
                "Cleric",
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Animal Shapes": {
            "Classes": [
                "Druid"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 24 hours",
            "Components": "V, S"
        },
        "Incendiary Cloud": {
            "Classes": [
                "Druid",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "150 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Demiplane": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "1 Hour",
            "Components": "S"
        },
        "Clone": {
            "Classes": [
                "Wizard"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Hour",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Maze": {
            "Classes": [
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 10 minutes",
            "Components": "V, S"
        }
    },
    "9th": {
        "Foresight": {
            "Classes": [
                "Bard",
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Divination",
            "Casting Time": "1 Minute",
            "Range": "Touch",
            "Duration": "8 hours",
            "Components": "V, S, M"
        },
        "Power Word Kill": {
            "Classes": [
                "Bard",
                "Sorcerer",
                "Warlock",
                "Wizard"
            ],
            "School": "Enchantment",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V"
        },
        "Prismatic Wall": {
            "Classes": [
                "Bard",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "10 minutes",
            "Components": "V, S"
        },
        "True Polymorph": {
            "Classes": [
                "Bard",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "30 feet",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Astral Projection": {
            "Classes": [
                "Cleric",
                "Warlock",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Hour",
            "Range": "10 feet",
            "Duration": "Special",
            "Components": "V, S, M"
        },
        "Gate": {
            "Classes": [
                "Cleric",
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S, M"
        },
        "Mass Heal": {
            "Classes": [
                "Cleric"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "60 feet",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "True Resurrection": {
            "Classes": [
                "Cleric",
                "Druid"
            ],
            "School": "Necromancy",
            "Casting Time": "1 Hour",
            "Range": "Touch",
            "Duration": "Instant",
            "Components": "V, S, M"
        },
        "Shapechange": {
            "Classes": [
                "Druid",
                "Warlock",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Concentration, up to 1 hour",
            "Components": "V, S, M"
        },
        "Meteor Swarm": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Evocation",
            "Casting Time": "1 Action",
            "Range": "1 mile",
            "Duration": "Instant",
            "Components": "V, S"
        },
        "Time Stop": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Transmutation",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Instant",
            "Components": "V"
        },
        "Wish": {
            "Classes": [
                "Sorcerer",
                "Wizard"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Self",
            "Duration": "Instant",
            "Components": "V"
        },
        "Imprisonment": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Abjuration",
            "Casting Time": "1 Minute",
            "Range": "30 feet",
            "Duration": "Until dispelled",
            "Components": "V, S, M"
        },
        "Storm of Vengeance": {
            "Classes": [
                "Druid"
            ],
            "School": "Conjuration",
            "Casting Time": "1 Action",
            "Range": "Sight",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        },
        "Weird": {
            "Classes": [
                "Warlock",
                "Wizard"
            ],
            "School": "Illusion",
            "Casting Time": "1 Action",
            "Range": "120 feet",
            "Duration": "Concentration, up to 1 minute",
            "Components": "V, S"
        }
    }
};

export default spells;