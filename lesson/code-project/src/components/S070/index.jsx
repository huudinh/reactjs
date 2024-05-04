import {useEffect} from "react";

function App() {
    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log("This will run in 1 second");
        }, 1000);

        return () => {
           // when component gets unmounted, clear the timer
           clearTimeout(timerId);
        };
    });

    return <h1>App</h1>;
}

export default App;

