import React from "react";
import { Link } from "react-router-dom";
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
      <div className="content d-flex f-col f-content-center ">
        <div className="profilepic" />
        <ul className="sidebaroptions">
          <li className="option">
            <Link to="/dashboard"> Home</Link>
          </li>
          <li className="option">
            <Link to="/login"> Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
