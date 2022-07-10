import React from "react";
import Form from "../../Components/Form/Login";
import Title from "../../Components/Title";
import "./index.css";

const Login = ({}) => {
  return (
    <div className="login-page-container d-flex f-col">
      <div className="login-left-container h-100">
        <div className="page-title-container">
          <Title text="Cluster Creation" />
        </div>
        <Form />
      </div>
      <div className="login-right-container"></div>
    </div>
  );
};

export default Login;
