import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        (async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setUsers(data);
        })();
    }, []);
}

export default App;