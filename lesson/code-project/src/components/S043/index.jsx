import {useState} from "react";

function App() {
    const [count, setCount] = useState(5);
    const [lives, setLives] = useState(3);

    return (
        <button 
            onClick={() => setCount(count - 1)}
        >Click me</button>
    );
}


import {useState} from "react";

function App(props) {
    // this will NOT work
    if (some_condition){
        const [count, useCount] = useState(0);
    }
}

