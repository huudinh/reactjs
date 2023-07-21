import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import bcrypt from 'bcryptjs';
import Button from "../../components/Button";
import Input from "../../components/Input";
import { getUser } from '../../api/user';

const LoginForm = (props) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      // Get API User
      getUser() 
        .then(db => {
          const users = db.data;
          const result = users.find(user => {
            return (
              (values.email == user.email) && 
              (bcrypt.compareSync(values.password, user.password))
            );
          });

          // console.log(result);
          if(result == undefined){
            alert('Tài khoản hoặc mật khẩu chưa đúng');
            setSubmitting(false);
          } else {
            setSubmitting(true);
            props.onClick();
          }
        })
        .catch(function (error) {
          console.log(error);
          alert('API Error');
          setSubmitting(false);
        });   
    }}

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Không được để trống"),
      password: Yup.string()
        .required("Chưa nhập mật khẩu.")
        .min(8, "Mật khẩu quá ngắn - ít nhất phải 8 ký tự.")
        .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa nhất một số.")
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
        <>        
        <form onSubmit={handleSubmit}>
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
          <Button success disabled={isSubmitting}>Đăng nhập</Button>
        </form>
        </>          
      );
    }}
  </Formik>
);

export default LoginForm;