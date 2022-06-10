import React from "react";
import Profile from "./../../assets/images/userProfile.jpeg";
const UserProfile = () => {
  return (
    <div className="userprofile-container" dir="rtl">
      <div className="profile-picture-container">
        <img src={Profile} alt="profile" className="profile-picture" />
      </div>
      <div className="profile-detail">
        <span>سلام، صدف مختاراوغلی و آیدا براتی</span>
        <span>+98123456789</span>
      </div>
    </div>
  );
};
export default UserProfile;
