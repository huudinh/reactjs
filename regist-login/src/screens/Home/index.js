import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/login');
        }, 3000)
    }, [navigate]);

    return (
        <DefaultLayout>
            <h1>Home</h1>
        </DefaultLayout>
    )
}

export default Home;