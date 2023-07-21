import { useState, useEffect } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const [token, setToken] = useState(localStorage.getItem('name'));
    const navigate = useNavigate();

    useEffect(() => {
        if(token == null || token == ''){
            navigate('/login')
        }
    })

    const handleLogout = () => {
        localStorage.setItem('name', '');
    }

    return (
        <DefaultLayout>
            <h1>Xin chào bạn {localStorage.getItem('name')}</h1>
            <p>Click to <Link onClick={handleLogout} to="/login">Logout</Link></p>
        </DefaultLayout>
    )
}

export default Main;