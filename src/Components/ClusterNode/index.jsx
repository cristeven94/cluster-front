import React from "react";
import { ThemeContext } from "../../Theme";
import "./index.css";

const ClusterNode = ({
  id,
  node_name = "Cluster",
  ram_usage = 0,
  cpu_usage = 0,
  is_active,
  storage = 0,
  gpu = 0,
}) => {
  const { fontSizes, fontColors, background } = React.useContext(ThemeContext);
  return (
    <div
      className="clusternode-container d-flex f-col h-100 w-100"
      style={{ backgroundColor: background.terciary }}
    >
      <div className="clusternode-header d-flex">
        <div className="clusternode-name-container">
          <p
            style={{ fontSize: fontSizes.small, color: fontColors.terciary }}
            className="clusternode-name-text"
          >
            {name}
          </p>
        </div>
        <div className="clusternode-delete-icon">
          <span className="delete-icon"></span>
        </div>
      </div>
      <div className="clusternode-body d-grid-2">
        <div className="clusternode-attribute">{`RAM ${ram_usage}GB`}</div>
        <div className="clusternode-attribute">{`CPU ${cpu_usage}`}</div>
        <div className="clusternode-attribute">{`GPU ${gpu}`}</div>
        <div className="clusternode-attribute">{`Store ${storage}GB`}</div>
      </div>
    </div>
  );
};

export default ClusterNode;
