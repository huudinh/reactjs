// Sự kiện click:
{
  <>

    {/* Trong HTML thông thường: */}
    <button onclick="handleClick()">Click me</button>

    {/* Trong React: */}
    <button onClick={handleClick}>Click me</button>

  </>
}

// Sự kiện thay đổi (change event):
{
  <>

    {/* Trong HTML thông thường: */}
    <input onchange="handleChange()" />

    {/* Trong React: */}
    <input onChange={handleChange}></input>

  </>
}

// Sự kiện submit:
{
  // Trong HTML thông thường:
  <form onsubmit="handleSubmit(); return false;">
    <button type="submit">Submit</button>
  </form>

  // Trong React:
  function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }

    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

