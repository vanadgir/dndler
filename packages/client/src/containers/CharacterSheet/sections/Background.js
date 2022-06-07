import React, { useContext } from "react";
import characterContext from "../../../contexts/characterContext";
import Collapsible from "../../EventCallers/Collapsible";

const CharacterBackground = () => {
  const characterBackground = useContext(characterContext).background;

  const subTypeIndex = Object.keys(characterBackground).findIndex((feature) => {
    return (
      feature !== "Name" &&
      feature !== "Trait" &&
      feature !== "Ideal" &&
      feature !== "Flaw" &&
      feature !== "Gear" &&
      feature !== "Bond" &&
      feature !== "Features" &&
      feature !== "Languages" &&
      feature !== "Skills" &&
      feature !== "Tools" &&
      feature !== "Variants"
    );
  });

  const subType = Object.keys(characterBackground)[subTypeIndex];
  const subTypeTitle = characterBackground[subType];

  let additional;
  if (subTypeIndex !== -1) {
    additional = (
      <p className="backgroundAdditional">
        <strong>{subType}:</strong> {subTypeTitle}
      </p>
    );
  } else {
    additional = "";
  }
  return (
    <Collapsible
      id="characterBackground"
      value="characterBackground"
      labelSpans={["BACKGROUND"]}
      neverBar={true}
      category="characterBackground"
      collapsed={false}
    >
      <section className="characterBackground">
        <h3 className="backgroundName">
          <strong>{characterBackground.Name}</strong>
        </h3>
        {additional}
        <p className="backgroundTrait leftAlign">
          <strong>Traits:</strong> "{characterBackground.Trait}"
        </p>
        <p className="backgroundIdeal leftAlign">
          <strong>Ideals:</strong> "{characterBackground.Ideal}"
        </p>
        <p className="backgroundBond leftAlign">
          <strong>Bonds:</strong> "{characterBackground.Bond}"
        </p>
        <p className="backgroundFlaw leftAlign">
          <strong>Flaws:</strong> "{characterBackground.Flaw}"
        </p>
      </section>
    </Collapsible>
  );
};

export default CharacterBackground;
