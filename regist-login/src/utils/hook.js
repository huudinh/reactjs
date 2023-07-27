import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
    const [token, setToken] = useState('name');
    const navigate = useNavigate();

    useEffect(() => {
        setToken(localStorage.getItem('name'));
    },[token]);

    useEffect(() => {
        if(token == null || token === ''){
            navigate('/login')
        }
    },[token, navigate])

    const handleLogout = () => {
        localStorage.clear();
    }

    return {
        token: token,
        logout: handleLogout,
    };
}

const useCheckLogin = () => {
    const navigate = useNavigate();

    const handleCheckLogin = () => {
        if(localStorage.getItem('name')){
            navigate('/main');
        }
    }

    return {
        login: handleCheckLogin
    };
}

export { useLogout, useCheckLogin };