![Create-HTML-1](images/react-router.png) 

# RS116 Tham số URL

### Tham số URL là gì?

Bạn có một danh sách sản phẩm, bao gồm từ 2 sản phẩm cho đến hàng trăm (hoặc thậm chí nhiều hơn). Làm thế nào để tạo một trang riêng biệt cho từng sản phẩm?

Ta có thể suy ra rằng tất cả các sản phẩm đều có cấu trúc trang giống nhau, chỉ có dữ liệu là khác nhau. Để làm điều đó, ta sử dụng tham số URL của React Router.

Trước tiên hãy xem một ví dụ, sau đó ta sẽ phân tích cách nó hoạt động:

```
<Route path="/products/:id" element={<Product />}>
</Route>
```

Để ý đường dẫn được định nghĩa là `/products/:id`. `:id` là trình giữ chỗ cho một giá trị 

Dấu hai chấm (`:`) thông báo cho React Router biết rằng chúng ta không tìm kiếm `:id` chính xác mà là tìm kiếm bất kỳ văn bản nào xuất hiện sau `/products/`. Ví dụ, các route sau sẽ khớp với đường dẫn `/products/:id:`

- `/products/1 => :id` là 1
- `/products/2 => :id` là 2
- `/products/30 => :id` là 30
- `/products/abc => :id` là abc

Tất cả các route này sẽ hiển thị component `<Product />`.

### Lưu ý

- React Router sẽ nhận biết được bất kỳ chuỗi nào xuất hiện sau `/products/`, không chỉ giới hạn ở `id` (số).
- Điều này cho phép bạn tạo một trang hiển thị chi tiết của sản phẩm.

### Tóm lại

- Tham số URL cho phép bạn hiển thị trang động cho một thực thể cụ thể trong ứng dụng. Trang này sẽ nhận một tham số được truyền qua đường dẫn, chẳng hạn như `id`.
- Cú pháp mô tả các tham số URL trong React Router là dấu hai chấm. Ví dụ: :id hoặc :name.

*Bài tiếp theo [RS117 Hook UseParams](/lesson/session/session_117_router_useparams.md)*