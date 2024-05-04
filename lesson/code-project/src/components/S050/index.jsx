import {useState} from "react";

function Users() {
    // collection of user ids
    const [users, setUsers] = useState([4, 8, 10, 17, 13]);

    function handleRemoveClick() {
        // remember array immutability ;)
        setUsers(users.slice(1));
    }

    return <>
        <ul>{
            users.map(user => <li key={user}>{user}</li>)
        }</ul>
        <button 
            onClick={handleRemoveClick}
        >Remove first user</button>
    </>;
}


Users()