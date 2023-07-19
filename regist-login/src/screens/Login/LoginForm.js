import React from "react";
import { Formik } from "formik";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as Yup from "yup";
import { getUser } from '../../api/user';
import bcrypt from 'bcryptjs';

const LoginForm = (props) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {

      // Get API User
      getUser() 
        .then(db => {
          let check = '';
          for(let item of db.data){
            if(item.email !== values.email){
              alert('Tài khoản hoặc mật khẩu chưa đúng');
              setSubmitting(false);
              return;
            }

            // Check pass
            if(bcrypt.compareSync(values.password, item.password)){
              check = true;
              props.onClick();
              setSubmitting(true);
            } else {
              check = false;
              setSubmitting(false);
            }
          }
          if(!check){
            alert('Tài khoản hoặc mật khẩu chưa đúng');
          }
        })
        .catch(function (error) {
          console.log(error);
          alert('Error Network');
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