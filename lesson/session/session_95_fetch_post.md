![Create-HTML-1](images/fetch.webp) 

# RS95 Fetch POST

Trong bài học này, chúng ta sẽ tìm hiểu về tính năng của `fetch POST`, trường hợp sử dụng và cách sử dụng nó bên ngoài React.

Các cuộc gọi fetch mà ta đã thực hiện trong các chương trước là `fetch GET`. Ngược lại, POST thường được sử dụng để gửi thông tin cùng với yêu cầu fetch.

```
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
      console.log(data);
  });
```

Chúng ta không cần chỉ định đối số thứ hai vì phương thức mặc định là GET. Vì vậy, đoạn code trên tương đương với:

```
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET" // this is a default
})
  .then(response => response.json())
  .then(data => {
      console.log(data);
  });
```

Bây giờ, để gửi một yêu cầu POST, chúng ta phải chỉ định method là POST.

```
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST" 
})
  .then(response => response.json())
  .then(data => {
      console.log(data);
  });
```

Điều này cho phép chúng ta thực hiện một yêu cầu POST.

Tuy nhiên, trong hầu hết các trường hợp, bạn sẽ cần gửi một số dữ liệu cùng với yêu cầu

Một khuyến nghị dành cho bạn là khi làm việc với các API trả về dữ liệu dưới định dạng JSON, hãy luôn chỉ định header sau: Content-Type: "application/json".

Nó giống như việc bạn đang thông báo cho API rằng: Tôi đang gửi cho bạn một số dữ liệu dưới định dạng JSON.

Dưới đây là cú pháp của fetch POST:

```
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({grade: 50})
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
  });
```

### Dữ liệu bên trong body sẽ được lấy từ một biến trạng thái

```
function App() {
  const [number, setNumber] = useState(0);

  function handleFormSubmit(event) {
      event.preventDefault();

      fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
              "Content-Type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify({
            userId: number,
            title: 'foo',
            body: 'bar',
          })
      })
      .then(response => response.json())
      .then(data => {
          console.log("Number added");
          console.log(data);
      });
  }

  return <form onSubmit={handleFormSubmit}>
      <input type="number" value={number} name="grade" onChange={event => setNumber(event.target.value)} placeholder="Enter the number" />
      <input type="submit" />
      </form>
  ;
}

export default App
```

Để ý `userId: number` đang gửi một biến trạng thái tên là number, biến này được thiết lập trong trình xử lý `onChange` bằng cách gọi `setNumber(event.target.value)`.



### Tóm lại

- fetch POST được sử dụng để gửi dữ liệu đến một API.
- fetch POST tương tự như fetch GET, ngoại trừ việc bạn phải chỉ định đối số thứ hai của hàm fetch().
- Bạn cần chỉ định method: "POST" và thường phải gửi body: `JSON.stringify(dataObjectHere)`.
- Đặt header "Content-Type": "application/json".
- fetch POST thường được đặt trong hàm `handleFormSubmit`, trong đó bạn gửi một trong các biến `state` trong `body`.


*Bài tiếp theo [RS96 Custom Hooks](/lesson/session/session_96_custom_hooks.md)*