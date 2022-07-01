import * as yup from "yup";

const LoginValidationScheme = yup.object().shape({
  username: yup.string().required(""),
  password: yup.string().required(""),
});

export default LoginValidationScheme;
