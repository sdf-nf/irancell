import React from "react";
import YellowBgButton, { HeaderText } from "../../utils/Utility";
import Wifi from "./../../assets/images/wifi.jpeg";
import Sms from "./../../assets/images/sms.jpeg";
import IrAppIcon from "./../../assets/images/IrancellAppIcon.jpeg";
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
        <div className="activeservices-info">
          <div className="">
            <img src={Wifi} alt="connectio" className="activeservices-image" />
          </div>
          <div className="activeservices-text-container">
            <span>بسته پیامک هفتگی</span>
            <span>تا تاریخ 31 خرداد 1400</span>
          </div>
        </div>
        <div className="activeservices-info">
          <div className="">
            <img src={Sms} alt="connectio" className="activeservices-image" />
          </div>
          <div className="activeservices-text-container">
            <span>بسته اینترنت ماهانه</span>
            <span>تا تاریخ 12 خرداد 1400</span>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div>
          <span dir="rtl" className="footer-text">
            اپلیکیشن ما رو دانلود کن!
          </span>
        </div>
        <div>
          <img src={IrAppIcon} alt="Icon" className="footer-image" />
        </div>
      </footer>
    </div>
  );
};
export default Credit;
