import React from "react";
import "./../../assets/styles/Header.css";
import PhonePic from "./../../assets/images/phone.jpeg";
import YellowBgButton from "../../utils/Utility";

const Header = () => {
  return (
    <div className="header-container">
      <h3 dir="rtl" className="header-text">
        صفحه اصلی
      </h3>
      <div className="text_image-container">
        <img src={PhonePic} className="image" />
        <h4 className="text" dir="rtl">
          این همه بسته بیسابقست!
        </h4>
        <div className="button">
          <YellowBgButton text={"اینجا چه خبره؟"} />
        </div>
      </div>
    </div>
  );
};
export default Header;
