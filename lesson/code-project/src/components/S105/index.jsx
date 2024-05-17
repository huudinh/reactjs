import React, {useState} from "react";

function App() {
    const [theme, setTheme] = useState("dark");

    return <Nav theme={theme} />
}

function Nav(props) {
    return <Button theme={props.theme}>Login</Button>;
}

function Button(props) {
    // render class depending on props.theme
    return <button>{props.children}</button>;
}


