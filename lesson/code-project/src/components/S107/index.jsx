import {useContext} from "react";
import {ThemeContext, ThemeProvider} from "./ThemeContext.js";

function App() {
    return (<ThemeProvider>
        <Nav />
    </ThemeProvider>);
}

function Nav() {
    return <Button>Login</Button>;
}

function Button(props) {
    const theme = useContext(ThemeContext);
    console.log(theme); // "dark"
    return <button>{props.children}</button>;
}
