// import lodash library
import pkg from "lodash";
const { flatten, isEqual } = pkg;
import {
  sourcebooks,
  backgrounds,
  backgroundTraits,
  races,
  racialTraits,
  classes,
  classFeatures,
} from "../db/seeders/SRD/data.js";

test("races accounted for", () => {
  let sourcebookRaces = [];
  for (let src of Object.keys(sourcebooks)) {
    sourcebookRaces = sourcebookRaces.concat(sourcebooks[src]["Races"]);
  }
  sourcebookRaces = flatten(sourcebookRaces);
  let dataRaces = Object.keys(races);
  expect(isEqual(sourcebookRaces.sort(), dataRaces.sort())).toEqual(true);
});

test("classes accounted for", () => {
  let sourcebookClasses = [];
  for (let src of Object.keys(sourcebooks)) {
    sourcebookClasses = sourcebookClasses.concat(sourcebooks[src]["Classes"]);
  }
  sourcebookClasses = flatten(sourcebookClasses);
  let dataClasses = Object.keys(classes);
  expect(isEqual(sourcebookClasses.sort(), dataClasses.sort())).toEqual(true);
});

test("backgrounds accounted for", () => {
  let sourcebookBackgrounds = [];
  for (let src of Object.keys(sourcebooks)) {
    sourcebookBackgrounds = sourcebookBackgrounds.concat(
      sourcebooks[src]["Backgrounds"]
    );
  }
  sourcebookBackgrounds = flatten(sourcebookBackgrounds);
  let dataBackgrounds = Object.keys(backgrounds);
  expect(isEqual(sourcebookBackgrounds.sort(), dataBackgrounds.sort())).toEqual(
    true
  );
});
