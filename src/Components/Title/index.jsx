import React from "react";
import { ThemeContext } from "../../Theme";
import "./index.css";

const Title = ({ text, type = "main" }) => {
  const { fontColors, fontSizes } = React.useContext(ThemeContext);
  return (
    <div className={`title-container ${type}-type-container h-100 w-100 `}>
      <div className="title-text-container d-flex f-content-center">
        <h2 style={{ color: fontColors.primary, fontSize: fontSizes.primary }}>
          {text}
        </h2>
      </div>
    </div>
  );
};

export default Title;
