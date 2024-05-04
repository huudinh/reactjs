{
    const person = {
        id: 1,
        name: "Sam"
    };
    
    JSON.stringify(person); 
    // '{"id":1,"name":"Sam"}'
}

{
    const person = {
        id: 1,
        name: "Sam"
    };
    
    localStorage.setItem(
        "person", 
        JSON.stringify(person)
    );
}

{
    let person = localStorage.getItem("person");

    person = JSON.parse(person);

    console.log(person); 
    
    // {id: 1, name: "Sam"}
}

