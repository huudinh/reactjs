import {useState} from "react";

const Blog = () => {
    const [address, setAddress] = useState("Amsterdam");

    return (
        <input 
            type="text" 
            value={address} 
            onChange={
                event => setAddress(event.target.value)
            } 
        />);
}

export default Blog;