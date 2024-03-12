import { useState } from "react";

function FetchPostExample() {
    const [number, setNumber] = useState(0);
  
    function handleFormSubmit(event) {
        event.preventDefault();
  
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
              userId: number,
              title: 'foo',
              body: 'bar',
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Number added");
            console.log(data);
        });
    }
  
    return <form onSubmit={handleFormSubmit}>
        <input type="number" value={number} name="grade" onChange={event => setNumber(event.target.value)} placeholder="Enter the number" />
        <input type="submit" />
        </form>
    ;
}
  
export default FetchPostExample;