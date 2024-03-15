![Create-HTML-1](images/fetch.webp) 

# RS84 Fetch API

`fetch` API là một API của trình duyệt (tức là một chức năng có sẵn trong trình duyệt) cho phép bạn thực hiện yêu cầu mạng đến máy chủ khác.

Ứng dụng phổ biến nhất của `fetch` API khi xây dựng ứng dụng (web) là gửi và nhận dữ liệu từ backend/API.

`fetch` API trả về một `promise`, vì vậy chúng ta phải xử lý nó.

Dưới đây là một ví dụ sử dụng API fetch để GET dữ liệu từ backend/API: https://jsonplaceholder.typicode.com/users

```
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

Có bốn điều cần lưu ý ở đây:

1. Cuộc gọi `fetch()` trả về một `promise`, vì vậy ta xử lý nó bằng `.then()`.
2. `response` mà ta nhận được từ `fetch` là một phản hồi chung, vì vậy ta cần chuyển đổi nó thành đối tượng `JSON` bằng cách gọi `response.json()`.
3. `response.json()` cũng trả về một `promise`, vì vậy ta cần xử lý nó một lần nữa bằng `.then()`.
4. Luôn luôn bắt đầu bằng `console.log(data)` vì mỗi backend/API sẽ trả về dữ liệu khác nhau dựa trên mục đích của API đó.

Cấu trúc cơ bản của fetch như sau:

```
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
});
```

### Tóm lại

- `fetch(url)` trả về một `promise` xử lý `response`.
- response là một phản hồi chung cần được chuyển đổi thành JSON bằng `response.json()`.
- `response.json()` cũng trả về một promise cần được xử lý.
- Luôn luôn bắt đầu bằng `console.log(data)` vì mỗi backend/API trả về dữ liệu khác nhau.


*Bài tiếp theo [RS85 Fetch trong Component](/lesson/session/session_085_fetch_component.md)*