
![Create-HTML-1](images/components.jpg) 

# RS36 Đặt tên cho trình xử lý sự kiện

Bài trước, chúng ta đã viết trình xử lý sự kiện ở dạng nội tuyến, tức là trực tiếp gán một hàm (không có tên) cho sự kiện, ví dụ:

```
<button onClick={() => console.log("Logging in..")}>Login</button>
```

`() => console.log("Logging in..")` là arrow Function được viết trực tiếp trong thuộc tính của phần tử, cho phép bạn thực hiện `console.log` (hoặc thay đổi state).

Nhưng khi khám phá các khái niệm nâng cao hơn, chúng ta sẽ tạo các trình xử lý sự kiện phức tạp hơn, vì vậy ta cần định nghĩa các hàm và đặt tên cho chúng:

```
function handleLoginClick() {
    console.log("Logging in..");
};

<button onClick={handleLoginClick}>Login</button>
```

Đoạn code định nghĩa hàm `handleLoginClick` và sau đó truyền tham chiếu của hàm vào trình xử lý `onClick`.

### Các lỗi phổ biến

Lưu ý là chúng ta cần truyền tên hàm chứ không gọi hàm, vì vậy câu lệnh sau sẽ không hoạt động:

```
// this will NOT work
<button onClick={handleLoginClick()}>Login</button>
```

Kết quả là hàm được gọi trong mỗi lần hiển thị vì () sẽ thực thi nó ngay lập tức.

### Quy ước đặt tên

Chúng ta cần duy trì sự tổ chức và cấu trúc rõ ràng trong chương trình khi các component trở nên phức tạp hơn.

Vì vậy, ta cần có một quy ước đặt tên cho trình xử lý sự kiện.

Hãy nhớ rằng React không bắt buộc tuân thủ các quy ước đặt tên này, vì vậy chương trình vẫn hoạt động ngay cả khi bạn không tuân thủ quy ước.

Đây là quy ước đặt tên mà bạn nên tuân thủ:

> handleSubjectEvent

1. Tên hàm luôn bắt đầu bằng `handle`.
2. Tiếp theo là phần mô tả: ví dụ, Login cho nút Đăng nhập.
3. Sau đó là loại sự kiện: `Click` cho sự kiện nhấp chuột.

Vì vậy chúng ta có `handleLoginClick`.

Hãy xem các ví dụ khác:

- `handleFormSubmit` cho sự kiện submit biểu mẫu
- `handleNameChange` cho sự kiện change trên trường nhập tên
- `handleLogoutClick` cho sự kiện click trên nút Đăng xuất

### Tại sao không sử dụng handleEvent?

Bạn có thể thấy `handleClick` hoặc `handleSubmit` đều hoạt động tốt. Tuy nhiên, nếu bạn có hai sự kiện cùng loại trong cùng một component là vi phạm quy ước đặt tên.

Đó là lý do tại sao bạn nên sử dụng `handleSubjectEvent`.

### Tóm lại

- Việc chuyển từ trình xử lý sự kiện trực tiếp sang trình xử lý sự kiện được đặt tên cho phép xử lý những sự kiện phức tạp hơn bên trong trình xử lý sự kiện.
- `<button onClick={handleLoginClick}>Đăng nhập</button>` gọi `handleLoginClick` khi nút được nhấp.
- Sử dụng quy ước đặt tên `handleSubjectEvent` cho các trình xử lý sự kiện

*Bài tiếp theo [Event State](/lesson/session/session_37_event_state.md)*