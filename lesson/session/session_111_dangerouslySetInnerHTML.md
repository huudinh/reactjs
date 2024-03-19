![Create-HTML-1](images/context.jpg) 

# RS111 dangerouslySetInnerHTML

### Thực thể HTML

Hãy xem xét component sau:

```
function Footer() {
    const text = "<strong>All rights reserved ©</strong>";

    return <div>{text}</div>;
}
```

Bạn dự đoán component sẽ hiển thị: `All rights reserved © (in đậm)`; tuy nhiên, kết quả thực tế là:` <strong>All rights reserved &copy;</strong>` không in đậm và ký hiệu bản quyền được hiển thị dưới dạng một thực thể HTML.

Điều này xảy ra là vì khi bạn có một biểu thức trong JSX, React sẽ tự động thoát các thực thể HTML (chuyển đổi thực thể HTML thành ký tự an toàn). Đây là một tính năng bảo mật nhằm ngăn chặn XSS injection.

### XSS Injection là gì?

Cross-Site Scripting (XSS) là một lỗ hổng bảo mật trong đó người dùng có thể chèn code của họ (HTML, CSS hoặc JavaScript) vào trang web của bạn. Giả sử bạn muốn gửi lời chúc mừng sinh nhật cho bạn bè trên mạng xã hội. Thay vì viết: Happy Birthday, bạn viết:

```
<script>alert("You got hacked!")</script>
```

Nếu trang mạng xã hội cho phép bạn viết tập lệnh của riêng bạn và hiển thị trên trang, đây sẽ là một lỗ hổng bảo mật nghiêm trọng vì bạn có thể đọc cookie của người dùng, mạo danh người dùng, chuyển hướng đến các trang web khác và thực hiện nhiều hành vi khác.

Để ngăn chặn XSS Injection, bạn cần thoát các phần tử HTML (nói một cách đơn giản).

Vì vậy, đoạn code ở trên trở thành: `&lt;script&gt;alert("You got hacked!")&lt;/script&gt;`. Bằng cách thoát các ký tự` < và >`, trình duyệt sẽ hiểu đoạn code trên là văn bản thông thường thay vì một đoạn lệnh.

### Biểu thức JSX được thoát

Các biểu thức trong React được tự động thoát để ngăn chặn các cuộc tấn công XSS thông thường. Đây là một biện pháp bảo mật tuyệt vời và thường nên được giữ nguyên.

Tuy nhiên, có các tình huống mà bạn muốn ghi đè lên hành vi này và bỏ qua biện pháp phòng ngừa. Ví dụ, khi bạn chắc chắn 100% rằng biểu thức bạn đã nhúng trong JSX được tạo bởi bạn (hoặc nhóm của bạn) mà không được cung cấp bởi người dùng cuối. Sau đây là cách thực hiện:

```
function Footer() {
    const text = "<strong>All rights reserved ©</strong>";

    return <div dangerouslySetInnerHTML={{__html: text}}></div>;
}
```

Để ý là chúng ta đã loại bỏ biểu thức `{text}` và thêm một prop tên là `dangerouslySetInnerHTML`, nó nhận đối tượng `{__html: text}` được đóng gói bởi biểu thức {} (vì vậy chúng ta có {{}}, một cho đối tượng và một cho biểu thức).

Bên trong đối tượng này, bạn phải đặt khóa `__html` (hai dấu gạch dưới). Việc thiết kế `dangerouslySetInnerHTML` với cấu trúc phức tạp như vậy nhằm mục đích nhắc nhở bạn rằng việc sử dụng nó tiềm ẩn các rủi ro bảo mật.

Nguyên tắc vàng là không bao giờ tin tưởng dữ liệu được cung cấp bởi người dùng. Nếu biểu thức mà bạn nhúng đến từ người dùng cuối (ví dụ: bình luận, tên, họ, email, v.v.), bạn không bao giờ nên sử dụng `dangerouslySetInnerHTML`.

Sau đây là một ví dụ mà chúng ta có thể sử dụng `dangerouslySetInnerHTML`:

### Tóm lại

- Cross-Site Scripting (XSS) là một lỗ hổng bảo mật trong đó người dùng có thể chèn code của họ (HTML, CSS hoặc JavaScript) vào trang web của bạn.
- Biểu thức JSX luôn được thoát.
- Bạn không nên sử dụng `dangerouslySetInnerHTML` nếu nội dung đến từ người dùng cuối. Không bao giờ tin tưởng dữ liệu được cung cấp bởi người dùng.

*Bài tiếp theo [RS112 Xuất nhiều component](/lesson/session/session_112_export_more.md)*