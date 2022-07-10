import React from "react";
import { ThemeContext } from "../../Theme";
import "./index.css";

const SideBar = () => {
  const { background } = React.useContext(ThemeContext);
  return (
    <div
      className="sidebar-container h-100 d-flex f-col"
      style={{ backgroundColor: background.secondary }}
    >
      <div className="profile-pic-container">
        <img src="" alt="" loading="lazy" className="profile-pic" />
      </div>
      <div className="content"></div>
      <div className="footer"></div>
    </div>
  );
};

export default SideBar;
