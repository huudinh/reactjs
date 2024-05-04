function App() {
    function handleWelcome() {
        console.log("Hello World");
    }

    return <StoreFront 
        onWelcome={handleWelcome} 
    />;
}

function StoreFront(props) {
    props.onWelcome();

    return <div>Store renders here</div>;
}

