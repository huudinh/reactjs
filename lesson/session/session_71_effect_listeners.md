# Event listeners: Trình lắng nghe sự kiện

![Create-HTML-1](images/ss17.jpg) 



#### Cách làm này nghe có vẻ không hiệu quả...



#### Tùy chọn: đặt tên cho hàm dọn dẹp



### Dọn dẹp so với không dọn dẹp



### Cách thức hoạt động



### Quá trình dọn dẹp chạy sau mỗi lần hiển thị lại



### Tóm lại

- `const timerId = setTimeout(() => {}, 1_000)` sẽ lưu trữ `timerId` cho phép bạn dọn dẹp sau này.
- `clearTimeout(timerId)` hủy bỏ bộ đếm thời gian được khởi tạo bởi `setTimeout`.
- Bạn có thể đặt tên tùy chọn cho hàm dọn dẹp.
- Các hiệu ứng KHÔNG trả về hàm là những hiệu ứng mà React sẽ không dọn dẹp.
- Các hiệu ứng trả về hàm là những hiệu ứng mà React sẽ dọn dẹp sau mỗi lần hiển thị lại.
- Hàm dọn dẹp chạy sau mỗi lần hiển thị lại. Bạn sẽ có thể ngăn nó chạy sau mỗi lần hiển thị lại.

*Bài tiếp theo [Dọn dẹp bộ đếm thời gian](/lesson/session/session_71_effect_listeners.md)*