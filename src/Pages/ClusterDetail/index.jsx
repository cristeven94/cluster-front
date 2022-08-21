import React from "react";
import { useParams } from "react-router-dom";
import PowerButton from "../../Components/PowerButton";
import Cluster from "../../Components/Cluster";
import SideBar from "../../Components/SideBar";
import Title from "../../Components/Title";
import { ThemeContext } from "../../Theme";
import "./index.css";

const ClusterDetail = ({ clusters = [] }) => {
  const { fontColors, background } = React.useContext(ThemeContext);
  const { cluster_id } = useParams();
  const clusterData = clusters.find(
    (cluster) => cluster.id === Number(cluster_id)
  );
  return (
    <div className="clusterdetail-page-container d-flex w-100 h-100">
      <SideBar />
      <div className="clusterdetail-content d-flex f-col w-100 h-100">
        <div className="clusterdetail-header">
          <Title
            textClassName="f-content-start"
            text={clusterData.cluster_name}
          />
        </div>
        <div
          className="clusterdetail-attributes d-flex f-col"
          style={{ color: fontColors.primary }}
        >
          <div className="clusterdetail-attribute d-flex">
            <p className="attribute-label">Cloud Provider:</p>{" "}
            <p
              className="attribute-value"
              style={{ backgroundColor: background.terciary }}
            >
              {clusterData.cloud_provider_id.cloud_name}
            </p>
          </div>
          <div className="clusterdetail-attribute d-flex">
            <p className="attribute-label">Application:</p>{" "}
            <p
              className="attribute-value"
              style={{ backgroundColor: background.terciary }}
            >
              {clusterData.application_id.application_name}
            </p>
          </div>
          <PowerButton is_active={clusterData.is_running} />
        </div>
        <div className="clusterdetail-body">
          <Cluster {...clusterData} />
        </div>
      </div>
    </div>
  );
};

export default ClusterDetail;
