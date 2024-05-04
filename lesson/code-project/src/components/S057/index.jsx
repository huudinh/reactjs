import {useState} from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log({name,address});
    }

    return <form onSubmit={handleFormSubmit}>
        <input 
            type="text" name="name" 
            placeholder="Name..."
            value={name} 
            onChange={e => setName(e.target.value)} 
        />
        <input 
            type="text" name="address" 
            placeholder="Address..."
            value={address} 
            onChange={e => setAddress(e.target.value)} 
        /><br/>
        <button>Submit</button>
    </form>
}

export default Form;