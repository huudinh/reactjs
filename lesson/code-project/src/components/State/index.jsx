import { useState } from "react";

// RS30 Import State
// export default function Stopwatch(props){
   
//     const [theme, setTheme] = useState(props.theme);

//     console.log(theme); 
// }

// <Stopwatch theme="dark" />



// RS31 Khởi tạo State
// export default function Stopwatch() {
//     const [seconds, setSeconds] = useState(0);

//     return <div>{seconds}</div>
// }

// <Stopwatch />


// RS32 Update State
// export default function Stopwatch() {
//     // hooks have to be at the top
//     const [seconds, setSeconds] = useState(0);

//     return (<>
//         <h2>{seconds}</h2>
//         {/* increment seconds state by 1, when you click on the button*/}
//         <button onClick={() => setSeconds(seconds + 1)}>Click to add 1</button>
//     </>);
// }

// RS33 Áp dụng State vào Counter
export default function Counter() {
    const [count, setCount] = useState(0);
    console.log("value of count is: ", count);

    return (<>
        <div>{count} times clicked!</div>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
    </>);
}