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

- Sử dụng component `Link` để điều hướng và màn hình đăng ký


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
- Render Components Input, Button
  
- Import thư viện Formik và Yup để Validate dữ liệu Login

- Sử dụng Axiox để đọc dữ data từ API

- Sử dụng bcrypt để so sánh mật khẩu nhập vào từ UI và API

**3. Làm việc với component Input**
```
import clsx from 'clsx';
import styles from './Input.module.scss';

function Input(props) {
    const classes = clsx(styles.input,  {
        [styles.default]: props.default,
        [styles.primary]: props.primary,
        [styles.success]: props.success,
        [styles.info]: props.info,
        [styles.warning]: props.warning,
        [styles.danger]: props.danger,
        [styles.disabled]: props.disabled,
        [styles.error]:props.className
    });

    const feedback = clsx(styles.feedback);
    
    return (
        <>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                id={props.name}
                name={props.name}
                type={props.type}
                placeholder={'Enter your ' + props.label}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                className={classes}
            />
            {props.className && (
                <div className={feedback}>{props.errorMessage}</div>
            )}
        </>
    )
}
export default Input;
```
- File index.js sử dụng thư viện clsx và kỹ thuật module để đọc class

- Render ra lable, input, Error

**4. Làm việc với Input.module.scss**
```
.input {
    padding: 10px 15px;
    border-radius: 25px;
    cursor: pointer;
    transition: .6s;
    width: 100%;
    color: #fff;
    margin-bottom: 10px;
    background: #eee;
    border: 1px solid #eee;
}

label,
input {
    display: block;
    width: 100%;
}

label {
    margin-bottom: 5px;
    height: 22px;
    margin-left: 15px;
}

input.error {
    border-color: red;
}

.feedback {
    color: rgb(235, 54, 54);
    margin-top: -5px;
    font-size: 13px;
    padding-left: 15px;
    font-style: italic;
}
.default {
    color:#000;
}
.primary {
    background-color: #337ab7;
    border-color: #2e6da4;
}

.success {
    background-color: #4caf50;
    border-color: #4cae4c;
    &:hover {
        cursor: pointer;
        background-color: #1da224;
    }
}
.info {
    background-color: #5bc0de;
    border-color: #46b8da;
}

.warning {
    background-color: #f0ad4e;
    border-color: #eea236;
}

.danger {
    background-color: #d9534f;
    border-color: #d43f3a;
}

.disabled{
    opacity: .5;
    pointer-events: none;
}
```

**5. Làm việc với component Button**
```
import clsx from 'clsx';
import styles from './Button.module.scss';

function Button(props) {
    const classes = clsx(styles.btn, {
        [styles.default]: props.default,
        [styles.edit]: props.edit,
        [styles.primary]: props.primary,
        [styles.success]: props.success,
        [styles.info]: props.info,
        [styles.warning]: props.warning,
        [styles.danger]: props.danger,
        [styles.disabled]: props.disabled,
    });
    
    return (
        <button className={classes} t={props.id} onClick={props.handleClick} type="submit" disabled={props.disabled} >
            {props.children} 
        </button>
    )
}
export default Button;
```
**6. Làm việc với Button.module.scss**
```
.btn {
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 25px;
    margin:3px;
    cursor: pointer;
    transition: .6s;
    width: 100%;
    color: #fff;
    &:hover{
        cursor: pointer;
    }
}
.edit{
    border-radius: 4px;
    width:auto;
    padding: 6px;
}
.default {
    color:#000;
}
.primary {
    background-color: #337ab7;
    border-color: #2e6da4;
}

.success {
    background-color: #4caf50;
    border-color: #4cae4c;
    &:hover {
        background-color: #1da224;
    }
}
.info {
    background-color: #5bc0de;
    border-color: #46b8da;
    &:hover{
        background-color: #31b0d5;
        border-color: #269abc;
    }
}

.warning {
    background-color: #f0ad4e;
    border-color: #eea236;
    &:hover{
        background-color: #ec971f;
        border-color: #d58512;
    }
}

.danger {
    background-color: #d9534f;
    border-color: #d43f3a;
    &:hover{
        background-color: #c9302c;
        border-color: #ac2925;
    }
}

.disabled{
    opacity: .5;
    pointer-events: none;
}

```
**7. Xây dựng file src/api/user.js**

```
import http from "./http";

export const getUser = async () => {
    return await http.get(`/users`)
};
export const deleteUser = async (id) => {
    return await http.delete(`/users/${id}`)
};

export const editUser = async (id, data) => {
    return await http.put(`/users/${id}`, data)
};

```
**8. Xây dựng file src/api/http.js**
```
import axios from "axios";
import { API_BASE_URL } from "../utils/const";

const http = axios.create({
    baseURL: API_BASE_URL,
})

export default http
```

**9. Xây dựng file src/utils/const.js**
```
export const API_BASE_URL = 'http://localhost:3100';
```
