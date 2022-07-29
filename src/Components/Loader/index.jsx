import React from "react";
import { ThemeContext } from "../../Theme";
import "./index.css";

const Loader = ({ size = "2rem", text }) => {
  const height = size;
  const width = size;
  const { fontColors } = React.useContext(ThemeContext);
  return (
    <div className="loader-container " style={{ height, width }}>
      <div className="loader-spinner" />
      {text && (
        <div className="loader-text">
          <p className="loading-text" style={{ color: fontColors.primary }}>
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Loader;
