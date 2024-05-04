{
    const obj = {
        id: 1,
        title: "Harry potter",
        year: 2017,
        rating: 4.5
    }
    
    // BAD: mutates
    delete obj.year;
    console.log(obj); 
    // { id: 1, title: "Harry potter", rating: 4.5}
}

{
    const obj = {
        id: 1,
        title: "Harry potter",
        year: 2017,
        rating: 4.5
    }
    
    // GOOD: immutable
    const {year, ...rest} = obj;
    console.log(rest); 
    // { id: 1, title: "Harry potter", rating: 4.5}
}