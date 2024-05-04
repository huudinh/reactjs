import { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count)
    }, [count]);

    function handleButtonClick() {
        setCount(prevCount => prevCount + 1)
    }

    return <>
        <h1>{count}</h1>
        <button
            onClick={handleButtonClick}
        >Click me</button>
    </>;
}

export default App;

    