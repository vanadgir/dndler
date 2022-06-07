import React, { useContext } from "react";
import characterContext from "../../../contexts/characterContext";

const CharacterCombatProperties = () => {
  const characterCombatProps = useContext(characterContext);

  return (
    <section className="characterCombatProps">
      <h2 className="characterCombat characterHP">HP: {characterCombatProps.hitpoints} </h2>
      <h2 className="characterCombat characterHD">HitDice: {characterCombatProps.hitdice}</h2>
      <h2 className="characterCombat characterAC">AC: {characterCombatProps.armorclass}</h2>
      <h2 className="characterCombat characterSpeed">Speed: {characterCombatProps.speed.Walk}ft</h2>
    </section>
  );
};

export default CharacterCombatProperties;
