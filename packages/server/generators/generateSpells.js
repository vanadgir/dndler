// import lodash library
import pkg from "lodash";
const { sampleSize } = pkg;
import {
  spells,
  spellLevels,
  spellSlots,
  races,
  racialTraits,
} from "../db/seeders/SRD/data.js";

// zip together ability score names and stats
const zipSlots = (slotsArray) => {
  let zippedArray = slotsArray.reduce((result, slot, index) => {
    result[spellLevels[index]] = slot;
    return result;
  }, {});
  return zippedArray;
};

// return array with duplicates removed
const removeDups = (array) => {
  let uniques = [];
  for (let index in array) {
    if (!uniques.includes(array[index])) {
      uniques.push(array[index]);
    }
  }
  return uniques;
};

// spell progression based on modifier
const modifierSpellProgression = (mod, classChoice, charLevel) => {
  let knownPrepared = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let assigned = 0;
  let assignNow = 0;
  let levelProgress = 1;
  let highestAvailable = 1;
  // hard assign number of cantrips known
  knownPrepared[0] = spellSlots[classChoice][charLevel][0];
  while (levelProgress <= charLevel) {
    // determine highest level spell slot available
    highestAvailable =
      spellSlots[classChoice][levelProgress].filter((val) => val !== 0).length -
      1;
    // calculate number of spells to assign at current level
    assignNow =
      (Math.floor(mod + (1 / 2) * levelProgress) >= 1
        ? Math.floor(mod + (1 / 2) * levelProgress)
        : 1) - assigned;
    // track total spells assigned so far
    assigned = assigned + assignNow;
    // set number of known spells of the highest available level
    knownPrepared[highestAvailable] =
      knownPrepared[highestAvailable] + assignNow;
    levelProgress += 1;
  }
  return knownPrepared;
};

// spell progression based on predetermined array
const determinedProgression = (array, classChoice, charLevel) => {
  let knownPrepared = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let spellsknown = array;
  let assigned = 0;
  let assignNow = 0;
  let levelProgress = 1;
  let highestAvailable = 1;
  // hard assign number of cantrips known
  knownPrepared[0] = spellSlots[classChoice][charLevel][0];
  while (levelProgress <= charLevel) {
    // determine highest level spell slot available
    highestAvailable =
      spellSlots[classChoice][levelProgress].filter((val) => val !== 0).length -
      1;
    // calculate number of spells to assign at current level
    assignNow = spellsknown[levelProgress - 1] - assigned;
    // track total spells assigned so far
    assigned = assigned + assignNow;
    // set number of known spells of the highest available level
    knownPrepared[highestAvailable] =
      knownPrepared[highestAvailable] + assignNow;
    levelProgress += 1;
  }
  return knownPrepared;
};

// unique progression for paladin, ranger
const palrangerProgression = (mod, classChoice, charLevel) => {
  let knownPrepared = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let assigned = 0;
  let assignNow = 0;
  let levelProgress = 1;
  let highestAvailable = 1;
  // hard assign number of cantrips known
  knownPrepared[0] = spellSlots[classChoice][charLevel][0];
  // console.log("Cantrips Known: " +  knownPrepared[0]);
  while (levelProgress <= charLevel) {
    // determine highest level spell slot available
    highestAvailable =
      levelProgress === 1
        ? 1
        : spellSlots[classChoice][levelProgress].filter((val) => val !== 0)
            .length;
    // calculate number of spells to assign at current level
    assignNow =
      (Math.floor(mod + (1 / 2) * levelProgress) >= 1
        ? Math.floor(mod + (1 / 2) * levelProgress)
        : 1) - assigned;
    // track total spells assigned so far
    assigned = assigned + assignNow;
    // set number of known spells of the highest available level
    knownPrepared[highestAvailable] =
      knownPrepared[highestAvailable] + assignNow;
    levelProgress += 1;
  }
  return knownPrepared;
};

