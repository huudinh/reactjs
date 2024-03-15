
![Create-HTML-1](images/components.jpg) 

# RS58 Accessibility (Khả năng tiếp cận)

Khả năng tiếp cận là gì và tại sao bạn nên quan tâm đến nó?

Accessibility (Khả năng tiếp cận) là quá trình thiết kế và tạo ra các ứng dụng web có thể được sử dụng bởi mọi người.

Đây là một thực hành thúc đẩy khả năng truy cập và tương tác dễ dàng cho tất cả mọi người vì trang web của bạn có thể được sử dụng bởi bất kỳ đối tượng nào (bao gồm cả những người có khiếm khuyết thân thể).

Bạn thường thấy từ "accessibility" được viết tắt thành a11y, đó là từ bắt đầu bằng "a", kết thúc bằng "y" và có 11 ký tự ở giữa (ccessibilit).

Chúng ta đã thấy một ví dụ về Khả năng tiếp cận khi bạn được khuyến nghị chỉ nên sử dụng trình xử lý `onClick` trên phần tử `<button>` để phần mềm hỗ trợ công nghệ có thể hiểu thông qua ngữ nghĩa (ý nghĩa của code HTML) rằng có một hành động trên phần tử này khi được nhấp chuột.

Khả năng tiếp cận chủ yếu liên quan đến HTML và vì các component React cuối cùng sẽ hiển thị HTML lên DOM, bạn cần áp dụng những thực hành tốt nhất về Khả năng tiếp cận trong React.

### Khả năng tiếp cận của Form

#### onSubmit

Sự kiện `onSubmit` được kích hoạt trên một phần tử `form`. Nếu bạn mong đợi người dùng điền và gửi biểu mẫu thì việc triển khai phương thức `onSubmit` quan trọng hơn sự kiện `click` trên nút vì sự kiện `submit` cho phép người dùng điều khiển biểu mẫu bằng bàn phím (bằng cách nhấn Enter khi hoàn thành).

#### Gán nhãn dữ liệu đầu vào

Việc gán label cho mỗi trường nhập liệu (ngoại trừ nút), vùng văn bản và hộp chọn trong biểu mẫu là rất quan trọng vì nhãn làm cho biểu mẫu có khả năng tiếp cận tốt hơn, với hai lý do sau:

1. Người dùng sử dụng chuột và người khuyết tật vận động có thể nhấp chuột vào nhãn để truy cập vào phần tử điều khiển biểu mẫu liên quan. Điều này có nghĩa là tạo khu vực nhấp chuột lớn hơn cho trường nhập liệu/vùng văn bản/hộp chọn vì nhấp chuột vào nhãn hoặc phần tử điều khiển sẽ kích hoạt phần tử đó.
2. Người khuyết tật thị giác sử dụng trình đọc màn hình để đọc nhãn liên kết với một phần tử biểu mẫu khi di chuyển tới phần tử đó. Trình đọc sẽ đọc nội dung của nhãn mô tả trường nhập liệu/vùng văn bản/hộp chọn.

#### Còn về thuộc tính placeholder?

Thuộc tính `placeholder` không thay thế được `label` vì giá trị của nó bị ẩn khi người dùng bắt đầu gõ vào trong phần tử.

### Tóm lại

- Accessibility (Khả năng tiếp cận) là quá trình thiết kế và tạo ra các ứng dụng web có thể được sử dụng bởi mọi người.
- Accessibility là một thực hành thúc đẩy khả năng truy cập và tương tác dễ dàng cho tất cả mọi người vì trang web của bạn có thể được sử dụng bởi bất kỳ đối tượng nào (bao gồm cả những người có khiếm khuyết thân thể).
- Bạn mong đợi người dùng gửi một biểu mẫu? Hãy triển khai onSubmit trên biểu mẫu thay vì sự kiện click trên nút.
- Thêm label cho mỗi trường nhập liệu/vùng văn bản/lựa chọn.

*Bài tiếp theo [RS59 Label trong React](/lesson/session/session_059_form_label.md)*