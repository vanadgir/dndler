import React from "react";
import CombatProperties from "../sections/CombatProperties";
import SavingThrows from "../sections/SavingThrows";
import Skills from "../sections/Skills";
import Equipment from "../sections/Equipment";
import Spells from "../sections/Spells";

const CharacterMiddleColumn = ({ hasSpells }) => {
  const spells = hasSpells ? <><hr /><Spells/></> : null;

  return (
    <div className="thirdColumn midColumn">
      <CombatProperties/>
      <hr />
      <SavingThrows/>
      <hr />
      <Skills/>
      <hr />
      <Equipment/>
      {spells}
    </div>
  );
};

export default CharacterMiddleColumn;
