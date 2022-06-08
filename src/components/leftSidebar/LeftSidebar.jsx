import UserProfile from "./UserProfile";
import "./../../assets/styles/LeftSideBar.css";
import Credit from "./Credir";

const LeftSideBar = () => {
  return (
    <div className="leftsidebar-container">
      <UserProfile />
      <Credit />
    </div>
  );
};
export default LeftSideBar;
