import React from "react";

const OptionSwitch = (props) => {
  const lockedOrNot = props.readOnly
    ? <input
        onChange={null}
        id={props.id}
        value={props.value}
        type="checkbox"
        className={props.className + " hidden"}
        readOnly={props.readOnly}
        checked={true}
      />
    : <input
        onChange={props.handleToggle}
        id={props.id}
        value={props.value}
        type="checkbox"
        className={props.className + " hidden"}
        defaultChecked={props.isOn}
      />

  return (
    <div className={props.className + "-container"}>
      {lockedOrNot}
      {props.children}
    </div>
  );
};

export default OptionSwitch;
