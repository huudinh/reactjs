import React from "react";
import { Formik } from "formik";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as Yup from "yup";

const RegistForm = (props) => (
  <Formik
    initialValues={{ name: "", email: "", password: "", confirmPassword:"" }}

    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        props.onClick(values);
        setSubmitting(true);
      }, 500);
    }}

    validationSchema={Yup.object().shape({
      name: Yup.string()
        .required("Không được để trống"),
      email: Yup.string()
        .email()
        .required("Không được để trống"),
      password: Yup.string()
        .required("Chưa nhập mật khẩu.")
        .min(8, "Mật khẩu quá ngắn - ít nhất phải 8 ký tự.")
        .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa nhất một số."),
      confirmPassword: Yup.string()
        .required("Chưa nhập mật khẩu.")
        .oneOf([Yup.ref("password"), null], "Passwords chưa khớp")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <form onSubmit={handleSubmit}>
          <Input
            default
            label="Name" 
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name && "error"}
            errorMessage={errors.name}
          />
          <Input
            default
            label="Email" 
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
            errorMessage={errors.email}
          />
          <Input
            default
            label="Password" 
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
            errorMessage={errors.password}
          />
          <Input
            default
            label="Confirm Password" 
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.confirmPassword && touched.confirmPassword && "error"}
            errorMessage={errors.confirmPassword}
          />
          <Button success disabled={isSubmitting}>Hoàn Thành</Button>
        </form>
      );
    }}
  </Formik>
);

export default RegistForm;
