import {useState, useEffect} from "react";

// THIS IS INCORRECT
function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // this will end up creating an 
        // infinite loop
        setCount(prevCount => prevCount + 1);
    });
}

export default App;

