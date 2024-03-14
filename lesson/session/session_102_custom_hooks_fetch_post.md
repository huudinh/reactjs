![Create-HTML-1](images/custom-hooks.png) 

# RS102 UseFetch hook: phương thức post

Trong bài học này, chúng ta sẽ tiếp tục viết hook tùy chỉnh `useFetch` bằng cách thêm một phương thức `post`.

Phương thức `post` hoạt động tương tự như phương thức `get` nhưng nó cũng cần nhận tham số `body` để được gửi trong yêu cầu `fetch`.

Thay vì viết code dưới đây:

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

Bạn có thể viết code như sau:

```
const {post} = useFetch("https://jsonplaceholder.typicode.com/users");

post("grades", {
    grade: 20
})
.then(data => {
    console.log(data);
})
.catch(error => console.log(error));
```

Lưu ý rằng hàm `post` nhận hai tham số: `url` và `body` được gửi cùng với yêu cầu `post`.

Yêu cầu `fetch` cũng nên thiết lập method là `"post"` và thiết lập các tiêu đề.

### Tóm lại

- Hàm `post` sẽ nhận `url` mà bạn muốn gửi yêu cầu `fetch` và `url` này sẽ được thêm vào `baseUrl` và thực hiện yêu cầu `fetch` với `post`.
- Hàm `post` cũng nhận tham số `body`, tham số này sẽ được chuyển thành chuỗi JSON và được gửi cùng với yêu cầu `fetch`.

*Bài tiếp theo [RS103 Giới thiệu về refs](/lesson/session/session_103_ref.md)*