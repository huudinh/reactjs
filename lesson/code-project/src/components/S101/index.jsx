const {get} = useFetch("https://jsonplaceholder.typicode.com/users");

useEffect(() => {
    get("/users")
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));
}, []);

