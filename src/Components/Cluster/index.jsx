import React from "react";
import { ThemeContext } from "../../Theme";
import ClusterNode from "../ClusterNode";
import "./index.css";

const Cluster = (
  id,
  user,
  cloud_provider_id = {},
  cluster_name = "Default name",
  agents_quantity = 0,
  agents_mememory = 0,
  is_running = false,
  is_active = false,
  nodes = [],
  ...props
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
