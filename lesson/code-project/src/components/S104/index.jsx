import React, { useRef } from "react";

function App() {
    const inputEl = useRef(null);

    const onButtonClick = () => {
        // current property 
        // references to the input element
        inputEl.current.focus();
    };

    return (
        <div className="App">
            <h2>Use refs to control focus</h2>
            <input ref={inputEl} />
            <button 
                onClick={onButtonClick}
            >Focus the input</button>
        </div>
    );
}

export default App;