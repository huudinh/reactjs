import LoginForm from "./LoginForm";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        setTimeout(() => {
            navigate('/main');
        }, 3000)
    };

    return (
        <>
            <div className="form">
                <h1 className="formTitle">ĐĂNG NHẬP</h1>
                <LoginForm onClick={handleLogin}  />
                <p class="formLink">
                    Click to <Link to="/regist">Create new account</Link>
                </p>
            </div>
        </>
    )
}

export default Login;