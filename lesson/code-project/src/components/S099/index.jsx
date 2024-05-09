import {useState} from "react";
// You also need to import useDocumentTitle...

function App() {
    const [count, setCount] = useState(0);
    useDocumentTitle(`
        ${count} products in your shopping list
    `);

    function handleButtonClick() {
        setCount(prevCount => prevCount + 1);
    }

    return <button 
        onClick={handleButtonClick}
    >Add item</button>
}

export default App;

