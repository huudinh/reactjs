import {useState, useEffect} from "react";

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        });
    }, []);
    
    // this will work without breaking 👍
    return <>
        <h1>Users</h1>
        <ul>
            {users && 
                users.map(
                    user => <li key={user.id}>{user.name}</li>
                )
            }
        </ul>
  </>
}

export default App;