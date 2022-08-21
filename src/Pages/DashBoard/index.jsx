import React from "react";
import ClusterList from "../../Components/ClusterList";
import EmptyClusterList from "../../Components/EmptyClusterList";
import SideBar from "../../Components/SideBar";
import "./index.css";
const Dashboard = ({ clusters = [] }) => {
  return (
    <div className="dashboard-container d-flex w-100 h-100">
      <SideBar />
      <div className="dashboard-content w-100 d-flex h-100">
        {!clusters.length && (
          <div className="emptyclusterlist-wrapper d-flex f-content-center">
            <EmptyClusterList />
          </div>
        )}
        {clusters.length && <ClusterList clusters={clusters} />}
      </div>
    </div>
  );
};

export default Dashboard;
