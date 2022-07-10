import React from "react";
import { Formik, useField } from "formik";
import Button from "../../Button";
import LoginValidationScheme from "../../../ValidationSchemas/Login";
import "./index.css";

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
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginValidationScheme}
      onSubmit={(values) => console.log(values)}
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
  );
};

export default Form;
