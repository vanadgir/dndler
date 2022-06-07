import React from "react";

const SaveThrow = (props) => {
  return (
    <li className={"individualSave " + (props.prof ? "proficient" : "")}>
      <p className="savesTitle inline-block leftAlign">{props.title}</p>
      <p className="savesValue inline-block rightAlign">
        {(props.value > 0 ? "+" : "") + props.value}
      </p>
    </li>
  );
};

export default SaveThrow;
