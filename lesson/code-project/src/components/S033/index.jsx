// Process

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>{count} times clicked!</div>
            <button onClick={
                () => setCount(count + 1)
            }>Add 1</button>
        </>
    );
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