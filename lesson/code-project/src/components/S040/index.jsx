
function WelcomeUser(props){
    if (props.user) {
        return <h1>Welcome {props.user}</h1>;
    } else {
        return <h1>Please login!</h1>;
    }
}


import DarkTheme from "./DarkTheme.js"
import LightTheme from "./LightTheme.js"

function App(props) {
    if (props.theme === "dark") {
        return <DarkTheme />;
    }
    return <LightTheme />;
}