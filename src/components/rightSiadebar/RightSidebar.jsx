import React from "react";
import "./../../assets/styles/RightSidebar.css";
import IrAppIcon from "./../../assets/images/IrancellAppIcon.jpeg";
import SearchInputIcon from "./../../assets/images/magnifier.jpeg";
import HomeIcon from "../../assets/images/HomeIcon.jpeg";
import Charge from "./../../assets/images/charge.jpeg";
import Internet from "./../../assets/images/internet.jpeg";
import Records from "./../../assets/images/records.jpeg";
import Services from "./../../assets/images/services2.jpeg";
import Management from "./../../assets/images/management.jpeg";
import SimManagement from "./../../assets/images/simManagement.jpeg";
import FQA from "./../../assets/images/FAQ.jpeg";
import AboutUs from "./../../assets/images/aboutUs.jpeg";

const RightSidebar = () => {
  return (
    <div className="rightSidebar-container">
      <div className="rightSidebar-header">
        <span className="rightSidebar-header-text">ایرانسل من</span>

        <img
          src={IrAppIcon}
          alt="appIcon"
          className="rightSidebar-header-image"
        />
      </div>
      <div className="searchInput-container">
        <img
          src={SearchInputIcon}
          alt="searchInput"
          className="searchInputIcon"
        />
        <input
          type="text"
          name=""
          placeholder="جست و جو"
          id=""
          className="searchInput"
        />
      </div>
      <div>
        <div className="mainPage">
          <span className="mainPage-text">صفحه اصلی</span>

          <img src={HomeIcon} alt="homeIcon" className="mainPage-icon" />
        </div>
        <div className="section-header">
          <span className="section-header-text" dir="rtl">
            خدمات
          </span>
        </div>
        <div className="services">
          <div className="recharge">
            <span className="recharge-text">شارژ سیمکارت</span>
            <img src={Charge} alt="شارژ سیمکارت" className="recharge-icon" />
          </div>
          <div className="recharge">
            <span className="recharge-text"> اینترنت</span>
            <img src={Internet} alt="اینترنت" className="recharge-icon" />
          </div>
          <div className="recharge">
            <span className="recharge-text">کارکرد و فروش</span>
            <img src={Records} alt="کارکرد فروش" className="recharge-icon" />
          </div>
          <div className="recharge">
            <span className="recharge-text">خدمات</span>
            <img src={Services} alt="خدمات" className="recharge-icon" />
          </div>
        </div>
        <div className="section-header">
          <span className="section-header-text" dir="rtl">
            مدیریت
          </span>
        </div>
        <div className="services">
          <div className="recharge">
            <span className="recharge-text">مدیریت خدمات</span>
            <img
              src={Management}
              alt="مدیریت خدمات"
              className="recharge-icon"
            />
          </div>
          <div className="recharge">
            <span className="recharge-text">مدیریت سیمکارت</span>
            <img
              src={SimManagement}
              alt=" مدیریت سیمکارت"
              className="recharge-icon"
            />
          </div>
        </div>
        <div className="services marginTop">
          <div className="recharge">
            <span className="recharge-text">سوالات متداول</span>
            <img src={FQA} alt="سوالات متداول" className="recharge-icon" />
          </div>
          <div className="recharge">
            <span className="recharge-text">ارتباط با ما</span>
            <img src={AboutUs} alt=" ارتباط با ما" className="recharge-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
