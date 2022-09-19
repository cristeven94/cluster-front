import React from "react";
import { Navigate } from "react-router-dom";
import Loader from "../../Components/Loader";
import SideBar from "../../Components/SideBar";
import Step from "../../Components/Step";
import Title from "../../Components/Title";
import { BASE_URL, ENDPOINTS, REQUEST_CREDENTIALS } from "../../Endpoints";

import useFetch from "../../Hooks/useFetch";
import "./index.css";

const CreateCluster = ({}) => {
  const [navigateToDashBoard, setNavigatetoDashboard] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(1);

  const [cluster_name, setClusterName] = React.useState("My new cluster");
  const [cloud_provider_id, setProvider] = React.useState(1);
  const [application_id, setApplication] = React.useState(1);
  const [nodes, setNodes] = React.useState(0);
  const [ram, setRam] = React.useState(0);
  const [cpu, setCpu] = React.useState(0);

  const fetchProviders = useFetch({
    fetchOnClick: false,
    endpoint: ENDPOINTS.CLOUD_PROVIDERS,
  });
  const fetchApplications = useFetch({
    fetchOnClick: false,
    endpoint: ENDPOINTS.APPLICATIONS,
  });
  const onCreateCluster = async () => {
    const newClusterData = {
      cluster_name,
      agents_quantity: nodes,
      agents_memory: ram,
      cloud_provider_id,
      application_id,
    };
    const headers = {
      Authorization: `Basic ${btoa(REQUEST_CREDENTIALS)}`,
      "Content-Type": "application/json",
    };
    try {
      await fetch(`${BASE_URL}${ENDPOINTS.ALL}`, {
        method: "POST",
        headers,
        body: JSON.stringify(newClusterData),
      });
      setNavigatetoDashboard(true);
    } catch (error) {
      console.warn("Error al crear cluster", error);
    }
  };
  return (
    <div className="createcluster-container w-100 h-100 d-flex ">
      <SideBar />

      <div className="createcluster-content d-flex f-col w-100 h-100">
        <div className="createcluster-title-wrapper d-flex ">
          <Title textClassName="f-content-start" text="Create Cluster" />
        </div>
        {(fetchApplications.loading || fetchProviders.loading) && (
          <Loader size="10rem" />
        )}
        {fetchApplications.response && fetchProviders.response && (
          <div className="createcluster-step-wrapper w-100 h-100">
            <Step
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              onCreateCluster={onCreateCluster}
              clusterName={cluster_name}
              setClusterName={setClusterName}
              provider={cloud_provider_id}
              setProvider={setProvider}
              application={application_id}
              setApplication={setApplication}
              nodes={nodes}
              setNodes={setNodes}
              ram={ram}
              setRam={setRam}
              cpu={cpu}
              setCpu={setCpu}
              providerOptions={fetchProviders.response || []}
              applicationOptions={fetchApplications.response || []}
            />
          </div>
        )}
      </div>
      {navigateToDashBoard && <Navigate to="/dashboard" />}
    </div>
  );
};

export default CreateCluster;
