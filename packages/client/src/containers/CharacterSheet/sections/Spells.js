import React, { useContext } from "react";
import characterContext from "../../../contexts/characterContext";
import Collapsible from "../../EventCallers/Collapsible";
import SpellEntry from "../entries/SpellEntry";

const CharacterSpells = () => {
  const spells = useContext(characterContext).spells;

  const spellsForLevel = (spellLevel) => {
    let rows = [];
    for (let spell of spellLevel) {
      rows.push(<SpellEntry key={spell + "-entry"} spell={spell} />);
    }
    return rows;
  };

  const spellList = Object.keys(spells)
    .filter((spellKey) => {
      return spellKey !== "spellSlots";
    })
    .filter((spellKey) => {
      return spells[spellKey].length;
    })
    .map((spellLevel) => {
      const levelString =
        spellLevel === "Cantrip" ? spellLevel + "s" : spellLevel + " Level";
      const levelSlots =
        spellLevel !== "Cantrip"
          ? spells["spellSlots"][parseInt(spellLevel) - 1] + " slots"
          : "";
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
            <ul className={spellLevel + "-spells characterSpells"}>
              {spellsForLevel(spells[spellLevel])}
            </ul>
          </Collapsible>
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
