import React from "react";
import { Navigate } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import Step from "../../Components/Step";
import Title from "../../Components/Title";
import { ENDPOINTS } from "../../Endpoints";
import useFetch from "../../Hooks/useFetch";
import "./index.css";

const CreateCluster = ({}) => {
  const [navigateToDashBoard, setNavigatetoDashboard] = React.useState(false);
  const onCreateCluster = () => {
    console.log("On Create");
    setTimeout(() => setNavigatetoDashboard(true), 2000);
  };
  const [activeStep, setActiveStep] = React.useState(1);

  const [clusterName, setClusterName] = React.useState("My new cluster");
  const [provider, setProvider] = React.useState(1);
  const [application, setApplication] = React.useState(1);
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
  return (
    <div className="createcluster-container w-100 h-100 d-flex ">
      <SideBar />

      <div className="createcluster-content d-flex f-col w-100 h-100">
        <div className="createcluster-title-wrapper d-flex ">
          <Title textClassName="f-content-start" text="Create Cluster" />
        </div>

        <div className="createcluster-step-wrapper w-100 h-100">
          <Step
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            onCreateCluster={onCreateCluster}
            clusterName={clusterName}
            setClusterName={setClusterName}
            provider={provider}
            setProvider={setProvider}
            application={application}
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
      </div>
      {navigateToDashBoard && <Navigate to="/dashboard" />}
    </div>
  );
};

export default CreateCluster;
