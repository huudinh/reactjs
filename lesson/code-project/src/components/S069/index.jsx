import { useEffect, useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("effect running");
        return () => {
            console.log("effect cleaning up");
        }
    })

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={
                () => setCounter(prevCounter => prevCounter + 1)}
            >Add</button>
        </>
    );
}

export default App;