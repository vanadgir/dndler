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
        <h5 className="spellEntry-attrib">{props.spell[1]}</h5>
        <p className="spellEntry-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          gravida, nisi non porttitor vestibulum, nisl elit venenatis odio, quis
          sodales eros justo vitae ligula.
          <br />
          <br /> Sed sit amet accumsan mi. Quisque varius placerat nulla, ut
          tempus tellus consequat a.
        </p>
      </Collapsible>
    </li>
  );
};

export default SpellEntry;
