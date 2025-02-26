import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormikForm = () => {
  const validate = (formValues) => {
    const error = {};
    if (!formValues.name) {
      error.name = "Name is required";
    }
    if (!formValues.email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      error.email = "Email is Invalid";
    }
    if (!formValues.password) {
      error.password = "Password is required";
    } else if (formValues.password.length < 6) {
      error.password = "Password must be at least 6 characters long";
    }
    return error;
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validate={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Name: </label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage component="div" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage component="div" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage component="div" name="password" />
        </div>
        <button>Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
