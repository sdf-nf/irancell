import React from "react";
import YellowBgButton, { HeaderText } from "../../utils/Utility";
const Credit = () => {
  return (
    <div className="credit-container">
      <div className="headertext-container">
        <HeaderText text={"شارژ باقی مانده سیمکارت"} />
      </div>
      <span className="doughnut-chart">
        <span className="doughnut-chart-inner" dir="rtl">
          <span>6000 تومان</span>
        </span>
      </span>
      <div className="button-container">
        <YellowBgButton text={"!سبم کارتت رو شارژ کن"} />
      </div>
      <div dir="rtl" className="activeservices-container">
        <span className="activeservices-header">خدمات فعال</span>
      </div>
    </div>
  );
};
export default Credit;
