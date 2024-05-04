const Blog = () => {
    function handleAddressChange(event) {
        console.log(event.target.value);
    }
    
    return (
        <input 
            type="text" 
            name="address" 
            onChange={handleAddressChange} 
        />
    )
}

export default Blog;



