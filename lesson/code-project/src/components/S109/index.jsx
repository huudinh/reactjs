import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.js";

function App() {
  const context = useContext(ThemeContext);
  console.log(context);
  // {theme: "dark", toggleTheme: Function}

  return <button onClick={
    () => context.toggleTheme()
  }>Toggle Theme</button>;
}

