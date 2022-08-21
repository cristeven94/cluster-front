import React from "react";
import { Formik, useField } from "formik";
import Button from "../../Button";
import LoginValidationScheme from "../../../ValidationSchemas/Login";
import useFetch from "../../../Hooks/useFetch";
import "./index.css";
import { Navigate } from "react-router-dom";

const FormField = ({ name, ...rest }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <input
        value={field.value}
        type="text"
        onChange={(value) => helpers.setValue(value.target.value)}
        className={`form-field ${name}-field`}
        {...rest}
      />
      {meta.error && <p className="field-error"> {meta.error} </p>}
    </>
  );
};

const Form = ({}) => {
  const [isLoginValid, setIsLoginValid] = React.useState(false);
  // const { error, loading, response } = useFetch({ endpoint: "all" });
  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginValidationScheme}
        onSubmit={(values) => setIsLoginValid(true)}
      >
        {({ handleSubmit }) => (
          <form className="form d-flex h-100 f-col row-gap-2">
            <FormField name="username" placeholder="username" />
            <FormField name="password" placeholder="password" type="password" />
            <Button
              className="d-flex f-content-end"
              onClick={handleSubmit}
              text="Log in"
            />
          </form>
        )}
      </Formik>
      {isLoginValid && <Navigate to="/dashboard" />}
    </>
  );
};

export default Form;
