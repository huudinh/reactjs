import {useState, useEffect} from "react";

function App() {
    const [random, setRandom] = useState(Math.random());

    useEffect(() => {
        // every time the value of random changes, 
        // save it to localStorage
        localStorage.setItem("random", random);
    }, [random]);

    return <button 
        onClick={() => setRandom(Math.random())}
    >Re-render</button>;
}

export default App;


