import React from "react";
import { Navigate } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import Step from "../../Components/Step";
import Title from "../../Components/Title";
import "./index.css";

const CreateCluster = ({ activeStep = 1 }) => {
  const [navigateToDashBoard, setNavigatetoDashboard] = React.useState(false);
  const onCreateCluster = () => {
    console.log("On Create");
    setTimeout(() => setNavigatetoDashboard(true), 2000);
  };
  return (
    <div className="createcluster-container w-100 h-100 d-flex ">
      <SideBar />

      <div className="createcluster-content d-flex f-col w-100 h-100">
        <div className="createcluster-title-wrapper d-flex ">
          <Title textClassName="f-content-start" text="Create Cluster" />
        </div>

        <div className="createcluster-step-wrapper w-100 h-100">
          <Step activeStep={activeStep} onCreateCluster={onCreateCluster} />
        </div>
      </div>
      {navigateToDashBoard && <Navigate to="/dashboard" />}
    </div>
  );
};

export default CreateCluster;
