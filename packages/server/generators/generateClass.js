// import lodash library
import pkg from "lodash";
const { sample } = pkg;
import { classes } from "../db/seeders/SRD/data.js";

// generates class
const generateClass = (classArray) => {
  let classChoice = "";
  if (classArray.length > 0) {
    classChoice = sample(
      Object.keys(classes).filter((className) => classArray.includes(className))
    );
  } else {
    classChoice = sample(Object.keys(classes));
  }
  return classChoice;
};

export default generateClass;
