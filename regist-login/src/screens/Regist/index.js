import axios from 'axios';
import RegistForm from "./RegistForm";
import bcrypt from 'bcryptjs';
import {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/const';
import { useCheckLogin } from '../../utils/hook';

function Regist() {
    const navigate = useNavigate();
    const check = useCheckLogin();

    useEffect(()=> {
        check.login();
    });

    const handleRegist = async (db) => {
        await axios.post(`${API_BASE_URL}/users`, {
            name: db.name,
            email: db.email,
            password: bcrypt.hashSync(db.password, 10)
        })
        .then(function () {
            setTimeout(() => {
                navigate('/login');
            }, 1000)
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
        <>
            <div className="form">
                <h1 className="formTitle">ĐĂNG KÝ</h1>
                <RegistForm onClick={handleRegist} />
                <p className="formLink">
                    Click to <Link to="/login">Login</Link>
                </p>
            </div>
        </>
    )
}

export default Regist;