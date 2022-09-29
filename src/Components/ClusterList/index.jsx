import React from "react";
import { Navigate } from "react-router-dom";
import { ThemeContext } from "../../Theme";
import "./index.css";
import { BASE_URL, ENDPOINTS, REQUEST_CREDENTIALS } from "../../Endpoints";

const ClusterList = ({ clusters = [] }) => {
  const [navigationTarget, setNavigationTarget] = React.useState("");
  const { fontColors, fontSizes } = React.useContext(ThemeContext);
  const [clusterList, setClusterList] = React.useState(clusters);
  const handlerOnDelete = async (event, id) => {
    event.stopPropagation();
    const headers = {
      Authorization: `Basic ${btoa(REQUEST_CREDENTIALS)}`,
      "Content-Type": "application/json",
    };
    try {
      await fetch(`${BASE_URL}${ENDPOINTS.ALL}${id}/`, {
        method: "DELETE",
        headers,
      });
      setClusterList((clusters) =>
        clusters.filter((cluster) => cluster.id !== id)
      );
    } catch (error) {
      console.warn("Error al eliminar cluster", error);
    }
  };
  return (
    <div className="clusterlist-container w-100 h-100 d-flex f-col">
      {navigationTarget && (
        <Navigate to={`/cluster-detail/${navigationTarget}`} />
      )}
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
          <div className="clusterlist-header-name">
            <p
              style={{
                color: fontColors.primary /* fontSize: fontSizes.secondary */,
              }}
            ></p>
          </div>
        </div>
        <div className="clusterlist-record-list w-100 d-flex f-col">
          {clusterList.map((cluster) => (
            <div
              onClick={() => setNavigationTarget(cluster.id)}
              key={cluster.id}
              className="clusterlist-record w-100 d-flex f-content-space-ar"
            >
              <div className="clusterlist-attribute w-100">
                <p
                  style={{ color: fontColors.primary }}
                  className="clusterlist-attribute-text"
                >
                  {cluster.id}
                </p>
              </div>
              <div className="clusterlist-attribute w-100">
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
              <div className="clusterlist-attribute w-100">
                <p
                  style={{ color: fontColors.primary }}
                  className="clusterlist-attribute-text"
                  onClick={(e) => handlerOnDelete(e, cluster.id)}
                >
                  Eliminar
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
