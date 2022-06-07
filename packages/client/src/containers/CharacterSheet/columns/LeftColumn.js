import React from "react";
import Attributes from "../sections/Attributes";
import Proficiencies from "../sections/OtherProficiencies";

const CharacterLeftColumn = () => {
  return (
    <div className="thirdColumn leftColumn">
      <Attributes/>
      <hr />
      <Proficiencies/>
    </div>
  );
};

export default CharacterLeftColumn;
