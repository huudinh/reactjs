## Create Conversation

### Mục Lục

- [1. Sửa file src/firebase.js](#1)
- [2. Sửa file src/screen/Home/index.js](#2)
- [3. Tạo file src/component/SideBar/index.js](#3)
- [4. Tạo file src/component/SideBar/SideBar.modal.scss](#4)
- [5. Tạo file src/component/ConversationModal/index.js](#5)
- [6. Tạo file src/component/ConversationModal/ConversationModal.modal.scss](#6)
- [7. Sửa file file src/component/Button/index.js](#7)
- [8. Sửa file file src/component/Button/Button.modal.scss](#8)
- [9. Sửa file file src/screen/Register/index.js](#9)
- [10. Sửa file file src/screen/Login/index.js](#10)

### Giao diện Create Conversation

![Create-HTML-1](images/conversation-1.png)  

- Click Button New xuất hiện Modal Conversation => đây là chủ đề của đoạn hội thoại

- Click vào Button Cancel hoặc khu vực bên ngoài của Modal Conversation sẽ remove Modal này đi

- Click vào Create sẽ lưu thông tin chủ đề chat vào firestore


<a name="1"></a>
**1. Sửa file `src/firebase.js`**

```
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(app);
```

***Cloud Firestore là gì***

- Cloud Firestore là một Database linh hoạt và dễ mở rộng cho mobile, web và server được phát triển từ Firebase and Google Cloud Platform. 

- Cũng giống như Realtime Database, Cloud Firestore giúp cho việc đồng bộ dữ liệu giữa các ứng dụng phía client một các nhanh chóng (Realtime) và hộ trợ lưu offline data trong ứng dụng của bạn.

- Cloud Firestore là một cloud-hosted, NoSQL database mà các ứng dụng phía client có thể trực tiếp truy cập thông qua native SDKs. 

- Nó lưu dữ liệu theo mô hình dữ liệu NoSQL. 

- Dữ liệu được lưu trữ trong các file tài liệu chứa các trường được ánh xạ vào các giá trị. 

- Các file tài liệu này được lưu trữ trong các tập hợp chúng có thể sử dụng nó để tổ chức dữ liệu và truy vấn dữ liệu. 

- Cloud Firestore hỗ trợ rất nhiều kiểu dữ liệu từ đơn giản như String, Integer hay những kiểu dữ liệu phức tạp như các nested object.

***Realtime database và Cloud firestore***
- Cloud Firestore có thể được coi là phiên bản cải tiến của Realtime database, nó được cải tiến nhiều tính năng mới và tăng tốc độ truy vấn dữ liệu. 

- Nếu bạn đang sử dụng Realtime Database thì việc chuyển sang sử dụng Cloud firestore khá dễ dàng. Dưới đây là một số những ưu điểm của Cloud Firestore so với Realtime database:

    - Việc tổ chức lưu trữ dữ liệu phức tạp dễ dàng hơn so với Realtime database .

    - Có thể kết hợp việc filter, sort, ... trong một query, điều này không thể làm được với Realtime database.

    - Có thể truy vấn một collection hoặc một document mà không cần phải thông qua việc truy vấn toàn bộ collections giống như realtime database.

***Cài đặt Cloud firestore***

![Create-HTML-2](images/conversation-2.png) 
![Create-HTML-3](images/conversation-3.png) 
![Create-HTML-4](images/conversation-4.png) 
![Create-HTML-5](images/conversation-5.png) 
![Create-HTML-6](images/conversation-6.png) 
![Create-HTML-7](images/conversation-7.png) 
![Create-HTML-8](images/conversation-8.png) 







<a name="2"></a>
**2. Sửa file `src/screen/Home/index.js`**

```
import SideBar from "../../components/SideBar";

const Home = () => {
    return (
        <div>
            <SideBar />            
        </div>
    )
}

export default Home;
```

- Home là màn hình chính của ứng dụng sau khi User login thành công vào hệ thống

<a name="3"></a>
**3. Tạo file src/component/SideBar/index.js**

```
import clsx from 'clsx';
import styles from './SideBar.module.scss';
import ConversationModal from "../ConversationModal";
import { signOut } from "firebase/auth";
import { useState } from 'react';
import { auth } from "../../firebase";

const SideBar = () => {
    const [isConversation, setIsConversation] = useState(false);
    const handleClick = () => {
        setIsConversation(true);
    }

    const handeCancel = () => {
        setIsConversation(false);
    }

    return (
        <div className={clsx(styles.box)}>
            <button onClick={handleClick}>+ New</button>
            {isConversation && <ConversationModal handeCancel={handeCancel} />}
            <button onClick={() => signOut(auth)}>logout</button>
        </div>
    )
}

export default SideBar;
```
- Check trạng thái của Conversation nếu `isConversation` true thì thiện Modal, nếu false thì remove Modal 

- Nhận vào Event được gửi lên từ component `ConversationModal`

<a name="4"></a>
**4. Tạo file `src/component/SideBar/SideBar.modal.scss`**

```
.box{
    width: 200px;
}
```
- Kiểm tra xem nếu user chưa đăng nhập thì chuyển về màn hình Login

<a name="5"></a>

**5. Tạo file `src/component/ConversationModal/index.js`**

```
import clsx from 'clsx';
import styles from './ConversationModal.module.scss';
import Input from '../Input';
import Button from '../Button';
import { useState, useEffect } from "react";
import {useRef} from 'react';
import { collection, addDoc} from "firebase/firestore";
import { db, auth } from "../../firebase";

const ConversationModal = (props) => {
    const [formValues, setFormValues] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false); 
    const boxRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const createPost = async () => {
        const docRef = await addDoc(collection(db, "conversations"), {
            name: formValues.conversation,
            createBy: auth.currentUser.email,
            users: [auth.currentUser.email],
        });
        // console.log("Document written with ID: ", docRef.id);
        props.handeCancel();
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            createPost();
        }
    }, [formErrors]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        console.log(formValues);
    }

    const validate = (values) => {
        const errors = {};

        if (!values.conversation) {
            errors.conversation = "Please type to create Conversation!";
        }

        return errors;
    }

    const handleCancelBox = (e) => {
        if(e.target == boxRef.current){
            props.handeCancel();
        }
    }

    const handleCancel = () => {
        props.handeCancel();
    }

    return (
        <div className={clsx(styles.box)} onClick={handleCancelBox} ref={boxRef}>
            <form onSubmit={handleSubmit}>
                <Input
                    default
                    label="Conversation Name"
                    name="conversation"
                    value={formValues.conversation}
                    onChange={handleChange}
                    error={formErrors.conversation}
                />
                <div className={clsx(styles.footer)}>
                    <Button warning type="Button" handleClick={handleCancel}>Cancel</Button>
                    <Button success type="Submit" >Create</Button>
                </div>
            </form>
        </div>
    )
}

export default ConversationModal;
```
- Kế thừa component Input, Button để lưu thông tin conversation
- Custom lại component Button để 2 button có thể xếp cùng nhau, fix lại button ở component Login và Resister


<a name="6"></a>

**6. Tạo file `src/component/ConversationModal/ConversationModal.modal.scss`**

```
.box{
    background-color: rgba(0,0,0,.3);
    position: fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    form{
        padding:10px;
        border-radius: 5px;
        background-color: #fff;
        width:350px;
    }
}
.footer{
    display: flex;
    justify-content: end;
    button{
        padding:4px 15px;
        border-radius: 6px;
    }
}
```
<a name="7"></a>

**7. Sửa file `src/component/Button/index.js`**

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
        [styles.block]: props.block,
        [styles.round]: props.round,
    });
    
    return (
        <button className={classes} t={props.id} onClick={props.handleClick} type={props.type} disabled={props.disabled} >
            {props.children} 
        </button>
    )
}
export default Button;
```
<a name="8"></a>

**8. Sửa file `src/component/Button/Button.modal.scss`**

```
.btn {
    border: 1px solid #ccc;
    margin:3px;
    cursor: pointer;
    transition: .6s;
    color: #fff;
    &:hover{
        cursor: pointer;
    }
}
.round{
    border-radius: 25px;
    padding: 10px 25px;
}

.block{
    width: 100%;
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
<a name="9"></a>

**9. Sửa file file `src/screen/Register/index.js`**

```
import { Link } from 'react-router-dom';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
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
                    // console.log(errorMessage);
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
            <h1 className="formTitle">ĐĂNG KÝ</h1>
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
                <Button success block round >Register</Button>
            </form>
            <p className="formLink">
                Click to <Link to="/login">Login</Link>
            </p>
        </div>
    )

}

export default Register;
```

- Chỉ cần sửa lại các props được truyền vào Button `Register`

<a name="10"></a>

**10. Sửa file file `src/screen/Login/index.js`**
```
import { Link, useNavigate } from 'react-router-dom';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const intialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);    
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            // Call API
            const email = formValues.email;
            const password = formValues.password;
            // Sign in Firebase
            signInWithEmailAndPassword(auth, email, password)
                .then((userInfo)=>{
                    // console.log(userInfo);
                    navigate('/');
                })
                .catch((err)=>{
                    // console.log(err)
                    setError(err)
                })
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

        return errors;
    }

    return (
        <div className="form">
            <h1 className="formTitle">ĐĂNG NHẬP</h1>
            {error != '' && <p className='formError'>Something went wrong</p>}
            <form onSubmit={handleSubmit}>
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
                <Button success block round >Login</Button>
            </form>
            <p className="formLink">
                Click to <Link to="/register">Create new acount</Link>
            </p>
        </div>
    )
}

export default Login;
```
- Chỉ cần sửa lại các props được truyền vào Button `Login`


*Bài tiếp theo [Màn hình Home](/chat/lesson/home.md)*
