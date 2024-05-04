// index.js
import {useState} from "react";

function App() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return <div>
        <h2>Hello {name}</h2>
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" 
                value={name} 
                onChange={handleNameChange} />
        </form>
    </div>
}


// index.js
import NameForm from "./NameForm.js";

function App() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return <div>
        <h2>Hello {name}</h2>
        <NameForm 
            name={name} 
            onNameChange={handleNameChange} />
    </div>
}


//NameForm.js
export default function NameForm(props) {

    return <form>
        <label htmlFor="name">Name: </label>
        <input 
            type="text" 
            id="name" 
            value={props.name} 
            onChange={props.onNameChange} />
    </form>
}

