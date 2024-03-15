![Create-HTML-1](images/jsx.jpg) 

# RS12 Biểu thức thuộc tính

### Biểu thức thuộc tính là gì?

Là giá trị của thuộc tính được xác định dựa trên biểu thức (hoặc thường là biến)

ví dụ:

```
const limit = 5;

const element = <input type="number" max={limit} />;
```

Khi chuyển đổi thành `React.createElement()`, code sẽ có dạng:

```
const limit = 5;
const element = React.createElement("input", {
  type: "number",
  max: limit
});
```

Ví dụ này cho thấy các thuộc tính có thể có giá trị chuỗi cũng như giá trị động; ví dụ: thuộc tính max lấy giá trị của biến `limit`.

### Dấu ngoặc kép HOẶC Biểu thức

Bạn chỉ nên sử dụng một trong hai cách để chỉ định giá trị cho thuộc tính. Bạn có thể sử dụng dấu ngoặc kép cho giá trị thuộc tính HOẶC sử dụng dấu ngoặc nhọn cho biểu thức, nhưng không được sử dụng cả hai cùng lúc.

Vì vậy, ví dụ sau không hợp lệ: `<input max="{limit}" />`, câu lệnh SẼ KHÔNG hoạt động.

Cách làm hợp lệ là: `<input max={limit} />`

Nguyên tắc chung:

- Nếu giá trị là chuỗi ký tự thì đóng gói trong dấu ngoặc kép.

- Nếu giá trị là động (kết quả của một biểu thức) thì đóng gói trong dấu ngoặc nhọn {}.

### Số và boolean

Giá trị của các thuộc tính số và boolean nên được truyền dưới dạng biểu thức:

```
<input max={2} disabled={true} className="textbox" />
```

### Tóm lại

- Nếu giá trị của thuộc tính là chuỗi ký tự thì đóng gói trong dấu ngoặc kép.

- Nếu giá trị của thuộc tính là biểu thức thì đóng gói trong dấu ngoặc nhọn {}.

- Giá trị của các thuộc tính số và boolean nên được truyền dưới dạng biểu thức

*Bài tiếp theo [RS13 Biểu thức thuộc tính với giá trị động](/lesson/session/session_013_jsx_attribute_expression_more.md)*
