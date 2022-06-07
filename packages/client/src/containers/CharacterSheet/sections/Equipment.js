import React, { useContext } from "react";
import characterContext from "../../../contexts/characterContext";
import Collapsible from "../../EventCallers/Collapsible";

const CharacterEquipment = () => {
  const equipment = useContext(characterContext).equipment;

  let equipIndex = 0;
  const equipmentList = equipment.map((equipEntry) => {
    return (
      <li
        className="characterEquipEntry leftAlign"
        key={`${equipEntry}-${++equipIndex}`}
      >
        <p>{equipEntry}</p>
      </li>
    );
  });

  return (
    <Collapsible
      id="characterEquipment"
      value="characterEquipment"
      labelSpans={["EQUIPMENT"]}
      neverBar={true}
      category="characterEquipment"
      collapsed={false}
    >
      <section className="characterEquipmentSection">
        <ul className="characterEquipment-list">{equipmentList}</ul>
      </section>
    </Collapsible>
  );
};

export default CharacterEquipment;
