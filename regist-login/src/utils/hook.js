import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const useLogout = (name) => {
    const [token, setToken] = useState(name);
    const navigate = useNavigate();

    useEffect(() => {
        setToken(localStorage.getItem(name));
    }, [name]);

    useEffect(() => {
        if(token == null || token == ''){
            navigate('/login')
        }
    })

    const handleLogout = () => {
        localStorage.setItem('name', '');
    }

    return {
        token: token,
        logout: handleLogout,
    };
}

const useLogin = (name) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem(name)){
            navigate('/main')
        }
    });
}

export { useLogout, useLogin };