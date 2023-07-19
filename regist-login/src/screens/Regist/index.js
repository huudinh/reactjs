import axios from 'axios';
import RegistForm from "./RegistForm";
import bcrypt from 'bcryptjs';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/const';

function Regist() {
    const navigate = useNavigate();

    // Ma hoa
    const pw = '123'
    const hashedPassword = bcrypt.hashSync(pw, 10)
    console.log(pw);
    console.log(hashedPassword);
    // Add API
    window.localStorage.setItem('login', hashedPassword);

    // Read API
    const getHashedPassword = localStorage.getItem('login');

    // So sanh
    bcrypt.compare(pw, getHashedPassword, function(err, isMatch){
        if(err){
            throw err;
        } else if(!isMatch){
            console.log("Password doesn't matches!")
        } else {
            console.log("Password matches!")
        }
    });


    const handleRegist = async (db) => {
        await axios.post(`${API_BASE_URL}/usersa`, {
            name: db.name,
            email: db.email,
            password: bcrypt.hashSync(db.password, 10)
        })
        .then(function (response) {
            console.log(response);
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
                <p class="formLink">
                    Click to <Link to="/login">Login</Link>
                </p>
            </div>
        </>
    )
}

export default Regist;