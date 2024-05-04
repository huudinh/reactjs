import {useState, useEffect} from "react";

function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("effect is running");
    }, [counter]);

    return <button 
        onClick={() => setCounter(prev => prev + 1)}
    >Click me</button>;
}

export default App;

