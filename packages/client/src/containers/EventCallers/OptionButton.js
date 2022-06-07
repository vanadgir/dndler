import React from "react";

const OptionButton = (props) => {
  const handleChange = (event) => {
    props.onClick(event.target.value);
  };

  const labelImg = props.img
    ? <img className={props.imgName} alt={props.id} src={props.img} />
    : null;

  return (
    <div className={props.containerName + " optionButton-container"}>
      <button
        value={props.value}
        onClick={handleChange}
        id={props.id}
        className={props.className + " hidden"}
      ></button>
      <label
        htmlFor={props.id}
        className={props.className + "-label optionButton-label"}
      >
        {labelImg}
        <span className="optionButton-span">{props.label}</span>
      </label>
    </div>
  );
};

export default OptionButton;
