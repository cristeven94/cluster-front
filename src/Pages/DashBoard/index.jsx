import React from "react";
import EmptyClusterList from "../../Components/EmptyClusterList";
import SideBar from "../../Components/SideBar";
import "./index.css";
const Dashboard = ({ clusters = [] }) => {
  return (
    <div className="dashboard-container d-flex w-100 h-100">
      <SideBar />
      {!clusters.length && (
        <div className="emptyclusterlist-wrapper d-flex f-content-center">
          <EmptyClusterList />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
