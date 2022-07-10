import React from "react";
import { ThemeContext } from "../../Theme";
import "./index.css";

const EmptyClusterList = () => {
  const { background, border, fontColors, fontSizes } =
    React.useContext(ThemeContext);
  return (
    <div
      className="emptyclusterlist-container d-flex f-content-center"
      style={{
        backgroundColor: background.terciary,
        borderColor: border.primary,
      }}
    >
      <p
        className="create-cluster-text"
        style={{ color: fontColors.primary, fontSize: fontSizes.secondary }}
      >
        Create Cluster +
      </p>
    </div>
  );
};

export default EmptyClusterList;
