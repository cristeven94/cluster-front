import React from "react";
import { ThemeContext } from "../../Theme";
import "./index.css";

const Button = ({ className, text, onClick, type = "main" }) => {
  const { button, fontColors } = React.useContext(ThemeContext);
  return (
    <div
      className={`button-container ${type}-button-container ${className ?? ""}`}
    >
      <div className="button-text-container">
        <button
          className="h-100 w-100"
          onClick={(ev) => onClick?.(ev)}
          style={{
            backgroundColor: button.background.primary,
            color: fontColors.secondary,
          }}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default Button;
