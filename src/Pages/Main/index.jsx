import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ClusterDetail from "../ClusterDetail";
import CreateCluster from "../CreateCluster";
import Dashboard from "../DashBoard";
import Login from "../Login";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cluster-detail" element={<ClusterDetail />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-cluster" element={<CreateCluster />} />
    </Routes>
  );
};

export default Main;
