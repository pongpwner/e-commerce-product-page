import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ type, label, handleClick }) => (
  <button type={type} onClick={handleClick}>
    {label}
  </button>
);

export default CustomButton;
