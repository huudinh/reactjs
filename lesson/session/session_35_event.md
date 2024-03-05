![Create-HTML-1](images/components.jpg) 

# RS35 Event

### Gắn sự kiện vào phần tử DOM

Trong JavaScript thuần túy, chúng ta sử dụng `element.addEventListener("click", () => {})`, tuy nhiên trong React, chúng ta sử dụng cú pháp sau trong JSX:

`onClick={() => }`, ví dụ: `<button onClick={() => console.log("I was clicked")}>Login</button>`.

Điều quan trọng cần lưu ý là sử dụng `onClick` chứ không phải là `onclick` (tên sự kiện phải ở dạng lowerCamelCase).

Một lỗi thường gặp khác là quên định nghĩa hàm, vì vậy `<button onClick={console.log("I was clicked")}>Login</button>` sẽ in ra: `I was clicked` ngay lập tức khi trang được tải và không hoạt động khi nhấp chuột.

Điều đó bởi vì `I was clicked` sẽ được thực thi khi trang được tải và không được gắn vào trình xử lý sự kiện Click.

### Khả năng truy cập

Về mặt kỹ thuật, bạn có thể thêm `onClick` vào bất kỳ phần tử DOM nào, ví dụ:


- `p`
- `ul`
- `div`
- `button`
- `a`
- `v.v.`

Tuy nhiên, bạn chỉ nên thêm sự kiện này vào phần tử `<button>` nhằm đảm bảo khả năng truy cập.

Khả năng truy cập là khả năng làm cho trang web có thể truy cập (sử dụng) bởi tất cả người dùng, đảm bảo đáp ứng mọi nhu cầu và hạn chế của người dùng.

Ví dụ, một số người dùng có thể sử dụng Trình đọc màn hình để truy cập vào trang web. Nếu bạn thêm `onClick` vào các phần tử khác ngoài `button`, họ có thể không thể nhấp chuột vào những phần tử đó.

Bạn cần nhớ rằng bạn chỉ sử dụng `onClick` trên các phần tử `<button>`.

### Các loại sự kiện khác

Chúng ta sẽ chủ yếu làm việc với sự kiện `Click` cho đến khi chuyển sang khái niệm Biểu mẫu trong chương sau, tuy nhiên, bạn có thể đã từng thấy cách triển khai các loại sự kiện khác nhau như:

- "click" => `onClick`
- "keyup" => `onKeyUp`
- "keydown" => `onKeyDown`
- "change" => `onChange`

Lưu ý rằng tên sự kiện bắt đầu bằng `on` và viết ở dạng lowerCamelCase, có nghĩa là `onKeyPress` chứ không phải `onkeypress`. `K` phải là chữ `k` hoa (tương tự với `P`).

```
// JSX Input UI
<input type="text" placeholder="Enter your name" onChange={() => console.log('change!')} />
```

### Tóm lại

- `onClick` chỉ nên được sử dụng trên các phần tử `<button>` để cải thiện khả năng truy cập.
- `onEventName` là cú pháp chung để thêm sự kiện vào một phần tử.
- `onKeyDown` gắn sự kiện `keydown` vào một phần tử.

*Bài tiếp theo [Event Name](/lesson/session/session_36_event_name.md)*