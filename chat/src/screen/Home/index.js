import {signOut} from "firebase/auth";
import { auth } from '../../firebase';

const Home = () => {
    return (
        <div>
            <button onClick={()=>signOut(auth)}>logout</button>
        </div>
    )
}

export default Home;