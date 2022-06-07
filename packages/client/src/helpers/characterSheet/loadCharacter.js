import validateCharacterUpload from "./validateCharacterUpload.js";

const checkDuplicateCharacter = (character, history) => {
  console.log(history);
  let returnObj = {
    index: 0,
    duplicate: false,
  };
  for (returnObj.index; returnObj.index < history.length; ++returnObj.index) {
    if (JSON.stringify(history[returnObj.index]) === JSON.stringify(character)) {
      returnObj.duplicate = true;
      break;
    }
  }
  return returnObj;
};

const loadCharacter = (file, historyState, historyCallback, indexCallback) => {
  file.text().then((text) => {
    const parsed_json = JSON.parse(text);
    if (validateCharacterUpload(parsed_json)) {
      let dupeEval = checkDuplicateCharacter(parsed_json, historyState);
      if (!dupeEval.duplicate) {
        historyCallback([...historyState, parsed_json]);
        indexCallback(historyState.length);
      } else {
        alert("This character already exists!");
        indexCallback(dupeEval.index);
      }
    }
  });
};

export default loadCharacter;
