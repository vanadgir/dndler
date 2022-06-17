import React, { useContext } from "react";
import characterContext from "../../../contexts/characterContext";
import Collapsible from "../../EventCallers/Collapsible";
import SpellEntry from "../entries/SpellEntry";

const CharacterSpells = () => {
  const spells = useContext(characterContext).spells;

  const spellsForLevel = (spellLevel) => {
    return spellLevel.map((spell, index) => {
      const isLast = index+1 === spellLevel.length;
      return <SpellEntry key={spell + "-entry"} spell={spell} noDivider={isLast} />
    })
  }

  const spellList = Object.keys(spells)
    .filter((spellKey) => {
      return spellKey !== "spellSlots";
    })
    .filter((spellKey) => {
      return spells[spellKey].length;
    })
    .map((spellLevel, index) => {
      const levelString =
        spellLevel === "Cantrip" ? spellLevel + "s" : spellLevel + " Level";
      const levelSlots =
        spellLevel !== "Cantrip"
          ? spells["spellSlots"][parseInt(spellLevel)] + " slots"
          : "";
      const divider = index+2 === Object.keys(spells).length ? null : <hr/>;
      return (
        <React.Fragment key={spellLevel + "-list"}>
          <Collapsible
            labelSpans={[levelString, levelSlots]}
            id={levelString}
            value={levelString}
            neverBar={true}
            collapsed={true}
            category="spellLevel"
          >
            <ul className={spellLevel + "-spells characterSpells no-dec"}>
              {spellsForLevel(spells[spellLevel])}
            </ul>
          </Collapsible>
          {divider}
        </React.Fragment>
      );
    });

  return (
    <Collapsible
      id="characterSpells"
      value="characterSpells"
      labelSpans={["SPELLS"]}
      neverBar={true}
      category="characterSpells"
      collapsed={false}
    >
      <section className="characterSpellSection">
        <div className="characterSpells-container">{spellList}</div>
      </section>
    </Collapsible>
  );
};

export default CharacterSpells;
