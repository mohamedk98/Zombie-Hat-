import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      //Reset error state on submitting
      setFormError("");
      axios
        .post("http://localhost:3000/login")
        .then(() => {
          navigate("/"); // Navigate to home after submission
        })
        .catch((error) => {
          //Get error message from the API and add it to the state
          setFormError(error.response.data.message);
        });
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col space-y-4 mx-auto items-center justify-center mt-5"
    >
      <input
        type="email"
        placeholder="Email"
        id="email"
        name="email"
        className="input input-bordered input-primary w-full max-w-xs"
        {...formik.getFieldProps("email")}
      />

      <input
        type="password"
        placeholder="password"
        id="password"
        name="password"
        className="input input-bordered input-primary w-full max-w-xs"
        {...formik.getFieldProps("password")}
      />
      {formError && <div className="text-red-500">{formError}</div>}

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Login;