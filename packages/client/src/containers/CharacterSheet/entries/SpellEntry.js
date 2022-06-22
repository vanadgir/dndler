import React from "react";
import Collapsible from "../../EventCallers/Collapsible";

const SpellEntry = (props) => {
  return (
    <li className="characterSpellEntry leftAlign">
      <Collapsible
        id={props.spell[0]}
        value={props.spell[0]}
        labelSpans={[props.spell[0]]}
        neverBar={props.noDivider}
        category="spell"
        collapsed={true}
      >
        <h5 className="spellEntry-attrib">{props.spell[1].school} - {props.spell[1].castingTime}</h5>
        <h5 className="spellEntry-attrib">{props.spell[1].range} - {props.spell[1].duration}</h5>
        <h5 className="spellEntry-attrib">{props.spell[1].components}</h5>
        <p className="spellEntry-desc">{props.spell[1].description}</p>
      </Collapsible>
    </li>
  );
};

export default SpellEntry;
