## Login & Regist Component / Login

### Giao diện Login

**1. Làm việc với file index.js**

```
import LoginForm from "./LoginForm";
import { Link } from 'react-router-dom';
import Loading from "../../components/Loading";
import {useEffect, useState} from 'react'
import { useCheckLogin } from "../../utils/hook";

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const check = useCheckLogin();    
    
    useEffect(()=> {
        check.login();        
    });
    
    const handleLogin = () => {  
        setIsLoading(true);              
        setTimeout(() => {
            check.login();
            setIsLoading(false);
        }, 1000)
    };

    return (
        <>  
            {isLoading && <Loading type="spinningBubbles" color="#eee" />}          
            <div className="form">
                <h1 className="formTitle">ĐĂNG NHẬP</h1>
                <LoginForm onClick={handleLogin}  />
                <p className="formLink">
                    Click to <Link to="/regist">Create new account</Link>
                </p>
            </div>
        </>
    )
}

export default Login;
```
- File Login/index.js trả về bộ khung của giao diện Login như tiêu đề, link chuyển hướng về giao diện `Register` và `component LoginForm`

- Check trạng thái của Login


**2. Làm việc với component LoginForm**
```
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
      getUser() 
      .then(db => {
          const users = db.data;
          const result = users.find(user => {
            return (
              (values.email === user.email) && 
              (bcrypt.compareSync(values.password, user.password))
            );
          });

          if(result === undefined){
            alert('Tài khoản hoặc mật khẩu chưa đúng');
            setSubmitting(false);
          } else {
            setSubmitting(true);
            props.onClick();
            localStorage.setItem('name', result.name);
          }
        })
        .catch(function (error) {
          console.log(error);
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
```
- Render Conponent Input, Button
  
- Import thư viện Formik và Yup để Validate dữ liệu Login

- Sử dụng Axiox để đọc dữ data từ API

- Sử dụng bcrypt để so sánh mật khẩu nhập vào từ UI và API
