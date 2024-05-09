fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ grade: 50 })
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });


    