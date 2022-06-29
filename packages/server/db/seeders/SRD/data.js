// import json data files
import sourcebooks from './sourcebooks.js';
import attributes from "./attributes.js";
import names from './names.js';
import backgrounds from './backgrounds.js';
import features from './features.js';
import races from './races.js';
import racialTraits from './racialTraits.js';
import classTraits from './classTraits.js';
import classes from './classes.js'
import equipment from './equipment.js'
import miscRollTable from './miscRollTable.js';
import spells from './spells.js';
import spellLevels from "./spellLevels.js";
import spellSlots from './spellSlots.js';

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
    attributes,
    sourcebooks,
    names,
    backgrounds,
    features,
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