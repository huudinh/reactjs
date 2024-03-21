![Create-HTML-1](images/react-router.png) 

# RS117 Hook UseParams

### Trích xuất tham số

Trong bài học trước, chúng ta đã định nghĩa một route nhận một tham số URL và hiển thị component tương ứng, ví dụ như component `<Product />`.

Nhưng làm thế nào component Product có thể biết tham số URL đó là gì?

Cho route sau:

```
<Route path="/products/:id" element={<Product />}>
</Route>
```

Trong component `<Product />`, bạn có thể trích xuất tham số `:id` từ URL bằng cách sử dụng hook `useParams()`.

### useParams()

Hook useParams là một hook mà chúng ta cần thêm từ "react-router-dom". Hook này trả về một đối tượng chứa tất cả các tham số URL từ URL:

```
// Product.js
import {useParams} from "react-router-dom";

function Product() {
  const params = useParams();
  console.log(params); // object containing params

  return <h2>Product</h2>;
}
```

Bắt đầu bằng việc thêm `useParams` dưới dạng named import từ react-router-dom. Sau đó, bạn gọi hook đó ở đầu component với `const params = useParams()`.

Nó luôn trả về một đối tượng chứa tất cả các tham số URL từ URL. Sử dụng ví dụ hiện tại, giả sử người dùng truy cập trang: /products/10, khi đó đối tượng params sẽ chứa:

```
{
    id: "10"
}
```

Điều này có nghĩa là nếu chúng ta muốn lấy id của sản phẩm từ URL, chúng ta sẽ truy cập `params.id`.

### Giá trị tham số URL luôn là chuỗi

Một điều quan trọng cần lưu ý là giá trị của các tham số URL luôn là chuỗi. Điều đó là bởi vì chúng được viết trong URL và URL là một chuỗi. Vì vậy, nếu bạn viết một số hoặc giá trị boolean (true hoặc false), bạn sẽ nhận được chúng dưới dạng chuỗi.

Nếu bạn cần chuyển đổi id thành số, bạn có thể làm như sau:

```
// Product.js
import {useParams} from "react-router-dom";

function Product() {
  const params = useParams();
  // https://codetogo.io/how-to-convert-string-to-number-in-javascript/
  const id = Number.parseInt(params.id, 10);

  return <h2>Product</h2>;
}
```

### Nhiều tham số URL 

Cho đến nay, tất cả các ví dụ chỉ có một tham số URL. Tuy nhiên, bạn có thể sử dụng nhiều hơn một tham số URL. Hãy xem một ví dụ:

```
<Route path="/products/:type/:id" element={<Product />}>
</Route>
```

Giả sử người dùng truy cập URL sau: /products/food/42, tham số :type tương ứng với "food" và tham số :id tương ứng với "42".

Chúng ta có thể cập nhật component để đọc cả hai tham số vì hook useParams() trả về một đối tượng chứa tất cả các tham số URL này:

```
// Product.js
import {useParams} from "react-router-dom";

function Product() {
  const params = useParams();
  const id = params.id; // "42"
  const type = params.type; // "food"

  return <h2>Product</h2>;
}
```

### Tóm lại

- Hook useParams() cho phép chúng ta trích xuất các tham số từ URL.
- Bạn phải thêm hook useParams dưới dạng named import từ react-router-dom.
- Hook useParams() luôn trả về một đối tượng chứa các tham số URL dưới dạng cặp key/value.
- Giá trị của các tham số URL luôn là chuỗi vì chúng được trích xuất từ URL.

*Bài tiếp theo [RS118 Nested routes](/lesson/session/session_118_router_nested.md)*