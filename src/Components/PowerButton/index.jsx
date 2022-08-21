import React from "react";
import Button from "../Button";
import "./index.css";

const PowerButton = ({ is_active }) => {
  const [isOn, setIsOn] = React.useState(is_active);
  return (
    <div
      className="powerbutton-container d-flex"
      onClick={() => setIsOn(!isOn)}
    >
      <div className={`btn-bg ${isOn ? "active" : ""}`}>
        <div className="btn-highlight"></div>
        <div className="btn-ring">
          <div className="ring-line"></div>
        </div>
      </div>
      <Button
        className="powerbutton-textbutton"
        text={isOn ? "On" : "Off"}
        onClick={() => console.log()}
      />
    </div>
  );
};

export default PowerButton;
