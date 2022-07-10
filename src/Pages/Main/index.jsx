import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Login";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/new-cluster" element={<div />} />
    </Routes>
  );
};

export default Main;
