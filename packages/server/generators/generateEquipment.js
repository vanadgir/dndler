// import lodash library
import pkg from "lodash";
const { sample, flatten, flattenDeep } = pkg;
import { classes, equipment, miscRollTable } from "../data/data.js";

// replace equipment keywords with actual choices
const equipmentReplace = (item) => {
    let choice = '';
    let options = '';
    switch (item) {
        case 'Simple':
            options = Object.keys(equipment["Weapons"]["Simple Melee"]).concat(Object.keys(equipment["Weapons"]["Simple Ranged"]));
            choice = sample(options);
            break;
        case 'Simple Melee':
            options = Object.keys(equipment["Weapons"]["Simple Melee"]);
            choice = sample(options);
            break;
        case 'Simple Ranged':
            options = Object.keys(equipment["Weapons"]["Simple Ranged"]);
            choice = sample(options);
            break;
        case 'Martial':
            options = Object.keys(equipment["Weapons"]['Martial Melee']).concat(Object.keys(equipment["Weapons"]['Martial Ranged']));
            choice = sample(options);
            break;
        case 'Martial Melee':
            options = Object.keys(equipment["Weapons"]["Martial Melee"]);
            choice = sample(options);
            break;
        case 'Martial Ranged':
            options = Object.keys(equipment["Weapons"]["Martial Ranged"]);
            choice = sample(options);
            break;
        case 'Artisan Choice':
            options = miscRollTable["Artisan's Tools"];
            choice = sample(options);
            break;
        case 'Instrument Choice':
            options = miscRollTable["Musical Instruments"];
            choice = sample(options);
            break;
        case 'Gaming Set Choice':
            options = miscRollTable["Gaming Sets"];
            choice = sample(options);
            break;
        case 'Language Choice':
            options = miscRollTable["Languages"];
            choice = sample(options);
            break;
        default:
            break;
    }
    return choice;
};

// generate equipment list based on class and background
const generateEquipment = (classChoice, bgObject) => {
  let needSwap = [
    "Simple",
    "Simple Melee",
    "Simple Ranged",
    "Martial",
    "Martial Melee",
    "Martial Ranged",
    "Artisan Choice",
    "Instrument Choice",
    "Trinket Choice",
  ];
  let equipment = [];
  equipment.push(classes[classChoice]["Equipment"]);
  equipment.push(bgObject["Gear"]);
  equipment = flatten(equipment);
  for (let item in equipment) {
    if (Array.isArray(equipment[item])) {
      equipment[item] = sample(equipment[item]);
    }
  }
  equipment = flattenDeep(equipment);
  equipment.forEach(function (item, index) {
    if (needSwap.includes(item)) {
      equipment[index] = equipmentReplace(item);
    }
  });
  return equipment;
};

export { generateEquipment, equipmentReplace };
