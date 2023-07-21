import LoginForm from "./LoginForm";
import { Link, useNavigate } from 'react-router-dom';
import Loading from "../../components/Loading";
import {useState} from 'react'

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
        
    const handleLogin = () => {  
        setIsLoading(true);      
        setTimeout(() => {
            navigate('/main');
            setIsLoading(false);
        }, 3000)
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