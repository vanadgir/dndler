import React from "react";

const UploadButton = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.files[0]);
    event.target.value = "";
  };

  const labelImg = props.img
    ? <img className={props.imgName} alt={props.id} src={props.img} />
    : null;

  return (
    <div className={props.containerName + " UploadButton-container"}>
      <input
        type="file"
        accept="application/json"
        onChange={handleChange}
        id={props.id}
        className={props.className + " hidden"}
      ></input>
      <label
        htmlFor={props.id}
        className={props.className + "-label UploadButton-label"}
      >
        {labelImg}
        <span className="UploadButton-span">{props.label}</span>
      </label>
    </div>
  );
};

export default UploadButton;
