import {useState} from "react";

function App() {
    // do NOT use this (for performance reasons)
    const [state, setState] = 
        useState(
            localStorage.getItem("some-state")
        );
}

function App() {
    // use this 👍
    const [state, setState] = 
        useState(
            () => localStorage.getItem("some-state")
        );
}

