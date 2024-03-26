// Process

import { useState } from "react";

export default function Stopwatch() {
    const [seconds, setSeconds] = useState(0);

    return <div>{seconds}</div>
}

// Input

// <Stopwatch />

// Output

{
    <>
        <div>0</div> 
    </>
} 