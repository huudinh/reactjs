
![Create-HTML-1](images/components.jpg) 

# RS55 Thay đổi nội dung Input

```
function handleAddressChange(event) {
    //...
}

<input type="text" name="address" onChange={handleAddressChange} />
```

Hàm `handleAddressChange` sẽ được gọi mỗi khi người dùng nhập một ký tự mới, xóa một ký tự hoặc thực hiện bất kỳ chỉnh sửa nào trên ô văn bản. Hàm sẽ được kích hoạt mỗi khi giá trị của trường nhập liệu thay đổi.

### Đối số event

Hàm được truyền vào `onChange` sẽ nhận đối số là một `event`, tương tự như khi làm việc với DOM.

Tuy nhiên, `event` này về mặt kỹ thuật là sự kiện tổng hợp (synthetic event)

Bạn có thể đọc giá trị được viết bởi người dùng bằng cách truy cập vào: `event.target.value`:

```
function handleAddressChange(event) {
    console.log(event.target.value);
}

<input type="text" name="address" onChange={handleAddressChange} />
```

Trong ví dụ này, `event.target` tham chiếu đến phần tử (trong ví dụ này là `<input />`). Vì đó là một trường nhập liệu, bạn đọc nội dung bên trong nó bằng cách truy cập trường thuộc tính `.value`.

### target vs currentTarget

Nếu bạn đã từng viết code JavaScript thuần túy, bạn có thể đã quen việc sử dụng `currentTarget` thay cho `target` (vì `currentTarget` luôn tham chiếu đến phần tử mà bạn gọi `addEventListener` trong khi `target` sẽ phụ thuộc vào vị trí chính xác mà người dùng nhấp chuột).

Khi sử dụng `onChange` của React, không có sự khác biệt giữa `target` và `currentTarget` vì chỉ có một phần tử duy nhất mà không có phần tử con. Do đó, cả hai giá trị sẽ trỏ đến cùng một phần tử.

Bạn sẽ thấy nhiều nhà phát triển sử dụng `target` và đó cũng là một thực hành mà bạn nên làm theo.

### Hàm nội tuyến

Các hàm inline (nội tuyến) thường được sử dụng với biểu mẫu vì bạn thường cần có một trình xử lý sự kiện nhỏ, ví dụ:

```
<input type="text" name="address" onChange={event => console.log(event.target.value)} />
```

### Tóm lại

- `onChange` trên trường nhập liệu sẽ được kích hoạt mỗi khi người dùng thay đổi nội dung của trường nhập liệu.
- Bạn có thể đọc văn bản do người dùng nhập bằng `event.target.value`.

### Bài tập

**Câu 1:** Cách thức thay đổi nội dung của ô Input trong React

**Câu 2:** Target là gì

*Bài tiếp theo [RS56 Controlled component](/lesson/session/session_056_controlled_component.md)*