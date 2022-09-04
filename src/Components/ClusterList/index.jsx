import React from "react";
import { Navigate } from "react-router-dom";
import { ThemeContext } from "../../Theme";
import Button from "../Button";
import Title from "../Title";
import "./index.css";

const ClusterList = ({ clusters }) => {
  const [navigationTarget, setNavigationTarget] = React.useState("");
  const [navigateToForm, setNavigateToForm] = React.useState(false);
  const { fontColors, fontSizes } = React.useContext(ThemeContext);
  return (
    <div className="clusterlist-container w-100 h-100 d-flex f-col">
      {navigationTarget && (
        <Navigate to={`/cluster-detail/${navigationTarget}`} />
      )}

      {navigateToForm && <Navigate to="/create-cluster" />}
      <div className="clusterlist-title-wrapper d-flex">
        <Title text="Dashboard" textClassName="f-content-start" />
        <div className="clusterlst-create-button-wrapper">
          <Button text="New Cluster" />
        </div>
      </div>

      <div className="clusterlist-table h-100">
        <div className="clusterlist-headers w-100 d-flex f-content-space-ar">
          <div className="clusterlist-header-name">
            <p
              style={{
                color: fontColors.primary /* fontSize: fontSizes.secondary */,
              }}
            >
              ID
            </p>
          </div>
          <div className="clusterlist-header-name">
            <p
              style={{
                color: fontColors.primary /* fontSize: fontSizes.secondary */,
              }}
            >
              Cluster Name
            </p>
          </div>
          <div className="clusterlist-header-name">
            <p
              style={{
                color: fontColors.primary /* fontSize: fontSizes.secondary */,
              }}
            >
              Nodes
            </p>
          </div>
          <div className="clusterlist-header-name">
            <p
              style={{
                color: fontColors.primary /* fontSize: fontSizes.secondary */,
              }}
            >
              Running
            </p>
          </div>
        </div>
        <div className="clusterlist-record-list w-100 d-flex f-col">
          {clusters.map((cluster) => (
            <div
              onClick={() => setNavigationTarget(cluster.id)}
              key={cluster.id}
              className="clusterlist-record w-100 d-flex f-content-space-ar"
            >
              <div className="clusterlist-attribute w-100">
                {" "}
                <p
                  style={{ color: fontColors.primary }}
                  className="clusterlist-attribute-text"
                >
                  {cluster.id}
                </p>
              </div>
              <div className="clusterlist-attribute w-100">
                {" "}
                <p
                  style={{ color: fontColors.primary }}
                  className="clusterlist-attribute-text"
                >
                  {cluster.cluster_name}
                </p>
              </div>
              <div className="clusterlist-attribute w-100">
                <p
                  style={{ color: fontColors.primary }}
                  className="clusterlist-attribute-text"
                >
                  {cluster.nodes.length}
                </p>
              </div>
              <div className="clusterlist-attribute w-100">
                <p
                  style={{ color: fontColors.primary }}
                  className="clusterlist-attribute-text"
                >
                  {cluster.is_running ? "Yes" : "No"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClusterList;
