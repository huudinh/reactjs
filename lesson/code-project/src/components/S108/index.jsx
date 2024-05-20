import { createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const theme = "dark";

  function toggleTheme() {
    // toggle the theme here
  }

  const value = {
    theme: theme,
    toggleTheme: toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

