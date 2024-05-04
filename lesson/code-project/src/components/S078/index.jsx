import {useState, useEffect} from "react";
import data from "./data.js";

function App() {
    const [random, setRandom] = useState(Math.random());

    // this is BETTER for performance
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
    });

    return <>
        <h1>{random}</h1>
        <button>Re-render</button>
    </>
}

export default App;