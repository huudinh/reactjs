// Process

import { useState } from "react";

export default function Stopwatch() {
    // hooks have to be at the top
    const [seconds, setSeconds] = useState(0);

    return (<>
        <h2>{seconds}</h2>
        {
            /* increment seconds state by 1, 
            when you click on the button*/
        }
        <button onClick={
            () => setSeconds(seconds + 1)
        }>Click to add 1</button>
    </>);
}

// Input

// <Stopwatch />

// Output

{
    <>
        <h2>0</h2>
        <button>Click to add 1</button>
    </>
}