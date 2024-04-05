import {useState} from "react";

function Counter(props) {
    const [counter, setCounter] = useState(0);

    function handleIncrementClick() {
        if (props.enabled){
            setCounter(counter + 1);
        }
    }

    return (<>
        <h2>{counter} times clicked</h2>
        <button 
            onClick={handleIncrementClick}
        >Add 1</button>
    </>);
}

// Sample usages:
const element1 = <Counter enabled={true} />;
const element2 = <Counter enabled={false} />;


