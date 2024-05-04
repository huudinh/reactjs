import React, {useEffect} from "react";

function App() {

    function handleWindowScroll(event) {
        console.log("page scrolled");
    }

    useEffect(() => {
        window.addEventListener(
            "scroll", 
            handleWindowScroll, {passive: true}
        );

        // cleanup event listener
        return () => {
            window.removeEventListener(
                "scroll", 
                handleWindowScroll, {passive: true}
            );
        }
    });

    return (<>
        <h2>List of products</h2>
        <p>Lorem ipsum...</p>
    </>);
}

export default App;