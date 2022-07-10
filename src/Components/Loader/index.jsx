import React from "react";
import { ThemeContext } from "../../Theme";
import "./index.css";

const Loader = ({ height = "2rem", width = "2rem", text }) => {
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
