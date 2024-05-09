import {useEffect, useState} from "react";

function App() {
    const [isLoading, setIsLoading] = useState(true); 
    // create and start the loader

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false); // stop the loader
        });
    }, []);
}

export default App;

