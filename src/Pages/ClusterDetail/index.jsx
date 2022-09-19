import React from "react";
import { useParams } from "react-router-dom";
import PowerButton from "../../Components/PowerButton";
import Cluster from "../../Components/Cluster";
import Loader from "../../Components/Loader";
import SideBar from "../../Components/SideBar";
import Title from "../../Components/Title";
import { ThemeContext } from "../../Theme";
import "./index.css";
import useFetch from "../../Hooks/useFetch";
import { ENDPOINTS } from "../../Endpoints";

const ClusterDetail = ({}) => {
  const { fontColors, background } = React.useContext(ThemeContext);
  const { cluster_id } = useParams();
  const { response, loading, error } = useFetch({
    endpoint: `${ENDPOINTS.ALL}${cluster_id}/`,
  });
  return (
    <div className="clusterdetail-page-container d-flex w-100 h-100">
      <SideBar />
      {loading && <Loader size="10rem" />}
      {response && (
        <div className="clusterdetail-content d-flex f-col w-100 h-100">
          <div className="clusterdetail-header">
            <Title
              textClassName="f-content-start"
              text={response.cluster_name}
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
                {response.cloud_provider_id.cloud_name}
              </p>
            </div>
            <div className="clusterdetail-attribute d-flex">
              <p className="attribute-label">Application:</p>{" "}
              <p
                className="attribute-value"
                style={{ backgroundColor: background.terciary }}
              >
                {response.application_id.application_name}
              </p>
            </div>
            <PowerButton is_active={response.is_running} />
          </div>
          <div className="clusterdetail-body">
            <Cluster {...response} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClusterDetail;
