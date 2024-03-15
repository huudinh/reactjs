
![Create-HTML-1](images/components.jpg) 

# RS60 Stateless và Stateful components

Component React có thể được chia thành hai loại: stateless (không lưu trạng thái) hoặc stateful (lưu trạng thái).

Sự khác biệt nằm ở việc component có xử lý state hay không.

Stateless component KHÔNG quản lý state bên trong. Vì vậy, bạn sẽ không thể tìm thấy lệnh gọi `useState` bên trong chúng. Trong khi đó, stateful component sẽ quản lý ít nhất một state.

Khi ứng dụng ngày càng phát triển, bạn sẽ chia một stateful component lớn thành nhiều component nhỏ hơn. Một trong số những component này sẽ là stateless.

Điều này sẽ làm cho việc tái cấu trúc và tối giản hóa chương trình dễ dàng hơn khi ứng dụng ngày càng mở rộng.

### Stateless component có tính tương tác

Mặc dù stateless component không quản lý trạng thái bên trong, chúng vẫn có thể tương tác với người dùng.

Ví dụ, một stateless component có thể chứa một form cùng với một ô văn bản và nút gửi. Tuy nhiên, trạng thái sẽ được quản lý bởi component cha của nó.

Để làm điều đó, trước tiên bạn cần biết rằng `props` cũng có thể truyền các hàm.

### Tóm lại

- Stateless component KHÔNG quản lý trạng thái bên trong. (Không có lệnh gọi useState bên trong component)
- Stateful component quản lý trạng thái bên trong (Có ít nhất một lệnh gọi useState bên trong component).
- Tuy nhiên, stateless component có thể tương tác với người dùng. Tuy nhiên, trạng thái sẽ được quản lý bởi một component cha.


*Bài tiếp theo [Truyền hàm vào props](/lesson/session/session_061_props_function.md)*