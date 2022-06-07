import React, { useState, useEffect } from "react";

import fetchCharacter from "../../helpers/characterSheet/fetchCharacter.js";
import saveCharacter from "../../helpers/characterSheet/saveCharacter.js";
import loadCharacter from "../../helpers/characterSheet/loadCharacter.js";

import CharacterHeader from "./sections/Header.js";
import CharacterLeftColumn from "./columns/LeftColumn.js";
import CharacterMiddleColumn from "./columns/MidColumn.js";
import CharacterRightColumn from "./columns/RightColumn.js";

import OptionButton from "../EventCallers/OptionButton";
import UploadButton from "../EventCallers/UploadButton";
import SaveIcon from "../../img/save.png";
import LoadIcon from "../../img/load.png";

import { CharacterProvider } from "../../contexts/characterContext.js";

const CharacterSheet = (props) => {
  const [history, setHistory] = useState([]);
  const [characterIndex, setCharacterIndex] = useState(0);

  useEffect(() => {
    beginFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const beginFetch = () => {
    fetchCharacter(props.options, history, setHistory, setCharacterIndex);
  };

  const goBackChar = () => {
    if (characterIndex > 0) {
      setCharacterIndex(characterIndex - 1);
    }
  };

  const goForwardChar = () => {
    if (characterIndex < history.length - 1) {
      setCharacterIndex(characterIndex + 1);
    }
  };

  const loadCharacterClosure = (file) => {
    loadCharacter(file, history, setHistory, setCharacterIndex);
  };

  const customOptionsNotice = props.charOptions ? (
    <>
      <h5 className="optionsNotice">(Your custom options remain in effect)</h5>
      <OptionButton
        label={"clear custom options"}
        onClick={props.clearOptions}
        id={"clearOptions"}
        className={"clearOptions"}
        containerName={"clearButton"}
      />
    </>
  ) : null;

  const determineBackButton =
    characterIndex > 0 && history.length > 1 ? (
      <OptionButton
        label="<<"
        onClick={goBackChar}
        value={""}
        id={"charBack"}
        containerName={"inline-block"}
        className={"charBack"}
      />
    ) : (
      <div></div>
    );

  const determineForwardButton =
    characterIndex + 1 < history.length && history.length > 1 ? (
      <OptionButton
        label=">>"
        onClick={goForwardChar}
        value={""}
        id={"charFrwd"}
        containerName={"inline-block"}
        className={"charFrwd"}
      />
    ) : (
      <div></div>
    );

  const historyButtonSection = (
    <section className="historyButtonSection">
      {determineBackButton}
      <OptionButton
        label={"GIMME ANUDDER MIN!"}
        onClick={beginFetch}
        value={""}
        id={"reroll"}
        containerName={"inline-block grid-center"}
        className={"reroll"}
      />
      {determineForwardButton}
    </section>
  );

  const fileButtonSection = (
    <section className="fileButtonSection">
      <OptionButton
        onClick={() => saveCharacter(history[characterIndex])}
        id={"saveButton"}
        containerName={"inline-block"}
        className={"saveButton"}
        img={SaveIcon}
        imgName={"fileButtons"}
      />
      <UploadButton
        onChange={loadCharacterClosure}
        id={"loadButton"}
        containerName={"inline-block"}
        className={"loadButton"}
        img={LoadIcon}
        imgName={"fileButtons"}
      />
    </section>
  );

  const hasSpells = history[characterIndex] && history[characterIndex].spells && Object.keys(history[characterIndex].spells).length ? true : false;

  const characterSheetBody = history[characterIndex] ? (
    <CharacterProvider value={history[characterIndex]}>
      {customOptionsNotice}
      {historyButtonSection}
      <h5 className="characterCount">
        {characterIndex + 1}/{history.length}
      </h5>
      {fileButtonSection}
      <section className="characterContainer">
        <CharacterHeader />
        <section className="threeColumn">
          <CharacterLeftColumn />
          <CharacterMiddleColumn hasSpells={hasSpells}/>
          <CharacterRightColumn />
        </section>
      </section>
    </CharacterProvider>
  ) : (
    <h2>Loading character...</h2>
  );

  return <>{characterSheetBody}</>;
};

export default CharacterSheet;
