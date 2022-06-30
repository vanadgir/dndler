// import lodash library
import pkg from "lodash";
const { sample, sampleSize, flatten } = pkg;
import { classes, races } from "../db/seeders/SRD/data.js";
import { equipmentReplace } from "./generateEquipment.js";

// calculate proficiency bonus based on character level
const calcProfBonus = (charLevel) => {
  let profBonus = 0;
  if (charLevel < 5) {
    profBonus = 2;
  } else if (charLevel < 9) {
    profBonus = 3;
  } else if (charLevel < 13) {
    profBonus = 4;
  } else if (charLevel < 17) {
    profBonus = 5;
  } else if (charLevel <= 20) {
    profBonus = 6;
  }
  return profBonus;
};

// check if two arrays share any element(s)
const sharesElement = (array1, array2) => {
  let shares = false;
  for (let index in array1) {
    if (array2.includes(array1[index])) {
      shares = true;
      break;
    }
  }
  return shares;
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

// choose skill proficiencies based on class and background
const chooseProficientSkills = (classChoice, bgObject, raceChoice) => {
  let proficientSkills = [];
  let bgSkills = bgObject["Skills"];
  for (let index in bgSkills) {
    if (Array.isArray(bgSkills[index])) {
      bgSkills[index] = sample(bgSkills[index]);
    }
  }
  let raceSkills = [];
  if (races[raceChoice]["Proficiencies"]["Skills"]) {
    if (
      races[raceChoice]["Proficiencies"]["Skills"]["Choices"].length ===
      Number(races[raceChoice]["Proficiencies"]["Skills"]["numChoices"])
    ) {
      raceSkills = races[raceChoice]["Proficiencies"]["Skills"]["Choices"];
    } else {
      raceSkills = sampleSize(
        races[raceChoice]["Proficiencies"]["Skills"]["Choices"],
        races[raceChoice]["Proficiencies"]["Skills"]["numChoices"]
      );
      while (sharesElement(bgSkills, raceSkills)) {
        raceSkills = sampleSize(
          races[raceChoice]["Proficiencies"]["Skills"]["Choices"],
          races[raceChoice]["Proficiencies"]["Skills"]["numChoices"]
        );
      }
    }
  }
  raceSkills.length >= 1
    ? (proficientSkills = bgSkills.concat(raceSkills))
    : (proficientSkills = bgSkills);
  let classSkillOptions =
    classes[classChoice]["Proficiencies"]["Skills"]["Choices"];
  let numChoices =
    classes[classChoice]["Proficiencies"]["Skills"]["numChoices"];
  let classSkills = sampleSize(classSkillOptions, numChoices);
  while (sharesElement(proficientSkills, classSkills)) {
    classSkills = sampleSize(classSkillOptions, numChoices);
  }
  proficientSkills = proficientSkills.concat(classSkills);
  proficientSkills = flatten(proficientSkills);
  return proficientSkills;
};

const chooseOtherProficiencies = (classChoice, bgChoice, raceChoice) => {
  let needSwap = [
    "Artisan Choice",
    "Instrument Choice",
    "Language Choice",
    "Exotic Language Choice",
    "Gaming Set Choice",
  ];
  let otherProficiencies = {
    Armor: [],
    Weapons: [],
    Tools: [],
    Languages: [],
  };
  for (let key of Object.keys(otherProficiencies)) {
    switch (key) {
      case "Armor":
      case "Weapons":
        let raceItem = races[raceChoice]["Proficiencies"][key]
          ? races[raceChoice]["Proficiencies"][key]
          : [];
        let classItem = classes[classChoice]["Proficiencies"][key];
        otherProficiencies[key] = removeDups(classItem.concat(raceItem));
        otherProficiencies[key].forEach(function (item, index) {
          if (Array.isArray(otherProficiencies[key][index])) {
            otherProficiencies[key][index] = sample(
              otherProficiencies[key][index]
            );
          }
        });
        otherProficiencies[key].forEach(function (item, index) {
          if (needSwap.includes(item)) {
            otherProficiencies[index] = equipmentReplace(item);
          }
        });
        break;
      case "Tools":
        let raceTools = races[raceChoice]["Proficiencies"][key]
          ? races[raceChoice]["Proficiencies"][key]
          : [];
        let classTools = classes[classChoice]["Proficiencies"][key];
        let bgTools = bgChoice[key];
        let toolChoices = raceTools.concat(classTools).concat(bgTools);
        for (let ind in toolChoices) {
          if (Array.isArray(toolChoices[ind])) {
            toolChoices[ind] = sample(toolChoices[ind]);
          }
          if (needSwap.includes(toolChoices[ind])) {
            let choice = equipmentReplace(toolChoices[ind]);
            while (toolChoices.includes(choice)) {
              choice = equipmentReplace(toolChoices[ind]);
            }
            toolChoices[ind] = choice;
          }
        }
        otherProficiencies[key] = flatten(removeDups(toolChoices));
        break;
      case "Languages":
        let raceLangs = races[raceChoice]["Proficiencies"][key];
        let bgLangs = bgChoice[key];
        otherProficiencies[key] = removeDups(raceLangs.concat(bgLangs));
        otherProficiencies[key].forEach(function (item, index) {
          if (Array.isArray(otherProficiencies[key][index])) {
            let choice = sample(otherProficiencies[key][index]);
            while (otherProficiencies[key].includes(choice)) {
              choice = sample(otherProficiencies[key][index]);
            }
            otherProficiencies[key][index] = sample(
              otherProficiencies[key][index]
            );
          }
        });
        otherProficiencies[key].forEach(function (item, index) {
          if (needSwap.includes(item)) {
            let choice = equipmentReplace(item);
            while (otherProficiencies[key].includes(choice)) {
              choice = equipmentReplace(item);
            }
            otherProficiencies[key][index] = choice;
          }
        });
        break;
    }
  }
  return otherProficiencies;
};

// KEEP HERE
// generate skills object based on proficiencies selected
const generateProficiency = (
  modObject,
  classChoice,
  bgObject,
  raceChoice,
  charLevel
) => {
  let profBonus = calcProfBonus(charLevel);
  let proficientSkills = chooseProficientSkills(
    classChoice,
    bgObject,
    raceChoice
  );
  let otherProficiencies = chooseOtherProficiencies(
    classChoice,
    bgObject,
    raceChoice
  );
  let proficientThrows = classes[classChoice]["Proficiencies"]["Saving Throws"];
  let savingThrows = {
    STR: modObject["STR"],
    DEX: modObject["DEX"],
    CON: modObject["CON"],
    INT: modObject["INT"],
    WIS: modObject["WIS"],
    CHA: modObject["CHA"],
  };
  let skillsObject = {
    Acrobatics: modObject["DEX"],
    Animal: modObject["WIS"],
    Arcana: modObject["INT"],
    Athletics: modObject["STR"],
    Deception: modObject["CHA"],
    History: modObject["INT"],
    Insight: modObject["WIS"],
    Intimidation: modObject["CHA"],
    Investigation: modObject["INT"],
    Medicine: modObject["WIS"],
    Nature: modObject["INT"],
    Perception: modObject["WIS"],
    Performance: modObject["CHA"],
    Persuasion: modObject["CHA"],
    Religion: modObject["INT"],
    Sleight: modObject["DEX"],
    Stealth: modObject["DEX"],
    Survival: modObject["WIS"],
  };
  for (let skill of proficientSkills) {
    skillsObject[skill] = skillsObject[skill] + profBonus;
  }
  for (let save of proficientThrows) {
    savingThrows[save] = savingThrows[save] + profBonus;
  }
  let profObject = {
    "Proficient Skills": proficientSkills,
    "Proficient Throws": proficientThrows,
    "Saving Throws": savingThrows,
    Skills: skillsObject,
    Other: otherProficiencies,
  };
  return profObject;
};

export default generateProficiency;
