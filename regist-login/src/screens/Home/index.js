import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

const Home = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate('/login');
    }, [navigate]);

    return (
        <DefaultLayout>
            <h1>Home</h1>
        </DefaultLayout>
    )
}

export default Home;