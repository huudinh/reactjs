import {useState} from "react";

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);

    return (<>
        <h2>{seconds}</h2>
        <button 
          onClick={() => setSeconds(seconds + 1)}
        >Click to add 1</button>
    </>);
}



import {useState} from "react";

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);

    function handleIncrementClick() {
        setSeconds(seconds + 1);
    }

    return (<>
        <h2>{seconds}</h2>
        <button 
          onClick={handleIncrementClick}
        >Click to add 1</button>
    </>);
}

