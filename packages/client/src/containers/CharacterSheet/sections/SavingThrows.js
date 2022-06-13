import React, { useContext } from "react";
import characterContext from "../../../contexts/characterContext";
import SaveThrow from "../entries/SaveEntry";
import Collapsible from "../../EventCallers/Collapsible";
import attributes from "../../../constants/Attributes";

const CharacterSavingThrows = () => {
  const proficiencies = useContext(characterContext).proficiency;
  const savingThrows = proficiencies["Saving Throws"];
  const proficientThrows = proficiencies["Proficient Throws"];

  console.log(proficientThrows);
  const saveMap = attributes.map((attrib) => {
    const shortKey = attrib.substring(0, 3);
    return (
      <SaveThrow
        key={shortKey}
        title={shortKey}
        value={savingThrows[shortKey]}
        prof={proficientThrows.includes(shortKey)}
      />
    );
  });

  return (
    <Collapsible
      id="savingThrows"
      value="savingThrows"
      labelSpans={["SAVING THROWS"]}
      neverBar={true}
      category="savingThrows"
      collapsed={false}
    >
      <section className="characterSaveSection">
        <ul className="characterSaves">{saveMap}</ul>
      </section>
    </Collapsible>
  );
};

export default CharacterSavingThrows;
