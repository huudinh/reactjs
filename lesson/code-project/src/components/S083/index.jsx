functionThatReturnsPromise()
    .then(result => {
        console.log(result); 
        // when successful
    })
    .catch(error => {
        console.error(error); 
        // when there's an error
    })

    