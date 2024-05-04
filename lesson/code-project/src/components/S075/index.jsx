useEffect(() => {
    setInterval(() => {
        // set a new instance 
        // of date every second
        setDate(new Date()); 
    }, 1000);

    // TODO: still need to 
    // cleanup the side effect
}, []);

