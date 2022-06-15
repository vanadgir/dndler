import React, { useContext } from "react";
import characterContext from "../../../contexts/characterContext";
import FeatureEntry from "../entries/FeatureEntry";
import Collapsible from "../../EventCallers/Collapsible";

const CharacterFeatures = () => {
  const features = useContext(characterContext).features;

  const featureList = Object.keys(features).map((featureIndex, index) => {
    const noDivider = index+1 === Object.keys(features).length;
    return (
      <FeatureEntry
        key={features[featureIndex].Name + "-entry-" + featureIndex}
        feature={features[featureIndex]}
        noDivider={noDivider}
        index={index}
      />
    );
  });

  return (
    <Collapsible
      id="characterFeatures"
      value="characterFeatures"
      labelSpans={["FEATURES"]}
      neverBar={true}
      category="characterFeatures"
      collapsed={false}
    >
      <section className="characterFeatureSection">
        <ul className="characterFeatures no-dec">{featureList}</ul>
      </section>
    </Collapsible>
  );
};

export default CharacterFeatures;
