import React from "react";
import "./../assets/styles/Utils.css";

const YellowBgButton = ({ text }) => {
  return (
    <button className="yellow-button">
      <span className="yellow-button_text">{text}</span>
    </button>
  );
};
export const HeaderText = ({ text }) => {
  return (
    <h6 dir="rtl" className="header-text">
      {text}
    </h6>
  );
};
export default YellowBgButton;
