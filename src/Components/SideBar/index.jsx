import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Theme";
import "./index.css";

const SideBar = () => {
  const { background, fontColors } = React.useContext(ThemeContext);
  return (
    <div
      className="sidebar-container h-100 d-flex f-col"
      style={{ backgroundColor: background.secondary }}
    >
      <div className="profile-pic-container">
        <img src="" alt="" loading="lazy" className="profile-pic" />
      </div>
      <div className="content d-flex f-col f-content-center ">
        <div className="profilepic" />
        <ul className="sidebaroptions d-flex f-col a-items-center ">
          <li className="option">
            <Link
              style={{
                color: fontColors.primary,
              }}
              to="/dashboard"
            >
              {" "}
              Home
            </Link>
          </li>
          <li className="option">
            <Link
              style={{
                color: fontColors.primary,
              }}
              to="/login"
            >
              {" "}
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
