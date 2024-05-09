import {useState, useEffect} from "react";

function CurrencySelector() {
    const [currency, setCurrency] = useState("");

    useEffect(() => {
        console.log(currency); // fetch call here
    }, [currency]);

    function handleCurrencyChange(event) {
        setCurrency(event.target.value);
    }

    return <>
        <h3>Select currency</h3>
        <select onChange={handleCurrencyChange}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
        </select>
        <h1>{currency}</h1>
    </>;
}

export default CurrencySelector;

