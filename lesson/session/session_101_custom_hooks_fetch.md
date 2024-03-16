![Create-HTML-1](images/custom-hooks.png) 

# RS101 Custom useFetch hook

Bạn có thể nhận thấy rằng code `fetch` thường rất dài, điều này làm cho component phức tạp hơn mức cần thiết. Đó là một trong những lý do tại sao chúng ta sẽ tạo `hook` tùy chỉnh `useFetch` để đơn giản hóa logic `fetch` Điều này cũng giúp chúng ta tránh những lỗi phổ biến khi làm việc với `fetch`, vì tất cả logic `fetch` đều được đặt trong hook tùy chỉnh `useFetch`.

### Bắt đầu với "get"

Hook tùy chỉnh `useFetch` sẽ trả về một hàm get và một hàm post. Chúng ta sẽ bắt đầu với hàm get.

Hàm `get` cho phép chúng ta thực hiện các yêu cầu `get`. Khi hook tùy chỉnh `useFetch` được xây dựng, đây là cách bạn sử dụng nó:

Thay vì viết code dưới đây:

```
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));
}, []);
```

Bạn có thể viết code sau đây:

```
const {get} = useFetch("https://jsonplaceholder.typicode.com/users");

useEffect(() => {
    get("/users")
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));
}, []);
```

Lưu ý rằng:

- Hàm `useFetch` trả về một đối tượng với hàm `get`. Chúng ta sử dụng object destructuring để truy cập vào hàm `get`.
- Hàm `useFetch` nhận tham số `baseUrl`, cho phép ta gọi `get("/users")` sau đó mà không cần lặp lại URL cơ sở dài.
- `get("/users")` tự động chuyển đổi phản hồi thành JSON. Chúng ta không cần phải làm điều đó nữa vì chúng ta có thể ngay lập tức xử lý promise và đọc data.

### Tóm lại

- Hook tùy chỉnh `useFetch` giúp đơn giản hóa logic gửi yêu cầu `fetch`.
- Hook tùy chỉnh `useFetch` sẽ trả về hai hàm `get` và `post`, sử dụng object destructuring.
- Hook tùy chỉnh `useFetch` nhận `baseUrl` làm tham số duy nhất.
- Hàm `get` sẽ nhận `url` mà bạn muốn gửi yêu cầu `fetch` và `url` này sẽ được thêm vào `baseUrl`.

*Bài tiếp theo [RS102 Custom useFetch hooks với post](/lesson/session/session_102_custom_hooks_fetch_post.md)*