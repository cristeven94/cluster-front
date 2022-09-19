import React from "react";
import Button from "../Button";
import { BASE_URL, ENDPOINTS, REQUEST_CREDENTIALS } from "../../Endpoints";
import "./index.css";

const PowerButton = ({ id, is_active }) => {
  const [isOn, setIsOn] = React.useState(is_active);
  const handlerOnClick = async () => {
    const requestBody = {
      id,
      is_running: !isOn,
    };

    const headers = {
      Authorization: `Basic ${btoa(REQUEST_CREDENTIALS)}`,
      "Content-Type": "application/json",
    };
    try {
      await fetch(`${BASE_URL}${ENDPOINTS.ALL}${id}/`, {
        method: "PATCH",
        headers,
        body: JSON.stringify(requestBody),
      });
      setIsOn(!isOn);
    } catch (error) {
      console.warn("Error al crear cluster", error);
    }
  };
  return (
    <div
      className="powerbutton-container d-flex"
      onClick={() => handlerOnClick(!isOn)}
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
