function ButtonEvent() {
  function handleClick() {
    console.log('Nút đã được nhấn!');
  }

  return (
    <button onClick={handleClick}>
      Nhấn vào đây
    </button>
  );
}

function FormEvent() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form đã được gửi!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Gửi</button>
    </form>
  );
}

function InlineEvent() {
  return (
    <button 
      onClick={
        () => console.log('Nút đã được nhấn!')
      }>
      Nhấn vào đây
    </button>
  );
}

