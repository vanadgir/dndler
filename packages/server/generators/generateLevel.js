import { classes } from "../db/seeders/SRD/data.js";

// generate character level
const generateLevel = (min = 1, max = 20) => {
  let charLevel = 0;
  if (min === max) {
    charLevel = min;
  } else {
    charLevel = Math.floor(Math.random() * max + min);
  }
  return charLevel;
};

// calculate hitpoints based on con mod, class, and char level
const calcHitpoints = (conMod, classChoice, charLevel) => {
  let hitpoints = 0;
  switch (classChoice) {
    case "Artificer":
    case "Bard":
    case "Cleric":
    case "Druid":
    case "Monk":
    case "Rogue":
    case "Warlock":
      hitpoints = 8 + conMod + (5 + conMod) * (charLevel - 1);
      break;
    case "Barbarian":
      hitpoints = 12 + conMod + (8 + conMod) * (charLevel - 1);
      break;
    case "Fighter":
    case "Paladin":
    case "Ranger":
      hitpoints = 10 + conMod + (6 + conMod) * (charLevel - 1);
      break;
    case "Sorcerer":
    case "Wizard":
      hitpoints = 6 + conMod + (4 + conMod) * (charLevel - 1);
      break;
    default:
      break;
  }
  return hitpoints;
};

// calculate armor class based on available gear and proficiencies
const calcArmorClass = (modifiers, classChoice, equipmentList, raceChoice) => {
  let modSTR = modifiers["STR"];
  let modDEX = modifiers["DEX"];
  let modCON = modifiers["CON"];
  let modINT = modifiers["INT"];
  let modWIS = modifiers["WIS"];
  let modCHA = modifiers["CHA"];
  let armorClass = 10 + modDEX;
  let naturalArmor = 0;
  // special cases of Barbarian and Monk
  if (classChoice === "Barbarian") {
    armorClass = 10 + modDEX + modCON;
  } else if (classChoice === "Monk") {
    armorClass = 10 + modDEX + modWIS;
  }
  // normal cases of armor in inventory
  if (equipmentList.includes("Chain Mail")) {
    armorClass = 16;
  } else if (equipmentList.includes("Scale Mail")) {
    if (modDEX >= 2) {
      armorClass = 16;
    } else {
      armorClass = 14 + modDEX;
    }
  } else if (equipmentList.includes("Studded Leather Armor")) {
    armorClass = 12 + modDEX;
  } else if (equipmentList.includes("Leather Armor")) {
    armorClass = 11 + modDEX;
  }
  // special cases of race natural armor
  if (raceChoice === "Lizardfolk") {
    naturalArmor = 13 + modDEX;
  } else if (raceChoice === "Loxodon") {
    naturalArmor = 12 + modCON;
  } else if (raceChoice === "Warforged") {
    armorClass = armorClass + 1;
  }
  if (naturalArmor > armorClass) {
    armorClass = naturalArmor;
  }
  if (equipmentList.includes("Shield")) {
    armorClass = armorClass + 2;
  }
  return armorClass;
};

// calculates hit dice available based on class and level
const calcHitDice = (classChoice, level) => {
  let hitDice = level + classes[classChoice]["HitDice"];
  return hitDice;
};

export { generateLevel, calcHitpoints, calcArmorClass, calcHitDice };
