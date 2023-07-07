import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import ValidatedLoginForm from "./ValidatedLoginForm";

function App() {
  return (
    <div className="App login">
      <h1 className="login__title">ĐĂNG NHẬP</h1>
      <ValidatedLoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
