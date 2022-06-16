import React, { useContext } from "react";
import AttributeEntry from "../entries/AttributeEntry";
import attributes from '../../../constants/attributes.js'
import characterContext from "../../../contexts/characterContext";

const CharacterAttributes = () => {
  const characterAttributes = useContext(characterContext).stats;

  const attribMap = attributes.map((attrib) => {
    const shortKey = attrib.substring(0, 3);
    return (
      <AttributeEntry
        key={shortKey}
        shortKey={shortKey}
        title={attrib}
        statTotal={characterAttributes["Total Stats"][shortKey]}
        statModifier={`${
          characterAttributes["Total Modifiers"][shortKey] > 0 ? "+" : ""
        }${characterAttributes["Total Modifiers"][shortKey]}`}
      />
    );
  });

  return <section className="characterStatSection">{attribMap}</section>;
};

export default CharacterAttributes;
