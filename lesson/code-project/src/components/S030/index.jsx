// Process
import { useState } from "react";

export default function Stopwatch(props){
   
    const [theme] = useState(props.theme);

    console.log(theme); 
}

// Input
<Stopwatch theme="dark" />

// Output
{
    <>
        dark 
    </>
} 
