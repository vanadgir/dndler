// import lodash library
import pkg from "lodash";
const { sample } = pkg;
import { races } from "../data/data.js";

// generates race
const generateRace = (raceArray) => {
  let raceChoice = "";
  if (raceArray.length > 0) {
    raceChoice = sample(
      Object.keys(races).filter((raceName) => raceArray.includes(raceName))
    );
  } else {
    raceChoice = sample(Object.keys(races));
  }
  return raceChoice;
};

export default generateRace;
