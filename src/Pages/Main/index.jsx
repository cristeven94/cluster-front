import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ClusterDetail from "../ClusterDetail";
import Login from "../Login";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="cluster-detail" element={<ClusterDetail />} />
      <Route path="/new-cluster" element={<div />} />
    </Routes>
  );
};

export default Main;
