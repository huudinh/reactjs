
![Create-HTML-1](images/components.jpg) 

# RS54 Default Value

### Thuộc tính value trong HTML

Trong HTML, chúng ta thường cung cấp giá trị mặc định cho ô nhập liệu bằng cách chỉ định thuộc tính `value`, ví dụ:

```
<!-- HTML example -->
<input type="text" name="address" value="Amsterdam">
```

Đoạn code trên sẽ hiển thị một trường nhập liệu chứa giá trị `Amsterdam` và người dùng có thể chỉnh sửa văn bản.

Tuy nhiên, trong React, cách hoạt động của phần tử này có chút khác biệt.

### defaultValue

Khi bạn thiết lập `value` cho phần tử `input` trong React, giá trị đó sẽ không bao giờ thay đổi (trừ khi bạn chỉ định trình xử lý `onChange` mà bạn sẽ tìm hiểu trong bài học tiếp theo).

Do đó, dòng code JSX dưới đây không nên được sử dụng:

```
<input type="text" name="address" value="Amsterdam" />
```

Để ý code sử dụng cú pháp tự đóng thẻ vì chúng ta đang sử dụng JSX; điều này là bắt buộc.

Kết quả trả về một trường nhập liệu chứa giá trị `Amsterdam` nhưng không thể thay đổi, nghĩa là nó là một trường nhập liệu chỉ đọc.

Thay vào đó, khi bạn muốn cung cấp giá trị mặc định cho người dùng, bạn nên sử dụng thuộc tính `defaultValue` như sau:

```
<input type="text" name="address" defaultValue="Amsterdam" />
```

### Tóm lại

- Thiết lập `value` cho trường nhập liệu mà không có trình xử lý `onChange` sẽ tạo ra một trường nhập liệu chỉ đọc.
- Nếu bạn muốn cung cấp giá trị mặc định, hãy sử dụng thuộc tính `defaultValue`.


### Bài tập

**Câu 1:** Tại sao trong react không cho sửa đổi trực tiếp giá trị value

**Câu 2:** defaultValue và placehoder trong html có giống nhau không

*Bài tiếp theo [RS55 Thay đổi nội dung Input](/lesson/session/session_055_form_input_onchange.md)*