import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ type, label, handleClick, image }) => (
  <button className="custom-button" type={type} onClick={handleClick}>
    {image ? <img className="button-icon" src={image} alt="label"></img> : null}
    {label}
  </button>
);

export default CustomButton;
