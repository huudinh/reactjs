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

