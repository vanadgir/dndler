// import lodash library
import pkg from "lodash";
const { flatten } = pkg;
import {
  sourcebooks,
  names,
  backgrounds,
  backgroundTraits,
  races,
  racialTraits,
  classes,
  classTraits,
  equipment,
  miscRollTable,
} from "./db/seeders/SRD/data.js";

// remove duplicates from given array
const removeDups = (array) => {
  let uniques = [];
  for (let index in array) {
    if (!uniques.includes(array[index])) {
      uniques.push(array[index]);
    }
  }
  return uniques;
};

// get names of classes, races, backgrounds
const getNames = () => {
  let sourcebookRaces = [];
  let sourcebookClasses = [];
  let sourcebookBackgrounds = [];
  for (let src of Object.keys(sourcebooks)) {
    sourcebookRaces = sourcebookRaces.concat(sourcebooks[src]["Races"]);
    sourcebookClasses = sourcebookClasses.concat(sourcebooks[src]["Classes"]);
    sourcebookBackgrounds = sourcebookBackgrounds.concat(
      sourcebooks[src]["Backgrounds"]
    );
  }
  sourcebookRaces = flatten(sourcebookRaces);
  sourcebookClasses = flatten(sourcebookClasses);
  sourcebookBackgrounds = flatten(sourcebookBackgrounds);
  let raceTraits = [];
  // let classTraits = [];
  let bgTraits = [];
  for (let race of Object.keys(races)) {
    raceTraits = raceTraits.concat(races[race]["Features"]);
  }
  //for (let classChoice of Object.keys(classes)) {
  //  classTraits = classTraits.concat(classes[classChoice]["Features"]);
  //};
  for (let background of Object.keys(backgrounds)) {
    bgTraits = bgTraits.concat(backgrounds[background]["Features"]);
  }
  raceTraits = removeDups(flatten(raceTraits));
  // classTraits = removeDups(flatten(classTraits));
  bgTraits = removeDups(flatten(bgTraits));
  let dataRaces = Object.keys(races);
  let dataClasses = Object.keys(classes);
  let dataBackgrounds = Object.keys(backgrounds);
  let dataRaceTraits = Object.keys(racialTraits);
  // let dataClassTraits = Object.keys();
  let dataBackgroundTraits = Object.keys(backgroundTraits);
  let names = {
    Sourcebooks: Object.keys(sourcebooks),
    "Sourcebook Races": sourcebookRaces,
    "Race Traits": raceTraits,
    "Sourcebook Classes": sourcebookClasses,
    // "Class Traits": classTraits,
    "Sourcebook Backgrounds": sourcebookBackgrounds,
    "Background Traits": bgTraits,
    "Data Races": dataRaces,
    "Data Race Traits": dataRaceTraits,
    "Data Classes": dataClasses,
    // "Data Class Traits": dataClassTraits,
    "Data Backgrounds": dataBackgrounds,
    "Data Background Traits": dataBackgroundTraits,
  };
  return names;
};

export { getNames };
