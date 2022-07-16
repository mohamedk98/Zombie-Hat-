import React from "react";
import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log({ ...values });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        id="email"
        className="input input-bordered input-primary w-full max-w-xs"
        {...formik.getFieldProps("email")}
      />

      <input
        type="password"
        placeholder="password"
        id="password"
        className="input input-bordered input-primary w-full max-w-xs"
        {...formik.getFieldProps("password")}
      />
      {/* {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null} */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
