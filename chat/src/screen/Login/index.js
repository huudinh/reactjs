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