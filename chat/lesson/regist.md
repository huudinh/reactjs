## Chat / Regist

### I. Mục Lục

- [1. Xây dựng component Input](#1)
- [2. Xây dựng component Button](#2)
- [3. Cấu hình firebase](#3)
- [4. Xây dựng Form Regist](#4)


### II. Màn hình Regist

Trong bài viết này chúng ta sẽ tìm hiểu về Components để xây dựng các thành phần của Form, Validate khi người dùng tương tác với Form và kết nối với Firebase để lưu trữ thông tin Regist.

![Create-HTML-1](images/regist-1.png)  

<a name="1"></a>

**1. Xây dựng component Input**

Ta để ý thấy trong 1 Form có rất nhiều các trường dữ liệu tuy nhiên nó đếu có các thông tin như Tên Input, Input, Error. Vì thế ta sẽ tạo 1 component Input chung cho các trường dữ liệu.

- Tạo file src/components/Input/index.js

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
        // Add Class Error
        [styles.error]:props.error
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
            {props.error && (
                <div className={feedback}>{props.error}</div>
            )}
        </>
    )
}
export default Input;
```

- Tạo file src/components/Input/Input.module.scss

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

<a name="2"></a>
    
**2. Xây dựng component Button**

Chúng ta có 2 màn hình Regist và Login đều có nút Button để người dùng Submit form, vì thế ta sẽ tạo 1 button có thể sử dụng chung cho 2 giao diện.

- Tạo file src/components/Button/index.js

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

- Tạo file src/components/Button/Button.module.scss

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

<a name="3"></a>
    
**3. Cấu hình Firebase**

- Vào Terminal gõ lệnh `npm install firebase`

- Tạo file `src/firebase.js`

```
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWcAbMaN3G9nLx8JWxcMaJ7KxSasNtk6Y",
    authDomain: "chat-ci-d12.firebaseapp.com",
    projectId: "chat-ci-d12",
    storageBucket: "chat-ci-d12.appspot.com",
    messagingSenderId: "17449955406",
    appId: "1:17449955406:web:9b15f6cce05d4e13d6531f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
```

- Các bước để có đoạn mã trên

![Create-HTML-2](images/regist-2.png)  
![Create-HTML-3](images/regist-3.png)  
![Create-HTML-4](images/regist-4.png)  
![Create-HTML-5](images/regist-5.png)  
![Create-HTML-6](images/regist-6.png)  
![Create-HTML-7](images/regist-7.png)  
![Create-HTML-8](images/regist-8.png)  
![Create-HTML-9](images/regist-9.png)  
![Create-HTML-10](images/regist-10.png)  
![Create-HTML-11](images/regist-11.png)  
![Create-HTML-12](images/regist-12.png)  

<a name="4"></a>
    
**4. Xây dựng Form Regist**

Tạo file `src/screen/Regist/index.js`

```
import { Link } from 'react-router-dom';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
    const intialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
            // Call API
            const email = formValues.email;
            const password = formValues.password;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        }
    }, [formErrors]);    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!values.username) {
            errors.username = "Username is required!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length <= 4) {
            errors.password = "Password must be more than 4 characters!" + values.password;
        }else if (values.password.length > 16) {
            errors.password = "Password cannot be more than 16 characters!";
        }

        if(values.confirmPassword !== values.password) {
            errors.confirmPassword = "Confirm password not matched!";
        }
        return errors;
    }

    return (
        <div className="form">
            <h1 className="formTitle">ĐĂNG NHẬP</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    default
                    label="Name"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    error={formErrors.username}
                />
                <Input
                    default
                    label="Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    error={formErrors.email}
                />
                <Input
                    default
                    label="Password"
                    name="password"
                    type="password"
                    value={formValues.password}
                    onChange={handleChange}
                    error={formErrors.password}
                />
                <Input
                    default
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                    error={formErrors.confirmPassword}
                />
                <Button success >Hoàn Thành</Button>
            </form>
            <p className="formLink">
                Click to <Link to="/login">Login</Link>
            </p>
        </div>
    )

}

export default Register;
```

*Bài tiếp theo [Màn hình Login](/chat/lesson/login.md)*