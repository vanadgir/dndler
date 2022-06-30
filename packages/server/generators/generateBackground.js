// import lodash library
import pkg from "lodash";
const { sample } = pkg;
import { backgrounds, names } from "../db/seeders/SRD/data.js";

// generates background
const generateBackground = (backgroundArray) => {
    let backgroundChoice = "";
    if (backgroundArray.length > 0) {
        backgroundChoice = sample(Object.keys(backgrounds).filter((backgroundName) => backgroundArray.includes(backgroundName)));
    } else {
        backgroundChoice = sample(Object.keys(backgrounds));
    };
    let bgObject = {
        Name: backgroundChoice
    };
    Object.keys(backgrounds[backgroundChoice]).forEach(k => bgObject[k] = sample(backgrounds[backgroundChoice][k]));
    bgObject["Gear"] = backgrounds[backgroundChoice]["Gear"];
    bgObject["Features"] = backgrounds[backgroundChoice]["Features"];
    bgObject["Skills"] = backgrounds[backgroundChoice]["Skills"];
    bgObject["Tools"] = backgrounds[backgroundChoice]["Tools"];
    bgObject["Languages"] = backgrounds[backgroundChoice]["Languages"];
    return bgObject;
};

export default generateBackground;
