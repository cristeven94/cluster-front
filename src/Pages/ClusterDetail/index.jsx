import React from "react";
import Cluster from "../../Components/Cluster";
import SideBar from "../../Components/SideBar";
import Title from "../../Components/Title";
import { ThemeContext } from "../../Theme";
import "./index.css";

const ClusterDetail = ({
  clusterName = "Cluster name",
  cloudProvider = "Default cloud provider",
  application = "OpenFaaS",
}) => {
  const { fontColors, background } = React.useContext(ThemeContext);
  return (
    <div className="clusterdetail-page-container d-flex w-100 h-100">
      <SideBar />
      <div className="clusterdetail-content d-flex f-col w-100 h-100">
        <div className="clusterdetail-header">
          <Title textClassName="f-content-start" text={clusterName} />
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
              {cloudProvider}
            </p>
          </div>
          <div className="clusterdetail-attribute d-flex">
            <p className="attribute-label">Application:</p>{" "}
            <p
              className="attribute-value"
              style={{ backgroundColor: background.terciary }}
            >
              {application}
            </p>
          </div>
        </div>
        <div className="clusterdetail-body">
          <Cluster />
        </div>
      </div>
    </div>
  );
};

export default ClusterDetail;
