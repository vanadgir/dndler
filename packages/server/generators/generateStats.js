// import lodash library
import pkg from "lodash";
const { sum, zipWith, add, shuffle } = pkg;
import { abilityScores, races } from "../data/data.js";

// function to calculate mod based on total score
const calcModFromScore = (abilityScore) => {
  let abilityMod = Math.floor((abilityScore - 10) / 2);
  return abilityMod;
};

// simulated dicerolls for base stats
const roll4DropLowest = () => {
  let dicerolls = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
  ];
  dicerolls.sort().reverse();
  return sum(dicerolls.slice(0, 3));
};

// zip together ability score names and stats
const zipStats = (statArray) => {
  let zippedArray = statArray.reduce((result, stat, index) => {
    result[abilityScores[index]] = stat;
    return result;
  }, {});
  return zippedArray;
};

// stat generator helper function
const prioritizeStats = (sortedStats, priorityStats) => {
  let baseStats = [0, 0, 0, 0, 0, 0];
  let remainingStats = [0, 1, 2, 3, 4, 5];
  priorityStats.forEach((stat) => (baseStats[stat] = sortedStats.shift()));
  remainingStats = remainingStats.filter((x) => !priorityStats.includes(x));
  sortedStats = shuffle(sortedStats);
  remainingStats.forEach((stat) => (baseStats[stat] = sortedStats.shift()));
  return baseStats;
};

// generate stats, weighted or unweighted based on bool
const generateStats = (raceChoice, classChoice, isWeighted = false) => {
  let baseStats = [];
  if (isWeighted === true) {
    let sortedStats = [
      roll4DropLowest(),
      roll4DropLowest(),
      roll4DropLowest(),
      roll4DropLowest(),
      roll4DropLowest(),
      roll4DropLowest(),
    ];
    sortedStats
      .sort(function (a, b) {
        return a - b;
      })
      .reverse();
    switch (classChoice) {
      case "Artificer":
        baseStats = prioritizeStats(sortedStats, [3, 1]);
        break;
      case "Barbarian":
        baseStats = prioritizeStats(sortedStats, [0, 2, 1]);
        break;
      case "Bard":
        baseStats = prioritizeStats(sortedStats, [5, 1]);
        break;
      case "Cleric":
        baseStats = prioritizeStats(sortedStats, [4, 2]);
        break;
      case "Druid":
        baseStats = prioritizeStats(sortedStats, [4, 2]);
        break;
      case "Fighter":
        baseStats = prioritizeStats(sortedStats, [0, 1, 2]);
        break;
      case "Monk":
        baseStats = prioritizeStats(sortedStats, [1, 4, 2]);
        break;
      case "Paladin":
        baseStats = prioritizeStats(sortedStats, [5, 0, 3]);
        break;
      case "Ranger":
        baseStats = prioritizeStats(sortedStats, [1, 4]);
        break;
      case "Rogue":
        baseStats = prioritizeStats(sortedStats, [1]);
        break;
      case "Sorcerer":
        baseStats = prioritizeStats(sortedStats, [5, 2]);
        break;
      case "Warlock":
        baseStats = prioritizeStats(sortedStats, [5, 1]);
        break;
      case "Wizard":
        baseStats = prioritizeStats(sortedStats, [3]);
        break;
      default:
        break;
    }
  } else {
    baseStats = [
      roll4DropLowest(),
      roll4DropLowest(),
      roll4DropLowest(),
      roll4DropLowest(),
      roll4DropLowest(),
      roll4DropLowest(),
    ];
  }
  let totalStats = zipWith(baseStats, races[raceChoice]["Bonuses"], add);
  let totalModifiers = totalStats.map((i) => calcModFromScore(i));
  let statsObject = {
    "Base Stats": zipStats(baseStats),
    "Total Stats": zipStats(totalStats),
    "Total Modifiers": zipStats(totalModifiers),
  };
  return statsObject;
};

export default generateStats;
