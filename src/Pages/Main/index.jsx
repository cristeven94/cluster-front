import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ClusterDetail from "../ClusterDetail";
import CreateCluster from "../CreateCluster";
import Dashboard from "../DashBoard";
import Login from "../Login";

const Main = () => {
  // const { error, loading, response } = useFetch({ endpoint: ENDPOINTS.ALL });
  const clusters = [
    {
      id: 1,
      user: { id: 1, username: "admin" },
      cloud_provider_id: { id: 1, cloud_name: "Local" },
      application_id: { id: 1, application_name: "OpenFaaS" },
      nodes: [],
      cluster_name: "Cluster1",
      agents_quantity: 1,
      agents_memory: 1,
      date_created: "2022-06-28",
      is_running: false,
      is_active: false,
    },
    {
      id: 2,
      user: { id: 1, username: "admin" },
      cloud_provider_id: { id: 1, cloud_name: "Local" },
      application_id: { id: 1, application_name: "OpenFaaS" },
      nodes: [],
      cluster_name: "Cluster2",
      agents_quantity: 1,
      agents_memory: 1,
      date_created: "2022-06-28",
      is_running: false,
      is_active: false,
    },
    {
      id: 3,
      user: { id: 1, username: "admin" },
      cloud_provider_id: { id: 1, cloud_name: "Local" },
      application_id: { id: 1, application_name: "OpenFaaS" },
      nodes: [],
      cluster_name: "Cluster2",
      agents_quantity: 1,
      agents_memory: 1,
      date_created: "2022-06-28",
      is_running: false,
      is_active: true,
    },
    {
      id: 4,
      user: { id: 1, username: "admin" },
      cloud_provider_id: { id: 1, cloud_name: "Local" },
      application_id: { id: 1, application_name: "OpenFaaS" },
      nodes: [
        {
          id: 1,
          node_name: "Node1",
          cpu_usage: 1.0,
          ram_usage: 1,
          is_active: true,
          cluster_id: 4,
        },
      ],
      cluster_name: "Cluster2",
      agents_quantity: 1,
      agents_memory: 1,
      date_created: "2022-06-28",
      is_running: false,
      is_active: true,
    },
    {
      id: 5,
      user: { id: 1, username: "admin" },
      cloud_provider_id: { id: 1, cloud_name: "Local" },
      application_id: { id: 1, application_name: "OpenFaaS" },
      nodes: [],
      cluster_name: "Cluster",
      agents_quantity: 1,
      agents_memory: 1,
      date_created: "2022-06-29",
      is_running: false,
      is_active: true,
    },
    {
      id: 6,
      user: { id: 1, username: "admin" },
      cloud_provider_id: { id: 1, cloud_name: "Local" },
      application_id: { id: 1, application_name: "OpenFaaS" },
      nodes: [
        {
          id: 2,
          node_name: "Node1",
          cpu_usage: 1.0,
          ram_usage: 1,
          is_active: true,
          cluster_id: 6,
        },
      ],
      cluster_name: "Cluster12",
      agents_quantity: 1,
      agents_memory: 1,
      date_created: "2022-07-08",
      is_running: false,
      is_active: true,
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cluster-detail/:cluster_id"
        element={<ClusterDetail clusters={clusters} />}
      />
      <Route path="/dashboard" element={<Dashboard clusters={clusters} />} />
      <Route path="/create-cluster" element={<CreateCluster />} />
    </Routes>
  );
};

export default Main;
