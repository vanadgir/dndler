import React, { useContext } from "react";
import characterContext from "../../../contexts/characterContext";
import OtherProficiencyCategory from "../entries/OtherProficiencyCategory";
import Collapsible from "../../EventCallers/Collapsible";

const CharacterOtherProficiencies = () => {
  const characterProficiencies = useContext(characterContext).proficiency;

  const proficiencyCategories = Object.keys(characterProficiencies)
    .filter((proficiencyIndex) => {
      return characterProficiencies[proficiencyIndex].length;
    })
    .map((proficiency) => {
      return (
        <OtherProficiencyCategory
          key={proficiency}
          category={proficiency}
          entries={characterProficiencies[proficiency]}
        />
      );
    });

  return (
    <Collapsible
      id="characterProficiencies"
      value="characterProficiencies"
      labelSpans={["PROFIENCIES"]}
      neverBar={true}
      category="characterProficiencies"
      collapsed={false}
    >
      <section className="characterProficiencieSection">
        <ul className="characterProficiencies">{proficiencyCategories}</ul>
      </section>
    </Collapsible>
  );
};

export default CharacterOtherProficiencies;
