import React from "react";
import { ThemeContext } from "../../Theme";
import ClusterNode from "../ClusterNode";
import "./index.css";

const Cluster = (
  id,
  user,
  cloud_provider,
  cluster_name,
  agents_quantity,
  agents_memeory,
  is_running,
  is_active,
  nodes = []
) => {
  const { border } = React.useContext(ThemeContext);
  return (
    <div
      className="cluster-container"
      style={{
        borderColor: border.primary,
      }}
    >
      <div className="node-list d-grid-4">
        <div className="node-wrapper">
          <ClusterNode />
        </div>
        <div className="node-wrapper">
          <ClusterNode />
        </div>{" "}
        <div className="node-wrapper">
          <ClusterNode />
        </div>{" "}
        <div className="node-wrapper">
          <ClusterNode />
        </div>{" "}
        <div className="node-wrapper">
          <ClusterNode />
        </div>{" "}
        <div className="node-wrapper">
          <ClusterNode />
        </div>{" "}
        <div className="node-wrapper">
          <ClusterNode />
        </div>{" "}
        <div className="node-wrapper">
          <ClusterNode />
        </div>{" "}
        <div className="node-wrapper">
          <ClusterNode />
        </div>{" "}
        <div className="node-wrapper">
          <ClusterNode />
        </div>{" "}
        <div className="node-wrapper">
          <ClusterNode />
        </div>{" "}
        <div className="node-wrapper">
          <ClusterNode />
        </div>
      </div>
    </div>
  );
};

export default Cluster;
