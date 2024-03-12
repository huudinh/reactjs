import { useEffect } from "react";

function FetchGet() {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET" // this is a default
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });       
    }, []);

    return (
        <>
            hi
        </>
    )
}

export default FetchGet;
