{
    // using an if condition
    let value = []; // default value

    if (localStorage.getItem("key-here")) {
        value = localStorage.getItem("key-here");
    }
}
{
    // OR: using the ternary operator
    const value = 
        localStorage.getItem("key-here") !== null 
        ? localStorage.getItem("key-here") 
        : [];
}
{
    // OR: using the nullish coalescing operator
    const value = 
        localStorage.getItem("key-here") ?? [];
}

    