// retrieve num spells known based on class and level
const spellsKnown = (modifiers, classChoice, charLevel) => {
  let knownPrepared = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let assigned = 0;
  let assignNow = 0;
  let levelProgress = 1;
  let highestAvailable = 1;
  switch (classChoice) {
    case "Bard":
      knownPrepared = determinedProgression(
        [
          4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 15, 16, 18, 19, 19, 20, 22, 22,
          22,
        ],
        classChoice,
        charLevel
      );
      break;
    case "Cleric":
      knownPrepared = modifierSpellProgression(
        modifiers["WIS"],
        classChoice,
        charLevel
      );
      break;
    case "Druid":
      knownPrepared = modifierSpellProgression(
        modifiers["WIS"],
        classChoice,
        charLevel
      );
      break;
    case "Paladin":
      knownPrepared = palrangerProgression(
        modifiers["CHA"],
        classChoice,
        charLevel
      );
      break;
    case "Ranger":
      knownPrepared = palrangerProgression(
        modifiers["WIS"],
        classChoice,
        charLevel
      );
      break;
    case "Sorcerer":
      knownPrepared = determinedProgression(
        [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15,
          15,
        ],
        classChoice,
        charLevel
      );
      break;
    case "Warlock":
      let warlockSpellsKnown = [
        2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15,
      ];
      let warlockHighestKnown = [
        1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ];
      // hard assign number of cantrips known
      knownPrepared[0] = spellSlots[classChoice][charLevel][0];
      while (levelProgress <= charLevel) {
        // determine highest level spell slot available
        highestAvailable = warlockHighestKnown[levelProgress - 1];
        // calculate number of spells to assign at current level
        assignNow = warlockSpellsKnown[levelProgress - 1] - assigned;
        // track total spells assigned so far
        assigned = assigned + assignNow;
        // set number of known spells of the highest available level
        knownPrepared[highestAvailable] =
          knownPrepared[highestAvailable] + assignNow;
        levelProgress += 1;
      }
      break;
    case "Wizard":
      // hard assign number of cantrips known
      knownPrepared[0] = spellSlots[classChoice][charLevel][0];
      while (levelProgress <= charLevel) {
        // determine highest level spell slot available
        highestAvailable =
          spellSlots[classChoice][levelProgress].filter((val) => val !== 0)
            .length - 1;
        // calculate number of spells to assign at current level
        assignNow = 6 + 2 * (levelProgress - 1) - assigned;
        // track total spells assigned so far
        assigned = assigned + assignNow;
        // set number of known spells of the highest available level
        knownPrepared[highestAvailable] =
          knownPrepared[highestAvailable] + assignNow;
        levelProgress += 1;
      }
      break;
    default:
      break;
  }
  return knownPrepared;
};

// create array of valid spells based on class
const filterSpells = (classChoice) => {
  let validSpells = [[], [], [], [], [], [], [], [], [], []];
  let iter = 0;
  for (let level of Object.keys(spells)) {
    for (let spell of Object.keys(spells[level])) {
      spells[level][spell].classes.includes(classChoice)
        ? (validSpells[iter] = validSpells[iter].concat(spell))
        : "";
    }
    iter += 1;
  }
  return validSpells;
};

// put together spell description
const serializeSpellInfo = (spellLevel, spell) => {
  const thisSpell = spells[spellLevel][spell];
  const serializedSpell = {
    school: thisSpell.school,
    castingTime: thisSpell.castingTime,
    range: thisSpell.range,
    duration: thisSpell.duration,
    components: thisSpell.components,
    description: thisSpell.description,
  };
  return serializedSpell;
};

// generate spell page
const generateSpells = (modifiers, classChoice, charLevel, raceChoice) => {
  let spellcasters = [
    "Bard",
    "Cleric",
    "Druid",
    "Paladin",
    "Ranger",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ];
  let spellsObj = {};
  let validSpells = [];
  let numSpells = [];
  if (spellcasters.includes(classChoice)) {
    validSpells = filterSpells(classChoice);
    numSpells = spellsKnown(modifiers, classChoice, charLevel);
    for (let ind in validSpells) {
      validSpells[ind] = sampleSize(validSpells[ind], numSpells[ind]);
    }
    spellsObj = zipSlots(validSpells);
    // may want to move race checking outside of spellcaster IF - some bonus race spells require Spellcasting feature, some do not
    for (let feature of races[raceChoice]["Features"]) {
      if (Object.keys(racialTraits[feature]).includes("spells")) {
        for (let spellLevel of Object.keys(racialTraits[feature]["spells"])) {
          spellsObj[spellLevel] = removeDups(
            spellsObj[spellLevel].concat(
              racialTraits[feature]["spells"][spellLevel]
            )
          );
        }
      }
    }
  }
  for (let level of Object.keys(spellsObj)) {
    for (let spell of spellsObj[level]) {
      let info = serializeSpellInfo(level, spell);
      let index = spellsObj[level].indexOf(spell);
      spellsObj[level][index] = [spell, info];
    }
  }
  spellcasters.includes(classChoice)
    ? (spellsObj["spellSlots"] = spellSlots[classChoice][charLevel])
    : "";
  return spellsObj;
};

export default generateSpells;
