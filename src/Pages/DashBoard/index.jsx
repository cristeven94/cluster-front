import React from "react";
import { Navigate } from "react-router-dom";
import Button from "../../Components/Button";
import ClusterList from "../../Components/ClusterList";
import EmptyClusterList from "../../Components/EmptyClusterList";
import Loader from "../../Components/Loader";
import SideBar from "../../Components/SideBar";
import Title from "../../Components/Title";
import { ENDPOINTS } from "../../Endpoints";
import useFetch from "../../Hooks/useFetch";
import "./index.css";
const Dashboard = ({}) => {
  const { response, loading, error } = useFetch({ endpoint: ENDPOINTS.ALL });
  const [navigateToForm, setNavigateToForm] = React.useState(false);
  console.log("dashboard", loading);
  return (
    <div className="dashboard-container d-flex w-100 h-100">
      {navigateToForm && <Navigate to="/create-cluster" />}
      <SideBar />

      <div className="dashboard-content w-100 d-flex f-col h-100">
        <div className="clusterlist-title-wrapper d-flex">
          <Title text="Dashboard" textClassName="f-content-start" />
          <div className="clusterlst-create-button-wrapper">
            <Button
              text="New Cluster"
              onClick={() => setNavigateToForm(true)}
            />
          </div>
        </div>
        {loading && <Loader size="10rem" />}
        {response && !response.length && (
          <div className="emptyclusterlist-wrapper d-flex f-content-center">
            <EmptyClusterList />
          </div>
        )}
        {response && response.length && (
          <ClusterList loading={loading} clusters={response} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
