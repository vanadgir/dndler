import generateName from "./generateName.js";
import generateRace from "./generateRace.js";
import generateClass from "./generateClass.js";
import generateStats from "./generateStats.js";
import generateBackground from "./generateBackground.js";
import generateProficiency from "./generateProficiency.js";
import generateFeatures from "./generateFeatures.js";
import { races } from "../data/data.js";
import { generateEquipment } from "./generateEquipment.js";
import {
  generateLevel,
  calcHitpoints,
  calcArmorClass,
  calcHitDice,
} from "./generateLevel.js";
import generateSpells from "./generateSpells.js";

//generates a full character sheet
const generateAll = (options) => {
  let name = generateName();
  let level = generateLevel(
    options["Levels"] ? options["Levels"][0] : 1,
    options["Levels"] ? options["Levels"][1] : 20
  );
  let race = generateRace(options["Races"] ? options["Races"] : []);
  let classChoice = generateClass(options["Classes"] ? options["Classes"] : []);
  let background = generateBackground(
    options["Backgrounds"] ? options["Backgrounds"] : []
  );
  let stats = generateStats(
    race,
    classChoice,
    options["Other"]
      ? options["Other"].includes("weighted")
        ? true
        : false
      : false
  );
  let features = generateFeatures(classChoice, background, race, level);
  let hitdice = calcHitDice(classChoice, level);
  let equipment = generateEquipment(classChoice, background);
  let armorclass = calcArmorClass(
    stats["Total Modifiers"],
    classChoice,
    equipment,
    race
  );
  let profObject = generateProficiency(
    stats["Total Modifiers"],
    classChoice,
    background,
    race,
    level
  );
  let spells = generateSpells(
    stats["Total Modifiers"],
    classChoice,
    level,
    race
  );

  const characterJSON = {
    race: race,
    name: name,
    class: classChoice,
    level: level,
    hitdice: hitdice,
    speed: races[race]["Speed"],
    hitpoints: calcHitpoints(
      stats["Total Modifiers"]["CON"],
      classChoice,
      level
    ),
    armorclass: armorclass,
    background: background,
    stats: stats,
    features: features,
    proficiency: profObject,
    equipment: equipment,
    spells: spells,
    weapons: {},
    sources: {},
  };
  return characterJSON;
};

export {
  generateName,
  generateRace,
  generateClass,
  generateStats,
  generateBackground,
  generateProficiency,
  generateFeatures,
  generateEquipment,
  generateLevel,
  calcHitpoints,
  calcArmorClass,
  calcHitDice,
  generateAll,
};
