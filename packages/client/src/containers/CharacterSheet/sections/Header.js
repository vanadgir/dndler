import React, { useContext } from "react";
import characterContext from "../../../contexts/characterContext";

const CharacterHeader = () => {
  const character = useContext(characterContext);

  return (
    <>
      <h1 className="characterName">{character.name}</h1>
      <h2 className="characterDescriptor">
        Level&nbsp;
        {character.level}&nbsp;
        {character.race}&nbsp;
        {character.class}
      </h2>
    </>
  );
};

export default CharacterHeader;
