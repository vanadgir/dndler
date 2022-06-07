// import lodash library
import pkg from "lodash";
const { sample } = pkg;
import { miscRollTable, names } from "../data/data.js";

//generates name
const generateName = () => {
  let firstname = sample(names["First"]);
  let lastname = sample(names["Last"]);
  let fullname = "";
  let chanceTitle = Math.random();
  if (chanceTitle <= 0.1) {
    firstname = sample(miscRollTable["Title"]) + " " + firstname;
  }
  let chanceEpithet = Math.random();
  if (chanceEpithet <= 0.1) {
    lastname = lastname + " " + sample(miscRollTable["Epithet"]);
  }
  let chanceNickname = Math.random();
  if (chanceNickname <= 0.1) {
    firstname = firstname + " " + sample(miscRollTable["Nickname"]);
  }
  let chanceNoLastname = Math.random();
  if (chanceNoLastname <= 0.05) {
    fullname = firstname;
  } else {
    fullname = firstname + " " + lastname;
  }
  return fullname;
};

export default generateName;
