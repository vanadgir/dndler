// import json data files
import sourcebooks from './sourcebooks.js';
import names from './names.js';
import backgrounds from './backgrounds.js';
import backgroundTraits from './backgroundTraits.js';
import races from './races.js';
import racialTraits from './racialTraits.js';
import classTraits from './classTraits.js';
import classes from './classes.js'
import equipment from './equipment.js'
import miscRollTable from './miscRollTable.js';
import spells from './spells.js';
import spellSlots from './spellSlots.js';

// array of ability score abbreviations
const abilityScores = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

// array of spell levels
const spellLevels = [
    'Cantrip',
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th'
];

// array of subclass names
const subclasses = [
    "Artificer Specialist",
    "Primal Path",
    "Bard College",
    "Divine Domain",
    "Druid Circle",
    "Martial Archetype",
    "Monastic Tradition",
    "Sacred Oath",
    "Ranger Conclave",
    "Roguish Archetype",
    "Sorcerous Origin",
    "Otherworldly Patron",
    "Arcane Tradition"
]

export {
    abilityScores,
    sourcebooks,
    names,
    backgrounds,
    backgroundTraits,
    races,
    racialTraits,
    classTraits,
    classes,
    subclasses,
    equipment,
    miscRollTable,
    spells,
    spellLevels,
    spellSlots
};