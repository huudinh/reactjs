const {post} = useFetch(
    "https://jsonplaceholder.typicode.com/users");

post("grades", {
    grade: 20
})
.then(data => {
    console.log(data);
})
.catch(error => console.log(error));

