// Process

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrementClick() {
        setCount(count + 1);
    }
    
    return (<>
        <div>{count} times clicked!</div>
        <button onClick={handleIncrementClick}>Add 1</button>
    </>);
}

// Input

<Counter />

// Output
{
    <>
        <div>0  times clicked!</div>
        <button>Add 1</button>
    </>

}