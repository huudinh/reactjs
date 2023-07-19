import DefaultLayout from "../../layouts/DefaultLayout";
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <DefaultLayout>
            <h1>Xin chào bạn {localStorage.getItem('name')}</h1>
            <p>Click to <Link to="/login">Logout</Link></p>
        </DefaultLayout>
    )
}

export default Main;