import { Formik, useField } from "formik";
import LoginValidationScheme from "../../ValidationSchemas/Login";

const FormField = ({ name, ...rest }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <input
        value={field.value}
        type="text"
        onChange={(value) => helpers.setValue(value.target.value)}
        className={`form-field-value ${name}-field`}
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
      <form>
        <FormField name="username" />
        <FormField name="password" />
      </form>
    </Formik>
  );
};

export default Form;
