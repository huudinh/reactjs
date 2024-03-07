
![Create-HTML-1](images/state.png) 

# RS29 Trạng thái với hook

### State là gì?

Là trạng thái đề cập đến bất kỳ biến nào được định nghĩa bên trong Component với mục đích cập nhật sau này.

Ví dụ: khi tạo component `<Stopwatch />`, chúng ta cần theo dõi số giây đã trôi qua. Số giây đã trôi qua không thể là prop vì hai lý do sau:

1. Thuộc tính nên được lưu giữ bên trong component `<Stopwatch />` thay vì được truyền từ bên ngoài vào
2. Thuộc tính cần được cập nhật/thay đổi! Prop được xem như dữ liệu đầu vào không thay đổi và không thể thay đổi giá trị của chúng trong quá trình chạy.

Nếu bạn đang thắc mắc về ý nghĩa của câu nói "thuộc tính nên được lưu trữ bên trong component thay vì được truyền từ bên ngoài", hãy nhớ rằng prop được truyền từ bên ngoài vào, ví dụ:

```
<Stopwatch theme="dark" />
```

Theme là prop vì nó được truyền từ bên ngoài vào.

Theme không thể được thay đổi từ bên trong component Stopwatch; nó phải được thay đổi từ bên ngoài. Khi nó được thay đổi từ bên ngoài, nó sẽ được xử lý lại bởi component.

Đây là lý do tại sao theme là một prop. Chúng ta không có ý định cập nhật nó từ bên trong Stopwatch.

Trong khi đó, số giây đã trôi qua là một trạng thái vì chúng ta có ý định bắt đầu/ngừng đếm thời gian từ bên trong component `<Stopwatch />`.

### Điều gì xảy ra khi trạng thái thay đổi?

Khi state được cập nhật, ReactDOM sẽ tự động hiển thị lại Component một cách hiệu quả trên DOM. 

### Ví dụ khác

Hãy xem một ví dụ khác.

Giả sử bạn đang tạo component <Item /> chứa một bộ đếm.

Người dùng có thể tăng/giảm bộ đếm bằng cách nhấn các nút + và - để chọn số lượng sản phẩm.

`counter` là một biến trạng thái sẽ được cập nhật khi người dùng nhấp vào các nút + và -.

Khi người dùng nhấp vào các nút này, `counter` sẽ được cập nhật tự động trên giao diện người dùng.

Vì vậy, `0 item(s)` sẽ hiển thị thành `1 item(s)` khi người dùng nhấp vào nút `+`.

### Tóm lại

- Trạng thái đề cập đến bất kỳ biến nào được định nghĩa bên trong Component với mục đích cập nhật sau này.
- Biến trạng thái có thể được cập nhật từ bên trong component.
- Khi một biến trạng thái được cập nhật, component sẽ tự động hiển thị lại.

*Bài tiếp theo [useState](/lesson/session/session_30_useState.md)*